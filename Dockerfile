# 1. Deps Stage
FROM node:24-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# 2. Builder Stage
FROM node:24-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npx prisma generate
RUN npm run build

# 3. Runner Stage
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
EXPOSE 3000
EXPOSE 5555

RUN apk add --no-cache supervisor

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/websocket ./websocket
COPY --from=builder /app/server.ts ./server.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/src/lib ./src/lib
COPY --from=builder /app/Daemon ./Daemon
COPY --from=builder /app/package.json ./package.json

# Copy runtime node_modules (prisma, next, ws, jose, bcrypt, tsx, etc.)
COPY --from=builder /app/node_modules ./node_modules

# Regenerate Prisma client for runtime
RUN npx prisma generate

CMD ["supervisord", "-c", "/app/Daemon/supervisord.conf"]
