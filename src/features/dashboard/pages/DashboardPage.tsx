import { useNavigate } from "react-router-dom";
import { StatCard } from "../../../components/StatCard";
import { ParticipationOverview } from "../components/ParticipationOverview";
import { ClassCard } from "../components/ClassCard";
import { ProgramsTable } from "../components/ProgramsTable";
import { AlertsSection } from "../components/Alerts";
import { TopBar } from "../../../components/Header";
import { cn } from "../../../lib/utils";

export const DashboardPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
            <TopBar
                title="School Dashboard"
                subtitle="Northridge Academy — Central Campus"
            />

            <div className="flex-1 overflow-y-auto no-scrollbar">
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

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                        {/* Main Left Activity Column — 8 cols */}
                        <div className="lg:col-span-8 space-y-4">
                            {/* Quick Access Horizon Rail — Now Naked */}
                            <div className="px-2 py-2">
                                <div className="flex items-center justify-between mb-3 px-1">
                                    <h3 className="text-[12px] font-semibold text-slate-400/80">Quick Access</h3>
                                </div>
                                <div className="flex items-center gap-7 overflow-x-auto no-scrollbar pb-2">
                                    {[
                                        { label: "Attendance", icon: "how_to_reg", color: "bg-emerald-500/10 text-emerald-600", border: "border-emerald-100" },
                                        { label: "Enroll", icon: "person_add", color: "bg-blue-500/10 text-blue-600", border: "border-blue-100" },
                                        { label: "Announcement", icon: "campaign", color: "bg-amber-500/10 text-amber-600", border: "border-amber-100" },
                                        { label: "Collect Fee", icon: "payments", color: "bg-violet-500/10 text-violet-600", border: "border-violet-100" },
                                        { label: "Exam Marks", icon: "clinical_notes", color: "bg-rose-500/10 text-rose-600", border: "border-rose-100" },
                                        { label: "Bus Tracker", icon: "directions_bus", color: "bg-cyan-500/10 text-cyan-600", border: "border-cyan-100" },
                                        { label: "Staff Directory", icon: "badge", color: "bg-slate-500/10 text-slate-600", border: "border-slate-100" },
                                    ].map((action, i) => (
                                        <div key={i} className="flex flex-col items-center gap-2.5 group cursor-pointer min-w-[72px]">
                                            <div className={cn(
                                                "size-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-slate-200/50 bg-white",
                                                action.color, action.border
                                            )}>
                                                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                                                    {action.icon}
                                                </span>
                                            </div>
                                            <span className="text-[11px] font-medium text-slate-500 group-hover:text-secondary transition-colors text-center whitespace-nowrap">
                                                {action.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Attendance + Upcoming Row — Pulled Upward */}
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

                        </div>

                        {/* Notifications Right Column — 4 cols */}
                        <div className="lg:col-span-4 self-stretch">
                            <AlertsSection />
                        </div>
                    </div>

                    {/* Classes Needing Attention — Below the balanced row */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-8">
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
                    </div>
                </div>
            </div>
        </div>
    );
};
