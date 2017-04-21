FROM node:7.8.0
EXPOSE 4000

COPY package.json package.json  
RUN npm install

# Add your source files
COPY . .  
CMD ["npm","start"]  