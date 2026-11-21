import fs from 'node:fs';
import path from 'node:path';

function getAllSourceFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllSourceFiles(full, fileList);
    } else if (/\.(tsx|ts|html)$/.test(entry.name)) {
      fileList.push(full);
    }
  }
  return fileList;
}

const files = getAllSourceFiles(path.resolve('src'));
files.push(path.resolve('index.html'));

let modifiedFilesCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // 1. Replace bg-teal-500 text-[#08221E] or text-white with bg-teal-600 text-white
  content = content.replace(/bg-teal-500(\s+hover:bg-teal-[0-9]+)?\s+text-\[#08221E\]/g, 'bg-teal-600 hover:bg-teal-700 text-white');
  content = content.replace(/bg-teal-500\s+text-\[#08221E\]/g, 'bg-teal-600 text-white');
  content = content.replace(/bg-teal-500\s+hover:bg-teal-600\s+text-white/g, 'bg-teal-600 hover:bg-teal-700 text-white');
  content = content.replace(/bg-teal-500\s+text-white/g, 'bg-teal-600 text-white');
  content = content.replace(/shadow-teal-500\//g, 'shadow-teal-600/');

  // 2. Step numbers text-teal-500/30 -> text-slate-300
  content = content.replace(/text-teal-500\/30/g, 'text-slate-300');

  // 3. Any selection bg-teal-500 in body
  content = content.replace(/selection:bg-teal-500/g, 'selection:bg-teal-600');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedFilesCount++;
    console.log(`Updated contrast & palette in: ${path.relative('.', file)}`);
  }
}

console.log(`Done! Modified ${modifiedFilesCount} files.`);
