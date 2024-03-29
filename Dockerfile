FROM node:alpine
COPY ./package.json .
RUN npm i
COPY . .
ENTRYPOINT [ "npm", "start" ]