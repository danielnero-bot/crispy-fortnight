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
    <section className="max-w-container-max mx-auto px-margin-mobile py-section-padding md:px-margin-desktop">
      <div className="mb-12 text-center">
        <p className="font-label-caps text-label-caps text-secondary mb-4 uppercase tracking-[0.2em]">
          School Leadership & Administration
        </p>
        <h2 className="font-headline-md text-headline-md text-primary">
          Leadership committed to excellence, discipline, and service
        </h2>
      </div>

      <div className="grid gap-gutter md:grid-cols-2">
        {team.map(({ role, name, bio, icon: Icon }) => (
          <div
            key={role}
            className="rounded-xl border border-outline-variant/60 bg-surface-container-lowest p-6 shadow-[0_4px_20px_rgba(0,35,71,0.04)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-5 inline-flex rounded-full bg-primary/8 p-3 text-secondary">
              <Icon className="text-2xl" aria-hidden="true" />
            </div>
            <p className="mb-2 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.12em]">
              {role}
            </p>
            <h3 className="mb-4 font-headline-sm text-headline-sm text-primary">
              {name}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
