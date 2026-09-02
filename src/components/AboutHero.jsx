export default function AboutHero({
  eyebrow = "Our Heritage",
  title = "Fidelis in minimis",
  description = "Archdeacon Crowther Memorial Girls' School is an Anglican day and boarding secondary school in Elelenwo, Port Harcourt, Rivers State, Nigeria.",
}) {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-24 text-center">
      <span className="block font-label-caps text-label-caps text-primary-container mb-4 uppercase tracking-widest">
        {eyebrow}
      </span>
      <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
        {title}
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
        {description}
      </p>
    </section>
  );
}
