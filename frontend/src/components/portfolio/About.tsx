import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import logo from "../../assets/logo.png";

const skills = [
  "React.js",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Express.js",
  "API Development",
  "UI/UX Design",
  "TypeScript",
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="Full Stack Developer & Founder"
        subtitle="I build robust, beautiful digital products end-to-end — from concept to deployment."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-strong relative overflow-hidden rounded-3xl p-8 lg:col-span-2"
        >
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-brand opacity-30 blur-2xl" />
          <div className="relative">
            <div className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-brand shadow-glow p-2">
              <img
                src={logo}
                alt="Pranaksh Solutions"
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="mt-6 text-2xl font-bold">Pranaksh Solutions</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Helping businesses build premium digital products.
            </p>

            <div className="mt-3 space-y-1">
              <Row Icon={GraduationCap} label="Design." />
              <Row Icon={Briefcase} label="Develop." />
              <Row Icon={Award} label="Deploy." />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            {/* Pranaksh Solutions is a  {" "} */}
            <span className="text-foreground font-medium">
              Pranaksh Solutions
            </span>{" "}
            — digital development studio specializing in modern websites, web
            applications, mobile apps, UI/UX design, and custom business
            software.
          </p>
          <p className="mt-4 text-muted-foreground">
            We work with startups, small businesses, and enterprises to
            transform ideas into scalable digital products.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="glass rounded-full px-4 py-2 text-sm text-foreground/90 transition hover:border-gradient hover:bg-glass-border"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Row({ Icon, label }: { Icon: typeof Award; label: string }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-glass text-gradient">
        <Icon className="h-4 w-4" />
      </span>
      <span className="text-foreground/90">{label}</span>
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-gradient">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold sm:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
