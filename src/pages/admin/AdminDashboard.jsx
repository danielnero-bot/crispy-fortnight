import { useState } from "react";
import {
  ArrowRight,
  BellRing,
  ClipboardCheck,
  FileText,
  Plus,
  Users,
} from "lucide-react";

import Sidebar from "../../components/admin/Sidebar";
import TopHeader from "../../components/admin/TopHeader";
import WelcomeHeader from "../../components/admin/WelcomeHeader";
import StatCards from "../../components/admin/StatsCards";
import AdmissionsTable from "../../components/admin/AdmissionsTable";
import AcademicBenchmark from "../../components/admin/AcademicBenchmark";
import HouseSystemStatus from "../../components/admin/HouseSystemStatus";
import AcademicDiary from "../../components/admin/AcademicDiary";
import SecurityAuditCard from "../../components/admin/SecurityAuditCard";

const quickActions = [
  { label: "Add Student", icon: Plus, tone: "bg-[#0b1f3a] text-white" },
  {
    label: "Review Admission",
    icon: ClipboardCheck,
    tone: "bg-sky-50 text-sky-700",
  },
  { label: "Issue Report", icon: FileText, tone: "bg-amber-50 text-amber-700" },
  {
    label: "View Attendance",
    icon: Users,
    tone: "bg-emerald-50 text-emerald-700",
  },
];

const priorityAlerts = [
  "26 application dossiers need document verification.",
  "3 fee payment follow-ups are overdue this week.",
  "2 classes are below the expected attendance threshold.",
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <TopHeader onMenuClick={() => setSidebarOpen(true)} />

      <main className="pt-20 lg:pl-72">
        <div className="p-4 sm:p-6 lg:p-8">
          <WelcomeHeader />

          <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Quick actions
                </p>
                <h2 className="mt-2 font-serif text-xl font-bold text-[#0b1f3a]">
                  Manage the school day efficiently
                </h2>
              </div>

              <button className="inline-flex items-center gap-2 self-start rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-[#0b1f3a] transition hover:bg-slate-50">
                Open staff inbox
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {quickActions.map(({ label, icon: Icon, tone }) => (
                <button
                  key={label}
                  type="button"
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-slate-300 hover:bg-white"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-700">
                      {label}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">Action needed</p>
                  </div>
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${tone}`}
                  >
                    <Icon size={18} />
                  </span>
                </button>
              ))}
            </div>
          </section>

          <div className="mb-6 grid gap-6 xl:grid-cols-[1.8fr_1fr]">
            <StatCards />

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                  <BellRing size={18} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0b1f3a]">
                    Priority alerts
                  </h3>
                  <p className="text-xs text-slate-400">
                    Needs attention today
                  </p>
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {priorityAlerts.map((alert) => (
                  <li
                    key={alert}
                    className="flex gap-3 rounded-xl bg-slate-50 p-3 text-sm text-slate-600"
                  >
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500" />
                    <span>{alert}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-6">
            <AdmissionsTable />
          </div>
          <AcademicBenchmark />

          <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <AcademicDiary />
            <SecurityAuditCard />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-1">
            <HouseSystemStatus />
          </div>
        </div>
      </main>
    </div>
  );
}
