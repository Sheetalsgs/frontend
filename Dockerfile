# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install
RUN rm -rf node_modules

# Copy the remaining frontend files to the container
COPY . .

# Build the production-ready frontend
RUN npm run build

# Expose the container port
EXPOSE 3000
RUN npm install http-proxy-middleware


# Start the frontend server
CMD ["npm", "start"]
