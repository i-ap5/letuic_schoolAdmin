import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

interface NavItemProps {
  icon: string;
  label: string;
  path: string;
  active?: boolean;
}

const NavItem = ({ icon, label, path, active }: NavItemProps) => (
  <Link
    to={path}
    className={cn(
      "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group text-left",
      active
        ? "bg-pale-lime text-dark-blue-grey shadow-sm"
        : "text-white/70 hover:text-white hover:bg-white/10",
    )}
  >
    <span
      className={cn("material-symbols-outlined", active && "fill-1")}
      style={active ? { fontVariationSettings: "'FILL' 1" } : {}}
    >
      {icon}
    </span>
    <p className={cn("text-sm", active ? "font-bold" : "font-medium")}>
      {label}
    </p>
  </Link>
);

export const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  return (
    <aside className="w-64 bg-dark-blue-grey sticky top-0 h-screen flex flex-col justify-between shrink-0 overflow-y-auto z-50">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-pale-lime size-10 rounded-lg flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-dark-blue-grey font-bold">
              school
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-base font-bold leading-none">
              Leutic
            </h1>
            <p className="text-white/40 text-xs mt-1">Principal Dashboard</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          <NavItem
            icon="dashboard"
            label="Dashboard"
            path="/"
            active={isActive("/")}
          />
          <NavItem
            icon="grid_view"
            label="Classes"
            path="/classes"
            active={isActive("/classes")}
          />
          <NavItem
            icon="school"
            label="Academic Hub"
            path="/academics"
            active={isActive("/academics")}
          />
          <NavItem
            icon="badge"
            label="Directory"
            path="/directory"
            active={isActive("/directory")}
          />
          <NavItem
            icon="chat_bubble"
            label="Communication"
            path="/communications"
            active={isActive("/communications")}
          />
          <NavItem
            icon="directions_bus"
            label="Transportation"
            path="/transportation"
            active={isActive("/transportation")}
          />
          <NavItem
            icon="calendar_month"
            label="Calendar"
            path="/calendar"
            active={isActive("/calendar")}
          />
          <NavItem
            icon="hub"
            label="Community"
            path="/community"
            active={isActive("/community")}
          />
          <NavItem
            icon="analytics"
            label="Reports"
            path="/reports"
            active={isActive("/reports")}
          />
        </nav>
      </div>

      <div className="p-6 border-t border-white/5">
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 bg-pale-lime hover:opacity-90 text-dark-blue-grey text-sm font-bold py-2.5 rounded-lg transition-all shadow-sm active:scale-95"
        >
          <span className="material-symbols-outlined text-sm">add_circle</span>
          <span>New Entry</span>
        </button>

        <div className="mt-6 flex items-center gap-3">
          <div
            className="size-9 rounded-full bg-slate-200 bg-cover bg-center border border-white/10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop')",
            }}
          ></div>
          <div className="flex flex-col">
            <p className="text-xs font-bold text-white leading-none">
              Dr. Priya Sharma
            </p>
            <p className="text-[10px] text-white/40 mt-1 uppercase tracking-wider font-bold">
              Principal
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
