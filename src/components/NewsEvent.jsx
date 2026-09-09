import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa6";
import congregationImage from "../assets/images/congregation.jpg";
import christianFormationImage from "../assets/images/christian-formation.jpg";
import buildingImage from "../assets/images/building.jpg";

gsap.registerPlugin(ScrollTrigger);

const newsItems = [
  {
    category: "Academics",
    date: "Oct 15, 2024",
    title: "Academic Life at ACMGS",
    description:
      "Explore the academic structure, subjects, and pathways available across Junior and Senior Secondary School.",
    image: congregationImage,
    alt: "Students in a science laboratory wearing lab coats, working with beakers and microscopes.",
  },
  {
    category: "Community",
    date: "Oct 08, 2024",
    title: "Christian Formation",
    description:
      "Discover an education shaped by the school's Christian mission and Anglican affiliation.",
    image: christianFormationImage,
    alt: "School choir performing in robes inside a historic chapel with stained glass windows.",
  },
  {
    category: "Sports",
    date: "Sep 28, 2024",
    title: "Admissions Information",
    description:
      "Entrance examination and candidate interview are required for admission to ACMGS.",
    image: buildingImage,
    alt: "Female student athlete serving a tennis ball on an outdoor court.",
  },
];

export default function NewsEvents({ items = newsItems, onViewAll }) {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const context = gsap.context(() => {
      // Reveal each news card once it reaches roughly 80% of the viewport.
      cardRefs.current.forEach((card, index) => {
        gsap.from(card, {
          y: prefersReducedMotion ? 0 : 72,
          autoAlpha: 0,
          duration: prefersReducedMotion ? 0.01 : 0.75,
          ease: "power2.out",
          delay: prefersReducedMotion ? 0 : index * 0.08,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            once: true,
          },
        });
      });
    }, sectionRef.current);

    return () => context.revert();
  }, [items.length]);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-surface-container"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 border-b border-outline-variant/30 pb-6">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
            Latest News &amp; Events
          </h2>
          <a
            href="/student-life"
            onClick={onViewAll}
            className="inline-flex min-h-[44px] items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-secondary hover:text-primary transition-colors py-2"
          >
            View All <FaArrowRight className="text-sm" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <NewsCard
              key={idx}
              {...item}
              cardRef={(element) => {
                cardRefs.current[idx] = element;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsCard({ category, date, title, description, image, alt, cardRef }) {
  const imageRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const image = imageRef.current;
    let cleanupHover;
    const context = gsap.context(() => {
      const hoverTimeline = gsap.timeline({ paused: true });

      // Scale the photo inside its clipped frame and bring the category overlay upward.
      hoverTimeline
        .to(
          image,
          {
            scale: prefersReducedMotion ? 1 : 1.05,
            boxShadow: prefersReducedMotion
              ? "none"
              : "0 10px 24px rgba(0,35,71,0.16)",
            duration: prefersReducedMotion ? 0.01 : 0.5,
            ease: "power2.out",
          },
          0,
        )
        .to(
          overlayRef.current,
          {
            yPercent: 0,
            duration: prefersReducedMotion ? 0.01 : 0.45,
            ease: "power2.out",
          },
          0,
        );

      const playHover = () => hoverTimeline.play();
      const reverseHover = () => hoverTimeline.reverse();
      image.addEventListener("mouseenter", playHover);
      image.addEventListener("mouseleave", reverseHover);
      cleanupHover = () => {
        image.removeEventListener("mouseenter", playHover);
        image.removeEventListener("mouseleave", reverseHover);
      };
    }, imageRef.current);

    return () => {
      cleanupHover?.();
      context.revert();
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className="bg-surface group cursor-pointer rounded-lg overflow-hidden border border-transparent hover:border-on-tertiary-container/30 transition-colors duration-300 shadow-sm"
    >
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          ref={imageRef}
          className="w-full h-full object-cover"
          src={image}
          alt={alt}
        />
        <div
          ref={overlayRef}
          className="absolute inset-x-0 bottom-0 translate-y-full bg-secondary/95 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-on-primary"
          aria-hidden="true"
        >
          {category}
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-on-tertiary-container mb-2.5 block">
          {category} • {date}
        </span>
        <h3 className="font-display text-lg sm:text-xl font-semibold text-primary mb-2.5 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <p className="font-body text-sm leading-relaxed text-on-surface-variant line-clamp-2">
          {description}
        </p>
      </div>
    </article>
  );
}
