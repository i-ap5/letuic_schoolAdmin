import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";

const MessageItem = ({
  sender,
  subject,
  preview,
  time,
  priority = "normal",
  unread = false,
  img,
}: {
  sender: string;
  subject: string;
  preview: string;
  time: string;
  priority?: "low" | "normal" | "important" | "urgent";
  unread?: boolean;
  img?: string;
}) => (
  <div
    className={cn(
      "p-4 rounded-2xl border transition-all cursor-pointer group",
      unread
        ? "bg-white border-slate-200"
        : "bg-slate-50/50 border-slate-50 hover:border-slate-200",
    )}
  >
    <div className="flex justify-between items-start mb-2">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "size-2.5 rounded-full shadow-sm",
            unread ? "bg-emerald-500" : "bg-transparent",
          )}
        ></div>
        <div
          className="size-8 rounded-full bg-cover bg-center border border-slate-100 shrink-0"
          style={{ backgroundImage: `url("${img}")` }}
        ></div>
        <span
          className={cn(
            "text-sm",
            unread
              ? "font-bold text-secondary"
              : "font-bold text-slate-500",
          )}
        >
          {sender}
        </span>
      </div>
      <span className="text-[10px] font-bold text-slate-300 capitalize">
        {time}
      </span>
    </div>
    <h4
      className={cn(
        "text-sm mb-1 group-hover:text-secondary transition-colors",
        unread
          ? "font-bold text-secondary"
          : "font-medium text-slate-500",
      )}
    >
      {subject}
    </h4>
    <p className="text-xs text-slate-400 line-clamp-1">{preview}</p>
    <div className="flex gap-2 mt-3 text-slate-400 font-medium">
      <span
        className={cn(
          "text-[10px] font-bold px-3 py-1 rounded-full border border-slate-100",
          priority === "urgent"
            ? "bg-red-500/10 text-red-700 border-red-500"
            : priority === "important"
              ? "bg-amber-500/10 text-amber-700 border-amber-500"
              : "bg-slate-50 text-slate-500 border-slate-200",
        )}
      >
        <span className="capitalize">{priority}</span>
      </span>
    </div>
  </div>
);

export const CommunicationsPage = ({
  isHubChild,
}: {
  isHubChild?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex-1 flex flex-col overflow-hidden bg-white",
        !isHubChild && "h-screen",
      )}
    >
      {!isHubChild && (
        <TopBar
          title="Messages"
          subtitle="Internal school chat and coordination"
          actions={
            <button className="bg-primary text-secondary px-4 py-2 rounded-xl text-[13px] font-semibold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm shadow-slate-100/30 active:scale-95">
              <span className="material-symbols-outlined text-sm">
                edit_square
              </span>
              New Message
            </button>
          }
        />
      )}

      <div className="flex-1 flex overflow-hidden">
        {/* Inbox Sidebar Hidden as requested */}
        
        {/* Message Content Area - Now expanded */}
        <main className="flex-1 flex flex-col bg-white">
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
            <div className="bg-slate-50/50 size-24 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-4xl text-secondary/20">
                chat_bubble
              </span>
            </div>
            <h3 className="text-[16px] font-semibold text-secondary mb-2">
              Messages & Coordination Hub
            </h3>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Internal staff chats and institutional coordination are active. Select a thread or start a new coordination session.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};
