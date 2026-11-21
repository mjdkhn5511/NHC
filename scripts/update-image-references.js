import fs from 'node:fs';
import path from 'node:path';

function getAllSourceFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllSourceFiles(full, fileList);
    } else if (/\.(tsx|ts|html|css)$/.test(entry.name)) {
      fileList.push(full);
    }
  }
  return fileList;
}

const files = getAllSourceFiles(path.resolve('src'));
files.push(path.resolve('index.html'));

let updatedFilesCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // Replace /images/doctors/... (.png|.jpg|.jpeg) with .webp
  content = content.replace(/(\/images\/[a-zA-Z0-9_\-\.\/ %]+)\.(png|jpg|jpeg)/gi, (match, prefix, ext) => {
    // Check if the .webp file actually exists in public
    const cleanPrefix = decodeURIComponent(prefix).replace(/^\//, '');
    const webpPath = path.resolve('public', `${cleanPrefix}.webp`);
    if (fs.existsSync(webpPath)) {
      return `${prefix}.webp`;
    }
    return match;
  });

  // Also replace hero.png if imported
  content = content.replace(/hero\.png/g, 'hero.webp');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    updatedFilesCount++;
    console.log(`Updated references in: ${path.relative('.', file)}`);
  }
}

console.log(`Updated ${updatedFilesCount} files.`);
