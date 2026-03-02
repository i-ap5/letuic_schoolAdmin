const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      if (!dirPath.includes('node_modules')) walk(dirPath, callback);
    } else {
      if (dirPath.endsWith('.tsx') || dirPath.endsWith('.ts')) callback(dirPath);
    }
  });
}

walk('./src/features', (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // table headers
  content = content.replace(/className="px-6 py-4 text-\[10px\] font-black text-slate-300 uppercase tracking-widest/g, 'className="px-6 py-4 text-xs font-semibold text-slate-500');
  content = content.replace(/className="px-6 py-4 text-\[11px\] font-semibold uppercase tracking-wider text-slate-400"/g, 'className="px-6 py-4 text-xs font-semibold text-slate-500"');
  content = content.replace(/<thead className="bg-slate-[a-z0-9\/\-]+ border-b border-slate-[0-9]+"/g, '<thead className="bg-white border-b border-slate-100"');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed table headers in ${filePath}`);
  }
});
