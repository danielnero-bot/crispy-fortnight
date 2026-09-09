import { Activity, ArrowUpRight } from "lucide-react";
import LogItem from "./LogItem";

export default function AdministrativeLog({ logs = [] }) {
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
        {logs.length === 0 ? (
          <p className="py-6 text-sm text-slate-500">No recent activity.</p>
        ) : logs.map((log) => (
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