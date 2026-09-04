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
    <section className="bg-surface-container py-section-padding">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 text-center">
          <p className="font-label-caps text-label-caps text-secondary mb-4 uppercase tracking-[0.2em]">
            Governance Focus
          </p>
          <h2 className="font-headline-md text-headline-md text-primary">
            Strategic oversight for academic excellence and student development
          </h2>
        </div>

        <div className="grid gap-gutter md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-outline-variant/60 bg-surface-container-lowest p-8 shadow-[0_4px_20px_rgba(0,35,71,0.04)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/8 text-secondary">
                <Icon className="text-xl" aria-hidden="true" />
              </div>
              <h3 className="mb-4 font-headline-sm text-headline-sm text-primary">
                {title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {text}
              </p>
            </div>
          ))
        </div>
      </div>
    </section>
  );
}
