import { useNavigate, useParams } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";

export const ExamDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const examData = {
    title: "Mid-Term Examination 2024",
    id: id || "EX-2024-001",
    status: "Completed",
    subjects: [
      {
        name: "Mathematics",
        teacher: "Dr. Ananya Iyer",
        avgScore: 76.5,
        submissions: "100%",
        status: "Published",
      },
      {
        name: "Science",
        teacher: "Pooja Trivedi",
        avgScore: 82.1,
        submissions: "100%",
        status: "Published",
      },
      {
        name: "History",
        teacher: "Arvind Swamy",
        avgScore: 74.8,
        submissions: "98%",
        status: "Reviewing",
      },
      {
        name: "English Literature",
        teacher: "Deepika Padukone",
        avgScore: 79.2,
        submissions: "100%",
        status: "Published",
      },
    ],
    studentPerformance: [
      {
        name: "Aditya Verma",
        grade: "10B",
        math: 85,
        science: 90,
        history: 88,
        english: 82,
        gpa: 3.8,
        img: "https://images.unsplash.com/photo-1542343633-ce3256525ee3?w=400&h=400&fit=crop",
      },
      {
        name: "Isha Kapoor",
        grade: "10B",
        math: 65,
        science: 72,
        history: 68,
        english: 70,
        gpa: 2.9,
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      },
      {
        name: "Kabir Mehra",
        grade: "10B",
        math: 92,
        science: 88,
        history: 94,
        english: 90,
        gpa: 4.0,
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      },
      {
        name: "Sneha Nair",
        grade: "10B",
        math: 42,
        science: 55,
        history: 48,
        english: 50,
        gpa: 2.1,
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      },
    ],
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
      <TopBar
        title={examData.title}
        subtitle={`Exam ID: ${examData.id} | Status: ${examData.status}`}
        actions={
          <div className="flex items-center gap-3">
            <button className="bg-white border border-slate-100 text-secondary px-4 py-2 rounded-xl text-[13px] font-semibold flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm shadow-slate-100/30">
              <span className="material-symbols-outlined text-lg">
                download
              </span>
              Export CSV
            </button>
            <button className="bg-secondary text-white px-4 py-2 rounded-xl text-[13px] font-semibold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg active:scale-95">
              <span className="material-symbols-outlined text-sm">publish</span>
              Upload Marks (CSV)
            </button>
          </div>
        }
      />

      <div className="px-8 pt-6 pb-4 shrink-0 border-b border-slate-100">
        <nav className="flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
          <button
            onClick={() => navigate("/examinations")}
            className="hover:text-primary transition-colors"
          >
            Examinations
          </button>
          <span className="material-symbols-outlined text-[10px]">
            chevron_right
          </span>
          <span className="text-slate-500">{examData.id}</span>
        </nav>
      </div>

      <div className="flex-1 overflow-y-auto mx-auto px-6 lg:px-10 py-6 max-w-[1400px] space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Subject-wise Marks Status */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-secondary text-base font-black uppercase tracking-[0.15em] leading-none mb-4 pl-2">
              Subject Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {examData.subjects.map((subject, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/30 flex flex-col gap-3"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[13px] font-semibold text-secondary">
                        {subject.name}
                      </h3>
                      <p className="text-[10px] font-medium text-slate-400">
                        {subject.teacher}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border",
                        subject.status === "Published"
                          ? "bg-emerald-500/15 text-emerald-700 border border-emerald-500/20"
                          : "bg-primary/10 text-secondary border border-primary/20",
                      )}
                    >
                      {subject.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-end mt-2">
                    <div className="space-y-1">
                      <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">
                        Avg. Score
                      </p>
                      <p className="text-2xl font-black text-secondary tracking-tighter">
                        {subject.avgScore}%
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">
                        Submissions
                      </p>
                      <p className="text-[11px] font-semibold text-secondary">
                        {subject.submissions}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Student Performance Details */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/30 overflow-hidden mt-8">
              <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                <h3 className="text-secondary text-[16px] font-semibold tracking-tight">
                  Student-wise Performance Breakdown
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50/50 border-b border-slate-100">
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Student
                      </th>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">
                        Math
                      </th>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">
                        Science
                      </th>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">
                        History
                      </th>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-right">
                        GPA
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {examData.studentPerformance.map((student, i) => (
                      <tr
                        key={i}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="size-8 rounded-full bg-cover bg-center border border-slate-100"
                              style={{
                                backgroundImage: `url("${student.img}")`,
                              }}
                            ></div>
                            <div>
                              <p className="text-[13px] font-semibold text-secondary">
                                {student.name}
                              </p>
                              <p className="text-[10px] font-medium text-slate-400">
                                Section {student.grade}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span
                            className={cn(
                              "text-[11px] font-semibold",
                              student.math < 50
                                ? "text-red-500"
                                : "text-secondary",
                            )}
                          >
                            {student.math}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center text-[11px] font-semibold text-secondary">
                          {student.science}
                        </td>
                        <td className="px-6 py-4 text-center text-[11px] font-semibold text-secondary">
                          {student.history}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="px-2 py-1 rounded bg-primary text-secondary text-[10px] font-black border border-slate-100 shadow-sm shadow-slate-100/30">
                            {student.gpa.toFixed(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar Analytics */}
          <aside className="space-y-6">
            <div className="bg-secondary rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 size-40 bg-primary opacity-[0.05] rounded-full group-hover:scale-125 transition-transform duration-700"></div>
              <h3 className="text-[18px] font-semibold tracking-tight text-secondary leading-tight mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  insert_chart
                </span>
                Exam Insights
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                      Class Average
                    </p>
                    <p className="text-lg font-black text-primary">78.4%</p>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[78.4%] rounded-full shadow-[0_0_10px_rgba(219,232,144,0.3)]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                      Passing Rate
                    </p>
                    <p className="text-lg font-black text-emerald-400">92.1%</p>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 w-[92.1%] rounded-full shadow-[0_0_10px_rgba(52,211,153,0.3)]"></div>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 space-y-3">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest underline underline-offset-4 mb-2">
                    Internal Flags
                  </p>
                  <div className="flex items-center gap-3 text-xs text-white/70">
                    <span className="material-symbols-outlined text-red-500 text-sm">
                      warning
                    </span>
                    4 students below threshold
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/70">
                    <span className="material-symbols-outlined text-primary text-sm">
                      check_circle
                    </span>
                    All marks submitted for Grade 10
                  </div>
                </div>
                <button className="w-full mt-4 bg-white/5 border border-white/10 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-colors">
                  Generate Grade Distributions
                </button>
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-6 text-secondary shadow-lg border-2 border-slate-50">
              <h3 className="text-lg font-black italic tracking-tighter mb-2 underline decoration-white/50 underline-offset-4">
                CSV Template
              </h3>
              <p className="text-[11px] font-medium mb-4 opacity-70">
                Download the standard template for bulk mark uploads.
              </p>
              <button className="w-full bg-secondary text-white py-3 rounded-2xl text-[11px] font-semibold flex items-center justify-center gap-2 shadow-xl hover:opacity-90 transition-all">
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                Download Template
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
