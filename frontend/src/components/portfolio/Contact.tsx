import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, MapPin } from "lucide-react";
import {
    Globe,
    User,
} from "lucide-react";
import { toast } from "sonner";
import { Section, SectionHeading } from "./About";

const schema = z.object({
    name: z.string().trim().min(2, "Please enter your name").max(80),
    email: z.string().trim().email("Invalid email").max(160),
    phone: z.string().trim().min(7, "Phone too short").max(20),
    message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

export function Contact() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [loading, setLoading] = useState(false);

    function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    }

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        const parsed = schema.safeParse(form);
        if (!parsed.success) {
            toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setForm({ name: "", email: "", phone: "", message: "" });
            toast.success("Thanks! We'll get back to you within 24 hours.");
        }, 800);
    }

    return (
        <Section id="contact">
            <SectionHeading
                eyebrow="Contact"
                title="Let's build something great"
                subtitle="Tell us about your project — we'll reply within 24 hours."
            />

            <div className="mt-16 grid gap-8 lg:grid-cols-5">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2 space-y-3"
                >
                    <InfoLine Icon={Mail} title="Email" value="hello@pranaksh.dev" href="mailto:hello@pranaksh.dev" />
                    <InfoLine Icon={MessageCircle} title="WhatsApp" value="+91 98765 43210" href="https://wa.me/919876543210" />
                    <InfoLine Icon={User} title="Instagram" value="@pranaksh.solutions" href="https://instagram.com" />
                    <InfoLine Icon={Globe} title="LinkedIn" value="Pranaksh Solutions" href="https://linkedin.com" />
                    <InfoLine Icon={MapPin} title="Based in" value="India · Remote-friendly" />
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    onSubmit={onSubmit}
                    className="glass-strong rounded-3xl p-6 sm:p-8 lg:col-span-3"
                >
                    <div className="grid gap-4 sm:grid-cols-2">
                        <Field name="name" label="Your Name" value={form.name} onChange={onChange} placeholder="Jane Doe" />
                        <Field name="email" type="email" label="Email" value={form.email} onChange={onChange} placeholder="jane@company.com" />
                        <Field name="phone" label="Phone" value={form.phone} onChange={onChange} placeholder="+91 ..." />
                        <Field name="budget" label="Budget (optional)" value="" onChange={() => { }} placeholder="₹10,000+" />
                    </div>
                    <div className="mt-4">
                        <label className="text-xs font-medium text-muted-foreground">Project Requirement</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={onChange}
                            rows={5}
                            placeholder="Tell us about your idea..."
                            className="mt-1.5 w-full resize-none rounded-xl border border-glass-border bg-glass px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                        />
                    </div>
                    <button
                        disabled={loading}
                        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90 disabled:opacity-60"
                    >
                        <Send className="h-4 w-4" />
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </motion.form>
            </div>
        </Section>
    );
}

function InfoLine({
    Icon, title, value, href,
}: { Icon: typeof Mail; title: string; value: string; href?: string }) {
    const inner = (
        <div className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:bg-glass-border">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                <Icon className="h-5 w-5" />
            </span>
            <div>
                <div className="text-xs text-muted-foreground">{title}</div>
                <div className="text-sm font-medium">{value}</div>
            </div>
        </div>
    );
    return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}

function Field({
    name, label, value, onChange, placeholder, type = "text",
}: {
    name: string; label: string; value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string; type?: string;
}) {
    return (
        <div>
            <label className="text-xs font-medium text-muted-foreground">{label}</label>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="mt-1.5 w-full rounded-xl border border-glass-border bg-glass px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
        </div>
    );
}
