FROM alpine:latest

WORKDIR /usr/src/app

RUN apk add --no-cache nodejs npm
COPY ./mock .

CMD [ "npm", "start" ]
