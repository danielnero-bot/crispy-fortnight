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
    <section className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="font-serif text-3xl font-semibold text-slate-950 mb-12 text-center">
        Life in Boarding
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        {/* Safe & Supportive */}
        <div className="md:col-span-2 md:row-span-1 bg-white/85 backdrop-blur-md p-8 rounded-lg border-t-2 border-amber-300 shadow-sm flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <ShieldCheck className="w-6 h-6 text-rose-700 mr-3" />
            <h3 className="font-serif text-xl font-semibold text-slate-950">
              Safe & Supportive Environment
            </h3>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            House Mistresses, senior student prefects, night-duty matrons, and
            campus security support each student&apos;s well-being and peace of
            mind.
          </p>
        </div>

        {/* Spiritual Development */}
        <div className="md:col-span-1 md:row-span-2 bg-slate-950 text-white p-8 rounded-lg border-b-2 border-amber-300 shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <Church className="w-10 h-10 text-amber-300 mb-6" />
            <h3 className="font-serif text-xl font-semibold mb-4">
              Spiritual Development
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Morning devotion, chapel services, Sunday Eucharist, and mid-week
              fellowship foster moral strength under the Diocese of Evo.
            </p>
          </div>
          <Church className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10 pointer-events-none text-white" />
        </div>

        {/* Balanced Nutrition */}
        <div className="md:col-span-1 md:row-span-1 bg-white/85 backdrop-blur-md p-6 rounded-lg border-t-2 border-amber-300 shadow-sm flex flex-col justify-center">
          <div className="flex items-center mb-3">
            <Utensils className="w-5 h-5 text-rose-700 mr-2" />
            <h3 className="font-serif text-lg font-semibold text-slate-950">
              Balanced Nutrition
            </h3>
          </div>
          <p className="text-slate-600 text-sm">
            Three daily meals are provided through the school dining and kitchen
            facilities.
          </p>
        </div>

        {/* Study Support */}
        <div className="md:col-span-1 md:row-span-1 bg-slate-100/80 p-6 rounded-lg shadow-sm flex flex-col justify-center">
          <div className="flex items-center mb-3">
            <BookOpen className="w-5 h-5 text-slate-950 mr-2" />
            <h3 className="font-serif text-lg font-semibold text-slate-950">
              Study Support
            </h3>
          </div>
          <p className="text-slate-600 text-sm">
            Mandatory supervised night prep supports disciplined study routines.
          </p>
        </div>

        {/* Recreation */}
        <div className="md:col-span-1 md:row-span-1 bg-white/85 backdrop-blur-md p-6 rounded-lg border-t-2 border-amber-300 shadow-sm flex flex-col justify-center">
          <div className="flex items-center mb-3">
            <Activity className="w-5 h-5 text-rose-700 mr-2" />
            <h3 className="font-serif text-lg font-semibold text-slate-950">
              Recreation
            </h3>
          </div>
          <p className="text-slate-600 text-sm">
            Clubs, cultural activities, and sports create a balanced student
            experience.
          </p>
        </div>

        {/* Pastoral & Health */}
        <div className="md:col-span-1 md:row-span-1 bg-white/85 backdrop-blur-md p-6 rounded-lg border-t-2 border-amber-300 shadow-sm flex flex-col justify-center">
          <div className="flex items-center mb-3">
            <Stethoscope className="w-5 h-5 text-rose-700 mr-2" />
            <h3 className="font-serif text-lg font-semibold text-slate-950">
              Pastoral & Health
            </h3>
          </div>
          <p className="text-slate-600 text-sm">
            An on-campus sick bay supports student healthcare, with serious
            cases referred to hospitals in Port Harcourt.
          </p>
        </div>
      </div>
    </section>
  );
}
