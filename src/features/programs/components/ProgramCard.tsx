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
    Active: "bg-pale-lime text-dark-blue-grey",
    Warning: "bg-red-500 text-white",
    Planning: "bg-blue-500 text-white",
    Completed: "bg-dark-blue-grey text-pale-lime",
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl border border-dark-blue-grey/10 p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-widest font-black text-dark-blue-grey/40">
            {category}
          </span>
          <h3 className="text-lg font-bold text-dark-blue-grey group-hover:text-black transition-colors">
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
              className="size-7 rounded-full border-2 border-white bg-dark-blue-grey/5 flex items-center justify-center overflow-hidden"
            >
              <img
                src={`https://i.pravatar.cc/150?u=${name}${i}`}
                alt="avatar"
                className="size-full object-cover"
              />
            </div>
          ))}
          <div className="size-7 rounded-full border-2 border-white bg-pale-lime flex items-center justify-center text-[10px] font-bold text-dark-blue-grey">
            +{participants - 3}
          </div>
        </div>
        <span className="text-xs font-bold text-dark-blue-grey/40">
          Enrolled
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-dark-blue-grey/30">
            person
          </span>
          <p className="text-xs font-medium text-dark-blue-grey/60">
            Lead:{" "}
            <span className="text-dark-blue-grey font-bold">{leadTeacher}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-dark-blue-grey/30">
            calendar_today
          </span>
          <p className="text-xs font-medium text-dark-blue-grey/60">
            {startDate} - {endDate}
          </p>
        </div>

        <div className="pt-2">
          <div className="flex justify-between items-end mb-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-dark-blue-grey/40">
              Program Progress
            </span>
            <span className="text-xs font-black text-dark-blue-grey">
              {progress}%
            </span>
          </div>
          <div className="h-2 w-full bg-dark-blue-grey/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-pale-lime transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
