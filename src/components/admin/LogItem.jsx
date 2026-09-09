import {
  FlaskConical,
  BedDouble,
  ClipboardCheck,
  Clock3,
} from "lucide-react";

const icons = {
  endowment: FlaskConical,
  dormitory: BedDouble,
  assessment: ClipboardCheck,
};

export default function LogItem({
  type,
  title,
  time,
  description,
  amount,
}) {
  const Icon = icons[type] || Clock3;

  return (
    <div className="flex gap-4 border-b border-slate-100 py-4 last:border-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#0b1f3a]">
        <Icon size={18} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-sm font-semibold text-slate-800">
            {title}
          </h3>

          <span className="flex shrink-0 items-center gap-1 text-xs text-slate-400">
            <Clock3 size={12} />
            {time}
          </span>
        </div>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>

        {amount && (
          <p className="mt-2 text-xs font-semibold text-[#0b1f3a]">
            {amount}
          </p>
        )}
      </div>
    </div>
  );
}