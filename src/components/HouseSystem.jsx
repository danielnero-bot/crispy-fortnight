import { Shield, Heart, Trophy } from "lucide-react";

const HOUSES = [
  {
    title: "Crowther House",
    icon: Shield,
    iconBg: "bg-slate-900/10 text-slate-900",
    description:
      "Fostering spiritual leadership and academic excellence through quiet determination.",
  },
  {
    title: "Evo House",
    icon: Heart,
    iconBg: "bg-rose-700/10 text-rose-700",
    description:
      "Championing community service, empathy, and creative arts within the school.",
  },
  {
    title: "Archdeacon House",
    icon: Trophy,
    iconBg: "bg-amber-100 text-amber-800",
    description:
      "Leading in athletic achievement, teamwork, and spirited healthy competition.",
  },
];

export default function HouseSystem() {
  return (
    <section id="houses" className="py-16 sm:py-20 bg-slate-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-950 mb-3">
            Our House System
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
            A structured house community supporting dormitory life, sports,
            cultural events, healthy competition, and lasting sisterhood.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {HOUSES.map((house, index) => {
            const Icon = house.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-xl bg-white/90 backdrop-blur-md border-t-2 border-amber-300 shadow-sm text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 ${house.iconBg}`}
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-slate-950 mb-3">
                  {house.title}
                </h3>
                <p className="font-body text-slate-600 text-sm leading-relaxed">
                  {house.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
