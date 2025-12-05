import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DirectorSection from "@/components/DirectorSection";
import AcademicsSection from "@/components/AcademicsSection";
import FeaturesSection from "@/components/FeaturesSection";
import MeetingSection from "@/components/MeetingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <DirectorSection />
        <AcademicsSection />
        <FeaturesSection />
        <MeetingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
