import type { ReactNode } from "react";

export const TopBar = ({
    title,
    subtitle,
    actions,
    onBack,
}: {
    title: string;
    subtitle?: string;
    actions?: ReactNode;
    onBack?: () => void;
}) => {
    const now = new Date();
    const greeting =
        now.getHours() < 12 ? "Good Morning" : now.getHours() < 17 ? "Good Afternoon" : "Good Evening";
    const dateStr = now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

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
                <button className="h-10 px-6 bg-secondary text-white rounded-3xl text-[13px] font-semibold hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-sm hover:shadow-md active:scale-95">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Add
                </button>
                {actions}
                <div className="h-10 px-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-2 text-slate-500">
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
