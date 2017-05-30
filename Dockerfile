FROM mhart/alpine-node:6.5.0

WORKDIR /opt/central-fraud-sharing
COPY src /opt/central-fraud-sharing/src
COPY migrations /opt/central-fraud-sharing/migrations
COPY config /opt/central-fraud-sharing/config
COPY package.json .npmrc /opt/central-fraud-sharing/

RUN apk add --no-cache make gcc g++ python && \
  npm install --production

EXPOSE 3000
CMD node src/server.js
