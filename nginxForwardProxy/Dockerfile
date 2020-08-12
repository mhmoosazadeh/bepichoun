FROM alpine:edge
RUN apk add --no-cache py3-pip nginx nginx-mod-stream --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing/
RUN sh -c 'mkdir -p /run/openrc/ && mkdir -p /run/nginx'
RUN pip3 install --no-cache-dir dnslib
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
