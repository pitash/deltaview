# Use Node.js LTS
FROM node:22-alpine

# Set work directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 7000

# Run app
CMD ["node", "index.js"]