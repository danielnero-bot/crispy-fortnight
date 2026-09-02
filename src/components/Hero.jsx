import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  const heroItemsRef = useRef([]);
  const backgroundRef = useRef(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const cleanups = [];
    const context = gsap.context(() => {
      // Establish the cinematic hero state: the image settles first, then the copy rises like a curtain.
      const intro = gsap.timeline({
        onComplete: () => window.dispatchEvent(new Event("acmgs:hero-settled")),
      });
      intro.fromTo(
        backgroundRef.current,
        { scale: prefersReducedMotion ? 1 : 1.1 },
        {
          scale: 1,
          duration: prefersReducedMotion ? 0.01 : 1.8,
          ease: "power2.out",
        },
      );
      intro.from(
        heroItemsRef.current,
        {
          y: prefersReducedMotion ? 0 : 54,
          autoAlpha: 0,
          clipPath: prefersReducedMotion
            ? "inset(0 0 0 0)"
            : "inset(0 0 100% 0)",
          duration: prefersReducedMotion ? 0.01 : 0.8,
          ease: "power3.out",
          stagger: prefersReducedMotion ? 0 : 0.1,
        },
        "-=0.9",
      );
      intro.from(
        buttonRefs.current,
        {
          y: prefersReducedMotion ? 0 : 28,
          autoAlpha: 0,
          duration: prefersReducedMotion ? 0.01 : 0.55,
          ease: "power3.out",
          stagger: prefersReducedMotion ? 0 : 0.1,
        },
        "-=0.25",
      );

      // Give CTAs a restrained magnetic pull without changing their layout dimensions.
      buttonRefs.current.forEach((button) => {
        const xTo = gsap.quickTo(button, "x", {
          duration: 0.35,
          ease: "power2.out",
        });
        const yTo = gsap.quickTo(button, "y", {
          duration: 0.35,
          ease: "power2.out",
        });
        const move = (event) => {
          if (prefersReducedMotion) return;
          const bounds = button.getBoundingClientRect();
          xTo((event.clientX - bounds.left - bounds.width / 2) * 0.12);
          yTo((event.clientY - bounds.top - bounds.height / 2) * 0.12);
        };
        const reset = () => {
          xTo(0);
          yTo(0);
        };
        button.addEventListener("mousemove", move);
        button.addEventListener("mouseleave", reset);
        cleanups.push(() => {
          button.removeEventListener("mousemove", move);
          button.removeEventListener("mouseleave", reset);
        });
      });
    }, heroRef.current);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          ref={backgroundRef}
          className="h-full w-full origin-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDq4qrXakuNSlPxjukIwuy6IYtlEruiph5oOlQqNVRQ0CitfM49G2MxNbPcd0FBN2q6ElZb9hqOJi6o4JcXjyjhnzHTwq_eCQCT_AsgJbV8rw_zzrBt8BvGs9Ho-fntWx5s1bvNyD92H7upx26pTkutO4WRr_bLzQ0XXykUrpJxdVPjPDryDLmFKym8RYZSJhsfge36Li2AXqp5U0h19lzwQG_09ZHpOm-3Wp4KES5t9USu8XaPW1Jvtw')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/30 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 py-20 md:px-16 md:py-20">
        <div className="max-w-3xl">
          {/* Established Badge */}
          <span
            ref={(element) => {
              heroItemsRef.current[0] = element;
            }}
            className="mb-6 inline-block border border-surface/30 bg-surface-container-highest/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-on-primary backdrop-blur-sm"
          >
            Fidelis in minimis
          </span>

          {/* Heading */}
          <h1
            ref={(element) => {
              heroItemsRef.current[1] = element;
            }}
            className="mb-6 font-display text-[32px] font-bold leading-[1.2] tracking-tight text-on-primary md:text-[48px] md:leading-[1.1]"
          >
            Educational, moral and spiritual excellence in Christ.
          </h1>

          {/* Description */}
          <p
            ref={(element) => {
              heroItemsRef.current[2] = element;
            }}
            className="mb-10 max-w-2xl font-body text-lg leading-[1.6] text-surface-container-highest"
          >
            Archdeacon Crowther Memorial Girls&apos; School is an Anglican
            all-girls day and boarding secondary school in Elelenwo, Port
            Harcourt, Rivers State.
          </p>

          {/* Buttons */}
          <div
            ref={(element) => {
              heroItemsRef.current[3] = element;
            }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              ref={(element) => {
                buttonRefs.current[0] = element;
              }}
              href="#about"
              className="inline-flex items-center justify-center border border-transparent bg-surface px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-primary transition-colors duration-300 hover:bg-surface-container"
            >
              Explore ACMGS
            </a>

            <a
              ref={(element) => {
                buttonRefs.current[1] = element;
              }}
              href="#admissions"
              className="inline-flex items-center justify-center border border-on-primary bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-on-primary transition-colors duration-300 hover:bg-on-primary hover:text-primary"
            >
              Explore Admissions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
