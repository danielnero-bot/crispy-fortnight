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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHk3bHXhdF1UxR53dOttQQTOUQgUBDewyCUIbSr6PRYfqcBlJsu9lJFFINEpXadYf33ty81GKa2gj934E1KKLqgl3O0UPsNl4-xk6SP4dY3mmeGdsYmtqiiVQZYVBkIosVSTsSTDlUhNJN4OhECv2AKqIjdijfYGnYuIEQgTJ1xl46pLARmzXjHEu77Taebd6Wht0meVmFDkXHff4j-OH94KyXfubhzVA_TQgQyLEmoEhKI82zb507VA",
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
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <span className="font-label-caps text-label-caps text-secondary mb-4 block">
          {eyebrow}
        </span>
        <h2 className="font-headline-md text-headline-md text-primary">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
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
        className={`relative rounded overflow-hidden group bg-primary-container ${
          span || ""
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary-container text-6xl opacity-20">
            {icon}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 p-6 z-10">
          <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">
            {title}
          </h3>
          {linkLabel && (
            <a
              href={linkHref}
              className="font-label-caps text-label-caps text-tertiary-fixed hover:text-white transition-colors flex items-center gap-1"
            >
              {linkLabel}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative rounded overflow-hidden group ${span || ""}`}>
      <img
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        src={image}
        alt={title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">
          {title}
        </h3>
        {description && (
          <p className="font-body-md text-body-md text-on-primary/80">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}