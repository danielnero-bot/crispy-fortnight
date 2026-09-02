export const StudentHero = ({ title, subtitle, bgImage }) => {
  return (
    <section className="relative min-h-[614px] flex items-center justify-center px-4 md:px-16 mb-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 z-10"></div>
        <img
          src={bgImage}
          alt="Campus quad"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center bg-surface-container-lowest/80 backdrop-blur-md p-12 rounded-xl shadow-[0_4px_30px_rgba(0,35,71,0.08)] border-t-2 border-tertiary-fixed-dim">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 text-glow">
          {title}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};