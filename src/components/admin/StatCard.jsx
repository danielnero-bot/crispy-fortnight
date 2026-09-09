import {
  Users,
  UserPlus,
  BedDouble,
  Wallet,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
} from "lucide-react";

const icons = {
  users: Users,
  admissions: UserPlus,
  boarding: BedDouble,
  bursary: Wallet,
};

export default function StatCard({
  title,
  value,
  description,
  icon,
  trend,
  trendLabel,
  children,
}) {
  const Icon = icons[icon] || Users;

  const isPositive = trend?.direction !== "down";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Top */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold tracking-tight text-[#0b1f3a]">
            {value}
          </h3>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-[#0b1f3a]">
          <Icon size={21} />
        </div>
      </div>

      {/* Trend */}
      {trend && (
        <div className="mt-4 flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1 text-xs font-semibold ${
              isPositive ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {isPositive ? (
              <TrendingUp size={14} />
            ) : (
              <TrendingDown size={14} />
            )}

            {trend.value}
          </span>

          {trendLabel && (
            <span className="text-xs text-slate-400">
              {trendLabel}
            </span>
          )}
        </div>
      )}

      {/* Additional information */}
      {description && (
        <p className="mt-3 text-xs text-slate-500">
          {description}
        </p>
      )}

      {children}
    </div>
  );
}