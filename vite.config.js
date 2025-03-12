import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), svgr()],
    server: {
      headers: {
        'Content-Security-Policy': `
          default-src 'self';
          script-src 'self' 'unsafe-inline' 'unsafe-eval';
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
          img-src 'self' data:;
          connect-src 'self' http://localhost:3000 https://denis-bw.github.io https://coaching-draft-backend.onrender.com;
          font-src 'self' https://fonts.gstatic.com;
          object-src 'none';
          media-src 'self';
          frame-src 'none';
        `.replace(/\s{2,}/g, ' ').trim()
      }
    },
    resolve: {
      alias: {
        src: '/src',
        components: '/src/components',
        pages: '/src/pages',
        assets: '/src/assets'
      },
    },
    base: '/coaching-draft/',
});