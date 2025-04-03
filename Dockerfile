FROM node:18-alpine AS builder
WORK /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html