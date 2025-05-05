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

# 3. Runner Stage
FROM oven/bun:alpine AS runner
WORKDIR /app

ENV NODE_ENV production
EXPOSE 3000 7673

RUN bun add concurrently prisma

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/websocket ./websocket

CMD ["bun", "run", "concurrently", "bun ./server.js", "bun websocket/server.ts"]