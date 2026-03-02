import { useNavigate, useParams } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";

export const StudentProfilePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const students = [
    {
      name: "Aavya Sharma",
      id: "OA-2024-001",
      grade: "12th Grade",
      participation: 92,
      auraScore: 98.4,
      attendanceRate: 98,
      gpa: 3.9,
      enrollmentDate: "Aug 2021",
      status: "Active",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?w=400&h=400&fit=crop",
    },
    {
      name: "Ishaan Iyer",
      id: "OA-2024-042",
      grade: "10th Grade",
      participation: 45,
      auraScore: 64.2,
      attendanceRate: 72,
      gpa: 2.1,
      enrollmentDate: "Aug 2022",
      status: "At Risk",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Mira Patel",
      id: "OA-2024-118",
      grade: "11th Grade",
      participation: 88,
      auraScore: 91.5,
      attendanceRate: 94,
      gpa: 3.7,
      enrollmentDate: "Jan 2022",
      status: "Active",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Vedant Kulkarni",
      id: "OA-2024-085",
      grade: "9th Grade",
      participation: 76,
      auraScore: 84.2,
      attendanceRate: 88,
      gpa: 3.2,
      enrollmentDate: "Aug 2023",
      status: "Graduated",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    },
    {
      name: "Sanya Gupta",
      id: "OA-2024-201",
      grade: "12th Grade",
      participation: 95,
      auraScore: 97.2,
      attendanceRate: 99,
      gpa: 4.0,
      enrollmentDate: "Aug 2021",
      status: "Active",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "Arjun Rao",
      id: "OA-2024-156",
      grade: "11th Grade",
      participation: 82,
      auraScore: 88.5,
      attendanceRate: 91,
      gpa: 3.5,
      enrollmentDate: "Aug 2022",
      status: "Active",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Diya Malhotra",
      id: "OA-2024-092",
      grade: "10th Grade",
      participation: 68,
      auraScore: 72.1,
      attendanceRate: 85,
      gpa: 2.8,
      enrollmentDate: "Jan 2023",
      status: "Active",
      img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&h=400&fit=crop",
    },
    {
      name: "Rohan Das",
      id: "OA-2024-305",
      grade: "9th Grade",
      participation: 54,
      auraScore: 61.8,
      attendanceRate: 78,
      gpa: 2.4,
      enrollmentDate: "Aug 2023",
      status: "At Risk",
      img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
    },
  ];

  const student =
    students.find((s) => s.id === id) ||
    students.find((s) => s.id === "OA-2024-001")!;

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
      <TopBar
        title={student.name}
        subtitle={`${student.grade} • Northridge Academy | Student ID: ${student.id}`}
        onBack={() => navigate(-1)}
        actions={
          <div className="flex items-center gap-3">
            <button className="bg-primary text-secondary px-4 py-2 rounded-xl text-[13px] font-semibold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm shadow-slate-100/30">
              <span className="material-symbols-outlined text-sm">
                edit_note
              </span>
              Add Note
            </button>
            <button className="bg-secondary text-white px-4 py-2 rounded-xl text-[13px] font-semibold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm shadow-slate-100/30">
              <span className="material-symbols-outlined text-sm">
                picture_as_pdf
              </span>
              Export Report
            </button>
          </div>
        }
      />

      <div className="flex-1 overflow-y-auto mx-auto px-6 lg:px-10 py-6 max-w-[1400px] space-y-8">
        {/* Profile Card */}
        <div className="flex flex-col md:flex-row gap-8 items-center border-b border-slate-100 pb-8">
          <div
            className="size-24 rounded-2xl bg-cover bg-center border border-slate-100 shrink-0 shadow-sm shadow-slate-100/30"
            style={{ backgroundImage: `url("${student.img}")` }}
          ></div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 bg-primary text-secondary text-[10px] font-black rounded uppercase tracking-widest border border-slate-100">
                {student.status}
              </span>
              <p className="text-slate-500 text-[13px] font-medium">
                Enrolled: {student.enrollmentDate}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Placeholder */}
        <div className="border-b border-slate-100">
          <div className="flex gap-8">
            {[
              "Overview",
              "Academic History",
              "Behavioral Records",
              "Parental Contact",
            ].map((tab, i) => (
              <button
                key={tab}
                className={cn(
                  "pb-4 text-[13px] font-semibold tracking-tight transition-all",
                  i === 0
                    ? "border-b-2 border-primary text-secondary"
                    : "text-slate-400 hover:text-secondary",
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 shadow-sm shadow-slate-100/30">
            <div className="flex justify-between items-start mb-4">
              <p className="text-slate-500 text-[11px] font-semibold uppercase tracking-widest">
                Aura Score
              </p>
              <span className="material-symbols-outlined text-slate-300">
                analytics
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-black text-secondary tracking-tighter">
                {student.auraScore}
                <span className="text-lg opacity-30">/100</span>
              </p>
              <p className="text-[10px] font-black bg-primary text-secondary px-2 py-0.5 rounded-full border border-slate-50 uppercase tracking-wider">
                +5.2%
              </p>
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase mt-4 tracking-widest">
              Weighted Engagement Metric
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm shadow-slate-100/30">
            <div className="flex justify-between items-start mb-4">
              <p className="text-slate-500 text-[11px] font-semibold uppercase tracking-widest">
                Attendance
              </p>
              <span className="material-symbols-outlined text-slate-300">
                calendar_today
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-black text-secondary tracking-tighter">
                {student.attendanceRate}%
              </p>
              <p className="text-[10px] font-black bg-secondary text-white px-2 py-0.5 rounded-full border border-slate-50 uppercase tracking-wider">
                Stable
              </p>
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase mt-4 tracking-widest">
              126/132 days attended
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm shadow-slate-100/30">
            <div className="flex justify-between items-start mb-4">
              <p className="text-slate-500 text-[11px] font-semibold uppercase tracking-widest">
                GPA (Weighted)
              </p>
              <span className="material-symbols-outlined text-slate-300">
                school
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-black text-secondary tracking-tighter">
                {student.gpa}
              </p>
              <p className="text-[10px] font-black bg-red-500 text-white px-2 py-0.5 rounded-full border border-slate-50 uppercase tracking-wider">
                -0.1
              </p>
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase mt-4 tracking-widest">
              Class Rank: 14 / 285
            </p>
          </div>
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/30 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                <h3 className="text-secondary text-[16px] font-semibold tracking-tight">
                  Participation History
                </h3>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Last 12 Months
                </span>
              </div>
              <table className="w-full text-left">
                <thead className="bg-white border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Program
                    </th>
                    <th className="px-6 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Intensity
                    </th>
                    <th className="px-6 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-right">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    {
                      name: "Varsity Soccer",
                      role: "Team Captain",
                      width: "90%",
                      status: "ONGOING",
                    },
                    {
                      name: "Robotics Club",
                      role: "Lead Engineer",
                      width: "65%",
                      status: "ONGOING",
                    },
                    {
                      name: "Student Council",
                      role: "Treasurer",
                      width: "40%",
                      status: "COMPLETED",
                    },
                  ].map((p, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-[13px] font-semibold text-secondary">
                        {p.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                        {p.role}
                      </td>
                      <td className="px-6 py-4">
                        <div className="w-24 h-1.5 bg-slate-50/50 rounded-full overflow-hidden">
                          <div
                            className="bg-primary h-full"
                            style={{ width: p.width }}
                          ></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span
                          className={cn(
                            "px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border",
                            p.status === "ONGOING"
                              ? "bg-primary text-secondary border-slate-50"
                              : "bg-slate-50 text-slate-300 border-slate-50",
                          )}
                        >
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/30 overflow-hidden p-6">
              <h3 className="text-secondary text-[16px] font-semibold tracking-tight mb-6">
                Honors & Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Dean's List 2023",
                    sub: "Fall & Spring",
                    icon: "workspace_premium",
                  },
                  {
                    title: "MVP - Soccer",
                    sub: "Regional Title",
                    icon: "emoji_events",
                  },
                  {
                    title: "Science Fair Winner",
                    sub: "Physics Division",
                    icon: "science",
                  },
                  {
                    title: "AP Scholar Award",
                    sub: "National Recognition",
                    icon: "menu_book",
                  },
                ].map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-primary transition-all"
                  >
                    <div className="size-10 rounded-full bg-primary flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-xl">
                        {a.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-secondary">
                        {a.title}
                      </p>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                        {a.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-red-500/10 shadow-sm shadow-slate-100/30 overflow-hidden">
              <div className="px-6 py-4 bg-red-500 text-white flex justify-between items-center shadow-lg shadow-red-500/20">
                <h3 className="text-lg font-black tracking-tighter uppercase italic">
                  Moderation Flags
                </h3>
                <span className="bg-white text-red-500 text-[10px] font-black px-2.5 py-0.5 rounded-full">
                  2 ACTIVE
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div className="p-4 rounded-2xl bg-red-50 border border-red-100">
                  <div className="flex items-center gap-2 mb-2 font-bold text-red-700 text-sm">
                    <span className="material-symbols-outlined text-lg">
                      report_problem
                    </span>
                    Behavioral Escalation
                  </div>
                  <p className="text-xs text-red-700/60 font-medium leading-relaxed mb-4 italic">
                    Reported altercation in the cafeteria during lunch break on
                    Oct 14. Counselor referral pending.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-red-700 uppercase tracking-widest">
                      Severity: High
                    </span>
                    <button className="text-[10px] font-black text-secondary underline uppercase tracking-widest">
                      View Report
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl border border-white/10 shadow-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white text-base font-bold tracking-tight">
                  Principal's Private Log
                </h3>
                <span className="material-symbols-outlined text-primary text-xl">
                  lock
                </span>
              </div>
              <div className="space-y-6 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10 pl-6">
                <div className="relative">
                  <div className="absolute -left-[27px] top-1 size-2 rounded-full bg-primary"></div>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">
                    Oct 12 • Principal Priya Sharma
                  </p>
                  <p className="text-xs text-white/60 font-medium leading-relaxed italic">
                    "Met with parents regarding university apps. Aditya is
                    leaning towards Engineering."
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[27px] top-1 size-2 rounded-full bg-white/20"></div>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">
                    Sept 19 • Admin Smith
                  </p>
                  <p className="text-xs text-white/40 font-medium leading-relaxed">
                    "Transferred to Section B Honors History per request."
                  </p>
                </div>
              </div>
              <button className="w-full mt-8 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-white/40 uppercase tracking-[0.2em] hover:bg-white/10 transition-colors border-dashed">
                + Add Administrative Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
