import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";
import { StatCard } from "../../../components/StatCard";

const StudentRow = ({
  student,
  onClick,
}: {
  student: any;
  onClick: (student: any) => void;
}) => {
  const { name, id, grade, participation, auraScore, status, img } = student;

  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-primary text-secondary";
      case "at risk":
        return "bg-secondary text-primary";
      default:
        return "bg-slate-50 text-slate-500";
    }
  };

  const getProgressColor = (percent: number) => {
    if (percent > 80) return "bg-primary";
    if (percent > 60) return "bg-secondary";
    return "bg-secondary/40";
  };

  return (
    <tr
      onClick={() => onClick(student)}
      className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div
            className="size-8 rounded-full bg-cover bg-center border border-slate-100"
            style={{ backgroundImage: `url("${img}")` }}
          ></div>
          <span className="text-[13px] font-semibold text-secondary group-hover:underline decoration-primary underline-offset-4">
            {name}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-slate-500">{id}</td>
      <td className="px-6 py-4 text-sm text-secondary">{grade}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-24 h-1.5 bg-slate-50 rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full transition-all",
                getProgressColor(participation),
              )}
              style={{ width: `${participation}%` }}
            ></div>
          </div>
          <span className="text-xs font-semibold text-slate-600">
            {participation}%
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary/20 text-secondary border border-primary/30">
          {auraScore}
        </span>
      </td>
      <td className="px-6 py-4">
        <span
          className={cn(
            "inline-flex items-center px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-widest",
            getStatusStyles(status),
          )}
        >
          {status}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <button className="text-slate-400 hover:text-secondary transition-colors">
          <span className="material-symbols-outlined text-xl">more_vert</span>
        </button>
      </td>
    </tr>
  );
};

export const StudentsPage = ({
  isHubChild,
  externalStudents,
  onAddStudent,
}: {
  isHubChild?: boolean;
  externalStudents?: any[];
  onAddStudent?: () => void;
}) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [gradeFilter, setGradeFilter] = useState("Grade Level (All)");
  const [activityFilter, setActivityFilter] = useState("Activity Level (All)");

  const [internalStudents, setInternalStudents] = useState([
    {
      name: "Aavya Sharma",
      id: "OA-2024-001",
      grade: "12th Grade",
      participation: 92,
      auraScore: 98.4,
      attendanceRate: 98,
      gpa: 3.9,
      enrollmentDate: "Aug 2021",
      status: "Active",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?w=400&h=400&fit=crop",
      uid: "aavya-sharma",
    },
    {
      name: "Ishaan Iyer",
      id: "OA-2024-042",
      grade: "10th Grade",
      participation: 45,
      auraScore: 64.2,
      attendanceRate: 72,
      gpa: 2.1,
      enrollmentDate: "Aug 2022",
      status: "At Risk",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      uid: "ishaan-iyer",
    },
    {
      name: "Mira Patel",
      id: "OA-2024-118",
      grade: "11th Grade",
      participation: 88,
      auraScore: 91.5,
      attendanceRate: 94,
      gpa: 3.7,
      enrollmentDate: "Jan 2022",
      status: "Active",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      uid: "mira-patel",
    },
    {
      name: "Vedant Kulkarni",
      id: "OA-2024-085",
      grade: "9th Grade",
      participation: 76,
      auraScore: 84.2,
      attendanceRate: 88,
      gpa: 3.2,
      enrollmentDate: "Aug 2023",
      status: "Graduated",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      uid: "vedant-kulkarni",
    },
    {
      name: "Sanya Gupta",
      id: "OA-2024-201",
      grade: "12th Grade",
      participation: 95,
      auraScore: 97.2,
      attendanceRate: 99,
      gpa: 4.0,
      enrollmentDate: "Aug 2021",
      status: "Active",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      uid: "sanya-gupta",
    },
    {
      name: "Arjun Rao",
      id: "OA-2024-156",
      grade: "11th Grade",
      participation: 82,
      auraScore: 88.5,
      attendanceRate: 91,
      gpa: 3.5,
      enrollmentDate: "Aug 2022",
      status: "Active",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      uid: "arjun-rao",
    },
    {
      name: "Diya Malhotra",
      id: "OA-2024-092",
      grade: "10th Grade",
      participation: 68,
      auraScore: 72.1,
      attendanceRate: 85,
      gpa: 2.8,
      enrollmentDate: "Jan 2023",
      status: "Active",
      img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&h=400&fit=crop",
      uid: "diya-malhotra",
    },
    {
      name: "Rohan Das",
      id: "OA-2024-305",
      grade: "9th Grade",
      participation: 54,
      auraScore: 61.8,
      attendanceRate: 78,
      gpa: 2.4,
      enrollmentDate: "Aug 2023",
      status: "At Risk",
      img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
      uid: "rohan-das",
    },
  ]);

  const students = externalStudents || internalStudents;

  const handleAddStudent = () => {
    if (onAddStudent) {
      onAddStudent();
      return;
    }
    const newStudent = {
      name: "New Student",
      id: `OA-2024-${Math.floor(Math.random() * 900) + 100}`,
      grade: "10th Grade",
      participation: 85,
      auraScore: 75.0,
      attendanceRate: 100,
      gpa: 3.5,
      enrollmentDate: new Date().toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      }),
      status: "Active",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?w=400&h=400&fit=crop",
      uid: `new-student-${Date.now()}`,
    };
    setInternalStudents((prev) => [newStudent, ...prev]);
  };

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.grade.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesGrade =
        gradeFilter === "Grade Level (All)" || student.grade === gradeFilter;

      const matchesActivity =
        activityFilter === "Activity Level (All)" ||
        (activityFilter === "High" && student.participation > 80) ||
        (activityFilter === "Moderate" &&
          student.participation >= 50 &&
          student.participation <= 80) ||
        (activityFilter === "Low" && student.participation < 50);

      return matchesSearch && matchesGrade && matchesActivity;
    });
  }, [searchTerm, gradeFilter, activityFilter]);

  return (
    <div
      className={cn(
        "flex-1 flex flex-col overflow-hidden",
        !isHubChild && "h-screen",
      )}
    >
      {!isHubChild && (
        <TopBar
          title="Student CRM List"
          subtitle="Manage student profiles, academic performance, and institutional engagement."
          actions={
            <>
              <button className="bg-white border border-slate-100 text-secondary px-4 py-2 rounded-xl text-[13px] font-semibold flex items-center gap-2 hover:bg-slate-50 shadow-sm shadow-slate-100/30 transition-all">
                <span className="material-symbols-outlined text-sm">
                  upload_file
                </span>
                Bulk CSV Import
              </button>
              <button
                onClick={handleAddStudent}
                className="bg-primary text-secondary px-4 py-2 rounded-xl text-[13px] font-semibold flex items-center gap-2 hover:opacity-90 shadow-sm shadow-slate-100/30 transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-sm">
                  person_add
                </span>
                Add New Student
              </button>
            </>
          }
        />
      )}

      <div className="flex-1 overflow-y-auto mx-auto px-6 lg:px-10 py-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Total Students",
              value: "1,240",
              icon: "group",
            },
            {
              label: "Active Programs",
              value: "18",
              icon: "local_activity",
            },
            { label: "Avg Aura Score", value: "82%", icon: "star" },
            { label: "At Risk", value: "24", icon: "warning", iconBg: "bg-red-50 text-red-500" },
          ].map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/30 flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[300px]">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-secondary transition-colors">
                search
              </span>
              <input
                className="w-full bg-slate-50/50 border-none rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary text-secondary placeholder-slate-300"
                placeholder="Search by name, grade, or ID..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={gradeFilter}
              onChange={(e) => setGradeFilter(e.target.value)}
              className="bg-white border border-slate-100 rounded-xl text-sm px-3 py-2 text-secondary focus:ring-primary outline-none"
            >
              <option>Grade Level (All)</option>
              <option>9th Grade</option>
              <option>10th Grade</option>
              <option>11th Grade</option>
              <option>12th Grade</option>
            </select>
            <select
              value={activityFilter}
              onChange={(e) => setActivityFilter(e.target.value)}
              className="bg-white border border-slate-100 rounded-xl text-sm px-3 py-2 text-secondary focus:ring-primary outline-none"
            >
              <option>Activity Level (All)</option>
              <option>High</option>
              <option>Moderate</option>
              <option>Low</option>
            </select>
            <button className="p-2 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
              <span className="material-symbols-outlined text-slate-400 text-lg">
                filter_list
              </span>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-100/30 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50/50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Student Name
                  </th>
                  <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    ID
                  </th>
                  <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Grade
                  </th>
                  <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Participation
                  </th>
                  <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Aura Score
                  </th>
                  <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Status
                  </th>
                  <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredStudents.map((student) => (
                  <StudentRow
                    key={student.id}
                    student={student}
                    onClick={(s) =>
                      navigate(`/students/${s.id.replace("#", "")}`)
                    }
                  />
                ))}
                {filteredStudents.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-12 text-center text-slate-300 text-[13px] font-medium"
                    >
                      No students match your current filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="bg-slate-50/50 px-6 py-4 flex items-center justify-between border-t border-slate-100">
            <p className="text-xs text-slate-400 font-medium">
              Showing {filteredStudents.length} of {students.length} students
            </p>
            <div className="flex items-center gap-2">
              <button
                className="size-8 flex items-center justify-center rounded border border-slate-100 bg-white text-slate-400 disabled:opacity-50"
                disabled
              >
                <span className="material-symbols-outlined text-sm">
                  chevron_left
                </span>
              </button>
              <button className="size-8 flex items-center justify-center rounded border border-primary bg-primary text-secondary text-[11px] font-semibold shadow-sm shadow-slate-100/30">
                1
              </button>
              <button className="size-8 flex items-center justify-center rounded border border-slate-100 bg-white text-[11px] font-semibold hover:bg-slate-50 transition-colors">
                2
              </button>
              <button className="size-8 flex items-center justify-center rounded border border-slate-100 bg-white text-[11px] font-semibold hover:bg-slate-50 transition-colors">
                3
              </button>
              <button className="size-8 flex items-center justify-center rounded border border-slate-100 bg-white text-slate-400 hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
