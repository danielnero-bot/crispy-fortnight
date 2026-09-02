export default function AboutHero({
  eyebrow = "Our Heritage",
  title = "A Legacy of Christian Excellence",
  description = "Founded in 1943 by the Christian Missionary Society, Archdeacon Crowther Memorial Girls' School stands as a beacon of academic rigor and moral fortitude, shaping generations of female leaders.",
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