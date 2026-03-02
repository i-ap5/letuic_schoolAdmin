export const ParticipationOverview = () => {
    const attendanceData = [
        { label: "Present", count: 1068, percentage: 86, color: "bg-emerald-400" },
        { label: "Absent", count: 124, percentage: 10, color: "bg-rose-400" },
        { label: "Late", count: 48, percentage: 4, color: "bg-amber-400" },
    ];

    return (
        <div className="bg-white rounded-2xl border border-slate-100 p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-secondary text-[15px] font-semibold">Today's Attendance</h3>
                    <p className="text-slate-400 text-[11px] font-medium mt-0.5">1,240 total students</p>
                </div>
                <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-xl">
                    86% Present
                </span>
            </div>

            {/* Donut visual */}
            <div className="flex items-center justify-center py-4 flex-1">
                <div className="relative">
                    <svg width="140" height="140" viewBox="0 0 140 140" className="transform -rotate-90">
                        <circle cx="70" cy="70" r="56" fill="none" stroke="#f1f5f9" strokeWidth="14" />
                        <circle cx="70" cy="70" r="56" fill="none" stroke="#34d399" strokeWidth="14"
                            strokeDasharray={`${86 * 3.52} ${(100 - 86) * 3.52}`} strokeLinecap="round" />
                        <circle cx="70" cy="70" r="56" fill="none" stroke="#fb7185" strokeWidth="14"
                            strokeDasharray={`${10 * 3.52} ${(100 - 10) * 3.52}`}
                            strokeDashoffset={`${-(86) * 3.52}`} strokeLinecap="round" />
                        <circle cx="70" cy="70" r="56" fill="none" stroke="#fbbf24" strokeWidth="14"
                            strokeDasharray={`${4 * 3.52} ${(100 - 4) * 3.52}`}
                            strokeDashoffset={`${-(86 + 10) * 3.52}`} strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-semibold text-secondary">86%</span>
                        <span className="text-[10px] text-slate-400 font-mediu  tracking-wider">Present</span>
                    </div>
                </div>
            </div>

            {/* Breakdown */}
            <div className="flex items-center justify-between w-full pt-5 border-t border-slate-50 mt-auto">
                {attendanceData.map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-1 w-full">
                        <span className="text-[18px] font-semibold text-secondary tracking-tight">{item.count}</span>

                        <div className="flex items-center gap-1.5">

                            <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                            <span className="text-[11px] font-medium text-slate-400 tracking-normal">{item.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
