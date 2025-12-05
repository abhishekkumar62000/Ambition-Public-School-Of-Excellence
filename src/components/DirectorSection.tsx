import { Quote } from "lucide-react";
import directorImage from "@/assets/School-Director.jpeg";

const DirectorSection = () => {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <div className="relative group order-2 lg:order-1">
                        <div className="absolute top-4 -left-4 w-full h-full bg-primary/10 rounded-3xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                        <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary/10 rounded-3xl -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={directorImage}
                                alt="Directors Rahul Yadav and Supriya Yadav"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
                                <h3 className="text-white font-display text-2xl font-bold">
                                    Supriya Yadav & Rahul Yadav
                                </h3>
                                <p className="text-white/80 font-medium">Directors</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="order-1 lg:order-2">
                        <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-4">
                            Leadership Vision
                        </span>
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
                            Guiding <span className="text-gradient">Future Leaders</span>
                        </h2>

                        <div className="relative">
                            <Quote className="absolute -top-4 -left-6 w-12 h-12 text-primary/10 rotate-180" />
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed relative z-10">
                                <p>
                                    At <span className="font-semibold text-foreground">Ambition Public School of Excellence</span>, we believe that education is not just about filling a bucket, but lighting a fire. Our vision is to create an environment where every child feels valued, challenged, and inspired to reach their full potential.
                                </p>
                                <p>
                                    We are committed to providing a holistic education that blends academic rigor with the development of character, creativity, and critical thinking. In a rapidly changing world, we aim to equip our students not just with knowledge, but with the adaptability and resilience to thrive.
                                </p>
                                <p>
                                    Together with our dedicated faculty and supportive parent community, we are shaping the leaders, innovators, and compassionate citizens of tomorrow.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 flex items-center gap-4">
                            <div className="h-px bg-border flex-1" />
                            <p className="font-handwriting text-4xl text-primary transform -rotate-2">
                                Rahul & Supriya
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DirectorSection;
