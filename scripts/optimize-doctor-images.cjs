const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = 'public/images/doctors';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp') && !f.includes('-400') && !f.includes('-opt'));

async function run() {
  console.log(`Optimizing ${files.length} doctor images...`);
  let totalSaved = 0;
  for (const f of files) {
    const full = path.join(dir, f);
    const buf = fs.readFileSync(full);
    const origSize = buf.length;
    try {
      const out = await sharp(buf)
        .resize(360, 420, { fit: 'cover', position: 'top', withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toBuffer();

      if (out.length < origSize) {
        fs.writeFileSync(full, out);
        totalSaved += (origSize - out.length);
        console.log(`✓ ${f}: ${(origSize / 1024).toFixed(1)} KB -> ${(out.length / 1024).toFixed(1)} KB (-${((1 - out.length / origSize) * 100).toFixed(0)}%)`);
      } else {
        console.log(`- ${f}: already optimal (${(origSize / 1024).toFixed(1)} KB)`);
      }
    } catch (e) {
      console.error(`Error on ${f}:`, e.message);
    }
  }
  console.log(`Doctor images optimization pass done! Total saved: ${(totalSaved / 1024).toFixed(1)} KB`);
}

run();
