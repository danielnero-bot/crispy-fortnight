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
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`bg-surface-container-lowest p-8 rounded-xl shadow-[0_4px_20px_rgba(0,35,71,0.05)] border-t-2 ${card.accent}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <card.icon
                className={`text-3xl ${card.iconColor}`}
                aria-hidden="true"
              />
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
