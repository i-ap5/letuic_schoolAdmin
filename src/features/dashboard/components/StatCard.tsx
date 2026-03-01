import { cn } from "../../../lib/utils";

interface StatCardProps {
    label: string;
    value: string;
    trend: string;
    trendType: "up" | "down" | "stable";
    icon: string;
}

export const StatCard = ({
    label,
    value,
    trend,
    trendType,
    icon,
}: StatCardProps) => {
    return (
        <div className="flex flex-col gap-4 rounded-[24px] p-6 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 min-h-[140px] group">
            <div className="flex justify-between items-start">
                <div className="size-[48px] rounded-[16px] bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 text-secondary group-hover:bg-primary group-hover:text-secondary group-hover:border-primary/20 transition-all duration-300">
                    <span className="material-symbols-outlined text-[24px]">
                        {icon}
                    </span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                    <span
                        className={cn(
                            "material-symbols-outlined text-[14px]",
                            trendType === "up" ? "text-emerald-500" :
                                trendType === "down" ? "text-rose-500" : "text-slate-400"
                        )}
                    >
                        {trendType === "up"
                            ? "trending_up"
                            : trendType === "down"
                                ? "trending_down"
                                : "trending_flat"}
                    </span>
                    <p
                        className={cn(
                            "text-[12px] font-bold tracking-tight",
                            trendType === "up" ? "text-emerald-600" :
                                trendType === "down" ? "text-rose-600" : "text-slate-400"
                        )}
                    >
                        {trend}
                    </p>
                </div>
            </div>

            <div className="flex flex-col min-w-0">
                <p className="text-secondary tracking-tight text-3xl font-bold leading-none mb-1.5">
                    {value}
                </p>
                <p className="text-slate-400 text-[11px] font-bold tracking-widest uppercase truncate">
                    {label}
                </p>
            </div>
        </div>
    );
};
