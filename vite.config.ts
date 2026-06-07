import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

// Custom plugin to copy root 'assets' files into production 'dist/assets'
const copyRootAssetsPlugin = () => ({
  name: 'copy-root-assets',
  closeBundle() {
    const srcDir = path.resolve(__dirname, 'assets');
    const destDir = path.resolve(__dirname, 'dist/assets');
    if (fs.existsSync(srcDir)) {
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      const files = fs.readdirSync(srcDir);
      for (const file of files) {
        if (file === '.aistudio' || file.startsWith('.')) continue;
        const srcFile = path.join(srcDir, file);
        const destFile = path.join(destDir, file);
        if (fs.statSync(srcFile).isFile()) {
          fs.copyFileSync(srcFile, destFile);
        }
      }
    }
  }
});

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      copyRootAssetsPlugin()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
      configureServer: (server) => {
        // Dev server middleware to serve root assets on '/assets/*'
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith('/assets/')) {
            const cleanedUrl = req.url.split('?')[0];
            const filePath = path.join(__dirname, cleanedUrl);
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              res.setHeader('Content-Type', 'audio/mpeg');
              res.setHeader('Access-Control-Allow-Origin', '*'); // Bypass CORS
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          }
          next();
        });
      }
    },
  };
});
