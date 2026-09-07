const defaultItems = [
  {
    year: "1943",
    text: "Archdeacon Crowther Memorial Girls' School established.",
  },
  {
    year: "Affiliation",
    text: "Anglican Communion, Diocese of Evo, Church of Nigeria.",
  },
  {
    year: "Location",
    text: "School Road, Elelenwo, Port Harcourt, Rivers State, Nigeria.",
  },
  {
    year: "School Type",
    text: "All-girls secondary school offering day and boarding education.",
  },
  {
    year: "Academics",
    text: "Junior and Senior Secondary School education across Science, Arts, and Commercial tracks.",
    dotHover: "group-hover:bg-secondary",
  },
  {
    year: "Mission",
    text: "Developing disciplined global leaders through high-quality education in Christ.",
    muted: true,
  },
];

export default function Timeline({
  title = "The Journey Through Time",
  items = defaultItems,
}) {
  return (
    <section className="bg-surface-container-low py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-primary mb-12 sm:mb-16">
          {title}
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-0.5 bg-outline-variant/40 -translate-x-1/2" />

          {items.map((item, idx) => (
            <TimelineItem
              key={item.year}
              item={item}
              side={idx % 2 === 0 ? "left" : "right"}
              isLast={idx === items.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, side, isLast }) {
  const { year, text, muted, dotHover } = item;

  const textBlock = (
    <div
      className={
        side === "left"
          ? "md:w-1/2 md:pr-12 md:text-right pl-10 sm:pl-12 md:pl-0 w-full mb-2 md:mb-0"
          : "md:w-1/2 md:pl-12 pl-10 sm:pl-12 w-full"
      }
    >
      <h3
        className={`font-display text-lg sm:text-xl font-semibold mb-1 ${
          muted ? "text-outline" : "text-primary"
        }`}
      >
        {year}
      </h3>
      <p
        className={`font-body text-sm sm:text-base leading-relaxed ${
          muted ? "text-outline" : "text-on-surface-variant"
        }`}
      >
        {text}
      </p>
    </div>
  );

  const spacer = (
    <div className="md:w-1/2 md:pr-12 md:pl-12 w-full hidden md:block" />
  );

  return (
    <div
      className={`relative flex flex-col md:flex-row items-start md:items-center group ${
        isLast ? "" : "mb-10 sm:mb-14 md:mb-16"
      }`}
    >
      {side === "left" ? textBlock : spacer}

      <div
        className={`absolute left-[18px] md:left-1/2 top-1.5 md:top-1/2 md:-translate-y-1/2 w-4 h-4 bg-background border-2 ${
          muted ? "border-outline-variant" : "border-primary"
        } rounded-full -translate-x-1/2 transition-colors duration-300 shadow-[0_0_0_4px_rgba(251,249,244,1)] ${
          dotHover || (muted ? "" : "group-hover:bg-tertiary-fixed-dim")
        }`}
      />

      {side === "left" ? spacer : textBlock}
    </div>
  );
}
