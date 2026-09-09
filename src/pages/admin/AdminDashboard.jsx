import { useState } from "react";

import Sidebar from "../../components/admin/Sidebar";
import TopHeader from "../../components/admin/TopHeader";
import WelcomeHeader from "../../components/admin/WelcomeHeader";
import StatCards from "../../components/admin/StatsCards";
import AdmissionsTable from "../../components/admin/AdmissionsTable";
import AcademicBenchmark from "../../components/admin/AcademicBenchmark";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <TopHeader onMenuClick={() => setSidebarOpen(true)} />

      <main className="pt-20 lg:pl-72">
        <div className="p-4 sm:p-6 lg:p-8">
          <WelcomeHeader />

          <StatCards />
          <div className="mt-6">
            <AdmissionsTable />
          </div>
          <AcademicBenchmark />
        </div>
      </main>
    </div>
  );
}
