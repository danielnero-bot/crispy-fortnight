import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import TopHeader from "../../components/admin/TopHeader";

export default function AdminShell({ title, subtitle, actions, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <TopHeader onMenuClick={() => setSidebarOpen(true)} />

      <main className="pt-20 lg:pl-72">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                Administration
              </p>
              <h1 className="mt-2 font-serif text-3xl font-bold text-[#0b1f3a]">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
              )}
            </div>

            {actions && <div>{actions}</div>}
          </div>

          {children}
        </div>
      </main>
    </div>
  );
}
