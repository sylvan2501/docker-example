FROM node:18
COPY package.json /app
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
CMD node app.js
EXPOSE 8007