import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PrincipalMessage() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const wipeRef = useRef(null);
  const quoteRef = useRef(null);
  const quoteLinesRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const context = gsap.context(() => {
      // Slide a solid editorial panel across the portrait to reveal the image underneath.
      const reveal = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });
      reveal.fromTo(
        wipeRef.current,
        { xPercent: 0 },
        {
          xPercent: 100,
          duration: prefersReducedMotion ? 0.01 : 0.9,
          ease: "power3.inOut",
        },
      );
      // Bring the quote in line by line just after the portrait wipe completes.
      reveal.from(
        quoteLinesRef.current,
        {
          x: prefersReducedMotion ? 0 : 40,
          autoAlpha: 0,
          duration: prefersReducedMotion ? 0.01 : 0.6,
          ease: "power2.out",
          stagger: prefersReducedMotion ? 0 : 0.08,
        },
        "-=0.25",
      );
    }, sectionRef.current);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-surface py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-16">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
          {/* Image */}
          <div ref={imageRef} className="relative isolate lg:col-span-5">
            <div className="relative z-10 aspect-[4/5] w-full overflow-hidden border border-on-tertiary-container/20 bg-surface-container-high shadow-lg">
              <img
                ref={imageRef}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTkqRlWGzGiOng11ZBVwIbC6f8EL0qEItvKIVCiV42N8NYbnJ0lLBo7dOD0m1n6BbKpEc3MSoNB6PGPBXgvljXD6zksc4uXxuuDl5msezG0jzAAZdU8jNQn4O_EsGdElbnocGrO4-Zx1w3u2TM59rV2qHqF6EBMr8i0IZVbWPksRswVXVV8pfyTTCfQLmitAFjo5YNT5swaD6-hiB7p-PG5HGP1FDSMxEB7c1yLgUCqSpCFqscVtVpKA"
                alt="Principal of Archdeacon Crowther Memorial Girls' School"
                className="h-full w-full object-cover"
              />
              <div
                ref={wipeRef}
                className="absolute inset-0 z-20 bg-primary"
                aria-hidden="true"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 z-0 h-24 w-24 bg-secondary-fixed/50" />
          </div>

          {/* Text */}
          <div className="mt-12 lg:col-span-7 lg:mt-0 lg:pl-12">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.1em] text-on-tertiary-container">
              Welcome to ACMGS
            </span>

            <h2 className="mb-8 font-display text-[32px] font-semibold leading-[1.3] text-primary">
              A Tradition of Shaping Visionary Women
            </h2>

            <div
              ref={quoteRef}
              className="mb-8 border-l-2 border-secondary pl-6"
            >
              <p
                ref={quoteRef}
                className="font-display text-xl italic leading-[1.5] text-on-surface-variant"
              >
                {[
                  "Our mission extends beyond academic brilliance; it is deeply",
                  "rooted in cultivating the character and moral fortitude",
                  "necessary for our young women to navigate and lead in a",
                  "complex world. We invite you to become part of this extraordinary legacy.",
                ].map((line, index) => (
                  <span
                    key={line}
                    ref={(element) => {
                      quoteLinesRef.current[index] = element;
                    }}
                    className="block"
                  >
                    {index === 0 ? `"${line}` : line}
                    {index === 3 ? '"' : ""}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <p className="font-body text-lg font-bold text-primary">
                Dr. Jane Doe
              </p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-on-surface-variant">
                Principal, ACMGS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
