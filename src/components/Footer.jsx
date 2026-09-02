import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerLinkGroups = [
  {
    heading: "Explore",
    links: [
      { label: "Admissions", href: "#" },
      { label: "Alumni", href: "#" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Gallery", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
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
      className="w-full py-section-padding bg-primary dark:bg-primary-container relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Brand & Copyright Col */}
        <div
          ref={(element) => {
            columnsRef.current[0] = element;
          }}
          className="md:col-span-1"
        >
          <span className="font-headline-md text-headline-md text-on-primary mb-4 block tracking-tight">
            {brand}
          </span>
          <p className="font-body-md text-body-md text-surface-variant/80 mt-4 text-sm">
            {schoolName} · School Road, Elelenwo, Port Harcourt, Rivers State,
            Nigeria
          </p>
          <p className="font-body-md text-body-md text-surface-variant/80 mt-3 text-sm">
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
            <h4 className="font-label-caps text-label-caps text-on-tertiary-container mb-6 uppercase tracking-widest">
              {group.heading}
            </h4>
            <ul className="space-y-4">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body-md text-body-md text-surface-variant hover:text-tertiary-fixed hover:translate-x-1 transition-all duration-200 block opacity-90 hover:opacity-100"
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
