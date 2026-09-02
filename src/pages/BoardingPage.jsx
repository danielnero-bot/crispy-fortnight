import Navbar from "../components/Navbar";
import BoardingHero from "../components/BoardingHero";
import HouseSystem from "../components/HouseSystem";
import BentoGrid from "../components/BentoGrid";
import FacilitiesPreview from "../components/FacilitiesPreview";
import CtaSection from "../components/CTAsection";
import Footer from "../components/Footer";

export default function BoardingPage() {
  return (
    <div className="bg-stone-50 text-slate-900 font-sans antialiased">
      <Navbar />
      <main>
        <BoardingHero />
        <HouseSystem />
        <BentoGrid />
        <FacilitiesPreview />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
