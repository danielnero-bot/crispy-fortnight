import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import HeritageImage from "../components/HeritageImage";
import OurStory from "../components/OurStory";
import Timeline from "../components/Timeline";
import MissionVision from "../components/MissionVision";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden">
      <Navbar />

      <main className="pt-[100px] pb-section-padding">
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