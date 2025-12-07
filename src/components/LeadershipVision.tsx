import React from "react";
import chairmanImg from "@/assets/Chairman.jpg";

const LeadershipVision: React.FC = () => {
  return (
    <section id="leadership" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold tracking-wider">Leadership Vision</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">Guiding Future Leaders</h2>
          <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">
            A message of encouragement and vision from our Chairman to all parents and students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Chairman Image */}
          <div className="md:col-span-1">
            <div className="group rounded-lg overflow-hidden border border-border bg-black flex items-center justify-center relative">
              {/* Animated glow */}
              <div className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity">
                <div className="absolute -inset-6 bg-gradient-to-tr from-secondary/30 via-accent/20 to-secondary/30 blur-2xl animate-pulse-slow" />
              </div>

              {/* Image with interactive animation */}
              <img
                src={chairmanImg}
                alt="Chairman: Prof. Surendra Mohan Yadav"
                className="max-w-full max-h-[360px] object-contain transform transition-transform duration-300 group-hover:scale-[1.03] group-hover:rotate-[0.5deg]"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold">Prof. Surendra Mohan Yadav</h3>
              <p className="text-sm text-muted-foreground">Chairman, Ambition Public School</p>
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <div className="rounded-lg border border-border bg-background p-6 md:p-8 shadow-sm">
              <h4 className="font-display text-xl md:text-2xl font-bold mb-3">Message to Parents and Students</h4>
              <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  Dear Parents and Students, it is my pleasure to extend a warm greeting to our vibrant school community.
                  Ambition Public School strives to nurture curiosity, character, and competence. Together, we build a
                  learning environment where every child feels supported, confident, and inspired to achieve excellence.
                </p>
                <p>
                  I encourage our students to dream boldly, work diligently, and grow with humility. Embrace challenges as
                  opportunities, celebrate your unique talents, and respect those around you. To parents, thank you for
                  your trust and partnership—your involvement strengthens the foundation of our children’s success.
                </p>
                <p>
                  May this journey be filled with purpose, joy, and lifelong learning. Together, we will shape responsible
                  citizens and future leaders who contribute meaningfully to society.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-6">
                <div className="text-right">
                  <p className="italic text-sm text-muted-foreground">Sincerely,</p>
                  <p className="font-signature text-2xl md:text-3xl">Prof. Surendra Mohan Yadav</p>
                  <p className="text-xs text-muted-foreground">Chairman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipVision;
