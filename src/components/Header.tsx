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
    const today = new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });

    return (
        <header className="h-[80px] border-b border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 lg:px-10 shrink-0 sticky top-0 z-50">
            <div className="flex items-center gap-4">
                {onBack && (
                    <button
                        onClick={onBack}
                        className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors group border border-transparent hover:border-slate-200"
                    >
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-secondary transition-colors">
                            arrow_back
                        </span>
                    </button>
                )}
                <div className="flex flex-col">
                    <h2 className="text-[24px] font-bold tracking-tight text-secondary leading-none">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-slate-400 text-[13px] font-medium mt-1.5 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-6">
                {actions}
                <div className="hidden sm:flex items-center gap-3 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-2xl text-slate-600 hover:bg-white hover:shadow-md transition-all cursor-default">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                        calendar_today
                    </span>
                    <span className="text-[13px] font-bold text-secondary">
                        {today}
                    </span>
                </div>
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
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
            <div className="flex flex-col gap-2">
                <h1 className="text-secondary text-4xl font-bold tracking-tighter">
                    {title}
                </h1>
                <p className="text-slate-400 text-lg font-medium max-w-2xl">
                    {subtitle}
                </p>
            </div>
            {actions && <div className="flex items-center gap-4">{actions}</div>}
        </div>
    );
};
