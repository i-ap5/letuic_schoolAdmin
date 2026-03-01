export const AlertItem = ({
  type,
  title,
  message,
  time,
  action,
}: {
  type: "urgent" | "notice" | "info";
  title: string;
  message: string;
  time: string;
  action?: string;
}) => {
  return (
    <div className="flex flex-col gap-1 py-4 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors px-1">
      <div className="flex justify-between items-start mb-0.5">
        <div className="flex items-center gap-2">
          {type === "urgent" && (
            <span className="bg-rose-50 text-rose-600 border border-rose-100 px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-widest shrink-0">
              Important
            </span>
          )}
          {type === "notice" && (
            <span className="bg-amber-50 text-amber-600 border border-amber-100 px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-widest shrink-0">
              Warning
            </span>
          )}
          {type === "info" && (
            <span className="bg-slate-50 text-slate-500 border border-slate-200 px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-widest shrink-0">
              Info
            </span>
          )}
          <span className="text-[11px] font-medium text-slate-400 shrink-0">{time}</span>
        </div>
      </div>
      <p className="text-[14px] font-semibold text-secondary leading-tight mt-0.5">
        {title}
      </p>
      <p className="text-[13px] text-slate-500 leading-relaxed max-w-[95%]">
        {message}
      </p>
      {action && (
        <button className="text-[12px] font-semibold text-primary hover:text-primary/80 transition-colors w-fit mt-1.5 flex items-center gap-1 group">
          {action}
          <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">east</span>
        </button>
      )}
    </div>
  );
};

export const AlertsSection = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-[20px] p-5 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[22px]">
            inbox
          </span>
          <h2 className="text-secondary text-lg font-semibold tracking-tight">
            Inbox Activity
          </h2>
        </div>
        <button className="text-primary text-[13px] font-semibold hover:text-primary/80 transition-colors">
          View All Inbox
        </button>
      </div>
      <div className="flex flex-col">
        <AlertItem
          type="urgent"
          title="Unusual Attendance Drop"
          message="Grade 10 section B recorded a 22% drop in morning attendance."
          time="10m ago"
          action="Investigate"
        />
        <AlertItem
          type="notice"
          title="GPA Trends Warning"
          message="Semester mid-point: Grade 12 Math scores decreased by 4% school-wide."
          time="2h ago"
        />
        <AlertItem
          type="info"
          title="Resource Sync Complete"
          message="District library database synchronized with Academy archives."
          time="5h ago"
        />
        <AlertItem
          type="notice"
          title="Missing Teacher Schedules"
          message="3 upcoming substitute classes lack registered supervisors."
          time="1d ago"
        />
      </div>
    </div>
  );
};
