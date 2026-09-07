export default function ManagementCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      <div className="rounded-2xl bg-primary px-6 py-10 sm:px-10 sm:py-14 text-center text-on-primary shadow-[0_8px_30px_rgba(0,35,71,0.15)]">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-tertiary-fixed">
          Join the ACMGS community
        </p>
        <h2 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-on-primary max-w-2xl mx-auto">
          Experience a school shaped by vision, discipline, and care.
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/admissions"
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center border border-transparent bg-secondary px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-on-primary transition-colors duration-300 hover:bg-secondary-container rounded-sm shadow-sm"
          >
            Apply Now
          </a>
          <a
            href="/about"
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center border border-on-primary/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-on-primary transition-colors duration-300 hover:bg-on-primary/10 rounded-sm"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
