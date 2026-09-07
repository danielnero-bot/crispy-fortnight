import {
  FaUserTie,
  FaChalkboardUser,
  FaLandmark,
  FaBookOpen,
} from "react-icons/fa6";

const team = [
  {
    role: "Diocesan Proprietor & Visionary Oversight",
    name: "Anglican Diocese of Evo",
    bio: "Provides ecclesiastical proprietorship and spiritual stewardship, ensuring alignment with the school’s Christian ethos and long-term mission.",
    icon: FaLandmark,
  },
  {
    role: "Principal & Executive Head of School",
    name: "Mrs. Chinyere Uchenna Ordu, JP",
    bio: "Manages daily operational governance, strategic growth, staff supervision, student discipline, and academic standard enforcement across the institution.",
    icon: FaUserTie,
  },
  {
    role: "Vice Principal (Academics)",
    name: "Not publicly confirmed",
    bio: "Oversees curriculum execution, academic evaluation systems, teacher instructional quality, and WASSCE/NECO examination readiness.",
    icon: FaChalkboardUser,
  },
  {
    role: "Vice Principal (Administration)",
    name: "Not publicly confirmed",
    bio: "Coordinates campus logistics, non-academic personnel management, facility maintenance, and student administrative services.",
    icon: FaBookOpen,
  },
];

export default function ManagementTeam() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="mb-10 sm:mb-16 text-center">
        <p className="text-xs font-semibold text-secondary mb-3 uppercase tracking-[0.2em]">
          School Leadership &amp; Administration
        </p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
          Leadership committed to excellence, discipline, and service
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {team.map(({ role, name, bio, icon: Icon }) => (
          <div
            key={role}
            className="rounded-xl border border-outline-variant/60 bg-surface-container-lowest p-6 sm:p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-5 inline-flex rounded-full bg-primary/8 p-3 text-secondary">
              <Icon className="text-2xl" aria-hidden="true" />
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
              {role}
            </p>
            <h3 className="mb-3 font-display text-xl sm:text-2xl font-semibold text-primary">
              {name}
            </h3>
            <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
