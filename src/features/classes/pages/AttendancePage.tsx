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
      name: "Aavya Sharma",
      status: "Present",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?w=400&h=400&fit=crop",
    },
    {
      id: "STU-002",
      name: "Isha Kapoor",
      status: "Absent",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    },
    {
      id: "STU-003",
      name: "Kabir Mehra",
      status: "Present",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      id: "STU-004",
      name: "Sneha Nair",
      status: "Late",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      id: "STU-005",
      name: "Ishaan Iyer",
      status: "Present",
      img: "https://images.unsplash.com/photo-1542343633-ce3256525ee3?w=400&h=400&fit=crop",
    },
    {
      id: "STU-006",
      name: "Mira Patel",
      status: "Present",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
    },
    {
      id: "STU-007",
      name: "Sanya Gupta",
      status: "Present",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      id: "STU-008",
      name: "Arjun Rao",
      status: "Present",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      id: "STU-009",
      name: "Diya Malhotra",
      status: "Late",
      img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&h=400&fit=crop",
    },
    {
      id: "STU-010",
      name: "Rohan Das",
      status: "Present",
      img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
      class: "Grade 10-B",
    },
    {
      id: "STU-011",
      name: "Sanya Gupta",
      status: "Present",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      class: "Grade 10-A",
    },
    {
      id: "STU-012",
      name: "Arjun Rao",
      status: "Present",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      class: "Grade 10-A",
    },
  ];

  const filteredStudents = useMemo(() => {
    return allStudents.filter((student) => {
      const matchesClass = !student.class || student.class === selectedClass;
      const matchesSearch = student.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesClass && matchesSearch;
    });
  }, [selectedClass, searchTerm]);

  const teacherStatus = {
    original: "Dr. Ananya Iyer",
    current: "Ms. Sharma (Substitute)",
    reason: "Medical Leave",
    isSubstitute: true,
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
          title="Attendance Tracking"
          subtitle="Mark daily student attendance and track teacher-substitute coverage."
          actions={
            <button className="bg-primary text-secondary px-4 py-2 rounded-xl text-[13px] font-semibold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm shadow-slate-100/30 active:scale-95">
              <span className="material-symbols-outlined text-sm">save</span>
              Submit Attendance
            </button>
          }
        />
      )}

      <div className="flex-1 overflow-y-auto mx-auto px-6 lg:px-10 py-6 max-w-[1400px] ">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header Controls */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/30 flex flex-wrap gap-6 items-end">
            <div className="space-y-1.5 flex-1 min-w-[200px]">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">
                Select Class
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full bg-slate-50/50 border-none rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
              >
                <option>Grade 10-A</option>
                <option>Grade 10-B</option>
                <option>Grade 11-A</option>
              </select>
            </div>
            <div className="space-y-1.5 flex-1 min-w-[200px]">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">
                Attendance Date
              </label>
              <input
                type="date"
                value={attendanceDate}
                onChange={(e) => setAttendanceDate(e.target.value)}
                className="w-full bg-slate-50/50 border-none rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex items-center gap-3 bg-primary/10 px-4 py-2.5 rounded-xl border border-primary/20 flex-1 min-w-[200px]">
              <span className="material-symbols-outlined text-primary">
                person_search
              </span>
              <div className="flex flex-col flex-1">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">
                  Search Student
                </p>
                <input
                  type="text"
                  placeholder="Filter by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent border-none p-0 text-[11px] font-semibold text-secondary outline-none placeholder-slate-300 w-full"
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
              <button className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10 transition-all">
                View Coverage Log
              </button>
            </div>
          )}

          {/* Student List */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/30 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-secondary text-[16px] font-semibold">
                Student Roster - {selectedClass}
              </h3>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                  Mark all Present
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="px-6 py-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                      Student Name
                    </th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-300 uppercase tracking-widest text-center">
                      Status
                    </th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-300 uppercase tracking-widest text-right">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredStudents.map((student) => (
                    <tr
                      key={student.id}
                      onClick={() =>
                        navigate(`/students/${student.id.replace("#", "")}`)
                      }
                      className="hover:bg-slate-50/50 transition-colors cursor-pointer"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="size-8 rounded-full bg-cover bg-center border border-slate-100"
                            style={{ backgroundImage: `url("${student.img}")` }}
                          ></div>
                          <span className="text-[13px] font-semibold text-secondary">
                            {student.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center gap-2">
                          {["Present", "Absent", "Late", "Half-Day"].map(
                            (status) => (
                              <button
                                key={status}
                                className={cn(
                                  "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all",
                                  student.status === status
                                    ? status === "Present"
                                      ? "bg-emerald-500 text-white border-emerald-500 shadow-md scale-105"
                                      : status === "Absent"
                                        ? "bg-red-500 text-white border-red-500 shadow-md scale-105"
                                        : status === "Late"
                                          ? "bg-amber-500 text-white border-amber-500 shadow-md scale-105"
                                          : "bg-blue-500 text-white border-blue-500 shadow-md scale-105"
                                    : "bg-white text-slate-400 border-slate-100 hover:border-slate-200/30",
                                )}
                              >
                                {status === "Present"
                                  ? "P"
                                  : status === "Absent"
                                    ? "A"
                                    : status === "Late"
                                      ? "L"
                                      : "HD"}
                              </button>
                            ),
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <input
                          type="text"
                          placeholder="Add comment..."
                          className="bg-transparent border-none text-right text-[10px] font-medium text-slate-400 outline-none focus:text-secondary"
                        />
                      </td>
                    </tr>
                  ))}
                  {filteredStudents.length === 0 && (
                    <tr>
                      <td
                        colSpan={3}
                        className="px-6 py-12 text-center text-slate-300 text-[13px] font-medium"
                      >
                        No students found matching your current class or search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
