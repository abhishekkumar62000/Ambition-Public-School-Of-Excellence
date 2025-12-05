import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Music, Users, Palette, Brain, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { AdmissionForm } from "@/components/AdmissionForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-school.jpg";

const PrePrimaryPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt="Pre-Primary Education"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80 mix-blend-multiply" />
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
                        Pre-Primary Wing
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                        Where curiosity meets creativity. A nurturing foundation for ages 3-5 years.
                    </p>
                </div>
            </section>

            {/* Curriculum Highlights */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Why Choose Our <span className="text-gradient">Pre-Primary?</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Our curriculum is designed to foster holistic development through play-based learning and interactive experiences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Brain,
                                title: "Cognitive Development",
                                desc: "Activities designed to boost memory, attention, and problem-solving skills through fun puzzles and games.",
                                color: "bg-rose-100 text-rose-600"
                            },
                            {
                                icon: Users,
                                title: "Social Skills",
                                desc: "Group activities that teach sharing, empathy, and communication in a supportive environment.",
                                color: "bg-blue-100 text-blue-600"
                            },
                            {
                                icon: Palette,
                                title: "Creative Expression",
                                desc: "Art, craft, music, and dance sessions to help children express themselves freely.",
                                color: "bg-purple-100 text-purple-600"
                            },
                            {
                                icon: BookOpen,
                                title: "Language & Literacy",
                                desc: "Storytelling sessions and phonics designed to build a strong foundation for reading and writing.",
                                color: "bg-amber-100 text-amber-600"
                            },
                            {
                                icon: Heart,
                                title: "Emotional Growth",
                                desc: "Nurturing emotional intelligence and self-confidence through positive reinforcement.",
                                color: "bg-teal-100 text-teal-600"
                            },
                            {
                                icon: Star,
                                title: "Motor Skills",
                                desc: "Indoor and outdoor play to develop fine and gross motor skills essential for growth.",
                                color: "bg-indigo-100 text-indigo-600"
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

            {/* Levels */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-100">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-display text-2xl font-bold text-pink-700">Pre-Nursery</h3>
                                        <p className="text-pink-600 font-medium">Age: 2.5 - 3.5 Years</p>
                                    </div>
                                    <span className="text-4xl">🧸</span>
                                </div>
                                <p className="text-muted-foreground">Focuses on settling in, sensory play, and basic social interaction.</p>
                            </div>

                            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-display text-2xl font-bold text-blue-700">Nursery</h3>
                                        <p className="text-blue-600 font-medium">Age: 3.5 - 4.5 Years</p>
                                    </div>
                                    <span className="text-4xl">🎨</span>
                                </div>
                                <p className="text-muted-foreground">Introduction to structure, pre-writing skills, and numbers 1-10.</p>
                            </div>

                            <div className="p-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-display text-2xl font-bold text-green-700">Kindergarten (UKG)</h3>
                                        <p className="text-green-600 font-medium">Age: 4.5 - 5.5 Years</p>
                                    </div>
                                    <span className="text-4xl">📚</span>
                                </div>
                                <p className="text-muted-foreground">Advanced preparation for Class 1 with reading fluency and basic math.</p>
                            </div>
                        </div>

                        <div className="bg-card p-8 rounded-3xl shadow-2xl border border-muted relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
                            <div className="relative z-10">
                                <h3 className="font-display text-3xl font-bold mb-6">Start Their Journey</h3>
                                <p className="text-muted-foreground mb-8 text-lg">
                                    Admissions are open for the upcoming academic session. Give your child the best start at Ambition Public School of Excellence.
                                </p>
                                <AdmissionForm>
                                    <Button size="xl" className="w-full text-lg">
                                        Apply Now
                                    </Button>
                                </AdmissionForm>
                                <div className="mt-6 text-center">
                                    <p className="text-sm text-muted-foreground">Queries? Call us at <span className="font-bold text-foreground">+91 96084 05422, +91 861 832 9181</span></p>
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

export default PrePrimaryPage;
