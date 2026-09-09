import {
  ArrowUpRight,
  BookOpen,
  CalendarCheck,
  ClipboardCheck,
} from "lucide-react";
import AdminShell from "./AdminShell";

const summaryCards = [
  {
    label: "Average attendance",
    value: "99.1%",
    tone: "bg-emerald-50 text-emerald-700",
  },
  { label: "CA completion", value: "96%", tone: "bg-sky-50 text-sky-700" },
  {
    label: "Outstanding classes",
    value: "12",
    tone: "bg-violet-50 text-violet-700",
  },
  {
    label: "Needs intervention",
    value: "3",
    tone: "bg-amber-50 text-amber-700",
  },
];

const subjectProgress = [
  { subject: "Mathematics", score: "89%" },
  { subject: "English Language", score: "94%" },
  { subject: "Biology", score: "82%" },
  { subject: "Accounting", score: "76%" },
];

export default function AcademicManagementPage() {
  return (
    <AdminShell
      title="Academic Management"
      subtitle="Review performance, lesson delivery, and subject benchmark progress."
      actions={
        <button className="rounded-lg bg-[#0b1f3a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#16345d]">
          Publish report
        </button>
      }
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div
              className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${card.tone}`}
            >
              {card.label.includes("attendance") ? (
                <CalendarCheck size={18} />
              ) : card.label.includes("CA") ? (
                <ClipboardCheck size={18} />
              ) : (
                <BookOpen size={18} />
              )}
            </div>
            <p className="text-sm text-slate-500">{card.label}</p>
            <p className="mt-2 text-3xl font-bold text-[#0b1f3a]">
              {card.value}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="font-serif text-xl font-bold text-[#0b1f3a]">
                Subject progress
              </h2>
              <p className="text-sm text-slate-500">
                Current class performance benchmark
              </p>
            </div>
            <button className="inline-flex items-center gap-2 text-xs font-semibold text-[#0b1f3a]">
              View report <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="space-y-4">
            {subjectProgress.map((subject) => (
              <div key={subject.subject}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">
                    {subject.subject}
                  </span>
                  <span className="font-bold text-[#0b1f3a]">
                    {subject.score}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-[#0b1f3a]"
                    style={{ width: subject.score }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-serif text-xl font-bold text-[#0b1f3a]">
            Action list
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="rounded-xl bg-slate-50 p-3">
              Schedule revision clinic for Grade 10 commerce.
            </li>
            <li className="rounded-xl bg-slate-50 p-3">
              Review biology practical record completion.
            </li>
            <li className="rounded-xl bg-slate-50 p-3">
              Confirm the mock exam calendar with all departments.
            </li>
          </ul>
        </div>
      </section>
    </AdminShell>
  );
}
