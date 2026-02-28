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
  return (
    <header className="h-20 border-b border-dark-blue-grey/10 bg-white flex items-center justify-between px-8 shrink-0 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        {onBack && (
          <button
            onClick={onBack}
            className="p-2 hover:bg-dark-blue-grey/5 rounded-full transition-colors group"
          >
            <span className="material-symbols-outlined text-dark-blue-grey/40 group-hover:text-dark-blue-grey transition-colors">
              arrow_back
            </span>
          </button>
        )}
        <div className="flex flex-col">
          <h2 className="text-xl font-black tracking-tight text-dark-blue-grey leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-dark-blue-grey/50 text-xs font-bold uppercase tracking-widest mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-3">
        {actions}
        <div className="h-10 px-4 bg-white border border-dark-blue-grey/10 rounded-lg flex items-center gap-2 shadow-sm">
          <span className="material-symbols-outlined text-dark-blue-grey/40 text-lg">
            calendar_today
          </span>
          <span className="text-sm font-bold text-dark-blue-grey/70">
            Oct 24, 2023
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
    <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-dark-blue-grey text-3xl font-black tracking-tight">
          {title}
        </h1>
        <p className="text-dark-blue-grey/60 text-base font-normal">
          {subtitle}
        </p>
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
};
