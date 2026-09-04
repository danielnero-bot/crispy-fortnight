export default function ManagementCTA() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile py-section-padding md:px-margin-desktop">
      <div className="rounded-2xl bg-primary px-6 py-10 text-center text-on-primary shadow-[0_8px_30px_rgba(0,35,71,0.15)] md:px-12">
        <p className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-tertiary-fixed">
          Join the ACMGS community
        </p>
        <h2 className="mt-4 font-headline-md text-headline-md text-on-primary">
          Experience a school shaped by vision, discipline, and care.
        </h2>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/admissions"
            className="inline-flex items-center justify-center border border-transparent bg-secondary px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-on-primary transition-colors duration-300 hover:bg-secondary-container"
          >
            Apply Now
          </a>
          <a
            href="/about"
            className="inline-flex items-center justify-center border border-on-primary/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-on-primary transition-colors duration-300 hover:bg-on-primary/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
