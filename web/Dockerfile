FROM node:7.9.0-alpine

ARG NODE_ENV=production
ARG NODE_PORT=4000
ARG DB_HOST=db
ARG DB_USER=root
ARG DB_PASSWORD=root
ARG DB_NAME=users

ENV NODE_ENV=$NODE_ENV
ENV NODE_PORT=$NODE_PORT
ENV DB_HOST=$DB_HOST
ENV DB_USER=$DB_USER
ENV DB_PASSWORD=$DB_PASSWORD
ENV DB_NAME=$DB_NAME


# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install --production

# Bundle app source
COPY . /usr/src/app 

CMD [ "npm", "start" ]

EXPOSE $NODE_PORT