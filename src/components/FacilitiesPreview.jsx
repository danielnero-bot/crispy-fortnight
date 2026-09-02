import { ArrowRight } from "lucide-react";

export default function FacilitiesPreview() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-3xl font-semibold text-slate-950">
            Facilities Preview
          </h2>
          <a
            href="#"
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
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkjo2Y_2Cr6brwH7ceWlIOwFz2PjbtXhlcuoR3Wj5tzzBU9127PVIeHLPl_IbJl2etWzAOgiuSbQIaWGrwFP_cZsHs5BNsiVpMR-qobC8Af0JHmoz0Sgq9XYdlmhunN76ERGf_b2P-ZJFmwVi6mCnD6f0GsrtpZHxDDyUHvLVPhD2gb8eELaY5Y2Sj9eNglLB-L4AYPyzwAR9ytZ6odXI10CZuUK6qoC9GqtjjFglDWlSHTtxnMtEemQ')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex items-end p-6">
              <h3 className="font-serif text-xl font-semibold text-white">
                Dining Hall & Kitchen
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
