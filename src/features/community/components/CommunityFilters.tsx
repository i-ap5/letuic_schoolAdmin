import { cn } from "../../../lib/utils";

const FilterGroup = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">
      {title}
    </h3>
    <div className="flex flex-col gap-3">{children}</div>
  </div>
);

const Checkbox = ({ label, checked }: { label: string; checked?: boolean }) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <div
      className={cn(
        "size-4 rounded border transition-colors flex items-center justify-center",
        checked
          ? "bg-secondary border-slate-200"
          : "border-slate-200 bg-white group-hover:border-slate-200/40",
      )}
    >
      {checked && (
        <span className="material-symbols-outlined text-primary text-[12px] font-bold">
          check
        </span>
      )}
    </div>
    <span className="text-sm text-slate-600 group-hover:text-secondary transition-colors">
      {label}
    </span>
  </label>
);

const Toggle = ({ label, enabled }: { label: string; enabled?: boolean }) => (
  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
    <span className="text-[13px] font-medium text-slate-600">{label}</span>
    <button
      className={cn(
        "w-8 h-4 rounded-full relative transition-colors",
        enabled ? "bg-primary" : "bg-slate-200",
      )}
    >
      <div
        className={cn(
          "absolute top-0.5 size-3 bg-white rounded-full transition-all",
          enabled ? "right-0.5" : "left-0.5",
        )}
      ></div>
    </button>
  </div>
);

export const CommunityFilters = () => {
  return (
    <aside className="w-80 border-l border-slate-100 bg-white p-6 overflow-y-auto hidden xl:block">
      <div className="space-y-8">
        <FilterGroup title="Program Type">
          <Checkbox label="Academic" checked />
          <Checkbox label="Athletics" checked />
          <Checkbox label="Arts & Culture" />
          <Checkbox label="Social Impact" />
        </FilterGroup>

        <div>
          <h3 className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">
            Academic Level
          </h3>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1.5 rounded-xl bg-slate-50 text-[11px] font-medium text-slate-600 hover:bg-primary/20 transition-colors">
              Junior High
            </button>
            <button className="px-3 py-1.5 rounded-xl bg-primary text-[11px] font-semibold text-secondary border border-slate-100">
              Senior High
            </button>
            <button className="px-3 py-1.5 rounded-xl bg-slate-50 text-[11px] font-medium text-slate-600 hover:bg-primary/20 transition-colors">
              Faculty Only
            </button>
          </div>
        </div>

        <FilterGroup title="Post Status">
          <Toggle label="Urgent Only" />
          <Toggle label="Verified Sources" enabled />
        </FilterGroup>

        <div className="pt-6 border-t border-slate-100">
          <button className="w-full py-2 text-[11px] font-semibold text-slate-400 hover:text-secondary uppercase tracking-wider text-center transition-colors">
            Reset Filters
          </button>
        </div>
      </div>
    </aside>
  );
};
