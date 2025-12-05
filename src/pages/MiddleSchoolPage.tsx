import { Button } from "@/components/ui/button";
import { ArrowLeft, Microscope, Languages, Brain, Sparkles, BookCheck, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { AdmissionForm } from "@/components/AdmissionForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-school.jpg";

const MiddleSchoolPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt="Middle School Building"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-emerald-800/80 mix-blend-multiply" />
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
                        Middle School
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                        Fostering critical thinking and innovation. Classes 6 to 8.
                    </p>
                </div>
            </section>

            {/* Academic Focus */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Expanding <span className="text-gradient">Horizons</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Our Middle School program bridges the gap between primary education and specialized secondary studies, emphasizing analytical skills and concept clarity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Microscope,
                                title: "Science Labs",
                                desc: "Practical hands-on experiments in dedicated Physics, Chemistry, and Biology labs.",
                                color: "bg-teal-100 text-teal-600"
                            },
                            {
                                icon: Languages,
                                title: "Language Proficiency",
                                desc: "Advanced communication in English, Hindi, and Sanskrit with focus on literature and grammar.",
                                color: "bg-indigo-100 text-indigo-600"
                            },
                            {
                                icon: Brain,
                                title: "Critical Thinking",
                                desc: "Problem-solving methodology integrated into Mathematics and Social Sciences.",
                                color: "bg-amber-100 text-amber-600"
                            },
                            {
                                icon: Sparkles,
                                title: "Life Skills",
                                desc: "Workshops on leadership, time management, and emotional intelligence.",
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

            {/* Co-Curricular */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 bg-card p-8 rounded-3xl shadow-2xl border border-muted relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                            <div className="relative z-10">
                                <h3 className="font-display text-3xl font-bold mb-6">Invest in Their Future</h3>
                                <p className="text-muted-foreground mb-8 text-lg">
                                    Prepare your child for the challenges of tomorrow. Admissions available for Classes 6-8.
                                </p>
                                <AdmissionForm>
                                    <Button size="xl" className="w-full text-lg">
                                        Apply for Admission
                                    </Button>
                                </AdmissionForm>
                                <div className="mt-6 text-center">
                                    <p className="text-sm text-muted-foreground">Admissions Helpline: <span className="font-bold text-foreground">+91 96084 05422, +91 861 832 9181</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-8">
                            <h2 className="font-display text-3xl md:text-4xl font-bold">
                                Holistic Development
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                                        <BookCheck className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Advanced Syllabus</h3>
                                        <p className="text-muted-foreground">Rigorous academic curriculum aligned with CBSE to ensure strong subject mastery.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                                        <Users className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Clubs & Societies</h3>
                                        <p className="text-muted-foreground">Participation in Science Club, Eco Club, Debate Society, and more.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                                        <Globe className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Computer Education</h3>
                                        <p className="text-muted-foreground">Practical coding, internet safety, and software skills.</p>
                                    </div>
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

export default MiddleSchoolPage;
