FROM node:20-bullseye

WORKDIR /app

COPY index.js package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
