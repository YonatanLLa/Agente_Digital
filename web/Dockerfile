# Etapa 1: build estático con Astro
FROM node:22-alpine AS build
WORKDIR /app
RUN npm install -g pnpm@11.1.2

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Las variables PUBLIC_* quedan escritas en el HTML/JS durante el build.
ARG PUBLIC_SITE_URL
ARG PUBLIC_WHATSAPP_NUMBER
ARG PUBLIC_API_URL=""
ARG PUBLIC_GA_ID=""
ENV PUBLIC_SITE_URL=$PUBLIC_SITE_URL \
    PUBLIC_WHATSAPP_NUMBER=$PUBLIC_WHATSAPP_NUMBER \
    PUBLIC_API_URL=$PUBLIC_API_URL \
    PUBLIC_GA_ID=$PUBLIC_GA_ID

COPY . .
RUN pnpm build

# Etapa 2: nginx sirve dist/ y hace de proxy a la API
FROM nginx:stable-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -q --spider http://127.0.0.1/ || exit 1
