// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { existsSync } from 'node:fs';

// El config se evalúa antes de que Astro lea .env; las variables ya definidas (p. ej. en Docker) tienen prioridad.
if (existsSync('.env')) process.loadEnvFile('.env');

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://agentedigital.pe',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/gracias'),
    }),
  ],
  env: {
    schema: {
      PUBLIC_SITE_URL: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_WHATSAPP_NUMBER: envField.string({ context: 'client', access: 'public', default: '51999999999' }),
      PUBLIC_API_URL: envField.string({ context: 'client', access: 'public', default: '' }),
      PUBLIC_GA_ID: envField.string({ context: 'client', access: 'public', optional: true }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      // En desarrollo la API NestJS corre en :3000; en producción nginx hace este mismo proxy.
      proxy: { '/api': 'http://localhost:3000' },
    },
  },
});
