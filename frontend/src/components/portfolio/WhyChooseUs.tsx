import { motion } from "framer-motion";
import { Sparkles, Zap, Smartphone, Search, BadgeIndianRupee, Headphones } from "lucide-react";
import { Section, SectionHeading } from "./About";

const items = [
    { Icon: Sparkles, title: "Modern UI", desc: "Clean, premium interfaces with thoughtful details." },
    { Icon: Zap, title: "Fast Delivery", desc: "Tight timelines without compromising quality." },
    { Icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect on every screen size." },
    { Icon: Search, title: "SEO Friendly", desc: "Built to be found and crawled efficiently." },
    { Icon: BadgeIndianRupee, title: "Affordable Pricing", desc: "Transparent, startup-friendly packages." },
    { Icon: Headphones, title: "Technical Support", desc: "Reliable post-launch help when you need it." },
];

export function WhyChooseUs() {
    return (
        <Section id="why">
            <SectionHeading
                eyebrow="Why Us"
                title="Why teams choose Pranaksh"
                subtitle="A focused studio that ships premium products on time, on budget."
            />

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((it, i) => (
                    <motion.div
                        key={it.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="glass group rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
                    >
                        <div className="grid h-12 w-12 place-items-center rounded-xl bg-glass text-gradient transition group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                            <it.Icon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
