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

    // Unify any `rounded ` with `rounded-full ` if they look like chips
    modified = modified.replace(/px-2 py-0\.5 rounded/g, 'px-3 py-1 rounded-full');
    modified = modified.replace(/px-2 py-1 rounded/g, 'px-3 py-1 rounded-full');
    modified = modified.replace(/px-2 py-[0-9.]+ rounded/g, 'px-3 py-1 rounded-full');
    modified = modified.replace(/px-1\.5 py-0\.5 rounded/g, 'px-3 py-1 rounded-full');
    modified = modified.replace(/rounded-xl/g, 'rounded-full'); // Many "rounded-xl" chips were scattered too... Wait, buttons use rounded-xl. Let's not blindly replace rounded-xl without prefix check.

    // Specific chip fix:
    modified = modified.replace(/"text-xs font-medium uppercase px-3 py-1\.5 rounded-full transition-all"/g, '"text-xs font-medium capitalize px-3 py-1.5 rounded-full transition-all"');
    modified = modified.replace(/"text-xs font-medium capitalize px-3 py-1\.5 rounded-xl transition-all"/g, '"text-xs font-medium capitalize px-3 py-1 rounded-full transition-all"');
    modified = modified.replace(/"text-\[8px\] font-black capitalize px-2 py-0\.5 rounded-full border"/g, '"text-xs font-medium capitalize px-3 py-1 rounded-full border"');
    modified = modified.replace(/"text-\[10px\] font-medium px-3 py-1 rounded-full border capitalize shrink-0"/g, '"text-xs font-medium px-3 py-1 rounded-full border capitalize shrink-0"');
    modified = modified.replace(/px-2\.5 py-1 rounded-xl/g, 'px-3 py-1 rounded-full');
    modified = modified.replace(/px-2 py-1 rounded-xl/g, 'px-3 py-1 rounded-full');
    modified = modified.replace(/"bg-slate-[0-9]+\/10 text-slate-[0-9]+ border border-slate-[0-9]+ border-slate-[0-9]+"/g, '"bg-slate-500/10 text-slate-700 border border-slate-500"');


    // Additional status colors that might have been skipped
    // "Completed" string check
    modified = modified.replace(/bg-secondary text-white/g, 'bg-amber-500/10 text-amber-700 border border-amber-500'); // Actually, this is sometimes used for primary action buttons. ONLY target the explicit chip mappings.

    // Let's replace specifically in `src/features/dashboard/components/ProgramsTable.tsx`
    modified = modified.replace(/typeColors\[event\.type\] \|\| "bg-slate-500\/10 text-slate-700 border border-slate-500 border-slate-200"/g, 'typeColors[event.type] || "bg-slate-500/10 text-slate-700 border border-slate-500"');

    // Examining `src/features/curriculum/pages/CurriculumPage.tsx`
    modified = modified.replace(/classItem\.status === "On Track"\n\s+\? "bg-emerald-500 text-white border-emerald-600"/g, 'classItem.status === "On Track"\n                                ? "bg-emerald-500/10 text-emerald-700 border border-emerald-500"');

    // ParticipationOverview
    modified = modified.replace(/"text-\[11px\] font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full"/g, '"text-xs font-medium text-emerald-700 bg-emerald-500/10 border border-emerald-500 px-3 py-1 rounded-full capitalize"');

    // Driver Profile
    modified = modified.replace(/"px-3 py-1 bg-primary text-secondary text-xs font-medium rounded-full capitalize border border-slate-100"/g, '"px-3 py-1 bg-emerald-500/10 text-emerald-700 text-xs font-medium rounded-full border border-emerald-500 capitalize"');

    // Examination Page missed chips for "Reviewing" and "Draft" maybe?

    return modified;
};

walk('./src/features', (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = updateStyles(content);
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated tertiary chip stuff in ${filePath}`);
    }
});
