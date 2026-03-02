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

  // table headers usually have tracking-wider/widest and uppercase. Let's make them less uppercase or at least lower their text-size, maybe remove bg-slate-500/10 if it exists on thead
  content = content.replace(/<thead className="bg-slate-500\/10 text-slate-500 border border-slate-200\/50 border-b border-slate-100">/g, '<thead className="bg-white border-b border-slate-100">');
  content = content.replace(/<thead className="bg-slate-50\/50 border-b border-slate-100">/g, '<thead className="bg-white border-b border-slate-100">');
  content = content.replace(/<thead className="bg-slate-50\/50 border-b border-slate-50/g, '<thead className="bg-white border-b border-slate-100');
  
  // replace uppercase text-[10px] with text-[11px] or text-xs and font-semibold without uppercase
  content = content.replace(/uppercase tracking-wider(st)? text-slate-[345]00/g, 'text-slate-500 font-medium');
  content = content.replace(/text-\[10px\] font-black uppercase /g, 'text-[11px] font-semibold text-slate-500 ');
  content = content.replace(/text-\[11px\] font-semibold uppercase /g, 'text-xs font-semibold text-slate-500 border-none ');

  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed table in ${filePath}`);
  }
});
