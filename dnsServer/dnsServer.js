const dns = require('native-dns');
const fs = require('fs');
const path = process.cwd();
const domains = fs.readFileSync(path + "/domains").toString();

const checkAddressInDomains = (address) => {
    const domainsArray = domains.split('\n');
    const exists = domainsArray.reduce((pre, domainRaw) => {
        let domain = domainRaw;
        if (domain.charAt(0) === '.') {
            domain = domain.substr(1);
        }
        const ex = new RegExp(domain + "$").test(address)
        if (ex) {
            return true
        }
        return pre
    }, false)
    return exists
}

const start = async (host, port, ip, upstream) => {
    const server = dns.createServer();
    server.on('listening', () => console.log('server listening on', server.address()));
    server.on('close', () => console.log('server closed', server.address()));
    server.on('error', (err, buff, req, res) => console.error(err.stack));
    server.on('socketError', (err, socket) => console.error(err));
    server.on('request', (request, response) => {
        if (checkAddressInDomains(request.question[0].name)) {
            response.answer.push(dns.A({
                name: request.question[0].name,
                address: ip,
                ttl: 600,
            }));
            response.send();
        } else {
            var question = dns.Question({
                name: request.question[0].name,
                type: 'A',
            });
            var req = dns.Request({
                question: question,
                server: {address: upstream, port: 53, type: 'udp'},
                timeout: 1000,
            });
            req.on('timeout', function () {
                console.log('Timeout in making request');
            });
            req.on('message', function (err, answer) {
                answer.answer.forEach((a) => {
                    response.answer.push(a);
                });
                response.send();
            });
            req.on('end', function () {
            });
            req.send();
        }
    })
    server.serve(port, host);
}

module.exports = start