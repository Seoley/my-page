import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://seoley.github.io',
  base: '/my-page',
  outDir: './docs',
  build: {
    assets: 'assets'
  },
  integrations: [tailwind()]
});
