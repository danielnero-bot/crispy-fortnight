import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  GraduationCap,
  BedDouble,
  Wallet,
  X,
} from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Admissions",
    path: "/admin/admissions",
    icon: UserPlus,
  },
  {
    label: "Students",
    path: "/admin/students",
    icon: Users,
  },
  {
    label: "Academics",
    path: "/admin/academics",
    icon: GraduationCap,
  },
  {
    label: "Boarding",
    path: "/admin/boarding",
    icon: BedDouble,
  },
  {
    label: "Fees & Bursary",
    path: "/admin/fees",
    icon: Wallet,
  },
];

export default function Sidebar({ isOpen, onClose }) {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-72 flex-col
          border-r border-slate-200 bg-white
          transition-transform duration-300
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b1f3a] text-white">
              <span className="font-serif text-lg font-bold">AC</span>
            </div>

            <div>
              <h1 className="font-serif text-lg font-bold text-[#0b1f3a]">
                ACMGS
              </h1>
              <p className="text-xs text-slate-500">Portal</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Session */}
        <div className="mx-4 mt-5 rounded-xl bg-slate-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Current Session
          </p>

          <p className="mt-1 font-semibold text-[#0b1f3a]">
            {currentYear} / {nextYear}
          </p>

          <p className="mt-1 text-xs text-slate-500">Current term</p>
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex-1 overflow-y-auto px-4">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Administration
          </p>

          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  end={item.path === "/admin"}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-3 rounded-xl px-3 py-3
                    text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-[#0b1f3a] text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-100 hover:text-[#0b1f3a]"
                    }
                    `
                  }
                >
                  <Icon size={19} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-200 p-5">
          <p className="text-xs font-medium text-slate-500">Diocese of Evo</p>

          <p className="mt-1 text-xs text-slate-400">
            ACMGS Administrative Portal
          </p>
        </div>
      </aside>
    </>
  );
}
