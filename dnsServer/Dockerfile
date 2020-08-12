ARG PORT
FROM node:12.18.2-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm audit fix
EXPOSE $PORT
CMD [ "npm", "run", "start" ]
