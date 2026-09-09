import { BookOpenText, CalendarDays, GraduationCap } from "lucide-react";

const icons = {
  calendar: CalendarDays,
  book: BookOpenText,
  graduation: GraduationCap,
};

export default function AcademicDiary({ diaryEntries = [] }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
          <BookOpenText size={18} />
        </div>
        <div>
          <h2 className="font-serif text-xl font-bold text-[#0b1f3a]">
            Academic diary
          </h2>
          <p className="text-xs text-slate-400">
            Planned school-wide academic actions
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {diaryEntries.length === 0 ? (
          <p className="text-sm text-slate-500">No academic diary entries.</p>
        ) : (
          diaryEntries.map((entry) => {
            const Icon = icons[entry.icon] || BookOpenText;
            return (
              <div
                key={entry.title}
                className="flex gap-3 rounded-xl bg-slate-50 p-3"
              >
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sky-700">
                  <Icon size={15} />
                </span>
                <div>
                  <p className="font-semibold text-slate-800">{entry.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {entry.detail}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
