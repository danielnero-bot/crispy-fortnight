export default function AdmissionsHero() {
  return (
    <header className="relative min-h-[614px] flex items-center justify-center pt-20 pb-16 bg-surface-container">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://scontent.fabb1-2.fna.fbcdn.net/v/t39.30808-6/488600126_1083737687104571_1641801398342205129_n.jpg?stp=dst-jpg_tt6&cstp=mx1072x712&ctp=s1072x712&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=76-GmcWE-XkQ7kNvwFhSDui&_nc_oc=AdpgaNsygeC3j2ej4JH7Z2hEITf5cT0Jl9bx-QYdpMvdYWxCCkzeUU95MFNgZguUuAxgJMp2a1PVpzLcFuHMHEup&_nc_zt=23&_nc_ht=scontent.fabb1-2.fna&_nc_gid=PRq-HMqHEEEoaIlLwGOEFQ&_nc_ss=7b289&oh=00_AQKhRk62WyrsXApe4dS81cKDElA4Yn0WXC3_kGg6Z7GpzQ&oe=6AA08C20')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-16 text-center">
        <span className="font-label-caps text-label-caps text-on-primary-fixed-variant tracking-[0.2em] uppercase mb-4 block">
          Admissions at ACMGS
        </span>
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-6 max-w-3xl mx-auto">
          Begin her journey at ACMGS
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          Admission begins with an entrance examination and candidate interview.
          Forms are obtained directly from the school administration or official
          portal.
        </p>
        <a
          className="inline-flex bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded border-2 border-tertiary-fixed-dim hover:bg-secondary transition-colors duration-300 gold-glow shadow-lg"
          href="#apply"
        >
          Start Your Application
        </a>
      </div>
    </header>
  );
}
