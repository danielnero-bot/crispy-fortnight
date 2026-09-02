export default function AdmissionsHero() {
  return (
    <header className="relative min-h-[614px] flex items-center justify-center pt-20 pb-16 bg-surface-container">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUXHOYsxtX-TpR73lqE7qtiSSsYIUCirvN9tkk4AaMD59MRNe-_1vaQncnzVWCYFu6dIh7dnXd9Gdlzvsu5EeiGNOB7vkWSXlMMqm37w5B21x40uITRXpw3x8NhrA9-bdVmMdW4h5g2UOSmppgLdoDezS6y_6sivyGA3Qb--0-lgMjQVU4uwyQwWmcxtrAPTNEbYV9UF4KuA7R7DBipUJ0jDw7DpBfTi6_M9l8rBkvsX5LlZ9tkQDyxA')",
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
