import { CheckCircle2 } from "lucide-react";
import StatCard from "./StatCard";

export default function StatCards() {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {/* Total Students */}
      <StatCard
        title="Total Enrolled Scholars"
        value="1,248"
        icon="users"
        trend={{
          value: "+4.2%",
          direction: "up",
        }}
        trendLabel="YoY"
      >
        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs text-slate-400">
              Junior Sec
            </p>
            <p className="mt-1 font-semibold text-slate-700">
              580
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Senior Sec
            </p>
            <p className="mt-1 font-semibold text-slate-700">
              668
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600">
          <CheckCircle2 size={14} />
          Enrollment verified
        </div>
      </StatCard>

      {/* Admissions */}
      <StatCard
        title="Pending Admissions"
        value="142"
        icon="admissions"
        description="2025 Intake"
      >
        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs text-slate-400">
              Entrance Tests
            </p>
            <p className="mt-1 font-semibold text-slate-700">
              94
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              Interview
            </p>
            <p className="mt-1 font-semibold text-slate-700">
              48
            </p>
          </div>
        </div>

        <p className="mt-3 text-xs font-medium text-amber-600">
          26 dossiers flagged
        </p>
      </StatCard>

      {/* Boarding */}
      <StatCard
        title="Boarding Occupancy"
        value="98.4%"
        icon="boarding"
        description="Current residential capacity"
      >
        <div className="mt-4 border-t border-slate-100 pt-4">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="text-slate-400">
              Capacity
            </span>

            <span className="font-semibold text-slate-700">
              655
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-[#0b1f3a]"
              style={{ width: "98.4%" }}
            />
          </div>
        </div>

        <div className="mt-3 flex justify-between text-xs text-slate-500">
          <span>Faith 210</span>
          <span>Hope 218</span>
          <span>Charity 214</span>
        </div>
      </StatCard>

      {/* Bursary */}
      <StatCard
        title="Bursary Liquidity"
        value="94.6%"
        icon="bursary"
        description="Financial position"
      >
        <div className="mt-4 border-t border-slate-100 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Cleared
            </span>

            <span className="text-sm font-semibold text-slate-700">
              ₦184.2M
            </span>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Scheduled
            </span>

            <span className="text-sm font-semibold text-slate-700">
              ₦194.7M
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600">
          <CheckCircle2 size={14} />
          Audited
        </div>
      </StatCard>
    </section>
  );
}