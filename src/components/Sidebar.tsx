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
            "w-full flex items-center gap-4 px-6 py-3.5 transition-all duration-200 group text-left relative",
            active
                ? "text-secondary font-bold bg-slate-50/50"
                : "text-slate-500 hover:text-secondary hover:bg-slate-50/50 font-medium",
        )}
    >
        {active && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-primary rounded-r-full shadow-[2px_0_8px_rgba(219,232,144,0.5)]"></div>
        )}
        <span
            className={cn(
                "material-symbols-outlined text-[22px] transition-transform duration-200",
                active ? "fill-1 text-secondary" : "fill-0 text-slate-400 group-hover:text-secondary"
            )}
            style={active ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
            {icon}
        </span>
        <p className="text-[14px] tracking-wide">
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
        <aside className="w-64 bg-white border-r border-slate-100 sticky top-0 h-screen flex flex-col justify-between shrink-0 overflow-y-auto z-50 py-8">
            <div>
                <div className="flex items-center gap-3 px-6 mb-12">
                    <div className="bg-secondary size-9 rounded-xl flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-primary font-bold text-[20px]">
                            school
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-secondary text-[18px] font-bold tracking-tight leading-none">
                            Leutic.
                        </h1>
                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Principal</p>
                    </div>
                </div>

                <nav className="flex flex-col gap-1">
                    <NavItem icon="space_dashboard" label="Dashboard" path="/" active={isActive("/")} />
                    <NavItem icon="grid_view" label="Classes" path="/classes" active={isActive("/classes")} />
                    <NavItem icon="school" label="Academic Hub" path="/academics" active={isActive("/academics")} />
                    <NavItem icon="badge" label="Directory" path="/directory" active={isActive("/directory")} />
                    <NavItem icon="mark_chat_unread" label="Communication" path="/communications" active={isActive("/communications")} />
                    <NavItem icon="directions_bus" label="Transportation" path="/transportation" active={isActive("/transportation")} />
                    <NavItem icon="calendar_month" label="Calendar" path="/calendar" active={isActive("/calendar")} />
                    <NavItem icon="hub" label="Community" path="/community" active={isActive("/community")} />
                    <NavItem icon="monitoring" label="Reports" path="/reports" active={isActive("/reports")} />
                </nav>
            </div>

            <div className="mt-8 pt-6 px-6 pb-4">
                <div className="flex items-center gap-3 p-2 -mx-2 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                    <div
                        className="size-10 rounded-full bg-slate-200 bg-cover bg-center ring-2 ring-white shadow-sm"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop')",
                        }}
                    ></div>
                    <div className="flex flex-col overflow-hidden">
                        <p className="text-[13px] font-bold text-secondary truncate">
                            Dr. Priya Sharma
                        </p>
                        <p className="text-[11px] text-slate-400 mt-0.5 font-medium">
                            Principal Account
                        </p>
                    </div>
                    <span className="material-symbols-outlined text-slate-300 ml-auto text-[18px]">
                        unfold_more
                    </span>
                </div>
            </div>
        </aside>
    );
};
