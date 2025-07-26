import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import siteConfig from './src/data/site-config';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.website,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), sitemap(), preact()],
  adapter: vercel(),
});
