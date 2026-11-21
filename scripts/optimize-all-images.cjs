const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeFolder(dir, maxWidth, quality) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp') && !f.includes('-400') && !f.includes('-opt'));
  console.log(`Optimizing ${files.length} images in ${dir}...`);
  for (const f of files) {
    const fullPath = path.join(dir, f);
    try {
      const inputBuf = fs.readFileSync(fullPath);
      const origSize = inputBuf.length;
      
      const outBuf = await sharp(inputBuf)
        .resize(maxWidth, null, { withoutEnlargement: true })
        .webp({ quality, effort: 6 })
        .toBuffer();

      if (outBuf.length < origSize) {
        fs.writeFileSync(fullPath, outBuf);
        console.log(`✓ ${f}: ${(origSize / 1024).toFixed(1)} KB -> ${(outBuf.length / 1024).toFixed(1)} KB (-${((1 - outBuf.length / origSize) * 100).toFixed(0)}%)`);
      } else {
        console.log(`- ${f}: already optimal (${(origSize / 1024).toFixed(1)} KB)`);
      }
    } catch (err) {
      console.error(`Error optimizing ${f}:`, err.message);
    }
  }
}

async function main() {
  await optimizeFolder('public/images', 750, 76);
  await optimizeFolder('public/images/hospitals', 750, 76);
  // Clean up any test file
  if (fs.existsSync('public/images/kidney-urology-opt.webp')) {
    fs.unlinkSync('public/images/kidney-urology-opt.webp');
  }
  console.log('Image optimization pass complete!');
}

main();
