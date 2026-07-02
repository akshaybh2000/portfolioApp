import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Tech" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "glass-strong shadow-soft" : "bg-transparent"
          }`}
        >
          <a
            href="#top"
            className="flex items-center gap-3 font-display font-bold"
          >
            <img
              src={logo}
              alt="Pranaksh Solutions"
              className="h-10 w-10 rounded-xl object-contain"
            />

            <span className="text-lg tracking-tight">
              Pranaksh Solutions<span className="text-gradient">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-glass hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setLight((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-lg border border-glass-border bg-glass text-muted-foreground transition hover:text-foreground"
            >
              {light ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <a
              href="#contact"
              className="hidden rounded-lg bg-gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90 md:inline-block"
            >
              Hire Me
            </a>
            <button
              aria-label="Menu"
              className="grid h-9 w-9 place-items-center rounded-lg border border-glass-border bg-glass md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-strong mt-2 overflow-hidden rounded-2xl p-2 md:hidden"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-muted-foreground hover:bg-glass hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-lg bg-gradient-brand px-4 py-3 text-center text-sm font-medium text-primary-foreground"
              >
                Hire Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
