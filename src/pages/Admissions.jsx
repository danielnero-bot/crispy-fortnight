import Navbar from '../components/Navbar';
import Hero from '../components/AdmissionsHero';
import WhyChooseUs from '../components/WhyChooseUs';
import AdmissionsProcess from '../components/AdmissionsProcess';
import EnquirySection from '../components/Enquiry';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface antialiased overflow-x-hidden pt-20">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <AdmissionsProcess />
        <EnquirySection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}