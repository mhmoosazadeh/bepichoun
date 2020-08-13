# Bepichoun

Bepichoun contains two services:

1- `dnsServer` is a simple DNS server written with javascript. This service returns the `DNS_SERVER_PUBLIC_IP` for every domain record in the `dnsServer/domains` file, and query DNS for all other domains from `DNS_UPSTREAM`. (By default 1.1.1.1)

2- `nginxForwardProxy` Forward proxy for all HTTP and HTTPS requests.

## Requirements

- Docker

- Docker Compose

## Run with docker-compose

1- Set `DNS_SERVER_PUBLIC_IP` variable in `.env`

2- Run `docker-compose up -d --build`

## Modify domains

1- Edit `dnsServer/domains` file

2- Rebuild docker images and recreate your containers. (`docker-compose up -d --build`)
