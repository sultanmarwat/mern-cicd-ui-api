# Use the official Node.js image as the base image for the frontend
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy all frontend files to the container
COPY . .

# Expose the frontend server port (change this if your app runs on a different port)
#EXPOSE 3000

# Build the React app for dev
RUN npm run build

# Install `serve` to run the application.
#RUN npm install -g serve

# Serve the built React app using a simple HTTP server
#CMD ["npx", "serve", "-s", "build"]

CMD ["npm", "start"]
#CMD serve -s build
