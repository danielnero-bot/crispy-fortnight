import { FaBookOpen, FaChurch, FaPeopleGroup } from "react-icons/fa6";

const features = [
  {
    icon: FaBookOpen,
    title: "Academic Rigor",
    description:
      "Our curriculum challenges students to think critically, fostering a lifelong love of learning and intellectual curiosity.",
  },
  {
    icon: FaChurch,
    title: "Spiritual Foundation",
    description:
      "Grounded in Christian heritage, we nurture moral integrity, compassion, and a strong sense of community responsibility.",
  },
  {
    icon: FaPeopleGroup,
    title: "Empowering Leadership",
    description:
      "We cultivate confident young women, providing them with the tools and opportunities to lead with grace and purpose.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-3">
            Why Choose ACMGS?
          </h2>
          <p className="font-body text-base leading-relaxed text-on-surface-variant max-w-2xl mx-auto">
            A commitment to holistic education, blending historical prestige
            with modern pedagogical approaches.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm border-t-2 border-tertiary-fixed-dim hover:-translate-y-1 transition-transform duration-300"
            >
              <feature.icon
                className="mb-4 text-3xl sm:text-4xl text-secondary"
                aria-hidden="true"
              />
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-primary mb-2.5">
                {feature.title}
              </h3>
              <p className="font-body text-sm sm:text-base leading-relaxed text-on-surface-variant">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
