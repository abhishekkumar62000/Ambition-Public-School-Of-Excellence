import { useEffect, useMemo, useRef, useState } from "react";
import { Bell, Pause, Play, Star } from "lucide-react";

type Notice = {
    id: number | string;
    text: string;
    date?: string;
    priority?: "high" | "medium" | "info";
    url?: string;
};

const NoticeTicker = () => {
    const [notices, setNotices] = useState<Notice[]>([]);
    const [isPaused, setIsPaused] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        const load = async () => {
            try {
                const res = await fetch("/notices.json", { cache: "no-store" });
                if (!res.ok) throw new Error(`Failed to load notices (${res.status})`);
                const data: Notice[] = await res.json();
                if (!cancelled) setNotices(data);
            } catch (e) {
                if (!cancelled) {
                    setError("Unable to fetch latest notices. Showing defaults.");
                    setNotices([
                        { id: 1, text: "🎓 Admissions Open for Session 2025-26 — Apply Now!", priority: "high" },
                        { id: 2, text: "🏆 Annual Sports Day scheduled for 15th December", priority: "medium" },
                        { id: 3, text: "✨ Scholarship Test for Class 6–9 on 20th January", priority: "high" },
                        { id: 4, text: "📚 New Robotics Lab inauguration by District Magistrate", priority: "info" },
                    ]);
                }
            }
        };
        load();
        return () => {
            cancelled = true;
        };
    }, []);

    const containerRef = useRef<HTMLDivElement>(null);

    const animationDuration = useMemo(() => {
        const base = 20; // seconds
        const factor = Math.min(2.5, Math.max(1, (notices?.length || 1) / 3));
        return `${base * factor}s`;
    }, [notices]);

    return (
        <div className="sticky top-20 bg-primary text-primary-foreground py-2 md:py-3 relative overflow-hidden flex items-center z-40 shadow-md border-y border-primary/25" aria-live="polite">
            <div className="container mx-auto px-3 md:px-4 flex items-center gap-2 md:gap-4">
                {/* Label - Hidden on very small screens to save space */}
                <div className="bg-accent text-accent-foreground px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider hidden sm:flex items-center gap-1.5 flex-shrink-0 z-10 shadow-sm">
                    <Bell className="w-3 h-3" />
                    Latest Updates
                </div>

                {/* Now Pill (subtle) */}
                <div className="hidden md:flex items-center text-xs font-semibold text-primary-foreground/90 bg-primary/30 rounded-full px-2 py-0.5">
                    Now!
                </div>

                {/* Scrolling Ticker */}
                <div ref={containerRef} className="flex-1 overflow-hidden relative group cursor-pointer">
                    <div
                        className={`whitespace-nowrap flex gap-10 md:gap-12 items-center ${isPaused ? "[animation-play-state:paused]" : "animate-marquee"}`}
                        style={{ animationDuration }}
                    >
                        {[...(notices || []), ...(notices || [])].map((notice, index) => (
                            <a
                                key={`${notice.id}-${index}`}
                                href={notice.url || "#"}
                                className="inline-flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded-sm"
                            >
                                <Star className={`w-3 h-3 ${notice.priority === "high" ? "text-destructive" : "text-accent"}`} />
                                <span className="truncate max-w-[60vw] sm:max-w-[70vw] md:max-w-none">{notice.text}</span>
                            </a>
                        ))}
                    </div>

                    {/* Gradients for smooth fade edges */}
                    <div className="pointer-events-none absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-primary to-transparent z-10" />
                    <div className="pointer-events-none absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-primary to-transparent z-10" />
                </div>

                {/* Controls */}
                <button
                    aria-label={isPaused ? "Play ticker" : "Pause ticker"}
                    onClick={() => setIsPaused((p) => !p)}
                    className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/30 hover:bg-primary/40 transition-colors"
                >
                    {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                </button>
            </div>

            {/* Error note (subtle) */}
            {error && (
                <div className="sr-only" role="status">{error}</div>
            )}
        </div>
    );
};

export default NoticeTicker;
