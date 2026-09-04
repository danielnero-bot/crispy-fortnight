import { useEffect, useRef } from "react";
import { FaPalette, FaFlask, FaMusic, FaMicrophone } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADxGARZY5oRUEbTTjRTddg-9bexhD-7sxNA9jWSyy8cvK_hV34F8bsS-g4ogM10SQke7VS5ZivcGG8HbBOMX4DrsCHQY1-Kl4Q6XQa3n0rZqsiOY9jPUV7wYTDuozsyfLQzeCWP597eutHEBj523d2jDgrfImZ3zJ79B9yw8BMjASb57htmQzmUWXRIuOL6r-F6NzZxWumMqB2rd2K97KdgWMQz6_fkj3TPeMdABA5qsbZcDbQuhRo7A",
    isWide: true,
  },
];

export default function StudentLifePage() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;
    hero.animate(
      [
        { opacity: 0, transform: "translateY(24px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 650, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" },
    );
    return undefined;
  }, []);

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <section
          ref={heroRef}
          className="relative overflow-hidden bg-primary px-4 py-24 text-center text-on-primary md:px-16 md:py-32"
        >
          <div className="mx-auto max-w-4xl">
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-tertiary-fixed">
              Student Life at ACMGS
            </span>
            <h1 className="font-display text-4xl font-semibold md:text-6xl">
              Vibrant life beyond the classroom.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-on-primary/85">
              A community of personal growth, creative expression, and lifelong
              sisterhood.
            </p>
          </div>
        </section>
        <div className="mx-auto max-w-[1280px] space-y-20 px-4 md:px-16">
          <section className="py-20">
            <div className="mb-12 max-w-2xl">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Clubs and activities
              </span>
              <h2 className="font-display text-4xl font-semibold text-primary">
                Find your voice, talent, and community.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {clubData.map(
                ({
                  title,
                  description,
                  icon: Icon,
                  bgImage,
                  isLarge,
                  isWide,
                }) => (
                  <article
                    key={title}
                    className={`relative min-h-64 overflow-hidden rounded bg-primary-container p-8 text-on-primary ${isLarge || isWide ? "md:col-span-2" : ""}`}
                  >
                    {bgImage && (
                      <img
                        src={bgImage}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover opacity-40"
                      />
                    )}
                    <div className="relative z-10 max-w-xl">
                      <Icon
                        className="mb-6 text-3xl text-tertiary-fixed"
                        aria-hidden="true"
                      />
                      <h3 className="mb-3 font-display text-2xl font-semibold">
                        {title}
                      </h3>
                      <p className="text-on-primary/80">{description}</p>
                    </div>
                  </article>
                ),
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
