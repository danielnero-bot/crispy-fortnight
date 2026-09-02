import Navbar from "../components/Navbar";
import AcademicHero from "../components/AcademicHero";
import ProgramsGrid from "../components/Programsgrid";
import PhilosophySection from "../components/PhilosophySection";
import LearningEnvironment from "../components/Learningenvironment";
import Footer from "../components/Footer";

export default function Academics() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-surface text-on-surface">
      <Navbar />

      <main className="pt-20">
        <AcademicHero />
        <ProgramsGrid />
        <PhilosophySection />
        <LearningEnvironment />
      </main>

      <Footer />
    </div>
  );
}
