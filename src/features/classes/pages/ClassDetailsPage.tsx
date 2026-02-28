import { useNavigate, useParams } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";

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
            <button className="px-4 py-2 bg-white border border-dark-blue-grey/10 rounded-lg text-sm font-bold text-dark-blue-grey/60 hover:bg-dark-blue-grey/5 transition-all flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-lg">edit</span>
              Manage Class
            </button>
            <button className="px-4 py-2 bg-pale-lime text-dark-blue-grey rounded-lg text-sm font-bold shadow-sm hover:opacity-90 transition-all flex items-center gap-2 active:scale-95">
              <span className="material-symbols-outlined text-lg">mail</span>
              Message Parents
            </button>
          </>
        }
      />

      <div className="px-8 pt-6 pb-4 shrink-0 border-b border-dark-blue-grey/10">
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div className="flex flex-col gap-1">
            <nav className="flex items-center gap-2 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-[0.2em]">
              <button
                onClick={() => navigate("/classes")}
                className="hover:text-pale-lime transition-colors"
              >
                Classes
              </button>
              <span className="material-symbols-outlined text-[10px]">
                chevron_right
              </span>
              <span className="text-dark-blue-grey/60">
                {classData.grade}-{classData.section}
              </span>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8 bg-dark-blue-grey/[0.01]">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Avg Participation",
              value: `${classData.avgParticipation}%`,
              icon: "equalizer",
              trend: "+1.2% this week",
              positive: true,
            },
            {
              label: "Attendance Rate",
              value: `${classData.attendanceRate}%`,
              icon: "calendar_check",
              sub: "Above school average",
            },
            {
              label: "Active Programs",
              value: String(classData.activePrograms).padStart(2, "0"),
              icon: "assignment",
              sub: "2 school-wide, 2 internal",
            },
            {
              label: "Behavior Flags",
              value: String(classData.behaviorFlags).padStart(2, "0"),
              icon: "flag",
              trend: "Action required for 1",
              warning: true,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl border border-dark-blue-grey/10 shadow-sm flex flex-col gap-2"
            >
              <div className="flex justify-between items-start">
                <p className="text-dark-blue-grey/40 text-[10px] font-black uppercase tracking-widest">
                  {stat.label}
                </p>
                <span
                  className={cn(
                    "material-symbols-outlined",
                    stat.warning ? "text-red-500" : "text-pale-lime",
                  )}
                >
                  {stat.icon}
                </span>
              </div>
              <p className="text-dark-blue-grey text-3xl font-black tracking-tighter">
                {stat.value}
              </p>
              {stat.trend && (
                <div className="flex items-center gap-1 mt-1">
                  {stat.positive && (
                    <span className="material-symbols-outlined text-emerald-500 text-sm">
                      arrow_upward
                    </span>
                  )}
                  <p
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-wider",
                      stat.positive
                        ? "text-emerald-600"
                        : stat.warning
                          ? "text-red-600"
                          : "text-dark-blue-grey/30",
                    )}
                  >
                    {stat.trend}
                  </p>
                </div>
              )}
              {stat.sub && (
                <p className="text-dark-blue-grey/30 text-[10px] font-bold uppercase tracking-widest mt-1">
                  {stat.sub}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <section className="bg-white rounded-2xl border border-dark-blue-grey/10 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-dark-blue-grey/10 bg-dark-blue-grey/[0.02]">
                <h2 className="text-dark-blue-grey text-lg font-bold tracking-tight">
                  Students in Class
                </h2>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-dark-blue-grey/30 text-sm">
                    search
                  </span>
                  <input
                    className="pl-9 pr-4 py-2 text-xs border border-dark-blue-grey/10 rounded-lg bg-white/50 focus:ring-2 focus:ring-pale-lime w-64 outline-none transition-all focus:bg-white"
                    placeholder="Search students..."
                    type="text"
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-dark-blue-grey/[0.01] border-b border-dark-blue-grey/5 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                      <th className="px-6 py-4">Student Name</th>
                      <th className="px-6 py-4">Participation</th>
                      <th className="px-6 py-4 text-center">Aura Score</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-blue-grey/5">
                    {classData.students.map((student, i) => (
                      <tr
                        key={i}
                        className="hover:bg-dark-blue-grey/[0.01] transition-colors group cursor-pointer"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-pale-lime flex items-center justify-center text-xs font-black text-dark-blue-grey border border-dark-blue-grey/10">
                              {student.initials}
                            </div>
                            <span className="text-sm font-bold text-dark-blue-grey group-hover:underline decoration-pale-lime underline-offset-4">
                              {student.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-24 h-1.5 bg-dark-blue-grey/5 rounded-full overflow-hidden">
                              <div
                                className={cn(
                                  "h-full transition-all",
                                  student.participation > 80
                                    ? "bg-pale-lime"
                                    : student.participation > 60
                                      ? "bg-dark-blue-grey"
                                      : "bg-red-500",
                                )}
                                style={{ width: `${student.participation}%` }}
                              ></div>
                            </div>
                            <span className="text-xs font-black text-dark-blue-grey/70">
                              {student.participation}%
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="px-2 py-1 rounded bg-pale-lime/20 text-dark-blue-grey text-[10px] font-black border border-pale-lime/30 tracking-widest shadow-sm">
                            {student.auraScore}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={cn(
                              "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border",
                              student.statusType === "normal"
                                ? "bg-pale-lime text-dark-blue-grey border-dark-blue-grey/10"
                                : "bg-dark-blue-grey text-pale-lime border-white/10 shadow-lg",
                            )}
                          >
                            {student.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-dark-blue-grey/30 hover:text-dark-blue-grey transition-colors">
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
              <div className="p-4 bg-dark-blue-grey/[0.02] border-t border-dark-blue-grey/5 flex justify-center">
                <button className="text-[10px] font-black text-dark-blue-grey/40 hover:text-dark-blue-grey uppercase tracking-[0.2em] transition-colors">
                  Load More Students
                </button>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <h2 className="text-dark-blue-grey text-base font-black uppercase tracking-[0.2em] leading-none mb-2 pl-2">
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
                  color: "bg-pale-lime",
                },
                {
                  type: "Programs",
                  title: "Science Fair Entries",
                  msg: "12 students from 10-B registered for the Regional Science Fair.",
                  time: "4h ago",
                  icon: "groups",
                  color: "bg-dark-blue-grey",
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
                    "p-4 rounded-2xl border shadow-sm transition-all hover:scale-[1.02]",
                    activity.dark
                      ? "bg-dark-blue-grey border-white/10"
                      : "bg-white border-dark-blue-grey/10",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "p-1.5 rounded-lg shrink-0",
                        activity.color,
                        activity.dark
                          ? "text-pale-lime"
                          : "text-dark-blue-grey",
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
                            "text-[9px] font-black uppercase tracking-widest",
                            activity.dark
                              ? "text-pale-lime/60"
                              : "text-dark-blue-grey/40",
                          )}
                        >
                          {activity.type}
                        </span>
                        <span
                          className={cn(
                            "text-[9px] font-bold",
                            activity.dark
                              ? "text-white/30"
                              : "text-dark-blue-grey/20",
                          )}
                        >
                          {activity.time}
                        </span>
                      </div>
                      <p
                        className={cn(
                          "text-xs font-black leading-tight mb-1",
                          activity.dark ? "text-white" : "text-dark-blue-grey",
                        )}
                      >
                        {activity.title}
                      </p>
                      <p
                        className={cn(
                          "text-[10px] leading-relaxed mb-2 opacity-60 font-medium",
                          activity.dark
                            ? "text-white/70"
                            : "text-dark-blue-grey/70",
                        )}
                      >
                        {activity.msg}
                      </p>
                      {activity.action && (
                        <button className="text-[10px] font-black text-pale-lime uppercase tracking-widest hover:underline text-left">
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
