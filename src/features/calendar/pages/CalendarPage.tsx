import { useState } from "react";
import { TopBar } from "../../../components/Header";
import { cn } from "../../../lib/utils";

type CalendarView = "teacher" | "class" | "parent";

export const CalendarPage = () => {
  const [activeView, setActiveView] = useState<CalendarView>("teacher");

  const teacherSchedule = [
    {
      time: "08:00 AM",
      event: "Mathematics - 10B",
      type: "class",
      room: "Room 304",
    },
    {
      time: "09:30 AM",
      event: "Advanced Algebra - 12A",
      type: "class",
      room: "Room 102",
    },
    {
      time: "11:00 AM",
      event: "Department Meeting",
      type: "meeting",
      room: "Staff Lounge",
    },
    {
      time: "01:00 PM",
      event: "Geometry - 10A",
      type: "class",
      room: "Room 301",
    },
    {
      time: "02:30 PM",
      event: "Office Hours",
      type: "other",
      room: "Office 12",
    },
  ];

  const administrativeEvents = [
    {
      date: "Oct 26",
      title: "Mid-Term Break",
      type: "holiday",
      color: "bg-red-500",
    },
    {
      date: "Oct 31",
      title: "Cultural Annual Day",
      type: "event",
      color: "bg-pale-lime",
    },
    {
      date: "Nov 05",
      title: "Teacher Training",
      type: "meeting",
      color: "bg-dark-blue-grey",
    },
  ];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
      <TopBar
        title="Calendar & Timetable"
        subtitle="Manage academic schedules, institutional events, and class timings."
        actions={
          <div className="flex items-center gap-3">
            <button className="bg-white border border-dark-blue-grey/10 text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-dark-blue-grey/5 transition-all">
              <span className="material-symbols-outlined text-lg">print</span>
              Export PDF
            </button>
            <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95">
              <span className="material-symbols-outlined text-sm">
                add_circle
              </span>
              New Event
            </button>
          </div>
        }
      />

      <div className="flex-1 overflow-y-auto">
        {/* Perspective Switcher */}
        <div className="px-8 pt-6 border-b border-dark-blue-grey/10 shrink-0 bg-white">
          <div className="flex gap-8">
            {[
              { id: "teacher", label: "Teacher Schedules", icon: "school" },
              { id: "class", label: "Class Timetables", icon: "grid_view" },
              {
                id: "parent",
                label: "Institutional Calendar",
                icon: "family_restroom",
              },
            ].map((view) => (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id as CalendarView)}
                className={cn(
                  "flex items-center gap-2 pb-4 text-sm font-bold tracking-tight transition-all relative",
                  activeView === view.id
                    ? "text-dark-blue-grey"
                    : "text-dark-blue-grey/40 hover:text-dark-blue-grey",
                )}
              >
                <span className="material-symbols-outlined text-lg">
                  {view.icon}
                </span>
                {view.label}
                {activeView === view.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-pale-lime rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Calendar Area */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-2xl border border-dark-blue-grey/10 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-dark-blue-grey/10 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-black text-dark-blue-grey">
                    October 2023
                  </h3>
                  <div className="flex items-center gap-1">
                    <button className="p-1 hover:bg-dark-blue-grey/5 rounded transition-colors text-dark-blue-grey/40">
                      <span className="material-symbols-outlined">
                        chevron_left
                      </span>
                    </button>
                    <button className="p-1 hover:bg-dark-blue-grey/5 rounded transition-colors text-dark-blue-grey/40">
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex bg-dark-blue-grey/5 p-1 rounded-lg">
                  <button className="px-3 py-1 text-xs font-bold bg-white text-dark-blue-grey rounded-md shadow-sm">
                    Month
                  </button>
                  <button className="px-3 py-1 text-xs font-bold text-dark-blue-grey/40">
                    Week
                  </button>
                  <button className="px-3 py-1 text-xs font-bold text-dark-blue-grey/40">
                    Day
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 border-b border-dark-blue-grey/5">
                {days.map((day) => (
                  <div
                    key={day}
                    className="py-3 text-center text-[10px] font-black uppercase tracking-widest text-dark-blue-grey/30"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="h-20 border-r border-b border-dark-blue-grey/5 bg-dark-blue-grey/[0.01]"
                  />
                ))}
                {calendarDays.map((day) => (
                  <div
                    key={day}
                    className={cn(
                      "h-20 border-r border-b border-dark-blue-grey/5 p-1.5 transition-colors hover:bg-dark-blue-grey/[0.01] overflow-hidden",
                      day === 24 && "bg-pale-lime/5",
                    )}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={cn(
                          "size-6 flex items-center justify-center text-xs font-bold rounded-full",
                          day === 24
                            ? "bg-pale-lime text-dark-blue-grey"
                            : "text-dark-blue-grey/60",
                        )}
                      >
                        {day}
                      </span>
                      {day === 31 && (
                        <span className="size-1.5 bg-pale-lime rounded-full" />
                      )}
                      {day === 26 && (
                        <span className="size-1.5 bg-red-500 rounded-full" />
                      )}
                    </div>
                    {day === 24 && (
                      <div className="space-y-1">
                        <div className="bg-dark-blue-grey text-white text-[8px] font-bold px-1.5 py-1 rounded truncate leading-none">
                          Math Exam P1
                        </div>
                        <div className="bg-pale-lime text-dark-blue-grey text-[8px] font-bold px-1.5 py-1 rounded truncate leading-none">
                          Staff Review
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contextual Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {activeView === "teacher" && (
              <div className="bg-dark-blue-grey rounded-2xl p-6 text-white shadow-2xl">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-pale-lime">
                    timer
                  </span>
                  Today's Schedule
                </h3>
                <div className="space-y-4">
                  {teacherSchedule.map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className="size-2 bg-pale-lime rounded-full ring-4 ring-pale-lime/20" />
                        {i !== teacherSchedule.length - 1 && (
                          <div className="w-px h-full bg-white/10 my-1" />
                        )}
                      </div>
                      <div className="pb-4">
                        <p className="text-[10px] font-black text-pale-lime uppercase tracking-widest leading-none mb-1">
                          {item.time}
                        </p>
                        <p className="text-sm font-bold group-hover:text-pale-lime transition-colors">
                          {item.event}
                        </p>
                        <p className="text-[10px] text-white/40 font-medium">
                          {item.room} • {item.type.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 bg-white/5 border border-white/10 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-colors">
                  Adjust Weekly Slots
                </button>
              </div>
            )}

            {activeView === "parent" && (
              <div className="bg-white rounded-2xl border border-dark-blue-grey/10 p-6 shadow-sm">
                <h3 className="text-dark-blue-grey text-lg font-black uppercase tracking-[0.1em] mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-red-500">
                    campaign
                  </span>
                  Key Notices
                </h3>
                <div className="space-y-4">
                  {administrativeEvents.map((event, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-dark-blue-grey/[0.02] border border-dark-blue-grey/5 hover:border-dark-blue-grey/10 transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span
                          className={cn(
                            "px-2 py-0.5 rounded text-[9px] font-black text-white uppercase tracking-widest",
                            event.color,
                          )}
                        >
                          {event.type}
                        </span>
                        <span className="text-[10px] font-bold text-dark-blue-grey/30">
                          {event.date}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-dark-blue-grey">
                        {event.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-pale-lime rounded-2xl p-6 text-dark-blue-grey shadow-lg">
              <h3 className="text-lg font-black italic tracking-tighter mb-2 underline decoration-white/50 underline-offset-4">
                Quick CRUD
              </h3>
              <p className="text-xs font-medium mb-4 opacity-70">
                Instantly swap a substitute or cancel a class slot.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-dark-blue-grey text-white py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 shadow-lg">
                  <span className="material-symbols-outlined text-sm">
                    swap_horiz
                  </span>
                  Assign Substitute
                </button>
                <button className="w-full bg-white text-dark-blue-grey py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 shadow-sm border border-dark-blue-grey/10">
                  <span className="material-symbols-outlined text-sm">
                    event_busy
                  </span>
                  Mark Holiday
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
