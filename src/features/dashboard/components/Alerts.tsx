import { cn } from "../../../lib/utils";

const AlertItem = ({
  type,
  title,
  message,
  time,
}: {
  type: "urgent" | "notice" | "info";
  title: string;
  message: string;
  time: string;
}) => {
  return (
    <div className="flex gap-3 py-3 border-b border-slate-50 last:border-0 group cursor-pointer hover:bg-slate-50/50 -mx-1 px-1 rounded-xl transition-colors">
      <div className={cn(
        "w-1.5 rounded-full shrink-0 mt-1",
        type === "urgent" && "bg-rose-400",
        type === "notice" && "bg-amber-400",
        type === "info" && "bg-slate-300"
      )} style={{ height: "32px" }} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <p className="text-[13px] font-medium text-secondary truncate">{title}</p>
          <span className="text-[10px] text-slate-300 font-medium shrink-0">{time}</span>
        </div>
        <p className="text-[12px] text-slate-400 leading-relaxed line-clamp-2">
          {message}
        </p>
      </div>
    </div>
  );
};

export const AlertsSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn("bg-white border border-slate-50 shadow-sm shadow-slate-100 rounded-3xl p-7 flex flex-col h-full", className)}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-secondary text-[17px] font-semibold tracking-tight">Notifications</h3>
        <button className="text-[12px] text-slate-400 font-bold hover:text-primary transition-colors ">
          View All
        </button>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto pr-2 space-y-2 relative">
        <AlertItem
          type="urgent"
          title="Attendance Drop — Grade 10B"
          message="22% drop in morning attendance today. Requires immediate review."
          time="10m"
        />
        <AlertItem
          type="notice"
          title="Math Scores Declining"
          message="Grade 12 Math scores decreased by 4% this semester."
          time="2h"
        />
        <AlertItem
          type="info"
          title="PTA Meeting Reminder"
          message="Annual PTA meeting scheduled for next Monday at 10:00 AM."
          time="5h"
        />
        <AlertItem
          type="notice"
          title="3 Missing Substitute Teachers"
          message="Upcoming substitute classes lack registered supervisors."
          time="1d"
        />
        <AlertItem
          type="info"
          title="Campus Security Update"
          message="Enhanced monitoring protocols implemented in the north wing starting Monday."
          time="2d"
        />
      </div>
    </div>
  );
};
