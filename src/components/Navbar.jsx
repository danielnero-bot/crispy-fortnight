import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Boarding", href: "/boarding" },
  { name: "Student Life", href: "/student-life" },
  { name: "Management", href: "/management" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-primary hover:opacity-90 transition-opacity"
        >
          ACMGS
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center space-x-6 lg:space-x-8 md:flex">
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

        {/* Desktop Actions */}
        <div className="hidden items-center space-x-4 md:flex">
          <Link
            to="/login"
            className="text-xs font-semibold uppercase tracking-[0.1em] text-primary transition-colors duration-300 hover:text-secondary px-3 py-2"
          >
            Portal
          </Link>
          <Link
            to="/admissions"
            className="gold-glow inline-flex h-11 items-center justify-center border border-transparent bg-primary px-6 text-xs font-semibold uppercase tracking-[0.1em] text-on-primary transition-colors duration-300 hover:border-on-tertiary-container hover:bg-secondary"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-primary hover:bg-surface-container active:bg-surface-container-high transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-outline-variant/30 bg-surface/98 backdrop-blur-lg px-4 py-5 shadow-xl md:hidden">
          <ul className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "flex min-h-[44px] items-center rounded-lg bg-surface-container px-4 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-secondary transition-colors"
                      : "flex min-h-[44px] items-center rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-primary transition-colors hover:bg-surface-container hover:text-secondary"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <li className="pt-3 border-t border-outline-variant/20 mt-2 space-y-2">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex min-h-[44px] w-full items-center justify-center rounded-lg border border-outline-variant px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-primary transition-colors hover:bg-surface-container"
              >
                Portal Login
              </Link>
              <Link
                to="/admissions"
                onClick={() => setIsOpen(false)}
                className="gold-glow flex min-h-[44px] w-full items-center justify-center bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-on-primary transition-colors hover:bg-secondary"
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
