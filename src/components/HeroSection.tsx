import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";
import { AdmissionForm } from "@/components/AdmissionForm";
import { VirtualTour } from "@/components/VirtualTour";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ambition Public School Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-pattern opacity-90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-secondary/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-primary-foreground text-sm font-medium">
              CBSE Affiliated School
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up group cursor-default" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary-foreground">Welcome to </span>
            <div className="relative inline-block transition-transform duration-300 hover:scale-105">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent drop-shadow-sm">
                Ambition Public School
              </span>
              <svg className="absolute -bottom-2 left-0 w-full opacity-50" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--secondary))" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <br />
            <span className="text-primary-foreground">of Excellence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Nurturing young minds from <strong>Pre-Nursery to Class 10</strong> with excellence in education at Sonki, Pingi, Darbhanga
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary">10+</div>
              <div className="text-primary-foreground/70 text-sm">Years Legacy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary">3000+</div>
              <div className="text-primary-foreground/70 text-sm">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary">30+</div>
              <div className="text-primary-foreground/70 text-sm">Expert Teachers</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <AdmissionForm>
              <Button variant="hero" size="xl">
                Apply for Admission
              </Button>
            </AdmissionForm>
            <VirtualTour>
              <Button variant="heroOutline" size="xl" className="gap-3">
                <Play className="w-5 h-5 fill-current" />
                Virtual Tour
              </Button>
            </VirtualTour>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <span className="text-sm font-medium">Scroll Down</span>
        <ChevronDown className="w-5 h-5" />
      </a>

      <WhatsAppFloat />
    </section>
  );
};

export default HeroSection;
