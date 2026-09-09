import { Activity, ArrowUpRight } from "lucide-react";
import LogItem from "./LogItem";

const logs = [
  {
    type: "endowment",
    title: "Diocesan Endowment Disbursement Confirmed",
    time: "18m ago",
    description:
      "Funds have been confirmed for the science laboratory upgrade.",
    amount: "₦12.5M science lab upgrade",
  },
  {
    type: "dormitory",
    title: "Pastoral Dormitory Report Submitted",
    time: "1h 10m",
    description:
      "Latest boarding and pastoral dormitory report submitted successfully.",
    amount: "All clear",
  },
  {
    type: "assessment",
    title: "Continuous Assessment Roster Published",
    time: "3h ago",
    description:
      "Assessment dates and class rosters have been deployed to the academic system.",
    amount: "Assessment dates deployed",
  },
];

export default function AdministrativeLog() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[#0b1f3a]">
            <Activity size={19} />
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-[#0b1f3a]">
              Real-Time Administrative Log
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Recent activity across the school administration
            </p>
          </div>
        </div>

        <button className="hidden items-center gap-1 text-xs font-semibold text-[#0b1f3a] sm:flex">
          View all
          <ArrowUpRight size={13} />
        </button>
      </div>

      {/* Activity */}
      <div className="mt-3">
        {logs.map((log) => (
          <LogItem
            key={log.title}
            type={log.type}
            title={log.title}
            time={log.time}
            description={log.description}
            amount={log.amount}
          />
        ))}
      </div>
    </section>
  );
}