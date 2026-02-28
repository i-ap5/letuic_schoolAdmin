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
  if (type === "urgent") {
    return (
      <div className="p-4 bg-dark-blue-grey border border-dark-blue-grey rounded-xl shadow-sm">
        <div className="flex items-start gap-3">
          <div className="bg-pale-lime p-1.5 rounded-lg text-dark-blue-grey">
            <span className="material-symbols-outlined text-sm">
              priority_high
            </span>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-pale-lime uppercase tracking-wider">
                Urgent Alert
              </span>
              <span className="text-[10px] text-white/50">{time}</span>
            </div>
            <p className="text-sm font-bold text-white mt-1">{title}</p>
            <p className="text-xs text-white/70 mt-0.5 leading-relaxed">
              {message}
            </p>
            {action && (
              <button className="mt-2 text-xs font-bold text-pale-lime flex items-center gap-1 hover:underline">
                {action}{" "}
                <span className="material-symbols-outlined text-[12px]">
                  chevron_right
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (type === "notice") {
    return (
      <div className="p-4 bg-pale-lime border border-pale-lime rounded-xl shadow-sm">
        <div className="flex items-start gap-3">
          <div className="bg-dark-blue-grey p-1.5 rounded-lg text-white">
            <span className="material-symbols-outlined text-sm">
              notifications
            </span>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-dark-blue-grey uppercase tracking-wider">
                Notice
              </span>
              <span className="text-[10px] text-dark-blue-grey/60">{time}</span>
            </div>
            <p className="text-sm font-bold text-dark-blue-grey mt-1">
              {title}
            </p>
            <p className="text-xs text-dark-blue-grey/80 mt-0.5 leading-relaxed">
              {message}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white border border-dark-blue-grey/10 rounded-xl shadow-sm">
      <div className="flex items-start gap-3">
        <div className="bg-pale-lime p-1.5 rounded-lg text-dark-blue-grey">
          <span className="material-symbols-outlined text-sm">info</span>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-dark-blue-grey/60 uppercase tracking-wider">
              System Info
            </span>
            <span className="text-[10px] text-dark-blue-grey/40">{time}</span>
          </div>
          <p className="text-sm font-bold text-dark-blue-grey mt-1">{title}</p>
          <p className="text-xs text-dark-blue-grey/70 mt-0.5 leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export const AlertsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-dark-blue-grey text-xl font-bold tracking-tight">
          Alerts & Flagged Activity
        </h2>
      </div>
      <div className="flex flex-col gap-3">
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
      </div>
    </div>
  );
};
