export const ProgramsTable = () => {
    const events = [
        { name: "Regional Science Fair", date: "Mar 05", type: "Competition", teacher: "Dr. Sunitha V.", daysLeft: 4 },
        { name: "PTA General Meeting", date: "Mar 08", type: "Meeting", teacher: "Admin Office", daysLeft: 7 },
        { name: "Term 2 Examinations", date: "Mar 15", type: "Exam", teacher: "All Teachers", daysLeft: 14 },
        { name: "Inter-High Arts Expo", date: "Mar 22", type: "Event", teacher: "Ms. Amrita S.", daysLeft: 21 },
    ];

    const typeColors: Record<string, string> = {
        Competition: "bg-blue-50 text-blue-600 border-blue-100",
        Meeting: "bg-violet-50 text-violet-600 border-violet-100",
        Exam: "bg-rose-50 text-rose-600 border-rose-100",
        Event: "bg-amber-500/10 text-amber-700 border border-amber-500",
    };

    return (
        <div className="flex flex-col gap-1">
            {events.map((event, idx) => (
                <div key={idx} className="flex items-center gap-4 py-3 px-1 border-b border-slate-50 last:border-0 hover:bg-slate-50/40 rounded-xl transition-colors cursor-pointer group -mx-1">
                    {/* Column 1: Date */}
                    <div className="flex flex-col items-center justify-center w-12 shrink-0">
                        <span className="text-[10px] text-slate-400 font-medium leading-none">{event.date.split(" ")[0]}</span>
                        <span className="text-lg font-semibold text-secondary leading-none mt-1">{event.date.split(" ")[1]}</span>
                    </div>

                    <div className="h-8 w-px bg-slate-100 shrink-0" />

                    {/* Column 2: Text Content */}
                    <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-medium text-secondary truncate leading-tight group-hover:text-primary transition-colors">
                            {event.name}
                        </p>
                        <p className="text-[11px] text-slate-400 font-normal mt-1 flex items-center gap-1.5 opacity-70">
                            {event.teacher}
                        </p>
                    </div>

                    {/* Column 3: Type Pill + Days Left (Stacked) */}
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${typeColors[event.type] || "bg-slate-500/10 text-slate-700 border-slate-200"}`}>
                            {event.type}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium leading-none">
                            {event.daysLeft}d left
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};
