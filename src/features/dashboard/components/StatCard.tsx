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
    <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-dark-blue-grey/10 shadow-sm">
      <div className="flex justify-between items-start">
        <p className="text-dark-blue-grey/50 text-sm font-medium">{label}</p>
        <span className="material-symbols-outlined text-dark-blue-grey">
          {icon}
        </span>
      </div>
      <p className="text-dark-blue-grey tracking-tight text-3xl font-bold">
        {value}
      </p>
      <div className="flex items-center gap-1 mt-1">
        <span
          className={cn(
            "material-symbols-outlined text-sm",
            trendType === "stable"
              ? "text-dark-blue-grey/30"
              : "text-dark-blue-grey",
          )}
        >
          {trendType === "up"
            ? "trending_up"
            : trendType === "down"
              ? "trending_down"
              : "remove"}
        </span>
        <p
          className={cn(
            "text-xs",
            trendType === "stable"
              ? "text-dark-blue-grey/40 font-medium"
              : "text-dark-blue-grey font-bold",
          )}
        >
          {trend}
        </p>
      </div>
    </div>
  );
};
