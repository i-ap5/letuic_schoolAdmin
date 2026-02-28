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
      "p-4 rounded-xl border transition-all cursor-pointer group",
      unread
        ? "bg-white border-dark-blue-grey/20 shadow-md"
        : "bg-dark-blue-grey/[0.01] border-dark-blue-grey/5 hover:border-dark-blue-grey/20",
    )}
  >
    <div className="flex justify-between items-start mb-2">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "size-2 rounded-full",
            unread ? "bg-pale-lime" : "bg-transparent",
          )}
        ></div>
        <div
          className="size-8 rounded-full bg-cover bg-center border border-dark-blue-grey/10 shrink-0"
          style={{ backgroundImage: `url("${img}")` }}
        ></div>
        <span
          className={cn(
            "text-sm",
            unread
              ? "font-black text-dark-blue-grey"
              : "font-bold text-dark-blue-grey/60",
          )}
        >
          {sender}
        </span>
      </div>
      <span className="text-[10px] font-bold text-dark-blue-grey/30 uppercase tracking-widest">
        {time}
      </span>
    </div>
    <h4
      className={cn(
        "text-sm mb-1 group-hover:text-dark-blue-grey transition-colors",
        unread
          ? "font-bold text-dark-blue-grey"
          : "font-medium text-dark-blue-grey/60",
      )}
    >
      {subject}
    </h4>
    <p className="text-xs text-dark-blue-grey/40 line-clamp-1">{preview}</p>
    <div className="flex gap-2 mt-3">
      <span
        className={cn(
          "text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest border",
          priority === "urgent"
            ? "bg-red-500 text-white border-red-600"
            : priority === "important"
              ? "bg-dark-blue-grey text-pale-lime border-dark-blue-grey/10"
              : "bg-pale-lime/20 text-dark-blue-grey border-pale-lime/30",
        )}
      >
        {priority}
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
          title="Communications Hub"
          subtitle="Internal messaging system for staff, parents, and administrative coordination."
          actions={
            <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95">
              <span className="material-symbols-outlined text-sm">
                edit_square
              </span>
              New Message
            </button>
          }
        />
      )}

      <div className="flex-1 flex overflow-hidden">
        {/* Inbox Sidebar */}
        <aside className="w-80 border-r border-dark-blue-grey/10 flex flex-col bg-dark-blue-grey/[0.01]">
          <div className="p-4 border-b border-dark-blue-grey/10 bg-white">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-dark-blue-grey/30 text-sm">
                search
              </span>
              <input
                className="w-full bg-dark-blue-grey/[0.03] border-none rounded-lg pl-9 pr-4 py-2 text-xs focus:ring-2 focus:ring-pale-lime text-dark-blue-grey placeholder-dark-blue-grey/30"
                placeholder="Search messages..."
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            <MessageItem
              sender="Sunita Reddy (Registrar)"
              subject="Urgent: Missing Immunization Records"
              preview="Hello Dr. Iyer, we have 42 students in Grade 10-D who..."
              time="10:42 AM"
              priority="urgent"
              unread
              img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
            />
            <MessageItem
              sender="District Superintendent"
              subject="Budget Approval FY2025"
              preview="The preliminary budget for the next academic year has been..."
              time="09:15 AM"
              priority="important"
              unread
              img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
            />
            <MessageItem
              sender="Aditya Verma (Grade 10-B)"
              subject="Class Trip Proposal: Science Museum"
              preview="I've attached the itinerary and budget for our upcoming..."
              time="Yesterday"
              img="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
            />
            <MessageItem
              sender="Interschool Network"
              subject="System Maintenance: Oct 28"
              preview="Please be advised that the portal will be offline for..."
              time="Oct 20"
              priority="low"
              img="https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop"
            />
          </div>
        </aside>

        {/* Message Content Area */}
        <main className="flex-1 flex flex-col bg-white">
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
            <div className="bg-dark-blue-grey/[0.03] size-24 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-4xl text-dark-blue-grey/20">
                forward_to_inbox
              </span>
            </div>
            <h3 className="text-lg font-bold text-dark-blue-grey mb-2">
              Select a message to read
            </h3>
            <p className="text-sm text-dark-blue-grey/40 max-w-xs leading-relaxed">
              Manage school-wide broadcasts, internal staff memos, and
              parent-teacher communications from one central hub.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};
