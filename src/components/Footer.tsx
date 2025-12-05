import { GraduationCap, Facebook, Instagram, Twitter, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Admissions", href: "#contact" },
    { name: "Facilities", href: "#features" },
    { name: "Contact", href: "#contact" },
  ];

  const resources = [
    { name: "Academic Calendar", href: "#" },
    { name: "Fee Structure", href: "#" },
    { name: "Student Portal", href: "#" },
    { name: "Parent Login", href: "#" },
    { name: "Gallery", href: "#" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground relative">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight">
                  Ambition Public School of Excellence
                </span>
                <span className="text-xs text-primary-foreground/70">
                  CBSE School
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Nurturing young minds and shaping future leaders through quality education, holistic development, and a caring environment.
            </p>
            {/* Social Links */}
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/people/Ambition-Public-school-of-Excellence/100093245604855/" },
                { Icon: Instagram, href: "https://www.instagram.com/ambitionpublicschool14/" },
                { Icon: Youtube, href: "https://youtube.com/@ambitionpublicschool2016?si=wF2VXtiaoDfuo1fv" }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Stay Updated</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Subscribe to our newsletter for latest news and updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors duration-300 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2024 Ambition Public School of Excellence, Sonki, Pingi, Darbhanga. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-xl bg-primary shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors duration-300 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-primary-foreground" />
      </button>
    </footer>
  );
};

export default Footer;
