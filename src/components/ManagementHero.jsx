export default function ManagementHero({
  eyebrow = "Management & Leadership",
  title = "A governance model rooted in faith, discipline, and academic excellence",
  description = "Archdeacon Crowther Memorial Girls’ School (ACMGS), Elelenwo, operates under a governance model rooted in Anglican Christian tradition, academic rigor, and holistic student development. Under the pastoral stewardship of the Anglican Diocese of Evo, the management structure combines board-level oversight with a dedicated executive administration to maintain high educational standards and foster moral leadership.",
}) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,222,165,0.18),_transparent_45%)]" />
      <div className="relative mx-auto max-w-container-max px-margin-mobile py-section-padding md:px-margin-desktop">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-4 block font-label-caps text-label-caps tracking-[0.2em] text-tertiary-fixed">
            {eyebrow}
          </span>
          <h1 className="font-display-lg-mobile text-display-lg-mobile text-on-primary md:font-display-lg md:text-display-lg">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-body-lg text-body-lg text-on-primary/85">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
