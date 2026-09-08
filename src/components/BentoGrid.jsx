import {
  ShieldCheck,
  Church,
  Utensils,
  BookOpen,
  Activity,
  Stethoscope,
} from "lucide-react";

export default function BentoGrid() {
  return (
    <section id="boarding-life" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-950 mb-10 sm:mb-12 text-center">
        Life in Boarding
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[580px]">
        {/* Safe & Supportive */}
        <div className="md:col-span-2 md:row-span-1 bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-xl border-t-2 border-amber-300 shadow-sm flex flex-col justify-center">
          <div className="flex items-center mb-3 sm:mb-4">
            <ShieldCheck className="w-6 h-6 text-rose-700 mr-3 shrink-0" />
            <h3 className="font-display text-lg sm:text-xl font-semibold text-slate-950">
              Safe & Supportive Environment
            </h3>
          </div>
          <p className="font-body text-slate-600 text-sm leading-relaxed">
            House Mistresses, senior student prefects, night-duty matrons, and
            campus security support each student&apos;s well-being and peace of
            mind.
          </p>
        </div>

        {/* Spiritual Development */}
        <div className="md:col-span-1 md:row-span-2 bg-slate-950 text-white p-6 sm:p-8 rounded-xl border-b-2 border-amber-300 shadow-sm flex flex-col justify-between relative overflow-hidden min-h-[220px]">
          <div className="relative z-10">
            <Church className="w-9 h-9 text-amber-300 mb-4 sm:mb-6" />
            <h3 className="font-display text-lg sm:text-xl font-semibold mb-3">
              Spiritual Development
            </h3>
            <p className="font-body text-slate-300 text-sm leading-relaxed">
              Morning devotion, chapel services, Sunday Eucharist, and mid-week
              fellowship foster moral strength under the Diocese of Evo.
            </p>
          </div>
          <Church className="absolute -bottom-8 -right-8 w-36 h-36 opacity-10 pointer-events-none text-white" />
        </div>

        {/* Balanced Nutrition */}
        <div className="md:col-span-1 md:row-span-1 bg-white/90 backdrop-blur-md p-5 sm:p-6 rounded-xl border-t-2 border-amber-300 shadow-sm flex flex-col justify-center">
          <div className="flex items-center mb-2.5">
            <Utensils className="w-5 h-5 text-rose-700 mr-2.5 shrink-0" />
            <h3 className="font-display text-base sm:text-lg font-semibold text-slate-950">
              Balanced Nutrition
            </h3>
          </div>
          <p className="font-body text-slate-600 text-sm leading-relaxed">
            Three daily meals are provided through the school dining and kitchen
            facilities.
          </p>
        </div>

        {/* Study Support */}
        <div className="md:col-span-1 md:row-span-1 bg-slate-100/90 p-5 sm:p-6 rounded-xl shadow-sm flex flex-col justify-center">
          <div className="flex items-center mb-2.5">
            <BookOpen className="w-5 h-5 text-slate-950 mr-2.5 shrink-0" />
            <h3 className="font-display text-base sm:text-lg font-semibold text-slate-950">
              Study Support
            </h3>
          </div>
          <p className="font-body text-slate-600 text-sm leading-relaxed">
            Mandatory supervised night prep supports disciplined study routines.
          </p>
        </div>

        {/* Recreation */}
        <div className="md:col-span-1 md:row-span-1 bg-white/90 backdrop-blur-md p-5 sm:p-6 rounded-xl border-t-2 border-amber-300 shadow-sm flex flex-col justify-center">
          <div className="flex items-center mb-2.5">
            <Activity className="w-5 h-5 text-rose-700 mr-2.5 shrink-0" />
            <h3 className="font-display text-base sm:text-lg font-semibold text-slate-950">
              Recreation
            </h3>
          </div>
          <p className="font-body text-slate-600 text-sm leading-relaxed">
            Clubs, cultural activities, and sports create a balanced student
            experience.
          </p>
        </div>

        {/* Pastoral & Health */}
        <div className="md:col-span-1 md:row-span-1 bg-white/90 backdrop-blur-md p-5 sm:p-6 rounded-xl border-t-2 border-amber-300 shadow-sm flex flex-col justify-center">
          <div className="flex items-center mb-2.5">
            <Stethoscope className="w-5 h-5 text-rose-700 mr-2.5 shrink-0" />
            <h3 className="font-display text-base sm:text-lg font-semibold text-slate-950">
              Pastoral & Health
            </h3>
          </div>
          <p className="font-body text-slate-600 text-sm leading-relaxed">
            An on-campus sick bay supports student healthcare, with serious
            cases referred to hospitals in Port Harcourt.
          </p>
        </div>
      </div>
    </section>
  );
}
