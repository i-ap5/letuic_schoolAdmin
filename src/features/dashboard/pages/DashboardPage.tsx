import { useNavigate } from "react-router-dom";
import { StatCard } from "../../../components/StatCard";
import { ParticipationOverview } from "../components/ParticipationOverview";
import { ClassCard } from "../components/ClassCard";
import { ProgramsTable } from "../components/ProgramsTable";
import { AlertsSection } from "../components/Alerts";
import { TopBar } from "../../../components/Header";

export const DashboardPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
            <TopBar
                title="School Dashboard"
                subtitle="Northridge Academy — Central Campus"
            />

            <div className="flex-1 overflow-y-auto">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 space-y-6">

                    {/* Stat Cards Row */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <StatCard
                            label="Total Students"
                            value="1,240"
                            trend="+2.1%"
                            trendType="up"
                            icon="group"
                        />
                        <StatCard
                            label="Teachers"
                            value="86"
                            trend="Full Staff"
                            trendType="stable"
                            icon="person"
                        />
                        <StatCard
                            label="Attendance Today"
                            value="86%"
                            trend="+1.2%"
                            trendType="up"
                            icon="fact_check"
                        />
                        <StatCard
                            label="Pending Actions"
                            value="07"
                            trend="3 urgent"
                            trendType="down"
                            icon="pending_actions"
                        />
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                        {/* Left Column — 8 cols */}
                        <div className="lg:col-span-8 space-y-6">

                            {/* Row: Attendance + Upcoming */}
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                <ParticipationOverview />

                                {/* Upcoming This Week */}
                                <div className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col">
                                    <div className="flex items-center justify-between mb-5">
                                        <h3 className="text-secondary text-[15px] font-semibold">Upcoming This Week</h3>
                                        <button className="text-[11px] font-light hover:underline underline-offset-2">
                                            Full Calendar
                                        </button>
                                    </div>
                                    <ProgramsTable />
                                </div>
                            </div>

                            {/* Classes Needing Attention */}
                            <div className="bg-white rounded-2xl border border-slate-100 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-secondary text-[15px] font-semibold">Classes Needing Attention</h3>
                                        <p className="text-slate-400 text-xs font-medium mt-0.5">Low attendance or declining performance</p>
                                    </div>
                                    <button
                                        onClick={() => navigate("/classes")}
                                        className="text-[11px] font-medium hover:underline underline-offset-2"
                                    >
                                        All Classes →
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    <ClassCard
                                        grade="Grade 11" section="C" room="Room 205" status="At Risk" statusType="risk" teacher="Mr. Swamy" students={25} participation={62}
                                        onClick={() => navigate("/classes/11-C")}
                                    />
                                    <ClassCard
                                        grade="Grade 9" section="D" room="Lab 1" status="Attention" statusType="attention" teacher="Ms. Reddy" students={31} participation={76}
                                        onClick={() => navigate("/classes/9-D")}
                                    />
                                    <ClassCard
                                        grade="Grade 8" section="A" room="Room 102" status="On Track" statusType="normal" teacher="Mr. Nair" students={38} participation={91}
                                        onClick={() => navigate("/classes/8-A")}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Column — 4 cols */}
                        <div className="lg:col-span-4 space-y-6">
                            <AlertsSection />

                            {/* Quick Actions — Premium Grid */}
                            <div className="bg-white border border-slate-100 shadow-sm shadow-slate-100/30 rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-5">
                                    <div>
                                        <h3 className="text-secondary text-[16px] font-semibold tracking-tight">Quick Actions</h3>
                                        <p className="text-[11px] text-slate-400 font-medium mt-0.5">Frequently used shortcuts</p>
                                    </div>
                                    <button className="size-8 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-colors">
                                        <span className="material-symbols-outlined text-[16px] text-slate-400">tune</span>
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 gap-2.5">
                                    {[
                                        {
                                            icon: "how_to_reg",
                                            title: "Attendance",
                                            gradient: "from-emerald-500 to-teal-600",
                                            bg: "bg-emerald-50",
                                            iconColor: "text-emerald-600",
                                            pulse: true,
                                        },
                                        {
                                            icon: "person_add",
                                            title: "New Admission",
                                            gradient: "from-blue-500 to-indigo-600",
                                            bg: "bg-blue-50",
                                            iconColor: "text-blue-600",
                                            pulse: false,
                                        },
                                        {
                                            icon: "campaign",
                                            title: "Announce",
                                            gradient: "from-amber-400 to-orange-500",
                                            bg: "bg-amber-50",
                                            iconColor: "text-amber-600",
                                            pulse: false,
                                        },
                                        {
                                            icon: "upload_file",
                                            title: "Upload Marks",
                                            gradient: "from-violet-500 to-purple-600",
                                            bg: "bg-violet-50",
                                            iconColor: "text-violet-600",
                                            pulse: false,
                                        },
                                        {
                                            icon: "event_note",
                                            title: "Schedule Exam",
                                            gradient: "from-rose-400 to-pink-600",
                                            bg: "bg-rose-50",
                                            iconColor: "text-rose-600",
                                            pulse: false,
                                        },
                                        {
                                            icon: "more_horiz",
                                            title: "More",
                                            gradient: "from-slate-400 to-slate-500",
                                            bg: "bg-slate-50",
                                            iconColor: "text-slate-500",
                                            pulse: false,
                                        },
                                    ].map((action, i) => (
                                        <button
                                            key={i}
                                            className="group relative flex flex-col items-center gap-2.5 rounded-xl border border-slate-100 bg-white p-4 text-center hover:border-transparent hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer overflow-hidden"
                                        >
                                            {/* Gradient overlay on hover */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />

                                            {/* Icon container */}
                                            <div className="relative z-10">
                                                <div className={`size-11 rounded-xl ${action.bg} group-hover:bg-white/20 flex items-center justify-center transition-all duration-200 group-hover:scale-110`}>
                                                    <span className={`material-symbols-outlined text-[22px] ${action.iconColor} group-hover:text-white transition-colors duration-200`} style={{ fontVariationSettings: '"FILL" 1' }}>
                                                        {action.icon}
                                                    </span>
                                                </div>
                                                {action.pulse && (
                                                    <span className="absolute -top-0.5 -right-0.5 flex size-3">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                                        <span className="relative inline-flex rounded-full size-3 bg-emerald-500 border-2 border-white" />
                                                    </span>
                                                )}
                                            </div>

                                            {/* Title */}
                                            <span className="relative z-10 text-[12px] font-semibold text-secondary group-hover:text-white transition-colors duration-200 leading-tight">
                                                {action.title}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
