import { useState } from "react";
import { TopBar } from "../../../components/Header";
import { cn } from "../../../lib/utils";

export const CurriculumPage = ({ isHubChild }: { isHubChild?: boolean }) => {
  const [activeTab, setActiveTab] = useState<
    "mapping" | "subjects" | "syllabic"
  >("mapping");

  const subjects = [
    {
      id: "SUB-001",
      name: "Mathematics",
      head: "Dr. Ananya Iyer",
      teachers: 4,
      classes: 8,
      intensity: "High",
    },
    {
      id: "SUB-002",
      name: "Modern Physics",
      head: "Pooja Trivedi",
      teachers: 3,
      classes: 6,
      intensity: "Medium",
    },
    {
      id: "SUB-003",
      name: "World History",
      head: "Arvind Swamy",
      teachers: 2,
      classes: 5,
      intensity: "Medium",
    },
    {
      id: "SUB-004",
      name: "English Literature",
      head: "Deepika Padukone",
      teachers: 5,
      classes: 10,
      intensity: "High",
    },
  ];

  const mappings = [
    {
      class: "Grade 10-A",
      subject: "Mathematics",
      teacher: "Dr. Ananya Iyer",
      students: 32,
      schedule: "Mon, Wed, Fri",
    },
    {
      class: "Grade 10-B",
      subject: "Mathematics",
      teacher: "Ms. Sharma",
      students: 28,
      schedule: "Tue, Thu, Sat",
    },
    {
      class: "Grade 11-A",
      subject: "Modern Physics",
      teacher: "Pooja Trivedi",
      students: 30,
      schedule: "Mon, Thu",
    },
    {
      class: "Grade 12-C",
      subject: "World History",
      teacher: "Arvind Swamy",
      students: 25,
      schedule: "Wed, Fri",
    },
  ];

  return (
    <div
      className={cn(
        "flex-1 flex flex-col overflow-hidden bg-white",
        !isHubChild && "h-screen",
      )}
    >
      {!isHubChild && (
        <TopBar
          title="Curriculum & Subject Mapping"
          subtitle="Manage academic structure, subject allocations, and teacher-student mapping."
          actions={
            <button className="bg-primary text-secondary px-4 py-2 rounded-xl text-[13px] font-semibold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm shadow-slate-100/30 active:scale-95">
              <span className="material-symbols-outlined text-sm">
                assignment_ind
              </span>
              Assign Teacher
            </button>
          }
        />
      )}

      <div className="px-8 pt-6 border-b border-slate-100 shrink-0 bg-white">
        <div className="flex gap-8">
          {[
            { id: "mapping", label: "Subject Mapping", icon: "hub" },
            { id: "subjects", label: "Subject Inventory", icon: "inventory_2" },
            { id: "syllabic", label: "Syllabic Tracker", icon: "fact_check" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "flex items-center gap-2 pb-4 text-[13px] font-semibold tracking-tight transition-all relative",
                activeTab === tab.id
                  ? "text-secondary"
                  : "text-slate-400 hover:text-secondary",
              )}
            >
              <span className="material-symbols-outlined text-lg">
                {tab.icon}
              </span>
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto mx-auto px-6 lg:px-10 py-6 max-w-[1400px] ">
        {activeTab === "mapping" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/30 overflow-hidden">
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="text-secondary text-[16px] font-semibold">
                      Current Assignments
                    </h3>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 text-sm">
                        search
                      </span>
                      <input
                        className="pl-9 pr-4 py-2 border border-slate-100 rounded-xl text-xs w-64 outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Search class or subject..."
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100">
                          <th className="px-6 py-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                            Class
                          </th>
                          <th className="px-6 py-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                            Subject
                          </th>
                          <th className="px-6 py-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                            Teacher
                          </th>
                          <th className="px-6 py-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                            Students
                          </th>
                          <th className="px-6 py-4 text-[10px] font-black text-slate-300 uppercase tracking-widest text-right">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {mappings.map((m, i) => (
                          <tr
                            key={i}
                            className="hover:bg-slate-50/50 transition-colors group"
                          >
                            <td className="px-6 py-4 font-bold text-sm text-secondary">
                              {m.class}
                            </td>
                            <td className="px-6 py-4">
                              <span className="px-2 py-1 rounded bg-slate-50 text-secondary text-[10px] font-black border border-slate-50 tracking-widest">
                                {m.subject}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-black text-secondary">
                                  {m.teacher.split(" ").pop()?.charAt(0)}
                                </div>
                                <span className="text-[13px] font-medium text-slate-600">
                                  {m.teacher}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-[13px] font-semibold text-slate-400">
                              {m.students}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button className="text-slate-300 hover:text-secondary transition-colors">
                                <span className="material-symbols-outlined text-xl">
                                  edit_note
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

              <aside className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/30">
                  <h3 className="text-secondary text-sm font-black uppercase tracking-widest mb-4">
                    Subject Distribution
                  </h3>
                  <div className="space-y-4">
                    {subjects.map((sub, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter text-slate-500">
                          <span>{sub.name}</span>
                          <span>{sub.classes} Classes</span>
                        </div>
                        <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-700"
                            style={{ width: `${(sub.classes / 12) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-secondary rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                  <h4 className="text-[16px] font-semibold mb-2">
                    Smart Conflict Check
                  </h4>
                  <p className="text-xs text-white/50 mb-4">
                    Ensure no teacher is double-booked across sections.
                  </p>
                  <button className="w-full bg-white/10 border border-white/20 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-colors">
                    Run Audit
                  </button>
                </div>
              </aside>
            </div>
          </div>
        )}

        {activeTab === "subjects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((sub, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/30 hover:border-primary transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="size-12 rounded-2xl bg-slate-50/50 flex items-center justify-center text-secondary/20 group-hover:bg-primary group-hover:text-secondary transition-all">
                    <span className="material-symbols-outlined text-2xl font-light">
                      auto_stories
                    </span>
                  </div>
                  <span
                    className={cn(
                      "text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded border",
                      sub.intensity === "High"
                        ? "bg-red-50 text-red-700 border-red-100"
                        : "bg-emerald-50 text-emerald-700 border-emerald-100",
                    )}
                  >
                    {sub.intensity} Load
                  </span>
                </div>
                <h3 className="text-lg font-black text-secondary mb-1">
                  {sub.name}
                </h3>
                <p className="text-xs text-slate-400 font-medium mb-4">
                  Lead: {sub.head}
                </p>
                <div className="flex justify-between pt-4 border-t border-slate-50 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                  <span>{sub.teachers} Teachers</span>
                  <span>{sub.classes} Units</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
