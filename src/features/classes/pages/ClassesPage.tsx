import { useNavigate } from "react-router-dom";
import { TopBar } from "../../../components/Header";
import { ClassCard } from "../../dashboard/components/ClassCard";

export const ClassesPage = () => {
  const navigate = useNavigate();
  const classes = [
    {
      grade: "Grade 10",
      section: "B",
      room: "Room 304 | Morning Shift",
      status: "Normal",
      statusType: "normal" as const,
      teacher: "Mr. Jonathan Roberts",
      students: 28,
      participation: 94,
      id: "10-B",
    },
    {
      grade: "Grade 12",
      section: "A",
      room: "Room 102 | Morning Shift",
      status: "Normal",
      statusType: "normal" as const,
      teacher: "Dr. Helen Chen",
      students: 22,
      participation: 88,
      id: "12-A",
    },
    {
      grade: "Grade 9",
      section: "D",
      room: "Lab 1 | Afternoon Shift",
      status: "Attention",
      statusType: "attention" as const,
      teacher: "Ms. Linda Garcia",
      students: 31,
      participation: 76,
      id: "9-D",
    },
    {
      grade: "Grade 11",
      section: "C",
      room: "Room 205 | Morning Shift",
      status: "At Risk",
      statusType: "risk" as const,
      teacher: "Mr. James Smith",
      students: 25,
      participation: 62,
      id: "11-C",
    },
    {
      grade: "Grade 10",
      section: "A",
      room: "Room 301 | Morning Shift",
      status: "Normal",
      statusType: "normal" as const,
      teacher: "Mrs. Alice Wong",
      students: 30,
      participation: 91,
      id: "10-A",
    },
    {
      grade: "Grade 11",
      section: "B",
      room: "Room 202 | Afternoon Shift",
      status: "Normal",
      statusType: "normal" as const,
      teacher: "Mr. David Miller",
      students: 26,
      participation: 85,
      id: "11-B",
    },
  ];

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      <TopBar
        title="Classes Directory"
        subtitle="Full directory of all active grade levels and sections for the 2023-2024 cycle."
        actions={
          <>
            <button className="px-4 py-2 bg-white border border-dark-blue-grey/10 rounded-lg flex items-center gap-2 text-sm font-bold text-dark-blue-grey/60 hover:bg-dark-blue-grey/5 transition-colors">
              <span className="material-symbols-outlined text-lg">
                file_download
              </span>
              Export Directory
            </button>
            <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm">
              <span className="material-symbols-outlined text-sm">
                add_circle
              </span>
              New Class
            </button>
          </>
        }
      />

      <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-dark-blue-grey/[0.01]">
        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-xl border border-dark-blue-grey/10 shadow-sm flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[300px]">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-dark-blue-grey/30 group-focus-within:text-dark-blue-grey transition-colors">
                search
              </span>
              <input
                className="w-full bg-dark-blue-grey/[0.03] border-none rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-pale-lime text-dark-blue-grey placeholder-dark-blue-grey/30"
                placeholder="Search by class name or teacher..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <select className="bg-white border border-dark-blue-grey/10 rounded-lg text-sm px-3 py-2 text-dark-blue-grey focus:ring-pale-lime outline-none">
              <option>Grade</option>
              <option>9th Grade</option>
              <option>10th Grade</option>
              <option>11th Grade</option>
              <option>12th Grade</option>
            </select>
            <select className="bg-white border border-dark-blue-grey/10 rounded-lg text-sm px-3 py-2 text-dark-blue-grey focus:ring-pale-lime outline-none">
              <option>Section</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>
            <button className="p-2 border border-dark-blue-grey/10 rounded-lg hover:bg-dark-blue-grey/5 transition-colors">
              <span className="material-symbols-outlined text-dark-blue-grey/40 text-lg">
                filter_list
              </span>
            </button>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls, i) => (
            <ClassCard
              key={i}
              {...cls}
              onClick={() => navigate(`/classes/${cls.id}`)}
            />
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="flex items-center justify-between pt-8 border-t border-dark-blue-grey/5">
          <p className="text-xs text-dark-blue-grey/40 font-medium">
            Showing {classes.length} of 42 classes
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
  );
};
