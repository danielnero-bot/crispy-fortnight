import { FaDiamond } from "react-icons/fa6";

const requirements = [
  "Admission form obtained from the school administration or official portal.",
  "Entrance examination completed by the candidate.",
  "Candidate interview completed.",
];

const steps = [
  {
    step: "01",
    title: "Obtain the Form",
    description:
      "Collect the admission form from the school administration or official portal.",
  },
  {
    step: "02",
    title: "Entrance Examination",
    description: "Candidates sit the required entrance examination.",
  },
  {
    step: "03",
    title: "Interview",
    description: "Candidates participate in the required interview.",
  },
];

export default function AdmissionsProcess() {
  return (
    <section className="py-[80px] bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Requirements */}
          <div className="lg:col-span-5 bg-surface-container-lowest p-8 md:p-12 rounded-xl custom-shadow border border-surface-dim relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/20 rounded-bl-full -mr-8 -mt-8"></div>
            <h2 className="font-headline-md text-headline-md text-primary mb-6 relative z-10">
              Admissions Requirements
            </h2>
            <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant relative z-10">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-start">
                  <FaDiamond className="mr-3 mt-1 shrink-0 text-tertiary-fixed-dim" aria-hidden="true" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl custom-shadow border border-surface-dim">
            <h2 className="font-headline-md text-headline-md text-primary mb-8">
              The Application Process
            </h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-surface-dim">
              {steps.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface-container-lowest bg-primary text-on-primary font-label-caps text-label-caps shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    {item.step}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg bg-surface border border-surface-dim group-hover:border-tertiary-fixed-dim transition-colors">
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-1 text-[18px]">
                      {item.title}
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
