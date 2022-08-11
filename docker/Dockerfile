FROM node:16.15.1-buster
LABEL name="shinp-server"
LABEL version="1.0"
COPY . /app
WORKDIR /app
RUN npm i -g pnpm
RUN pnpm install

EXPOSE 1337

CMD pnpm start