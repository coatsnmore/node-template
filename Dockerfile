FROM node:alpine
COPY ./package.json .
RUN npm i
COPY . .
RUN npm start