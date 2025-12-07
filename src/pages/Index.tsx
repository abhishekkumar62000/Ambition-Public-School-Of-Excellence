import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NoticeTicker from "@/components/NoticeTicker";
import AboutSection from "@/components/AboutSection";
import LeadershipVision from "@/components/LeadershipVision";
import DirectorSection from "@/components/DirectorSection";
import AcademicsSection from "@/components/AcademicsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import MeetingSection from "@/components/MeetingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import EnrollmentTicker from "@/components/EnrollmentTicker";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <EnrollmentTicker />
        <NoticeTicker />
        <HeroSection />
        <AboutSection />
        <LeadershipVision />
        <DirectorSection />
        <AcademicsSection />
        <FeaturesSection />
        <TestimonialSection />
        <FAQSection />
        <MeetingSection />
        {/* Gallery CTA Section placed above Contact */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-3">Ambition Public School Gallery</h2>
            <p className="text-muted-foreground mb-6">See moments from our annual functions, cultural events, and student life.</p>
            <Link to="/gallery" className="inline-block px-6 py-3 rounded-md bg-secondary text-secondary-foreground hover:opacity-90 transition">
              Open Gallery
            </Link>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
