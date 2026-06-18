import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Section, SectionHeading } from "./About";

const items = [
    { name: "Ananya Sharma", role: "Founder, BloomCafe", text: "Pranaksh delivered our restaurant site faster than expected — and it looks stunning. Bookings are up 40%." },
    { name: "Rahul Verma", role: "CEO, FitForge Gym", text: "From design to deployment, the experience was smooth. The team really cares about quality." },
    { name: "Priya Iyer", role: "Director, EduPrime", text: "Our student management system is now a joy to use. Incredible attention to detail." },
    { name: "Karan Mehta", role: "Co-founder, SlotEasy", text: "The booking platform they built is fast, beautiful, and rock-solid. Highly recommended." },
];

export function Testimonials() {
    const [idx, setIdx] = useState(0);
    const t = items[idx];
    return (
        <Section id="testimonials">
            <SectionHeading
                eyebrow="Testimonials"
                title="Loved by founders & teams"
                subtitle="Real words from clients we've shipped with."
            />

            <div className="relative mx-auto mt-16 max-w-3xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={t.name}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        className="glass-strong relative rounded-3xl p-8 sm:p-12"
                    >
                        <Quote className="absolute -top-5 left-8 h-10 w-10 text-gradient" />
                        <div className="flex gap-1 text-amber-400">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                        </div>
                        <p className="mt-4 text-lg leading-relaxed text-foreground/90 sm:text-xl">
                            "{t.text}"
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-brand font-semibold text-primary-foreground">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <div className="font-semibold">{t.name}</div>
                                <div className="text-xs text-muted-foreground">{t.role}</div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="mt-6 flex items-center justify-center gap-3">
                    <button
                        onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)}
                        className="glass grid h-10 w-10 place-items-center rounded-full hover:bg-glass-border"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    <div className="flex gap-2">
                        {items.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIdx(i)}
                                className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-gradient-brand" : "w-2 bg-glass-border"
                                    }`}
                                aria-label={`Go to ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setIdx((i) => (i + 1) % items.length)}
                        className="glass grid h-10 w-10 place-items-center rounded-full hover:bg-glass-border"
                        aria-label="Next"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </Section>
    );
}
