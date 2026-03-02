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

const processHtmlAttributes = (content) => {
    let original = content;

    // 1. Table Header Styles
    // Instead of faint text-slate-300/400, make headers punchy: text-slate-500, font-bold, tracking-wider, text-[11px]
    content = content.replace(/text-\[10px\] font-black text-slate-300 uppercase tracking-widest/g, 'text-[11px] font-bold text-slate-500 uppercase tracking-wider');
    content = content.replace(/text-\[10px\] font-black text-slate-400 uppercase tracking-widest/g, 'text-[11px] font-bold text-slate-500 uppercase tracking-wider');
    content = content.replace(/text-\[11px\] font-semibold uppercase tracking-wider text-slate-400/g, 'text-[11px] font-bold text-slate-500 uppercase tracking-wider');

    // 2. Chip / Pill Styles
    // Update from old shape to rounded-full
    content = content.replace(/px-2 py-0\.5 rounded(?!-| )/g, 'px-2.5 py-0.5 rounded-full');
    content = content.replace(/px-2 py-1 rounded(?!-| )/g, 'px-2.5 py-1 rounded-full');
    content = content.replace(/px-2 py-1 rounded-md/g, 'px-2.5 py-1 rounded-full');
    content = content.replace(/px-3 py-1\.5 rounded-xl/g, 'px-3.5 py-1 rounded-full'); // filter chips
    content = content.replace(/inline-flex items-center px-2/g, 'inline-flex items-center px-2.5');

    // Success Variants (emerald)
    content = content.replace(/bg-emerald-50(?!0)( text-emerald-[567]00)?([^a-z])?(border-emerald-100|border border-emerald-100)?/g, 'bg-emerald-500/15 text-emerald-700 border border-emerald-500/20$2');
    content = content.replace(/bg-emerald-500 text-white/g, 'bg-emerald-500/15 text-emerald-700 border border-emerald-500/20');

    // Danger / Warning Variants (red / rose / amber)
    content = content.replace(/bg-red-50(?!0)( text-red-[567]00)?([^a-z])?(border-red-100|border border-red-100)?/g, 'bg-red-500/15 text-red-700 border border-red-500/20$2');
    content = content.replace(/bg-rose-50(?!0)( text-rose-[567]00)?([^a-z])?(border-rose-100|border border-rose-100)?/g, 'bg-rose-500/15 text-rose-700 border border-rose-500/20$2');
    content = content.replace(/bg-amber-50(?!0)( text-amber-[567]00)?([^a-z])?(border-amber-100|border border-amber-100)?/g, 'bg-amber-500/15 text-amber-700 border border-amber-500/20$2');
    content = content.replace(/bg-red-500 text-white/g, 'bg-red-500/15 text-red-700 border border-red-500/20');

    // Neutral Variants (slate)
    content = content.replace(/bg-slate-50(?!0)( text-slate-[456]00)?([^a-z])?(border-slate-100|border border-slate-100)?/g, 'bg-slate-500/10 text-slate-600 border border-slate-500/20$2');
    content = content.replace(/bg-slate-100( text-slate-[456]00)?([^a-z])?(border-slate-[12]00|border border-slate-[12]00)?/g, 'bg-slate-500/10 text-slate-600 border border-slate-500/20$2');
    content = content.replace(/bg-slate-200 text-slate-500/g, 'bg-slate-500/10 text-slate-600 border border-slate-500/20');

    // Primary / Secondary Variants
    content = content.replace(/bg-primary\/20 text-secondary( border-primary\/30)?/g, 'bg-primary/20 text-secondary border border-primary/30');
    content = content.replace(/bg-primary text-secondary( border-slate-100| border border-slate-100)?/g, 'bg-primary/20 text-secondary text-secondary/80 border border-primary/30');
    content = content.replace(/bg-secondary text-primary( border-slate-[12]00)?( shadow-lg)?/g, 'bg-secondary/5 text-secondary border border-secondary/20');
    content = content.replace(/bg-secondary text-white/g, 'bg-secondary/5 text-secondary border border-secondary/20');

    // Custom fix for icon backgrounds in dashboard
    content = content.replace(/bg-primary\/10 text-secondary border border-primary\/20/g, 'bg-primary/20 text-secondary border border-primary/30');

    return content;
};

// Process /features
walk('./src/features', (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = processHtmlAttributes(content);
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated UI styles in ${filePath}`);
    }
});

// Process StatCard in /components
const statCardPath = './src/components/StatCard.tsx';
if (fs.existsSync(statCardPath)) {
    let scContent = fs.readFileSync(statCardPath, 'utf8');
    // the icon color update inside StatCard
    scContent = scContent.replace(/text-\[22px\]( text-secondary)?/, 'text-[22px] text-secondary/70');
    fs.writeFileSync(statCardPath, scContent, 'utf8');
    console.log('Updated StatCard.tsx');
}

