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
