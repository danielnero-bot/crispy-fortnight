import { FaBookOpen, FaEye } from "react-icons/fa6";

const defaultCards = [
  {
    icon: FaBookOpen,
    title: "Our Mission",
    accent: "border-tertiary-fixed-dim",
    iconColor: "text-tertiary-fixed-dim",
    text: "To provide high-quality education in a safe, caring, and healthy environment in collaboration with families, the church, and society, instilling discipline and developing global leaders.",
  },
  {
    icon: FaEye,
    title: "Our Vision",
    accent: "border-secondary",
    iconColor: "text-secondary",
    text: "To attain Educational, Moral and Spiritual excellence in Christ (Luke 2:52).",
  },
];

export default function MissionVision({ cards = defaultCards }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-[0_4px_20px_rgba(0,35,71,0.05)] border-t-2 ${card.accent}`}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <card.icon
                className={`text-2xl sm:text-3xl shrink-0 ${card.iconColor}`}
                aria-hidden="true"
              />
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-primary">
                {card.title}
              </h3>
            </div>
            <p className="font-body text-sm sm:text-base leading-relaxed text-on-surface-variant">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
