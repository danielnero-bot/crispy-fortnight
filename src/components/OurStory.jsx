const defaultParagraphs = [
  "Archdeacon Crowther Memorial Girls' School (ACMGS) was established in 1943 by the Christian Missionary Society (CMS) of the Anglican Communion. The institution was founded with a profound vision: to provide a sanctuary of holistic, Christian education for girls in an era when such opportunities were scarce.",
  "Named in honor of Archdeacon Dandeson Coates Crowther, a towering figure in the Anglican Communion and the son of Bishop Samuel Ajayi Crowther (the first African Anglican bishop), the school inherited a mandate to champion both intellectual enlightenment and unwavering moral character. From its very inception, ACMGS was designed to be more than a school; it was intended to be a crucible for female leadership, rooted deeply in faith.",
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