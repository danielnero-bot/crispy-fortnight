import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Boarding", href: "/boarding" },
  { name: "Student Life", href: "/student-life" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let removeHeroListener = () => {};
    let fallback;
    const context = gsap.context(() => {
      const showNav = () => {
        gsap.to(navRef.current, {
          yPercent: 0,
          autoAlpha: 1,
          duration: prefersReducedMotion ? 0.01 : 0.65,
          ease: "power3.out",
        });
      };
      gsap.set(navRef.current, {
        yPercent: prefersReducedMotion ? 0 : -100,
        autoAlpha: 0,
      });
      window.addEventListener("acmgs:hero-settled", showNav);
      fallback = window.setTimeout(showNav, prefersReducedMotion ? 0 : 2200);
      removeHeroListener = () =>
        window.removeEventListener("acmgs:hero-settled", showNav);
    }, navRef.current);
    return () => {
      removeHeroListener();
      window.clearTimeout(fallback);
      context.revert();
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 z-50 w-full bg-surface/90 backdrop-blur-md shadow-sm shadow-[0_4px_20px_rgba(0,35,71,0.05)]"
    >
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-4 md:px-16">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-2xl font-bold tracking-tight text-primary"
        >
          ACMGS
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-secondary pb-1 text-xs font-semibold uppercase tracking-[0.1em] text-secondary transition-all duration-300"
                    : "text-xs font-semibold uppercase tracking-[0.1em] text-primary transition-colors duration-300 hover:text-secondary"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Apply Button */}
        <div className="hidden md:block">
          <a
            href="/admissions"
            className="gold-glow inline-flex items-center justify-center border border-transparent bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-on-primary transition-colors duration-300 hover:border-on-tertiary-container hover:bg-secondary"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-outline-variant/30 bg-surface px-4 py-6 shadow-lg md:hidden">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "block w-fit border-b-2 border-secondary pb-1 text-sm font-semibold uppercase tracking-[0.1em] text-secondary transition-colors"
                      : "block w-fit text-sm font-semibold uppercase tracking-[0.1em] text-primary transition-colors hover:text-secondary"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <li className="pt-2">
              <a
                href="/admissions"
                onClick={() => setIsOpen(false)}
                className="gold-glow inline-flex w-full items-center justify-center bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-on-primary transition-colors hover:bg-secondary"
              >
                Apply Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
