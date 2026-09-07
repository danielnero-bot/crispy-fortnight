import {
  FaBookOpen,
  FaChurch,
  FaFlask,
  FaMicrophone,
  FaMusic,
  FaPalette,
  FaPeopleGroup,
} from "react-icons/fa6";

const iconMap = {
  menu_book: FaBookOpen,
  church: FaChurch,
  science: FaFlask,
  record_voice_over: FaMicrophone,
  music_note: FaMusic,
  palette: FaPalette,
  diversity_1: FaPeopleGroup,
};

export const FeatureCard = ({
  icon,
  title,
  description,
  bgImage,
  isLarge,
  isWide,
}) => {
  const Icon = typeof icon === "string" ? iconMap[icon] || FaBookOpen : icon;

  if (isLarge) {
    return (
      <div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,35,71,0.05)] border-t-2 border-transparent hover:border-tertiary-fixed-dim transition-all duration-300">
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 p-6 sm:p-8">
          <Icon
            className="mb-3 text-2xl text-tertiary-fixed"
            aria-hidden="true"
          />
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-on-primary mb-2">
            {title}
          </h3>
          <p className="font-body text-sm sm:text-base text-surface-container-highest max-w-md leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    );
  }

  if (isWide) {
    return (
      <div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,35,71,0.05)] border-t-2 border-transparent hover:border-tertiary-fixed-dim transition-all duration-300 flex items-center">
        <div className="w-1/2 h-full absolute right-0">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/80 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full md:w-2/3 p-6 sm:p-8">
          <Icon className="mb-3 text-2xl text-primary" aria-hidden="true" />
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-primary mb-2">
            {title}
          </h3>
          <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,35,71,0.05)] border-t-2 border-transparent hover:border-tertiary-fixed-dim transition-all duration-300 p-6 sm:p-8 flex flex-col justify-end">
      <div className="absolute inset-0 bg-primary-container/5 group-hover:bg-primary-container/10 transition-colors duration-300"></div>
      <div className="relative z-10">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-5 sm:mb-6 text-primary">
          <Icon className="text-xl" aria-hidden="true" />
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-primary mb-2">
          {title}
        </h3>
        <p className="font-body text-sm sm:text-base text-on-surface-variant leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export const ClubsSection = ({ clubs }) => {
  return (
    <section>
      <div className="text-center mb-10 sm:mb-16">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded-full mb-3">
          Extracurriculars
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-3">
          Clubs &amp; Societies
        </h2>
        <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Engage your intellect, hone your talents, and find your voice in our
          diverse range of student-led organizations.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[260px] sm:auto-rows-[300px]">
        {clubs.map((club, index) => (
          <FeatureCard key={index} {...club} />
        ))}
      </div>
    </section>
  );
};
