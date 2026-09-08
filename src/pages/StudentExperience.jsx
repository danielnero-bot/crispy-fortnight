import Navbar from "../components/Navbar";
import BoardingHero from "../components/BoardingHero";
import HouseSystem from "../components/HouseSystem";
import BentoGrid from "../components/BentoGrid";
import ClubsActivities from "../components/ClubsActivities";
import FacilitiesPreview from "../components/FacilitiesPreview";
import CtaSection from "../components/CTAsection";
import Footer from "../components/Footer";

export default function StudentExperience() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <BoardingHero />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HouseSystem />
          <BentoGrid />
          <ClubsActivities />
        </div>
        <FacilitiesPreview />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}