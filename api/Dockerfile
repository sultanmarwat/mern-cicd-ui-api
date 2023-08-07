# Use an official Node.js runtime as the base image
FROM node:14

## Set the working directory inside the container
WORKDIR /app

##Copy the package.json and package-lock.json to the container
COPY package*.json ./

#Install backend dependencies
RUN npm install --force

## Copy the rest of the backend files to the container
COPY . ./

# Expose the port on which the API will run
EXPOSE 5000

# Start the API server
CMD ["npm", "start"]
