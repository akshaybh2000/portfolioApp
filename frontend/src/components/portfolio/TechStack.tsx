import { motion } from "framer-motion";
import { Section, SectionHeading } from "./About";

const stack = [
    { name: "React.js", level: 95 },
    { name: "JavaScript", level: 92 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 86 },
    { name: "PostgreSQL", level: 84 },
    { name: "pgAdmin", level: 80 },
    { name: "GitHub", level: 92 },
    { name: "Vercel", level: 90 },
    { name: "Render", level: 82 },
    { name: "Firebase", level: 80 },
];

export function TechStack() {
    return (
        <Section id="stack">
            <SectionHeading
                eyebrow="Tech Stack"
                title="Tools I use to ship great products"
                subtitle="A modern, battle-tested toolkit for fast, scalable, and maintainable apps."
            />

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {stack.map((t, i) => (
                    <motion.div
                        key={t.name}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                        className="glass rounded-2xl p-5"
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-medium">{t.name}</span>
                            <span className="text-xs text-muted-foreground">{t.level}%</span>
                        </div>
                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-glass">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${t.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.1, ease: "easeOut" }}
                                className="h-full rounded-full bg-gradient-brand"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
