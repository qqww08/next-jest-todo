FROM node:16-alpine AS builder
# libc6-compat 필요한 이유 https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY . .

RUN yarn rebuild && yarn build

FROM node:16-alpine AS runner

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

ENV NODE_ENV production
WORKDIR /app

# builder 에서 필요한 데이터만 가지고옴
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /app/.pnp.cjs ./.pnp.cjs
COPY --from=builder /app/package.json ./package.json

RUN rm -rf /app/.yarn/unplugged && yarn rebuild
RUN chown -R nextjs:nodejs /app/.next

USER nextjs

EXPOSE 3000

CMD [ "yarn", "start" ]