FROM node:14

WORKDIR /app

ARG API_SITE_URL

COPY package.json yarn.lock /app/
RUN yarn

COPY . /app
RUN yarn build

CMD yarn start
