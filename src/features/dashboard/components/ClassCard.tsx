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
        "bg-white border border-slate-200 rounded-[24px] p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[220px]",
        !onClick && "cursor-default group-hover:border-slate-200"
      )}
    >
      <div className="flex justify-between items-start mb-6 w-full">
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-bold text-slate-300 uppercase tracking-[0.2em] leading-none">
            {grade}
          </span>
          <span className="text-[20px] font-bold text-secondary tracking-tight group-hover:text-primary transition-colors">
            Section {section}
          </span>
        </div>
        <span
          className={cn(
            "inline-flex items-center px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-colors",
            statusType === "normal" && "bg-emerald-50 text-emerald-600 border-emerald-100",
            statusType === "attention" && "bg-amber-50 text-amber-600 border-amber-100",
            statusType === "risk" && "bg-rose-50 text-rose-600 border-rose-100",
          )}
        >
          {status}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between pb-4 border-b border-slate-50 gap-4">
          <div className="flex flex-col gap-0.5">
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Teacher</p>
            <p className="text-[14px] font-semibold text-secondary truncate max-w-[120px]">{teacher}</p>
          </div>
          <div className="flex flex-col gap-0.5 text-right">
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Students</p>
            <p className="text-[14px] font-semibold text-secondary">{students}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Participation</span>
            <span className={cn(
              "text-[14px] font-bold transition-colors",
              participation < 70 ? "text-rose-500" : "text-emerald-500"
            )}>{participation}%</span>
          </div>
          <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden p-0.5 border border-slate-100">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-1000 ease-out",
                participation < 70 ? "bg-rose-400" : "bg-primary",
              )}
              style={{ width: `${participation}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
