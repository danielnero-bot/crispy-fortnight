import {
  CalendarCheck,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";

import BenchmarkCard from "./Benchmark";

export default function AcademicBenchmark({ benchmarks = [], attendance }) {
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
              {attendance?.attendance_percent ?? "-"}%
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
              {attendance?.ca_assessment_percent ?? "-"}%
            </p>
          </div>

          <span className="ml-auto text-xs font-semibold text-blue-600">
            Synced
          </span>
        </div>
      </div>

      {/* Faculty cards */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {benchmarks.length === 0 ? <p className="text-sm text-slate-500">No academic benchmarks recorded.</p> : benchmarks.map((benchmark) => <BenchmarkCard
          key={benchmark.id}
          faculty={benchmark.faculty}
          className={benchmark.class_name}
          score={Number(benchmark.score)}
          target={Number(benchmark.target)}
          icon={benchmark.icon}
          description={benchmark.description}
          highlight={benchmark.highlight}
        />)}
      </div>
    </section>
  );
}