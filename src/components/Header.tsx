import { useState, type ReactNode } from "react";
import { cn } from "../lib/utils";

export const TopBar = ({
    title,
    actions,
    onBack,
}: {
    title: string;
    subtitle?: string;
    actions?: ReactNode;
    onBack?: () => void;
}) => {
    const [showQuickMenu, setShowQuickMenu] = useState(false);
    const now = new Date();
    const greeting =
        now.getHours() < 12 ? "Good Morning" : now.getHours() < 17 ? "Good Afternoon" : "Good Evening";
    const dateStr = now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const quickActions = [
        { label: "Enroll Student", icon: "person_add", color: "text-blue-500", bg: "bg-blue-50" },
        { label: "Register Faculty", icon: "badge", color: "text-purple-500", bg: "bg-purple-50" },
        { label: "Post Notice", icon: "campaign", color: "text-orange-500", bg: "bg-orange-50" },
        { label: "Record Finance", icon: "payments", color: "text-green-500", bg: "bg-green-50" },
        { label: "Add Schedule", icon: "calendar_add_on", color: "text-rose-500", bg: "bg-rose-50" },
    ];

    return (
        <header className="border-b border-slate-100 bg-white flex items-center justify-between px-8 py-5 shrink-0 sticky top-0 z-40">
            <div className="flex items-center gap-4">
                {onBack && (
                    <button
                        onClick={onBack}
                        className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
                    >
                        <span className="material-symbols-outlined text-slate-400 hover:text-secondary">
                            arrow_back
                        </span>
                    </button>
                )}
                <div className="flex flex-col gap-0.5">
                    <p className="text-slate-400 text-[13px] font-medium">{greeting}, Dr. Priya</p>
                    <h2 className="text-xl font-semibold tracking-tight text-secondary leading-tight">
                        {title}
                    </h2>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div 
                    className="relative group h-full flex items-center"
                    onMouseEnter={() => setShowQuickMenu(true)}
                    onMouseLeave={() => setShowQuickMenu(false)}
                >
                    <button 
                        className={cn(
                            "h-10 px-6 rounded-3xl text-[13px] font-bold transition-all flex items-center gap-2 shadow-sm active:scale-95",
                            showQuickMenu 
                                ? "bg-secondary text-white shadow-lg" 
                                : "bg-primary text-secondary hover:shadow-md"
                        )}
                    >
                        <span className="material-symbols-outlined text-[18px]">add</span>
                        Quick Create
                    </button>

                    {showQuickMenu && (
                        <div className="absolute top-[80%] right-0 pt-3 w-64 z-50 animate-in fade-in zoom-in-95 duration-200">
                            <div className="bg-white border border-slate-100 rounded-2xl shadow-2xl p-2">
                                <div className="px-3 py-2 mb-1">
                                    <p className="text-[11px] font-semibold text-slate-400">Principal Actions</p>
                                </div>
                                <div className="space-y-0.5">
                                    {quickActions.map((action) => (
                                        <button 
                                            key={action.label}
                                            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group/item"
                                        >
                                            <div className={cn("size-8 rounded-lg flex items-center justify-center transition-colors", action.bg, action.color)}>
                                                <span className="material-symbols-outlined text-[20px]">{action.icon}</span>
                                            </div>
                                            <span className="text-[13px] font-bold text-secondary text-left flex-1">{action.label}</span>
                                            <span className="material-symbols-outlined text-slate-300 text-[18px] opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0">chevron_right</span>
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-2 pt-2 border-t border-slate-50">
                                    <button className="w-full p-3 rounded-xl hover:bg-slate-50 transition-all flex items-center gap-3 text-[12px] font-semibold text-slate-400">
                                        <span className="material-symbols-outlined text-[18px]">settings</span>
                                        Customize Menu
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {actions}
                <div className="h-10 px-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-2 text-slate-500 lg:flex hidden">
                    <span className="material-symbols-outlined text-[16px]">
                        calendar_today
                    </span>
                    <span className="text-[13px] font-medium">
                        {dateStr}
                    </span>
                </div>
                <button className="relative h-10 w-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">notifications</span>
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full text-[9px] text-white font-bold flex items-center justify-center">3</span>
                </button>
            </div>
        </header>
    );
};

export const Header = ({
    title,
    subtitle,
    actions,
}: {
    title: string;
    subtitle: string;
    actions?: ReactNode;
}) => {
    return (
        <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
            <div className="flex flex-col gap-1">
                <h1 className="text-secondary text-2xl font-semibold tracking-tight">
                    {title}
                </h1>
                <p className="text-slate-400 text-sm font-medium">
                    {subtitle}
                </p>
            </div>
            {actions && <div className="flex items-center gap-3">{actions}</div>}
        </div>
    );
};
