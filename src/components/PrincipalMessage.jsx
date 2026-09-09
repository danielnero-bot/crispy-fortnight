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
    <section ref={sectionRef} className="bg-surface py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Image */}
          <div ref={imageRef} className="relative isolate lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative z-10 aspect-[4/5] w-full overflow-hidden border border-on-tertiary-container/20 bg-surface-container-high shadow-lg rounded-lg">
              <img
                ref={imageRef}
                src="../../assets/images/principal.jpg"
                alt="Principal Mrs. Chinyere Uchenna Ordu"
                className="h-full w-full object-cover"
              />
              <div
                ref={wipeRef}
                className="absolute inset-0 z-20 bg-primary"
                aria-hidden="true"
              />
            </div>

            {/* Decorative element - safe on mobile */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 z-0 h-20 w-20 rounded bg-secondary-fixed/50" />
          </div>

          {/* Text */}
          <div className="mt-4 sm:mt-8 lg:col-span-7 lg:mt-0 lg:pl-8 xl:pl-12">
            <span className="mb-3 sm:mb-4 block text-xs font-semibold uppercase tracking-[0.1em] text-on-tertiary-container">
              From the Principal
            </span>

            <h2 className="mb-6 sm:mb-8 font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.3] text-primary">
              Education grounded in faith and purpose
            </h2>

            <div
              ref={quoteRef}
              className="mb-6 sm:mb-8 border-l-2 border-secondary pl-4 sm:pl-6"
            >
              <p
                ref={quoteRef}
                className="font-display text-lg sm:text-xl italic leading-relaxed text-on-surface-variant"
              >
                {[
                  "To provide high-quality education in a safe, caring, and healthy",
                  "environment in collaboration with families, the church, and",
                  "society, instilling discipline and developing global leaders.",
                ].map((line, index) => (
                  <span
                    key={line}
                    ref={(element) => {
                      quoteLinesRef.current[index] = element;
                    }}
                    className="block"
                  >
                    {index === 0 ? `"${line}` : line}
                    {index === 2 ? '"' : ""}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <p className="font-body text-base sm:text-lg font-bold text-primary">
                Mrs. Chinyere Uchenna Ordu, JP
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
