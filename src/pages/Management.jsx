import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ManagementHero from "../components/ManagementHero";
import ManagementTeam from "../components/ManagementTeam";
import ManagementValues from "../components/ManagementValues";
import ManagementCTA from "../components/ManagementCTA";

export default function ManagementPage() {
  return (
    <div className="bg-surface text-on-surface antialiased overflow-x-hidden">
      <Navbar />

      <main className="pt-[100px]">
        <ManagementHero />
        <ManagementTeam />
        <ManagementValues />
        <ManagementCTA />
      </main>

      <Footer />
    </div>
  );
}
