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
