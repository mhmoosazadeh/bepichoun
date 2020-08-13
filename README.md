# bepichoun

## Requirements

- Docker

- Docker Compose

## Run with docker-compose

1- Set `DNS_SERVER_PUBLIC_IP` variable in `.env`

2- Run `docker-compose up -d --build`

## Modify domains

1- edit `dnsServer/domains` file

2- Rebuild docker images and recreate your containers. (`docker-compose up -d --build`)
