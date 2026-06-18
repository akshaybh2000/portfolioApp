import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section, SectionHeading } from "./About";
import { FaGithub } from "react-icons/fa6";

const projects = [
    { title: "Gym Website", desc: "Modern fitness landing with class booking and membership plans.", tech: ["React", "Tailwind", "Node"], hue: "from-violet-500/30 to-fuchsia-500/30" },
    { title: "Restaurant Website", desc: "Elegant restaurant site with menu, reservations, and gallery.", tech: ["React", "Express", "Postgres"], hue: "from-amber-500/30 to-rose-500/30" },
    { title: "Admin Dashboard", desc: "Role-based admin with analytics, charts, and CRUD modules.", tech: ["React", "Recharts", "Postgres"], hue: "from-cyan-500/30 to-blue-500/30" },
    { title: "Student Management System", desc: "Full system for students, attendance, fees, and reports.", tech: ["React", "Node", "Postgres"], hue: "from-emerald-500/30 to-teal-500/30" },
    { title: "Portfolio Website", desc: "Premium portfolio template with animated, glassmorphic UI.", tech: ["React", "Framer", "Tailwind"], hue: "from-indigo-500/30 to-violet-500/30" },
    { title: "Booking System", desc: "Appointment booking with calendar, payments, and notifications.", tech: ["React", "Express", "Stripe"], hue: "from-pink-500/30 to-purple-500/30" },
];

export function Projects() {
    return (
        <Section id="work">
            <SectionHeading
                eyebrow="Portfolio"
                title="Selected work"
                subtitle="A glimpse at recent builds across web apps, dashboards, and brand sites."
            />

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p, i) => (
                    <motion.article
                        key={p.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="group glass overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:shadow-glow"
                    >
                        <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.hue}`}>
                            <div className="absolute inset-0 grid-bg opacity-60" />
                            <div className="absolute inset-0 grid place-items-center">
                                <div className="glass-strong rounded-2xl px-5 py-3 font-display text-xl font-bold tracking-tight">
                                    {p.title}
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition group-hover:opacity-100" />
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-semibold">{p.title}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                    <span key={t} className="rounded-full bg-glass px-2.5 py-1 text-xs text-muted-foreground">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-5 flex gap-2">
                                <a className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-brand px-3 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90" href="#">
                                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                                </a>
                                <a className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-glass-border bg-glass px-3 py-2 text-xs font-medium transition hover:bg-glass-border" href="#">
                                    <FaGithub className="h-3.5 w-3.5" /> GitHub
                                </a>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </Section>
    );
}
