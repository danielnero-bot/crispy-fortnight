import { ArrowUpRight, Home } from "lucide-react";
import HouseCard from "./HouseCard";

const houses = [
  {
    name: "Faith",
    occupied: 210,
    capacity: 215,
    housemistress: "Mrs D. Lawson",
    status: "All clear",
    note: "Preparation scheduled for 19:30",
  },
  {
    name: "Hope",
    occupied: 218,
    capacity: 220,
    housemistress: "Mrs E. Jumbo",
    status: "2 students under rest",
    note: "Pastoral monitoring in progress",
  },
  {
    name: "Charity",
    occupied: 214,
    capacity: 215,
    housemistress: "Mrs R. Wilcox",
    status: "All clear",
    note: "100% evening devotions",
  },
];

export default function HouseSystemStatus() {
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
        {houses.map((house) => (
          <HouseCard
            key={house.name}
            {...house}
          />
        ))}
      </div>
    </section>
  );
}