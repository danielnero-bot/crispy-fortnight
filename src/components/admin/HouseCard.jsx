import {
  BedDouble,
  CheckCircle2,
  Clock3,
  Users,
} from "lucide-react";

const houseStyles = {
  Faith: {
    icon: "bg-blue-50 text-blue-700",
  },
  Hope: {
    icon: "bg-emerald-50 text-emerald-700",
  },
  Charity: {
    icon: "bg-amber-50 text-amber-700",
  },
};

export default function HouseCard({
  name,
  occupied,
  capacity,
  housemistress,
  status,
  note,
}) {
  const percentage = (occupied / capacity) * 100;
  const style = houseStyles[name] || houseStyles.Faith;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg ${style.icon}`}
          >
            <BedDouble size={18} />
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800">
              {name} House
            </h3>

            <p className="text-xs text-slate-400">
              {housemistress}
            </p>
          </div>
        </div>

        <span className="text-sm font-bold text-[#0b1f3a]">
          {occupied}/{capacity}
        </span>
      </div>

      {/* Progress */}
      <div className="mt-4">
        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-[#0b1f3a]"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs text-slate-400">
            <Users size={12} />
            {percentage.toFixed(1)}% occupied
          </span>

          <span className="text-xs text-slate-400">
            Capacity {capacity}
          </span>
        </div>
      </div>

      {/* Status */}
      <div className="mt-4 flex items-start gap-2 border-t border-slate-100 pt-3">
        {status === "All clear" ? (
          <CheckCircle2
            size={15}
            className="mt-0.5 shrink-0 text-emerald-600"
          />
        ) : (
          <Clock3
            size={15}
            className="mt-0.5 shrink-0 text-amber-600"
          />
        )}

        <div>
          <p className="text-xs font-semibold text-slate-700">
            {status}
          </p>

          <p className="mt-0.5 text-xs text-slate-400">
            {note}
          </p>
        </div>
      </div>
    </div>
  );
}