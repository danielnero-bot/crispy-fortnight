import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const newsItems = [
  {
    category: "Academics",
    date: "Oct 15, 2024",
    title: "Academic Life at ACMGS",
    description:
      "Explore the academic structure, subjects, and pathways available across Junior and Senior Secondary School.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPjDgrV2FFFgjhFiOG_ZgTw7FWuaSOxTiQTXGjMO33TgsAWK0BVjl8-VhPkFjB4PqXYOX4_dEDGCi1iMpkSQbEmopvuXmmvZfBwpv2gXneJS1rsMPVWoC4Vmz0RoMl_dQUUB-NcTnbaYtiM-FK66l6Em7LP2OKp5k2cXpPcypidlki4HuXxKMeg9yppBklw0RA3YfJxt5UnzObM8tE43PE5k3d9Yjkt4HRF4a8XtL6LM6fgX3pm4en4Q",
    alt: "Students in a science laboratory wearing lab coats, working with beakers and microscopes.",
  },
  {
    category: "Community",
    date: "Oct 08, 2024",
    title: "Christian Formation",
    description:
      "Discover an education shaped by the school's Christian mission and Anglican affiliation.",
    image:
      "https://scontent.fabb1-2.fna.fbcdn.net/v/t39.30808-6/489410115_1087404116737928_2241706423675807908_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x854&ctp=s1280x854&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=leTqHSc8u8QQ7kNvwEaKCka&_nc_oc=Adq8rKtFu7IlK3pWpZ4VRh3wRZiJc4m36FouR5-5lWuRCazvYG8uH0K65hsWrNE48kKFx-_CSwTRK24Rpu_nXrOs&_nc_zt=23&_nc_ht=scontent.fabb1-2.fna&_nc_gid=MoRpkZjg5NF7lyspdRwjcA&_nc_ss=7b289&oh=00_AQKN-Gba4Wz2KSb-bjZfaUGYqIb20JgAB_ZMCMVhgaxDng&oe=6AA06EA0",
    alt: "School choir performing in robes inside a historic chapel with stained glass windows.",
  },
  {
    category: "Sports",
    date: "Sep 28, 2024",
    title: "Admissions Information",
    description:
      "Entrance examination and candidate interview are required for admission to ACMGS.",
    image:
      "https://scontent.fabb1-2.fna.fbcdn.net/v/t39.30808-6/487854967_1082667067211633_534893828012860021_n.jpg?stp=dst-jpg_tt6&cstp=mx720x481&ctp=s720x481&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6hGHdePIIy4Q7kNvwFb5qZA&_nc_oc=AdrshJg6UklqMh5UFd9XBd5EczZsNJdfNNmht1Rv9Sq8fxDP9NCBsF-OSVSd2TYflOhK-BHD6RS37X5K4aUrb6q_&_nc_zt=23&_nc_ht=scontent.fabb1-2.fna&_nc_gid=8oteSqJgnALGwyd7MRT2IQ&_nc_ss=7b289&oh=00_AQKTU07ffBb0b_BNaPc630T-83kmytM_ULIpjOen2H63Gg&oe=6AA07296",
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
      className="py-section-padding bg-surface-container"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex justify-between items-end mb-12 border-b border-outline-variant/30 pb-6">
          <h2 className="font-headline-md text-headline-md text-primary">
            Latest News &amp; Events
          </h2>
          <a
            href="/student-life"
            onClick={onViewAll}
            className="font-label-caps text-label-caps text-secondary hover:text-primary transition-colors flex items-center gap-1"
          >
            View All <FaArrowRight className="text-[16px]" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
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
      className="bg-surface group cursor-pointer border border-transparent hover:border-on-tertiary-container/30 transition-colors duration-300"
    >
      <div className="relative h-48 overflow-hidden">
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
      <div className="p-6">
        <span className="font-label-caps text-label-caps text-on-tertiary-container mb-3 block">
          {category} • {date}
        </span>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
          {description}
        </p>
      </div>
    </article>
  );
}
