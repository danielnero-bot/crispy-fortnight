import { FaBookOpen, FaSchool } from "react-icons/fa6";

const defaultPathways = [
  {
    name: "Science",
    description: "Physics, Chemistry, Biology, Further Mathematics.",
    highlight: false,
  },
  {
    name: "Arts & Humanities",
    description: "Literature, History, Government, CRS.",
    highlight: false,
  },
  {
    name: "Commercial",
    description: "Accounting, Economics, Commerce.",
    highlight: false,
  },
  {
    name: "ICT",
    description: "Computer Science, Data Processing.",
    highlight: true,
  },
];

export default function ProgramsGrid({
  eyebrow = "Curriculum",
  title = "Academic Programs",
  pathways = defaultPathways,
}) {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">
            {eyebrow}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Junior Secondary */}
          <div className="bg-surface rounded-lg p-6 sm:p-8 shadow-sm border-t-2 border-on-tertiary-container hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
            <div>
              <FaBookOpen
                className="mb-5 text-3xl sm:text-4xl text-secondary"
                aria-hidden="true"
              />
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-primary mb-3">
                Junior Secondary
              </h3>
              <p className="font-body text-sm sm:text-base leading-relaxed text-on-surface-variant mb-6">
                JSS1 to JSS3 follows the Nigerian National Curriculum across
                languages, mathematics, sciences, humanities, technology, and
                creative subjects.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="bg-primary-container text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                JSS 1-3
              </span>
              <span className="bg-surface-container text-primary px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-outline-variant/40">
                National Curriculum
              </span>
            </div>
          </div>

          {/* Senior Secondary */}
          <div className="bg-surface rounded-lg p-6 sm:p-8 shadow-sm border-t-2 border-on-tertiary-container hover:shadow-md transition-shadow duration-300 lg:col-span-2">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
              <div className="flex-1">
                <FaSchool
                  className="mb-5 text-3xl sm:text-4xl text-secondary"
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-primary mb-3">
                  Senior Secondary
                </h3>
                <p className="font-body text-sm sm:text-base leading-relaxed text-on-surface-variant mb-5">
                  SSS1 to SSS3 prepares students for WAEC and NECO through
                  Science, Arts, and Commercial pathways.
                </p>
                <span className="bg-primary-container text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
                  SSS 1-3
                </span>
              </div>

              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
                {pathways.map((pathway) => (
                  <div
                    key={pathway.name}
                    className={
                      pathway.highlight
                        ? "p-4 bg-primary-container text-white rounded-lg border border-transparent shadow-sm"
                        : "p-4 bg-surface-container-low rounded-lg border border-outline-variant/60"
                    }
                  >
                    <h4
                      className={`font-display text-base sm:text-lg font-semibold mb-1.5 ${
                        pathway.highlight ? "text-on-primary" : "text-primary"
                      }`}
                    >
                      {pathway.name}
                    </h4>
                    <p
                      className={`font-body text-xs sm:text-sm leading-relaxed ${
                        pathway.highlight
                          ? "text-on-primary/85"
                          : "text-on-surface-variant"
                      }`}
                    >
                      {pathway.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
