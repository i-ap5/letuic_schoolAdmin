const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    let entries = fs.readdirSync(dir);
    for (let f of entries) {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            if (!dirPath.includes('node_modules')) walk(dirPath, callback);
        } else {
            if (dirPath.endsWith('.tsx') || dirPath.endsWith('.ts')) callback(dirPath);
        }
    }
}

const updateStyles = (content) => {
    let modified = content;

    // 1. Table Header Typography
    modified = modified.replace(/text-\[10px\] font-black text-slate-300 uppercase tracking-widest/g, 'text-[11px] font-bold text-slate-500 uppercase tracking-wider');
    modified = modified.replace(/text-\[10px\] font-black text-slate-400 uppercase tracking-widest/g, 'text-[11px] font-bold text-slate-500 uppercase tracking-wider');
    modified = modified.replace(/text-\[11px\] font-semibold uppercase tracking-wider text-slate-400/g, 'text-[11px] font-bold text-slate-500 uppercase tracking-wider');

    // 2. Table Header Background
    modified = modified.replace(/<thead className="bg-slate-50\/50 border-b border-slate-[0-9]+">/g, '<thead className="bg-white border-b border-slate-100">');
    modified = modified.replace(/<thead className="bg-slate-50\/50 border-b border-slate-50/g, '<thead className="bg-white border-b border-slate-100');

    // 3. Chip Paddings & Borders (Specifically targeting typical chip patterns)
    modified = modified.replace(/px-2 py-0\.5 rounded(?!-| )/g, 'px-2.5 py-0.5 rounded-full');
    modified = modified.replace(/px-2 py-1 rounded-md/g, 'px-2.5 py-1 rounded-full');
    modified = modified.replace(/px-2 py-1 rounded(?!-| )/g, 'px-2.5 py-1 rounded-full');

    // Specific fix for "inline-flex items-center px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
    modified = modified.replace(/inline-flex items-center px-2 py-1 rounded-full text-\[10px\]/g, 'inline-flex items-center px-2.5 py-1 rounded-full text-[11px]');
    modified = modified.replace(/inline-flex items-center px-2 py-0\.5 rounded-full text-\[10px\]/g, 'inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px]');

    // 4. Chip Colors (Precise matching to avoid breaking things)
    // Emerald
    modified = modified.replace(/bg-emerald-50 text-emerald-700 border-emerald-100/g, 'bg-emerald-500/15 text-emerald-700 border border-emerald-500/20');
    modified = modified.replace(/bg-emerald-50 text-emerald-500 border-emerald-100/g, 'bg-emerald-500/15 text-emerald-700 border border-emerald-500/20');
    // Red / Rose
    modified = modified.replace(/bg-red-50 text-red-700 border-red-100/g, 'bg-red-500/15 text-red-700 border border-red-500/20');
    modified = modified.replace(/bg-red-50 text-red-500 border-red-100/g, 'bg-red-500/15 text-red-700 border border-red-500/20');
    modified = modified.replace(/iconBg: "bg-red-50 text-red-500"/g, 'iconBg: "bg-red-500/15 text-red-700 border border-red-500/20"');
    modified = modified.replace(/bg-rose-50 text-rose-500 border-rose-100/g, 'bg-rose-500/15 text-rose-700 border border-rose-500/20');
    // Amber
    modified = modified.replace(/bg-amber-50 text-amber-500 border-amber-100/g, 'bg-amber-500/15 text-amber-700 border border-amber-500/20');
    // Slate (Neutral)
    modified = modified.replace(/bg-slate-50 text-slate-500/g, 'bg-slate-500/10 text-slate-600 border border-slate-500/20');
    modified = modified.replace(/bg-slate-50 text-slate-400 border-slate-100/g, 'bg-slate-500/10 text-slate-600 border border-slate-500/20');
    modified = modified.replace(/bg-slate-100 text-slate-400/g, 'bg-slate-500/10 text-slate-600 border border-slate-500/20');
    // Primary mixes
    modified = modified.replace(/bg-primary\/20 text-slate-500 border-primary\/30/g, 'bg-primary/10 text-secondary border border-primary/20');
    modified = modified.replace(/bg-secondary text-primary( border-white\/10| border-slate-100)?(.*shadow-lg)?/g, 'bg-secondary/5 text-secondary border border-secondary/20');

    return modified;
};

walk('./src/features', (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = updateStyles(content);
    if (content !== updated) {
        fs.writeFileSync(filePath, updated, 'utf8');
        console.log(`Updated tables/chips in ${filePath}`);
    }
});

let statCardPath = './src/components/StatCard.tsx';
if (fs.existsSync(statCardPath)) {
    let scContent = fs.readFileSync(statCardPath, 'utf8');
    let updatedScContent = scContent.replace(/text-\[22px\]( text-secondary)?/, 'text-[22px] text-secondary/70');
    if (updatedScContent !== scContent) {
        fs.writeFileSync(statCardPath, updatedScContent, 'utf8');
        console.log('Updated StatCard.tsx');
    }
}
