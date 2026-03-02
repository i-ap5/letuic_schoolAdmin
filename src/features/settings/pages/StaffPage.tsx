import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";
import { StatCard } from "../../../components/StatCard";

const StaffRow = ({
  staff,
  onClick,
}: {
  staff: any;
  onClick: (staff: any) => void;
}) => {
  const { name, id, role, department, performance, auraScore, status, img } =
    staff;

  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-primary/10 text-secondary border border-primary";
      case "on leave":
        return "bg-slate-200 text-slate-500";
      case "remote":
        return "bg-secondary/10 text-secondary border border-secondary";
      default:
        return "bg-slate-500/10 text-slate-700 border border-slate-500";
    }
  };

  const getProgressColor = (percent: number) => {
    if (percent > 85) return "bg-primary";
    if (percent > 70) return "bg-secondary";
    return "bg-secondary/40";
  };

  return (
    <tr
      onClick={() => onClick(staff)}
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
      <td className="px-6 py-4 text-sm text-secondary font-medium">
        {role}
      </td>
      <td className="px-6 py-4 text-sm text-slate-500">{department}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-24 h-1.5 bg-slate-50 rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full transition-all",
                getProgressColor(performance),
              )}
              style={{ width: `${performance}%` }}
            ></div>
          </div>
          <span className="text-xs font-semibold text-slate-600">
            {performance}%
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-secondary border border-primary">
          {auraScore}
        </span>
      </td>
      <td className="px-6 py-4">
        <span
          className={cn(
            "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize",
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

export const StaffPage = ({
  isHubChild,
  externalStaff,
  onAddStaff,
}: {
  isHubChild?: boolean;
  externalStaff?: any[];
  onAddStaff?: () => void;
}) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [deptFilter, setDeptFilter] = useState("Department (All)");
  const [statusFilter, setStatusFilter] = useState("Status (All)");

  const [internalStaff, setInternalStaff] = useState([
    {
      name: "Dr. Ananya Iyer",
      id: "#ST-1024-001",
      role: "Lead Teacher",
      department: "Mathematics",
      performance: 96,
      auraScore: 98.4,
      status: "Active",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      uid: "ananya-iyer",
    },
    {
      name: "Rishi Deshmukh",
      id: "#ST-1024-042",
      role: "Senior Counselor",
      department: "Student Affairs",
      performance: 88,
      auraScore: 91.2,
      status: "Remote",
      img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop",
      uid: "rishi-deshmukh",
    },
    {
      name: "Pooja Trivedi",
      id: "#ST-1024-118",
      role: "Science Head",
      department: "Natural Sciences",
      performance: 92,
      auraScore: 94.5,
      status: "Active",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      uid: "pooja-trivedi",
    },
    {
      name: "Arvind Swamy",
      id: "#ST-1024-085",
      role: "Department Lead",
      department: "History",
      performance: 79,
      auraScore: 82.2,
      status: "On Leave",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      uid: "arvind-swamy",
    },
  ]);

  const staffMembers = externalStaff || internalStaff;

  const handleAddStaff = () => {
    if (onAddStaff) {
      onAddStaff();
      return;
    }
    const newStaff = {
      name: "New Faculty Member",
      id: `#ST-1024-${Math.floor(Math.random() * 900) + 100}`,
      role: "Assistant Professor",
      department: "General Education",
      performance: 90,
      auraScore: 85.0,
      status: "Active",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      uid: `new-staff-${Date.now()}`,
    };
    setInternalStaff((prev) => [newStaff, ...prev]);
  };

  const filteredStaff = useMemo(() => {
    return staffMembers.filter((staff) => {
      const matchesSearch =
        staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.department.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDept =
        deptFilter === "Department (All)" ||
        staff.department.includes(deptFilter) ||
        (deptFilter === "Science" && staff.department === "Natural Sciences");

      const matchesStatus =
        statusFilter === "Status (All)" || staff.status === statusFilter;

      return matchesSearch && matchesDept && matchesStatus;
    });
  }, [searchTerm, deptFilter, statusFilter]);

  return (
    <div
      className={cn(
        "flex-1 flex flex-col overflow-hidden",
        !isHubChild && "h-screen",
      )}
    >
      {!isHubChild && (
        <TopBar
          title="Institutional Staff Directory"
          subtitle="Manage faculty profiles, performance metrics, and departmental organization."
          actions={
            <>
              <button className="bg-white border border-slate-100 text-secondary px-4 py-2 rounded-xl text-[13px] font-semibold flex items-center gap-2 hover:bg-slate-50 shadow-sm shadow-slate-100/30 transition-all">
                <span className="material-symbols-outlined text-sm">
                  upload_file
                </span>
                Bulk CSV Import
              </button>
              <button
                onClick={handleAddStaff}
                className="bg-primary text-secondary px-4 py-2 rounded-xl text-[13px] font-semibold flex items-center gap-2 hover:opacity-90 shadow-sm shadow-slate-100/30 transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-sm">
                  person_add
                </span>
                Onboard Staff
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
              label: "Total Staff",
              value: "148",
              icon: "group",
            },
            {
              label: "Departments",
              value: "12",
              icon: "account_tree",
            },
            {
              label: "Instructional Quality",
              value: "94%",
              icon: "school",
            },
            { label: "On Leave", value: "05", icon: "event_busy", iconBg: "bg-red-500/10 text-red-700 border border-red-500" },
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
                placeholder="Search staff by name, role, or ID..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="bg-white border border-slate-100 rounded-xl text-sm px-3 py-2 text-secondary focus:ring-primary outline-none"
            >
              <option>Department (All)</option>
              <option>Mathematics</option>
              <option>Science</option>
              <option>Languages</option>
              <option>Administration</option>
              <option>Student Affairs</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-white border border-slate-100 rounded-xl text-sm px-3 py-2 text-secondary focus:ring-primary outline-none"
            >
              <option>Status (All)</option>
              <option>Active</option>
              <option>On Leave</option>
              <option>Remote</option>
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
              <thead className="bg-white border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Staff Member
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Instructional Quality
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Aura Score
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredStaff.map((staff) => (
                  <StaffRow
                    key={staff.id}
                    staff={staff}
                    onClick={(s) => navigate(`/staff/${s.id.replace("#", "")}`)}
                  />
                ))}
                {filteredStaff.length === 0 && (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-6 py-12 text-center text-slate-300 text-[13px] font-medium"
                    >
                      No staff members match your current filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="bg-slate-50/50 px-6 py-4 flex items-center justify-between border-t border-slate-100">
            <p className="text-xs text-slate-400 font-medium">
              Showing {filteredStaff.length} of {staffMembers.length} staff
              members
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
              <button className="size-8 flex items-center justify-center rounded border border-primary bg-primary text-secondary text-xs font-medium shadow-sm shadow-slate-100/30">
                1
              </button>
              <button className="size-8 flex items-center justify-center rounded border border-slate-100 bg-white text-xs font-medium hover:bg-slate-50 transition-colors">
                2
              </button>
              <button className="size-8 flex items-center justify-center rounded border border-slate-100 bg-white text-xs font-medium hover:bg-slate-50 transition-colors">
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
