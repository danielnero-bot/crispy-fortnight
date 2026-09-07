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
    <section className="py-16 sm:py-20 md:py-24 bg-surface max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">
            {eyebrow}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-4 sm:mb-6">
            {title}
          </h2>
          <p className="font-body text-base leading-relaxed text-on-surface-variant mb-6">
            {description}
          </p>
          <ul className="space-y-3.5 pl-2 sm:pl-4 mb-8">
            {points.map((point) => (
              <li
                key={point}
                className="font-body text-sm sm:text-base text-primary flex items-start"
              >
                <span className="mr-3 text-secondary font-bold" aria-hidden="true">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 max-w-md lg:max-w-none mx-auto w-full">
          <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] rounded-xl bg-surface-container-highest overflow-hidden shadow-lg border border-outline-variant/30">
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
