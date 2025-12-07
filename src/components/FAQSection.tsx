import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HelpCircle, ListCollapse, ListPlus, Phone, Mail, MessageSquare } from "lucide-react";
import { useMemo, useState } from "react";

const FAQSection = () => {
    const faqs = [
        {
            question: "What is the admission procedure?",
            answer:
                "Admissions are open from Pre-Nursery to Class 9. Parents need to fill out the registration form available online or at the school office. For higher classes, a basic interaction/assessment is conducted.",
            category: "Admissions",
            links: [
                { label: "Apply Online", href: "#home" },
                { label: "Prospectus (PDF)", href: "/docs/prospectus.pdf" },
            ],
        },
        {
            question: "Do you provide transport facilities?",
            answer:
                "Yes, we have a fleet of safe, GPS-enabled buses covering Sonki, Pingi, Darbhanga, and surrounding areas. Each bus has a trained attendant for student safety.",
            category: "Transport",
        },
        {
            question: "What is the student-teacher ratio?",
            answer:
                "We maintain a healthy student-teacher ratio of 20:1 to ensure that every child gets individual attention and mentorship.",
            category: "Academics",
        },
        {
            question: "Are there extra-curricular activities?",
            answer:
                "Absolutely! We focus on holistic development with facilities for Sports (Indoor/Outdoor), Music, Dance, Art & Craft, and a dedicated Debate Club and Science Club.",
            category: "Activities",
        },
        {
            question: "Is the campus secure?",
            answer:
                "The safety of our students is paramount. The entire campus is under 24/7 CCTV surveillance, and we have deployed trained security personnel at all entry/exit points.",
            category: "Facilities",
        },
    ];

    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [openItems, setOpenItems] = useState<string[]>([]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        const byCategory = faqs
            .map((_, i) => `item-${i}`)
            .filter((key, i) => activeCategory === "All" || faqs[i].category === activeCategory);
        if (!q) return byCategory;
        const byQuery = faqs
            .map((f, i) => ({ key: `item-${i}`, match: (f.question + " " + f.answer).toLowerCase().includes(q) }))
            .filter((x) => x.match)
            .map((x) => x.key);
        return byCategory.filter((k) => byQuery.includes(k));
    }, [query, faqs, activeCategory]);

    const allKeys = faqs.map((_, i) => `item-${i}`);

    const toggleAll = () => {
        setOpenItems((prev) => (prev.length === allKeys.length ? [] : allKeys));
    };

    const categories = useMemo(() => ["All", ...Array.from(new Set(faqs.map((f) => f.category)))], [faqs]);

    const highlight = (text: string) => {
        const q = query.trim();
        if (!q) return text;
        const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig");
        return text.split(regex).map((part, i) =>
            regex.test(part) ? (
                <mark key={i} className="bg-yellow-200 text-foreground px-0.5 rounded">{part}</mark>
            ) : (
                <span key={i}>{part}</span>
            )
        );
    };

    return (
        <section className="py-16 md:py-20 bg-background" id="faqs">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 text-primary mb-3 md:mb-4">
                        <HelpCircle className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h2 className="font-display text-2xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg">
                        Common queries about our admissions, facilities, and culture.
                    </p>
                </div>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch sm:items-center mb-6">
                    <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search questions..."
                        className="h-10 md:h-11"
                    />
                    <Button onClick={toggleAll} variant="secondary" className="h-10 md:h-11">
                        {openItems.length === allKeys.length ? (
                            <span className="inline-flex items-center gap-2"><ListCollapse className="w-4 h-4" /> Collapse all</span>
                        ) : (
                            <span className="inline-flex items-center gap-2"><ListPlus className="w-4 h-4" /> Expand all</span>
                        )}
                    </Button>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-muted text-muted-foreground hover:bg-muted/70"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="w-full space-y-3 md:space-y-4">
                    {faqs.map((faq, index) => {
                        const key = `item-${index}`;
                        if (!filtered.includes(key)) return null;
                        return (
                            <AccordionItem key={key} value={key} className="border rounded-xl px-3 md:px-4 bg-card shadow-sm">
                                <AccordionTrigger className="text-base md:text-lg font-medium hover:text-primary transition-colors py-3 md:py-4">
                                    <span className="inline-flex items-center gap-2">
                                        <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{faq.category}</span>
                                        {highlight(faq.question) as any}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-3 md:pb-4 space-y-3">
                                    <p>{highlight(faq.answer) as any}</p>
                                    {/* Helpful links */}
                                    {faq.links && (
                                        <div className="flex flex-wrap gap-2">
                                            {faq.links.map((l) => (
                                                <a key={l.label} href={l.href} className="text-sm underline underline-offset-4 hover:text-primary">
                                                    {l.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                    {/* Quick contact chips */}
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        <a href="tel:+918618329181" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs">
                                            <Phone className="w-3.5 h-3.5" /> +91 861 832 9181
                                        </a>
                                        <a href="mailto:info@ambitionpublicschool.edu" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs">
                                            <Mail className="w-3.5 h-3.5" /> info@ambitionpublicschool.edu
                                        </a>
                                        <a href="https://wa.me/918618329181" target="_blank" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs">
                                            <MessageSquare className="w-3.5 h-3.5" /> WhatsApp: +91 861 832 9181
                                        </a>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>

                {filtered.length === 0 && (
                    <div className="text-center text-muted-foreground mt-6">No questions match your search.</div>
                )}
            </div>
        </section>
    );
};

export default FAQSection;
