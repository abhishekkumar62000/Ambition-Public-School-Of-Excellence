import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Monitor, Trophy, Users, Globe, Brain, Calculator, Microscope } from "lucide-react";
import { Link } from "react-router-dom";
import { AdmissionForm } from "@/components/AdmissionForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-school.jpg";

const PrimaryPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt="Primary Education"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-800/80 mix-blend-multiply" />
                </div>

                <div className="container relative z-10 text-center px-4 animate-fade-up">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
                        Primary Wing
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                        Building strong foundations for academic excellence. Classes 1 to 5.
                    </p>
                </div>
            </section>

            {/* Curriculum Highlights */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Academic <span className="text-gradient">Excellence</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Our Primary curriculum is designed to encourage independent thinking, curiosity, and a love for learning through a blend of academics and co-curricular activities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: BookOpen,
                                title: "CBSE Curriculum",
                                desc: "A comprehensive curriculum compliant with CBSE standards, focusing on core subjects with a modern approach.",
                                color: "bg-blue-100 text-blue-600"
                            },
                            {
                                icon: Monitor,
                                title: "Computer Education",
                                desc: "Early exposure to computers and technology to build digital literacy from a young age.",
                                color: "bg-purple-100 text-purple-600"
                            },
                            {
                                icon: Calculator,
                                title: "Mathematics",
                                desc: "Focus on logical reasoning and problem-solving skills through practical applications of math.",
                                color: "bg-orange-100 text-orange-600"
                            },
                            {
                                icon: Microscope,
                                title: "General Science",
                                desc: "Hands-on experiments and observation-based learning to understand the world around us.",
                                color: "bg-green-100 text-green-600"
                            },
                            {
                                icon: Globe,
                                title: "Languages",
                                desc: "Emphasis on reading, writing, and communication skills in English, Hindi, and Sanskrit.",
                                color: "bg-teal-100 text-teal-600"
                            },
                            {
                                icon: Trophy,
                                title: "Sports & Arts",
                                desc: "Balanced development with regular periods for sports, music, dance, and art & craft.",
                                color: "bg-rose-100 text-rose-600"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-6`}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="font-display text-3xl md:text-4xl font-bold">
                                Methodology & Assessment
                            </h2>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                        <Brain className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Activity-Based Learning</h3>
                                        <p className="text-muted-foreground">We move beyond rote memorization. Concepts are taught through projects, models, and interactive activities.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <Users className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Continuous Assessment</h3>
                                        <p className="text-muted-foreground">Regular periodic tests and subject enrichment activities ensure consistent progress tracking without exam stress.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card p-8 rounded-3xl shadow-2xl border border-muted relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                            <div className="relative z-10">
                                <h3 className="font-display text-3xl font-bold mb-6">Join Our Primary Wing</h3>
                                <p className="text-muted-foreground mb-8 text-lg">
                                    Admissions for Class 1 to 5 are open. provide your child with an education that blends tradition with modernity.
                                </p>
                                <AdmissionForm>
                                    <Button size="xl" className="w-full text-lg">
                                        Apply for Admission
                                    </Button>
                                </AdmissionForm>
                                <div className="mt-6 text-center">
                                    <p className="text-sm text-muted-foreground">Questions? Call <span className="font-bold text-foreground">+91 96084 05422</span> or email <span className="font-bold text-foreground">admissions@ambitionschool.in</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrimaryPage;
