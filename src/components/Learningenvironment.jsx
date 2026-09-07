import { FaArrowRight, FaComputer } from "react-icons/fa6";

const defaultFacilities = [
  {
    type: "image",
    title: "Modern Classrooms",
    description: "Equipped with interactive technology for dynamic learning.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxzWHJb0SwR2n9C4ZLL2h3aY72jM3eNl1JDFCwwvmbwOhbnQLQpNKt4Qt7QsZNGDT7pdCO-ca9LzrOEgE9JeQvISGsplLPLFZJec4ersOyp_cHQ232RT1UVL57n59qiV9QNFxJ7jDydlbXRWZ2QxrwqYlJI10yhaujCB9dGwDxKIAYUQHRrSZn2CMT0Dkf_KO9o8fo_ZD9HIerJjEPu-CXticWEWqElaeihsm3Aafj8NbkUkTTmZqYdg",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    type: "image",
    title: "Science Laboratories",
    image:
      "https://scontent.fabb1-2.fna.fbcdn.net/v/t39.30808-6/488563357_1083739757104364_7985617616037423708_n.jpg?stp=dst-jpg_tt6&cstp=mx1344x1008&ctp=s1344x1008&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AheSZLA3hm4Q7kNvwGw4mT2&_nc_oc=Adr1ThtuyWMYkYE2FBmbqU9iNOqYcT4pY6nAKRglvMD57RF_-aeeXNkjZlKX6ehAFEE_PMh2PJMwYerG9d3gUc-g&_nc_zt=23&_nc_ht=scontent.fabb1-2.fna&_nc_gid=Av8n0bn2W-DEAF7tWEggkA&_nc_ss=7b289&oh=00_AQLDJCmY4oItUZ5QbAXQ2CbY7MTBTcJgmXdUyHxyvd4GiA&oe=6AA0680A",
    span: "md:col-span-2",
  },
  {
    type: "image",
    title: "The Library",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBC3_IphxLaUxNG0Jj3PupfeWCiUFfJod0bKO6eL7yqPLiQspfgfUmF4W1CBXGvAkHhzgz1hKUUU5TpA33JePmGNmnF5gzUvWTF0asrnn4b6yLUa6U11LdrvpSYz-8lPmHIIfHYm1WpSrBFS-SlF_577K_YirPXV-iqJjNBhrFYq0GAMl2oNb6slYgd7msl8VtgxY1NQpkklYO6RiBrDXiV70NJgjteO-3l9rlIhPl4rIJrHG5Ty4snLA",
  },
  {
    type: "icon",
    title: "ICT Center",
    icon: "computer",
    linkLabel: "Explore Facilities",
    linkHref: "#",
  },
];

export default function LearningEnvironment({
  eyebrow = "Facilities",
  title = "An Inspiring Environment",
  facilities = defaultFacilities,
}) {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-surface max-w-7xl mx-auto">
      <div className="text-center mb-10 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block">
          {eyebrow}
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px] sm:auto-rows-[250px]">
        {facilities.map((facility) => (
          <FacilityTile key={facility.title} facility={facility} />
        ))}
      </div>
    </section>
  );
}

function FacilityTile({ facility }) {
  const { type, title, description, image, span, icon, linkLabel, linkHref } =
    facility;

  if (type === "icon") {
    return (
      <div
        className={`relative rounded-lg overflow-hidden group bg-primary-container ${
          span || ""
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <FaComputer
            className="text-5xl sm:text-6xl text-on-primary-container opacity-40"
            aria-hidden="true"
          />
        </div>
        <div className="absolute bottom-0 left-0 p-5 sm:p-6 z-10">
          <h3 className="font-display text-lg sm:text-xl font-semibold text-on-primary mb-1.5">
            {title}
          </h3>
          {linkLabel && (
            <a
              href={linkHref}
              className="inline-flex min-h-[44px] items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-tertiary-fixed hover:text-white transition-colors py-2"
            >
              {linkLabel}
              <FaArrowRight className="text-sm" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative rounded-lg overflow-hidden group ${span || ""}`}>
      <img
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        src={image}
        alt={title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 p-5 sm:p-6">
        <h3 className="font-display text-lg sm:text-xl font-semibold text-on-primary mb-1.5">
          {title}
        </h3>
        {description && (
          <p className="font-body text-xs sm:text-sm text-on-primary/85 leading-relaxed line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
