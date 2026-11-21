const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function run() {
  const dir = path.resolve('public/images/hospitals');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp') && !f.includes('-400'));
  
  console.log(`Processing ${files.length} hospital images...`);
  for (const f of files) {
    const fullPath = path.join(dir, f);
    const origBuf = fs.readFileSync(fullPath);
    const origSize = origBuf.length;

    const compressed = await sharp(origBuf)
      .resize(520, null, { withoutEnlargement: true })
      .webp({ quality: 70, effort: 6 })
      .toBuffer();

    fs.writeFileSync(fullPath, compressed);
    console.log(`${f.padEnd(42)} ${(origSize / 1024).toFixed(1)} KB -> ${(compressed.length / 1024).toFixed(1)} KB (-${(((origSize - compressed.length) / origSize) * 100).toFixed(0)}%)`);
  }
  console.log('Hospital image compression complete!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
