# 1. Build Stage
FROM oven/bun:alpine AS deps
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

FROM oven/bun:alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bunx prisma generate
RUN bun run build

# 2. Runner Stage
FROM oven/bun:alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
EXPOSE 3000
EXPOSE 5555

RUN apk add --no-cache supervisor
RUN bun add @prisma/client prisma@^6.7.0

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/node_modules/next ./node_modules/next
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/websocket ./websocket
COPY --from=builder /app/server.ts ./server.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/src/lib ./src/lib
COPY Daemon ./Daemon

CMD ["supervisord", "-c", "/app/Daemon/supervisord.conf"]