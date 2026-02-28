import { cn } from "../../../lib/utils";

const FilterGroup = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="text-xs font-bold text-dark-blue-grey/40 uppercase tracking-widest mb-4">
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
          ? "bg-dark-blue-grey border-dark-blue-grey"
          : "border-dark-blue-grey/20 bg-white group-hover:border-dark-blue-grey/40",
      )}
    >
      {checked && (
        <span className="material-symbols-outlined text-pale-lime text-[12px] font-bold">
          check
        </span>
      )}
    </div>
    <span className="text-sm text-dark-blue-grey/70 group-hover:text-dark-blue-grey transition-colors">
      {label}
    </span>
  </label>
);

const Toggle = ({ label, enabled }: { label: string; enabled?: boolean }) => (
  <div className="flex items-center justify-between p-3 rounded-lg bg-dark-blue-grey/5 border border-dark-blue-grey/10">
    <span className="text-sm font-medium text-dark-blue-grey/70">{label}</span>
    <button
      className={cn(
        "w-8 h-4 rounded-full relative transition-colors",
        enabled ? "bg-pale-lime" : "bg-dark-blue-grey/20",
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
    <aside className="w-80 border-l border-dark-blue-grey/10 bg-white p-6 overflow-y-auto hidden xl:block">
      <div className="space-y-8">
        <FilterGroup title="Program Type">
          <Checkbox label="Academic" checked />
          <Checkbox label="Athletics" checked />
          <Checkbox label="Arts & Culture" />
          <Checkbox label="Social Impact" />
        </FilterGroup>

        <div>
          <h3 className="text-xs font-bold text-dark-blue-grey/40 uppercase tracking-widest mb-4">
            Academic Level
          </h3>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1.5 rounded-lg bg-dark-blue-grey/5 text-xs font-medium text-dark-blue-grey/70 hover:bg-pale-lime/20 transition-colors">
              Junior High
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-pale-lime text-xs font-bold text-dark-blue-grey border border-dark-blue-grey/10">
              Senior High
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-dark-blue-grey/5 text-xs font-medium text-dark-blue-grey/70 hover:bg-pale-lime/20 transition-colors">
              Faculty Only
            </button>
          </div>
        </div>

        <FilterGroup title="Post Status">
          <Toggle label="Urgent Only" />
          <Toggle label="Verified Sources" enabled />
        </FilterGroup>

        <div className="pt-6 border-t border-dark-blue-grey/10">
          <button className="w-full py-2 text-xs font-bold text-dark-blue-grey/40 hover:text-dark-blue-grey uppercase tracking-wider text-center transition-colors">
            Reset Filters
          </button>
        </div>
      </div>
    </aside>
  );
};
