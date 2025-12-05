import { 
  Building, 
  Microscope, 
  BookOpen, 
  Bus, 
  Shield, 
  Wifi, 
  Utensils, 
  Trophy 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Building,
      title: "Modern Infrastructure",
      description: "Spacious classrooms with smart boards and modern amenities",
    },
    {
      icon: Microscope,
      title: "Science Laboratories",
      description: "Well-equipped physics, chemistry, and biology labs",
    },
    {
      icon: BookOpen,
      title: "Digital Library",
      description: "Extensive collection of books and digital resources",
    },
    {
      icon: Bus,
      title: "Transport Facility",
      description: "Safe and comfortable bus service covering all areas",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "CCTV surveillance and trained security personnel",
    },
    {
      icon: Wifi,
      title: "Smart Classrooms",
      description: "Wi-Fi enabled campus with digital learning tools",
    },
    {
      icon: Utensils,
      title: "Hygienic Cafeteria",
      description: "Nutritious meals prepared in clean facilities",
    },
    {
      icon: Trophy,
      title: "Sports Complex",
      description: "Indoor and outdoor sports facilities for all students",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            World-Class <span className="text-gradient">Facilities</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide everything your child needs to learn, grow, and excel in a safe and nurturing environment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: "100%", label: "Board Results", sublabel: "Consistent Excellence" },
            { number: "50+", label: "Activities", sublabel: "Co-curricular Programs" },
            { number: "1:20", label: "Teacher Ratio", sublabel: "Personal Attention" },
            { number: "98%", label: "Parent Satisfaction", sublabel: "Happy Families" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="font-semibold text-lg mb-1">{stat.label}</div>
              <div className="text-primary-foreground/70 text-sm">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
