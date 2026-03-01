import { useNavigate } from "react-router-dom";
import { StatCard } from "../components/StatCard";
import { ParticipationOverview } from "../components/ParticipationOverview";
import { ClassCard } from "../components/ClassCard";
import { ProgramsTable } from "../components/ProgramsTable";
import { AlertsSection } from "../components/Alerts";
import { TopBar } from "../../../components/Header";

export const DashboardPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
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
                            iconBg="bg-blue-50"
                        />
                        <StatCard
                            label="Teachers"
                            value="86"
                            trend="Full Staff"
                            trendType="stable"
                            icon="person"
                            iconBg="bg-violet-50"
                        />
                        <StatCard
                            label="Attendance Today"
                            value="86%"
                            trend="+1.2%"
                            trendType="up"
                            icon="fact_check"
                            iconBg="bg-emerald-50"
                        />
                        <StatCard
                            label="Pending Actions"
                            value="07"
                            trend="3 urgent"
                            trendType="down"
                            icon="pending_actions"
                            iconBg="bg-rose-50"
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
                                        <button className="text-[12px] text-primary font-medium hover:underline underline-offset-2">
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
                                        className="text-[12px] text-primary font-medium hover:underline underline-offset-2"
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

                            {/* Quick Actions */}
                            <div className="bg-white border border-slate-100 rounded-2xl p-5">
                                <h3 className="text-secondary text-[15px] font-semibold mb-4">Quick Actions</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        { icon: "fact_check", label: "Mark Attendance", color: "bg-emerald-50 text-emerald-600" },
                                        { icon: "person_add", label: "New Admission", color: "bg-blue-50 text-blue-600" },
                                        { icon: "campaign", label: "Announcement", color: "bg-amber-50 text-amber-600" },
                                        { icon: "assignment", label: "View Reports", color: "bg-violet-50 text-violet-600" },
                                    ].map((action) => (
                                        <button
                                            key={action.label}
                                            className="flex flex-col items-center gap-2 py-4 rounded-xl border border-slate-50 hover:border-slate-200 hover:shadow-sm transition-all"
                                        >
                                            <span className={`material-symbols-outlined text-[22px] w-10 h-10 rounded-xl flex items-center justify-center ${action.color}`}>
                                                {action.icon}
                                            </span>
                                            <span className="text-[11px] font-medium text-slate-500">{action.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Campus Card */}
                            <div className="bg-secondary text-white rounded-2xl p-5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 opacity-[0.06]">
                                    <span className="material-symbols-outlined text-6xl">school</span>
                                </div>
                                <p className="text-white/50 text-[11px] font-medium uppercase tracking-wider mb-1">Academic Year</p>
                                <h3 className="text-lg font-semibold mb-3">2025 – 2026</h3>
                                <p className="text-white/50 text-[12px] leading-relaxed mb-4">
                                    Northridge Academy, Central Campus. Term 2 in progress.
                                </p>
                                <button className="w-full py-2.5 bg-primary text-secondary font-medium rounded-xl text-[13px] active:scale-[0.98] transition-transform">
                                    Switch Campus
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
