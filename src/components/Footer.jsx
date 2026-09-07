import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerLinkGroups = [
  {
    heading: "Explore",
    links: [
      { label: "Admissions", href: "/admissions" },
      { label: "Alumni", href: "/about" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Gallery", href: "/student-life" },
      { label: "Contact", href: "/admissions#apply" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/" },
      { label: "Terms of Service", href: "/" },
    ],
  },
];

export default function Footer({
  brand = "ACMGS",
  year = new Date().getFullYear(),
  schoolName = "Archdeacon Crowther Memorial Girls' School",
  groups = footerLinkGroups,
}) {
  const footerRef = useRef(null);
  const columnsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const context = gsap.context(() => {
      // Stagger the brand and link columns upward as the footer enters view.
      gsap.from(columnsRef.current.filter(Boolean), {
        y: prefersReducedMotion ? 0 : 44,
        autoAlpha: 0,
        duration: prefersReducedMotion ? 0.01 : 0.65,
        ease: "power2.out",
        stagger: prefersReducedMotion ? 0 : 0.1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          once: true,
        },
      });
    }, footerRef.current);

    return () => context.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full py-12 sm:py-16 md:py-20 bg-primary relative"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand & Copyright Col */}
        <div
          ref={(element) => {
            columnsRef.current[0] = element;
          }}
          className="sm:col-span-2 lg:col-span-1"
        >
          <span className="font-display text-2xl sm:text-3xl font-bold text-on-primary mb-3 block tracking-tight">
            {brand}
          </span>
          <p className="font-body text-on-primary/80 mt-3 text-sm leading-relaxed">
            {schoolName} · School Road, Elelenwo, Port Harcourt, Rivers State,
            Nigeria
          </p>
          <p className="font-body text-on-primary/70 mt-3 text-xs sm:text-sm">
            © {year} ACMGS. All Rights Reserved.
          </p>
        </div>

        {/* Link Columns */}
        {groups.map((group, index) => (
          <div
            ref={(element) => {
              columnsRef.current[index + 1] = element;
            }}
            key={group.heading}
          >
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-tertiary-fixed mb-4">
              {group.heading}
            </h4>
            <ul className="space-y-1">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-on-primary/80 hover:text-tertiary-fixed transition-colors flex items-center min-h-[40px] py-1.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
