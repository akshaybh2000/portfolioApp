import { User, Globe, Mail, Sparkles } from "lucide-react";

import { FaXTwitter, FaGit } from "react-icons/fa6";
export function Footer() {
    return (
        <footer className="relative border-t border-glass-border">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <div className="flex items-center gap-2 font-display font-bold">
                            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-glow">
                                <Sparkles className="h-5 w-5 text-primary-foreground" />
                            </span>
                            <span className="text-lg">Pranaksh<span className="text-gradient">.</span></span>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Premium digital solutions for ambitious brands — web, mobile, and design.
                        </p>
                        <div className="mt-5 flex gap-2">
                            {[FaGit, User, Globe, FaXTwitter, Mail].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="glass grid h-9 w-9 place-items-center rounded-lg transition hover:bg-glass-border"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <Col title="Quick Links" items={["About", "Services", "Work", "Pricing", "Contact"]} />
                    <Col title="Services" items={["Web Development", "Mobile Apps", "UI/UX Design", "Admin Dashboards", "API Development"]} />
                    <Col title="Company" items={["Pranaksh Solutions", "India · Remote", "hello@pranaksh.dev", "+91 98765 43210"]} muted />
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-glass-border pt-6 text-xs text-muted-foreground sm:flex-row">
                    <p>© {new Date().getFullYear()} Pranaksh Solutions. All rights reserved.</p>
                    <p>Built with <span className="text-gradient font-medium">React & Tailwind</span></p>
                </div>
            </div>
        </footer>
    );
}

function Col({ title, items, muted }: { title: string; items: string[]; muted?: boolean }) {
    return (
        <div>
            <h4 className="text-sm font-semibold">{title}</h4>
            <ul className="mt-4 space-y-2 text-sm">
                {items.map((i) => (
                    <li key={i}>
                        {muted ? (
                            <span className="text-muted-foreground">{i}</span>
                        ) : (
                            <a href="#" className="text-muted-foreground transition hover:text-foreground">
                                {i}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
