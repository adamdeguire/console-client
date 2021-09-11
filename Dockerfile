FROM node:16.2.0-alpine

LABEL version="1.0"
LABEL description="This is the base docker image for the Console frontend react app."
LABEL maintainer = "adam.m.deguire@gmail.com"

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]