import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', 
    coverage: {
      reporter: ['text', 'json', 'html'], 
      include: ['src/**/*.{ts,tsx}'],    
      exclude: ['node_modules/**'],   
    },
    watch: true, 
  },
});
