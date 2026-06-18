import { motion } from "framer-motion";
import {
    Globe, Smartphone, AppWindow, LayoutDashboard, Palette,
    PenTool, Image as ImageIcon, Share2, FileText, Plug,
} from "lucide-react";
import { Section, SectionHeading } from "./About";

const services = [
    { Icon: Globe, title: "Website Development", desc: "High-performance, responsive websites built with React & modern stacks." },
    { Icon: Smartphone, title: "Android App Development", desc: "Native-feel Android apps with smooth UX and rock-solid APIs." },
    { Icon: AppWindow, title: "iOS App Development", desc: "Beautiful, optimized iOS experiences your users will love." },
    { Icon: LayoutDashboard, title: "Admin Dashboard", desc: "Powerful dashboards with analytics, auth, roles, and CRUD." },
    { Icon: Palette, title: "UI/UX Design", desc: "Clean, modern interfaces designed to convert and delight." },
    { Icon: PenTool, title: "Logo Design", desc: "Distinctive brand marks that tell your story at a glance." },
    { Icon: ImageIcon, title: "Banner Design", desc: "Eye-catching banners for web, ads, and product launches." },
    { Icon: Share2, title: "Social Media Creatives", desc: "Scroll-stopping posts and reels that grow your audience." },
    { Icon: FileText, title: "Brochure & Pamphlet", desc: "Print-ready brochures and pamphlets with premium polish." },
    { Icon: Plug, title: "API Development", desc: "Reliable REST APIs with auth, docs, and great DX." },
];

export function Services() {
    return (
        <Section id="services">
            <SectionHeading
                eyebrow="Services"
                title="Everything you need, in one studio"
                subtitle="From idea to launch — design, development, and growth services tailored for modern brands."
            />

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s, i) => (
                    <motion.div
                        key={s.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="group glass relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
                    >
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                        <div className="relative">
                            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                                <s.Icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-semibold">{s.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
