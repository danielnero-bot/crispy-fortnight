import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "80+",
    label: "Years of Heritage",
  },
  {
    value: "100%",
    label: "Commitment to Excellence",
  },
  {
    value: "Faith",
    label: "Rooted in Christian Values",
  },
];

export default function Heritage() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const numberRefs = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const context = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean);
      const numbers = numberRefs.current.filter(Boolean);
      // Uncover each stat card and count its numeric value in the same scroll reveal.
      const reveal = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });
      reveal.from(cards, {
        clipPath: prefersReducedMotion ? "inset(0)" : "inset(100% 0 0 0)",
        autoAlpha: 0,
        scale: prefersReducedMotion ? 1 : 0.96,
        duration: prefersReducedMotion ? 0.01 : 0.75,
        ease: "power3.out",
        stagger: prefersReducedMotion ? 0 : 0.14,
      });
      numbers.forEach((number, index) => {
        const target = stats[index].value.match(/\d+/)?.[0];
        if (!target) return;
        const counter = { value: 0 };
        reveal.to(
          counter,
          {
            value: Number(target),
            duration: prefersReducedMotion ? 0.01 : 1,
            ease: "power2.out",
            onUpdate: () => {
              number.textContent = `${Math.round(counter.value)}${stats[index].value.replace(/\d+/g, "")}`;
            },
          },
          index === 0 ? "<" : "<0.08",
        );
      });
      if (prefersReducedMotion) reveal.progress(1).pause();
    }, sectionRef.current);
    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="bg-surface py-20">
      <div className="mx-auto max-w-[1280px] px-4 text-center md:px-16">
        <h2 className="mx-auto mb-12 max-w-4xl font-display text-[32px] font-semibold leading-[1.3] text-primary">
          A Legacy of Excellence Since 1943
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="border-t-2 border-on-tertiary-container/30 bg-surface-container-low p-8"
            >
              <span
                ref={(element) => {
                  numberRefs.current[index] = element;
                }}
                className="mb-2 block font-display text-[48px] font-bold leading-[1.1] tracking-tight text-secondary"
              >
                {stat.value}
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-on-surface-variant">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
