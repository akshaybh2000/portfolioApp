import { motion } from "framer-motion";
import { ArrowRight, Eye, Code2, Rocket, Layers } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl animate-float" />
      <div
        className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-brand-2/30 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
            Available for new projects · Pranaksh Solutions
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            We Build Modern Websites,{" "}
            <span>Mobile Apps & Business Software</span> That Drive Growth.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Pranaksh Solutions Helps Startups, Businesses, And Enterprises Build
            Scalable Digital Products Using Modern Technologies.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              Hire Me
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-glass-border"
            >
              <Eye className="h-4 w-4" />
              View Projects
            </a>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4">
            {[
              { n: "50+", l: "Projects" },
              { n: "30+", l: "Happy Clients" },
              { n: "3+", l: "Years Exp." },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-gradient sm:text-3xl">
                  {s.n}
                </div>
                <div className="text-xs text-muted-foreground sm:text-sm">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Floating icons */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <FloatingIcon
            Icon={Code2}
            className="left-[8%] top-[20%]"
            delay={0}
          />
          <FloatingIcon
            Icon={Rocket}
            className="right-[10%] top-[28%]"
            delay={1}
          />
          <FloatingIcon
            Icon={Layers}
            className="left-[12%] bottom-[15%]"
            delay={2}
          />
        </div>
      </div>
    </section>
  );
}

function FloatingIcon({
  Icon,
  className,
  delay,
}: {
  Icon: typeof Code2;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute glass-strong grid h-14 w-14 place-items-center rounded-2xl text-gradient animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <Icon className="h-6 w-6" />
    </div>
  );
}
