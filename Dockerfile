FROM node:16.2.0 AS ui-build
WORKDIR /usr/src/app
COPY . .
RUN npm install --force && npm update --force
RUN npm rebuild node-sass
RUN npm run build

EXPOSE 3080

CMD ["npm", "start"]
