import { Routes, Route, Navigate } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { DashboardPage } from "./features/dashboard/pages/DashboardPage";
import { CommunityPage } from "./features/community/pages/CommunityPage";
import { StudentProfilePage } from "./features/students/pages/StudentProfilePage";
import { ClassesPage } from "./features/classes/pages/ClassesPage";
import { ClassDetailsPage } from "./features/classes/pages/ClassDetailsPage";
import { ReportsPage } from "./features/reports/pages/ReportsPage";
import { CalendarPage } from "./features/calendar/pages/CalendarPage";
import { ExamDetailsPage } from "./features/examinations/pages/ExamDetailsPage";

import { AcademicHubPage } from "./features/academics/pages/AcademicHubPage";
import { DirectoryPage } from "./features/directory/pages/DirectoryPage";
import { CommunicationsHubPage } from "./features/communications/pages/CommunicationsHubPage";
import { TransportationHubPage } from "./features/transportation/pages/TransportationHubPage";
import { StaffProfilePage } from "./features/settings/pages/StaffProfilePage";
import { DriverProfilePage } from "./features/transportation/pages/DriverProfilePage";
import { FeesPage } from "./features/finance/pages/FeesPage";

function App() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans h-screen flex overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex overflow-hidden">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/classes/:id" element={<ClassDetailsPage />} />
          <Route path="/students/:id" element={<StudentProfilePage />} />
          <Route path="/academics" element={<AcademicHubPage />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route path="/communications" element={<CommunicationsHubPage />} />
          <Route path="/transportation" element={<TransportationHubPage />} />
          <Route path="/finance" element={<FeesPage />} />
          <Route path="/staff/:id" element={<StaffProfilePage />} />
          <Route path="/drivers/:id" element={<DriverProfilePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/examinations/:id" element={<ExamDetailsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
