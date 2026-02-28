import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";

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
        return "bg-pale-lime text-dark-blue-grey";
      case "at risk":
        return "bg-dark-blue-grey text-pale-lime";
      default:
        return "bg-dark-blue-grey/5 text-dark-blue-grey/50";
    }
  };

  const getProgressColor = (percent: number) => {
    if (percent > 80) return "bg-pale-lime";
    if (percent > 60) return "bg-dark-blue-grey";
    return "bg-dark-blue-grey/40";
  };

  return (
    <tr
      onClick={() => onClick(student)}
      className="hover:bg-dark-blue-grey/[0.02] transition-colors group cursor-pointer"
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div
            className="size-8 rounded-full bg-cover bg-center border border-dark-blue-grey/10"
            style={{ backgroundImage: `url("${img}")` }}
          ></div>
          <span className="text-sm font-bold text-dark-blue-grey group-hover:underline decoration-pale-lime underline-offset-4">
            {name}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-dark-blue-grey/50">{id}</td>
      <td className="px-6 py-4 text-sm text-dark-blue-grey">{grade}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-24 h-1.5 bg-dark-blue-grey/5 rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full transition-all",
                getProgressColor(participation),
              )}
              style={{ width: `${participation}%` }}
            ></div>
          </div>
          <span className="text-xs font-semibold text-dark-blue-grey/70">
            {participation}%
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-pale-lime/20 text-dark-blue-grey border border-pale-lime/30">
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
        <button className="text-dark-blue-grey/40 hover:text-dark-blue-grey transition-colors">
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
              <button className="bg-white border border-dark-blue-grey/10 text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-dark-blue-grey/5 shadow-sm transition-all">
                <span className="material-symbols-outlined text-sm">
                  upload_file
                </span>
                Bulk CSV Import
              </button>
              <button
                onClick={handleAddStudent}
                className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 shadow-sm transition-all active:scale-95"
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

      <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-dark-blue-grey/[0.01]">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Total Students",
              value: "1,240",
              color: "text-dark-blue-grey",
            },
            {
              label: "Active Programs",
              value: "18",
              color: "text-dark-blue-grey",
            },
            { label: "Avg Aura Score", value: "82%", color: "text-pale-lime" },
            { label: "At Risk", value: "24", color: "text-red-500" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl border border-dark-blue-grey/10 shadow-sm"
            >
              <p className="text-dark-blue-grey/40 text-xs font-bold uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <p className={cn("text-2xl font-black", stat.color)}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-xl border border-dark-blue-grey/10 shadow-sm flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[300px]">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-dark-blue-grey/30 group-focus-within:text-dark-blue-grey transition-colors">
                search
              </span>
              <input
                className="w-full bg-dark-blue-grey/[0.03] border-none rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-pale-lime text-dark-blue-grey placeholder-dark-blue-grey/30"
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
              className="bg-white border border-dark-blue-grey/10 rounded-lg text-sm px-3 py-2 text-dark-blue-grey focus:ring-pale-lime outline-none"
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
              className="bg-white border border-dark-blue-grey/10 rounded-lg text-sm px-3 py-2 text-dark-blue-grey focus:ring-pale-lime outline-none"
            >
              <option>Activity Level (All)</option>
              <option>High</option>
              <option>Moderate</option>
              <option>Low</option>
            </select>
            <button className="p-2 border border-dark-blue-grey/10 rounded-lg hover:bg-dark-blue-grey/5 transition-colors">
              <span className="material-symbols-outlined text-dark-blue-grey/40 text-lg">
                filter_list
              </span>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-xl border border-dark-blue-grey/10 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-dark-blue-grey/[0.02] border-b border-dark-blue-grey/10">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    Student Name
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    ID
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    Grade
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    Participation
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    Aura Score
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-blue-grey/5">
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
                      className="px-6 py-12 text-center text-dark-blue-grey/30 text-sm font-medium"
                    >
                      No students match your current filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="bg-dark-blue-grey/[0.02] px-6 py-4 flex items-center justify-between border-t border-dark-blue-grey/10">
            <p className="text-xs text-dark-blue-grey/40 font-medium">
              Showing {filteredStudents.length} of {students.length} students
            </p>
            <div className="flex items-center gap-2">
              <button
                className="size-8 flex items-center justify-center rounded border border-dark-blue-grey/10 bg-white text-dark-blue-grey/40 disabled:opacity-50"
                disabled
              >
                <span className="material-symbols-outlined text-sm">
                  chevron_left
                </span>
              </button>
              <button className="size-8 flex items-center justify-center rounded border border-pale-lime bg-pale-lime text-dark-blue-grey text-xs font-bold shadow-sm">
                1
              </button>
              <button className="size-8 flex items-center justify-center rounded border border-dark-blue-grey/10 bg-white text-xs font-bold hover:bg-dark-blue-grey/5 transition-colors">
                2
              </button>
              <button className="size-8 flex items-center justify-center rounded border border-dark-blue-grey/10 bg-white text-xs font-bold hover:bg-dark-blue-grey/5 transition-colors">
                3
              </button>
              <button className="size-8 flex items-center justify-center rounded border border-dark-blue-grey/10 bg-white text-dark-blue-grey/40 hover:bg-dark-blue-grey/5 transition-colors">
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
