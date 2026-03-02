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

    // emerald
    content = content.replace(/bg-emerald-50(?!0) text-emerald-700 border-emerald-100/g, 'bg-emerald-500/10 text-emerald-600 border-emerald-200');
    content = content.replace(/bg-emerald-50(?!0) text-emerald-500 border-emerald-100/g, 'bg-emerald-500/10 text-emerald-600 border-emerald-200');
    content = content.replace(/bg-emerald-500 text-white/g, 'bg-emerald-500/10 text-emerald-600 border border-emerald-200');

    // red / rose
    content = content.replace(/bg-red-50(?!0) text-red-700 border-red-100/g, 'bg-red-500/10 text-red-600 border-red-200');
    content = content.replace(/bg-rose-50(?!0) text-rose-500 border-rose-100/g, 'bg-rose-500/10 text-rose-600 border-rose-200');

    // amber
    content = content.replace(/bg-amber-50(?!0) text-amber-500 border-amber-100/g, 'bg-amber-500/10 text-amber-600 border-amber-200');

    // slate
    content = content.replace(/bg-slate-50(?!0) text-slate-400 border-slate-100/g, 'bg-slate-500/10 text-slate-500 border-slate-200');
    content = content.replace(/text-slate-300 border-slate-50/g, 'text-slate-500 border-slate-200');

    // primary/secondary mixes
    content = content.replace(/bg-primary\/20 text-slate-500 border-primary\/30/g, 'bg-primary/10 text-secondary border-primary/20');
    content = content.replace(/bg-primary\/20 text-secondary border border-primary\/30/g, 'bg-primary/10 text-secondary border border-primary/20');
    content = content.replace(/bg-primary\/10 text-secondary border border-primary\/20/g, 'bg-primary/20 text-secondary border-primary/30');

    // other variants
    content = content.replace(/bg-secondary text-primary border-white\/10( shadow-[^"]*)?/g, 'bg-secondary/5 text-secondary border-slate-200');
    content = content.replace(/bg-primary text-secondary border-slate-100/g, 'bg-primary/20 text-secondary border-primary/30');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated chip colors in ${filePath}`);
    }
});
