import { FaBookOpen, FaScaleBalanced, FaPeopleGroup } from "react-icons/fa6";

const pillars = [
  {
    icon: FaBookOpen,
    title: "Academic Rigor",
    text: "The school leadership promotes curriculum delivery, institutional accountability, and examination readiness to uphold strong academic standards.",
  },
  {
    icon: FaScaleBalanced,
    title: "Moral & Spiritual Formation",
    text: "Grounded in Anglican Christian values, the school seeks to develop discipline, integrity, and a strong sense of service in every student.",
  },
  {
    icon: FaPeopleGroup,
    title: "Governance & Sustainability",
    text: "The board and school administration provide strategic oversight, policy direction, and long-term institutional planning for resilience and growth.",
  },
];

export default function ManagementValues() {
  return (
    <section className="bg-surface-container py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold text-secondary mb-3 uppercase tracking-[0.2em]">
            Governance Focus
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary">
            Strategic oversight for academic excellence and student development
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-outline-variant/60 bg-surface-container-lowest p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,35,71,0.04)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-secondary">
                <Icon className="text-xl" aria-hidden="true" />
              </div>
              <h3 className="mb-3 font-display text-lg sm:text-xl font-bold text-primary">
                {title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-on-surface-variant">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
