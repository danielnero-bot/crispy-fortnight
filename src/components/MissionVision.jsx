const defaultCards = [
  {
    icon: "menu_book",
    title: "Our Mission",
    accent: "border-tertiary-fixed-dim",
    iconColor: "text-tertiary-fixed-dim",
    text: "To provide a rigorous, globally competitive education grounded in deep Christian values. We are committed to nurturing the intellectual, spiritual, and moral capacities of young women, equipping them to lead with integrity, compassion, and excellence in service to God and humanity.",
  },
  {
    icon: "visibility",
    title: "Our Vision",
    accent: "border-secondary",
    iconColor: "text-secondary",
    text: "To be the preeminent Christian educational institution in Africa for girls, universally recognized for shaping visionary female leaders who embody the principles of Archdeacon Crowther—courage, scholarship, and unwavering faith.",
  },
];

export default function MissionVision({ cards = defaultCards }) {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_20px_rgba(0,35,71,0.05)] border-t-2 ${card.accent}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span
                className={`material-symbols-outlined text-3xl ${card.iconColor}`}
              >
                {card.icon}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">
                {card.title}
              </h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}