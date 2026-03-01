import { cn } from "../../../lib/utils";

export const ProgramsTable = () => {
    const programs = [
        {
            name: "Regional Science Fair",
            phase: "Competition Phase",
            teacher: "Dr. C.V. Raman",
            status: "Active",
            progress: 75,
        },
        {
            name: "District Athletics League",
            phase: "Qualifying Round",
            teacher: "Coach Rathore",
            status: "Warning",
            progress: 42,
        },
        {
            name: "Inter-High Arts Expo",
            phase: "Setup & Registration",
            teacher: "Ms. Amrita Sher-Gil",
            status: "Planning",
            progress: 15,
        },
    ];

    return (
        <div className="bg-white rounded-[24px] border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100">
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                                Program Name
                            </th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                                Lead Teacher
                            </th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                                Status
                            </th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] text-right">
                                Progress
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {programs.map((program, idx) => (
                            <tr
                                key={idx}
                                className="hover:bg-slate-50/30 transition-colors group cursor-pointer"
                            >
                                <td className="px-6 py-5">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[15px] font-bold text-secondary group-hover:text-primary transition-colors">
                                            {program.name}
                                        </span>
                                        <span className="text-[12px] font-medium text-slate-400">
                                            {program.phase}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-5">
                                    <span className="text-[14px] font-semibold text-slate-600">
                                        {program.teacher}
                                    </span>
                                </td>
                                <td className="px-6 py-5">
                                    <span
                                        className={cn(
                                            "inline-flex items-center px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all",
                                            program.status === "Active"
                                                ? "bg-emerald-50 text-emerald-600 border-emerald-100/50"
                                                : program.status === "Warning"
                                                    ? "bg-amber-50 text-amber-600 border-amber-100/50"
                                                    : "bg-slate-50 text-slate-500 border-slate-200/50"
                                        )}
                                    >
                                        {program.status}
                                    </span>
                                </td>
                                <td className="px-6 py-5">
                                    <div className="flex items-center justify-end gap-4">
                                        <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/30">
                                            <div
                                                className={cn(
                                                    "h-full rounded-full transition-all duration-1000 ease-out",
                                                    program.progress >= 70
                                                        ? "bg-emerald-400"
                                                        : program.progress >= 40
                                                            ? "bg-amber-400"
                                                            : "bg-slate-300"
                                                )}
                                                style={{ width: `${program.progress}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-[13px] font-bold text-secondary w-8 text-right">
                                            {program.progress}%
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
