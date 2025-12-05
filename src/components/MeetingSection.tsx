import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, UserCheck } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const MeetingSection = () => {
    return (
        <section className="py-20 bg-primary/5 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    {/* Background Patterns */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                            Schedule a Visit
                        </h2>
                        <p className="text-white/90 text-lg mb-8 leading-relaxed">
                            We'd love to show you around! Book a personalized meeting with our academic counselors to discuss your child's future at Ambition Public School.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                                <CalendarDays className="w-8 h-8 mb-3 text-secondary" />
                                <h3 className="font-bold text-lg mb-1">Pick a Date</h3>
                                <p className="text-sm text-white/80">Choose a day that works best for you.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                                <Clock className="w-8 h-8 mb-3 text-secondary" />
                                <h3 className="font-bold text-lg mb-1">Select Time</h3>
                                <p className="text-sm text-white/80">Available slots from 9 AM to 4 PM.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                                <UserCheck className="w-8 h-8 mb-3 text-secondary" />
                                <h3 className="font-bold text-lg mb-1">Meet Experts</h3>
                                <p className="text-sm text-white/80">1-on-1 interaction with our team.</p>
                            </div>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="xl" variant="secondary" className="font-bold text-primary hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    Book Appointment Now
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl h-[80vh] p-0 overflow-hidden bg-background">
                                <DialogHeader className="px-6 py-4 border-b">
                                    <DialogTitle>Schedule Your Visit</DialogTitle>
                                </DialogHeader>
                                <div className="w-full h-full">
                                    <iframe
                                        src="https://calendly.com/d/cwpn-nhh-s4t/ambition-public-school-metting?name=Abhi+Yadav&email=abhiydv23096%40gmail.com&hide_gdpr_banner=1"
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        title="Schedule Meeting"
                                        className="min-h-[600px]"
                                    ></iframe>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeetingSection;
