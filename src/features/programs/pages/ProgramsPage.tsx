import { TopBar } from "../../../components/Header";
import { ProgramCard } from "../components/ProgramCard";
import { cn } from "../../../lib/utils";

export const ProgramsPage = ({ isHubChild }: { isHubChild?: boolean }) => {
  const programs = [
    {
      name: "Regional Science Fair 2024",
      category: "Academic",
      participants: 45,
      status: "Active" as const,
      progress: 75,
      leadTeacher: "Dr. C.V. Raman",
      startDate: "Oct 15",
      endDate: "Dec 10",
    },
    {
      name: "District Athletics League",
      category: "Sports",
      participants: 120,
      status: "Warning" as const,
      progress: 42,
      leadTeacher: "Coach Rathore",
      startDate: "Nov 01",
      endDate: "Feb 15",
    },
    {
      name: "Inter-High Arts Expo",
      category: "Creative Arts",
      participants: 58,
      status: "Planning" as const,
      progress: 15,
      leadTeacher: "Ms. Amrita Sher-Gil",
      startDate: "Jan 05",
      endDate: "Mar 20",
    },
    {
      name: "National Coding Challenge",
      category: "Technology",
      participants: 32,
      status: "Active" as const,
      progress: 88,
      leadTeacher: "Mr. Satya Nadella",
      startDate: "Sep 20",
      endDate: "Nov 30",
    },
    {
      name: "Annual Music Festival",
      category: "Arts & Culture",
      participants: 85,
      status: "Active" as const,
      progress: 60,
      leadTeacher: "Mrs. M.S. Subbulakshmi",
      startDate: "Nov 20",
      endDate: "Dec 22",
    },
    {
      name: "Community Service Drive",
      category: "Social",
      participants: 200,
      status: "Completed" as const,
      progress: 100,
      leadTeacher: "Ms. Medha Patkar",
      startDate: "Aug 01",
      endDate: "Sep 30",
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
          title="Programs Management"
          subtitle="Explore and manage student enrichment opportunities across the network."
          actions={
            <>
              <button className="px-4 py-2 bg-white border border-dark-blue-grey/10 rounded-lg flex items-center gap-2 text-sm font-bold text-dark-blue-grey/60 hover:bg-dark-blue-grey/5 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  auto_graph
                </span>
                View Reports
              </button>
              <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm">
                <span className="material-symbols-outlined text-sm">
                  add_circle
                </span>
                Create Program
              </button>
            </>
          }
        />
      )}

      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        {/* Filters and Stats Summary */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-dark-blue-grey text-white p-4 rounded-2xl flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                Total Programs
              </span>
              <span className="text-2xl font-black">12</span>
            </div>
            <div className="bg-pale-lime text-dark-blue-grey p-4 rounded-2xl flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-dark-blue-grey/40">
                Active Now
              </span>
              <span className="text-2xl font-black">8</span>
            </div>
            <div className="bg-white border border-dark-blue-grey/10 p-4 rounded-2xl flex flex-col gap-1 shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-dark-blue-grey/40">
                Total Participants
              </span>
              <span className="text-2xl font-black">540</span>
            </div>
            <div className="bg-white border border-dark-blue-grey/10 p-4 rounded-2xl flex flex-col gap-1 shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-dark-blue-grey/40">
                Avg. Completion
              </span>
              <span className="text-2xl font-black">64%</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-dark-blue-grey/10 shadow-sm flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[250px]">
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-dark-blue-grey/30 group-focus-within:text-dark-blue-grey transition-colors">
                  search
                </span>
                <input
                  className="w-full bg-dark-blue-grey/[0.03] border-none rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-pale-lime text-dark-blue-grey placeholder-dark-blue-grey/30"
                  placeholder="Search programs..."
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <select className="bg-white border border-dark-blue-grey/10 rounded-lg text-sm px-3 py-2 text-dark-blue-grey font-bold focus:ring-pale-lime outline-none">
                <option>All Categories</option>
                <option>Academic</option>
                <option>Sports</option>
                <option>Creative Arts</option>
                <option>Technology</option>
              </select>
              <select className="bg-white border border-dark-blue-grey/10 rounded-lg text-sm px-3 py-2 text-dark-blue-grey font-bold focus:ring-pale-lime outline-none">
                <option>Status</option>
                <option>Active</option>
                <option>Planning</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
          {programs.map((program, i) => (
            <ProgramCard key={i} {...program} onClick={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
};
