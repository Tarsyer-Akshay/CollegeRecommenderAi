# --- Stage 1: Build the React Application ---
FROM node:22-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (optimizes cache)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the app (produces the /dist or /build folder)
RUN npm run build

# --- Stage 2: Serve with Nginx ---
FROM nginx:alpine

# Copy the build output from Stage 1 to Nginx's html directory
# Note: Check your build script! If it outputs to 'build' instead of 'dist', change below.
COPY --from=build /app/dist /usr/share/nginx/html

# Copy our custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]