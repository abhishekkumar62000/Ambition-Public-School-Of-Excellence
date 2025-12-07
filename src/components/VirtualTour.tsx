import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Play, Pause, ChevronRight, ChevronLeft, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";
import compusImage from "@/assets/compus.jpeg";
import ambitionSchoolImage from "@/assets/ambition school.png";
import compusImage2 from "@/assets/compus2.jpeg";
import campusImage3 from "@/assets/campus3.jpeg";
import babygirlImage from "@/assets/babygirl.jpeg";

interface VirtualTourProps {
    children: React.ReactNode;
}

const tourScenes = [
    {
        id: "campus",
        title: "Main Campus",
        description: "Our sprawling 5-acre campus with lush green gardens and modern architecture.",
        images: [babygirlImage, compusImage, ambitionSchoolImage, compusImage2, campusImage3],
        highlights: ["Administrative Block", "Assembly Square", "Botanical Garden"]
    },
    {
        id: "classrooms",
        title: "Smart Classrooms",
        description: "Tech-enabled learning spaces equipped with smart boards and ergonomic furniture.",
        image: heroImage,
        highlights: ["Interactive Whiteboards", "Air Conditioned", "Student Lockers"]
    },
    {
        id: "library",
        title: "Resource Centre",
        description: "A vast collection of over 10,000 books, digital resources, and quiet reading zones.",
        image: heroImage,
        highlights: ["Digital Catalog", "Reading Lounge", "Study Pods"]
    },
    {
        id: "labs",
        title: "Innovation Labs",
        description: "State-of-the-art Science, Computer, and Robotics laboratories for hands-on learning.",
        image: heroImage,
        highlights: ["Robotics Kit", "3D Printers", "Physics Lab"]
    },
    {
        id: "sports",
        title: "Sports Complex",
        description: "World-class facilities for cricket, football, basketball, and indoor games.",
        image: heroImage,
        highlights: ["Basketball Court", "Cricket Pitch", "Indoor Arena"]
    }
];

export function VirtualTour({ children }: VirtualTourProps) {
    const [open, setOpen] = useState(false);
    const [currentScene, setCurrentScene] = useState(0);
    const [currentSubImage, setCurrentSubImage] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying && open) {
            interval = setInterval(() => {
                setCurrentScene((prev) => (prev + 1) % tourScenes.length);
                setCurrentSubImage(0);
            }, 4000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, open]);

    useEffect(() => {
        // Reset sub-image when scene changes
        setCurrentSubImage(0);
    }, [currentScene]);

    const handleNext = () => {
        const scene: any = tourScenes[currentScene] as any;
        if (scene.images && Array.isArray(scene.images)) {
            if (currentSubImage < scene.images.length - 1) {
                setCurrentSubImage((prev) => prev + 1);
                return;
            }
        }
        setCurrentScene((prev) => (prev + 1) % tourScenes.length);
        setCurrentSubImage(0);
    };

    const handlePrev = () => {
        const scene: any = tourScenes[currentScene] as any;
        if (scene.images && Array.isArray(scene.images)) {
            if (currentSubImage > 0) {
                setCurrentSubImage((prev) => prev - 1);
                return;
            }
        }
        const nextScene = (currentScene - 1 + tourScenes.length) % tourScenes.length;
        setCurrentScene(nextScene);
        const prevScene: any = tourScenes[nextScene] as any;
        if (prevScene.images && Array.isArray(prevScene.images) && prevScene.images.length > 0) {
            setCurrentSubImage(prevScene.images.length - 1);
        } else {
            setCurrentSubImage(0);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 border-none bg-black/95 text-white overflow-hidden z-[100]">
                <div className="relative w-full h-full flex flex-col md:flex-row">

                    {/* Close Button */}
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full hover:bg-white/20 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Main Viewport */}
                    <div className="flex-1 relative overflow-hidden group">
                        {/* Scene Image */}
                        <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
                            {(() => {
                                const scene: any = tourScenes[currentScene] as any;
                                const currentImage = scene.images && Array.isArray(scene.images)
                                    ? scene.images[currentSubImage]
                                    : scene.image;
                                return (
                                    <img
                                        src={currentImage}
                                        alt={tourScenes[currentScene].title}
                                        className="w-full h-full object-contain object-center animate-scale-in"
                                        key={`${currentScene}-${currentSubImage}`}
                                    />
                                );
                            })()}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        </div>

                        {/* Navigation Controls */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        {/* Scene Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                            <div className="max-w-3xl animate-fade-up">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                                        Virtual Tour
                                    </span>
                                    <div className="flex items-center gap-2 text-white/80 text-sm">
                                        <MapPin className="w-4 h-4" />
                                        <span>Ambition Public School Campus</span>
                                    </div>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
                                    {tourScenes[currentScene].title}
                                </h2>
                                <p className="text-lg text-white/80 max-w-xl">
                                    {tourScenes[currentScene].description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Controls */}
                    <div className="w-full md:w-80 bg-zinc-900/90 backdrop-blur-md border-l border-white/10 flex flex-col">
                        <div className="p-6 border-b border-white/10">
                            <h3 className="font-display text-xl font-bold mb-1">Tour Map</h3>
                            <p className="text-xs text-white/50">Select a location to explore</p>
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            {tourScenes.map((scene, index) => (
                                <button
                                    key={scene.id}
                                    onClick={() => {
                                        setCurrentScene(index);
                                        setIsPlaying(false);
                                    }}
                                    className={`w-full text-left p-4 hover:bg-white/5 transition-colors border-l-4 ${currentScene === index ? "border-secondary bg-white/5" : "border-transparent"
                                        }`}
                                >
                                    <p className={`font-medium ${currentScene === index ? "text-secondary" : "text-white"}`}>
                                        {scene.title}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {scene.highlights.slice(0, 2).map(highlight => (
                                            <span key={highlight} className="text-[10px] bg-white/10 px-2 py-1 rounded text-white/70">
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="p-6 border-t border-white/10">
                            <Button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-full gap-2"
                                variant={isPlaying ? "destructive" : "default"}
                            >
                                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                {isPlaying ? "Pause Tour" : "Start Auto-Tour"}
                            </Button>
                        </div>
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    );
}
