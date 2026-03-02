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
  onClick,
}: ClassCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-4 bg-white border border-slate-100 rounded-2xl px-5 py-4 transition-all cursor-pointer hover:shadow-sm shadow-slate-100/30 hover:border-slate-200",
        !onClick && "cursor-default"
      )}
    >
      <div className={cn(
        "w-10 h-10 rounded-2xl flex items-center justify-center text-[13px] font-semibold shrink-0",
        statusType === "risk" && "bg-rose-50 text-rose-600",
        statusType === "attention" && "bg-amber-50 text-amber-600",
        statusType === "normal" && "bg-emerald-50 text-emerald-600",
      )}>
        {section}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-[14px] font-medium text-secondary truncate">
            {grade} – {section}
          </p>
          <span className={cn(
            "text-[10px] font-medium px-2 py-0.5 rounded-md border capitalize shrink-0",
            statusType === "risk" && "bg-rose-500/10 text-rose-700 border border-rose-500",
            statusType === "attention" && "bg-amber-500/10 text-amber-700 border border-amber-500",
            statusType === "normal" && "bg-emerald-500/10 text-emerald-700 border border-emerald-500",
          )}>
            {status}
          </span>
        </div>
        <p className="text-[12px] text-slate-400 mt-0.5">{teacher} · {students} students · {room}</p>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full",
              participation < 70 ? "bg-rose-400" : "bg-primary"
            )}
            style={{ width: `${participation}%` }}
          />
        </div>
        <span className={cn(
          "text-[12px] font-medium w-8 text-right",
          participation < 70 ? "text-rose-500" : "text-emerald-600"
        )}>
          {participation}%
        </span>
      </div>
    </div>
  );
};
