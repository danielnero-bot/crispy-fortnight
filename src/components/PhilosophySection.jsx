const defaultPoints = [
  "Nigerian National Curriculum integrated with ACSI standards.",
  "Focus on critical thinking and problem-solving skills.",
  "Integration of Christian morals in daily learning.",
  "Collaboration with families, the church, and society.",
];

export default function PhilosophySection({
  eyebrow = "Our Philosophy",
  title = "A Commitment to Holistic Excellence",
  description = "ACMGS provides high-quality education in a safe, caring, and healthy environment. Learning is joined with discipline, Christian formation, and the development of global leaders.",
  points = defaultPoints,
  image = "https://lh3.googleusercontent.com/aida-public/AB6AXuDmZSNf-uJJxxQ2axyAyceFxXY2Oe-Ggn5Jhg0kntUfPjerZ4tJAgIHzji9iDmQIi9nTmkp1RUBW98wv7O4_fVB_OtjEOt8jRK2Qp425SH00ZPQZwdchoFcad2T0VFWRV7fj29hegu1V4i5Nr3fi9fM3clHlXq3NOEiDxioOuho8L0FFhAtMCwTtda35-rbNY1xdCSQ0FvE2fH4vtXFlIz_AdmnQLj8kq1yTqwEloAQSTwU8R9qYsgOmQ",
}) {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-5 md:col-start-2">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">
            {eyebrow}
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mb-6">
            {title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            {description}
          </p>
          <ul className="space-y-4 pl-4 mb-8">
            {points.map((point) => (
              <li
                key={point}
                className="font-body-md text-body-md text-primary gold-cross-bullet"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <div className="relative w-full aspect-[4/5] rounded bg-surface-container-highest overflow-hidden card-shadow">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="Student writing in a notebook"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
