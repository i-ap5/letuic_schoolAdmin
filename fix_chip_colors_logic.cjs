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

// Map logical words to correct tailwind strings
// GREEN: "completed", "active", "good", "excellent", "published", "target met", "exceeded target", "ongoing", "on route", "active ", "delivered", "present"
// YELLOW: "in progress", "pending", "warning", "reviewing", "alert", "upcoming", "planning", "draft"
// RED: "delay", "delayed", "leave", "on leave", "risk", "at risk", "below target", "absent", "error"
// DEFAULT: slate
const styles = {
    emerald: 'bg-emerald-500/10 text-emerald-700 border border-emerald-500',
    amber: 'bg-amber-500/10 text-amber-700 border border-amber-500',
    red: 'bg-red-500/10 text-red-700 border border-red-500',
    slate: 'bg-slate-500/10 text-slate-700 border border-slate-500'
};

const updateStyles = (content) => {
    let modified = content;

    // Fix staff page
    modified = modified.replace(
        /switch \(status\.toLowerCase\(\)\) \{\n\s+case "active":\n\s+return ".*";\n\s+case "on leave":\n\s+return ".*";\n\s+case "remote":\n\s+return ".*";\n\s+default:\n\s+return ".*";\n\s+\}/,
        `switch (status.toLowerCase()) {
      case "active":
        return "${styles.emerald}";
      case "on leave":
        return "${styles.red}";
      case "remote":
        return "${styles.amber}";
      default:
        return "${styles.slate}";
    }`
    );

    // Fix student page
    modified = modified.replace(
        /switch \(status\.toLowerCase\(\)\) \{\n\s+case "active":\n\s+return ".*";\n\s+case "at risk":\n\s+return ".*";\n\s+default:\n\s+return ".*";\n\s+\}/,
        `switch (status.toLowerCase()) {
      case "active":
        return "${styles.emerald}";
      case "at risk":
        return "${styles.red}";
      default:
        return "${styles.slate}";
    }`
    );

    // Fix ExaminationsPage
    modified = modified.replace(
        /switch \(status\.toLowerCase\(\)\) \{\n\s+case "completed":\n\s+return ".*";\n\s+case "in progress":\n\s+return ".*";\n\s+case "upcoming":\n\s+return ".*";\n\s+default:\n\s+return ".*";\n\s+\}/,
        `switch (status.toLowerCase()) {
      case "completed":
        return "${styles.emerald}";
      case "in progress":
        return "${styles.amber}";
      case "upcoming":
        return "${styles.amber}";
      default:
        return "${styles.slate}";
    }`
    );

    // General ternaries (e.g. status === "On Route" ? ... : status === "Delayed" ? ... : ...)
    // Replace direct class assignments for known components

    // Specific driver status
    modified = modified.replace(
        /driver\.status === "Active"\n(\s+)\? ".*"\n\s+: ".*"/,
        `driver.status === "Active"\n$1? "${styles.emerald}"\n$1: "${styles.red}"`
    );

    // Transportation bus status
    modified = modified.replace(
        /bus\.status === "On Route"\n(\s+)\? ".*"\n\s+: bus\.status === "Delayed"\n\s+\? ".*"\n\s+: ".*"/,
        `bus.status === "On Route"\n$1? "${styles.emerald}"\n$1: bus.status === "Delayed"\n$1  ? "${styles.red}"\n$1  : "${styles.amber}"`
    );

    // ExamDetailsPage subject status
    modified = modified.replace(
        /subject\.status === "Published"\n(\s+)\? ".*"\n\s+: ".*"/,
        `subject.status === "Published"\n$1? "${styles.emerald}"\n$1: "${styles.amber}"`
    );

    // Community Page active tab map
    modified = modified.replace(
        /activeTab === ".*"\n(\s+)\? "bg-secondary\/10 text-secondary border border-secondary"/g,
        `activeTab === "..."\n$1? "bg-secondary text-primary border border-slate-100"` // Actually we want to keep tab active logic generic, but chips need to be emerald
    );

    // Community PostCard
    modified = modified.replace(
        /\{status === "Alert" && \(\n\s+<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-secondary capitalize">\n\s+Alert\n\s+<\/span>/,
        `{status === "Alert" && (\n          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${styles.red} capitalize">\n            Alert\n          </span>`
    );
    modified = modified.replace(
        /\{status === "Ongoing" && \(\n\s+<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary\/10 text-secondary border border-secondary capitalize">\n\s+Ongoing\n\s+<\/span>/,
        `{status === "Ongoing" && (\n          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${styles.emerald} capitalize">\n            Ongoing\n          </span>`
    );

    // Curriculum Page
    modified = modified.replace(
        /classItem\.status === "On Track"\n(\s+)\? ".*"\n\s+: classItem\.status === "Behind"\n\s+\? ".*"\n\s+: ".*"/,
        `classItem.status === "On Track"\n$1? "${styles.emerald}"\n$1: classItem.status === "Behind"\n$1  ? "${styles.red}"\n$1  : "${styles.amber}"`
    );

    // Student Profile Page project status
    modified = modified.replace(
        /p\.status === "ONGOING"\n(\s+)\? ".*"\n\s+: ".*"/,
        `p.status === "ONGOING"\n$1? "${styles.emerald}"\n$1: "${styles.slate}"`
    );

    // Student Profile static chips
    modified = modified.replace(
        /<span className="bg-white text-red-500 text-xs font-medium px-3 py-1 rounded-full">/g,
        `<span className="${styles.red} text-xs font-medium px-3 py-1 rounded-full">`
    );


    return modified;
};

// Also apply to all inline objects that map statuses like:
// { status: "Active" as const }
// Oh wait, that is data, tailwind styles don't look there. We just replace class strings via regex where they are explicitly matching known styles.

// Let's do a blanket replace for any remaining bad colors in chips:
/*
We know the previous chip classes were:
bg-emerald-500/10 text-emerald-700 border border-emerald-500
bg-primary/10 text-secondary border border-primary -> we should turn these into emerald
bg-slate-500/10 text-slate-700 border border-slate-500
bg-red-500/10 text-red-700 border border-red-500
bg-amber-500/10 text-amber-700 border border-amber-500

What about places we missed?
*/

const applyBlanketFixes = (content) => {
    let modified = content;

    // Replace static chip assignments that say "good", "active" etc. 
    // We already replaced the helper switch statements, what else uses classes like `bg-primary/10 text-secondary border border-primary`?
    // Quick stats use `iconBg` which is fine (though we could upgrade those to match chips).

    // We'll trust the specific replacements. We can add more if needed.
    return modified;
};


walk('./src/features', (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = updateStyles(content);
    newContent = applyBlanketFixes(newContent);
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated chip logic in ${filePath}`);
    }
});
