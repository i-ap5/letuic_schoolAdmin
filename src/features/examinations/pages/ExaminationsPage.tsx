import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";

export const ExaminationsPage = ({ isHubChild }: { isHubChild?: boolean }) => {
  const navigate = useNavigate();

  const [exams, setExams] = useState([
    {
      id: "EX-2024-001",
      title: "Mid-Term Examination 2024",
      type: "Major",
      status: "Completed",
      date: "Oct 12 - Oct 20, 2024",
      classes: ["Grade 10", "Grade 11", "Grade 12"],
      subjects: 12,
      avgScore: 78.4,
    },
    {
      id: "EX-2024-002",
      title: "Science Mock Test",
      type: "Assessment",
      status: "In Progress",
      date: "Nov 05, 2024",
      classes: ["Grade 10A", "Grade 10B"],
      subjects: 1,
      avgScore: null,
    },
    {
      id: "EX-2024-003",
      title: "Annual Sports Quiz",
      type: "Quiz",
      status: "Upcoming",
      date: "Nov 15, 2024",
      classes: ["All Grades"],
      subjects: 1,
      avgScore: null,
    },
    {
      id: "EX-2024-004",
      title: "Mathematics Olympiad",
      type: "Competition",
      status: "Upcoming",
      date: "Dec 02, 2024",
      classes: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
      subjects: 1,
      avgScore: null,
    },
  ]);

  const handleAddExam = () => {
    const newExam = {
      id: `EX-2024-${Math.floor(Math.random() * 900) + 100}`,
      title: "New Assessment Cycle",
      type: "Assessment",
      status: "Upcoming",
      date: "TBD",
      classes: ["Grade 10", "Grade 11"],
      subjects: 1,
      avgScore: null,
    };
    setExams((prev) => [newExam, ...prev]);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-emerald-500 text-white";
      case "in progress":
        return "bg-pale-lime text-dark-blue-grey border-dark-blue-grey/10";
      case "upcoming":
        return "bg-dark-blue-grey text-white";
      default:
        return "bg-dark-blue-grey/10 text-dark-blue-grey/40";
    }
  };

  return (
    <div
      className={cn(
        "flex-1 flex flex-col overflow-hidden bg-white",
        !isHubChild && "h-screen",
      )}
    >
      {!isHubChild && (
        <TopBar
          title="Examination & Assessments"
          subtitle="Define, manage, and track school-level examinations, quizzes, and competitions."
          actions={
            <div className="flex items-center gap-3">
              <button className="bg-white border border-dark-blue-grey/10 text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-dark-blue-grey/5 transition-all">
                <span className="material-symbols-outlined text-lg">
                  upload_file
                </span>
                Bulk Marks Upload
              </button>
              <button
                onClick={handleAddExam}
                className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95"
              >
                <span className="material-symbols-outlined text-sm">
                  add_circle
                </span>
                New Examination
              </button>
            </div>
          }
        />
      )}

      <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-dark-blue-grey/[0.01]">
        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: "Overall Academic Progress",
              value: "84.2%",
              trend: "+2.4% from last term",
              positive: true,
              icon: "trending_up",
            },
            {
              label: "Ongoing Assessments",
              value: "03",
              trend: "Next: Science Mock Test",
              icon: "pending_actions",
            },
            {
              label: "Average Attendance (Exams)",
              value: "98.8%",
              trend: "Target: 95%+",
              positive: true,
              icon: "event_available",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-dark-blue-grey/10 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-pale-lime/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
              <div className="flex justify-between items-start mb-4">
                <p className="text-dark-blue-grey/40 text-[10px] font-black uppercase tracking-widest relative z-10">
                  {stat.label}
                </p>
                <span className="material-symbols-outlined text-pale-lime relative z-10">
                  {stat.icon}
                </span>
              </div>
              <p className="text-3xl font-black text-dark-blue-grey mb-1 relative z-10">
                {stat.value}
              </p>
              <p
                className={cn(
                  "text-[10px] font-bold uppercase tracking-wider relative z-10",
                  stat.positive ? "text-emerald-600" : "text-dark-blue-grey/40",
                )}
              >
                {stat.trend}
              </p>
            </div>
          ))}
        </div>

        {/* Examinations List */}
        <div className="bg-white rounded-2xl border border-dark-blue-grey/10 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-dark-blue-grey/10 flex justify-between items-center">
            <h3 className="text-dark-blue-grey text-lg font-bold tracking-tight">
              Academic History & Schedule
            </h3>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded-lg bg-dark-blue-grey text-white text-[10px] font-black uppercase tracking-widest">
                All
              </button>
              <button className="px-3 py-1.5 rounded-lg hover:bg-dark-blue-grey/5 text-dark-blue-grey/40 text-[10px] font-black uppercase tracking-widest">
                Major Exams
              </button>
              <button className="px-3 py-1.5 rounded-lg hover:bg-dark-blue-grey/5 text-dark-blue-grey/40 text-[10px] font-black uppercase tracking-widest">
                Mock Tests
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-dark-blue-grey/[0.01] border-b border-dark-blue-grey/10">
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                    Title & Type
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                    Schedule
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                    Classes
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                    Status
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest text-center">
                    Avg. Mark
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-blue-grey/5">
                {exams.map((exam) => (
                  <tr
                    key={exam.id}
                    className="hover:bg-dark-blue-grey/[0.01] transition-colors group cursor-pointer"
                    onClick={() => navigate(`/examinations/${exam.id}`)}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-xl bg-dark-blue-grey/5 flex items-center justify-center text-dark-blue-grey/30 group-hover:bg-pale-lime group-hover:text-dark-blue-grey transition-all">
                          <span className="material-symbols-outlined">
                            {exam.type === "Quiz"
                              ? "quiz"
                              : exam.type === "Competition"
                                ? "trophy"
                                : "description"}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-dark-blue-grey group-hover:underline decoration-pale-lime underline-offset-4">
                            {exam.title}
                          </p>
                          <p className="text-[10px] font-black uppercase tracking-[0.1em] text-dark-blue-grey/40">
                            {exam.type}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-dark-blue-grey/60">
                        <span className="material-symbols-outlined text-sm">
                          calendar_today
                        </span>
                        <span className="text-xs font-medium">{exam.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {exam.classes.slice(0, 2).map((c, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-bold px-2 py-0.5 rounded bg-dark-blue-grey/5 text-dark-blue-grey/60 border border-dark-blue-grey/5"
                          >
                            {c}
                          </span>
                        ))}
                        {exam.classes.length > 2 && (
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-dark-blue-grey/5 text-dark-blue-grey/40">
                            +{exam.classes.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={cn(
                          "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border",
                          getStatusColor(exam.status),
                        )}
                      >
                        {exam.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {exam.avgScore ? (
                        <span className="text-sm font-black text-dark-blue-grey">
                          {exam.avgScore}%
                        </span>
                      ) : (
                        <span className="text-[10px] font-black text-dark-blue-grey/20 uppercase tracking-widest">
                          N/A
                        </span>
                      )}
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
        </div>
      </div>
    </div>
  );
};
