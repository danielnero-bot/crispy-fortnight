import { BookOpenText, CalendarDays, GraduationCap } from "lucide-react";

const diaryEntries = [
  { title: "SSS 3 mock revision timetable", detail: "Published for all science and arts classes", icon: CalendarDays },
  { title: "Departmental lesson tracker", detail: "12 teachers have uploaded their weekly plan", icon: BookOpenText },
  { title: "Academic mentoring slot", detail: "Senior school mentoring rounds are scheduled for Friday", icon: GraduationCap },
];

export default function AcademicDiary() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
          <BookOpenText size={18} />
        </div>
        <div>
          <h2 className="font-serif text-xl font-bold text-[#0b1f3a]">Academic diary</h2>
          <p className="text-xs text-slate-400">Planned school-wide academic actions</p>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {diaryEntries.map((entry) => {
          const Icon = entry.icon;
          return (
            <div key={entry.title} className="flex gap-3 rounded-xl bg-slate-50 p-3">
              <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sky-700">
                <Icon size={15} />
              </span>
              <div>
                <p className="font-semibold text-slate-800">{entry.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{entry.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
