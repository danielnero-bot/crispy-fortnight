import academicImage from "../assets/images/a2.jpg";

export default function AcademicsHero({
  eyebrow = "Academic Life at ACMGS",
  title = "Education, moral formation, and spiritual growth",
  description = "Our Nigerian National Curriculum is delivered across Junior and Senior Secondary School, with Science, Arts, and Commercial pathways aligned with WAEC and NECO standards.",
  backgroundImage = academicImage,
}) {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[520px] flex items-center justify-center overflow-hidden bg-surface-container-low">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 sm:py-24">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-tertiary-fixed mb-3 sm:mb-4 block">
          {eyebrow}
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-on-primary mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight">
          {title}
        </h1>
        <p className="font-body text-base sm:text-lg leading-relaxed text-on-primary/90 max-w-2xl mx-auto mb-6">
          {description}
        </p>
      </div>
    </section>
  );
}
