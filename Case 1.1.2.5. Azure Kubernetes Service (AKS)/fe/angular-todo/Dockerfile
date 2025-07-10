# Step 1: Build Angular App
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
ARG CONFIG=production
RUN npm run build -- --configuration=$CONFIG

# Step 2: Use Nginx to serve content
FROM nginx:stable-alpine

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build to Nginx html folder
COPY --from=builder /app/dist/angular-todo/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
