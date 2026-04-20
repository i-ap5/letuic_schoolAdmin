import { cn } from "../../../lib/utils";

interface ClassCardProps {
  grade: string;
  section: string;
  room: string;
  status: string;
  statusType: "normal" | "attention" | "risk";
  teacher: string;
  students: number;
  participation: number;
  variant?: "default" | "compact";
  onClick?: () => void;
}

export const ClassCard = ({
  grade,
  section,
  room,
  status,
  statusType,
  teacher,
  students,
  participation,
  variant = "default",
  onClick,
}: ClassCardProps) => {
  if (variant === "compact") {
    return (
      <div
        onClick={onClick}
        className={cn(
          "flex items-center gap-4 bg-white border border-slate-100 rounded-2xl p-4 transition-all cursor-pointer hover:border-primary/30 hover:shadow-sm group",
          !onClick && "cursor-default"
        )}
      >
        <div className={cn(
          "size-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0",
          statusType === "risk" ? "bg-rose-50 text-rose-600" : 
          statusType === "attention" ? "bg-amber-50 text-amber-600" : 
          "bg-slate-50 text-secondary",
        )}>
          {section}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="text-[13px] font-bold text-secondary truncate">{grade} – {section}</h4>
            <span className={cn(
              "text-[9px] font-bold px-2 py-0.5 rounded-full border",
              statusType === "risk" && "bg-rose-50 text-rose-700 border-rose-100",
              statusType === "attention" && "bg-amber-50 text-amber-700 border-amber-100",
              statusType === "normal" && "bg-emerald-50 text-emerald-700 border-emerald-100",
            )}>{status}</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5 truncate">{teacher} · {students} Students</p>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <span className={cn("text-[11px] font-bold", participation < 70 ? "text-rose-500" : "text-emerald-500")}>{participation}%</span>
          <div className="w-12 h-1 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
            <div className={cn("h-full", participation < 70 ? "bg-rose-400" : "bg-primary")} style={{ width: `${participation}%` }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-white border border-slate-100 rounded-3xl p-6 transition-all cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 hover:border-primary/20 hover:-translate-y-1 group relative overflow-hidden",
        !onClick && "cursor-default"
      )}
    >
      {/* Decorative Accent */}
      <div className={cn(
        "absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full opacity-[0.03] transition-transform duration-700 group-hover:scale-150",
        statusType === "risk" && "bg-rose-500",
        statusType === "attention" && "bg-amber-500",
        statusType === "normal" && "bg-emerald-500",
      )}></div>

      <div className="flex justify-between items-start mb-6">
        <div className={cn(
          "size-12 rounded-2xl flex items-center justify-center text-lg font-bold shadow-sm border",
          statusType === "risk" ? "bg-rose-50 text-rose-600 border-rose-100" : 
          statusType === "attention" ? "bg-amber-50 text-amber-600 border-amber-100" : 
          "bg-slate-50 text-secondary border-slate-100",
        )}>
          {section}
        </div>
        <span className={cn(
          "text-[10px] font-bold px-3 py-1.5 rounded-full border shadow-sm",
          statusType === "risk" && "bg-rose-50 text-rose-700 border-rose-100",
          statusType === "attention" && "bg-amber-50 text-amber-700 border-amber-100",
          statusType === "normal" && "bg-emerald-50 text-emerald-700 border-emerald-100",
        )}>
          {status}
        </span>
      </div>

      <div className="space-y-4 mb-8">
        <div>
          <h3 className="text-xl font-bold text-secondary tracking-tight group-hover:text-black transition-colors">{grade}</h3>
          <div className="flex items-center gap-2 mt-1.5 text-slate-400">
            <span className="material-symbols-outlined text-[16px] font-light">person</span>
            <span className="text-[13px] font-medium">{teacher}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-50">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-slate-400">
              <span className="material-symbols-outlined text-[14px]">meeting_room</span>
              <span className="text-[10px] font-bold text-slate-300">Room</span>
            </div>
            <p className="text-[12px] font-bold text-secondary truncate">{room.split('|')[0]}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-slate-400">
              <span className="material-symbols-outlined text-[14px]">groups</span>
              <span className="text-[10px] font-bold text-slate-300">Students</span>
            </div>
            <p className="text-[12px] font-bold text-secondary">{students} Enrolled</p>
          </div>
        </div>
      </div>

      <div className="space-y-2.5">
        <div className="flex justify-between items-end">
          <span className="text-[11px] font-bold text-slate-400">Participation</span>
          <span className={cn(
            "text-[13px] font-bold",
            participation < 70 ? "text-rose-500" : "text-emerald-600"
          )}>
            {participation}%
          </span>
        </div>
        <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-1000 group-hover:duration-500",
              participation < 70 ? "bg-rose-400" : "bg-primary shadow-[0_0_8px_rgba(219,232,144,0.4)]"
            )}
            style={{ width: `${participation}%` }}
          />
        </div>
      </div>
    </div>
  );
};

