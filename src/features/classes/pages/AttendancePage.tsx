import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../../../components/Header";
import { cn } from "../../../lib/utils";

export const AttendancePage = ({ isHubChild }: { isHubChild?: boolean }) => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState("Grade 10-B");
  const [searchTerm, setSearchTerm] = useState("");
  const [attendanceDate, setAttendanceDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  const allStudents = [
    {
      id: "STU-001",
      name: "Aavya S.",
      status: "Present",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?w=400&h=400&fit=crop",
    },
    {
      id: "STU-002",
      name: "Isha K.",
      status: "Absent",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    },
    {
      id: "STU-003",
      name: "Kabir M.",
      status: "Present",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      id: "STU-004",
      name: "Sneha R.",
      status: "Late",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      id: "STU-005",
      name: "Ishaan K.",
      status: "Present",
      img: "https://images.unsplash.com/photo-1542343633-ce3256525ee3?w=400&h=400&fit=crop",
    },
    {
      id: "STU-006",
      name: "Meera V.",
      status: "Present",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
    },
    {
      id: "STU-007",
      name: "Sanya G.",
      status: "Present",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      id: "STU-008",
      name: "Arjun T.",
      status: "Present",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      id: "STU-009",
      name: "Diya M.",
      status: "Late",
      img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&h=400&fit=crop",
    },
    {
      id: "STU-010",
      name: "Rohan P.",
      status: "Present",
      img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
      class: "Grade 10-B",
    },
    {
      id: "STU-011",
      name: "Sanya G.",
      status: "Present",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      class: "Grade 10-A",
    },
    {
      id: "STU-012",
      name: "Arjun T.",
      status: "Present",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      class: "Grade 10-A",
    },
  ];

  const [students, setStudents] = useState(allStudents);
  const [showSuccess, setShowSuccess] = useState(false);

  const updateStatus = (id: string, status: string) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, status } : s));
  };

  const markAll = (status: string) => {
    setStudents(prev => prev.map(s => ({ ...s, status })));
  };

  const handleSubmit = () => {
    setShowSuccess(true);
    // In a real app, this would be an API call
  };

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesClass = !student.class || student.class === selectedClass;
      const matchesSearch = student.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesClass && matchesSearch;
    });
  }, [selectedClass, searchTerm, students]);

  const teacherStatus = {
    original: "Dr. Lakshmi K.",
    current: "Ms. Saritha (Substitute)",
    reason: "Medical Leave",
    isSubstitute: true,
  };

  return (
    <div
      className={cn(
        "flex-1 flex flex-col overflow-hidden bg-white relative",
        !isHubChild && "h-screen",
      )}
    >
      {!isHubChild && (
        <TopBar
          title="Attendance Tracking"
          subtitle="Mark daily student attendance and track teacher-substitute coverage."
          actions={
            <button 
                onClick={handleSubmit}
                className="bg-primary text-secondary px-6 py-2.5 rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-secondary hover:text-white transition-all shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">save</span>
              Submit Attendance
            </button>
          }
        />
      )}

      <div className="flex-1 overflow-y-auto px-6 lg:px-10 py-6">
        <div className="max-w-[1400px] mx-auto space-y-8">
          {/* Header Controls */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/30 flex flex-wrap gap-6 items-end">
            <div className="space-y-1.5 flex-1 min-w-[200px]">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider pl-1">
                Select Class
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full bg-slate-50/50 border-none rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary cursor-pointer"
              >
                <option>Grade 10-A</option>
                <option>Grade 10-B</option>
                <option>Grade 11-A</option>
              </select>
            </div>
            <div className="space-y-1.5 flex-1 min-w-[200px]">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider pl-1">
                Attendance Date
              </label>
              <div className="relative">
                <input
                    type="date"
                    value={attendanceDate}
                    onChange={(e) => setAttendanceDate(e.target.value)}
                    className="w-full bg-slate-50/50 border-none rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary/10 px-4 py-2.5 rounded-xl border border-primary/20 flex-1 min-w-[200px] focus-within:ring-2 focus-within:ring-primary transition-all">
              <span className="material-symbols-outlined text-primary">
                person_search
              </span>
              <div className="flex flex-col flex-1">
                <p className="text-xs font-medium text-slate-400 capitalize leading-none mb-1">
                  Search Student
                </p>
                <input
                  type="text"
                  placeholder="Filter by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent border-none p-0 text-xs font-medium text-secondary outline-none placeholder-slate-300 w-full"
                />
              </div>
            </div>
          </div>

          {/* Teacher Absence Tracking Alert */}
          {teacherStatus.isSubstitute && (
            <div className="bg-secondary rounded-2xl p-6 text-white shadow-xl flex items-center justify-between border-l-[6px] border-primary">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-2xl">
                  <span className="material-symbols-outlined text-primary">
                    assignment_return
                  </span>
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold">
                    Teacher Substitution Active
                  </h3>
                  <p className="text-xs text-white/50">
                    {teacherStatus.current} is covering for{" "}
                    {teacherStatus.reason}.
                  </p>
                </div>
              </div>
              <button className="text-xs font-medium capitalize border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10 transition-all">
                View Coverage Log
              </button>
            </div>
          )}

          {/* Student List */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/30 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
              <h3 className="text-secondary text-[16px] font-bold tracking-tight">
                Student Roster <span className="text-primary mx-2">•</span> {selectedClass}
              </h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => markAll("Absent")}
                  className="px-4 py-1.5 rounded-xl bg-rose-50 text-rose-600 text-[11px] font-bold uppercase tracking-wider border border-rose-100 hover:bg-rose-100 transition-all active:scale-95"
                >
                  Mark all Absent
                </button>
                <button 
                  onClick={() => markAll("Present")}
                  className="px-4 py-1.5 rounded-xl bg-emerald-50 text-emerald-600 text-[11px] font-bold uppercase tracking-wider border border-emerald-100 hover:bg-emerald-100 transition-all active:scale-95"
                >
                  Mark all Present
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Student Name
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center">
                      Attendance Status
                    </th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-right">
                      Observation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredStudents.map((student) => (
                    <tr
                      key={student.id}
                      className="hover:bg-slate-50/30 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="size-10 rounded-full bg-cover bg-center border border-slate-100 shadow-sm"
                            style={{ backgroundImage: `url("${student.img}")` }}
                          ></div>
                          <div className="flex flex-col">
                            <span className="text-[13px] font-bold text-secondary group-hover:text-primary transition-colors">
                              {student.name}
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium">ID: {student.id}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center gap-1.5">
                          {[
                            { label: "Present", code: "P", color: "emerald" },
                            { label: "Absent", code: "A", color: "rose" },
                            { label: "Late", code: "L", color: "amber" },
                            { label: "Half-Day", code: "HD", color: "slate" }
                          ].map((status) => (
                              <button
                                key={status.label}
                                onClick={() => updateStatus(student.id, status.label)}
                                className={cn(
                                  "size-9 rounded-full text-[11px] font-black transition-all border flex items-center justify-center relative group/btn",
                                  student.status === status.label
                                    ? `bg-${status.color}-500 text-white border-${status.color}-600 shadow-lg shadow-${status.color}-500/20 scale-110`
                                    : "bg-white text-slate-400 border-slate-100 hover:border-slate-300"
                                )}
                                title={status.label}
                              >
                                {status.code}
                                {student.status === status.label && (
                                    <span className="absolute -top-1 -right-1 size-3 bg-white rounded-full flex items-center justify-center">
                                        <div className={cn("size-1.5 rounded-full", `bg-${status.color}-500`)} />
                                    </span>
                                )}
                              </button>
                            ),
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <input
                          type="text"
                          placeholder="Quick note..."
                          className="bg-transparent border-none text-right text-[11px] font-medium text-slate-400 outline-none focus:text-secondary placeholder:text-slate-200 transition-colors w-full"
                        />
                      </td>
                    </tr>
                  ))}
                  {filteredStudents.length === 0 && (
                    <tr>
                      <td
                        colSpan={3}
                        className="px-6 py-12 text-center"
                      >
                        <div className="flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-slate-200 text-4xl">search_off</span>
                            <p className="text-slate-400 text-[13px] font-medium">No students found matching your filters.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-secondary/80 backdrop-blur-sm animate-in fade-in duration-500">
              <div className="bg-white rounded-[32px] w-full max-w-md p-8 shadow-2xl relative overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
                  {/* Decorative Background */}
                  <div className="absolute -top-20 -right-20 size-48 bg-primary/10 rounded-full blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 size-48 bg-emerald-500/5 rounded-full blur-3xl" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="size-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/30 animate-bounce">
                        <span className="material-symbols-outlined text-4xl">task_alt</span>
                    </div>
                    
                    <h2 className="text-2xl font-black text-secondary tracking-tight mb-2">Attendance Recorded</h2>
                    <p className="text-slate-500 text-[14px] leading-relaxed mb-8">
                        The roster for <span className="font-bold text-secondary">{selectedClass}</span> has been successfully logged into the institutional records.
                    </p>
                    
                    <div className="w-full bg-slate-50 rounded-2xl p-5 mb-8 border border-slate-100 text-left">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="size-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                                <span className="material-symbols-outlined text-sm">notifications_active</span>
                            </div>
                            <p className="text-[12px] font-bold text-secondary">Communication Scheduled</p>
                        </div>
                        <p className="text-[11px] text-slate-400 font-medium mb-4">
                            Parent notifications for absent students are queued and will drip in a countdown of <span className="text-emerald-600 font-bold">30 mins</span> to allow for manual corrections.
                        </p>
                        {/* Fake Progress Bar */}
                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-1/3 animate-pulse" />
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => setShowSuccess(false)}
                        className="w-full py-4 bg-secondary text-white rounded-2xl text-[14px] font-bold hover:bg-slate-800 transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                        Back to Dashboard
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};
