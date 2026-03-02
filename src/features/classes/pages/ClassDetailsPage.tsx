import { useNavigate, useParams } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";
import { StatCard } from "../../../components/StatCard";

export const ClassDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data fetching based on ID
  const classData = {
    grade: "Grade 10",
    section: id?.split("-")[1] || "B",
    room: "Room 304",
    teacher: "Mr. Marcus Roberts",
    avgParticipation: 94.2,
    attendanceRate: 98.5,
    activePrograms: 4,
    behaviorFlags: 2,
    students: [
      {
        name: "Alex Bennett",
        initials: "AB",
        participation: 95,
        auraScore: 842,
        status: "Good Standing",
        statusType: "normal" as const,
      },
      {
        name: "Chloe Hughes",
        initials: "CH",
        participation: 72,
        auraScore: 615,
        status: "Behavior Flag",
        statusType: "risk" as const,
      },
      {
        name: "Daniel Moore",
        initials: "DM",
        participation: 88,
        auraScore: 720,
        status: "Good Standing",
        statusType: "normal" as const,
      },
      {
        name: "Emily Stone",
        initials: "ES",
        participation: 45,
        auraScore: 340,
        status: "High Risk",
        statusType: "risk" as const,
      },
    ],
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
      <TopBar
        title={`${classData.grade} - Section ${classData.section}`}
        subtitle={`Lead Teacher: ${classData.teacher} | ${classData.room}`}
        actions={
          <>
            <button className="px-4 py-2 bg-white border border-slate-100 rounded-xl text-[13px] font-semibold text-slate-500 hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm shadow-slate-100/30">
              <span className="material-symbols-outlined text-lg">edit</span>
              Manage Class
            </button>
            <button className="px-4 py-2 bg-primary text-secondary rounded-xl text-[13px] font-semibold shadow-sm shadow-slate-100/30 hover:opacity-90 transition-all flex items-center gap-2 active:scale-95">
              <span className="material-symbols-outlined text-lg">mail</span>
              Message Parents
            </button>
          </>
        }
      />

      <div className="px-8 pt-6 pb-4 shrink-0 border-b border-slate-100">
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div className="flex flex-col gap-1">
            <nav className="flex items-center gap-2 text-xs font-medium text-slate-300 capitalize tracking-[0.2em]">
              <button
                onClick={() => navigate("/classes")}
                className="hover:text-primary transition-colors"
              >
                Classes
              </button>
              <span className="material-symbols-outlined text-[10px]">
                chevron_right
              </span>
              <span className="text-slate-500">
                {classData.grade}-{classData.section}
              </span>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto mx-auto px-6 lg:px-10 py-6 max-w-[1400px] ">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Avg Participation",
              value: `${classData.avgParticipation}%`,
              icon: "equalizer",
              trend: "+1.2% this week",
              trendType: "up" as const,
            },
            {
              label: "Attendance Rate",
              value: `${classData.attendanceRate}%`,
              icon: "calendar_check",
            },
            {
              label: "Active Programs",
              value: String(classData.activePrograms).padStart(2, "0"),
              icon: "assignment",
            },
            {
              label: "Behavior Flags",
              value: String(classData.behaviorFlags).padStart(2, "0"),
              icon: "flag",
              trend: "Action required for 1",
              trendType: "down" as const,
              iconBg: "bg-red-500/10 text-red-700 border border-red-500",
            },
          ].map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <section className="bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/30 overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-secondary text-[16px] font-semibold tracking-tight">
                  Students in Class
                </h2>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 text-sm">
                    search
                  </span>
                  <input
                    className="pl-9 pr-4 py-2 text-xs border border-slate-100 rounded-xl bg-white/50 focus:ring-2 focus:ring-primary w-64 outline-none transition-all focus:bg-white"
                    placeholder="Search students..."
                    type="text"
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50/50 border-b border-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      <th className="px-6 py-4">Student Name</th>
                      <th className="px-6 py-4">Participation</th>
                      <th className="px-6 py-4 text-center">Aura Score</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {classData.students.map((student, i) => (
                      <tr
                        key={i}
                        className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-primary flex items-center justify-center text-xs font-black text-secondary border border-slate-100">
                              {student.initials}
                            </div>
                            <span className="text-[13px] font-semibold text-secondary group-hover:underline decoration-primary underline-offset-4">
                              {student.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-24 h-1.5 bg-slate-50 rounded-full overflow-hidden">
                              <div
                                className={cn(
                                  "h-full transition-all",
                                  student.participation > 80
                                    ? "bg-primary"
                                    : student.participation > 60
                                      ? "bg-secondary"
                                      : "bg-red-500",
                                )}
                                style={{ width: `${student.participation}%` }}
                              ></div>
                            </div>
                            <span className="text-xs font-black text-slate-600">
                              {student.participation}%
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="px-2 py-1 rounded bg-primary/20 text-secondary text-xs font-medium border border-primary/30 tracking-widest shadow-sm shadow-slate-100/30">
                            {student.auraScore}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={cn(
                              "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium capitalize border",
                              student.statusType === "normal"
                                ? "bg-primary text-secondary border-slate-100"
                                : "bg-secondary/10 text-secondary border border-secondary",
                            )}
                          >
                            {student.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-300 hover:text-secondary transition-colors">
                            <span className="material-symbols-outlined text-xl">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-slate-50/50 border-t border-slate-50 flex justify-center">
                <button className="text-xs font-medium text-slate-400 hover:text-secondary capitalize tracking-[0.2em] transition-colors">
                  Load More Students
                </button>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <h2 className="text-secondary text-base font-black capitalize tracking-[0.2em] leading-none mb-2 pl-2">
              Class Activity
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  type: "Curriculum",
                  title: "Assignment Published",
                  msg: "Unit 4: Modern History essays assigned to all students.",
                  time: "1h ago",
                  icon: "inventory",
                  color: "bg-primary",
                },
                {
                  type: "Programs",
                  title: "Science Fair Entries",
                  msg: "12 students from 10-B registered for the Regional Science Fair.",
                  time: "4h ago",
                  icon: "groups",
                  color: "bg-secondary",
                  dark: true,
                },
                {
                  type: "Alert",
                  title: "Absence Threshold",
                  msg: "Emily Stone has reached 5 consecutive absences.",
                  time: "Yesterday",
                  icon: "notification_important",
                  color: "bg-red-500",
                  dark: true,
                  action: "Contact Guardian",
                },
                {
                  type: "Staff Note",
                  title: "Substitute Scheduled",
                  msg: "Ms. Vance will cover the afternoon session on Oct 26.",
                  time: "2d ago",
                  icon: "forum",
                  color: "bg-white",
                },
              ].map((activity, i) => (
                <div
                  key={i}
                  className={cn(
                    "p-4 rounded-2xl border shadow-sm shadow-slate-100/30 transition-all hover:scale-[1.02]",
                    activity.dark
                      ? "bg-secondary border-white/10"
                      : "bg-white border-slate-100",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "p-1.5 rounded-xl shrink-0",
                        activity.color,
                        activity.dark
                          ? "text-primary"
                          : "text-secondary",
                      )}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {activity.icon}
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <span
                          className={cn(
                            "text-xs font-medium capitalize",
                            activity.dark
                              ? "text-primary/60"
                              : "text-slate-400",
                          )}
                        >
                          {activity.type}
                        </span>
                        <span
                          className={cn(
                            "text-xs font-medium",
                            activity.dark
                              ? "text-white/30"
                              : "text-secondary/20",
                          )}
                        >
                          {activity.time}
                        </span>
                      </div>
                      <p
                        className={cn(
                          "text-xs font-black leading-tight mb-1",
                          activity.dark ? "text-white" : "text-secondary",
                        )}
                      >
                        {activity.title}
                      </p>
                      <p
                        className={cn(
                          "text-[10px] leading-relaxed mb-2 opacity-60 font-medium",
                          activity.dark
                            ? "text-white/70"
                            : "text-slate-600",
                        )}
                      >
                        {activity.msg}
                      </p>
                      {activity.action && (
                        <button className="text-xs font-medium text-primary capitalize hover:underline text-left">
                          {activity.action}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
