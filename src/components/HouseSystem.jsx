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
    <section className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-semibold text-slate-950 mb-4">
            Our House System
          </h2>
          <p className="text-base text-slate-700 max-w-2xl mx-auto">
            A structured house community supporting dormitory life, sports,
            cultural events, healthy competition, and lasting sisterhood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOUSES.map((house, index) => {
            const Icon = house.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-lg bg-white/85 backdrop-blur-md border-t-2 border-amber-300 shadow-sm text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${house.iconBg}`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-950 mb-4">
                  {house.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
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
