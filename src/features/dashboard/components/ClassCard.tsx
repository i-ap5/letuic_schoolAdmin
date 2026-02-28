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
        "bg-white border border-dark-blue-grey/10 rounded-xl p-4 shadow-sm hover:border-dark-blue-grey transition-all",
        onClick && "cursor-pointer",
      )}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-dark-blue-grey">
            {grade} - Section {section}
          </span>
          <span className="text-xs text-dark-blue-grey/50">{room}</span>
        </div>
        <span
          className={cn(
            "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase border border-dark-blue-grey/10",
            statusType === "normal" && "bg-pale-lime text-dark-blue-grey",
            statusType === "attention" && "bg-dark-blue-grey text-white",
            statusType === "risk" && "bg-dark-blue-grey text-pale-lime",
          )}
        >
          {status}
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="text-dark-blue-grey/50">Teacher</span>
          <span className="font-semibold text-dark-blue-grey">{teacher}</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="text-dark-blue-grey/50">Students</span>
          <span className="font-semibold text-dark-blue-grey">{students}</span>
        </div>
        <div className="flex flex-col gap-1 pt-1">
          <div className="flex justify-between text-[10px] font-bold text-dark-blue-grey/30 uppercase">
            <span>Participation</span>
            <span>{participation}%</span>
          </div>
          <div className="h-1 w-full bg-dark-blue-grey/5 rounded-full">
            <div
              className={cn(
                "h-full rounded-full transition-all",
                participation < 70 ? "bg-pale-lime/60" : "bg-pale-lime",
              )}
              style={{ width: `${participation}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
