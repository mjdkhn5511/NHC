import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const targetDirs = [
  path.resolve('public/images'),
  path.resolve('src/assets'),
  path.resolve('public')
];

function getAllFiles(dir, allFiles = []) {
  if (!fs.existsSync(dir)) return allFiles;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== 'dist' && entry.name !== '.git') {
        getAllFiles(fullPath, allFiles);
      }
    } else {
      allFiles.push(fullPath);
    }
  }
  return allFiles;
}

async function processImages() {
  const allFiles = [];
  for (const dir of targetDirs) {
    getAllFiles(dir, allFiles);
  }

  // Deduplicate files
  const uniqueFiles = Array.from(new Set(allFiles));
  console.log(`Scanning ${uniqueFiles.length} files...`);

  let convertedCount = 0;
  let optimizedCount = 0;

  for (const file of uniqueFiles) {
    const ext = path.extname(file).toLowerCase();
    
    // Convert PNG / JPG / JPEG to WebP
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      const parsed = path.parse(file);
      const outWebp = path.join(parsed.dir, `${parsed.name}.webp`);

      try {
        const inputBuf = fs.readFileSync(file);
        const image = sharp(inputBuf);
        const metadata = await image.metadata();

        const resized = metadata.width && metadata.width > 800
          ? sharp(inputBuf).resize({ width: 800, withoutEnlargement: true })
          : sharp(inputBuf);

        const webpBuf = await resized.webp({ quality: 80, effort: 6 }).toBuffer();
        fs.writeFileSync(outWebp, webpBuf);
        convertedCount++;
        console.log(`Converted: ${path.relative('.', file)} -> ${path.relative('.', outWebp)} (${(webpBuf.length / 1024).toFixed(1)} KB)`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err.message);
      }
    } else if (ext === '.webp') {
      // If WebP is > 100 KB, recompress/resize to max 800px
      const stats = fs.statSync(file);
      if (stats.size > 100 * 1024) {
        try {
          const inputBuf = fs.readFileSync(file);
          const image = sharp(inputBuf);
          const metadata = await image.metadata();

          const resized = metadata.width && metadata.width > 800
            ? sharp(inputBuf).resize({ width: 800, withoutEnlargement: true })
            : sharp(inputBuf);

          const webpBuf = await resized.webp({ quality: 80, effort: 6 }).toBuffer();
          if (webpBuf.length < stats.size) {
            fs.writeFileSync(file, webpBuf);
            optimizedCount++;
            console.log(`Optimized WebP: ${path.relative('.', file)} from ${(stats.size / 1024).toFixed(1)} KB to ${(webpBuf.length / 1024).toFixed(1)} KB`);
          }
        } catch (err) {
          console.error(`Error optimizing webp ${file}:`, err.message);
        }
      }
    }
  }

  console.log(`Done! Converted: ${convertedCount}, Optimized existing: ${optimizedCount}`);
}

processImages().catch(console.error);
