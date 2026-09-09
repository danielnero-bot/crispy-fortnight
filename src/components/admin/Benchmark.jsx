import {
  FlaskConical,
  BookOpen,
  Calculator,
  TrendingUp,
} from "lucide-react";

const icons = {
  science: FlaskConical,
  arts: BookOpen,
  commercial: Calculator,
};

export default function BenchmarkCard({
  faculty,
  className,
  score,
  target,
  description,
  highlight,
  icon,
}) {
  const Icon = icons[icon] || TrendingUp;

  const percentage = Math.min((score / target) * 100, 100);
  const gap = target - score;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-[#0b1f3a]">
            <Icon size={19} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800">
              {faculty}
            </h3>

            <p className="mt-0.5 text-xs text-slate-400">
              {className}
            </p>
          </div>
        </div>

        <span className="text-lg font-bold text-[#0b1f3a]">
          {score}%
        </span>
      </div>

      {/* Progress */}
      <div className="mt-5">
        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-[#0b1f3a] transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="mt-2 flex justify-between text-xs">
          <span className="text-slate-400">
            Current performance
          </span>

          <span className="font-medium text-slate-500">
            Target {target}%
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-xs leading-5 text-slate-500">
        {description}
      </p>

      {/* Highlight */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="text-xs font-medium text-slate-500">
          {highlight}
        </span>

        {gap > 0 ? (
          <span className="text-xs font-semibold text-amber-600">
            {gap.toFixed(1)}% to target
          </span>
        ) : (
          <span className="text-xs font-semibold text-emerald-600">
            Target achieved
          </span>
        )}
      </div>
    </div>
  );
}