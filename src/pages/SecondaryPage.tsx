import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, GraduationCap, Target, Trophy, Laptop, Library, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { AdmissionForm } from "@/components/AdmissionForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-school.jpg";

const SecondaryPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt="Secondary School Students"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80 mix-blend-multiply" />
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
                        Secondary Wing
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                        Preparing for success. Excellence in academics and beyond. Classes 9 & 10.
                    </p>
                </div>
            </section>

            {/* Excellence Standards */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Pathway to <span className="text-gradient">Success</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Our Secondary program is rigorous and results-oriented, designed to prepare students for Board Examinations and future competitive challenges.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: BookOpen,
                                title: "Board Prep",
                                desc: "Intensive preparation for CBSE Board exams with regular mock tests and doubt-clearing sessions.",
                                color: "bg-blue-100 text-blue-600"
                            },
                            {
                                icon: Target,
                                title: "Career Guidance",
                                desc: "Counseling sessions to help students identify their strengths and choose the right career path.",
                                color: "bg-red-100 text-red-600"
                            },
                            {
                                icon: Calculator,
                                title: "Specialized Subjects",
                                desc: "In-depth study of Mathematics, Science, and Social Sciences with emphasis on conceptual application.",
                                color: "bg-purple-100 text-purple-600"
                            },
                            {
                                icon: Trophy,
                                title: "Competitive Coaching",
                                desc: "Foundation courses for JEE/NEET and other competitive exams integrated into the curriculum.",
                                color: "bg-green-100 text-green-600"
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

            {/* Infrastructure & Support */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h2 className="font-display text-3xl md:text-4xl font-bold">
                                Infrastructure for Excellence
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                        <Laptop className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Digital Smart Classrooms</h3>
                                        <p className="text-muted-foreground">Technology-enabled learning to make complex concepts easy to visualize and understand.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                                        <Library className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Resource-Rich Library</h3>
                                        <p className="text-muted-foreground">Extensive collection of reference books, journals, and digital resources.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
                                        <GraduationCap className="w-6 h-6 text-rose-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Mentorship Program</h3>
                                        <p className="text-muted-foreground">Dedicated mentors to guide students through academic pressure and personal growth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card p-8 rounded-3xl shadow-2xl border border-muted relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                            <div className="relative z-10">
                                <h3 className="font-display text-3xl font-bold mb-6">Secure Their Success</h3>
                                <p className="text-muted-foreground mb-8 text-lg">
                                    The deciding years of your child's education deserve the best support. Join our Secondary program.
                                </p>
                                <AdmissionForm>
                                    <Button size="xl" className="w-full text-lg">
                                        Enquire for Admissions
                                    </Button>
                                </AdmissionForm>
                                <div className="mt-6 text-center">
                                    <p className="text-sm text-muted-foreground">Contact Coordinator: <span className="font-bold text-foreground">+91 96084 05422, +91 861 832 9181</span></p>
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

export default SecondaryPage;
