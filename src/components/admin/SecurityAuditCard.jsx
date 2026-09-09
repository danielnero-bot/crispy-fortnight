import { ShieldCheck, ShieldAlert, ArrowUpRight } from "lucide-react";

const checks = [
  { label: "Visitor log", value: "98% complete", tone: "text-emerald-600" },
  { label: "Gate compliance", value: "2 issues", tone: "text-amber-600" },
  { label: "Incident register", value: "Up to date", tone: "text-sky-600" },
];

export default function SecurityAuditCard() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
            <ShieldCheck size={18} />
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold text-[#0b1f3a]">Security audit</h2>
            <p className="text-xs text-slate-400">Campus safety and compliance</p>
          </div>
        </div>

        <button className="inline-flex items-center gap-1 text-xs font-semibold text-[#0b1f3a]">
          Review <ArrowUpRight size={13} />
        </button>
      </div>

      <div className="mt-5 space-y-3">
        {checks.map((check) => (
          <div key={check.label} className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-emerald-700">
                <ShieldAlert size={15} />
              </span>
              <span className="text-sm font-medium text-slate-700">{check.label}</span>
            </div>
            <span className={`text-xs font-semibold ${check.tone}`}>{check.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
