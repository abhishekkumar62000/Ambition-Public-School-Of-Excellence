import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
    return (
        <a
            href="https://chat.whatsapp.com/IIYx3WUopiOHCBBNZGeem5?mode=hqrt1"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[60] flex items-center gap-3 group animate-fade-up"
            style={{ animationDelay: "1s" }}
        >
            <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-green-100 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                <span className="text-sm font-bold text-green-600">Join our Community</span>
            </div>
            <div className="relative">
                <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl hover:shadow-green-200">
                    <MessageCircle className="w-8 h-8 text-white fill-white" />
                </div>
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                </span>
            </div>
        </a>
    );
}
