import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://bidishadas.com',
  trailingSlash: 'never',

  build: {
    format: 'file',
  },

  integrations: [sitemap()],
  adapter: cloudflare()
});