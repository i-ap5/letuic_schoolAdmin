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

                            {/* Quick Actions (Modernized) */}
                            <div className="bg-white border border-slate-100 shadow-sm shadow-slate-100/30 rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-5">
                                    <h3 className="text-secondary text-[16px] font-semibold tracking-tight">Quick Actions</h3>
                                    <button className="text-slate-400 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">more_horiz</span>
                                    </button>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {[
                                        { icon: "how_to_reg", title: "Mark Attendance", subtitle: "Update daily records", color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
                                        { icon: "person_add", title: "New Admission", subtitle: "Add student profile", color: "text-blue-600 bg-blue-50 border-blue-100" },
                                        { icon: "campaign", title: "Announcements", subtitle: "Broadcast message", color: "text-amber-600 bg-amber-50 border-amber-100" },
                                    ].map((action, i) => (
                                        <button key={i} className="flex items-center gap-4 bg-white border border-slate-100 rounded-xl p-3.5 hover:shadow-md hover:border-slate-200 transition-all text-left group">
                                            <div className={`size-11 rounded-full flex items-center justify-center border ${action.color} group-hover:scale-105 transition-transform`}>
                                                <span className="material-symbols-outlined text-[20px]">{action.icon}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <h4 className="text-[13px] font-semibold text-secondary leading-tight mb-0.5">{action.title}</h4>
                                                <p className="text-[11px] text-slate-400 font-medium">{action.subtitle}</p>
                                            </div>
                                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="material-symbols-outlined text-[16px] text-slate-300">chevron_right</span>
                                            </div>
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
