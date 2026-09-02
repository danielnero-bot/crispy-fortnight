export default function CtaSection() {
  return (
    <section className="py-24 bg-slate-950 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#e9c176 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-6">
          Ready to learn more about boarding at ACMGS?
        </h2>
        <p className="text-slate-300 text-base mb-10 leading-relaxed">
          Contact the school administration for current boarding information,
          forms, and entry guidance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/admissions"
            className="inline-flex items-center justify-center px-8 py-4 bg-rose-700 text-white text-xs font-semibold uppercase tracking-widest rounded border border-rose-700 hover:bg-white hover:text-rose-700 transition-all duration-300"
          >
            Start Application
          </a>
          <a
            href="/admissions#apply"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white text-xs font-semibold uppercase tracking-widest rounded border border-slate-700 hover:border-amber-300 hover:text-amber-300 transition-all duration-300"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}
