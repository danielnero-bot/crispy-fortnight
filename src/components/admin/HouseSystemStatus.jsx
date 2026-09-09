import { ArrowUpRight, Home } from "lucide-react";
import HouseCard from "./HouseCard";

export default function HouseSystemStatus({ houses = [] }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[#0b1f3a]">
            <Home size={19} />
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-[#0b1f3a]">
              House System Status
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Boarding and pastoral overview
            </p>
          </div>
        </div>

        <button className="hidden items-center gap-1 text-xs font-semibold text-[#0b1f3a] sm:flex">
          Manage houses
          <ArrowUpRight size={13} />
        </button>
      </div>

      {/* Houses */}
      <div className="mt-4 space-y-3">
        {houses.length === 0 ? <p className="text-sm text-slate-500">No boarding houses configured.</p> : houses.map((house) => (
          <HouseCard
            key={house.name}
            {...house}
          />
        ))}
      </div>
    </section>
  );
}