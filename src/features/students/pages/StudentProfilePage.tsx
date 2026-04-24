import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";
import { 
  GraduationCap, 
  Users, 
  Phone, 
  Calendar, 
  Trophy, 
  AlertCircle,
  Lock,
  ChevronRight,
  ArrowUpRight,
  Activity,
  History
} from "lucide-react";

export const StudentProfilePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Overview");

  const students = [
    {
      name: "Aavya S.",
      id: "OA-2024-001",
      grade: "12th Grade",
      section: "A",
      participation: 92,
      auraScore: 98.4,
      attendanceRate: 98,
      gpa: 3.9,
      enrollmentDate: "Aug 2021",
      status: "Active",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?w=400&h=400&fit=crop",
    },
    {
        name: "Ishaan K.",
        id: "OA-2024-042",
        grade: "10th Grade",
        section: "B",
        participation: 45,
        auraScore: 64.2,
        attendanceRate: 72,
        gpa: 2.1,
        enrollmentDate: "Aug 2022",
        status: "At Risk",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      },
      {
        name: "Meera V.",
        id: "OA-2024-118",
        grade: "11th Grade",
        section: "C",
        participation: 88,
        auraScore: 91.5,
        attendanceRate: 94,
        gpa: 3.7,
        enrollmentDate: "Jan 2022",
        status: "Active",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      },
  ];

  const student = students.find((s) => s.id === id) || students[0];

  const renderTabContent = () => {
    // Standardized spacing schema to match Dashboard aesthetic
    const colSpacing = "space-y-8";
    const cardPadding = "p-8";

    switch (activeTab) {
      case "Academic History":
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 animate-in fade-in duration-500">
            <div className={cn("md:col-span-8", colSpacing)}>
                <div className={cn("bg-white rounded-2xl border border-slate-100 shadow-sm", cardPadding)}>
                    <div className="flex items-center justify-between mb-8 text-center md:text-left">
                        <h3 className="text-secondary font-semibold text-base w-full md:w-auto">Longitudinal Performance</h3>
                        <div className="hidden md:flex gap-2">
                             <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-lg text-primary text-[10px] font-bold uppercase">
                                <ArrowUpRight size={12} />
                                Trending Up
                             </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            { term: "Current Session", grade: "A+", points: "96.4%" },
                            { term: "Prior Session", grade: "A", points: "92.1%" },
                            { term: "Annual Avg", grade: "A", points: "94.2%" },
                        ].map((stat, i) => (
                            <div key={i} className="p-5 rounded-xl bg-slate-50 border border-slate-100/50 text-center sm:text-left">
                                <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-tighter">{stat.term}</p>
                                <div className="flex items-baseline justify-center sm:justify-start gap-2">
                                    <span className="text-2xl font-bold text-secondary tracking-tight">{stat.grade}</span>
                                    <span className="text-[12px] font-medium text-slate-500">{stat.points}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={cn("bg-white rounded-2xl border border-slate-100 shadow-sm", cardPadding)}>
                    <h3 className="text-secondary font-semibold text-base mb-6 text-center md:text-left">Course Material Masteries</h3>
                    <div className="space-y-6">
                        {[
                            { subject: "Advanced Mathematics", val: 96 },
                            { subject: "Classical Physics", val: 92 },
                            { subject: "Modern World History", val: 84 },
                            { subject: "English Rhetoric", val: 88 },
                        ].map((sub, i) => (
                            <div key={i} className="flex items-center gap-6">
                                <div className="flex-1">
                                    <p className="text-[13px] font-semibold text-secondary mb-2">{sub.subject}</p>
                                    <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary" style={{ width: `${sub.val}%` }} />
                                    </div>
                                </div>
                                <span className="text-[14px] font-bold text-secondary w-10 text-right">{sub.val}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={cn("md:col-span-4", colSpacing)}>
                <div className={cn("bg-white rounded-2xl border border-slate-100 shadow-sm text-center md:text-left", cardPadding)}>
                    <h3 className="text-secondary font-semibold text-base mb-4">Verification</h3>
                    <p className="text-[12px] text-slate-400 font-medium leading-relaxed mb-6">Institutional transcript is digitally verified for current semester status.</p>
                    <button className="w-full py-3.5 bg-secondary text-white rounded-xl text-[12px] font-semibold hover:bg-primary hover:text-secondary transition-all">Download Repository</button>
                </div>
            </div>
          </div>
        );
      case "Behavioral Records":
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 animate-in fade-in duration-500">
            <div className={cn("md:col-span-8", colSpacing)}>
                <div className={cn("bg-white rounded-2xl border border-slate-100 shadow-sm", cardPadding)}>
                    <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4 text-center md:text-left">
                        <div className="space-y-1">
                            <h3 className="text-secondary font-semibold text-lg">Conduct Repository</h3>
                            <p className="text-[12px] text-slate-400 font-medium">Logged institutional behavioral entries</p>
                        </div>
                        <div className="px-5 py-2.5 bg-emerald-50 text-emerald-600 rounded-xl text-[11px] font-bold border border-emerald-100 uppercase tracking-widest whitespace-nowrap">Exemplary Registry</div>
                    </div>

                    <div className="space-y-12">
                        {[
                            { date: "Oct 12, 2023", title: "Leadership Excellence", comment: "Demonstrated exceptional situational leadership during the group science symposium.", staff: "Manoj P." },
                            { date: "Sept 25, 2023", title: "Community Service", comment: "Contributed 12+ hours to organizing the district-level sports meet.", staff: "Dhanya S." },
                            { date: "Aug 14, 2023", title: "Administrative Note", comment: "Late arrival to registration (Approved).", staff: "Arya" },
                        ].map((rec, i) => (
                            <div key={i} className="flex gap-6 sm:gap-10 relative group">
                                {i !== 2 && <div className="absolute left-[5px] top-6 bottom-[-32px] w-[1px] bg-slate-100" />}
                                <div className="size-2.5 rounded-full bg-slate-200 group-hover:bg-primary transition-colors shrink-0 mt-2 z-10" />
                                <div className="flex-1 space-y-2 pb-8">
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                                        <p className="text-[13px] font-bold text-secondary">{rec.title}</p>
                                        <p className="text-[11px] font-medium text-slate-400">{rec.date} • {rec.staff}</p>
                                    </div>
                                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed italic pr-4 md:pr-10">"{rec.comment}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={cn("md:col-span-4", colSpacing)}>
                <div className={cn("bg-slate-50 border border-slate-100 rounded-2xl shadow-sm text-center md:text-left", cardPadding)}>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-secondary mb-4">
                        <History size={18} className="text-slate-400" />
                        <h3 className="font-semibold text-sm">Security Log</h3>
                    </div>
                    <p className="text-[11px] text-slate-400 font-medium mb-6 leading-relaxed">Last behavioral audit was performed by Admin Arya on Oct 15, 2023.</p>
                    <button className="text-[11px] font-bold text-primary hover:underline">View Verification History</button>
                </div>
            </div>
          </div>
        );
      case "Parental Contact":
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 animate-in fade-in duration-500">
            <div className={cn("md:col-span-8 bg-white rounded-2xl border border-slate-100 shadow-sm text-center md:text-left", cardPadding)}>
                <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                    <div className="size-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
                        <Users size={28} />
                    </div>
                    <div>
                        <h3 className="text-secondary font-semibold text-lg">Guardian Contact Center</h3>
                        <p className="text-[12px] font-medium text-slate-400 italic">Primary family engagement records</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { role: "Father", name: "Mr. Ramesh K.", ph: "+91 98472-XXXXX" },
                        { role: "Mother", name: "Ms. Sunitha R.", ph: "+91 94460-XXXXX" },
                    ].map((g, i) => (
                        <div key={i} className="p-6 bg-[#F9FAFB] rounded-2xl border border-slate-100 transition-all hover:border-primary/20">
                            <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest leading-none">{g.role} Information</p>
                            <p className="text-[15px] font-semibold text-secondary mb-3 mt-2">{g.name}</p>
                            <span className="flex items-center justify-center md:justify-start gap-2 text-[12px] font-bold text-primary">
                                <Phone size={14} strokeWidth={3} fill="currentColor" className="opacity-20" />
                                {g.ph}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={cn("md:col-span-4 bg-secondary rounded-2xl text-white relative shadow-2xl shadow-secondary/10 flex flex-col justify-between", cardPadding)}>
                <div className="relative z-10 space-y-8">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold tracking-tight">Access Link</h3>
                        <Lock size={18} className="text-primary" />
                    </div>
                    <div className="space-y-8 relative before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[1px] before:bg-white/10 pl-6">
                        <div className="border-l-2 border-primary/40 pl-4">
                            <p className="text-[10px] font-bold text-primary mb-2 uppercase tracking-widest italic leading-none">Bridge Meeting • Oct 04</p>
                            <p className="text-[13px] font-normal text-white/80 leading-relaxed italic">"Discussed career goals. Suggested Engineering track."</p>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 pt-10">
                    <button className="w-full py-4 bg-primary text-secondary rounded-2xl text-[12px] font-black hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/10">
                        <Phone size={16} fill="currentColor" strokeWidth={0} />
                        Call Now
                    </button>
                </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 animate-in fade-in duration-500">
            {/* Left Main Content */}
            <div className={cn("md:col-span-8", colSpacing)}>
                {/* Master Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white border border-primary/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center sm:text-left">
                        <div className="flex justify-between items-start mb-4">
                            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Aura Score</p>
                            <Trophy size={16} className="text-primary hidden sm:block" />
                        </div>
                        <div className="flex items-baseline justify-center sm:justify-start gap-2">
                            <span className="text-3xl font-bold text-secondary tracking-tight">{student.auraScore}</span>
                            <span className="text-[11px] font-bold text-primary">+5.2</span>
                        </div>
                        <div className="h-1 bg-slate-50 rounded-full mt-4 overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: `${student.auraScore}%` }} />
                        </div>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm text-center sm:text-left">
                        <div className="flex justify-between items-start mb-4">
                            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Attendance</p>
                            <Calendar size={16} className="text-slate-300 hidden sm:block" />
                        </div>
                        <span className="text-3xl font-bold text-secondary tracking-tight">{student.attendanceRate}%</span>
                        <p className="text-[10px] text-emerald-500 font-bold mt-2 uppercase tracking-widest leading-none">Consistent High</p>
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm text-center sm:text-left">
                        <div className="flex justify-between items-start mb-4">
                            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">GPA Index</p>
                            <GraduationCap size={16} className="text-slate-300 hidden sm:block" />
                        </div>
                        <span className="text-3xl font-bold text-secondary tracking-tight">{student.gpa}</span>
                        <p className="text-[10px] text-slate-400 font-bold mt-2 uppercase tracking-widest italic">Rank: 08/120</p>
                    </div>
                </div>

                {/* Combined Activity & History Table */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="px-8 py-5 border-b border-slate-100 flex justify-between items-center bg-[#F9FAFB]/50">
                        <h3 className="text-secondary font-semibold text-base flex items-center gap-2">
                             <Activity size={18} className="text-primary" />
                             Intelligence Highlights
                        </h3>
                    </div>
                    <div className="divide-y divide-slate-50 pb-2">
                        {[
                            { label: "Varsity Sports", detail: "Team Captain — Regional Playoff Ready", status: "Active Lead", icon: "sports_soccer" },
                            { label: "Digital Science", detail: "Lead Architect — District Robotics", status: "Active Lead", icon: "memory" },
                            { label: "Public Service", detail: "Secretary — Student Council 2023", status: "Completed", icon: "groups" },
                        ].map((m, i) => (
                            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-8 hover:bg-slate-50 transition-all group cursor-pointer">
                                <div className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-primary/10 group-hover:text-primary transition-all shrink-0">
                                    <span className="material-symbols-outlined text-xl">{m.icon}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[14px] font-bold text-secondary leading-none mb-1.5">{m.label}</h4>
                                    <p className="text-[12px] text-slate-400 font-medium italic mb-2 sm:mb-0">{m.detail}</p>
                                </div>
                                <div className="flex items-center justify-between sm:justify-end gap-5">
                                    <span className={cn(
                                        "px-3 py-1 rounded-full text-[10px] font-bold border whitespace-nowrap",
                                        m.status.includes("Active") ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-slate-50 text-slate-400 border-slate-100"
                                    )}>
                                        {m.status}
                                    </span>
                                    <ChevronRight size={14} className="text-slate-200 group-hover:text-primary transition-all translate-x-2 group-hover:translate-x-0" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Secure Column */}
            <div className={cn("md:col-span-4", colSpacing)}>
                <div className="bg-white rounded-2xl border border-rose-100 shadow-sm overflow-hidden text-center md:text-left">
                    <div className="bg-rose-500 px-6 py-4 flex justify-between items-center text-white">
                        <h3 className="font-bold text-sm flex items-center gap-2">
                             <AlertCircle size={16} strokeWidth={3} />
                             Critical Flags
                        </h3>
                        <span className="bg-white/20 px-2 py-0.5 rounded-full text-[9px] font-bold border border-white/20">02</span>
                    </div>
                    <div className="p-6">
                        <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl space-y-3">
                            <p className="text-rose-600 font-bold text-[13px]">Behavioral Conflict</p>
                            <p className="text-[11px] text-rose-500/80 font-medium italic leading-relaxed">"Reported incident Oct 14. Referral pending."</p>
                            <button className="text-[10px] font-black text-secondary hover:underline underline-offset-4 tracking-widest uppercase">Open File</button>
                        </div>
                    </div>
                </div>

                <div className="bg-secondary rounded-2xl p-8 text-white relative shadow-2xl shadow-secondary/10 overflow-hidden group">
                    <div className="relative z-10 space-y-8">
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-bold tracking-tight">Secure Log</h3>
                            <Lock size={16} className="text-primary" />
                        </div>
                        <div className="space-y-6 relative border-l border-white/10 pl-6">
                            <div className="relative pb-2">
                                <div className="absolute -left-[27px] top-1.5 size-1.5 rounded-full bg-primary" />
                                <p className="text-[9px] font-bold text-primary mb-2 uppercase tracking-widest leading-none">Oct 12 • Principal</p>
                                <p className="text-[12px] text-white/50 leading-relaxed italic group-hover:text-white/80 transition-colors">"Confirmed Engineering track during PTM."</p>
                            </div>
                        </div>
                        <button className="w-full mt-10 py-3.5 bg-white/5 border border-dashed border-white/10 rounded-xl text-[10px] font-bold text-white/30 hover:bg-white/10 transition-all uppercase tracking-widest">
                            + Write Secure Entry
                        </button>
                    </div>
                    <div className="absolute -right-20 -top-20 size-80 bg-primary/5 rounded-full blur-3xl opacity-30 group-hover:scale-125 transition-transform duration-700" />
                </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#F9FAFB] font-sans">
      <TopBar
        title={student.name}
        subtitle={`${student.grade} ${student.section} — Institutional Profile Intelligence`}
        onBack={() => navigate(-1)}
        actions={
          <div className="flex items-center gap-3 px-6 lg:px-10">
            <button className="bg-secondary text-white px-5 py-2.5 rounded-xl text-[12px] font-bold hover:bg-primary hover:text-secondary transition-all shadow-sm active:scale-95">
              Refine Record
            </button>
          </div>
        }
      />

      <div className="flex-1 overflow-y-auto no-scrollbar mx-auto w-full max-w-[1400px] space-y-12">
        {/* Profile Identity Card */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-b border-slate-200 pb-12 pt-6 px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative group">
                <div
                    className="size-24 sm:size-28 rounded-[32px] bg-cover bg-center border-4 border-white shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:rotate-1 group-hover:scale-105"
                    style={{ backgroundImage: `url("${student.img}")` }}
                />
                <div className={cn(
                    "absolute -bottom-1 -right-1 size-5 rounded-full border-4 border-[#F9FAFB]",
                    student.status === "Active" ? "bg-emerald-500" : "bg-amber-500"
                )} />
            </div>
            <div className="text-center md:text-left space-y-3">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <span className="px-3 py-1 bg-white rounded-full text-[10px] font-black text-secondary border border-slate-100 shadow-sm uppercase tracking-widest">
                        {student.id}
                    </span>
                    <span className="text-slate-400 text-[13px] font-medium italic opacity-60">Verified Institutional User</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary tracking-tight">{student.name}</h2>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-1.5 opacity-60 transition-all hover:opacity-100 cursor-default group">
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest leading-none group-hover:text-primary transition-colors">Digital Registry</p>
            <p className="text-lg sm:text-xl font-bold text-secondary italic tracking-tight underline decoration-primary/30 decoration-4 underline-offset-8">Adarsha Vidya Bhavan</p>
          </div>
        </div>

        {/* Global Navigation Tabs */}
        <div className="flex gap-6 sm:gap-12 border-b border-slate-200 sticky top-0 bg-[#F9FAFB]/95 backdrop-blur-xl z-20 pt-2 transition-all px-6 lg:px-10">
          {["Overview", "Academic History", "Behavioral Records", "Parental Contact"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "pb-6 text-[13px] sm:text-[14px] font-bold transition-all relative group tracking-tight",
                activeTab === tab
                  ? "text-secondary"
                  : "text-slate-400 hover:text-secondary whitespace-nowrap"
              )}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-secondary rounded-full animate-in zoom-in-y duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* Master Content Renderer */}
        <div className="pb-32 px-6 lg:px-10">
            {renderTabContent()}
        </div>
      </div>
    </div>
  );
};
