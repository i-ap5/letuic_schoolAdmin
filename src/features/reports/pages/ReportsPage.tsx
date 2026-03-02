import { TopBar } from "../../../components/Header";

export const ReportsPage = () => {
  const engagementTags = [
    {
      label: "#STEM_ACADEMY",
      students: 782,
      progress: 85,
      color: "bg-primary",
    },
    {
      label: "#ATHLETICS_DEPT",
      students: 540,
      progress: 65,
      color: "bg-primary/60",
    },
    {
      label: "#COUNSELING_WELLNESS",
      students: 412,
      progress: 45,
      color: "bg-primary/40",
    },
    {
      label: "#FINE_ARTS",
      students: 320,
      progress: 38,
      color: "bg-primary/30",
    },
    {
      label: "#COMMUNITY_SERVICE",
      students: 195,
      progress: 22,
      color: "bg-primary/20",
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
            <button className="flex items-center justify-center rounded-xl h-10 px-5 bg-white border border-slate-100 text-secondary text-[13px] font-semibold shadow-sm shadow-slate-100/30 hover:bg-slate-50 transition-all">
              <span className="material-symbols-outlined text-lg mr-2">
                download
              </span>
              <span>Export Data</span>
            </button>
            <button className="flex items-center justify-center rounded-xl h-10 px-5 bg-primary text-secondary text-[13px] font-semibold shadow-sm shadow-slate-100/30 hover:opacity-90 transition-all">
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
          <div className="bg-white border border-slate-100 rounded-2xl p-3 flex justify-between items-center shadow-sm shadow-slate-100/30">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50/50 rounded-xl border border-slate-100 text-slate-600 text-[13px] font-medium hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  calendar_month
                </span>
                <span>Last 30 Days</span>
                <span className="material-symbols-outlined text-lg">
                  expand_more
                </span>
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50/50 rounded-xl border border-slate-100 text-slate-600 text-[13px] font-medium hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  school
                </span>
                <span>All Grade Levels</span>
                <span className="material-symbols-outlined text-lg">
                  expand_more
                </span>
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50/50 rounded-xl border border-slate-100 text-slate-600 text-[13px] font-medium hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  filter_list
                </span>
                <span>More Filters</span>
              </button>
            </div>
            <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest italic pr-2">
              Data refreshed 4 minutes ago
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-white border border-slate-100 shadow-sm shadow-slate-100/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                Total Participation
              </p>
              <div className="flex items-baseline justify-between relative z-10">
                <p className="text-secondary text-3xl font-black">1,284</p>
                <span className="text-emerald-500 text-sm font-black flex items-center">
                  <span className="material-symbols-outlined text-sm">
                    arrow_upward
                  </span>
                  12%
                </span>
              </div>
              <p className="text-slate-400 text-[11px] font-medium">
                Students active in at least one program
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-white border border-slate-100 shadow-sm shadow-slate-100/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                Engagement Score
              </p>
              <div className="flex items-baseline justify-between relative z-10">
                <p className="text-secondary text-3xl font-black">
                  4.2
                  <span className="text-slate-300 text-lg font-normal">
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
              <p className="text-slate-400 text-[11px] font-medium">
                Average student response rate
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-white border border-slate-100 shadow-sm shadow-slate-100/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                Target Completion
              </p>
              <div className="flex items-baseline justify-between relative z-10">
                <p className="text-secondary text-3xl font-black">85%</p>
                <span className="text-emerald-500 text-sm font-black flex items-center">
                  <span className="material-symbols-outlined text-sm">
                    arrow_upward
                  </span>
                  5%
                </span>
              </div>
              <p className="text-slate-400 text-[11px] font-medium">
                School-wide administrative goals
              </p>
            </div>
          </div>

          {/* Main Charts & Data Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/30">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-secondary text-sm font-black uppercase tracking-widest">
                  Participation by Tag
                </h3>
                <span
                  className="material-symbols-outlined text-secondary/20 cursor-help"
                  title="Hover for details"
                >
                  info
                </span>
              </div>
              <div className="space-y-6">
                {engagementTags.map((tag, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-[11px] font-black uppercase tracking-tighter text-slate-500">
                      <span>{tag.label}</span>
                      <span>{tag.students} Students</span>
                    </div>
                    <div className="h-3 bg-slate-50 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${tag.color} rounded-full transition-all duration-700`}
                        style={{ width: `${tag.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/30 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-secondary text-sm font-black uppercase tracking-widest">
                  Recent Program Outcomes
                </h3>
                <button className="text-secondary text-[11px] font-semibold hover:underline">
                  View All
                </button>
              </div>
              <div className="flex-1 space-y-4">
                {outcomes.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-2xl border border-slate-50 bg-slate-50/50 hover:bg-slate-50/50 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="size-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm shadow-slate-100/30 group-hover:border-primary transition-colors">
                        <span className="material-symbols-outlined text-slate-400 text-xl group-hover:text-secondary transition-colors">
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-secondary">
                          {item.name}
                        </p>
                        <p className="text-[10px] font-medium text-slate-400">
                          {item.date} • ID: {item.id}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-secondary">
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
          <div className="bg-secondary text-white rounded-2xl border-l-[6px] border-primary p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <span className="material-symbols-outlined text-8xl">
                analytics
              </span>
            </div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="bg-primary text-secondary p-3 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined font-bold">
                  lightbulb
                </span>
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-2">
                  Principal's Insight Summary
                </h4>
                <p className="text-sm text-white/80 leading-relaxed font-medium">
                  Participation in STEM initiatives has grown by{" "}
                  <span className="text-primary font-bold">12%</span> since
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
