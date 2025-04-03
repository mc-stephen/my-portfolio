# Use the official Node.js image to build the project
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the app
COPY . .

# Build the Next.js app as a static export
RUN npm run build

# Use a lightweight web server (NGINX) to serve the static files
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static files
RUN rm -rf ./*

# Copy the generated static site from the build stage
COPY --from=builder /app/out .

# Expose port 3000 for serving the site
EXPOSE 3000

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
