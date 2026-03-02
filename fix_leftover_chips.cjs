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

    // Let's standardise the rounding for all `px-X py-X ... capitalize` or `... uppercase` things that are clearly chips
    modified = modified.replace(/px-2 py-0\.5 rounded text-xs/g, 'px-3 py-1 rounded-full text-xs');
    modified = modified.replace(/px-2 py-1 rounded text-xs/g, 'px-3 py-1 rounded-full text-xs');
    modified = modified.replace(/px-2 py-0\.5 rounded-md/g, 'px-3 py-1 rounded-full');
    modified = modified.replace(/px-2 py-1 rounded-md/g, 'px-3 py-1 rounded-full');

    modified = modified.replace(/px-2 py-0\.5 bg-primary text-secondary text-xs font-medium rounded capitalize border border-slate-100/g, 'px-3 py-1 bg-emerald-500/10 text-emerald-700 text-xs font-medium rounded-full border border-emerald-500 capitalize');
    modified = modified.replace(/bg-secondary\/10 text-secondary border border-secondary px-2 py-1 rounded/g, 'bg-emerald-500/10 text-emerald-700 border border-emerald-500 px-3 py-1 rounded-full');

    // Let's sweep bad old mappings from remaining files like ClassCard and ProgramsTable that weren't caught
    // In ProgramsTable:
    modified = modified.replace(/bg-blue-50 text-blue-600 border-blue-100/g, 'bg-emerald-500/10 text-emerald-700 border border-emerald-500');
    modified = modified.replace(/bg-violet-50 text-violet-600 border-violet-100/g, 'bg-amber-500/10 text-amber-700 border border-amber-500');
    modified = modified.replace(/bg-rose-50 text-rose-600 border-rose-100/g, 'bg-red-500/10 text-red-700 border border-red-500');

    // ClassCard map:
    modified = modified.replace(/"bg-rose-500\/10 text-rose-700 border border-rose-500"/g, '"bg-red-500/10 text-red-700 border border-red-500"'); // unify to red
    // ClassCard old format
    modified = modified.replace(/statusType === "risk" && "bg-rose-50 text-rose-600"/g, 'statusType === "risk" && "bg-red-500/10 text-red-700 border border-red-500"');
    modified = modified.replace(/statusType === "attention" && "bg-amber-50 text-amber-600"/g, 'statusType === "attention" && "bg-amber-500/10 text-amber-700 border border-amber-500"');
    modified = modified.replace(/statusType === "normal" && "bg-emerald-50 text-emerald-600"/g, 'statusType === "normal" && "bg-emerald-500/10 text-emerald-700 border border-emerald-500"');
    modified = modified.replace(/px-2 py-0\.5 rounded-md border capitalize/g, 'px-3 py-1 rounded-full border capitalize');

    return modified;
};

walk('./src/features', (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = updateStyles(content);
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated missing chip stuff in ${filePath}`);
    }
});
