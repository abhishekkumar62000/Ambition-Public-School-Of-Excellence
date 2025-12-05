import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
import { AdmissionForm } from "@/components/AdmissionForm";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg leading-tight ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
                Ambition Public School of Excellence
              </span>
              <span className={`text-xs font-medium ${isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"}`}>
                CBSE School
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-300 hover:text-secondary ${isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
              >
                {link.name}
              </a>
            ))}
            <AdmissionForm>
              <Button variant="hero" size="lg">
                Admissions Open
              </Button>
            </AdmissionForm>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-card shadow-card-hover animate-fade-up">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-foreground py-2 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <AdmissionForm>
                <Button variant="hero" size="lg" className="mt-2">
                  Admissions Open
                </Button>
              </AdmissionForm>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
