export default function AboutHero({
  eyebrow = "Our Heritage",
  title = "Fidelis in minimis",
  description = "Archdeacon Crowther Memorial Girls' School is an Anglican day and boarding secondary school in Elelenwo, Port Harcourt, Rivers State, Nigeria.",
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-14 sm:pb-20 text-center">
      <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 sm:mb-4">
        {eyebrow}
      </span>
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-4 sm:mb-6">
        {title}
      </h1>
      <p className="font-body text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-2xl mx-auto">
        {description}
      </p>
    </section>
  );
}
