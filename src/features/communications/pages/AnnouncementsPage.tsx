import { useState } from "react";
import { TopBar } from "../../../components/Header";
import { cn } from "../../../lib/utils";
import { StatCard } from "../../../components/StatCard";

export const AnnouncementsPage = ({ isHubChild }: { isHubChild?: boolean }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const announcements = [
    {
      id: "ANN-2024-001",
      title: "Quarterly Parent-Teacher Meeting",
      content:
        "The quarterly PTM is scheduled for next Friday. All parents are requested to attend to discuss terminal results.",
      visibility: "Parents",
      target: "All Grades",
      date: "Oct 24, 2024",
      status: "Delivered",
      engagement: "84%",
    },
    {
      id: "ANN-2024-002",
      title: "New Science Lab Safety Protocols",
      content:
        "Important updates to lab safety procedures. Mandatory review for all science faculty and students.",
      visibility: "Teachers, Students",
      target: "Science Dept",
      date: "Oct 22, 2024",
      status: "Delivered",
      engagement: "92%",
    },
    {
      id: "ANN-2024-003",
      title: "Annual Sports Day Volunteer Signup",
      content:
        "Students interested in volunteering for the Annual Sports Day can now register via the portal.",
      visibility: "Students",
      target: "High School",
      date: "Oct 20, 2024",
      status: "Draft",
      engagement: "-",
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
          title="Announcements & Circulars"
          subtitle="Manage official school broadcasts and track engagement across roles."
          actions={
            <button className="bg-primary text-secondary px-4 py-2 rounded-xl text-[13px] font-semibold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm shadow-slate-100/30 active:scale-95">
              <span className="material-symbols-outlined text-sm">
                campaign
              </span>
              Post Announcement
            </button>
          }
        />
      )}

      <div className="flex-1 overflow-y-auto mx-auto px-6 lg:px-10 py-6 max-w-[1400px] space-y-8">
        {/* Engagement Analytics Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              label: "Total Reach",
              value: "4,280",
              icon: "groups",
            },
            {
              label: "Avg. Engagement",
              value: "72%",
              icon: "visibility",
            },
            {
              label: "Delivery Success",
              value: "99.9%",
              icon: "check_circle",
              iconBg: "bg-emerald-50 text-emerald-500",
            },
            {
              label: "Drafts",
              value: "04",
              icon: "edit_note",
            },
          ].map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>

        {/* Announcements List */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/30 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <div className="flex gap-4">
              {["all", "published", "drafts", "scheduled"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-xl transition-all",
                    activeFilter === filter
                      ? "bg-secondary text-white"
                      : "text-slate-400 hover:bg-slate-50",
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Title & Content
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Visibility
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Target
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Engagement
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {announcements.map((ann) => (
                  <tr
                    key={ann.id}
                    className="hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="px-6 py-4 max-w-md">
                      <p className="text-[13px] font-semibold text-secondary mb-1">
                        {ann.title}
                      </p>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {ann.content}
                      </p>
                      <p className="text-[10px] font-medium text-slate-300 mt-2 italic">
                        {ann.date} • ID: {ann.id}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {ann.visibility.split(", ").map((v, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-black px-2 py-0.5 rounded bg-primary/10 text-secondary border border-primary/20 uppercase tracking-widest"
                          >
                            {v}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[11px] font-semibold text-slate-500">
                      {ann.target}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-slate-50 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{
                              width:
                                ann.engagement === "-" ? "0%" : ann.engagement,
                            }}
                          ></div>
                        </div>
                        <span className="text-[10px] font-black text-slate-600">
                          {ann.engagement}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-secondary transition-colors">
                        <span className="material-symbols-outlined text-xl">
                          analytics
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
