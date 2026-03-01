# Leutic Principal Dashboard - App Details Document

This document captures all minute details, options, data tables, and components used in the app.

## 1. Routing & Architecture
- `<Route path="/" element={<DashboardPage />} />`
- `<Route path="/classes" element={<ClassesPage />} />`
- `<Route path="/classes/:id" element={<ClassDetailsPage />} />`
- `<Route path="/students/:id" element={<StudentProfilePage />} />`
- `<Route path="/academics" element={<AcademicHubPage />} />`
- `<Route path="/directory" element={<DirectoryPage />} />`
- `<Route path="/communications" element={<CommunicationsHubPage />} />`
- `<Route path="/transportation" element={<TransportationHubPage />} />`
- `<Route path="/staff/:id" element={<StaffProfilePage />} />`
- `<Route path="/drivers/:id" element={<DriverProfilePage />} />`
- `<Route path="/calendar" element={<CalendarPage />} />`
- `<Route path="/community" element={<CommunityPage />} />`
- `<Route path="/reports" element={<ReportsPage />} />`
- `<Route path="/examinations/:id" element={<ExamDetailsPage />} />`
- `<Route path="*" element={<Navigate to="/" replace />} />`

## 2. Navigation / Sidebar
- icon="dashboard"
- label="Dashboard"
- icon="grid_view"
- label="Classes"
- icon="school"
- label="Academic Hub"
- icon="badge"
- label="Directory"
- icon="chat_bubble"
- label="Communication"
- icon="directions_bus"
- label="Transportation"
- icon="calendar_month"
- label="Calendar"
- icon="hub"
- label="Community"
- icon="analytics"
- label="Reports"

## 3. Pages & Features
### features/academics/pages/AcademicHubPage.tsx
```tsx
import { useState } from "react";
import { TopBar } from "../../../components/Header";
import { cn } from "../../../lib/utils";
import { ExaminationsPage } from "../../examinations/pages/ExaminationsPage";
import { CurriculumPage } from "../../curriculum/pages/CurriculumPage";
import { ProgramsPage } from "../../programs/pages/ProgramsPage";

export const AcademicHubPage = () => {
  const [activeTab, setActiveTab] = useState<
    "exams" | "curriculum" | "programs"
  >("exams");

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
      <div className="shrink-0">
        <TopBar
          title="Academic Hub"
          subtitle="Unified control for examinations, assessments, curriculum mapping, and enrichment programs."
          actions={
            <div className="flex gap-3">
              <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm">
                <span className="material-symbols-outlined text-sm">
                  add_circle
                </span>
                New Academic Entry
              </button>
            </div>
          }
        />

        <div className="px-8 border-b border-dark-blue-grey/10 bg-white">
          <div className="flex gap-8">
            {[
              { id: "exams", label: "Examinations", icon: "description" },
              {
                id: "curriculum",
                label: "Curriculum Mapping",
                icon: "account_tree",
              },
              {
                id: "programs",
                label: "Programs & Initiatives",
                icon: "rocket_launch",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "flex items-center gap-2 pb-4 text-sm font-bold tracking-tight transition-all relative mt-4",
                  activeTab === tab.id
                    ? "text-dark-blue-grey"
                    : "text-dark-blue-grey/40 hover:text-dark-blue-grey",
                )}
              >
                <span className="material-symbols-outlined text-lg">
                  {tab.icon}
                </span>
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-pale-lime rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col">
        {activeTab === "exams" && (
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <ExaminationsPage isHubChild />
          </div>
        )}
        {activeTab === "curriculum" && (
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <CurriculumPage isHubChild />
          </div>
        )}
        {activeTab === "programs" && (
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <ProgramsPage isHubChild />
          </div>
        )}
      </div>
    </div>
  );
};

```
### features/settings/pages/StaffProfilePage.tsx
```tsx
import { useNavigate, useParams } from "react-router-dom";
import { TopBar } from "../../../components/Header";

export const StaffProfilePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const staffMembers = [
    {
      name: "Dr. Ananya Iyer",
      id: "ST-1024-001",
      role: "Lead Teacher",
      department: "Mathematics",
      performance: 96,
      auraScore: 98.4,
      status: "Active",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      email: "a.iyer@leutic.edu",
      joinDate: "July 2018",
    },
    {
      name: "Rishi Deshmukh",
      id: "ST-1024-042",
      role: "Senior Counselor",
      department: "Student Affairs",
      performance: 88,
      auraScore: 91.2,
      status: "Remote",
      img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop",
      email: "r.deshmukh@leutic.edu",
      joinDate: "Aug 2020",
    },
    {
      name: "Pooja Trivedi",
      id: "ST-1024-118",
      role: "Science Head",
      department: "Natural Sciences",
      performance: 92,
      auraScore: 94.5,
      status: "Active",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      email: "p.trivedi@leutic.edu",
      joinDate: "June 2019",
    },
    {
      name: "Arvind Swamy",
      id: "ST-1024-085",
      role: "Department Lead",
      department: "History",
      performance: 79,
      auraScore: 82.2,
      status: "On Leave",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      email: "a.swamy@leutic.edu",
      joinDate: "Jan 2017",
    },
  ];

  const staff =
    staffMembers.find((s) => s.id === id) ||
    staffMembers.find((s) => s.id === "ST-1024-001")!;

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
      <TopBar
        title={staff.name}
        subtitle={`${staff.role} • ${staff.department} | Staff ID: ${staff.id}`}
        onBack={() => navigate(-1)}
        actions={
          <div className="flex items-center gap-3">
            <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm">
              <span className="material-symbols-outlined text-sm">mail</span>
              Message
            </button>
            <button className="bg-dark-blue-grey text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm">
              <span className="material-symbols-outlined text-sm">
                settings
              </span>
              Manage
            </button>
          </div>
        }
      />

      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        {/* Profile Card */}
        <div className="flex flex-col md:flex-row gap-8 items-center border-b border-dark-blue-grey/10 pb-8">
          <div
            className="size-24 rounded-xl bg-cover bg-center border border-dark-blue-grey/10 shrink-0 shadow-sm"
            style={{ backgroundImage: `url("${staff.img}")` }}
          ></div>
          <div className="flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-0.5 bg-dark-blue-grey text-pale-lime text-[10px] font-black rounded uppercase tracking-widest border border-white/10">
                {staff.status}
              </span>
              <p className="text-dark-blue-grey/60 text-sm font-medium">
                Joined: {staff.joinDate}
              </p>
            </div>
            <div className="flex gap-6 mt-4">
              <div>
                <p className="text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest mb-1">
                  Email Address
                </p>
                <p className="text-sm font-bold text-dark-blue-grey">
                  {staff.email}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest mb-1">
                  Phone
                </p>
                <p className="text-sm font-bold text-dark-blue-grey">
                  +91 98765 43210
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-pale-lime/10 border border-pale-lime/30 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-dark-blue-grey/50 text-xs font-bold uppercase tracking-widest">
                Performance
              </p>
              <span className="material-symbols-outlined text-dark-blue-grey/30">
                trending_up
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-black text-dark-blue-grey tracking-tighter">
                {staff.performance}%
              </p>
              <p className="text-[10px] font-black bg-pale-lime text-dark-blue-grey px-2 py-0.5 rounded-full border border-dark-blue-grey/5 uppercase tracking-wider">
                Top 5%
              </p>
            </div>
          </div>

          <div className="bg-dark-blue-grey/5 border border-dark-blue-grey/10 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-dark-blue-grey/50 text-xs font-bold uppercase tracking-widest">
                Student Aura Impact
              </p>
              <span className="material-symbols-outlined text-dark-blue-grey/30">
                auto_awesome
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-black text-dark-blue-grey tracking-tighter">
                {staff.auraScore}
              </p>
            </div>
          </div>

          <div className="bg-dark-blue-grey/5 border border-dark-blue-grey/10 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-dark-blue-grey/50 text-xs font-bold uppercase tracking-widest">
                Classes Handled
              </p>
              <span className="material-symbols-outlined text-dark-blue-grey/30">
                groups
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-black text-dark-blue-grey tracking-tighter">
                12
              </p>
            </div>
          </div>
        </div>

        {/* Schedule Placeholder */}
        <div className="bg-white rounded-2xl border border-dark-blue-grey/10 shadow-sm overflow-hidden p-6">
          <h3 className="text-dark-blue-grey text-lg font-bold tracking-tight mb-6">
            Weekly Schedule
          </h3>
          <div className="grid grid-cols-5 gap-4">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
              <div key={day} className="space-y-3">
                <p className="text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest text-center">
                  {day}
                </p>
                <div className="p-3 rounded-lg bg-dark-blue-grey/[0.03] space-y-2">
                  <div className="h-8 bg-pale-lime/20 rounded border border-pale-lime/30"></div>
                  <div className="h-8 bg-dark-blue-grey/5 rounded"></div>
                  <div className="h-8 bg-pale-lime/20 rounded border border-pale-lime/30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

```
### features/settings/pages/StaffPage.tsx
```tsx
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";

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
        return "bg-pale-lime text-dark-blue-grey";
      case "on leave":
        return "bg-dark-blue-grey/20 text-dark-blue-grey/60";
      case "remote":
        return "bg-dark-blue-grey text-pale-lime";
      default:
        return "bg-dark-blue-grey/5 text-dark-blue-grey/50";
    }
  };

  const getProgressColor = (percent: number) => {
    if (percent > 85) return "bg-pale-lime";
    if (percent > 70) return "bg-dark-blue-grey";
    return "bg-dark-blue-grey/40";
  };

  return (
    <tr
      onClick={() => onClick(staff)}
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
      <td className="px-6 py-4 text-sm text-dark-blue-grey font-medium">
        {role}
      </td>
      <td className="px-6 py-4 text-sm text-dark-blue-grey/60">{department}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-24 h-1.5 bg-dark-blue-grey/5 rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full transition-all",
                getProgressColor(performance),
              )}
              style={{ width: `${performance}%` }}
            ></div>
          </div>
          <span className="text-xs font-semibold text-dark-blue-grey/70">
            {performance}%
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
              <button className="bg-white border border-dark-blue-grey/10 text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-dark-blue-grey/5 shadow-sm transition-all">
                <span className="material-symbols-outlined text-sm">
                  upload_file
                </span>
                Bulk CSV Import
              </button>
              <button
                onClick={handleAddStaff}
                className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 shadow-sm transition-all active:scale-95"
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

      <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-dark-blue-grey/[0.01]">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Total Staff",
              value: "148",
              color: "text-dark-blue-grey",
            },
            {
              label: "Departments",
              value: "12",
              color: "text-dark-blue-grey",
            },
            {
              label: "Instructional Quality",
              value: "94%",
              color: "text-pale-lime",
            },
            { label: "On Leave", value: "05", color: "text-red-500" },
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
              className="bg-white border border-dark-blue-grey/10 rounded-lg text-sm px-3 py-2 text-dark-blue-grey focus:ring-pale-lime outline-none"
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
              className="bg-white border border-dark-blue-grey/10 rounded-lg text-sm px-3 py-2 text-dark-blue-grey focus:ring-pale-lime outline-none"
            >
              <option>Status (All)</option>
              <option>Active</option>
              <option>On Leave</option>
              <option>Remote</option>
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
                    Staff Member
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    ID
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    Role
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    Department
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    Instructional Quality
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
                      className="px-6 py-12 text-center text-dark-blue-grey/30 text-sm font-medium"
                    >
                      No staff members match your current filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="bg-dark-blue-grey/[0.02] px-6 py-4 flex items-center justify-between border-t border-dark-blue-grey/10">
            <p className="text-xs text-dark-blue-grey/40 font-medium">
              Showing {filteredStaff.length} of {staffMembers.length} staff
              members
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

```
### features/transportation/pages/DriverProfilePage.tsx
```tsx
import { useNavigate, useParams } from "react-router-dom";
import { TopBar } from "../../../components/Header";

export const DriverProfilePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const drivers = [
    {
      name: "Rajesh Kumar",
      id: "DRV-102",
      bus: "BUS-001",
      license: "LIC-882190",
      status: "Active",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      phone: "+91 91234 56780",
      experience: "8 Years",
    },
    {
      name: "Sanjay Verma",
      id: "DRV-105",
      bus: "BUS-002",
      license: "LIC-443211",
      status: "Active",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
      phone: "+91 91234 56781",
      experience: "5 Years",
    },
    {
      name: "Vikram Malhotra",
      id: "DRV-110",
      bus: "BUS-003",
      license: "LIC-110944",
      status: "On Leave",
      img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
      phone: "+91 91234 56782",
      experience: "12 Years",
    },
    {
      name: "Dilip Singh",
      id: "DRV-115",
      bus: "BUS-004",
      license: "LIC-994022",
      status: "Active",
      img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
      phone: "+91 91234 56783",
      experience: "6 Years",
    },
  ];

  const driver =
    drivers.find((d) => d.id === id) ||
    drivers.find((d) => d.id === "DRV-102")!;

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
      <TopBar
        title={driver.name}
        subtitle={`Fleet Driver | ID: ${driver.id}`}
        onBack={() => navigate(-1)}
        actions={
          <div className="flex items-center gap-3">
            <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm">
              <span className="material-symbols-outlined text-sm">call</span>
              Call Driver
            </button>
          </div>
        }
      />

      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-center border-b border-dark-blue-grey/10 pb-8">
          <div
            className="size-24 rounded-xl bg-cover bg-center border border-dark-blue-grey/10 shrink-0 shadow-sm"
            style={{ backgroundImage: `url("${driver.img}")` }}
          ></div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2 py-0.5 bg-pale-lime text-dark-blue-grey text-[10px] font-black rounded uppercase tracking-widest border border-dark-blue-grey/10">
                {driver.status}
              </span>
              <p className="text-dark-blue-grey/60 text-sm font-medium">
                Assigned to: {driver.bus}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p className="text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest mb-1">
                  License Number
                </p>
                <p className="text-sm font-bold text-dark-blue-grey">
                  {driver.license}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest mb-1">
                  Experience
                </p>
                <p className="text-sm font-bold text-dark-blue-grey">
                  {driver.experience}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest mb-1">
                  Phone
                </p>
                <p className="text-sm font-bold text-dark-blue-grey">
                  {driver.phone}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark-blue-grey/[0.02] border border-dark-blue-grey/10 rounded-2xl p-6">
          <h3 className="text-dark-blue-grey text-base font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined">route</span>
            Current Route: North Corridor Area A
          </h3>
          <div className="space-y-4">
            {[
              "07:30 AM - Sector 4 Pickup",
              "07:45 AM - Oak Street Junction",
              "08:15 AM - School Arrival",
            ].map((stop, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-pale-lime"></div>
                <p className="text-sm text-dark-blue-grey/60 font-medium">
                  {stop}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

```
### features/transportation/pages/DriversPage.tsx
```tsx
import { useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";

const DriverRow = ({
  driver,
  onClick,
}: {
  driver: any;
  onClick: (d: any) => void;
}) => {
  return (
    <tr
      onClick={() => onClick(driver)}
      className="hover:bg-dark-blue-grey/[0.02] transition-colors group cursor-pointer"
    >
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div
            className="size-8 rounded-full bg-cover bg-center border border-dark-blue-grey/10"
            style={{ backgroundImage: `url("${driver.img}")` }}
          ></div>
          <span className="text-sm font-bold text-dark-blue-grey group-hover:underline decoration-pale-lime underline-offset-4">
            {driver.name}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-dark-blue-grey/50 font-mono">
        {driver.id}
      </td>
      <td className="px-6 py-4 text-sm text-dark-blue-grey">{driver.bus}</td>
      <td className="px-6 py-4 text-sm text-dark-blue-grey/60">
        {driver.license}
      </td>
      <td className="px-6 py-4">
        <span
          className={cn(
            "inline-flex items-center px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest border",
            driver.status === "Active"
              ? "bg-pale-lime text-dark-blue-grey border-dark-blue-grey/10"
              : "bg-dark-blue-grey text-pale-lime border-white/10",
          )}
        >
          {driver.status}
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

export const DriversPage = ({ isHubChild }: { isHubChild?: boolean }) => {
  const navigate = useNavigate();
  const drivers = [
    {
      name: "Rajesh Kumar",
      id: "DRV-102",
      bus: "BUS-001",
      license: "LIC-882190",
      status: "Active",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Sanjay Verma",
      id: "DRV-105",
      bus: "BUS-002",
      license: "LIC-443211",
      status: "Active",
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
    },
    {
      name: "Vikram Malhotra",
      id: "DRV-110",
      bus: "BUS-003",
      license: "LIC-110944",
      status: "On Leave",
      img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
    },
    {
      name: "Dilip Singh",
      id: "DRV-115",
      bus: "BUS-004",
      license: "LIC-994022",
      status: "Active",
      img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div
      className={cn(
        "flex-1 flex flex-col overflow-hidden bg-white",
        !isHubChild && "h-screen",
      )}
    >
      {!isHubChild && (
        <TopBar
          title="Fleet Drivers Management"
          subtitle="Manage driver profiles, licenses, and bus assignments."
          actions={
            <div className="flex items-center gap-3">
              <button className="bg-white border border-dark-blue-grey/10 text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-dark-blue-grey/5 transition-all shadow-sm">
                <span className="material-symbols-outlined text-lg">
                  upload_file
                </span>
                Bulk CSV Import
              </button>
              <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95">
                <span className="material-symbols-outlined text-sm">
                  person_add
                </span>
                Add New Driver
              </button>
            </div>
          }
        />
      )}

      <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-dark-blue-grey/[0.01]">
        <div className="bg-white rounded-2xl border border-dark-blue-grey/10 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-dark-blue-grey/[0.02] border-b border-dark-blue-grey/10">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    Driver Name
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    ID
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    Bus Assignment
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-dark-blue-grey/40">
                    License No
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
                {drivers.map((driver, i) => (
                  <DriverRow
                    key={i}
                    driver={driver}
                    onClick={(d) => navigate(`/drivers/${d.id}`)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

```
### features/transportation/pages/TransportationPage.tsx
```tsx
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

```
### features/transportation/pages/TransportationHubPage.tsx
```tsx
import { useState } from "react";
import { TopBar } from "../../../components/Header";
import { cn } from "../../../lib/utils";
import { TransportationPage } from "./TransportationPage";
import { DriversPage } from "./DriversPage";

export const TransportationHubPage = () => {
  const [activeTab, setActiveTab] = useState<"tracking" | "drivers">(
    "tracking",
  );

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
      <div className="shrink-0">
        <TopBar
          title="Transportation Hub"
          subtitle="Real-time bus tracking and comprehensive driver management."
          actions={
            <div className="flex gap-3">
              <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm">
                <span className="material-symbols-outlined text-sm">
                  directions_bus
                </span>
                Manage Fleet
              </button>
            </div>
          }
        />

        <div className="px-8 border-b border-dark-blue-grey/10 bg-white">
          <div className="flex gap-8">
            {[
              { id: "tracking", label: "Fleet Tracking", icon: "location_on" },
              {
                id: "drivers",
                label: "Driver Registry",
                icon: "person_pin_circle",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "flex items-center gap-2 pb-4 text-sm font-bold tracking-tight transition-all relative mt-4",
                  activeTab === tab.id
                    ? "text-dark-blue-grey"
                    : "text-dark-blue-grey/40 hover:text-dark-blue-grey",
                )}
              >
                <span className="material-symbols-outlined text-lg">
                  {tab.icon}
                </span>
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-pale-lime rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col">
        {activeTab === "tracking" ? (
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <TransportationPage isHubChild />
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <DriversPage isHubChild />
          </div>
        )}
      </div>
    </div>
  );
};

```
### features/calendar/pages/CalendarPage.tsx
```tsx
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

```
### features/curriculum/pages/CurriculumPage.tsx
```tsx
import { useState } from "react";
import { TopBar } from "../../../components/Header";
import { cn } from "../../../lib/utils";

export const CurriculumPage = ({ isHubChild }: { isHubChild?: boolean }) => {
  const [activeTab, setActiveTab] = useState<
    "mapping" | "subjects" | "syllabic"
  >("mapping");

  const subjects = [
    {
      id: "SUB-001",
      name: "Mathematics",
      head: "Dr. Ananya Iyer",
      teachers: 4,
      classes: 8,
      intensity: "High",
    },
    {
      id: "SUB-002",
      name: "Modern Physics",
      head: "Pooja Trivedi",
      teachers: 3,
      classes: 6,
      intensity: "Medium",
    },
    {
      id: "SUB-003",
      name: "World History",
      head: "Arvind Swamy",
      teachers: 2,
      classes: 5,
      intensity: "Medium",
    },
    {
      id: "SUB-004",
      name: "English Literature",
      head: "Deepika Padukone",
      teachers: 5,
      classes: 10,
      intensity: "High",
    },
  ];

  const mappings = [
    {
      class: "Grade 10-A",
      subject: "Mathematics",
      teacher: "Dr. Ananya Iyer",
      students: 32,
      schedule: "Mon, Wed, Fri",
    },
    {
      class: "Grade 10-B",
      subject: "Mathematics",
      teacher: "Ms. Sharma",
      students: 28,
      schedule: "Tue, Thu, Sat",
    },
    {
      class: "Grade 11-A",
      subject: "Modern Physics",
      teacher: "Pooja Trivedi",
      students: 30,
      schedule: "Mon, Thu",
    },
    {
      class: "Grade 12-C",
      subject: "World History",
      teacher: "Arvind Swamy",
      students: 25,
      schedule: "Wed, Fri",
    },
  ];

  return (
    <div
      className={cn(
        "flex-1 flex flex-col overflow-hidden bg-white",
        !isHubChild && "h-screen",
      )}
    >
      {!isHubChild && (
        <TopBar
          title="Curriculum & Subject Mapping"
          subtitle="Manage academic structure, subject allocations, and teacher-student mapping."
          actions={
            <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95">
              <span className="material-symbols-outlined text-sm">
                assignment_ind
              </span>
              Assign Teacher
            </button>
          }
        />
      )}

      <div className="px-8 pt-6 border-b border-dark-blue-grey/10 shrink-0 bg-white">
        <div className="flex gap-8">
          {[
            { id: "mapping", label: "Subject Mapping", icon: "hub" },
            { id: "subjects", label: "Subject Inventory", icon: "inventory_2" },
            { id: "syllabic", label: "Syllabic Tracker", icon: "fact_check" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "flex items-center gap-2 pb-4 text-sm font-bold tracking-tight transition-all relative",
                activeTab === tab.id
                  ? "text-dark-blue-grey"
                  : "text-dark-blue-grey/40 hover:text-dark-blue-grey",
              )}
            >
              <span className="material-symbols-outlined text-lg">
                {tab.icon}
              </span>
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-pale-lime rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8 bg-dark-blue-grey/[0.01]">
        {activeTab === "mapping" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl border border-dark-blue-grey/10 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-dark-blue-grey/10 flex justify-between items-center">
                    <h3 className="text-dark-blue-grey text-lg font-bold">
                      Current Assignments
                    </h3>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-dark-blue-grey/30 text-sm">
                        search
                      </span>
                      <input
                        className="pl-9 pr-4 py-2 border border-dark-blue-grey/10 rounded-lg text-xs w-64 outline-none focus:ring-2 focus:ring-pale-lime"
                        placeholder="Search class or subject..."
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-dark-blue-grey/[0.01] border-b border-dark-blue-grey/10">
                          <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                            Class
                          </th>
                          <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                            Subject
                          </th>
                          <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                            Teacher
                          </th>
                          <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                            Students
                          </th>
                          <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest text-right">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-dark-blue-grey/5">
                        {mappings.map((m, i) => (
                          <tr
                            key={i}
                            className="hover:bg-dark-blue-grey/[0.01] transition-colors group"
                          >
                            <td className="px-6 py-4 font-bold text-sm text-dark-blue-grey">
                              {m.class}
                            </td>
                            <td className="px-6 py-4">
                              <span className="px-2 py-1 rounded bg-dark-blue-grey/5 text-dark-blue-grey text-[10px] font-black border border-dark-blue-grey/5 tracking-widest">
                                {m.subject}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <div className="size-6 rounded-full bg-pale-lime/20 flex items-center justify-center text-[10px] font-black text-dark-blue-grey">
                                  {m.teacher.split(" ").pop()?.charAt(0)}
                                </div>
                                <span className="text-sm font-medium text-dark-blue-grey/70">
                                  {m.teacher}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-dark-blue-grey/40">
                              {m.students}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button className="text-dark-blue-grey/30 hover:text-dark-blue-grey transition-colors">
                                <span className="material-symbols-outlined text-xl">
                                  edit_note
                                </span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <aside className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-dark-blue-grey/10 shadow-sm">
                  <h3 className="text-dark-blue-grey text-sm font-black uppercase tracking-widest mb-4">
                    Subject Distribution
                  </h3>
                  <div className="space-y-4">
                    {subjects.map((sub, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter text-dark-blue-grey/50">
                          <span>{sub.name}</span>
                          <span>{sub.classes} Classes</span>
                        </div>
                        <div className="h-2 bg-dark-blue-grey/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-pale-lime rounded-full transition-all duration-700"
                            style={{ width: `${(sub.classes / 12) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-dark-blue-grey rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                  <h4 className="text-lg font-bold mb-2">
                    Smart Conflict Check
                  </h4>
                  <p className="text-xs text-white/50 mb-4">
                    Ensure no teacher is double-booked across sections.
                  </p>
                  <button className="w-full bg-white/10 border border-white/20 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-colors">
                    Run Audit
                  </button>
                </div>
              </aside>
            </div>
          </div>
        )}

        {activeTab === "subjects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((sub, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-dark-blue-grey/10 shadow-sm hover:border-pale-lime transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="size-12 rounded-2xl bg-dark-blue-grey/[0.02] flex items-center justify-center text-dark-blue-grey/20 group-hover:bg-pale-lime group-hover:text-dark-blue-grey transition-all">
                    <span className="material-symbols-outlined text-2xl font-light">
                      auto_stories
                    </span>
                  </div>
                  <span
                    className={cn(
                      "text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded border",
                      sub.intensity === "High"
                        ? "bg-red-50 text-red-700 border-red-100"
                        : "bg-emerald-50 text-emerald-700 border-emerald-100",
                    )}
                  >
                    {sub.intensity} Load
                  </span>
                </div>
                <h3 className="text-lg font-black text-dark-blue-grey mb-1">
                  {sub.name}
                </h3>
                <p className="text-xs text-dark-blue-grey/40 font-medium mb-4">
                  Lead: {sub.head}
                </p>
                <div className="flex justify-between pt-4 border-t border-dark-blue-grey/5 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                  <span>{sub.teachers} Teachers</span>
                  <span>{sub.classes} Units</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

```
### features/classes/pages/ClassDetailsPage.tsx
```tsx
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";

export const ClassDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data fetching based on ID
  const classData = {
    grade: "Grade 10",
    section: id?.split("-")[1] || "B",
    room: "Room 304",
    teacher: "Mr. Marcus Roberts",
    avgParticipation: 94.2,
    attendanceRate: 98.5,
    activePrograms: 4,
    behaviorFlags: 2,
    students: [
      {
        name: "Alex Bennett",
        initials: "AB",
        participation: 95,
        auraScore: 842,
        status: "Good Standing",
        statusType: "normal" as const,
      },
      {
        name: "Chloe Hughes",
        initials: "CH",
        participation: 72,
        auraScore: 615,
        status: "Behavior Flag",
        statusType: "risk" as const,
      },
      {
        name: "Daniel Moore",
        initials: "DM",
        participation: 88,
        auraScore: 720,
        status: "Good Standing",
        statusType: "normal" as const,
      },
      {
        name: "Emily Stone",
        initials: "ES",
        participation: 45,
        auraScore: 340,
        status: "High Risk",
        statusType: "risk" as const,
      },
    ],
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
      <TopBar
        title={`${classData.grade} - Section ${classData.section}`}
        subtitle={`Lead Teacher: ${classData.teacher} | ${classData.room}`}
        actions={
          <>
            <button className="px-4 py-2 bg-white border border-dark-blue-grey/10 rounded-lg text-sm font-bold text-dark-blue-grey/60 hover:bg-dark-blue-grey/5 transition-all flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-lg">edit</span>
              Manage Class
            </button>
            <button className="px-4 py-2 bg-pale-lime text-dark-blue-grey rounded-lg text-sm font-bold shadow-sm hover:opacity-90 transition-all flex items-center gap-2 active:scale-95">
              <span className="material-symbols-outlined text-lg">mail</span>
              Message Parents
            </button>
          </>
        }
      />

      <div className="px-8 pt-6 pb-4 shrink-0 border-b border-dark-blue-grey/10">
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div className="flex flex-col gap-1">
            <nav className="flex items-center gap-2 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-[0.2em]">
              <button
                onClick={() => navigate("/classes")}
                className="hover:text-pale-lime transition-colors"
              >
                Classes
              </button>
              <span className="material-symbols-outlined text-[10px]">
                chevron_right
              </span>
              <span className="text-dark-blue-grey/60">
                {classData.grade}-{classData.section}
              </span>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8 bg-dark-blue-grey/[0.01]">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Avg Participation",
              value: `${classData.avgParticipation}%`,
              icon: "equalizer",
              trend: "+1.2% this week",
              positive: true,
            },
            {
              label: "Attendance Rate",
              value: `${classData.attendanceRate}%`,
              icon: "calendar_check",
              sub: "Above school average",
            },
            {
              label: "Active Programs",
              value: String(classData.activePrograms).padStart(2, "0"),
              icon: "assignment",
              sub: "2 school-wide, 2 internal",
            },
            {
              label: "Behavior Flags",
              value: String(classData.behaviorFlags).padStart(2, "0"),
              icon: "flag",
              trend: "Action required for 1",
              warning: true,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl border border-dark-blue-grey/10 shadow-sm flex flex-col gap-2"
            >
              <div className="flex justify-between items-start">
                <p className="text-dark-blue-grey/40 text-[10px] font-black uppercase tracking-widest">
                  {stat.label}
                </p>
                <span
                  className={cn(
                    "material-symbols-outlined",
                    stat.warning ? "text-red-500" : "text-pale-lime",
                  )}
                >
                  {stat.icon}
                </span>
              </div>
              <p className="text-dark-blue-grey text-3xl font-black tracking-tighter">
                {stat.value}
              </p>
              {stat.trend && (
                <div className="flex items-center gap-1 mt-1">
                  {stat.positive && (
                    <span className="material-symbols-outlined text-emerald-500 text-sm">
                      arrow_upward
                    </span>
                  )}
                  <p
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-wider",
                      stat.positive
                        ? "text-emerald-600"
                        : stat.warning
                          ? "text-red-600"
                          : "text-dark-blue-grey/30",
                    )}
                  >
                    {stat.trend}
                  </p>
                </div>
              )}
              {stat.sub && (
                <p className="text-dark-blue-grey/30 text-[10px] font-bold uppercase tracking-widest mt-1">
                  {stat.sub}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <section className="bg-white rounded-2xl border border-dark-blue-grey/10 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-dark-blue-grey/10 bg-dark-blue-grey/[0.02]">
                <h2 className="text-dark-blue-grey text-lg font-bold tracking-tight">
                  Students in Class
                </h2>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-dark-blue-grey/30 text-sm">
                    search
                  </span>
                  <input
                    className="pl-9 pr-4 py-2 text-xs border border-dark-blue-grey/10 rounded-lg bg-white/50 focus:ring-2 focus:ring-pale-lime w-64 outline-none transition-all focus:bg-white"
                    placeholder="Search students..."
                    type="text"
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-dark-blue-grey/[0.01] border-b border-dark-blue-grey/5 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                      <th className="px-6 py-4">Student Name</th>
                      <th className="px-6 py-4">Participation</th>
                      <th className="px-6 py-4 text-center">Aura Score</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-blue-grey/5">
                    {classData.students.map((student, i) => (
                      <tr
                        key={i}
                        className="hover:bg-dark-blue-grey/[0.01] transition-colors group cursor-pointer"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-pale-lime flex items-center justify-center text-xs font-black text-dark-blue-grey border border-dark-blue-grey/10">
                              {student.initials}
                            </div>
                            <span className="text-sm font-bold text-dark-blue-grey group-hover:underline decoration-pale-lime underline-offset-4">
                              {student.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-24 h-1.5 bg-dark-blue-grey/5 rounded-full overflow-hidden">
                              <div
                                className={cn(
                                  "h-full transition-all",
                                  student.participation > 80
                                    ? "bg-pale-lime"
                                    : student.participation > 60
                                      ? "bg-dark-blue-grey"
                                      : "bg-red-500",
                                )}
                                style={{ width: `${student.participation}%` }}
                              ></div>
                            </div>
                            <span className="text-xs font-black text-dark-blue-grey/70">
                              {student.participation}%
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="px-2 py-1 rounded bg-pale-lime/20 text-dark-blue-grey text-[10px] font-black border border-pale-lime/30 tracking-widest shadow-sm">
                            {student.auraScore}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={cn(
                              "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border",
                              student.statusType === "normal"
                                ? "bg-pale-lime text-dark-blue-grey border-dark-blue-grey/10"
                                : "bg-dark-blue-grey text-pale-lime border-white/10 shadow-lg",
                            )}
                          >
                            {student.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-dark-blue-grey/30 hover:text-dark-blue-grey transition-colors">
                            <span className="material-symbols-outlined text-xl">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-dark-blue-grey/[0.02] border-t border-dark-blue-grey/5 flex justify-center">
                <button className="text-[10px] font-black text-dark-blue-grey/40 hover:text-dark-blue-grey uppercase tracking-[0.2em] transition-colors">
                  Load More Students
                </button>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <h2 className="text-dark-blue-grey text-base font-black uppercase tracking-[0.2em] leading-none mb-2 pl-2">
              Class Activity
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  type: "Curriculum",
                  title: "Assignment Published",
                  msg: "Unit 4: Modern History essays assigned to all students.",
                  time: "1h ago",
                  icon: "inventory",
                  color: "bg-pale-lime",
                },
                {
                  type: "Programs",
                  title: "Science Fair Entries",
                  msg: "12 students from 10-B registered for the Regional Science Fair.",
                  time: "4h ago",
                  icon: "groups",
                  color: "bg-dark-blue-grey",
                  dark: true,
                },
                {
                  type: "Alert",
                  title: "Absence Threshold",
                  msg: "Emily Stone has reached 5 consecutive absences.",
                  time: "Yesterday",
                  icon: "notification_important",
                  color: "bg-red-500",
                  dark: true,
                  action: "Contact Guardian",
                },
                {
                  type: "Staff Note",
                  title: "Substitute Scheduled",
                  msg: "Ms. Vance will cover the afternoon session on Oct 26.",
                  time: "2d ago",
                  icon: "forum",
                  color: "bg-white",
                },
              ].map((activity, i) => (
                <div
                  key={i}
                  className={cn(
                    "p-4 rounded-2xl border shadow-sm transition-all hover:scale-[1.02]",
                    activity.dark
                      ? "bg-dark-blue-grey border-white/10"
                      : "bg-white border-dark-blue-grey/10",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "p-1.5 rounded-lg shrink-0",
                        activity.color,
                        activity.dark
                          ? "text-pale-lime"
                          : "text-dark-blue-grey",
                      )}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {activity.icon}
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <span
                          className={cn(
                            "text-[9px] font-black uppercase tracking-widest",
                            activity.dark
                              ? "text-pale-lime/60"
                              : "text-dark-blue-grey/40",
                          )}
                        >
                          {activity.type}
                        </span>
                        <span
                          className={cn(
                            "text-[9px] font-bold",
                            activity.dark
                              ? "text-white/30"
                              : "text-dark-blue-grey/20",
                          )}
                        >
                          {activity.time}
                        </span>
                      </div>
                      <p
                        className={cn(
                          "text-xs font-black leading-tight mb-1",
                          activity.dark ? "text-white" : "text-dark-blue-grey",
                        )}
                      >
                        {activity.title}
                      </p>
                      <p
                        className={cn(
                          "text-[10px] leading-relaxed mb-2 opacity-60 font-medium",
                          activity.dark
                            ? "text-white/70"
                            : "text-dark-blue-grey/70",
                        )}
                      >
                        {activity.msg}
                      </p>
                      {activity.action && (
                        <button className="text-[10px] font-black text-pale-lime uppercase tracking-widest hover:underline text-left">
                          {activity.action}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

```
### features/classes/pages/AttendancePage.tsx
```tsx
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
            <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95">
              <span className="material-symbols-outlined text-sm">save</span>
              Submit Attendance
            </button>
          }
        />
      )}

      <div className="flex-1 overflow-y-auto p-8 bg-dark-blue-grey/[0.01]">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header Controls */}
          <div className="bg-white p-6 rounded-2xl border border-dark-blue-grey/10 shadow-sm flex flex-wrap gap-6 items-end">
            <div className="space-y-1.5 flex-1 min-w-[200px]">
              <label className="text-[10px] font-black text-dark-blue-grey/40 uppercase tracking-widest pl-1">
                Select Class
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full bg-dark-blue-grey/[0.03] border-none rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-pale-lime"
              >
                <option>Grade 10-A</option>
                <option>Grade 10-B</option>
                <option>Grade 11-A</option>
              </select>
            </div>
            <div className="space-y-1.5 flex-1 min-w-[200px]">
              <label className="text-[10px] font-black text-dark-blue-grey/40 uppercase tracking-widest pl-1">
                Attendance Date
              </label>
              <input
                type="date"
                value={attendanceDate}
                onChange={(e) => setAttendanceDate(e.target.value)}
                className="w-full bg-dark-blue-grey/[0.03] border-none rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-pale-lime"
              />
            </div>
            <div className="flex items-center gap-3 bg-pale-lime/10 px-4 py-2.5 rounded-lg border border-pale-lime/20 flex-1 min-w-[200px]">
              <span className="material-symbols-outlined text-pale-lime">
                person_search
              </span>
              <div className="flex flex-col flex-1">
                <p className="text-[9px] font-black text-dark-blue-grey/40 uppercase tracking-widest leading-none mb-1">
                  Search Student
                </p>
                <input
                  type="text"
                  placeholder="Filter by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent border-none p-0 text-xs font-bold text-dark-blue-grey outline-none placeholder-dark-blue-grey/30 w-full"
                />
              </div>
            </div>
          </div>

          {/* Teacher Absence Tracking Alert */}
          {teacherStatus.isSubstitute && (
            <div className="bg-dark-blue-grey rounded-2xl p-6 text-white shadow-xl flex items-center justify-between border-l-[6px] border-pale-lime">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <span className="material-symbols-outlined text-pale-lime">
                    assignment_return
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold">
                    Teacher Substitution Active
                  </h3>
                  <p className="text-xs text-white/50">
                    {teacherStatus.current} is covering for{" "}
                    {teacherStatus.reason}.
                  </p>
                </div>
              </div>
              <button className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition-all">
                View Coverage Log
              </button>
            </div>
          )}

          {/* Student List */}
          <div className="bg-white rounded-2xl border border-dark-blue-grey/10 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-dark-blue-grey/10 flex justify-between items-center">
              <h3 className="text-dark-blue-grey text-lg font-bold">
                Student Roster - {selectedClass}
              </h3>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                  Mark all Present
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-dark-blue-grey/[0.01] border-b border-dark-blue-grey/10">
                    <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                      Student Name
                    </th>
                    <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest text-center">
                      Status
                    </th>
                    <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest text-right">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-blue-grey/5">
                  {filteredStudents.map((student) => (
                    <tr
                      key={student.id}
                      onClick={() =>
                        navigate(`/students/${student.id.replace("#", "")}`)
                      }
                      className="hover:bg-dark-blue-grey/[0.01] transition-colors cursor-pointer"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="size-8 rounded-full bg-cover bg-center border border-dark-blue-grey/10"
                            style={{ backgroundImage: `url("${student.img}")` }}
                          ></div>
                          <span className="text-sm font-bold text-dark-blue-grey">
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
                                    : "bg-white text-dark-blue-grey/40 border-dark-blue-grey/10 hover:border-dark-blue-grey/30",
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
                          className="bg-transparent border-none text-right text-[10px] font-medium text-dark-blue-grey/40 outline-none focus:text-dark-blue-grey"
                        />
                      </td>
                    </tr>
                  ))}
                  {filteredStudents.length === 0 && (
                    <tr>
                      <td
                        colSpan={3}
                        className="px-6 py-12 text-center text-dark-blue-grey/30 text-sm font-medium"
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

```
### features/classes/pages/ClassesPage.tsx
```tsx
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

```
### features/directory/pages/DirectoryPage.tsx
```tsx
import { useState } from "react";
import { TopBar } from "../../../components/Header";
import { cn } from "../../../lib/utils";
import { StaffPage } from "../../settings/pages/StaffPage";
import { StudentsPage } from "../../students/pages/StudentsPage";
import { AttendancePage } from "../../classes/pages/AttendancePage";

export const DirectoryPage = () => {
  const [activeTab, setActiveTab] = useState<
    "staff" | "students" | "attendance"
  >("staff");

  const [staffMembers, setStaffMembers] = useState([
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

  const [students, setStudents] = useState([
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

  const handleAddMember = () => {
    if (activeTab === "staff") {
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
      setStaffMembers((prev) => [newStaff, ...prev]);
    } else if (activeTab === "students") {
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
      setStudents((prev) => [newStudent, ...prev]);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
      <div className="shrink-0">
        <TopBar
          title="Campus Directory"
          subtitle="Complete management of staff profiles, student rosters, and attendance."
          actions={
            <div className="flex gap-3">
              <button className="bg-white border border-dark-blue-grey/10 text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-dark-blue-grey/5 transition-all">
                <span className="material-symbols-outlined text-sm">
                  upload_file
                </span>
                Bulk Import
              </button>
              <button
                onClick={handleAddMember}
                className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95"
              >
                <span className="material-symbols-outlined text-sm">
                  person_add
                </span>
                Add Member
              </button>
            </div>
          }
        />

        <div className="px-8 border-b border-dark-blue-grey/10 bg-white">
          <div className="flex gap-8">
            {[
              { id: "staff", label: "Staff Directory", icon: "badge" },
              { id: "students", label: "Student Roster", icon: "group" },
              {
                id: "attendance",
                label: "Attendance Tracking",
                icon: "event_available",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "flex items-center gap-2 pb-4 text-sm font-bold tracking-tight transition-all relative mt-4",
                  activeTab === tab.id
                    ? "text-dark-blue-grey"
                    : "text-dark-blue-grey/40 hover:text-dark-blue-grey",
                )}
              >
                <span className="material-symbols-outlined text-lg">
                  {tab.icon}
                </span>
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-pale-lime rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col">
        {activeTab === "staff" && (
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <StaffPage
              isHubChild
              externalStaff={staffMembers}
              onAddStaff={() => {
                setActiveTab("staff");
                handleAddMember();
              }}
            />
          </div>
        )}
        {activeTab === "students" && (
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <StudentsPage
              isHubChild
              externalStudents={students}
              onAddStudent={() => {
                setActiveTab("students");
                handleAddMember();
              }}
            />
          </div>
        )}
        {activeTab === "attendance" && (
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <AttendancePage isHubChild />
          </div>
        )}
      </div>
    </div>
  );
};

```
### features/dashboard/components/Alerts.tsx
```tsx
export const AlertItem = ({
  type,
  title,
  message,
  time,
  action,
}: {
  type: "urgent" | "notice" | "info";
  title: string;
  message: string;
  time: string;
  action?: string;
}) => {
  if (type === "urgent") {
    return (
      <div className="p-4 bg-dark-blue-grey border border-dark-blue-grey rounded-xl shadow-sm">
        <div className="flex items-start gap-3">
          <div className="bg-pale-lime p-1.5 rounded-lg text-dark-blue-grey">
            <span className="material-symbols-outlined text-sm">
              priority_high
            </span>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-pale-lime uppercase tracking-wider">
                Urgent Alert
              </span>
              <span className="text-[10px] text-white/50">{time}</span>
            </div>
            <p className="text-sm font-bold text-white mt-1">{title}</p>
            <p className="text-xs text-white/70 mt-0.5 leading-relaxed">
              {message}
            </p>
            {action && (
              <button className="mt-2 text-xs font-bold text-pale-lime flex items-center gap-1 hover:underline">
                {action}{" "}
                <span className="material-symbols-outlined text-[12px]">
                  chevron_right
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (type === "notice") {
    return (
      <div className="p-4 bg-pale-lime border border-pale-lime rounded-xl shadow-sm">
        <div className="flex items-start gap-3">
          <div className="bg-dark-blue-grey p-1.5 rounded-lg text-white">
            <span className="material-symbols-outlined text-sm">
              notifications
            </span>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-dark-blue-grey uppercase tracking-wider">
                Notice
              </span>
              <span className="text-[10px] text-dark-blue-grey/60">{time}</span>
            </div>
            <p className="text-sm font-bold text-dark-blue-grey mt-1">
              {title}
            </p>
            <p className="text-xs text-dark-blue-grey/80 mt-0.5 leading-relaxed">
              {message}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white border border-dark-blue-grey/10 rounded-xl shadow-sm">
      <div className="flex items-start gap-3">
        <div className="bg-pale-lime p-1.5 rounded-lg text-dark-blue-grey">
          <span className="material-symbols-outlined text-sm">info</span>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-dark-blue-grey/60 uppercase tracking-wider">
              System Info
            </span>
            <span className="text-[10px] text-dark-blue-grey/40">{time}</span>
          </div>
          <p className="text-sm font-bold text-dark-blue-grey mt-1">{title}</p>
          <p className="text-xs text-dark-blue-grey/70 mt-0.5 leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export const AlertsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-dark-blue-grey text-xl font-bold tracking-tight">
          Alerts & Flagged Activity
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        <AlertItem
          type="urgent"
          title="Unusual Attendance Drop"
          message="Grade 10 section B recorded a 22% drop in morning attendance."
          time="10m ago"
          action="Investigate"
        />
        <AlertItem
          type="notice"
          title="GPA Trends Warning"
          message="Semester mid-point: Grade 12 Math scores decreased by 4% school-wide."
          time="2h ago"
        />
        <AlertItem
          type="info"
          title="Resource Sync Complete"
          message="District library database synchronized with Academy archives."
          time="5h ago"
        />
      </div>
    </div>
  );
};

```
### features/dashboard/components/StatCard.tsx
```tsx
import { cn } from "../../../lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  trend: string;
  trendType: "up" | "down" | "stable";
  icon: string;
}

export const StatCard = ({
  label,
  value,
  trend,
  trendType,
  icon,
}: StatCardProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-dark-blue-grey/10 shadow-sm">
      <div className="flex justify-between items-start">
        <p className="text-dark-blue-grey/50 text-sm font-medium">{label}</p>
        <span className="material-symbols-outlined text-dark-blue-grey">
          {icon}
        </span>
      </div>
      <p className="text-dark-blue-grey tracking-tight text-3xl font-bold">
        {value}
      </p>
      <div className="flex items-center gap-1 mt-1">
        <span
          className={cn(
            "material-symbols-outlined text-sm",
            trendType === "stable"
              ? "text-dark-blue-grey/30"
              : "text-dark-blue-grey",
          )}
        >
          {trendType === "up"
            ? "trending_up"
            : trendType === "down"
              ? "trending_down"
              : "remove"}
        </span>
        <p
          className={cn(
            "text-xs",
            trendType === "stable"
              ? "text-dark-blue-grey/40 font-medium"
              : "text-dark-blue-grey font-bold",
          )}
        >
          {trend}
        </p>
      </div>
    </div>
  );
};

```
### features/dashboard/components/ProgramsTable.tsx
```tsx
export const ProgramsTable = () => {
  const programs = [
    {
      name: "Regional Science Fair",
      phase: "Competition Phase",
      teacher: "Dr. C.V. Raman",
      status: "Active",
      progress: 75,
    },
    {
      name: "District Athletics League",
      phase: "Qualifying Round",
      teacher: "Coach Rathore",
      status: "Warning",
      progress: 42,
    },
    {
      name: "Inter-High Arts Expo",
      phase: "Setup & Registration",
      teacher: "Ms. Amrita Sher-Gil",
      status: "Planning",
      progress: 15,
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-dark-blue-grey/10 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-dark-blue-grey/[0.02] border-b border-dark-blue-grey/10">
            <th className="px-6 py-4 text-xs font-bold text-dark-blue-grey/50 uppercase">
              Program Name
            </th>
            <th className="px-6 py-4 text-xs font-bold text-dark-blue-grey/50 uppercase">
              Lead Teacher
            </th>
            <th className="px-6 py-4 text-xs font-bold text-dark-blue-grey/50 uppercase">
              Status
            </th>
            <th className="px-6 py-4 text-xs font-bold text-dark-blue-grey/50 uppercase text-right">
              Progress
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-dark-blue-grey/5">
          {programs.map((program, idx) => (
            <tr
              key={idx}
              className="hover:bg-dark-blue-grey/[0.02] transition-colors text-dark-blue-grey"
            >
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <span className="text-sm font-bold">{program.name}</span>
                  <span className="text-xs text-dark-blue-grey/50">
                    {program.phase}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm opacity-70">
                {program.teacher}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                    program.status === "Active"
                      ? "bg-pale-lime text-dark-blue-grey"
                      : program.status === "Warning"
                        ? "bg-dark-blue-grey text-pale-lime"
                        : "bg-dark-blue-grey/5 text-dark-blue-grey/50"
                  }`}
                >
                  {program.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <div className="w-16 h-1.5 bg-dark-blue-grey/5 rounded-full">
                    <div
                      className="h-full bg-pale-lime rounded-full"
                      style={{ width: `${program.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold">{program.progress}%</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

```
### features/dashboard/components/ParticipationOverview.tsx
```tsx
export const ParticipationOverview = () => {
  return (
    <section className="bg-white rounded-xl border border-dark-blue-grey/10 mb-8 p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-dark-blue-grey text-lg font-bold tracking-tight flex items-center gap-2">
          <span className="material-symbols-outlined text-dark-blue-grey">
            query_stats
          </span>
          Participation Overview
        </h2>
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium text-dark-blue-grey/50">
            Target: 90%
          </span>
          <span className="text-xs font-bold text-dark-blue-grey px-2 py-0.5 rounded-full bg-pale-lime">
            Current: 84%
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-xs font-bold text-dark-blue-grey/50 uppercase tracking-widest">
            <span>Engagement Distribution</span>
            <span>84% Total Reach</span>
          </div>
          <div className="h-4 w-full bg-dark-blue-grey/5 rounded-full overflow-hidden flex">
            <div className="h-full bg-pale-lime" style={{ width: "84%" }}></div>
            <div
              className="h-full bg-dark-blue-grey/10"
              style={{ width: "16%" }}
            ></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-dark-blue-grey/5">
          <div>
            <p className="text-xs text-dark-blue-grey/50 mb-1">
              Interschool Events
            </p>
            <p className="text-lg font-bold text-dark-blue-grey">
              92%{" "}
              <span className="text-[10px] bg-pale-lime px-1.5 py-0.5 rounded text-dark-blue-grey">
                High
              </span>
            </p>
          </div>
          <div>
            <p className="text-xs text-dark-blue-grey/50 mb-1">
              Internal Programs
            </p>
            <p className="text-lg font-bold text-dark-blue-grey">
              76%{" "}
              <span className="text-[10px] bg-dark-blue-grey/5 px-1.5 py-0.5 rounded text-dark-blue-grey/60">
                Steady
              </span>
            </p>
          </div>
          <div>
            <p className="text-xs text-dark-blue-grey/50 mb-1">
              Student Volunteering
            </p>
            <p className="text-lg font-bold text-dark-blue-grey">
              64%{" "}
              <span className="text-[10px] bg-dark-blue-grey px-1.5 py-0.5 rounded text-white">
                Low
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

```
### features/dashboard/components/ClassCard.tsx
```tsx
import { cn } from "../../../lib/utils";

interface ClassCardProps {
  grade: string;
  section: string;
  room: string;
  status: string;
  statusType: "normal" | "attention" | "risk";
  teacher: string;
  students: number;
  participation: number;
  onClick?: () => void;
}

export const ClassCard = ({
  grade,
  section,
  room,
  status,
  statusType,
  teacher,
  students,
  participation,
  onClick,
}: ClassCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-white border border-dark-blue-grey/10 rounded-xl p-4 shadow-sm hover:border-dark-blue-grey transition-all",
        onClick && "cursor-pointer",
      )}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-dark-blue-grey">
            {grade} - Section {section}
          </span>
          <span className="text-xs text-dark-blue-grey/50">{room}</span>
        </div>
        <span
          className={cn(
            "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase border border-dark-blue-grey/10",
            statusType === "normal" && "bg-pale-lime text-dark-blue-grey",
            statusType === "attention" && "bg-dark-blue-grey text-white",
            statusType === "risk" && "bg-dark-blue-grey text-pale-lime",
          )}
        >
          {status}
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="text-dark-blue-grey/50">Teacher</span>
          <span className="font-semibold text-dark-blue-grey">{teacher}</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="text-dark-blue-grey/50">Students</span>
          <span className="font-semibold text-dark-blue-grey">{students}</span>
        </div>
        <div className="flex flex-col gap-1 pt-1">
          <div className="flex justify-between text-[10px] font-bold text-dark-blue-grey/30 uppercase">
            <span>Participation</span>
            <span>{participation}%</span>
          </div>
          <div className="h-1 w-full bg-dark-blue-grey/5 rounded-full">
            <div
              className={cn(
                "h-full rounded-full transition-all",
                participation < 70 ? "bg-pale-lime/60" : "bg-pale-lime",
              )}
              style={{ width: `${participation}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

```
### features/dashboard/pages/DashboardPage.tsx
```tsx
import { useNavigate } from "react-router-dom";
import { StatCard } from "../components/StatCard";
import { ParticipationOverview } from "../components/ParticipationOverview";
import { ClassCard } from "../components/ClassCard";
import { ProgramsTable } from "../components/ProgramsTable";
import { AlertsSection } from "../components/Alerts";
import { TopBar } from "../../../components/Header";

export const DashboardPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      <TopBar
        title="Principal Dashboard"
        subtitle="Northridge Academy | 2023-2024 Academic Year"
        actions={
          <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm">
            <span className="material-symbols-outlined text-sm">download</span>
            Quick Report
          </button>
        }
      />
      <div className="flex-1 overflow-y-auto px-8 py-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Total Active Students"
            value="1,240"
            trend="+2.1% from last month"
            trendType="up"
            icon="person"
          />
          <StatCard
            label="Participation Rate"
            value="84%"
            trend="+5.4% improvement"
            trendType="up"
            icon="analytics"
          />
          <StatCard
            label="Ongoing Programs"
            value="12"
            trend="Stable volume"
            trendType="stable"
            icon="event_note"
          />
          <StatCard
            label="Urgent Alerts"
            value="3"
            trend="-15% reduction"
            trendType="down"
            icon="warning"
          />
        </div>

        <ParticipationOverview />

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4 px-2">
            <h2 className="text-dark-blue-grey text-xl font-bold tracking-tight">
              Classes
            </h2>
            <button className="text-dark-blue-grey text-sm font-bold hover:underline">
              View All Classes
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ClassCard
              grade="Grade 10"
              section="B"
              room="Room 304"
              status="Normal"
              statusType="normal"
              teacher="Mr. Deshmukh"
              students={28}
              participation={94}
              onClick={() => navigate("/classes/10-B")}
            />
            <ClassCard
              grade="Grade 12"
              section="A"
              room="Room 102"
              status="Normal"
              statusType="normal"
              teacher="Dr. Iyer"
              students={22}
              participation={88}
              onClick={() => navigate("/classes/12-A")}
            />
            <ClassCard
              grade="Grade 9"
              section="D"
              room="Lab 1"
              status="Attention"
              statusType="attention"
              teacher="Ms. Reddy"
              students={31}
              participation={76}
              onClick={() => navigate("/classes/9-D")}
            />
            <ClassCard
              grade="Grade 11"
              section="C"
              room="Room 205"
              status="At Risk"
              statusType="risk"
              teacher="Mr. Swamy"
              students={25}
              participation={62}
              onClick={() => navigate("/classes/11-C")}
            />
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-dark-blue-grey text-xl font-bold tracking-tight">
                Ongoing Interschool Programs
              </h2>
              <button className="text-dark-blue-grey text-sm font-bold hover:underline">
                View All
              </button>
            </div>
            <ProgramsTable />
          </div>
          <div className="flex flex-col gap-4">
            <AlertsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

```
### features/students/pages/StudentsPage.tsx
```tsx
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

```
### features/students/pages/StudentProfilePage.tsx
```tsx
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";

export const StudentProfilePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const students = [
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
    },
  ];

  const student =
    students.find((s) => s.id === id) ||
    students.find((s) => s.id === "OA-2024-001")!;

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
      <TopBar
        title={student.name}
        subtitle={`${student.grade} • Northridge Academy | Student ID: ${student.id}`}
        onBack={() => navigate(-1)}
        actions={
          <div className="flex items-center gap-3">
            <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm">
              <span className="material-symbols-outlined text-sm">
                edit_note
              </span>
              Add Note
            </button>
            <button className="bg-dark-blue-grey text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm">
              <span className="material-symbols-outlined text-sm">
                picture_as_pdf
              </span>
              Export Report
            </button>
          </div>
        }
      />

      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        {/* Profile Card */}
        <div className="flex flex-col md:flex-row gap-8 items-center border-b border-dark-blue-grey/10 pb-8">
          <div
            className="size-24 rounded-xl bg-cover bg-center border border-dark-blue-grey/10 shrink-0 shadow-sm"
            style={{ backgroundImage: `url("${student.img}")` }}
          ></div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 bg-pale-lime text-dark-blue-grey text-[10px] font-black rounded uppercase tracking-widest border border-dark-blue-grey/10">
                {student.status}
              </span>
              <p className="text-dark-blue-grey/60 text-sm font-medium">
                Enrolled: {student.enrollmentDate}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Placeholder */}
        <div className="border-b border-dark-blue-grey/10">
          <div className="flex gap-8">
            {[
              "Overview",
              "Academic History",
              "Behavioral Records",
              "Parental Contact",
            ].map((tab, i) => (
              <button
                key={tab}
                className={cn(
                  "pb-4 text-sm font-bold tracking-tight transition-all",
                  i === 0
                    ? "border-b-2 border-pale-lime text-dark-blue-grey"
                    : "text-dark-blue-grey/40 hover:text-dark-blue-grey",
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-pale-lime/10 border border-pale-lime/30 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-dark-blue-grey/50 text-xs font-bold uppercase tracking-widest">
                Aura Score
              </p>
              <span className="material-symbols-outlined text-dark-blue-grey/30">
                analytics
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-black text-dark-blue-grey tracking-tighter">
                {student.auraScore}
                <span className="text-lg opacity-30">/100</span>
              </p>
              <p className="text-[10px] font-black bg-pale-lime text-dark-blue-grey px-2 py-0.5 rounded-full border border-dark-blue-grey/5 uppercase tracking-wider">
                +5.2%
              </p>
            </div>
            <p className="text-[10px] text-dark-blue-grey/40 font-bold uppercase mt-4 tracking-widest">
              Weighted Engagement Metric
            </p>
          </div>

          <div className="bg-dark-blue-grey/5 border border-dark-blue-grey/10 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-dark-blue-grey/50 text-xs font-bold uppercase tracking-widest">
                Attendance
              </p>
              <span className="material-symbols-outlined text-dark-blue-grey/30">
                calendar_today
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-black text-dark-blue-grey tracking-tighter">
                {student.attendanceRate}%
              </p>
              <p className="text-[10px] font-black bg-dark-blue-grey text-white px-2 py-0.5 rounded-full border border-dark-blue-grey/5 uppercase tracking-wider">
                Stable
              </p>
            </div>
            <p className="text-[10px] text-dark-blue-grey/40 font-bold uppercase mt-4 tracking-widest">
              126/132 days attended
            </p>
          </div>

          <div className="bg-dark-blue-grey/5 border border-dark-blue-grey/10 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-dark-blue-grey/50 text-xs font-bold uppercase tracking-widest">
                GPA (Weighted)
              </p>
              <span className="material-symbols-outlined text-dark-blue-grey/30">
                school
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-black text-dark-blue-grey tracking-tighter">
                {student.gpa}
              </p>
              <p className="text-[10px] font-black bg-red-500 text-white px-2 py-0.5 rounded-full border border-dark-blue-grey/5 uppercase tracking-wider">
                -0.1
              </p>
            </div>
            <p className="text-[10px] text-dark-blue-grey/40 font-bold uppercase mt-4 tracking-widest">
              Class Rank: 14 / 285
            </p>
          </div>
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-dark-blue-grey/10 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-dark-blue-grey/10 bg-dark-blue-grey/[0.02] flex justify-between items-center">
                <h3 className="text-dark-blue-grey text-lg font-bold tracking-tight">
                  Participation History
                </h3>
                <span className="text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                  Last 12 Months
                </span>
              </div>
              <table className="w-full text-left">
                <thead className="bg-dark-blue-grey/[0.01] border-b border-dark-blue-grey/5">
                  <tr>
                    <th className="px-6 py-3 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                      Program
                    </th>
                    <th className="px-6 py-3 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                      Role
                    </th>
                    <th className="px-6 py-3 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                      Intensity
                    </th>
                    <th className="px-6 py-3 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest text-right">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-blue-grey/5">
                  {[
                    {
                      name: "Varsity Soccer",
                      role: "Team Captain",
                      width: "90%",
                      status: "ONGOING",
                    },
                    {
                      name: "Robotics Club",
                      role: "Lead Engineer",
                      width: "65%",
                      status: "ONGOING",
                    },
                    {
                      name: "Student Council",
                      role: "Treasurer",
                      width: "40%",
                      status: "COMPLETED",
                    },
                  ].map((p, i) => (
                    <tr
                      key={i}
                      className="hover:bg-dark-blue-grey/[0.01] transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-bold text-dark-blue-grey">
                        {p.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-dark-blue-grey/60 font-medium">
                        {p.role}
                      </td>
                      <td className="px-6 py-4">
                        <div className="w-24 h-1.5 bg-dark-blue-grey/[0.05] rounded-full overflow-hidden">
                          <div
                            className="bg-pale-lime h-full"
                            style={{ width: p.width }}
                          ></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span
                          className={cn(
                            "px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border",
                            p.status === "ONGOING"
                              ? "bg-pale-lime text-dark-blue-grey border-dark-blue-grey/5"
                              : "bg-dark-blue-grey/5 text-dark-blue-grey/30 border-dark-blue-grey/5",
                          )}
                        >
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-2xl border border-dark-blue-grey/10 shadow-sm overflow-hidden p-6">
              <h3 className="text-dark-blue-grey text-lg font-bold tracking-tight mb-6">
                Honors & Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Dean's List 2023",
                    sub: "Fall & Spring",
                    icon: "workspace_premium",
                  },
                  {
                    title: "MVP - Soccer",
                    sub: "Regional Title",
                    icon: "emoji_events",
                  },
                  {
                    title: "Science Fair Winner",
                    sub: "Physics Division",
                    icon: "science",
                  },
                  {
                    title: "AP Scholar Award",
                    sub: "National Recognition",
                    icon: "menu_book",
                  },
                ].map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl border border-dark-blue-grey/10 hover:border-pale-lime transition-all"
                  >
                    <div className="size-10 rounded-full bg-pale-lime flex items-center justify-center text-dark-blue-grey">
                      <span className="material-symbols-outlined text-xl">
                        {a.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark-blue-grey">
                        {a.title}
                      </p>
                      <p className="text-xs text-dark-blue-grey/40 font-medium uppercase tracking-wider">
                        {a.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-red-500/10 shadow-sm overflow-hidden">
              <div className="px-6 py-4 bg-red-500 text-white flex justify-between items-center shadow-lg shadow-red-500/20">
                <h3 className="text-lg font-black tracking-tighter uppercase italic">
                  Moderation Flags
                </h3>
                <span className="bg-white text-red-500 text-[10px] font-black px-2 py-0.5 rounded">
                  2 ACTIVE
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                  <div className="flex items-center gap-2 mb-2 font-bold text-red-700 text-sm">
                    <span className="material-symbols-outlined text-lg">
                      report_problem
                    </span>
                    Behavioral Escalation
                  </div>
                  <p className="text-xs text-red-700/60 font-medium leading-relaxed mb-4 italic">
                    Reported altercation in the cafeteria during lunch break on
                    Oct 14. Counselor referral pending.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-red-700 uppercase tracking-widest">
                      Severity: High
                    </span>
                    <button className="text-[10px] font-black text-dark-blue-grey underline uppercase tracking-widest">
                      View Report
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-blue-grey rounded-2xl border border-white/10 shadow-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white text-base font-bold tracking-tight">
                  Principal's Private Log
                </h3>
                <span className="material-symbols-outlined text-pale-lime text-xl">
                  lock
                </span>
              </div>
              <div className="space-y-6 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10 pl-6">
                <div className="relative">
                  <div className="absolute -left-[27px] top-1 size-2 rounded-full bg-pale-lime"></div>
                  <p className="text-[10px] font-bold text-pale-lime uppercase tracking-[0.2em] mb-1">
                    Oct 12 • Principal Priya Sharma
                  </p>
                  <p className="text-xs text-white/60 font-medium leading-relaxed italic">
                    "Met with parents regarding university apps. Aditya is
                    leaning towards Engineering."
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[27px] top-1 size-2 rounded-full bg-white/20"></div>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">
                    Sept 19 • Admin Smith
                  </p>
                  <p className="text-xs text-white/40 font-medium leading-relaxed">
                    "Transferred to Section B Honors History per request."
                  </p>
                </div>
              </div>
              <button className="w-full mt-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white/40 uppercase tracking-[0.2em] hover:bg-white/10 transition-colors border-dashed">
                + Add Administrative Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

```
### features/programs/components/ProgramCard.tsx
```tsx
import { cn } from "../../../lib/utils";

interface ProgramCardProps {
  name: string;
  category: string;
  participants: number;
  status: "Active" | "Warning" | "Planning" | "Completed";
  progress: number;
  leadTeacher: string;
  startDate: string;
  endDate: string;
  onClick?: () => void;
}

export const ProgramCard = ({
  name,
  category,
  participants,
  status,
  progress,
  leadTeacher,
  startDate,
  endDate,
  onClick,
}: ProgramCardProps) => {
  const statusStyles = {
    Active: "bg-pale-lime text-dark-blue-grey",
    Warning: "bg-red-500 text-white",
    Planning: "bg-blue-500 text-white",
    Completed: "bg-dark-blue-grey text-pale-lime",
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl border border-dark-blue-grey/10 p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-widest font-black text-dark-blue-grey/40">
            {category}
          </span>
          <h3 className="text-lg font-bold text-dark-blue-grey group-hover:text-black transition-colors">
            {name}
          </h3>
        </div>
        <span
          className={cn(
            "px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
            statusStyles[status],
          )}
        >
          {status}
        </span>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="size-7 rounded-full border-2 border-white bg-dark-blue-grey/5 flex items-center justify-center overflow-hidden"
            >
              <img
                src={`https://i.pravatar.cc/150?u=${name}${i}`}
                alt="avatar"
                className="size-full object-cover"
              />
            </div>
          ))}
          <div className="size-7 rounded-full border-2 border-white bg-pale-lime flex items-center justify-center text-[10px] font-bold text-dark-blue-grey">
            +{participants - 3}
          </div>
        </div>
        <span className="text-xs font-bold text-dark-blue-grey/40">
          Enrolled
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-dark-blue-grey/30">
            person
          </span>
          <p className="text-xs font-medium text-dark-blue-grey/60">
            Lead:{" "}
            <span className="text-dark-blue-grey font-bold">{leadTeacher}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-dark-blue-grey/30">
            calendar_today
          </span>
          <p className="text-xs font-medium text-dark-blue-grey/60">
            {startDate} - {endDate}
          </p>
        </div>

        <div className="pt-2">
          <div className="flex justify-between items-end mb-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-dark-blue-grey/40">
              Program Progress
            </span>
            <span className="text-xs font-black text-dark-blue-grey">
              {progress}%
            </span>
          </div>
          <div className="h-2 w-full bg-dark-blue-grey/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-pale-lime transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

```
### features/programs/pages/ProgramsPage.tsx
```tsx
import { TopBar } from "../../../components/Header";
import { ProgramCard } from "../components/ProgramCard";
import { cn } from "../../../lib/utils";

export const ProgramsPage = ({ isHubChild }: { isHubChild?: boolean }) => {
  const programs = [
    {
      name: "Regional Science Fair 2024",
      category: "Academic",
      participants: 45,
      status: "Active" as const,
      progress: 75,
      leadTeacher: "Dr. C.V. Raman",
      startDate: "Oct 15",
      endDate: "Dec 10",
    },
    {
      name: "District Athletics League",
      category: "Sports",
      participants: 120,
      status: "Warning" as const,
      progress: 42,
      leadTeacher: "Coach Rathore",
      startDate: "Nov 01",
      endDate: "Feb 15",
    },
    {
      name: "Inter-High Arts Expo",
      category: "Creative Arts",
      participants: 58,
      status: "Planning" as const,
      progress: 15,
      leadTeacher: "Ms. Amrita Sher-Gil",
      startDate: "Jan 05",
      endDate: "Mar 20",
    },
    {
      name: "National Coding Challenge",
      category: "Technology",
      participants: 32,
      status: "Active" as const,
      progress: 88,
      leadTeacher: "Mr. Satya Nadella",
      startDate: "Sep 20",
      endDate: "Nov 30",
    },
    {
      name: "Annual Music Festival",
      category: "Arts & Culture",
      participants: 85,
      status: "Active" as const,
      progress: 60,
      leadTeacher: "Mrs. M.S. Subbulakshmi",
      startDate: "Nov 20",
      endDate: "Dec 22",
    },
    {
      name: "Community Service Drive",
      category: "Social",
      participants: 200,
      status: "Completed" as const,
      progress: 100,
      leadTeacher: "Ms. Medha Patkar",
      startDate: "Aug 01",
      endDate: "Sep 30",
    },
  ];

  return (
    <div
      className={cn(
        "flex-1 flex flex-col overflow-hidden bg-white",
        !isHubChild && "h-screen",
      )}
    >
      {!isHubChild && (
        <TopBar
          title="Programs Management"
          subtitle="Explore and manage student enrichment opportunities across the network."
          actions={
            <>
              <button className="px-4 py-2 bg-white border border-dark-blue-grey/10 rounded-lg flex items-center gap-2 text-sm font-bold text-dark-blue-grey/60 hover:bg-dark-blue-grey/5 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  auto_graph
                </span>
                View Reports
              </button>
              <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm">
                <span className="material-symbols-outlined text-sm">
                  add_circle
                </span>
                Create Program
              </button>
            </>
          }
        />
      )}

      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        {/* Filters and Stats Summary */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-dark-blue-grey text-white p-4 rounded-2xl flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                Total Programs
              </span>
              <span className="text-2xl font-black">12</span>
            </div>
            <div className="bg-pale-lime text-dark-blue-grey p-4 rounded-2xl flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-dark-blue-grey/40">
                Active Now
              </span>
              <span className="text-2xl font-black">8</span>
            </div>
            <div className="bg-white border border-dark-blue-grey/10 p-4 rounded-2xl flex flex-col gap-1 shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-dark-blue-grey/40">
                Total Participants
              </span>
              <span className="text-2xl font-black">540</span>
            </div>
            <div className="bg-white border border-dark-blue-grey/10 p-4 rounded-2xl flex flex-col gap-1 shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-dark-blue-grey/40">
                Avg. Completion
              </span>
              <span className="text-2xl font-black">64%</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-dark-blue-grey/10 shadow-sm flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[250px]">
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-dark-blue-grey/30 group-focus-within:text-dark-blue-grey transition-colors">
                  search
                </span>
                <input
                  className="w-full bg-dark-blue-grey/[0.03] border-none rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-pale-lime text-dark-blue-grey placeholder-dark-blue-grey/30"
                  placeholder="Search programs..."
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <select className="bg-white border border-dark-blue-grey/10 rounded-lg text-sm px-3 py-2 text-dark-blue-grey font-bold focus:ring-pale-lime outline-none">
                <option>All Categories</option>
                <option>Academic</option>
                <option>Sports</option>
                <option>Creative Arts</option>
                <option>Technology</option>
              </select>
              <select className="bg-white border border-dark-blue-grey/10 rounded-lg text-sm px-3 py-2 text-dark-blue-grey font-bold focus:ring-pale-lime outline-none">
                <option>Status</option>
                <option>Active</option>
                <option>Planning</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
          {programs.map((program, i) => (
            <ProgramCard key={i} {...program} onClick={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
};

```
### features/examinations/pages/ExamDetailsPage.tsx
```tsx
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";

export const ExamDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const examData = {
    title: "Mid-Term Examination 2024",
    id: id || "EX-2024-001",
    status: "Completed",
    subjects: [
      {
        name: "Mathematics",
        teacher: "Dr. Ananya Iyer",
        avgScore: 76.5,
        submissions: "100%",
        status: "Published",
      },
      {
        name: "Science",
        teacher: "Pooja Trivedi",
        avgScore: 82.1,
        submissions: "100%",
        status: "Published",
      },
      {
        name: "History",
        teacher: "Arvind Swamy",
        avgScore: 74.8,
        submissions: "98%",
        status: "Reviewing",
      },
      {
        name: "English Literature",
        teacher: "Deepika Padukone",
        avgScore: 79.2,
        submissions: "100%",
        status: "Published",
      },
    ],
    studentPerformance: [
      {
        name: "Aditya Verma",
        grade: "10B",
        math: 85,
        science: 90,
        history: 88,
        english: 82,
        gpa: 3.8,
        img: "https://images.unsplash.com/photo-1542343633-ce3256525ee3?w=400&h=400&fit=crop",
      },
      {
        name: "Isha Kapoor",
        grade: "10B",
        math: 65,
        science: 72,
        history: 68,
        english: 70,
        gpa: 2.9,
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      },
      {
        name: "Kabir Mehra",
        grade: "10B",
        math: 92,
        science: 88,
        history: 94,
        english: 90,
        gpa: 4.0,
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      },
      {
        name: "Sneha Nair",
        grade: "10B",
        math: 42,
        science: 55,
        history: 48,
        english: 50,
        gpa: 2.1,
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      },
    ],
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
      <TopBar
        title={examData.title}
        subtitle={`Exam ID: ${examData.id} | Status: ${examData.status}`}
        actions={
          <div className="flex items-center gap-3">
            <button className="bg-white border border-dark-blue-grey/10 text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-dark-blue-grey/5 transition-all shadow-sm">
              <span className="material-symbols-outlined text-lg">
                download
              </span>
              Export CSV
            </button>
            <button className="bg-dark-blue-grey text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg active:scale-95">
              <span className="material-symbols-outlined text-sm">publish</span>
              Upload Marks (CSV)
            </button>
          </div>
        }
      />

      <div className="px-8 pt-6 pb-4 shrink-0 border-b border-dark-blue-grey/10">
        <nav className="flex items-center gap-2 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-[0.2em]">
          <button
            onClick={() => navigate("/examinations")}
            className="hover:text-pale-lime transition-colors"
          >
            Examinations
          </button>
          <span className="material-symbols-outlined text-[10px]">
            chevron_right
          </span>
          <span className="text-dark-blue-grey/60">{examData.id}</span>
        </nav>
      </div>

      <div className="flex-1 overflow-y-auto p-8 bg-dark-blue-grey/[0.01] space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Subject-wise Marks Status */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-dark-blue-grey text-base font-black uppercase tracking-[0.15em] leading-none mb-4 pl-2">
              Subject Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {examData.subjects.map((subject, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl border border-dark-blue-grey/10 shadow-sm flex flex-col gap-3"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-bold text-dark-blue-grey">
                        {subject.name}
                      </h3>
                      <p className="text-[10px] font-medium text-dark-blue-grey/40">
                        {subject.teacher}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border",
                        subject.status === "Published"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                          : "bg-pale-lime/20 text-dark-blue-grey/60 border-pale-lime/30",
                      )}
                    >
                      {subject.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-end mt-2">
                    <div className="space-y-1">
                      <p className="text-[9px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                        Avg. Score
                      </p>
                      <p className="text-2xl font-black text-dark-blue-grey tracking-tighter">
                        {subject.avgScore}%
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black text-dark-blue-grey/30 uppercase tracking-widest leading-none mb-1">
                        Submissions
                      </p>
                      <p className="text-xs font-bold text-dark-blue-grey">
                        {subject.submissions}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Student Performance Details */}
            <div className="bg-white rounded-2xl border border-dark-blue-grey/10 shadow-sm overflow-hidden mt-8">
              <div className="p-6 border-b border-dark-blue-grey/10 bg-dark-blue-grey/[0.02]">
                <h3 className="text-dark-blue-grey text-lg font-bold tracking-tight">
                  Student-wise Performance Breakdown
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-dark-blue-grey/[0.01] border-b border-dark-blue-grey/10">
                      <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                        Student
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest text-center">
                        Math
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest text-center">
                        Science
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest text-center">
                        History
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest text-right">
                        GPA
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-blue-grey/5">
                    {examData.studentPerformance.map((student, i) => (
                      <tr
                        key={i}
                        className="hover:bg-dark-blue-grey/[0.01] transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="size-8 rounded-full bg-cover bg-center border border-dark-blue-grey/10"
                              style={{
                                backgroundImage: `url("${student.img}")`,
                              }}
                            ></div>
                            <div>
                              <p className="text-sm font-bold text-dark-blue-grey">
                                {student.name}
                              </p>
                              <p className="text-[10px] font-medium text-dark-blue-grey/40">
                                Section {student.grade}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span
                            className={cn(
                              "text-xs font-bold",
                              student.math < 50
                                ? "text-red-500"
                                : "text-dark-blue-grey",
                            )}
                          >
                            {student.math}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center text-xs font-bold text-dark-blue-grey">
                          {student.science}
                        </td>
                        <td className="px-6 py-4 text-center text-xs font-bold text-dark-blue-grey">
                          {student.history}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="px-2 py-1 rounded bg-pale-lime text-dark-blue-grey text-[10px] font-black border border-dark-blue-grey/10 shadow-sm">
                            {student.gpa.toFixed(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar Analytics */}
          <aside className="space-y-6">
            <div className="bg-dark-blue-grey rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 size-40 bg-pale-lime opacity-[0.05] rounded-full group-hover:scale-125 transition-transform duration-700"></div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-pale-lime">
                  insert_chart
                </span>
                Exam Insights
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                      Class Average
                    </p>
                    <p className="text-lg font-black text-pale-lime">78.4%</p>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-pale-lime w-[78.4%] rounded-full shadow-[0_0_10px_rgba(219,232,144,0.3)]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                      Passing Rate
                    </p>
                    <p className="text-lg font-black text-emerald-400">92.1%</p>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 w-[92.1%] rounded-full shadow-[0_0_10px_rgba(52,211,153,0.3)]"></div>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 space-y-3">
                  <p className="text-[10px] font-black text-pale-lime uppercase tracking-widest underline underline-offset-4 mb-2">
                    Internal Flags
                  </p>
                  <div className="flex items-center gap-3 text-xs text-white/70">
                    <span className="material-symbols-outlined text-red-500 text-sm">
                      warning
                    </span>
                    4 students below threshold
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/70">
                    <span className="material-symbols-outlined text-pale-lime text-sm">
                      check_circle
                    </span>
                    All marks submitted for Grade 10
                  </div>
                </div>
                <button className="w-full mt-4 bg-white/5 border border-white/10 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-colors">
                  Generate Grade Distributions
                </button>
              </div>
            </div>

            <div className="bg-pale-lime rounded-2xl p-6 text-dark-blue-grey shadow-lg border-2 border-dark-blue-grey/5">
              <h3 className="text-lg font-black italic tracking-tighter mb-2 underline decoration-white/50 underline-offset-4">
                CSV Template
              </h3>
              <p className="text-xs font-medium mb-4 opacity-70">
                Download the standard template for bulk mark uploads.
              </p>
              <button className="w-full bg-dark-blue-grey text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xl hover:opacity-90 transition-all">
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                Download Template
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

```
### features/examinations/pages/ExaminationsPage.tsx
```tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";

export const ExaminationsPage = ({ isHubChild }: { isHubChild?: boolean }) => {
  const navigate = useNavigate();

  const [exams, setExams] = useState([
    {
      id: "EX-2024-001",
      title: "Mid-Term Examination 2024",
      type: "Major",
      status: "Completed",
      date: "Oct 12 - Oct 20, 2024",
      classes: ["Grade 10", "Grade 11", "Grade 12"],
      subjects: 12,
      avgScore: 78.4,
    },
    {
      id: "EX-2024-002",
      title: "Science Mock Test",
      type: "Assessment",
      status: "In Progress",
      date: "Nov 05, 2024",
      classes: ["Grade 10A", "Grade 10B"],
      subjects: 1,
      avgScore: null,
    },
    {
      id: "EX-2024-003",
      title: "Annual Sports Quiz",
      type: "Quiz",
      status: "Upcoming",
      date: "Nov 15, 2024",
      classes: ["All Grades"],
      subjects: 1,
      avgScore: null,
    },
    {
      id: "EX-2024-004",
      title: "Mathematics Olympiad",
      type: "Competition",
      status: "Upcoming",
      date: "Dec 02, 2024",
      classes: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
      subjects: 1,
      avgScore: null,
    },
  ]);

  const handleAddExam = () => {
    const newExam = {
      id: `EX-2024-${Math.floor(Math.random() * 900) + 100}`,
      title: "New Assessment Cycle",
      type: "Assessment",
      status: "Upcoming",
      date: "TBD",
      classes: ["Grade 10", "Grade 11"],
      subjects: 1,
      avgScore: null,
    };
    setExams((prev) => [newExam, ...prev]);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-emerald-500 text-white";
      case "in progress":
        return "bg-pale-lime text-dark-blue-grey border-dark-blue-grey/10";
      case "upcoming":
        return "bg-dark-blue-grey text-white";
      default:
        return "bg-dark-blue-grey/10 text-dark-blue-grey/40";
    }
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
          title="Examination & Assessments"
          subtitle="Define, manage, and track school-level examinations, quizzes, and competitions."
          actions={
            <div className="flex items-center gap-3">
              <button className="bg-white border border-dark-blue-grey/10 text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-dark-blue-grey/5 transition-all">
                <span className="material-symbols-outlined text-lg">
                  upload_file
                </span>
                Bulk Marks Upload
              </button>
              <button
                onClick={handleAddExam}
                className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95"
              >
                <span className="material-symbols-outlined text-sm">
                  add_circle
                </span>
                New Examination
              </button>
            </div>
          }
        />
      )}

      <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-dark-blue-grey/[0.01]">
        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: "Overall Academic Progress",
              value: "84.2%",
              trend: "+2.4% from last term",
              positive: true,
              icon: "trending_up",
            },
            {
              label: "Ongoing Assessments",
              value: "03",
              trend: "Next: Science Mock Test",
              icon: "pending_actions",
            },
            {
              label: "Average Attendance (Exams)",
              value: "98.8%",
              trend: "Target: 95%+",
              positive: true,
              icon: "event_available",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-dark-blue-grey/10 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-pale-lime/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
              <div className="flex justify-between items-start mb-4">
                <p className="text-dark-blue-grey/40 text-[10px] font-black uppercase tracking-widest relative z-10">
                  {stat.label}
                </p>
                <span className="material-symbols-outlined text-pale-lime relative z-10">
                  {stat.icon}
                </span>
              </div>
              <p className="text-3xl font-black text-dark-blue-grey mb-1 relative z-10">
                {stat.value}
              </p>
              <p
                className={cn(
                  "text-[10px] font-bold uppercase tracking-wider relative z-10",
                  stat.positive ? "text-emerald-600" : "text-dark-blue-grey/40",
                )}
              >
                {stat.trend}
              </p>
            </div>
          ))}
        </div>

        {/* Examinations List */}
        <div className="bg-white rounded-2xl border border-dark-blue-grey/10 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-dark-blue-grey/10 flex justify-between items-center">
            <h3 className="text-dark-blue-grey text-lg font-bold tracking-tight">
              Academic History & Schedule
            </h3>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded-lg bg-dark-blue-grey text-white text-[10px] font-black uppercase tracking-widest">
                All
              </button>
              <button className="px-3 py-1.5 rounded-lg hover:bg-dark-blue-grey/5 text-dark-blue-grey/40 text-[10px] font-black uppercase tracking-widest">
                Major Exams
              </button>
              <button className="px-3 py-1.5 rounded-lg hover:bg-dark-blue-grey/5 text-dark-blue-grey/40 text-[10px] font-black uppercase tracking-widest">
                Mock Tests
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-dark-blue-grey/[0.01] border-b border-dark-blue-grey/10">
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                    Title & Type
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                    Schedule
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                    Classes
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                    Status
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest text-center">
                    Avg. Mark
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-blue-grey/5">
                {exams.map((exam) => (
                  <tr
                    key={exam.id}
                    className="hover:bg-dark-blue-grey/[0.01] transition-colors group cursor-pointer"
                    onClick={() => navigate(`/examinations/${exam.id}`)}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-xl bg-dark-blue-grey/5 flex items-center justify-center text-dark-blue-grey/30 group-hover:bg-pale-lime group-hover:text-dark-blue-grey transition-all">
                          <span className="material-symbols-outlined">
                            {exam.type === "Quiz"
                              ? "quiz"
                              : exam.type === "Competition"
                                ? "trophy"
                                : "description"}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-dark-blue-grey group-hover:underline decoration-pale-lime underline-offset-4">
                            {exam.title}
                          </p>
                          <p className="text-[10px] font-black uppercase tracking-[0.1em] text-dark-blue-grey/40">
                            {exam.type}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-dark-blue-grey/60">
                        <span className="material-symbols-outlined text-sm">
                          calendar_today
                        </span>
                        <span className="text-xs font-medium">{exam.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {exam.classes.slice(0, 2).map((c, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-bold px-2 py-0.5 rounded bg-dark-blue-grey/5 text-dark-blue-grey/60 border border-dark-blue-grey/5"
                          >
                            {c}
                          </span>
                        ))}
                        {exam.classes.length > 2 && (
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-dark-blue-grey/5 text-dark-blue-grey/40">
                            +{exam.classes.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={cn(
                          "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border",
                          getStatusColor(exam.status),
                        )}
                      >
                        {exam.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {exam.avgScore ? (
                        <span className="text-sm font-black text-dark-blue-grey">
                          {exam.avgScore}%
                        </span>
                      ) : (
                        <span className="text-[10px] font-black text-dark-blue-grey/20 uppercase tracking-widest">
                          N/A
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-dark-blue-grey/30 hover:text-dark-blue-grey transition-colors">
                        <span className="material-symbols-outlined text-xl">
                          more_vert
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

```
### features/community/components/PostCard.tsx
```tsx
import { cn } from "../../../lib/utils";

interface PostCardProps {
  type: string;
  title: string;
  content: string;
  category: string;
  time: string;
  isNew?: boolean;
  status?: string;
  icon: string;
  isModerator?: boolean;
  author: {
    name: string;
    img: string;
    role: string;
  };
}

export const PostCard = ({
  type,
  title,
  content,
  category,
  time,
  isNew,
  status,
  icon,
  isModerator,
  author,
}: PostCardProps) => {
  const isSpecial = type === "Interschool";

  return (
    <article
      className={cn(
        "border border-dark-blue-grey/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow",
        isSpecial ? "bg-pale-lime/10" : "bg-white",
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-1">
          <span
            className={cn(
              "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border w-fit",
              isSpecial
                ? "bg-pale-lime/20 text-dark-blue-grey border-pale-lime/30"
                : "bg-dark-blue-grey/5 text-dark-blue-grey/60 border-dark-blue-grey/10",
            )}
          >
            {type}
          </span>
          <h2 className="text-lg font-bold text-dark-blue-grey mt-2 leading-tight">
            {title}
          </h2>
        </div>
        {isNew && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold bg-pale-lime text-dark-blue-grey uppercase">
            New
          </span>
        )}
        {status === "Alert" && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold bg-dark-blue-grey text-pale-lime uppercase">
            Alert
          </span>
        )}
        {status === "Ongoing" && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold bg-dark-blue-grey/5 text-dark-blue-grey/50 uppercase">
            Ongoing
          </span>
        )}
        {isModerator && (
          <button className="bg-red-500 text-white p-1 rounded-md hover:bg-red-600 transition-colors shadow-lg active:scale-95 flex items-center justify-center">
            <span className="material-symbols-outlined text-sm">delete</span>
          </button>
        )}
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div
          className="size-10 rounded-full bg-cover bg-center border border-dark-blue-grey/10"
          style={{ backgroundImage: `url("${author.img}")` }}
        ></div>
        <div>
          <p className="text-sm font-bold text-dark-blue-grey leading-tight">
            {author.name}
          </p>
          <p className="text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest leading-none mt-1">
            {author.role}
          </p>
        </div>
      </div>
      <p className="text-sm text-dark-blue-grey/70 leading-relaxed mb-4">
        {content}
      </p>
      <div
        className={cn(
          "flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t",
          isSpecial ? "border-pale-lime/20" : "border-dark-blue-grey/5",
        )}
      >
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-dark-blue-grey/40 text-base">
            {icon}
          </span>
          <span className="text-xs font-semibold text-dark-blue-grey">
            {category}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-dark-blue-grey/40 text-base">
            schedule
          </span>
          <span className="text-xs text-dark-blue-grey/50">{time}</span>
        </div>
        <div className="ml-auto">
          <button className="text-sm font-bold text-dark-blue-grey hover:text-dark-blue-grey/70 flex items-center gap-1 transition-colors">
            View Details{" "}
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

```
### features/community/components/CommunityFilters.tsx
```tsx
import { cn } from "../../../lib/utils";

const FilterGroup = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="text-xs font-bold text-dark-blue-grey/40 uppercase tracking-widest mb-4">
      {title}
    </h3>
    <div className="flex flex-col gap-3">{children}</div>
  </div>
);

const Checkbox = ({ label, checked }: { label: string; checked?: boolean }) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <div
      className={cn(
        "size-4 rounded border transition-colors flex items-center justify-center",
        checked
          ? "bg-dark-blue-grey border-dark-blue-grey"
          : "border-dark-blue-grey/20 bg-white group-hover:border-dark-blue-grey/40",
      )}
    >
      {checked && (
        <span className="material-symbols-outlined text-pale-lime text-[12px] font-bold">
          check
        </span>
      )}
    </div>
    <span className="text-sm text-dark-blue-grey/70 group-hover:text-dark-blue-grey transition-colors">
      {label}
    </span>
  </label>
);

const Toggle = ({ label, enabled }: { label: string; enabled?: boolean }) => (
  <div className="flex items-center justify-between p-3 rounded-lg bg-dark-blue-grey/5 border border-dark-blue-grey/10">
    <span className="text-sm font-medium text-dark-blue-grey/70">{label}</span>
    <button
      className={cn(
        "w-8 h-4 rounded-full relative transition-colors",
        enabled ? "bg-pale-lime" : "bg-dark-blue-grey/20",
      )}
    >
      <div
        className={cn(
          "absolute top-0.5 size-3 bg-white rounded-full transition-all",
          enabled ? "right-0.5" : "left-0.5",
        )}
      ></div>
    </button>
  </div>
);

export const CommunityFilters = () => {
  return (
    <aside className="w-80 border-l border-dark-blue-grey/10 bg-white p-6 overflow-y-auto hidden xl:block">
      <div className="space-y-8">
        <FilterGroup title="Program Type">
          <Checkbox label="Academic" checked />
          <Checkbox label="Athletics" checked />
          <Checkbox label="Arts & Culture" />
          <Checkbox label="Social Impact" />
        </FilterGroup>

        <div>
          <h3 className="text-xs font-bold text-dark-blue-grey/40 uppercase tracking-widest mb-4">
            Academic Level
          </h3>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1.5 rounded-lg bg-dark-blue-grey/5 text-xs font-medium text-dark-blue-grey/70 hover:bg-pale-lime/20 transition-colors">
              Junior High
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-pale-lime text-xs font-bold text-dark-blue-grey border border-dark-blue-grey/10">
              Senior High
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-dark-blue-grey/5 text-xs font-medium text-dark-blue-grey/70 hover:bg-pale-lime/20 transition-colors">
              Faculty Only
            </button>
          </div>
        </div>

        <FilterGroup title="Post Status">
          <Toggle label="Urgent Only" />
          <Toggle label="Verified Sources" enabled />
        </FilterGroup>

        <div className="pt-6 border-t border-dark-blue-grey/10">
          <button className="w-full py-2 text-xs font-bold text-dark-blue-grey/40 hover:text-dark-blue-grey uppercase tracking-wider text-center transition-colors">
            Reset Filters
          </button>
        </div>
      </div>
    </aside>
  );
};

```
### features/community/pages/CommunityPage.tsx
```tsx
import { useState } from "react";
import { PostCard } from "../components/PostCard";
import { CommunityFilters } from "../components/CommunityFilters";
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";

const Tab = ({ label, active }: { label: string; active?: boolean }) => (
  <a
    href="#"
    className={cn(
      "pb-4 px-1 text-sm transition-all",
      active
        ? "border-b-2 border-pale-lime text-dark-blue-grey font-semibold"
        : "text-dark-blue-grey/50 hover:text-dark-blue-grey",
    )}
  >
    {label}
  </a>
);

export const CommunityPage = () => {
  const [isModerator, setIsModerator] = useState(false);
  const [posts, setPosts] = useState([
    {
      type: "Interschool",
      title: "Registration Open: Regional STEM Olympiad 2024",
      author: {
        name: "Sunita Reddy",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
        role: "Program Coordinator",
      },
      content:
        "The annual Regional STEM Olympiad is now accepting registrations for Grade 10-12 students. This year's competition focuses on 'Sustainable Urban Engineering'.",
      category: "STEM Program",
      time: "2 hours ago",
      isNew: true,
      icon: "layers",
    },
    {
      type: "Our School",
      title: "School Gardening Project - Volunteer Update",
      author: {
        name: "Dr. Ananya Iyer",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        role: "Lead Teacher",
      },
      content:
        "Weekly maintenance schedule for the South Garden has been updated. Thanks to Grade 9 for their exceptional work during the Friday session.",
      category: "Sustainability",
      time: "5 hours ago",
      status: "Ongoing",
      icon: "eco",
    },
    {
      type: "Interschool",
      title: "District Sports League: Quarter-Final Results",
      author: {
        name: "Coach Rathore",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        role: "Head Coach",
      },
      content:
        "Northridge Academy has successfully qualified for the Basketball Quarter-Finals. The match against St. Jude's is scheduled for next Tuesday.",
      category: "Athletics",
      time: "Yesterday",
      status: "Alert",
      icon: "sports_basketball",
    },
  ]);

  const handleAddPost = () => {
    const newPost = {
      type: "Our School",
      title: "New Community Update",
      author: {
        name: "School Administration",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        role: "Admin",
      },
      content:
        "This is a new update posted to the community network. Stay tuned for more information regarding upcoming events.",
      category: "Announcement",
      time: "Just now",
      isNew: true,
      icon: "campaign",
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      <TopBar
        title="Community Network"
        subtitle="Official program updates and interschool network feed."
        actions={
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModerator(!isModerator)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all border",
                isModerator
                  ? "bg-dark-blue-grey text-pale-lime border-dark-blue-grey shadow-lg"
                  : "bg-white text-dark-blue-grey/40 border-dark-blue-grey/10 hover:bg-dark-blue-grey/5",
              )}
            >
              <span className="material-symbols-outlined text-sm">
                {isModerator ? "shield_person" : "shield"}
              </span>
              Moderation {isModerator ? "ON" : "OFF"}
            </button>
            <button
              onClick={handleAddPost}
              className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">add_box</span>
              New Update
            </button>
          </div>
        }
      />
      <header className="bg-white border-b border-dark-blue-grey/10 px-8 pt-6 shrink-0 flex justify-between items-center">
        <div className="flex gap-8">
          <Tab label="All" active />
          <Tab label="Our School" />
          <Tab label="Interschool" />
          <Tab label="From Us" />
        </div>
        {isModerator && (
          <div className="flex items-center gap-2 text-red-500 animate-pulse pb-4">
            <span className="material-symbols-outlined text-sm">warning</span>
            <span className="text-[10px] font-black uppercase tracking-widest">
              Admin Moderation Active
            </span>
          </div>
        )}
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-dark-blue-grey/[0.02]">
          {posts.map((post, i) => (
            <PostCard
              key={i}
              type={post.type}
              title={post.title}
              author={post.author}
              content={post.content}
              category={post.category}
              time={post.time}
              isNew={post.isNew}
              status={post.status}
              icon={post.icon}
              isModerator={isModerator}
            />
          ))}
        </div>
        <CommunityFilters />
      </div>
    </div>
  );
};

```
### features/communications/pages/CommunicationsHubPage.tsx
```tsx
import { useState } from "react";
import { TopBar } from "../../../components/Header";
import { cn } from "../../../lib/utils";
import { CommunicationsPage } from "./CommunicationsPage";
import { AnnouncementsPage } from "./AnnouncementsPage";

export const CommunicationsHubPage = () => {
  const [activeTab, setActiveTab] = useState<"messages" | "announcements">(
    "messages",
  );

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
      <div className="shrink-0">
        <TopBar
          title="Communication Hub"
          subtitle="Manage secure internal messaging and institution-wide announcements."
          actions={
            <div className="flex gap-3">
              <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm">
                <span className="material-symbols-outlined text-sm">
                  edit_square
                </span>
                Compose
              </button>
            </div>
          }
        />

        <div className="px-8 border-b border-dark-blue-grey/10 bg-white">
          <div className="flex gap-8">
            {[
              { id: "messages", label: "Direct Messages", icon: "chat_bubble" },
              {
                id: "announcements",
                label: "Official Announcements",
                icon: "campaign",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "flex items-center gap-2 pb-4 text-sm font-bold tracking-tight transition-all relative mt-4",
                  activeTab === tab.id
                    ? "text-dark-blue-grey"
                    : "text-dark-blue-grey/40 hover:text-dark-blue-grey",
                )}
              >
                <span className="material-symbols-outlined text-lg">
                  {tab.icon}
                </span>
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-pale-lime rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col">
        {activeTab === "messages" ? (
          <div className="flex-1 overflow-hidden">
            <CommunicationsPage isHubChild />
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <AnnouncementsPage isHubChild />
          </div>
        )}
      </div>
    </div>
  );
};

```
### features/communications/pages/CommunicationsPage.tsx
```tsx
import { cn } from "../../../lib/utils";
import { TopBar } from "../../../components/Header";

const MessageItem = ({
  sender,
  subject,
  preview,
  time,
  priority = "normal",
  unread = false,
  img,
}: {
  sender: string;
  subject: string;
  preview: string;
  time: string;
  priority?: "low" | "normal" | "important" | "urgent";
  unread?: boolean;
  img?: string;
}) => (
  <div
    className={cn(
      "p-4 rounded-xl border transition-all cursor-pointer group",
      unread
        ? "bg-white border-dark-blue-grey/20 shadow-md"
        : "bg-dark-blue-grey/[0.01] border-dark-blue-grey/5 hover:border-dark-blue-grey/20",
    )}
  >
    <div className="flex justify-between items-start mb-2">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "size-2 rounded-full",
            unread ? "bg-pale-lime" : "bg-transparent",
          )}
        ></div>
        <div
          className="size-8 rounded-full bg-cover bg-center border border-dark-blue-grey/10 shrink-0"
          style={{ backgroundImage: `url("${img}")` }}
        ></div>
        <span
          className={cn(
            "text-sm",
            unread
              ? "font-black text-dark-blue-grey"
              : "font-bold text-dark-blue-grey/60",
          )}
        >
          {sender}
        </span>
      </div>
      <span className="text-[10px] font-bold text-dark-blue-grey/30 uppercase tracking-widest">
        {time}
      </span>
    </div>
    <h4
      className={cn(
        "text-sm mb-1 group-hover:text-dark-blue-grey transition-colors",
        unread
          ? "font-bold text-dark-blue-grey"
          : "font-medium text-dark-blue-grey/60",
      )}
    >
      {subject}
    </h4>
    <p className="text-xs text-dark-blue-grey/40 line-clamp-1">{preview}</p>
    <div className="flex gap-2 mt-3">
      <span
        className={cn(
          "text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest border",
          priority === "urgent"
            ? "bg-red-500 text-white border-red-600"
            : priority === "important"
              ? "bg-dark-blue-grey text-pale-lime border-dark-blue-grey/10"
              : "bg-pale-lime/20 text-dark-blue-grey border-pale-lime/30",
        )}
      >
        {priority}
      </span>
    </div>
  </div>
);

export const CommunicationsPage = ({
  isHubChild,
}: {
  isHubChild?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex-1 flex flex-col overflow-hidden bg-white",
        !isHubChild && "h-screen",
      )}
    >
      {!isHubChild && (
        <TopBar
          title="Communications Hub"
          subtitle="Internal messaging system for staff, parents, and administrative coordination."
          actions={
            <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95">
              <span className="material-symbols-outlined text-sm">
                edit_square
              </span>
              New Message
            </button>
          }
        />
      )}

      <div className="flex-1 flex overflow-hidden">
        {/* Inbox Sidebar */}
        <aside className="w-80 border-r border-dark-blue-grey/10 flex flex-col bg-dark-blue-grey/[0.01]">
          <div className="p-4 border-b border-dark-blue-grey/10 bg-white">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-dark-blue-grey/30 text-sm">
                search
              </span>
              <input
                className="w-full bg-dark-blue-grey/[0.03] border-none rounded-lg pl-9 pr-4 py-2 text-xs focus:ring-2 focus:ring-pale-lime text-dark-blue-grey placeholder-dark-blue-grey/30"
                placeholder="Search messages..."
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            <MessageItem
              sender="Sunita Reddy (Registrar)"
              subject="Urgent: Missing Immunization Records"
              preview="Hello Dr. Iyer, we have 42 students in Grade 10-D who..."
              time="10:42 AM"
              priority="urgent"
              unread
              img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
            />
            <MessageItem
              sender="District Superintendent"
              subject="Budget Approval FY2025"
              preview="The preliminary budget for the next academic year has been..."
              time="09:15 AM"
              priority="important"
              unread
              img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
            />
            <MessageItem
              sender="Aditya Verma (Grade 10-B)"
              subject="Class Trip Proposal: Science Museum"
              preview="I've attached the itinerary and budget for our upcoming..."
              time="Yesterday"
              img="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
            />
            <MessageItem
              sender="Interschool Network"
              subject="System Maintenance: Oct 28"
              preview="Please be advised that the portal will be offline for..."
              time="Oct 20"
              priority="low"
              img="https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop"
            />
          </div>
        </aside>

        {/* Message Content Area */}
        <main className="flex-1 flex flex-col bg-white">
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
            <div className="bg-dark-blue-grey/[0.03] size-24 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-4xl text-dark-blue-grey/20">
                forward_to_inbox
              </span>
            </div>
            <h3 className="text-lg font-bold text-dark-blue-grey mb-2">
              Select a message to read
            </h3>
            <p className="text-sm text-dark-blue-grey/40 max-w-xs leading-relaxed">
              Manage school-wide broadcasts, internal staff memos, and
              parent-teacher communications from one central hub.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

```
### features/communications/pages/AnnouncementsPage.tsx
```tsx
import { useState } from "react";
import { TopBar } from "../../../components/Header";
import { cn } from "../../../lib/utils";

export const AnnouncementsPage = ({ isHubChild }: { isHubChild?: boolean }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const announcements = [
    {
      id: "ANN-2024-001",
      title: "Quarterly Parent-Teacher Meeting",
      content:
        "The quarterly PTM is scheduled for next Friday. All parents are requested to attend to discuss terminal results.",
      visibility: "Parents",
      target: "All Grades",
      date: "Oct 24, 2024",
      status: "Delivered",
      engagement: "84%",
    },
    {
      id: "ANN-2024-002",
      title: "New Science Lab Safety Protocols",
      content:
        "Important updates to lab safety procedures. Mandatory review for all science faculty and students.",
      visibility: "Teachers, Students",
      target: "Science Dept",
      date: "Oct 22, 2024",
      status: "Delivered",
      engagement: "92%",
    },
    {
      id: "ANN-2024-003",
      title: "Annual Sports Day Volunteer Signup",
      content:
        "Students interested in volunteering for the Annual Sports Day can now register via the portal.",
      visibility: "Students",
      target: "High School",
      date: "Oct 20, 2024",
      status: "Draft",
      engagement: "-",
    },
  ];

  return (
    <div
      className={cn(
        "flex-1 flex flex-col overflow-hidden bg-white",
        !isHubChild && "h-screen",
      )}
    >
      {!isHubChild && (
        <TopBar
          title="Announcements & Circulars"
          subtitle="Manage official school broadcasts and track engagement across roles."
          actions={
            <button className="bg-pale-lime text-dark-blue-grey px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm active:scale-95">
              <span className="material-symbols-outlined text-sm">
                campaign
              </span>
              Post Announcement
            </button>
          }
        />
      )}

      <div className="flex-1 overflow-y-auto p-8 bg-dark-blue-grey/[0.01] space-y-8">
        {/* Engagement Analytics Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              label: "Total Reach",
              value: "4,280",
              icon: "groups",
              color: "text-dark-blue-grey",
            },
            {
              label: "Avg. Engagement",
              value: "72%",
              icon: "visibility",
              color: "text-pale-lime",
            },
            {
              label: "Delivery Success",
              value: "99.9%",
              icon: "check_circle",
              color: "text-emerald-500",
            },
            {
              label: "Drafts",
              value: "04",
              icon: "edit_note",
              color: "text-dark-blue-grey/40",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl border border-dark-blue-grey/10 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="text-[10px] font-black text-dark-blue-grey/40 uppercase tracking-widest">
                  {stat.label}
                </p>
                <span
                  className={cn(
                    "material-symbols-outlined text-sm",
                    stat.color,
                  )}
                >
                  {stat.icon}
                </span>
              </div>
              <p className="text-2xl font-black text-dark-blue-grey">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Announcements List */}
        <div className="bg-white rounded-2xl border border-dark-blue-grey/10 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-dark-blue-grey/10 flex justify-between items-center">
            <div className="flex gap-4">
              {["all", "published", "drafts", "scheduled"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg transition-all",
                    activeFilter === filter
                      ? "bg-dark-blue-grey text-white"
                      : "text-dark-blue-grey/40 hover:bg-dark-blue-grey/5",
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-dark-blue-grey/[0.01] border-b border-dark-blue-grey/10">
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                    Title & Content
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                    Visibility
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                    Target
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest">
                    Engagement
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black text-dark-blue-grey/30 uppercase tracking-widest text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-blue-grey/5">
                {announcements.map((ann) => (
                  <tr
                    key={ann.id}
                    className="hover:bg-dark-blue-grey/[0.01] transition-colors group"
                  >
                    <td className="px-6 py-4 max-w-md">
                      <p className="text-sm font-bold text-dark-blue-grey mb-1">
                        {ann.title}
                      </p>
                      <p className="text-xs text-dark-blue-grey/50 line-clamp-1">
                        {ann.content}
                      </p>
                      <p className="text-[10px] font-medium text-dark-blue-grey/30 mt-2 italic">
                        {ann.date} • ID: {ann.id}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {ann.visibility.split(", ").map((v, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-black px-2 py-0.5 rounded bg-pale-lime/10 text-dark-blue-grey border border-pale-lime/20 uppercase tracking-widest"
                          >
                            {v}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-bold text-dark-blue-grey/60">
                      {ann.target}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-dark-blue-grey/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-pale-lime"
                            style={{
                              width:
                                ann.engagement === "-" ? "0%" : ann.engagement,
                            }}
                          ></div>
                        </div>
                        <span className="text-[10px] font-black text-dark-blue-grey/70">
                          {ann.engagement}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-dark-blue-grey/40 hover:text-dark-blue-grey transition-colors">
                        <span className="material-symbols-outlined text-xl">
                          analytics
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

```
### features/reports/pages/ReportsPage.tsx
```tsx
import { TopBar } from "../../../components/Header";

export const ReportsPage = () => {
  const engagementTags = [
    {
      label: "#STEM_ACADEMY",
      students: 782,
      progress: 85,
      color: "bg-pale-lime",
    },
    {
      label: "#ATHLETICS_DEPT",
      students: 540,
      progress: 65,
      color: "bg-pale-lime/60",
    },
    {
      label: "#COUNSELING_WELLNESS",
      students: 412,
      progress: 45,
      color: "bg-pale-lime/40",
    },
    {
      label: "#FINE_ARTS",
      students: 320,
      progress: 38,
      color: "bg-pale-lime/30",
    },
    {
      label: "#COMMUNITY_SERVICE",
      students: 195,
      progress: 22,
      color: "bg-pale-lime/20",
    },
  ];

  const outcomes = [
    {
      name: "Annual Science Fair",
      id: "4039",
      date: "Mar 12, 2024",
      attendance: "94%",
      status: "Exceeded Target",
      statusColor: "text-emerald-500",
      icon: "event",
    },
    {
      name: "Parent Counseling Seminar",
      id: "3982",
      date: "Mar 08, 2024",
      attendance: "62%",
      status: "Below Target",
      statusColor: "text-red-500",
      icon: "groups_2",
    },
    {
      name: "Regional Track Finals",
      id: "3845",
      date: "Feb 28, 2024",
      attendance: "100%",
      status: "Target Met",
      statusColor: "text-emerald-500",
      icon: "sports_soccer",
    },
    {
      name: "Literacy Workshop",
      id: "3711",
      date: "Feb 22, 2024",
      attendance: "88%",
      status: "Exceeded Target",
      statusColor: "text-emerald-500",
      icon: "menu_book",
    },
  ];

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
      <TopBar
        title="Reports & Insights"
        subtitle="Systematic data review of student participation and program efficacy."
        actions={
          <>
            <button className="flex items-center justify-center rounded-lg h-10 px-5 bg-white border border-dark-blue-grey/10 text-dark-blue-grey text-sm font-bold shadow-sm hover:bg-dark-blue-grey/5 transition-all">
              <span className="material-symbols-outlined text-lg mr-2">
                download
              </span>
              <span>Export Data</span>
            </button>
            <button className="flex items-center justify-center rounded-lg h-10 px-5 bg-pale-lime text-dark-blue-grey text-sm font-bold shadow-sm hover:opacity-90 transition-all">
              <span className="material-symbols-outlined text-lg mr-2">
                picture_as_pdf
              </span>
              <span>Generate Institutional PDF</span>
            </button>
          </>
        }
      />
      <div className="flex-1 overflow-y-auto px-8 py-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Toolbar / Filters */}
          <div className="bg-white border border-dark-blue-grey/10 rounded-xl p-3 flex justify-between items-center shadow-sm">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-dark-blue-grey/[0.03] rounded-lg border border-dark-blue-grey/10 text-dark-blue-grey/70 text-sm font-medium hover:bg-dark-blue-grey/5 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  calendar_month
                </span>
                <span>Last 30 Days</span>
                <span className="material-symbols-outlined text-lg">
                  expand_more
                </span>
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-dark-blue-grey/[0.03] rounded-lg border border-dark-blue-grey/10 text-dark-blue-grey/70 text-sm font-medium hover:bg-dark-blue-grey/5 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  school
                </span>
                <span>All Grade Levels</span>
                <span className="material-symbols-outlined text-lg">
                  expand_more
                </span>
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-dark-blue-grey/[0.03] rounded-lg border border-dark-blue-grey/10 text-dark-blue-grey/70 text-sm font-medium hover:bg-dark-blue-grey/5 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  filter_list
                </span>
                <span>More Filters</span>
              </button>
            </div>
            <div className="text-dark-blue-grey/40 text-[10px] font-bold uppercase tracking-widest italic pr-2">
              Data refreshed 4 minutes ago
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-white border border-dark-blue-grey/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pale-lime/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
              <p className="text-dark-blue-grey/40 text-[10px] font-black uppercase tracking-widest">
                Total Participation
              </p>
              <div className="flex items-baseline justify-between relative z-10">
                <p className="text-dark-blue-grey text-3xl font-black">1,284</p>
                <span className="text-emerald-500 text-sm font-black flex items-center">
                  <span className="material-symbols-outlined text-sm">
                    arrow_upward
                  </span>
                  12%
                </span>
              </div>
              <p className="text-dark-blue-grey/40 text-[11px] font-medium">
                Students active in at least one program
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-white border border-dark-blue-grey/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pale-lime/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
              <p className="text-dark-blue-grey/40 text-[10px] font-black uppercase tracking-widest">
                Engagement Score
              </p>
              <div className="flex items-baseline justify-between relative z-10">
                <p className="text-dark-blue-grey text-3xl font-black">
                  4.2
                  <span className="text-dark-blue-grey/30 text-lg font-normal">
                    /5
                  </span>
                </p>
                <span className="text-red-500 text-sm font-black flex items-center">
                  <span className="material-symbols-outlined text-sm">
                    arrow_downward
                  </span>
                  2%
                </span>
              </div>
              <p className="text-dark-blue-grey/40 text-[11px] font-medium">
                Average student response rate
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-2xl p-6 bg-white border border-dark-blue-grey/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pale-lime/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
              <p className="text-dark-blue-grey/40 text-[10px] font-black uppercase tracking-widest">
                Target Completion
              </p>
              <div className="flex items-baseline justify-between relative z-10">
                <p className="text-dark-blue-grey text-3xl font-black">85%</p>
                <span className="text-emerald-500 text-sm font-black flex items-center">
                  <span className="material-symbols-outlined text-sm">
                    arrow_upward
                  </span>
                  5%
                </span>
              </div>
              <p className="text-dark-blue-grey/40 text-[11px] font-medium">
                School-wide administrative goals
              </p>
            </div>
          </div>

          {/* Main Charts & Data Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-dark-blue-grey/10 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-dark-blue-grey text-sm font-black uppercase tracking-widest">
                  Participation by Tag
                </h3>
                <span
                  className="material-symbols-outlined text-dark-blue-grey/20 cursor-help"
                  title="Hover for details"
                >
                  info
                </span>
              </div>
              <div className="space-y-6">
                {engagementTags.map((tag, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-[11px] font-black uppercase tracking-tighter text-dark-blue-grey/50">
                      <span>{tag.label}</span>
                      <span>{tag.students} Students</span>
                    </div>
                    <div className="h-3 bg-dark-blue-grey/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${tag.color} rounded-full transition-all duration-700`}
                        style={{ width: `${tag.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-dark-blue-grey/10 shadow-sm flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-dark-blue-grey text-sm font-black uppercase tracking-widest">
                  Recent Program Outcomes
                </h3>
                <button className="text-dark-blue-grey text-xs font-bold hover:underline">
                  View All
                </button>
              </div>
              <div className="flex-1 space-y-4">
                {outcomes.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-xl border border-dark-blue-grey/5 bg-dark-blue-grey/[0.01] hover:bg-dark-blue-grey/[0.03] transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="size-10 bg-white border border-dark-blue-grey/10 rounded-lg flex items-center justify-center shadow-sm group-hover:border-pale-lime transition-colors">
                        <span className="material-symbols-outlined text-dark-blue-grey/40 text-xl group-hover:text-dark-blue-grey transition-colors">
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-dark-blue-grey">
                          {item.name}
                        </p>
                        <p className="text-[10px] font-medium text-dark-blue-grey/40">
                          {item.date} • ID: {item.id}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-dark-blue-grey">
                        {item.attendance} Attendance
                      </p>
                      <p
                        className={`text-[10px] font-black uppercase tracking-wider ${item.statusColor}`}
                      >
                        {item.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Principal's Insight Summary */}
          <div className="bg-dark-blue-grey text-white rounded-2xl border-l-[6px] border-pale-lime p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <span className="material-symbols-outlined text-8xl">
                analytics
              </span>
            </div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="bg-pale-lime text-dark-blue-grey p-3 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined font-bold">
                  lightbulb
                </span>
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-pale-lime mb-2">
                  Principal's Insight Summary
                </h4>
                <p className="text-sm text-white/80 leading-relaxed font-medium">
                  Participation in STEM initiatives has grown by{" "}
                  <span className="text-pale-lime font-bold">12%</span> since
                  the previous reporting cycle. However, engagement in
                  "Counseling Wellness" sessions remains below institutional
                  targets. Recommend cross-referencing attendance records with
                  academic performance metrics for the Grade 10 cohort to
                  identify potential intervention requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

```
