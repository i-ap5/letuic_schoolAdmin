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
            <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95">
              <span className="material-symbols-outlined text-sm">
                assignment_ind
              </span>
              Assign Teacher
            </button>
          }
        />
      )}

      <div className="px-8 pt-6 border-b border-dark-blue-grey/10 shrink-0 bg-white">
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
                "flex items-center gap-2 pb-4 text-sm font-bold tracking-tight transition-all relative",
                activeTab === tab.id
                  ? "text-dark-blue-grey"
                  : "text-dark-blue-grey/40 hover:text-dark-blue-grey",
              )}
            >
              <span className="material-symbols-outlined text-lg">
                {tab.icon}
              </span>
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-pale-lime rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8 bg-dark-blue-grey/[0.01]">
        {activeTab === "mapping" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl border border-dark-blue-grey/10 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-dark-blue-grey/10 flex justify-between items-center">
                    <h3 className="text-dark-blue-grey text-lg font-bold">
                      Current Assignments
                    </h3>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-dark-blue-grey/30 text-sm">
                        search
                      </span>
                      <input
                        className="pl-9 pr-4 py-2 border border-dark-blue-grey/10 rounded-lg text-xs w-64 outline-none focus:ring-2 focus:ring-pale-lime"
                        placeholder="Search class or subject..."
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-dark-blue-grey/[0.01] border-b border-dark-blue-grey/10">
                          <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                            Class
                          </th>
                          <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                            Subject
                          </th>
                          <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                            Teacher
                          </th>
                          <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                            Students
                          </th>
                          <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest text-right">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-dark-blue-grey/5">
                        {mappings.map((m, i) => (
                          <tr
                            key={i}
                            className="hover:bg-dark-blue-grey/[0.01] transition-colors group"
                          >
                            <td className="px-6 py-4 font-bold text-sm text-dark-blue-grey">
                              {m.class}
                            </td>
                            <td className="px-6 py-4">
                              <span className="px-2 py-1 rounded bg-dark-blue-grey/5 text-dark-blue-grey text-[10px] font-black border border-dark-blue-grey/5 tracking-widest">
                                {m.subject}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <div className="size-6 rounded-full bg-pale-lime/20 flex items-center justify-center text-[10px] font-black text-dark-blue-grey">
                                  {m.teacher.split(" ").pop()?.charAt(0)}
                                </div>
                                <span className="text-sm font-medium text-dark-blue-grey/70">
                                  {m.teacher}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-dark-blue-grey/40">
                              {m.students}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button className="text-dark-blue-grey/30 hover:text-dark-blue-grey transition-colors">
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
                <div className="bg-white p-6 rounded-2xl border border-dark-blue-grey/10 shadow-sm">
                  <h3 className="text-dark-blue-grey text-sm font-black uppercase tracking-widest mb-4">
                    Subject Distribution
                  </h3>
                  <div className="space-y-4">
                    {subjects.map((sub, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter text-dark-blue-grey/50">
                          <span>{sub.name}</span>
                          <span>{sub.classes} Classes</span>
                        </div>
                        <div className="h-2 bg-dark-blue-grey/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-pale-lime rounded-full transition-all duration-700"
                            style={{ width: `${(sub.classes / 12) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-dark-blue-grey rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                  <h4 className="text-lg font-bold mb-2">
                    Smart Conflict Check
                  </h4>
                  <p className="text-xs text-white/50 mb-4">
                    Ensure no teacher is double-booked across sections.
                  </p>
                  <button className="w-full bg-white/10 border border-white/20 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-colors">
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
                className="bg-white p-6 rounded-2xl border border-dark-blue-grey/10 shadow-sm hover:border-pale-lime transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="size-12 rounded-2xl bg-dark-blue-grey/[0.02] flex items-center justify-center text-dark-blue-grey/20 group-hover:bg-pale-lime group-hover:text-dark-blue-grey transition-all">
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
                <h3 className="text-lg font-black text-dark-blue-grey mb-1">
                  {sub.name}
                </h3>
                <p className="text-xs text-dark-blue-grey/40 font-medium mb-4">
                  Lead: {sub.head}
                </p>
                <div className="flex justify-between pt-4 border-t border-dark-blue-grey/5 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
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
