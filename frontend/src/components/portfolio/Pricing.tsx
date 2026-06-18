import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "./About";

const plans = [
    {
        name: "Starter",
        price: "₹4,999",
        desc: "Perfect for a clean professional online presence.",
        features: ["Responsive Website", "3–5 Pages", "Contact Form", "Mobile Friendly"],
        cta: "Get Started",
        highlight: false,
    },
    {
        name: "Professional",
        price: "₹9,999",
        desc: "For growing businesses needing more power.",
        features: ["React Website", "Admin Panel", "Database Integration", "SEO Basics"],
        cta: "Most Popular",
        highlight: true,
    },
    {
        name: "Premium",
        price: "₹24,999+",
        desc: "Full custom systems built to scale.",
        features: [
            "Full Custom System",
            "Admin Dashboard",
            "Authentication",
            "API Integration",
            "Database",
            "Deployment Support",
        ],
        cta: "Talk to Us",
        highlight: false,
    },
];

export function Pricing() {
    return (
        <Section id="pricing">
            <SectionHeading
                eyebrow="Pricing"
                title="Simple, transparent pricing"
                subtitle="Choose a package that fits your stage — upgrade anytime as you grow."
            />

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
                {plans.map((p, i) => (
                    <motion.div
                        key={p.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className={`relative rounded-3xl p-7 ${p.highlight
                                ? "border-gradient bg-gradient-to-br from-brand/15 to-brand-2/10 shadow-glow"
                                : "glass"
                            }`}
                    >
                        {p.highlight && (
                            <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
                                <Sparkles className="h-3 w-3" /> Most Popular
                            </span>
                        )}
                        <h3 className="text-lg font-semibold">{p.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                        <div className="mt-6 flex items-end gap-1">
                            <span className="text-4xl font-bold text-gradient">{p.price}</span>
                        </div>
                        <ul className="mt-6 space-y-3">
                            {p.features.map((f) => (
                                <li key={f} className="flex items-center gap-2 text-sm">
                                    <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
                                        <Check className="h-3 w-3" />
                                    </span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#contact"
                            className={`mt-8 block w-full rounded-xl px-4 py-3 text-center text-sm font-medium transition ${p.highlight
                                    ? "bg-gradient-brand text-primary-foreground hover:opacity-90"
                                    : "glass hover:bg-glass-border"
                                }`}
                        >
                            {p.cta}
                        </a>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
