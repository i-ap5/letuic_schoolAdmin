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
