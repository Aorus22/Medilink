# 1. Dependencies Stage
FROM oven/bun:alpine AS deps
WORKDIR /app

COPY package.json ./
RUN bun install --frozen-lockfile

# 2. Build Stage
FROM oven/bun:alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bunx prisma generate
RUN bun run build

# 3. Runner Stage
FROM oven/bun:alpine AS runner
WORKDIR /app

ENV NODE_ENV production
EXPOSE 3000 3001

RUN bun add concurrently
RUN bun add prisma

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/websocket ./websocket

CMD ["concurrently", "bun ./server.js", "bun websocket/server.ts"]
