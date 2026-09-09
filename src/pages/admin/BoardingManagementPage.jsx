import {
  ArrowUpRight,
  BedDouble,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";
import AdminShell from "./AdminShell";

const summaryCards = [
  { label: "Occupancy", value: "98.4%", tone: "bg-[#0b1f3a] text-white" },
  { label: "Houses active", value: "3", tone: "bg-sky-50 text-sky-700" },
  {
    label: "Pastoral check-ins",
    value: "94%",
    tone: "bg-emerald-50 text-emerald-700",
  },
  { label: "Rest requests", value: "2", tone: "bg-amber-50 text-amber-700" },
];

export default function BoardingManagementPage() {
  return (
    <AdminShell
      title="Boarding Management"
      subtitle="Monitor house occupancy, wellbeing, and dormitory support operations."
      actions={
        <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#0b1f3a] hover:bg-slate-50">
          View house notes
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
              {card.label.includes("Occupancy") ? (
                <BedDouble size={18} />
              ) : card.label.includes("Pastoral") ? (
                <ShieldCheck size={18} />
              ) : (
                <ClipboardList size={18} />
              )}
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
              House status
            </h2>
            <p className="text-sm text-slate-500">
              Current pastoral and residential position
            </p>
          </div>
          <button className="inline-flex items-center gap-2 text-xs font-semibold text-[#0b1f3a]">
            Manage houses <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="space-y-4">
          {[
            {
              name: "Faith House",
              details: "210 / 215 occupied",
              state: "All clear",
            },
            {
              name: "Hope House",
              details: "218 / 220 occupied",
              state: "2 students under rest",
            },
            {
              name: "Charity House",
              details: "214 / 215 occupied",
              state: "All clear",
            },
          ].map((house) => (
            <div
              key={house.name}
              className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="font-semibold text-slate-800">{house.name}</p>
                <p className="text-xs text-slate-400">{house.details}</p>
              </div>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                {house.state}
              </span>
            </div>
          ))}
        </div>
      </section>
    </AdminShell>
  );
}
