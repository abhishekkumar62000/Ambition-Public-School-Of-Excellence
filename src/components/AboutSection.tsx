import { BookOpen, Heart, Award, Users } from "lucide-react";
import schoolImage from "@/assets/hero-school.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Comprehensive CBSE curriculum designed to foster critical thinking and creativity",
    },
    {
      icon: Heart,
      title: "Holistic Development",
      description: "Focus on physical, emotional, and intellectual growth of every child",
    },
    {
      icon: Award,
      title: "Quality Education",
      description: "Experienced faculty committed to providing world-class education",
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "A supportive environment where every student feels valued and respected",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              About Our School
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Shaping Tomorrow's{" "}
              <span className="text-gradient">Leaders</span> Today
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Established with a vision to provide quality education, Ambition Public School of Excellence has been a beacon of learning in Sonki, Pingi, Darbhanga. We believe in nurturing each child's unique potential through innovative teaching methods and a caring environment.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our CBSE-affiliated curriculum ensures that students receive education that meets national standards while preparing them for future challenges. From Pre-Nursery to Class 10, we guide students at every step of their educational journey.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover-lift">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Our Mission</h3>
                  <p className="text-muted-foreground text-sm">To provide quality education that empowers students to achieve their full potential.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover-lift">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌟</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Our Vision</h3>
                  <p className="text-muted-foreground text-sm">To be a leading institution that inspires lifelong learning and global citizenship.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl transform rotate-3 scale-105 group-hover:rotate-0 transition-all duration-300" />
            <img
              src={schoolImage}
              alt="Ambition Public School Campus"
              className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card animate-float hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground">Top Rated</p>
                  <p className="text-sm text-muted-foreground">CBSE School</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid - Now Full Width */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-6 rounded-2xl bg-card shadow-card hover-lift card-shine"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
