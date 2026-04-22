import { cn } from "../lib/utils";
import { Info } from "lucide-react";

interface StatCardProps {
    label: string;
    value: string;
    trend?: string;
    trendType?: "up" | "down" | "stable";
    icon: string;
    iconBg?: string;
    tooltip?: string;
}

export const StatCard = ({
    label,
    value,
    trend,
    trendType,
    icon,
    iconBg = "bg-accent",
    tooltip,
}: StatCardProps) => {
    return (
        <div className="flex items-center gap-4 rounded-2xl px-5 py-4 bg-white border border-slate-100 hover:shadow-sm shadow-slate-100/30 transition-shadow group relative">
            <div className={cn("size-11 rounded-2xl flex items-center justify-center shrink-0 text-primary", iconBg)}>
                <span className="material-symbols-outlined text-[22px] text-secondary/70">
                    {icon}
                </span>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center gap-1">
                    <p className="text-slate-400 text-[12px] font-medium truncate">
                        {label}
                    </p>
                    {tooltip && (
                        <div className="relative group/tooltip">
                            <Info size={12} className="text-slate-300 cursor-help" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-secondary text-white text-[10px] rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">
                                {tooltip}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-secondary"></div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex items-baseline gap-2 mt-0.5">
                    <p className="text-secondary text-[22px] font-semibold leading-none tracking-tight">
                        {value}
                    </p>
                    {trend && (
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
                    )}
                </div>
            </div>
        </div>
    );
};
