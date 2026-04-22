import { useState, useEffect } from "react";
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
        <p className="text-[14px]">
            {label}
        </p>
    </Link>
);



export const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const isActive = (path: string) => {
        if (path === "/") {
            return currentPath === "/";
        }
        return currentPath.startsWith(path);
    };

    const timeParts = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    }).split(" ");

    const timeStr = timeParts[0];
    const amPm = timeParts[1];



    return (
        <aside className="w-64 bg-white border-r border-slate-100 sticky top-0 h-screen flex flex-col shrink-0 z-50">
            {/* Top Logo - Fixed */}
            <div className="px-6 py-8">
                <img
                    src="/letuic_lg.png"
                    alt="Letuic Principal Dashboard"
                    className="w-32 h-auto object-contain -ml-2"
                />
            </div>

            {/* Nav Items - Scrollable */}
            <div className="flex-1 overflow-y-auto no-scrollbar py-2">
                <nav className="flex flex-col gap-1">
                    <NavItem icon="space_dashboard" label="Home" path="/" active={isActive("/")} />
                    <NavItem icon="grid_view" label="Classes" path="/classes" active={isActive("/classes")} />
                    <NavItem icon="event_available" label="Attendance" path="/attendance" active={isActive("/attendance")} />
                    <NavItem icon="school" label="Academics" path="/academics" active={isActive("/academics")} />
                    <NavItem icon="badge" label="Student & Staff" path="/directory" active={isActive("/directory")} />
                    <NavItem icon="payments" label="Finance" path="/finance" active={isActive("/finance")} />
                    <NavItem icon="mark_chat_unread" label="Messages" path="/communications" active={isActive("/communications")} />
                    <NavItem icon="directions_bus" label="Bus Tracking" path="/transportation" active={isActive("/transportation")} />
                    <NavItem icon="calendar_today" label="Events" path="/calendar" active={isActive("/calendar")} />
                    <NavItem icon="hub" label="Community" path="/community" active={isActive("/community")} />
                    <NavItem icon="monitoring" label="Reports" path="/reports" active={isActive("/reports")} />
                </nav>
            </div>

            {/* Bottom Section - Fixed */}
            <div className="p-6 pt-2 border-t border-slate-50 space-y-4">
                {/* Premium Date & Time Widget */}
                <div className="px-1">
                    <div className="flex items-center gap-4 rounded-[20px] group/time">
                        <div className="flex flex-col items-center justify-center bg-white size-12 rounded-[14px] shadow-sm shadow-slate-200/50 border border-slate-100 shrink-0 transition-transform group-hover/time:scale-105">
                            <span className="text-[9px] font-black text-secondary/40 uppercase leading-none tracking-tighter">
                                {now.toLocaleDateString("en-IN", { month: "short" })}
                            </span>
                            <span className="text-[18px] font-black text-secondary leading-none mt-1">
                                {now.toLocaleDateString("en-IN", { day: "2-digit" })}
                            </span>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="flex items-baseline gap-0.5">
                                <span className="text-[16px] font-black text-secondary tracking-tight">
                                    {timeStr.split(":")[0]}
                                </span>
                                <span className="text-[16px] font-black text-secondary animate-blink">:</span>
                                <span className="text-[16px] font-black text-secondary tracking-tight">
                                    {timeStr.split(":")[1]}
                                </span>
                                <span className="text-[12px] font-black text-secondary/40 uppercase ml-1">
                                    {amPm}
                                </span>
                            </div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">
                                {now.toLocaleDateString("en-IN", { weekday: "long" })}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3 p-2 -mx-1 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100 group">
                    <div
                        className="size-10 rounded-full bg-slate-200 bg-cover bg-center ring-2 ring-white shadow-sm"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop')",
                        }}
                    ></div>
                    <div className="flex flex-col overflow-hidden">
                        <p className="text-[13px] font-bold text-secondary truncate">
                            Dr. Rahana
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
