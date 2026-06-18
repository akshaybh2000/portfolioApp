import { motion } from "framer-motion";
import { Search, Palette, Code, Database, TestTube2, Rocket, LifeBuoy } from "lucide-react";
import { Section, SectionHeading } from "./About";

const steps = [
    { Icon: Search, title: "Requirement Analysis", desc: "Deep-dive into goals, users, and constraints." },
    { Icon: Palette, title: "UI/UX Design", desc: "Wireframes, prototypes, and pixel-perfect UI." },
    { Icon: Code, title: "Development", desc: "Clean, scalable code with modern tooling." },
    { Icon: Database, title: "API & Database", desc: "Robust APIs and well-modeled databases." },
    { Icon: TestTube2, title: "Testing", desc: "Manual + automated QA across devices." },
    { Icon: Rocket, title: "Deployment", desc: "CI/CD, custom domains, and analytics setup." },
    { Icon: LifeBuoy, title: "Maintenance", desc: "Ongoing support, updates, and improvements." },
];

export function Process() {
    return (
        <Section id="process">
            <SectionHeading
                eyebrow="Process"
                title="How we build, step by step"
                subtitle="A transparent workflow designed to ship great products without surprises."
            />

            <div className="relative mt-16">
                <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-glass-border to-transparent lg:block" />
                <div className="space-y-6 lg:space-y-10">
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`relative grid items-center gap-4 lg:grid-cols-2 ${i % 2 === 0 ? "" : "lg:[&>div:first-child]:order-2"
                                }`}
                        >
                            <div className={`glass rounded-2xl p-6 ${i % 2 === 0 ? "lg:mr-10" : "lg:ml-10"}`}>
                                <div className="flex items-center gap-4">
                                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                                        <s.Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground">Step {i + 1}</div>
                                        <h3 className="text-lg font-semibold">{s.title}</h3>
                                    </div>
                                </div>
                                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                            </div>
                            <div className="hidden lg:block" />
                            <span className="absolute left-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-brand shadow-glow lg:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
