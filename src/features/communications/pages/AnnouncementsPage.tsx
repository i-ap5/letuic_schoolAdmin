import { useState } from "react";
import { TopBar } from "../../../components/Header";
import { cn } from "../../../lib/utils";

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
            <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95">
              <span className="material-symbols-outlined text-sm">
                campaign
              </span>
              Post Announcement
            </button>
          }
        />
      )}

      <div className="flex-1 overflow-y-auto p-8 bg-dark-blue-grey/[0.01] space-y-8">
        {/* Engagement Analytics Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              label: "Total Reach",
              value: "4,280",
              icon: "groups",
              color: "text-dark-blue-grey",
            },
            {
              label: "Avg. Engagement",
              value: "72%",
              icon: "visibility",
              color: "text-pale-lime",
            },
            {
              label: "Delivery Success",
              value: "99.9%",
              icon: "check_circle",
              color: "text-emerald-500",
            },
            {
              label: "Drafts",
              value: "04",
              icon: "edit_note",
              color: "text-dark-blue-grey/40",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl border border-dark-blue-grey/10 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="text-[10px] font-black text-dark-blue-grey/40 uppercase tracking-widest">
                  {stat.label}
                </p>
                <span
                  className={cn(
                    "material-symbols-outlined text-sm",
                    stat.color,
                  )}
                >
                  {stat.icon}
                </span>
              </div>
              <p className="text-2xl font-black text-dark-blue-grey">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Announcements List */}
        <div className="bg-white rounded-2xl border border-dark-blue-grey/10 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-dark-blue-grey/10 flex justify-between items-center">
            <div className="flex gap-4">
              {["all", "published", "drafts", "scheduled"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg transition-all",
                    activeFilter === filter
                      ? "bg-dark-blue-grey text-white"
                      : "text-dark-blue-grey/40 hover:bg-dark-blue-grey/5",
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
                <tr className="bg-dark-blue-grey/[0.01] border-b border-dark-blue-grey/10">
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                    Title & Content
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                    Visibility
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                    Target
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                    Engagement
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-blue-grey/5">
                {announcements.map((ann) => (
                  <tr
                    key={ann.id}
                    className="hover:bg-dark-blue-grey/[0.01] transition-colors group"
                  >
                    <td className="px-6 py-4 max-w-md">
                      <p className="text-sm font-bold text-dark-blue-grey mb-1">
                        {ann.title}
                      </p>
                      <p className="text-xs text-dark-blue-grey/50 line-clamp-1">
                        {ann.content}
                      </p>
                      <p className="text-[10px] font-medium text-dark-blue-grey/30 mt-2 italic">
                        {ann.date} • ID: {ann.id}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {ann.visibility.split(", ").map((v, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-black px-2 py-0.5 rounded bg-pale-lime/10 text-dark-blue-grey border border-pale-lime/20 uppercase tracking-widest"
                          >
                            {v}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-bold text-dark-blue-grey/60">
                      {ann.target}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-dark-blue-grey/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-pale-lime"
                            style={{
                              width:
                                ann.engagement === "-" ? "0%" : ann.engagement,
                            }}
                          ></div>
                        </div>
                        <span className="text-[10px] font-black text-dark-blue-grey/70">
                          {ann.engagement}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-dark-blue-grey/40 hover:text-dark-blue-grey transition-colors">
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
