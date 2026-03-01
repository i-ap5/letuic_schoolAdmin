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
            "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group text-left",
            active
                ? "bg-primary text-secondary shadow-md font-semibold"
                : "text-white/60 hover:text-white hover:bg-white/5 font-medium",
        )}
    >
        <span
            className={cn("material-symbols-outlined text-xl transition-transform duration-200", active && "scale-110", active ? "fill-1" : "fill-0")}
            style={active ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
            {icon}
        </span>
        <p className="text-[15px] tracking-wide">
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
        <aside className="w-72 bg-secondary sticky top-0 h-screen flex flex-col justify-between shrink-0 overflow-y-auto z-50 px-4 py-8">
            <div>
                <div className="flex items-center gap-4 mb-10 px-2">
                    <div className="bg-primary size-12 rounded-xl flex items-center justify-center shadow-md">
                        <span className="material-symbols-outlined text-secondary font-bold text-2xl">
                            school
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-white text-xl font-bold tracking-tight">
                            Leutic
                        </h1>
                        <p className="text-white/50 text-[11px] font-medium uppercase tracking-wider mt-0.5">Principal Dashboard</p>
                    </div>
                </div>

                <nav className="flex flex-col gap-2">
                    <NavItem
                        icon="space_dashboard"
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
                        icon="mark_chat_unread"
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
                        icon="monitoring"
                        label="Reports"
                        path="/reports"
                        active={isActive("/reports")}
                    />
                </nav>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 px-2">
                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold py-3 rounded-xl transition-all shadow-sm active:scale-95 mb-6"
                >
                    <span className="material-symbols-outlined text-sm">add</span>
                    <span>New Entry</span>
                </button>

                <div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <div
                        className="size-10 rounded-full bg-slate-200 bg-cover bg-center ring-2 ring-white/20"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop')",
                        }}
                    ></div>
                    <div className="flex flex-col overflow-hidden">
                        <p className="text-sm font-semibold text-white truncate">
                            Dr. Priya Sharma
                        </p>
                        <p className="text-[11px] text-white/50 mt-0.5 uppercase tracking-wider font-medium">
                            Principal
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
};
