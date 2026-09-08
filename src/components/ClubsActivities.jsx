import { FaPalette, FaFlask, FaMusic, FaMicrophone } from "react-icons/fa6";

const clubData = [
  {
    title: "Literary & Debating",
    description:
      "Developing articulate leaders through rigorous discourse, public speaking, and creative writing.",
    icon: FaMicrophone,
    bgImage:
      "https://scontent.fabb1-2.fna.fbcdn.net/v/t39.30808-6/488722346_1083737697104570_3033658876029240317_n.jpg?stp=dst-jpg_tt6&cstp=mx1072x712&ctp=s1072x712&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XUP19PAsSjAQ7kNvwEVjv_w&_nc_oc=AdqsR1DMVWKl_BDa28ld1AhmY6_x0iAiHORiw2uUGlDLCTvTYoUr5phzYsLh5C_qdtk0n5fEwH93eTl2j9UjBKwo&_nc_zt=23&_nc_ht=scontent.fabb1-2.fna&_nc_gid=i-rnYkp2CKXVVR-DEQuBvw&_nc_ss=78289&oh=00_AQJ0cXTFm3x3YkwTIB9U1w71WpCBI1yATM9V4YI6vrixCA&oe=6AA06E16",
    isLarge: true,
  },
  {
    title: "Science & Tech",
    description:
      "Jet, science, ICT, robotics, coding, and innovative problem-solving.",
    icon: FaFlask,
  },
  {
    title: "Music & Choir",
    description:
      "Classical training and choral excellence rooted in our rich heritage.",
    icon: FaMusic,
  },
  {
    title: "Scripture Union",
    description:
      "Growing together through Christian fellowship and moral formation.",
    icon: FaMicrophone,
  },
  {
    title: "Press & Red Cross",
    description:
      "Building communication, service, care, and responsible citizenship.",
    icon: FaMicrophone,
  },
  {
    title: "Arts & Creativity",
    description:
      "Exploring visual arts, drama, and design in spaces built for boundless imagination.",
    icon: FaPalette,
    bgImage:
      "https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-6/486169164_1073947344750272_7687674114487325698_n.jpg?stp=dst-jpg_tt6&cstp=mx720x481&ctp=s720x481&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2Mkx4xkEkJQQ7kNvwE39lZm&_nc_oc=AdqXJfZe0HUztsot7vxTbdzuG1cr4MLC-MLcVAXH2u8W2FmDwNjbmMyiLQgKZycGgPo&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&_nc_gid=n1GiwP7qYLPfSW0HoXgsdg&_nc_ss=7b289&oh=00_AQJovuZO43vWTJ-_y8_AR3AzFQPUmfYzvSwM8rB__tCQEQ&oe=6AA0668E",
    isWide: true,
  },
];

export default function ClubsActivities() {
  return (
    <section id="activities" className="py-12 sm:py-16 md:py-20">
      <div className="mb-10 sm:mb-12 max-w-2xl">
        <span className="mb-3 sm:mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Clubs and activities
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
          Find your voice, talent, and community.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {clubData.map(({ title, description, icon: Icon, bgImage, isLarge, isWide }) => (
          <article
            key={title}
            className={`relative min-h-[220px] sm:min-h-64 overflow-hidden rounded-xl bg-primary-container p-6 sm:p-8 text-on-primary shadow-sm ${isLarge || isWide ? "md:col-span-2" : ""}`}
          >
            {bgImage && (
              <img src={bgImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
            )}
            <div className="relative z-10 max-w-xl">
              <Icon className="mb-5 sm:mb-6 text-2xl sm:text-3xl text-tertiary-fixed" aria-hidden="true" />
              <h3 className="mb-2 sm:mb-3 font-display text-xl sm:text-2xl font-semibold">{title}</h3>
              <p className="font-body text-sm sm:text-base text-on-primary/85 leading-relaxed break-words">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}