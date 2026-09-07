export default function AdmissionsHero() {
  return (
    <header className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[520px] flex items-center justify-center pt-16 sm:pt-20 pb-14 sm:pb-16 bg-surface-container">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://scontent.fabb1-2.fna.fbcdn.net/v/t39.30808-6/488600126_1083737687104571_1641801398342205129_n.jpg?stp=dst-jpg_tt6&cstp=mx1072x712&ctp=s1072x712&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=76-GmcWE-XkQ7kNvwFhSDui&_nc_oc=AdpgaNsygeC3j2ej4JH7Z2hEITf5cT0Jl9bx-QYdpMvdYWxCCkzeUU95MFNgZguUuAxgJMp2a1PVpzLcFuHMHEup&_nc_zt=23&_nc_ht=scontent.fabb1-2.fna&_nc_gid=PRq-HMqHEEEoaIlLwGOEFQ&_nc_ss=7b289&oh=00_AQKhRk62WyrsXApe4dS81cKDElA4Yn0WXC3_kGg6Z7GpzQ&oe=6AA08C20')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold text-secondary tracking-[0.2em] uppercase mb-3 sm:mb-4 block">
          Admissions at ACMGS
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-4 sm:mb-6 max-w-3xl mx-auto">
          Begin her journey at ACMGS
        </h1>
        <p className="font-body text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-2xl mx-auto mb-8 sm:mb-10">
          Admission begins with an entrance examination and candidate interview.
          Forms are obtained directly from the school administration or official
          portal.
        </p>
        <a
          className="w-full sm:w-auto inline-flex min-h-[44px] h-12 items-center justify-center bg-primary text-on-primary text-xs font-semibold uppercase tracking-[0.12em] px-8 py-3.5 rounded border border-transparent hover:bg-secondary transition-colors duration-300 shadow-md"
          href="#apply"
        >
          Start Your Application
        </a>
      </div>
    </header>
  );
}
