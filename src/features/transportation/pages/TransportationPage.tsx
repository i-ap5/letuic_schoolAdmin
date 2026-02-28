import { useState } from "react";
import { TopBar } from "../../../components/Header";
import { cn } from "../../../lib/utils";

export const TransportationPage = ({
  isHubChild,
}: {
  isHubChild?: boolean;
}) => {
  const [buses, setBuses] = useState([
    {
      id: "BUS-001",
      driver: "Rajesh Kumar",
      route: "North Corridor - Area A",
      status: "On Route",
      students: 24,
      loginId: "JW-8821",
      location: "Oak Street, Block 4",
      lastUpdate: "Live",
    },
    {
      id: "BUS-002",
      driver: "Sanjay Verma",
      route: "West Side - Elementary",
      status: "Delayed",
      students: 18,
      loginId: "SJ-4432",
      location: "Maple Avenue Intersection",
      lastUpdate: "2m ago",
    },
    {
      id: "BUS-003",
      driver: "Vikram Malhotra",
      route: "South Express - Highschool",
      status: "Completed",
      students: 0,
      loginId: "MC-1109",
      location: "School Terminal",
      lastUpdate: "15m ago",
    },
    {
      id: "BUS-004",
      driver: "Dilip Singh",
      route: "East Route - Middle School",
      status: "On Route",
      students: 31,
      loginId: "RT-9940",
      location: "Pine Road Crossing",
      lastUpdate: "Live",
    },
  ]);

  const handleAddBus = () => {
    const newBus = {
      id: `BUS-${Math.floor(Math.random() * 900) + 100}`,
      driver: "New Driver Assigned",
      route: "General Campus Route",
      status: "Completed",
      students: 0,
      loginId: `${Math.random().toString(36).substring(2, 4).toUpperCase()}-${Math.floor(Math.random() * 9000) + 1000}`,
      location: "Maintenance Yard",
      lastUpdate: "Just Now",
    };
    setBuses((prev) => [newBus, ...prev]);
  };

  return (
    <div
      className={cn(
        "flex-1 flex flex-col overflow-hidden bg-white",
        !isHubChild && "h-screen",
      )}
    >
      {!isHubChild && (
        <TopBar
          title="Transportation Management"
          subtitle="Real-time fleet tracking and driver access control center."
          actions={
            <button
              onClick={handleAddBus}
              className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">vpn_key</span>
              New Access ID
            </button>
          }
        />
      )}

      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        {/* Fleet Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              label: "Active Buses",
              value: "12",
              icon: "directions_bus",
              color: "text-dark-blue-grey",
            },
            {
              label: "On Schedule",
              value: "92%",
              icon: "schedule",
              color: "text-emerald-500",
            },
            {
              label: "Fuel Efficiency",
              value: "14.2",
              icon: "ev_station",
              sub: "km/L avg",
              color: "text-pale-lime",
            },
            {
              label: "Maintenance",
              value: "02",
              icon: "build",
              sub: "Required",
              color: "text-red-500",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-dark-blue-grey/10 shadow-sm flex flex-col gap-2"
            >
              <div className="flex justify-between items-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-dark-blue-grey/40">
                  {stat.label}
                </p>
                <span className={cn("material-symbols-outlined", stat.color)}>
                  {stat.icon}
                </span>
              </div>
              <p className="text-3xl font-black text-dark-blue-grey tracking-tight">
                {stat.value}
              </p>
              {stat.sub && (
                <p className="text-[10px] font-bold text-dark-blue-grey/30 uppercase tracking-wider">
                  {stat.sub}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Real-time Tracking List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-dark-blue-grey/10 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-dark-blue-grey/10 bg-dark-blue-grey/[0.02] flex justify-between items-center">
                <h3 className="text-dark-blue-grey text-lg font-bold tracking-tight">
                  Active Fleet Tracking
                </h3>
                <div className="flex items-center gap-2">
                  <span className="size-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                    Live System
                  </span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-dark-blue-grey/[0.01] border-b border-dark-blue-grey/10">
                      <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                        Bus / Driver
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                        Route & Location
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                        Status
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest text-right">
                        Access ID
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-blue-grey/5">
                    {buses.map((bus) => (
                      <tr
                        key={bus.id}
                        className="hover:bg-dark-blue-grey/[0.01] transition-colors group"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-10 rounded-xl bg-pale-lime/20 flex items-center justify-center text-dark-blue-grey">
                              <span className="material-symbols-outlined">
                                airport_shuttle
                              </span>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-dark-blue-grey">
                                {bus.id}
                              </p>
                              <p className="text-xs text-dark-blue-grey/50">
                                {bus.driver}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <p className="text-xs font-bold text-dark-blue-grey">
                              {bus.route}
                            </p>
                            <div className="flex items-center gap-1 mt-1 text-[10px] text-dark-blue-grey/40 font-medium">
                              <span className="material-symbols-outlined text-[10px]">
                                location_on
                              </span>
                              {bus.location}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={cn(
                              "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border",
                              bus.status === "On Route"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                                : bus.status === "Delayed"
                                  ? "bg-red-50 text-red-700 border-red-100"
                                  : "bg-dark-blue-grey/5 text-dark-blue-grey/40 border-dark-blue-grey/10",
                            )}
                          >
                            {bus.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <code className="text-xs font-black bg-dark-blue-grey text-pale-lime px-2 py-1 rounded border border-white/10 shadow-sm">
                            {bus.loginId}
                          </code>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Access Management Sidebar */}
          <aside className="space-y-6">
            <div className="bg-dark-blue-grey rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">
                  Generate Driver Access
                </h3>
                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  Create temporary or permanent login credentials for new fleet
                  drivers.
                </p>
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-pale-lime uppercase tracking-widest pl-1">
                      Bus Assignment
                    </label>
                    <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-pale-lime">
                      <option className="bg-dark-blue-grey">
                        Select Bus Unit...
                      </option>
                      <option className="bg-dark-blue-grey">
                        BUS-005 (Reserve)
                      </option>
                      <option className="bg-dark-blue-grey">
                        BUS-006 (New)
                      </option>
                    </select>
                  </div>
                  <button className="w-full bg-pale-lime text-dark-blue-grey font-bold py-3 rounded-lg hover:opacity-90 transition-all active:scale-95 text-sm shadow-xl">
                    Generate Unique ID
                  </button>
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 size-40 bg-pale-lime opacity-[0.03] rounded-full"></div>
            </div>

            <div className="bg-white rounded-2xl border border-dark-blue-grey/10 p-6 shadow-sm">
              <h3 className="text-dark-blue-grey text-base font-bold mb-4">
                Security Logs
              </h3>
              <div className="space-y-4">
                {[
                  {
                    event: "Login Successful",
                    id: "JW-8821",
                    time: "07:42 AM",
                  },
                  { event: "ID Generated", id: "RT-9940", time: "07:15 AM" },
                  { event: "Access Revoked", id: "OLD-221", time: "Yesterday" },
                ].map((log, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b border-dark-blue-grey/5 pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="text-xs font-bold text-dark-blue-grey">
                        {log.event}
                      </p>
                      <p className="text-[10px] text-dark-blue-grey/40 font-black tracking-widest">
                        {log.id}
                      </p>
                    </div>
                    <span className="text-[10px] font-medium text-dark-blue-grey/30">
                      {log.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
