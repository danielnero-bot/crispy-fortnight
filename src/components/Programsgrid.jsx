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
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">
            {eyebrow}
          </span>
          <h2 className="font-headline-md text-headline-md text-primary">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Junior Secondary */}
          <div className="bg-surface rounded p-8 card-shadow border-t-2 border-on-tertiary-container hover:shadow-lg transition-shadow duration-300">
            <FaBookOpen
              className="mb-6 text-4xl text-secondary"
              aria-hidden="true"
            />
            <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
              Junior Secondary
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              JSS1 to JSS3 follows the Nigerian National Curriculum across
              languages, mathematics, sciences, humanities, technology, and
              creative subjects.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full font-label-caps text-label-caps">
                JSS 1-3
              </span>
              <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full font-label-caps text-label-caps">
                National Curriculum
              </span>
            </div>
          </div>

          {/* Senior Secondary */}
          <div className="bg-surface rounded p-8 card-shadow border-t-2 border-on-tertiary-container hover:shadow-lg transition-shadow duration-300 md:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <FaSchool
                  className="mb-6 text-4xl text-secondary"
                  aria-hidden="true"
                />
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
                  Senior Secondary
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  SSS1 to SSS3 prepares students for WAEC and NECO through
                  Science, Arts, and Commercial pathways.
                </p>
                <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full font-label-caps text-label-caps mb-4 inline-block">
                  SSS 1-3
                </span>
              </div>

              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {pathways.map((pathway) => (
                  <div
                    key={pathway.name}
                    className={
                      pathway.highlight
                        ? "p-4 bg-primary-container text-on-primary-container rounded border border-transparent"
                        : "p-4 bg-surface-container rounded border border-outline-variant"
                    }
                  >
                    <h4
                      className={`font-headline-sm text-lg mb-2 ${
                        pathway.highlight ? "text-on-primary" : "text-primary"
                      }`}
                    >
                      {pathway.name}
                    </h4>
                    <p
                      className={`font-body-md text-sm ${
                        pathway.highlight
                          ? "text-on-primary/80"
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
