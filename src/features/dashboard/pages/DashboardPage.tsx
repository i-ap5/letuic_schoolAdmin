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
                title="Dashboard"
                subtitle="Campus Overview • Central Main Hub"
                actions={
                    <div className="flex items-center gap-2">
                        <button className="bg-primary text-secondary px-5 py-2.5 rounded-xl text-[13px] font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                            <span className="material-symbols-outlined text-[18px]">add</span>
                            New Admission
                        </button>
                        <button className="bg-secondary text-white px-5 py-2.5 rounded-xl text-[13px] font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                            <span className="material-symbols-outlined text-[18px]">file_download</span>
                            Exports
                        </button>
                    </div>
                }
            />

            <div className="flex-1 overflow-y-auto px-6 lg:px-10 py-6 bg-slate-50/40">
                {/* Metric Bar */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex-1 min-w-[240px]">
                        <StatCard label="Active Students" value="1,240" trend="+2.1%" trendType="up" icon="group" />
                    </div>
                    <div className="flex-1 min-w-[240px]">
                        <StatCard label="Overall Participation" value="84%" trend="+5.4%" trendType="up" icon="monitoring" />
                    </div>
                    <div className="flex-1 min-w-[240px]">
                        <StatCard label="Ongoing Programs" value="12" trend="Stable" trendType="stable" icon="event_note" />
                    </div>
                    <div className="flex-1 min-w-[240px]">
                        <StatCard label="Urgent Alerts" value="03" trend="-15%" trendType="down" icon="warning" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content Area */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                            <div className="flex flex-col h-full min-h-[400px]">
                                <ParticipationOverview />
                            </div>

                            <div className="flex flex-col bg-white border border-slate-200/60 rounded-[24px] p-6 shadow-sm shadow-slate-100/50 h-full">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex flex-col gap-0.5">
                                        <h2 className="text-secondary text-lg font-semibold tracking-tight">Focus Areas</h2>
                                        <p className="text-slate-400 text-xs font-medium">Classes requiring immediate review</p>
                                    </div>
                                    <button className="text-primary text-[13px] font-semibold hover:opacity-80 transition-opacity">View All Directory</button>
                                </div>
                                <div className="flex flex-col gap-4 flex-1">
                                    <ClassCard
                                        grade="Grade 11" section="C" room="Room 205" status="At Risk" statusType="risk" teacher="Mr. Swamy" students={25} participation={62}
                                        onClick={() => navigate("/classes/11-C")}
                                    />
                                    <ClassCard
                                        grade="Grade 9" section="D" room="Lab 1" status="Attention" statusType="attention" teacher="Ms. Reddy" students={31} participation={76}
                                        onClick={() => navigate("/classes/9-D")}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white border border-slate-200/60 rounded-[24px] overflow-hidden shadow-sm shadow-slate-100/50">
                            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                                <h2 className="text-secondary text-lg font-semibold tracking-tight">Active Programs & Events</h2>
                                <button className="text-slate-400 text-xs font-semibold hover:text-secondary transition-colors uppercase tracking-widest">See Schedule &rarr;</button>
                            </div>
                            <div className="p-2">
                                <ProgramsTable />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Area */}
                    <div className="lg:col-span-4 flex flex-col gap-6 relative">
                        <div className="lg:sticky lg:top-0 space-y-6">
                            <AlertsSection />

                            {/* Quick Info Block Card */}
                            <div className="bg-secondary text-white rounded-[24px] p-6 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-6xl">school</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Academic Year 2023-24</h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-6">You are currently viewing data for the Northridge Academy central campus. Switch campus to view branches.</p>
                                <button className="w-full py-3 bg-primary text-secondary font-semibold rounded-xl text-sm active:scale-[0.98] transition-all">Switch Campus</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
