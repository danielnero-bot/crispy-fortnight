import { ArrowUpRight, CheckCheck, FileSearch, UsersRound } from "lucide-react";
import AdminShell from "./AdminShell";

const summaryCards = [
  {
    label: "Applications this week",
    value: "142",
    tone: "bg-sky-50 text-sky-700",
  },
  {
    label: "Admissions approved",
    value: "58",
    tone: "bg-emerald-50 text-emerald-700",
  },
  {
    label: "Awaiting documents",
    value: "26",
    tone: "bg-amber-50 text-amber-700",
  },
  {
    label: "Interviews booked",
    value: "37",
    tone: "bg-violet-50 text-violet-700",
  },
];

const applicants = [
  { name: "Chioma Joy Adeleke", status: "Interview pending", track: "JSS 1" },
  { name: "Somtochukwu Amadi", status: "Docs verified", track: "SSS 1" },
  { name: "Blessing N. Pepple", status: "Transcript query", track: "Transfer" },
  { name: "Ebere Dike", status: "Ready for approval", track: "JSS 2" },
];

export default function AdmissionsManagementPage() {
  return (
    <AdminShell
      title="Admissions Management"
      subtitle="Track applications, interviews, enrollment readiness, and approval flow."
      actions={
        <button className="rounded-lg bg-[#0b1f3a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#16345d]">
          New shortlist
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
              <UsersRound size={18} />
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
              Application pipeline
            </h2>
            <p className="text-sm text-slate-500">
              Current admission review stages
            </p>
          </div>
          <button className="inline-flex items-center gap-2 text-xs font-semibold text-[#0b1f3a]">
            View all <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="space-y-3">
          {applicants.map((applicant) => (
            <div
              key={applicant.name}
              className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-[#0b1f3a]">
                  {applicant.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-slate-800">
                    {applicant.name}
                  </p>
                  <p className="text-xs text-slate-400">{applicant.track}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-6">
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                  {applicant.status}
                </span>
                <button className="inline-flex items-center gap-2 text-xs font-semibold text-[#0b1f3a]">
                  <FileSearch size={14} />
                  Review
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AdminShell>
  );
}
