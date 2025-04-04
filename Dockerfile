# Step 1: Use an official Node.js runtime as a parent image
FROM node:23.1.0

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (or yarn.lock) into the working directory
COPY package*.json ./

# Step 4: Install project dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Build the Next.js app for production
RUN npm run build

# Step 7: Expose the port that Next.js will run on
EXPOSE 3000

# Step 8: Start the Next.js application in production mode
CMD ["npm", "start"]
