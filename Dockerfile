FROM circleci/node:12.14.1

RUN mkdir -p /home/circleci/application/src
WORKDIR /home/circleci/application
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY src/ /home/circleci/application/src/

CMD ["yarn", "start"]
