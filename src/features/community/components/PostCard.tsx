import { cn } from "../../../lib/utils";

interface PostCardProps {
  type: string;
  title: string;
  content: string;
  category: string;
  time: string;
  isNew?: boolean;
  status?: string;
  icon: string;
  isModerator?: boolean;
  author: {
    name: string;
    img: string;
    role: string;
  };
}

export const PostCard = ({
  type,
  title,
  content,
  category,
  time,
  isNew,
  status,
  icon,
  isModerator,
  author,
}: PostCardProps) => {
  const isSpecial = type === "Interschool";

  return (
    <article
      className={cn(
        "border border-slate-100 rounded-2xl p-6 shadow-sm shadow-slate-100/30 hover:shadow-md transition-shadow",
        isSpecial ? "bg-primary/10" : "bg-white",
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-1">
          <span
            className={cn(
              "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border w-fit",
              isSpecial
                ? "bg-primary/20 text-secondary border-primary/30"
                : "bg-slate-500/10 text-slate-600 border border-slate-500/20 border-slate-100",
            )}
          >
            {type}
          </span>
          <h2 className="text-[16px] font-semibold text-secondary mt-2 leading-tight">
            {title}
          </h2>
        </div>
        {isNew && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary text-secondary uppercase">
            New
          </span>
        )}
        {status === "Alert" && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-secondary/5 text-secondary border border-secondary/20 uppercase">
            Alert
          </span>
        )}
        {status === "Ongoing" && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-500/10 text-slate-600 border border-slate-500/20 uppercase">
            Ongoing
          </span>
        )}
        {isModerator && (
          <button className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600 transition-colors shadow-lg active:scale-95 flex items-center justify-center">
            <span className="material-symbols-outlined text-sm">delete</span>
          </button>
        )}
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div
          className="size-10 rounded-full bg-cover bg-center border border-slate-100"
          style={{ backgroundImage: `url("${author.img}")` }}
        ></div>
        <div>
          <p className="text-[13px] font-semibold text-secondary leading-tight">
            {author.name}
          </p>
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider leading-none mt-1">
            {author.role}
          </p>
        </div>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">
        {content}
      </p>
      <div
        className={cn(
          "flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t",
          isSpecial ? "border-primary/20" : "border-slate-50",
        )}
      >
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-slate-400 text-base">
            {icon}
          </span>
          <span className="text-xs font-semibold text-secondary">
            {category}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-slate-400 text-base">
            schedule
          </span>
          <span className="text-xs text-slate-500">{time}</span>
        </div>
        <div className="ml-auto">
          <button className="text-[13px] font-semibold text-secondary hover:text-slate-600 flex items-center gap-1 transition-colors">
            View Details{" "}
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};
