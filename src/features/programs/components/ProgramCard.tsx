import { cn } from "../../../lib/utils";

interface ProgramCardProps {
  name: string;
  category: string;
  participants: number;
  status: "Active" | "Warning" | "Planning" | "Completed";
  progress: number;
  leadTeacher: string;
  startDate: string;
  endDate: string;
  onClick?: () => void;
}

export const ProgramCard = ({
  name,
  category,
  participants,
  status,
  progress,
  leadTeacher,
  startDate,
  endDate,
  onClick,
}: ProgramCardProps) => {
  const statusStyles = {
    Active: "bg-primary text-secondary",
    Warning: "bg-red-500 text-white",
    Planning: "bg-blue-500 text-white",
    Completed: "bg-secondary/5 text-secondary border border-secondary/20",
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm shadow-slate-100/30 hover:shadow-md transition-all cursor-pointer group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-widest font-black text-slate-400">
            {category}
          </span>
          <h3 className="text-[16px] font-semibold text-secondary group-hover:text-black transition-colors">
            {name}
          </h3>
        </div>
        <span
          className={cn(
            "px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
            statusStyles[status],
          )}
        >
          {status}
        </span>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="size-7 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center overflow-hidden"
            >
              <img
                src={`https://i.pravatar.cc/150?u=${name}${i}`}
                alt="avatar"
                className="size-full object-cover"
              />
            </div>
          ))}
          <div className="size-7 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-bold text-secondary">
            +{participants - 3}
          </div>
        </div>
        <span className="text-[11px] font-semibold text-slate-400">
          Enrolled
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-slate-300">
            person
          </span>
          <p className="text-[11px] font-medium text-slate-500">
            Lead:{" "}
            <span className="text-secondary font-bold">{leadTeacher}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-slate-300">
            calendar_today
          </span>
          <p className="text-[11px] font-medium text-slate-500">
            {startDate} - {endDate}
          </p>
        </div>

        <div className="pt-2">
          <div className="flex justify-between items-end mb-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Program Progress
            </span>
            <span className="text-xs font-black text-secondary">
              {progress}%
            </span>
          </div>
          <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
