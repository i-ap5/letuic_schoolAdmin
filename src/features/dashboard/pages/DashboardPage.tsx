import { useNavigate } from "react-router-dom";
import { StatCard } from "../../../components/StatCard";
import { ParticipationOverview } from "../components/ParticipationOverview";
import { ProgramsTable } from "../components/ProgramsTable";
import { AlertsSection } from "../components/Alerts";
import { TopBar } from "../../../components/Header";
import { cn } from "../../../lib/utils";
import {
    Users,
    UserPlus,
    Megaphone,
    WalletCards,
    GraduationCap,
    Bus,
    Contact,
    Search,
} from "lucide-react";

export const DashboardPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
            <TopBar
                title="Home Overview"
                subtitle="Daily insight and performance overview"
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
                        <div className="lg:col-span-8 space-y-6">

                            {/* Quick Access Horizon Rail — Now Naked */}
                            <div className="py-2 px-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-secondary text-[15px] font-semibold">Quick Access</h3>
                                </div>


                                <div className="space-y-6">
                                    {/* Row 1: Know Your Student - Search Bar Integration */}
                                    <div className="flex items-center gap-3 bg-white border border-slate-100 rounded-[18px] p-2 focus-within:ring-1 focus-within:ring-primary transition-all shadow-sm shadow-slate-100/50 group/search">
                                        <div className="pl-4 text-slate-300 group-focus-within/search:text-primary transition-colors">
                                            <Search size={20} strokeWidth={2.5} />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Know Your Student — Enter Name, Enrollment ID or Roll Number..."
                                            className="flex-1 bg-transparent border-none outline-none text-[14px] font-normal text-secondary placeholder-slate-300 py-3 px-1"
                                            onKeyDown={(e) => e.key === 'Enter' && navigate("/know-your-student")}
                                        />
                                        <button
                                            onClick={() => navigate("/know-your-student")}
                                            className="bg-primary text-secondary px-6 py-3 rounded-[12px] text-[12px]  font-bold hover:bg-secondary hover:text-white transition-all active:scale-95 shadow-lg shadow-primary/10 hover:shadow-secondary/20 whitespace-nowrap"
                                        >
                                            Get Details
                                        </button>
                                    </div>

                                    {/* Row 2: Original Action Icons */}
                                    <div className="flex items-center gap-8 pb-1 px-2">
                                        {[
                                            { label: "Attendance", icon: Users, color: "text-emerald-500", path: "/attendance" },
                                            { 
                                                label: "Onboard", 
                                                icon: UserPlus, 
                                                color: "text-blue-500", 
                                                isMenu: true,
                                                options: [
                                                    { label: "Student", path: "/directory/enroll-student", icon: "person" },
                                                    { label: "Teacher", path: "/directory/add-staff", icon: "badge" },
                                                    { label: "Driver", path: "/directory/add-driver", icon: "local_shipping" },
                                                    { label: "Bus", path: "/transportation/add-vehicle", icon: "directions_bus" },
                                                ]
                                            },
                                            { label: "Announcement", icon: Megaphone, color: "text-amber-500", path: "/communications?compose=true" },
                                            { label: "Collect Fee", icon: WalletCards, color: "text-violet-500", path: "/finance" },
                                            { label: "Exam Marks", icon: GraduationCap, color: "text-rose-500", path: "/academics" },
                                            { label: "Bus Tracker", icon: Bus, color: "text-cyan-500", path: "/transportation" },
                                            { label: "Staff Directory", icon: Contact, color: "text-slate-500", path: "/directory" },
                                        ].map((action, i) => {
                                            if (action.isMenu) {
                                                return (
                                                    <div key={i} className="group/morph relative min-w-fit">
                                                        <div className="flex flex-col items-center group cursor-pointer transition-all duration-500">
                                                            {/* Morphing Box Tool */}
                                                            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-white border border-slate-100 transition-all duration-500 group-hover/morph:w-[320px] group-hover/morph:rounded-[22px] group-hover/morph:bg-white shadow-sm relative group-hover/morph:border-primary/30 mb-2.5 overflow-visible">
                                                                {/* Primary Toggle Icon */}
                                                                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover/morph:opacity-0 group-hover/morph:scale-50">
                                                                    <action.icon size={22} strokeWidth={2} className={action.color} />
                                                                </div>

                                                                {/* Onboarding Categories */}
                                                                <div className="absolute inset-0 opacity-0 group-hover/morph:opacity-100 transition-all duration-500 flex items-center justify-around px-2 pointer-events-none group-hover/morph:pointer-events-auto">
                                                                    {action.options?.map((opt) => (
                                                                        <div 
                                                                            key={opt.label}
                                                                            onClick={(e) => { e.stopPropagation(); navigate(opt.path); }}
                                                                            className="flex flex-col items-center group/item hover:scale-110 transition-all relative pt-0.5"
                                                                        >
                                                                            <div className="size-10 rounded-full flex items-center justify-center text-slate-400 group-hover/item:bg-primary/20 group-hover/item:text-secondary transition-all">
                                                                                <span className="material-symbols-outlined text-[20px]">{opt.icon}</span>
                                                                            </div>
                                                                            {/* Label positioned OUTSIDE the box below it */}
                                                                            <span className="absolute top-[120%] text-[10px] font-bold text-secondary opacity-0 group-hover/morph:opacity-100 transition-all delay-100 whitespace-nowrap">
                                                                                {opt.label}
                                                                            </span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* Default Row Label */}
                                                            <span className="text-[11px] font-bold text-slate-400 group-hover/morph:opacity-0 transition-all tracking-tight h-4">
                                                                {action.label}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                            return (
                                                <div 
                                                    key={i}
                                                    onClick={() => action.path && navigate(action.path)}
                                                    className="flex flex-col items-center gap-2.5 group cursor-pointer min-w-fit"
                                                >
                                                    <div className={cn(
                                                        "size-12 rounded-full flex items-center justify-center bg-white border border-slate-100 transition-all duration-300 group-hover:scale-110 shadow-sm",
                                                        action.color
                                                    )}>
                                                        <action.icon size={22} strokeWidth={2} />
                                                    </div>
                                                    <span className="text-[11px] font-bold text-slate-400 group-hover:text-secondary transition-colors tracking-tight">
                                                        {action.label}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
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
                        <div className="lg:col-span-4 relative h-[600px] lg:h-auto">
                            <div className="lg:absolute lg:inset-0">
                                <AlertsSection />
                            </div>
                        </div>
                    </div>

                    {/* Class Health Monitor — Premium Glassy Redesign */}
                    <div className="w-full relative">
                        <div className="flex items-center justify-between mb-6 relative z-10">
                            <div>
                                <h3 className="text-secondary text-[15px] font-semibold">Class Monitor Focus</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <p className="text-slate-400 text-[11px] font-medium">AI-Driven Risk Detection Active</p>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate("/classes")}
                                className="text-[11px] font-light hover:underline underline-offset-2"
                            >
                                Full Report
                            </button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 relative z-10">
                            {[
                                { grade: "11-C", teacher: "Mr. Manoj P.", issue: "Attendance Drop", detail: "-22% Morning", score: 62, status: "critical" },
                                { grade: "9-D", teacher: "Ms. Dhanya S.", issue: "Grade Decline", detail: "Average Drop", score: 76, status: "warning" },
                                { grade: "10-A", teacher: "Dr. Lakshmi K.", issue: "Absenteeism", detail: "Unusual spikes", score: 68, status: "warning" },
                            ].map((item, i) => (
                                <div key={i} className="group relative">
                                    <div className="flex items-center gap-4 p-5 rounded-[18px] bg-white border border-slate-100 hover:border-primary/20 transition-all duration-500 cursor-pointer h-full">
                                        {/* Circular Gauge */}
                                        <div className="relative size-12 shrink-0">
                                            <svg className="size-full -rotate-90">
                                                <circle cx="24" cy="24" r="20" fill="none" strokeWidth="3.5" className="stroke-slate-100" />
                                                <circle cx="24" cy="24" r="20" fill="none" strokeWidth="3.5"
                                                    strokeDasharray={2 * Math.PI * 20}
                                                    strokeDashoffset={2 * Math.PI * 20 * (1 - item.score / 100)}
                                                    className={cn(
                                                        "transition-all duration-1000",
                                                        item.status === "critical" ? "stroke-rose-500" : "stroke-amber-500"
                                                    )}
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-[10px] font-black text-secondary">{item.score}%</span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-0.5">
                                                <span className="text-[12.5px] font-black text-black tracking-tight">{item.grade}</span>
                                                <div className={cn(
                                                    "px-2 py-0.5 rounded-full text-[7px] font-black border capitalize",
                                                    item.status === "critical" ? "bg-rose-50 text-rose-600 border-rose-100" : "bg-amber-50 text-amber-600 border-amber-100"
                                                )}>
                                                    {item.status}
                                                </div>
                                            </div>
                                            <h5 className="text-[12.5px] font-bold text-secondary truncate">{item.issue}</h5>
                                            <p className="text-[10px] text-slate-400 font-medium opacity-80 leading-tight truncate">{item.detail}</p>
                                        </div>

                                        {/* Action Button - Subtle */}
                                        <div className="size-7 shrink-0 rounded-lg bg-white border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0 shadow-sm">
                                            <span className="material-symbols-outlined text-[14px] text-primary">chevron_right</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
