const defaultParagraphs = [
  "Archdeacon Crowther Memorial Girls' School (ACMGS) was established in 1943 and is affiliated with the Anglican Communion through the Diocese of Evo, Church of Nigeria.",
  "Located on School Road in Elelenwo, Port Harcourt, Rivers State, ACMGS provides all-girls day and boarding secondary education grounded in Christian values.",
];

export default function OurStory({
  title = "Our Story",
  paragraphs = defaultParagraphs,
}) {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding border-t border-surface-container-highest">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-4">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">
            {title}
          </h2>
          <div className="w-12 h-1 bg-tertiary-fixed-dim rounded mb-8" />
        </div>
        <div className="md:col-span-8">
          {paragraphs.map((text, idx) => (
            <p
              key={idx}
              className={
                idx === 0
                  ? "font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed"
                  : "font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed"
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
