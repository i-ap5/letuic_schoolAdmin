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
        "border border-dark-blue-grey/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow",
        isSpecial ? "bg-pale-lime/10" : "bg-white",
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-1">
          <span
            className={cn(
              "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border w-fit",
              isSpecial
                ? "bg-pale-lime/20 text-dark-blue-grey border-pale-lime/30"
                : "bg-dark-blue-grey/5 text-dark-blue-grey/60 border-dark-blue-grey/10",
            )}
          >
            {type}
          </span>
          <h2 className="text-lg font-bold text-dark-blue-grey mt-2 leading-tight">
            {title}
          </h2>
        </div>
        {isNew && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold bg-pale-lime text-dark-blue-grey uppercase">
            New
          </span>
        )}
        {status === "Alert" && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold bg-dark-blue-grey text-pale-lime uppercase">
            Alert
          </span>
        )}
        {status === "Ongoing" && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold bg-dark-blue-grey/5 text-dark-blue-grey/50 uppercase">
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
          className="size-10 rounded-full bg-cover bg-center border border-dark-blue-grey/10"
          style={{ backgroundImage: `url("${author.img}")` }}
        ></div>
        <div>
          <p className="text-sm font-bold text-dark-blue-grey leading-tight">
            {author.name}
          </p>
          <p className="text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest leading-none mt-1">
            {author.role}
          </p>
        </div>
      </div>
      <p className="text-sm text-dark-blue-grey/70 leading-relaxed mb-4">
        {content}
      </p>
      <div
        className={cn(
          "flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t",
          isSpecial ? "border-pale-lime/20" : "border-dark-blue-grey/5",
        )}
      >
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-dark-blue-grey/40 text-base">
            {icon}
          </span>
          <span className="text-xs font-semibold text-dark-blue-grey">
            {category}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-dark-blue-grey/40 text-base">
            schedule
          </span>
          <span className="text-xs text-dark-blue-grey/50">{time}</span>
        </div>
        <div className="ml-auto">
          <button className="text-sm font-bold text-dark-blue-grey hover:text-dark-blue-grey/70 flex items-center gap-1 transition-colors">
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
