import {
  ArrowUpRight,
  GraduationCap,
  ShieldCheck,
  UserRoundCog,
} from "lucide-react";
import AdminShell from "./AdminShell";

const summaryCards = [
  { label: "Total students", value: "1,248", tone: "bg-[#0b1f3a] text-white" },
  { label: "Boarding", value: "655", tone: "bg-sky-50 text-sky-700" },
  {
    label: "Day scholars",
    value: "593",
    tone: "bg-emerald-50 text-emerald-700",
  },
  { label: "Attendance", value: "99.1%", tone: "bg-violet-50 text-violet-700" },
];

const studentList = [
  { name: "Ada Eze", className: "SSS 3A", status: "On track" },
  { name: "Mariam Bello", className: "SSS 2B", status: "Needs support" },
  { name: "Nneka Okafor", className: "JSS 3C", status: "Excellent" },
  { name: "Ify Nwosu", className: "SSS 1A", status: "On track" },
];

export default function StudentManagementPage() {
  return (
    <AdminShell
      title="Student Management"
      subtitle="Monitor class performance, pastoral care, and student wellbeing."
      actions={
        <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#0b1f3a] hover:bg-slate-50">
          Export roster
        </button>
      }
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div
              className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${card.tone}`}
            >
              <GraduationCap size={18} />
            </div>
            <p className="text-sm text-slate-500">{card.label}</p>
            <p className="mt-2 text-3xl font-bold text-[#0b1f3a]">
              {card.value}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-xl font-bold text-[#0b1f3a]">
              Student overview
            </h2>
            <p className="text-sm text-slate-500">
              Key class and support indicators
            </p>
          </div>
          <button className="inline-flex items-center gap-2 text-xs font-semibold text-[#0b1f3a]">
            Manage students <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center gap-3 text-[#0b1f3a]">
              <UserRoundCog size={18} />
              <span className="font-semibold">Pastoral records</span>
            </div>
            <p className="mt-3 text-2xl font-bold">93%</p>
            <p className="mt-1 text-xs text-slate-500">
              Monthly pastoral follow-up completion
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center gap-3 text-[#0b1f3a]">
              <ShieldCheck size={18} />
              <span className="font-semibold">Safeguarding</span>
            </div>
            <p className="mt-3 text-2xl font-bold">12</p>
            <p className="mt-1 text-xs text-slate-500">
              Open checks awaiting review
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center gap-3 text-[#0b1f3a]">
              <GraduationCap size={18} />
              <span className="font-semibold">Class trackers</span>
            </div>
            <p className="mt-3 text-2xl font-bold">22</p>
            <p className="mt-1 text-xs text-slate-500">
              Active performance reports
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {studentList.map((student) => (
            <div
              key={student.name}
              className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
            >
              <div>
                <p className="font-semibold text-slate-800">{student.name}</p>
                <p className="text-xs text-slate-400">{student.className}</p>
              </div>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                {student.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </AdminShell>
  );
}
