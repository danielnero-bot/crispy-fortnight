export const StudentHero = ({ title, subtitle, bgImage }) => {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[520px] flex items-center justify-center px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 z-10"></div>
        <img
          src={bgImage}
          alt="Campus quad"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center bg-surface-container-lowest/90 backdrop-blur-md p-6 sm:p-10 md:p-12 rounded-xl shadow-lg border-t-2 border-secondary">
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
          {title}
        </h1>
        <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};