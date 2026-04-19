import { useState } from "react";
import { TopBar } from "../../../components/Header";
import { cn } from "../../../lib/utils";

export const TransportationPage = ({ isHubChild }: { isHubChild?: boolean }) => {
  const [activeRoute, setActiveRoute] = useState("RT-01");

  const buses = [
    {
      id: "BT-201",
      route: "RT-01",
      driver: "Madan Pal",
      status: "On Route",
      speed: "34 km/h",
      occupancy: "85%",
      nextStop: "Emerald Housing Soc.",
      eta: "4 mins",
      lastUpdate: "Just now",
      students: 42,
    },
    {
      id: "BT-205",
      route: "RT-04",
      driver: "Somesh Rao",
      status: "Idle",
      speed: "0 km/h",
      occupancy: "0%",
      nextStop: "School Main Gate",
      eta: "--",
      lastUpdate: "15 mins ago",
      students: 0,
    }
  ];

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
      {!isHubChild && (
        <TopBar 
          title="Fleet Management" 
          subtitle="Live tracking and safety monitoring for institutional transportation."
        />
      )}

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Roster/Details */}
        <div className="w-96 border-r border-slate-100 flex flex-col overflow-hidden">
            <div className="p-6 border-b border-slate-50">
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input 
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 pl-12 pr-4 text-[13px] font-semibold outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Search Bus or Route..."
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-4">
                <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Active Fleet</h3>
                {buses.map(bus => (
                    <div 
                        key={bus.id} 
                        onClick={() => setActiveRoute(bus.route)}
                        className={cn(
                            "p-5 rounded-3xl border transition-all cursor-pointer group",
                            activeRoute === bus.route ? "bg-secondary border-secondary shadow-xl shadow-secondary/20" : "bg-white border-slate-100 hover:border-primary"
                        )}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className={cn(
                                    "size-10 rounded-xl flex items-center justify-center transition-colors",
                                    activeRoute === bus.route ? "bg-white/10 text-white" : "bg-slate-50 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary"
                                )}>
                                    <span className="material-symbols-outlined text-[20px]">directions_bus</span>
                                </div>
                                <div>
                                    <h4 className={cn("text-[14px] font-black transition-colors", activeRoute === bus.route ? "text-white" : "text-secondary")}>
                                        {bus.id}
                                    </h4>
                                    <p className={cn("text-[10px] font-bold uppercase tracking-widest", activeRoute === bus.route ? "text-white/40" : "text-slate-400")}>
                                        {bus.route} • {bus.driver}
                                    </p>
                                </div>
                            </div>
                            <div className={cn(
                                "px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest",
                                bus.status === "On Route" ? "bg-green-500 text-white" : "bg-slate-100 text-slate-400"
                            )}>
                                {bus.status}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className={cn("text-[9px] font-black uppercase tracking-widest mb-1", activeRoute === bus.route ? "text-white/40" : "text-slate-400")}>SPEED</p>
                                <p className={cn("text-[13px] font-black", activeRoute === bus.route ? "text-white" : "text-secondary")}>{bus.speed}</p>
                            </div>
                            <div>
                                <p className={cn("text-[9px] font-black uppercase tracking-widest mb-1", activeRoute === bus.route ? "text-white/40" : "text-slate-400")}>STUDENTS</p>
                                <p className={cn("text-[13px] font-black", activeRoute === bus.route ? "text-white" : "text-secondary")}>{bus.students}</p>
                            </div>
                        </div>

                        {activeRoute === bus.route && (
                            <div className="mt-4 pt-4 border-t border-white/10">
                                <p className="text-[11px] font-bold text-white/60 mb-1">NEXT STOP</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-[12px] font-black text-white">{bus.nextStop}</p>
                                    <span className="text-[11px] font-black text-primary">ETA {bus.eta}</span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* Live Map Area */}
        <div className="flex-1 relative bg-slate-100 overflow-hidden">
            {/* Mock Map Background */}
            <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/lonlat,zoom/1440x900?access_token=pk.placeholder')] bg-cover bg-center" />
            
            <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative">
                    <div className="absolute -top-12 -left-12 size-48 bg-primary/20 rounded-full animate-ping" />
                    <div className="absolute -top-6 -left-6 size-24 bg-primary/40 rounded-full animate-pulse" />
                    <div className="relative size-12 bg-secondary rounded-full border-4 border-white shadow-2xl flex items-center justify-center text-white z-10">
                        <span className="material-symbols-outlined text-[20px] animate-bounce">location_on</span>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute top-16 -left-16 bg-white rounded-2xl shadow-2xl p-4 border border-slate-100 min-w-[200px] animate-in slide-in-from-bottom-4 duration-500">
                         <div className="flex items-center gap-3 mb-2">
                             <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-[18px]">bus_alert</span>
                             </div>
                             <div>
                                 <p className="text-[12px] font-black text-secondary">BT-201 Tracking</p>
                                 <p className="text-[10px] text-slate-400 font-bold">On Time</p>
                             </div>
                         </div>
                         <div className="space-y-1">
                             <div className="flex justify-between text-[11px]">
                                 <span className="text-slate-400 font-medium">Location</span>
                                 <span className="text-secondary font-black">Outer Ring Rd.</span>
                             </div>
                             <div className="flex justify-between text-[11px]">
                                 <span className="text-slate-400 font-medium">Speed</span>
                                 <span className="text-secondary font-black">42 km/h</span>
                             </div>
                         </div>
                    </div>
                 </div>
            </div>

            {/* Map Controls */}
            <div className="absolute top-6 right-6 flex flex-col gap-2">
                <button className="size-12 rounded-2xl bg-white shadow-xl flex items-center justify-center text-secondary hover:bg-slate-50 transition-all border border-slate-100">
                    <span className="material-symbols-outlined">add</span>
                </button>
                <button className="size-12 rounded-2xl bg-white shadow-xl flex items-center justify-center text-secondary hover:bg-slate-50 transition-all border border-slate-100">
                    <span className="material-symbols-outlined">remove</span>
                </button>
                <button className="size-12 rounded-2xl bg-white shadow-xl flex items-center justify-center text-primary hover:bg-slate-50 transition-all border border-slate-100 mt-4">
                    <span className="material-symbols-outlined">my_location</span>
                </button>
            </div>

            {/* Safety Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex gap-4 overflow-x-auto no-scrollbar">
                {[
                    { label: "Active Routes", valueHeader: "12", sub: "All Nominal", icon: "route", color: "text-blue-500" },
                    { label: "Alerts", valueHeader: "0", sub: "No incidents", icon: "warning", color: "text-green-500" },
                    { label: "Avg Speed", valueHeader: "28", sub: "km/h", icon: "speed", color: "text-orange-500" },
                    { label: "Total Students", valueHeader: "482", sub: "Boarded", icon: "groups", color: "text-purple-500" },
                ].map(stat => (
                    <div key={stat.label} className="bg-white/80 backdrop-blur-md border border-white/50 rounded-3xl p-5 shadow-xl min-w-[200px] flex-1">
                         <div className="flex items-center gap-3 mb-2">
                             <span className={cn("material-symbols-outlined text-[20px]", stat.color)}>{stat.icon}</span>
                             <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</span>
                         </div>
                         <div className="flex items-baseline gap-1">
                             <span className="text-2xl font-black text-secondary">{stat.valueHeader}</span>
                             <span className="text-[12px] font-bold text-slate-400">{stat.sub}</span>
                         </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};
