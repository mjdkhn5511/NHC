import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

async function generateMobileImages() {
  const images = [
    // Treatments
    'public/images/kidney-urology.webp',
    'public/images/cardiology-heart.webp',
    'public/images/cancer-oncology.webp',
    'public/images/neuro-spine.webp',
    'public/images/orthopedics-joint.webp',
    'public/images/liver-transplant.webp',
    'public/images/liver-gastroenterology.webp',
    'public/images/ivf-fertility.webp',
    'public/images/cosmetic-plastic-surgery.webp',
    'public/images/dental-treatment.webp',
    'public/images/cardio.webp',
    'public/images/dental.webp',
    'public/images/ivf.webp',
    'public/images/neurology-brain.webp',
    'public/images/neurosurgery-spine.webp',
    'public/images/oncology-cancer.webp',
    'public/images/plastic-surgery.webp',
    // Hero
    'public/images/medical-tourism-hero.webp',
  ];

  // Add all hospitals
  const hospDir = path.resolve('public/images/hospitals');
  if (fs.existsSync(hospDir)) {
    fs.readdirSync(hospDir).forEach(f => {
      if (f.endsWith('.webp') && !f.includes('-400.')) {
        images.push(path.join('public/images/hospitals', f));
      }
    });
  }

  for (const imgPath of images) {
    if (!fs.existsSync(imgPath)) continue;
    const parsed = path.parse(imgPath);
    const outMobilePath = path.join(parsed.dir, `${parsed.name}-400.webp`);

    try {
      const inputBuf = fs.readFileSync(imgPath);
      const outputBuf = await sharp(inputBuf)
        .resize({ width: 450, withoutEnlargement: true })
        .webp({ quality: 75, effort: 6 })
        .toBuffer();

      fs.writeFileSync(outMobilePath, outputBuf);
      console.log(`Generated: ${path.relative('.', outMobilePath)} (${(outputBuf.length / 1024).toFixed(1)} KB) from ${(inputBuf.length / 1024).toFixed(1)} KB`);
    } catch (err) {
      console.error(`Error processing ${imgPath}:`, err.message);
    }
  }
}

generateMobileImages().catch(console.error);
