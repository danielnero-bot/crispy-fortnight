import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import HeritageImage from "../components/HeritageImage";
import OurStory from "../components/OurStory";
import Timeline from "../components/Timeline";
import MissionVision from "../components/MissionVision";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface antialiased overflow-x-hidden">
      <Navbar />

      <main className="pt-20 sm:pt-24 pb-12 sm:pb-20">
        <AboutHero />
        <HeritageImage />
        <OurStory />
        <Timeline />
        <MissionVision />
      </main>

      <Footer />
    </div>
  );
}