const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (!dirPath.includes('node_modules')) walk(dirPath, callback);
    } else {
      if (dirPath.endsWith('.tsx') || dirPath.endsWith('.ts')) callback(dirPath);
    }
  });
}

walk('./src/features', (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Modernize chip padding and rounding
  // Many chips use: px-2 py-0.5 rounded
  content = content.replace(/px-2 py-0\.5 rounded(?!-)/g, 'px-2.5 py-0.5 rounded-full');
  content = content.replace(/px-2 bg-primary\/10 rounded text-\[9px\]/g, 'px-2.5 rounded-full text-[9px] bg-primary/10');
  content = content.replace(/rounded text-\[10px\]/g, 'rounded-full text-[10px]');
  content = content.replace(/rounded bg-/g, 'rounded-full bg-');
  content = content.replace(/rounded-md/g, 'rounded-full');

  // Extra replacements targeted at specific status patterns:
  content = content.replace(/inline-flex items-center px-2 py-0\.5 rounded(?!-)/g, 'inline-flex items-center px-2.5 py-0.5 rounded-full');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated chips in ${filePath}`);
  }
});
