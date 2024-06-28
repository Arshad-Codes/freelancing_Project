# /frontend/Dockerfile

# Use Node.js base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN yarn build

# Install serve to serve the built app
RUN yarn global add serve

# Expose the port the app runs on
EXPOSE 3000

# Command to serve the application
CMD ["yarn", "run", "dev"]
