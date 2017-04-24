FROM node:7.9.0-alpine
EXPOSE 4000

COPY package.json package.json  
RUN npm install

# Add your source files
COPY . .  
CMD ["npm","start"]  