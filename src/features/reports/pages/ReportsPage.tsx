import { TopBar } from "../../../components/Header";

export const ReportsPage = () => {
  const engagementTags = [
    {
      label: "#STEM_ACADEMY",
      students: 782,
      progress: 85,
      color: "bg-pale-lime",
    },
    {
      label: "#ATHLETICS_DEPT",
      students: 540,
      progress: 65,
      color: "bg-pale-lime/60",
    },
    {
      label: "#COUNSELING_WELLNESS",
      students: 412,
      progress: 45,
      color: "bg-pale-lime/40",
    },
    {
      label: "#FINE_ARTS",
      students: 320,
      progress: 38,
      color: "bg-pale-lime/30",
    },
    {
      label: "#COMMUNITY_SERVICE",
      students: 195,
      progress: 22,
      color: "bg-pale-lime/20",
    },
  ];

  const outcomes = [
    {
      name: "Annual Science Fair",
      id: "4039",
      date: "Mar 12, 2024",
      attendance: "94%",
      status: "Exceeded Target",
      statusColor: "text-emerald-500",
      icon: "event",
    },
    {
      name: "Parent Counseling Seminar",
      id: "3982",
      date: "Mar 08, 2024",
      attendance: "62%",
      status: "Below Target",
      statusColor: "text-red-500",
      icon: "groups_2",
    },
    {
      name: "Regional Track Finals",
      id: "3845",
      date: "Feb 28, 2024",
      attendance: "100%",
      status: "Target Met",
      statusColor: "text-emerald-500",
      icon: "sports_soccer",
    },
    {
      name: "Literacy Workshop",
      id: "3711",
      date: "Feb 22, 2024",
      attendance: "88%",
      status: "Exceeded Target",
      statusColor: "text-emerald-500",
      icon: "menu_book",
    },
  ];

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
      <TopBar
        title="Reports & Insights"
        subtitle="Systematic data review of student participation and program efficacy."
        actions={
          <>
            <button className="flex items-center justify-center rounded-lg h-10 px-5 bg-white border border-dark-blue-grey/10 text-dark-blue-grey text-sm font-bold shadow-sm hover:bg-dark-blue-grey/5 transition-all">
              <span className="material-symbols-outlined text-lg mr-2">
                download
              </span>
              <span>Export Data</span>
            </button>
            <button className="flex items-center justify-center rounded-lg h-10 px-5 bg-pale-lime text-dark-blue-grey text-sm font-bold shadow-sm hover:opacity-90 transition-all">
              <span className="material-symbols-outlined text-lg mr-2">
                picture_as_pdf
              </span>
              <span>Generate Institutional PDF</span>
            </button>
          </>
        }
      />
      <div className="flex-1 overflow-y-auto px-8 py-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Toolbar / Filters */}
          <div className="bg-white border border-dark-blue-grey/10 rounded-xl p-3 flex justify-between items-center shadow-sm">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-dark-blue-grey/[0.03] rounded-lg border border-dark-blue-grey/10 text-dark-blue-grey/70 text-sm font-medium hover:bg-dark-blue-grey/5 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  calendar_month
                </span>
                <span>Last 30 Days</span>
                <span className="material-symbols-outlined text-lg">
                  expand_more
                </span>
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-dark-blue-grey/[0.03] rounded-lg border border-dark-blue-grey/10 text-dark-blue-grey/70 text-sm font-medium hover:bg-dark-blue-grey/5 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  school
                </span>
                <span>All Grade Levels</span>
                <span className="material-symbols-outlined text-lg">
                  expand_more
                </span>
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-dark-blue-grey/[0.03] rounded-lg border border-dark-blue-grey/10 text-dark-blue-grey/70 text-sm font-medium hover:bg-dark-blue-grey/5 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  filter_list
                </span>
                <span>More Filters</span>
              </button>
            </div>
            <div className="text-dark-blue-grey/40 text-[10px] font-bold uppercase tracking-widest italic pr-2">
              Data refreshed 4 minutes ago
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-white border border-dark-blue-grey/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pale-lime/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
              <p className="text-dark-blue-grey/40 text-[10px] font-black uppercase tracking-widest">
                Total Participation
              </p>
              <div className="flex items-baseline justify-between relative z-10">
                <p className="text-dark-blue-grey text-3xl font-black">1,284</p>
                <span className="text-emerald-500 text-sm font-black flex items-center">
                  <span className="material-symbols-outlined text-sm">
                    arrow_upward
                  </span>
                  12%
                </span>
              </div>
              <p className="text-dark-blue-grey/40 text-[11px] font-medium">
                Students active in at least one program
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-white border border-dark-blue-grey/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pale-lime/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
              <p className="text-dark-blue-grey/40 text-[10px] font-black uppercase tracking-widest">
                Engagement Score
              </p>
              <div className="flex items-baseline justify-between relative z-10">
                <p className="text-dark-blue-grey text-3xl font-black">
                  4.2
                  <span className="text-dark-blue-grey/30 text-lg font-normal">
                    /5
                  </span>
                </p>
                <span className="text-red-500 text-sm font-black flex items-center">
                  <span className="material-symbols-outlined text-sm">
                    arrow_downward
                  </span>
                  2%
                </span>
              </div>
              <p className="text-dark-blue-grey/40 text-[11px] font-medium">
                Average student response rate
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-white border border-dark-blue-grey/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pale-lime/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
              <p className="text-dark-blue-grey/40 text-[10px] font-black uppercase tracking-widest">
                Target Completion
              </p>
              <div className="flex items-baseline justify-between relative z-10">
                <p className="text-dark-blue-grey text-3xl font-black">85%</p>
                <span className="text-emerald-500 text-sm font-black flex items-center">
                  <span className="material-symbols-outlined text-sm">
                    arrow_upward
                  </span>
                  5%
                </span>
              </div>
              <p className="text-dark-blue-grey/40 text-[11px] font-medium">
                School-wide administrative goals
              </p>
            </div>
          </div>

          {/* Main Charts & Data Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-dark-blue-grey/10 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-dark-blue-grey text-sm font-black uppercase tracking-widest">
                  Participation by Tag
                </h3>
                <span
                  className="material-symbols-outlined text-dark-blue-grey/20 cursor-help"
                  title="Hover for details"
                >
                  info
                </span>
              </div>
              <div className="space-y-6">
                {engagementTags.map((tag, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-[11px] font-black uppercase tracking-tighter text-dark-blue-grey/50">
                      <span>{tag.label}</span>
                      <span>{tag.students} Students</span>
                    </div>
                    <div className="h-3 bg-dark-blue-grey/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${tag.color} rounded-full transition-all duration-700`}
                        style={{ width: `${tag.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-dark-blue-grey/10 shadow-sm flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-dark-blue-grey text-sm font-black uppercase tracking-widest">
                  Recent Program Outcomes
                </h3>
                <button className="text-dark-blue-grey text-xs font-bold hover:underline">
                  View All
                </button>
              </div>
              <div className="flex-1 space-y-4">
                {outcomes.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-xl border border-dark-blue-grey/5 bg-dark-blue-grey/[0.01] hover:bg-dark-blue-grey/[0.03] transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="size-10 bg-white border border-dark-blue-grey/10 rounded-lg flex items-center justify-center shadow-sm group-hover:border-pale-lime transition-colors">
                        <span className="material-symbols-outlined text-dark-blue-grey/40 text-xl group-hover:text-dark-blue-grey transition-colors">
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-dark-blue-grey">
                          {item.name}
                        </p>
                        <p className="text-[10px] font-medium text-dark-blue-grey/40">
                          {item.date} • ID: {item.id}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-dark-blue-grey">
                        {item.attendance} Attendance
                      </p>
                      <p
                        className={`text-[10px] font-black uppercase tracking-wider ${item.statusColor}`}
                      >
                        {item.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Principal's Insight Summary */}
          <div className="bg-dark-blue-grey text-white rounded-2xl border-l-[6px] border-pale-lime p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <span className="material-symbols-outlined text-8xl">
                analytics
              </span>
            </div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="bg-pale-lime text-dark-blue-grey p-3 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined font-bold">
                  lightbulb
                </span>
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-pale-lime mb-2">
                  Principal's Insight Summary
                </h4>
                <p className="text-sm text-white/80 leading-relaxed font-medium">
                  Participation in STEM initiatives has grown by{" "}
                  <span className="text-pale-lime font-bold">12%</span> since
                  the previous reporting cycle. However, engagement in
                  "Counseling Wellness" sessions remains below institutional
                  targets. Recommend cross-referencing attendance records with
                  academic performance metrics for the Grade 10 cohort to
                  identify potential intervention requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
