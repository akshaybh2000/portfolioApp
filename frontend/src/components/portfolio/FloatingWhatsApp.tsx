import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-glow transition hover:scale-105"
        >
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-green-500/50" />
            <MessageCircle className="h-6 w-6" />
        </a>
    );
}
