import { cn } from "../../../lib/utils";

interface StatCardProps {
    label: string;
    value: string;
    trend: string;
    trendType: "up" | "down" | "stable";
    icon: string;
    iconBg?: string;
}

export const StatCard = ({
    label,
    value,
    trend,
    trendType,
    icon,
    iconBg = "bg-slate-50",
}: StatCardProps) => {
    return (
        <div className="flex items-center gap-4 rounded-2xl px-5 py-4 bg-white border border-slate-100 hover:shadow-sm transition-shadow">
            <div className={cn("size-11 rounded-xl flex items-center justify-center shrink-0", iconBg)}>
                <span className="material-symbols-outlined text-[22px] text-secondary">
                    {icon}
                </span>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
                <p className="text-slate-400 text-[11px] font-medium uppercase tracking-wider truncate">
                    {label}
                </p>
                <div className="flex items-baseline gap-2 mt-0.5">
                    <p className="text-secondary text-[22px] font-semibold leading-none tracking-tight">
                        {value}
                    </p>
                    <span
                        className={cn(
                            "text-[11px] font-medium",
                            trendType === "up" && "text-emerald-600",
                            trendType === "down" && "text-rose-500",
                            trendType === "stable" && "text-slate-400"
                        )}
                    >
                        {trend}
                    </span>
                </div>
            </div>
        </div>
    );
};
