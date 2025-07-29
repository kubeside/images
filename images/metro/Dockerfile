FROM node:18
WORKDIR metro/
COPY ./package* ./
RUN npm i
COPY . ./
CMD ["node", "index.js"]
