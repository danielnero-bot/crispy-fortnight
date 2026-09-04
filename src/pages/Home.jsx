import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Heritage from "../components/Heritage";
import WhyChoose from "../components/WhyChoose";
import PrincipalMessage from "../components/PrincipalMessage";
import NewsEvent from "../components/NewsEvent";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return undefined;

    // Keep Lenis' virtual scroll position and ScrollTrigger's measurements in lockstep.
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    const onScroll = () => ScrollTrigger.update();
    const onTick = (time) => lenis.raf(time * 1000);
    lenis.on("scroll", onScroll);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const scroller = document.documentElement;
    ScrollTrigger.scrollerProxy(scroller, {
      scrollTop(value) {
        if (arguments.length) lenis.scrollTo(value, { immediate: true });
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.documentElement.style.transform ? "transform" : "fixed",
    });
    ScrollTrigger.defaults({ scroller });
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      ScrollTrigger.defaults({ scroller: window });
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div ref={pageRef}>
      <Navbar />

      <main>
        <Hero />
        <Heritage />
        <WhyChoose />
        <PrincipalMessage />
        <NewsEvent />
        <Footer />
      </main>
    </div>
  );
}
