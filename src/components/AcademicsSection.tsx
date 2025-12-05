import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AcademicsSection = () => {
  const programs = [
    {
      level: "Pre-Primary",
      classes: "Pre-Nursery to UKG",
      age: "3-5 years",
      color: "from-pink-500 to-rose-500",
      features: ["Play-based Learning", "Motor Skills Development", "Basic Numeracy & Literacy", "Creative Activities"],
      emoji: "🎨",
    },
    {
      level: "Primary",
      classes: "Class 1 to 5",
      age: "6-10 years",
      color: "from-primary to-accent",
      features: ["CBSE Curriculum", "Activity-based Learning", "Computer Education", "Sports & Arts"],
      emoji: "📚",
    },
    {
      level: "Middle School",
      classes: "Class 6 to 8",
      age: "11-13 years",
      color: "from-accent to-teal-500",
      features: ["Advanced CBSE Syllabus", "Science Labs", "Language Proficiency", "Life Skills Education"],
      emoji: "🔬",
    },
    {
      level: "Secondary",
      classes: "Class 9 to 10",
      age: "14-16 years",
      color: "from-secondary to-amber-500",
      features: ["Board Exam Preparation", "Career Guidance", "Subject Specialization", "Competitive Exam Coaching"],
      emoji: "🎓",
    },
  ];

  return (
    <section id="academics" className="py-20 md:py-32 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-4 h-4 rounded-full bg-primary" />
        <div className="absolute top-40 right-40 w-6 h-6 rounded-full bg-secondary" />
        <div className="absolute bottom-20 left-1/3 w-3 h-3 rounded-full bg-accent" />
        <div className="absolute bottom-40 right-20 w-5 h-5 rounded-full bg-primary" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Our Programs
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Academic <span className="text-gradient">Excellence</span> at Every Level
          </h2>
          <p className="text-muted-foreground text-lg">
            From the first steps of learning to preparing for board examinations, we provide comprehensive education tailored to each age group.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.level}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-r ${program.color} flex items-center justify-center relative`}>
                <span className="text-6xl">{program.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent bottom-0 h-8" style={{ top: 'auto' }} />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {program.level}
                  </h3>
                  <p className="text-primary font-semibold text-sm">{program.classes}</p>
                  <p className="text-muted-foreground text-xs">Age: {program.age}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {index === 0 ? (
                  <Link to="/programs/pre-primary">
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                ) : index === 1 ? (
                  <Link to="/programs/primary">
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                ) : index === 2 ? (
                  <Link to="/programs/middle-school">
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                ) : index === 3 ? (
                  <Link to="/programs/secondary">
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                ) : (
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            Download Curriculum Guide
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
