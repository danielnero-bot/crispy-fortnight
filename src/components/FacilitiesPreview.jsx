import { ArrowRight } from "lucide-react";

export default function FacilitiesPreview() {
  return (
    <section id="facilities" className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-3xl font-semibold text-slate-950">
            Facilities Preview
          </h2>
          <a
            href="/boarding#facilities"
            className="text-rose-700 text-xs font-semibold uppercase tracking-widest hover:text-slate-950 transition-colors flex items-center"
          >
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dormitory Card */}
          <div className="group relative overflow-hidden rounded-lg shadow-sm h-64">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB01VeLLZuS7aNYWD0icToTU9gryqZ9GB6e0FSFJDnnXi0T3lYp_6UCR4506MFqe060kibJrZ3xojwWe5X2ElRmE0uAqM4FD6Qj_4KyirU3xeWhOTefFgAjKc0TMtdGAsBYv6vjqG2-Ot4PCb60tWvensc_XQ1xRSgezMs6a5rW6h4Id8xaSU30gVv9PHkNhr31orzXe5bOaSe0N8CJSaKxyxqpPGxVRSzGEOKo3SVdJqlBRG7Oo5xTOA')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex items-end p-6">
              <h3 className="font-serif text-xl font-semibold text-white">
                Boarding Dormitories
              </h3>
            </div>
          </div>

          {/* Dining Hall Card */}
          <div className="group relative overflow-hidden rounded-lg shadow-sm h-64">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://scontent.fabb1-3.fna.fbcdn.net/v/t39.30808-6/487393150_1080954724049534_4215360547681382886_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1367&ctp=s2048x1367&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hEz5-W1GXioQ7kNvwFBfkxD&_nc_oc=Adq3zq_H0Va1Da5nvofnewelmvIRBDhhmFyvuxdAu1X0bzhPSMewvFlT7-faqqHlcuu4fho4IYiRxGASK3czL3M4&_nc_zt=23&_nc_ht=scontent.fabb1-3.fna&_nc_gid=-p-IBoxU6Z4Z5GKK2_tphQ&_nc_ss=7b289&oh=00_AQJSpCnW0LvBh8sxIQI75AkAAcQluzPuXo0sV8ST0iaRbQ&oe=6AA068D4')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex items-end p-6">
              <h3 className="font-serif text-xl font-semibold text-white">
                Kitchens
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
