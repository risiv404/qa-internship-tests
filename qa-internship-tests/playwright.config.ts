import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://cerulean-praline-8e5aa6.netlify.app',
  },
});
