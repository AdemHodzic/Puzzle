FROM node:11-alpine

WORKDIR /app
RUN apk add yarn
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 8339
RUN yarn knex migrate:latest && yarn dev
