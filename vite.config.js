import { resolve } from 'path';
import { defineConfig } from 'vite';
import { glob } from 'glob';

const htmlFiles = glob.sync('*.html');
const input = htmlFiles.reduce((acc, file) => {
  const name = file.slice(0, file.indexOf('.html'));
  acc[name] = resolve(__dirname, file);
  return acc;
}, {});

export default defineConfig({
  base: '/medieval-times/', 
  
  build: {
    rollupOptions: {
      input: input,
    },
  },
});