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

    // Replacements for getStatusStyles and inline chips

    // Active / Primary
    content = content.replace(/"bg-primary text-secondary( border-slate-100)?"/g, '"bg-primary/20 text-secondary border border-primary/30"');

    // Emerald / Success
    content = content.replace(/"bg-emerald-500 text-white"/g, '"bg-emerald-500/10 text-emerald-600 border border-emerald-200"');
    content = content.replace(/"bg-emerald-50 text-emerald-500 border-emerald-100"/g, '"bg-emerald-500/10 text-emerald-600 border border-emerald-200"');
    content = content.replace(/"bg-emerald-50 text-emerald-700 border-emerald-100"/g, '"bg-emerald-500/10 text-emerald-600 border border-emerald-200"');

    // Red / Rose / Danger
    content = content.replace(/"bg-rose-50 text-rose-500 border-rose-100"/g, '"bg-rose-500/10 text-rose-600 border border-rose-200"');
    content = content.replace(/"bg-red-50 text-red-500 border-red-100"/g, '"bg-red-500/10 text-red-600 border border-red-200"');
    content = content.replace(/"bg-red-50 text-red-700 border-red-100"/g, '"bg-red-500/10 text-red-600 border border-red-200"');

    // Amber / Warning
    content = content.replace(/"bg-amber-50 text-amber-500 border-amber-100"/g, '"bg-amber-500/10 text-amber-600 border border-amber-200"');

    // Slate / Gray / Muted / Default
    content = content.replace(/"bg-slate-200 text-slate-500"/g, '"bg-slate-500/10 text-slate-500 border border-slate-200"');
    content = content.replace(/"bg-slate-50 text-slate-500"/g, '"bg-slate-500/10 text-slate-500 border border-slate-200"');
    content = content.replace(/"bg-slate-50 text-slate-400 border-slate-100"/g, '"bg-slate-500/10 text-slate-500 border border-slate-200"');
    content = content.replace(/"bg-slate-50 text-slate-300 border-slate-50"/g, '"bg-slate-500/10 text-slate-400 border border-slate-200"');
    content = content.replace(/"bg-slate-100 text-slate-400"/g, '"bg-slate-500/10 text-slate-500 border border-slate-200"');

    // Secondary
    content = content.replace(/"bg-secondary text-primary( border-white\/10)?"/g, '"bg-secondary/5 text-secondary border border-secondary/10"');
    content = content.replace(/"bg-secondary text-white"/g, '"bg-secondary/5 text-secondary border border-secondary/10"');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated chip colors in ${filePath}`);
    }
});
