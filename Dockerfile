FROM node:lts-alpine as builder

WORKDIR /app

COPY . .
RUN npm install --ignore-scripts
ARG API_URL
RUN VITE_BACKEND=$API_URL npm run build

FROM nginx:stable-alpine

EXPOSE 80

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
