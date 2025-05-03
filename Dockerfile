# === Stage 1: Builder ===
FROM node:22-alpine AS builder
WORKDIR /app
RUN npm i -g bun
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
