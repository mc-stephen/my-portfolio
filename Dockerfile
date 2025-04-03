# Use Node.js to build the project
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the app
COPY . .

# Set Next.js to output static files properly
ENV NODE_ENV=production

# Build the Next.js static files
RUN npm run build

# Use a lightweight web server (NGINX) to serve the static files
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static files
RUN rm -rf ./*

# Copy the static output from Next.js
COPY --from=builder /app/.next/static ./static
COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next/standalone ./

# Set custom NGINX config to handle routing
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the correct port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
