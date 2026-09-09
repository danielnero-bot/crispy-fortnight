import {
  CalendarCheck,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";

import BenchmarkCard from "./Benchmark";

export default function AcademicBenchmark() {
  return (
    <section className="mt-6">
      {/* Section header */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Academic Performance
          </p>

          <h2 className="mt-1 font-serif text-xl font-bold text-[#0b1f3a]">
            Senior School Academic Benchmark
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            WAEC & Mock Examination Readiness
          </p>
        </div>

        <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0b1f3a] hover:underline">
          View academic report
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Overview metrics */}
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <CalendarCheck size={19} />
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Attendance
            </p>

            <p className="mt-1 text-xl font-bold text-slate-800">
              99.1%
            </p>
          </div>

          <span className="ml-auto text-xs font-semibold text-emerald-600">
            Excellent
          </span>
        </div>

        <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <ClipboardCheck size={19} />
          </div>

          <div>
            <p className="text-xs text-slate-400">
              CA Assessment
            </p>

            <p className="mt-1 text-xl font-bold text-slate-800">
              96.0%
            </p>
          </div>

          <span className="ml-auto text-xs font-semibold text-blue-600">
            Synced
          </span>
        </div>
      </div>

      {/* Faculty cards */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <BenchmarkCard
          faculty="Science Stream"
          className="SSS 3"
          score={81.4}
          target={85}
          icon="science"
          description="Science performance is being driven primarily by strong Mathematics and Further Mathematics results."
          highlight="Math & Further Math leading"
        />

        <BenchmarkCard
          faculty="Arts & Humanities"
          className="Senior School"
          score={86.2}
          target={85}
          icon="arts"
          description="Strong overall performance, with Literature recording a particularly high distinction rate."
          highlight="Literature: 94% distinction"
        />

        <BenchmarkCard
          faculty="Commercial Faculty"
          className="Senior School"
          score={78.9}
          target={85}
          icon="commercial"
          description="Performance remains below the benchmark, with focused remediation clinics scheduled."
          highlight="Accounting remediation scheduled"
        />
      </div>
    </section>
  );
}