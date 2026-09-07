const defaultParagraphs = [
  "Archdeacon Crowther Memorial Girls' School (ACMGS) was established in 1943 and is affiliated with the Anglican Communion through the Diocese of Evo, Church of Nigeria.",
  "Located on School Road in Elelenwo, Port Harcourt, Rivers State, ACMGS provides all-girls day and boarding secondary education grounded in Christian values.",
];

export default function OurStory({
  title = "Our Story",
  paragraphs = defaultParagraphs,
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 border-t border-surface-container-highest">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
        <div className="md:col-span-4">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-3">
            {title}
          </h2>
          <div className="w-12 h-1 bg-tertiary-fixed-dim rounded mb-6 md:mb-8" />
        </div>
        <div className="md:col-span-8">
          {paragraphs.map((text, idx) => (
            <p
              key={idx}
              className={
                idx === 0
                  ? "font-body text-base sm:text-lg text-on-surface-variant mb-5 leading-relaxed font-medium"
                  : "font-body text-sm sm:text-base text-on-surface-variant mb-5 leading-relaxed"
              }
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
