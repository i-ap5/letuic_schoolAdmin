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

    // ONLY target specific string patterns we know are bad chips
    modified = modified.replace(/px-2 py-0\.5 rounded text-xs/g, 'px-3 py-1 rounded-full text-xs');
    modified = modified.replace(/px-2 py-1 rounded text-xs/g, 'px-3 py-1 rounded-full text-xs');
    modified = modified.replace(/px-2 py-0\.5 rounded-md/g, 'px-3 py-1 rounded-full');
    modified = modified.replace(/px-2 py-1 rounded-md/g, 'px-3 py-1 rounded-full');

    modified = modified.replace(/px-2 py-0\.5 bg-primary text-secondary text-xs font-medium rounded capitalize border border-slate-100/g, 'px-3 py-1 bg-emerald-500/10 text-emerald-700 text-xs font-medium rounded-full border border-emerald-500 capitalize');
    modified = modified.replace(/bg-secondary\/10 text-secondary border border-secondary px-2 py-1 rounded/g, 'bg-emerald-500/10 text-emerald-700 border border-emerald-500 px-3 py-1 rounded-full');

    modified = modified.replace(/"text-\[8px\] font-black capitalize px-2 py-0\.5 rounded-full border"/g, '"text-xs font-medium capitalize px-3 py-1 rounded-full border"');
    modified = modified.replace(/"text-\[10px\] font-medium px-3 py-1 rounded-full border capitalize shrink-0"/g, '"text-xs font-medium px-3 py-1 rounded-full border capitalize shrink-0"');

    modified = modified.replace(/"text-xs font-medium capitalize px-2 py-0\.5 rounded border"/g, '"text-xs font-medium capitalize px-3 py-1 rounded-full border"');
    modified = modified.replace(/"inline-flex items-center px-2 py-0\.5 rounded text-xs font-medium capitalize border"/g, '"inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize border"');
    modified = modified.replace(/"inline-flex items-center px-2 py-1 rounded text-xs font-medium capitalize border"/g, '"inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize border"');
    modified = modified.replace(/"px-2 py-0\.5 rounded text-xs font-medium capitalize border"/g, '"px-3 py-1 rounded-full text-xs font-medium capitalize border"');
    modified = modified.replace(/"text-xs font-medium px-1\.5 py-0\.5 rounded capitalize border"/g, '"text-xs font-medium px-3 py-1 rounded-full capitalize border"');

    // Let's replace specifically in `src/features/dashboard/components/ProgramsTable.tsx`
    modified = modified.replace(/typeColors\[event\.type\] \|\| "bg-slate-500\/10 text-slate-700 border border-slate-500 border-slate-200"/g, 'typeColors[event.type] || "bg-slate-500/10 text-slate-700 border border-slate-500"');

    // Examining `src/features/curriculum/pages/CurriculumPage.tsx`
    modified = modified.replace(/classItem\.status === "On Track"\n\s*\?\s*"bg-emerald-500 text-white border-emerald-600"/g, 'classItem.status === "On Track"\n                                ? "bg-emerald-500/10 text-emerald-700 border border-emerald-500"');

    // ParticipationOverview
    modified = modified.replace(/"text-\[11px\] font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full"/g, '"text-xs font-medium text-emerald-700 bg-emerald-500/10 border border-emerald-500 px-3 py-1 rounded-full capitalize"');
    modified = modified.replace(/"text-\[11px\] font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-2\.5 py-1 rounded-xl"/g, '"text-xs font-medium text-emerald-700 bg-emerald-500/10 border border-emerald-500 px-3 py-1 rounded-full capitalize"');

    // Driver Profile
    modified = modified.replace(/"px-3 py-1 bg-primary text-secondary text-xs font-medium rounded-full capitalize border border-slate-100"/g, '"px-3 py-1 bg-emerald-500/10 text-emerald-700 text-xs font-medium rounded-full border border-emerald-500 capitalize"');

    // Transportation driver card
    modified = modified.replace(/<span className="px-2 py-0\.5 bg-primary text-secondary text-xs font-medium rounded capitalize border border-slate-100">/g, '<span className="px-3 py-1 bg-emerald-500/10 text-emerald-700 text-xs font-medium rounded-full capitalize border border-emerald-500">');

    // Any explicit `bg-slate-500/10 text-slate-700 border border-slate-500 border border-slate-50` errors
    modified = modified.replace(/bg-slate-500\/10 text-slate-700 border border-slate-500 border border-slate-50/g, 'bg-slate-500/10 text-slate-700 border border-slate-500');

    // Communications Page
    modified = modified.replace(/status === "Draft"\n\s*\?\s*"bg-slate-500 text-white"/g, 'status === "Draft"\n                          ? "bg-slate-500/10 text-slate-700 border border-slate-500"');
    modified = modified.replace(/status === "Delivered"\n\s*\?\s*"bg-emerald-500 text-white"/g, 'status === "Delivered"\n                          ? "bg-emerald-500/10 text-emerald-700 border border-emerald-500"');
    modified = modified.replace(/status === "Urgent"\n\s*\?\s*"bg-red-500 text-white border-red-600"/g, 'status === "Urgent"\n                          ? "bg-red-500/10 text-red-700 border border-red-500"');

    return modified;
};

// Also apply to all inline objects that map statuses like:
// { status: "Active" as const }
// Oh wait, that is data, tailwind styles don't look there. We just replace class strings via regex where they are explicitly matching known styles.

walk('./src/features', (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = updateStyles(content);
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated chip in ${filePath}`);
    }
});
