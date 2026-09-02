import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, Church, Trophy, House, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "A Nigerian National Curriculum integrated with ACSI standards across JSS and SSS.",
  },
  {
    icon: Church,
    title: "Christian Character",
    description:
      "Fostering strong moral foundations, empathy, and integrity guided by enduring Christian principles.",
  },
  {
    icon: Trophy,
    title: "Leadership Focus",
    description:
      "Developing disciplined, capable young women prepared to become global leaders.",
  },
  {
    icon: House,
    title: "Premium Boarding",
    description:
      "A secure, nurturing home away from home that builds independence and lifelong sisterhood.",
  },
  {
    icon: Users,
    title: "Strong Community & Holistic Development",
    description:
      "A safe, caring, and healthy environment where families, church, and society support each student's growth.",
    large: true,
  },
];

export default function WhyChoose() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const cards = cardRefs.current.filter(Boolean);
    const hoverCleanups = [];
    const context = gsap.context(() => {
      // Tilt cards in from a shallow perspective, then settle them into the editorial grid.
      gsap.from(cards, {
        y: prefersReducedMotion ? 0 : 48,
        rotateX: prefersReducedMotion ? 0 : 8,
        transformPerspective: 900,
        autoAlpha: 0,
        duration: prefersReducedMotion ? 0.01 : 0.75,
        ease: "power2.out",
        stagger: prefersReducedMotion ? 0 : 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Use one GSAP timeline per card for a controlled hover lift.
      cards.forEach((card) => {
        const icon = card.querySelector("[data-feature-icon]");
        const hoverTimeline = gsap.timeline({ paused: true });
        hoverTimeline.to(card, {
          y: prefersReducedMotion ? 0 : -4,
          boxShadow: prefersReducedMotion
            ? "0 4px 20px rgba(0,35,71,0.03)"
            : "0 18px 38px rgba(0,35,71,0.18)",
          duration: prefersReducedMotion ? 0.01 : 0.4,
          ease: "power2.out",
        });
        hoverTimeline.to(
          icon,
          {
            scale: prefersReducedMotion ? 1 : 1.08,
            color: prefersReducedMotion ? undefined : "#fd7a84",
            duration: prefersReducedMotion ? 0.01 : 0.4,
            ease: "power2.out",
          },
          0,
        );
        const playHover = () => hoverTimeline.play();
        const reverseHover = () => hoverTimeline.reverse();
        card.addEventListener("mouseenter", playHover);
        card.addEventListener("mouseleave", reverseHover);
        hoverCleanups.push(() => {
          card.removeEventListener("mouseenter", playHover);
          card.removeEventListener("mouseleave", reverseHover);
        });
      });
    }, sectionRef.current);

    return () => {
      hoverCleanups.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="academics"
      className="bg-surface-container-lowest py-20"
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-16">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start justify-between md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-4 font-display text-[32px] font-semibold leading-[1.3] text-primary">
              Why Choose ACMGS
            </h2>

            <p className="font-body text-base leading-[1.5] text-on-surface-variant">
              A holistic approach to education designed to cultivate the mind,
              body, and spirit of tomorrow&apos;s female leaders.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className={`flex h-full flex-col border-t-[3px] border-on-tertiary-container bg-surface p-8 shadow-[0_4px_20px_rgba(0,35,71,0.03)] transition-transform duration-300 hover:-translate-y-1 ${
                  feature.large ? "lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`${
                    feature.large ? "flex flex-col gap-6 md:flex-row" : ""
                  }`}
                >
                  {/* Icon */}
                  <div
                    data-feature-icon
                    className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded bg-primary-container text-white"
                  >
                    <Icon
                      size={24}
                      stroke="currentColor"
                      className="text-white"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="mb-3 font-display text-2xl font-semibold leading-[1.4] text-primary">
                      {feature.title}
                    </h3>

                    <p className="font-body text-base leading-[1.5] text-on-surface-variant">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
