FROM node:11.4.0

WORKDIR /usr/src/

COPY package*.json ./

RUN npm install 

COPY . . 

CMD ["npm", "run", "build"]