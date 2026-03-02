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
    content = content.replace(/bg-emerald-50(?!0)( text-emerald-[567]00)?([^a-z])?(border-emerald-100|border border-emerald-100)?/g, 'bg-emerald-500/10 text-emerald-600 border border-emerald-200$2');

    // red / rose
    content = content.replace(/bg-red-50(?!0)( text-red-[567]00)?([^a-z])?border border-red-100/g, 'bg-red-500/10 text-red-600 border border-red-200$3');
    content = content.replace(/bg-rose-50(?!0)( text-rose-[567]00)?([^a-z])?(border-rose-100|border border-rose-100)?/g, 'bg-rose-500/10 text-rose-600 border border-rose-200$2');
    content = content.replace(/bg-red-500 text-white/g, 'bg-red-500/10 text-red-600 border border-red-200');

    // amber
    content = content.replace(/bg-amber-50(?!0)( text-amber-[567]00)?([^a-z])?(border-amber-100|border border-amber-100)?/g, 'bg-amber-500/10 text-amber-600 border border-amber-200$2');

    // slate
    content = content.replace(/bg-slate-50(?!0)( text-slate-[456]00)?([^a-z])?(border-slate-100|border border-slate-100)?/g, 'bg-slate-500/10 text-slate-500 border border-slate-200$2');
    content = content.replace(/bg-slate-100( text-slate-[456]00)?([^a-z])?(border-slate-[12]00|border border-slate-[12]00)?/g, 'bg-slate-500/10 text-slate-500 border border-slate-200$2');
    content = content.replace(/bg-slate-200 text-slate-500/g, 'bg-slate-500/10 text-slate-500 border border-slate-200');

    // Remove duplicate text and border tags due to overlapping replaces
    // (Using a simple sanitize pass for the most common tailwind class duplications)
    content = content.replace(/text-emerald-600 text-emerald-[567]00/g, 'text-emerald-600');
    content = content.replace(/text-red-600 text-red-[567]00/g, 'text-red-600');
    content = content.replace(/text-slate-500 text-slate-[456]00/g, 'text-slate-500');
    content = content.replace(/border border-emerald-200 border-emerald-100/g, 'border border-emerald-200');
    content = content.replace(/border border-slate-200 border-slate-100/g, 'border border-slate-200');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated chips in ${filePath}`);
    }
});
