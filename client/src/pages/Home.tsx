import { ArrowRight, Github, Instagram, Mail, Sparkles } from "lucide-react";
import { Link } from "wouter";

/**
 * Design: Warm Editorial
 * - Asymmetric layout with generous whitespace
 * - Warm terracotta brand color with gold accents
 * - Smooth animations and intentional interactions
 * - Editorial grid structure with breathing room
 */

const STATS = [
  { value: "4+", label: "Medals" },
  { value: "3+", label: "Projects" },
  { value: "16", label: "Age" },
  { value: "1×", label: "Intl. rep." },
];

const HIGHLIGHTS = [
  {
    year: "2026",
    title: "First Global Challenge",
    detail: "Head Programmer for Team SA · 118/181 countries · Panama",
  },
  {
    year: "2026",
    title: "Hackathon Runner-Up",
    detail: "Led the team to 2nd place in our first hackathon",
  },
  {
    year: "2025",
    title: "Gold · Springbots Robotics",
    detail: "Regional gold, 6th nationally",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 md:pt-20 lg:pt-28 pb-24 md:pb-32">
        {/* Decorative gradient blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--brand) 40%, transparent), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-40 h-[360px] w-[360px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--gold) 50%, transparent), transparent 70%)",
          }}
        />

        <div className="container-x relative grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7 lg:col-span-7">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-xs font-medium text-ink-soft animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              Grade 10 · High Scholar · Open to opportunities
            </div>

            {/* Main heading */}
            <h1
              className="mt-8 text-display text-5xl sm:text-6xl md:text-7xl animate-fade-up"
              style={{ animationDelay: "60ms" }}
            >
              Clyde
              <br />
              <span className="brand-gradient-text italic font-light">Snyders</span>
            </h1>

            {/* Description */}
            <p
              className="mt-8 max-w-xl text-lg text-ink-soft md:text-xl animate-fade-up"
              style={{ animationDelay: "180ms" }}
            >
              I'm a 16-year-old student from South Africa exploring{" "}
              <span className="text-ink font-medium">coding</span>,{" "}
              <span className="text-ink font-medium">robotics</span>, and{" "}
              <span className="text-ink font-medium">science fairs</span>. This
              is where I bring together my progress, achievements, and the ideas
              I'm building next.
            </p>

            {/* CTA Buttons */}
            <div
              className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand hover:shadow-md"
              >
                Contact me
              </Link>
            </div>

            {/* Social links */}
            <div
              className="mt-10 flex items-center gap-5 text-ink-soft animate-fade-up"
              style={{ animationDelay: "420ms" }}
            >
              <a
                href="mailto:clydesnyders17@gmail.com"
                aria-label="Email"
                className="transition-colors hover:text-brand"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/clydesnyders05-oss"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-brand"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/c.snyders.05?igsh=aDRxZTF5MG5rdzQy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-brand"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <span className="font-mono text-xs uppercase tracking-widest">
                Coding · Robotics · Science
              </span>
            </div>
          </div>

          {/* Portrait placeholder */}
          <div className="md:col-span-5 lg:col-span-5">
            <div
              className="relative mx-auto max-w-md md:max-w-none animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2rem] opacity-60 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--brand) 35%, transparent), color-mix(in oklab, var(--gold) 30%, transparent))",
                }}
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface-elevated shadow-lg">
                <div className="aspect-[4/5] bg-gradient-to-br from-brand/10 to-gold/10 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="h-12 w-12 text-brand/40 mx-auto mb-4" />
                    <p className="text-sm text-ink-soft">Portrait image</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white backdrop-blur-md">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest opacity-80">
                      Now
                    </p>
                    <p className="text-sm font-medium">Building the next thing</p>
                  </div>
                  <Sparkles className="h-4 w-4 text-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-border bg-surface">
        <div className="container-x grid grid-cols-2 divide-x divide-border md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-4 py-8 text-center md:py-10">
              <p className="text-display text-4xl md:text-5xl">{s.value}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="container-x py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-eyebrow">Selected highlights</p>
            <h2 className="mt-4 text-display text-4xl md:text-5xl">
              Recent
              <br />
              <span className="italic font-light">milestones.</span>
            </h2>
            <p className="mt-6 text-ink-soft">
              A snapshot of what I've been working on. The full story lives in
              Achievements.
            </p>
            <Link
              to="/achievements"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand hover:gap-3 transition-all"
            >
              See all achievements <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="md:col-span-8">
            <ul className="space-y-3">
              {HIGHLIGHTS.map((h, i) => (
                <li
                  key={h.title}
                  className="surface-card group flex items-center gap-6 p-6 hover:[&]:surface-card-hover"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-brand">
                    {h.year}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-display text-2xl">{h.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{h.detail}</p>
                  </div>
                  <ArrowRight className="hidden h-5 w-5 text-ink-soft transition-all group-hover:translate-x-1 group-hover:text-brand md:block" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="container-x pb-24">
        <div
          className="relative overflow-hidden rounded-[2rem] border border-border p-10 md:p-16"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--brand) 12%, var(--surface-elevated)), var(--surface-elevated))",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--brand) 40%, transparent), transparent 70%)",
            }}
          />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-eyebrow">Let's build</p>
              <h2 className="mt-4 text-display text-4xl md:text-5xl">
                Mentor, collaborate,
                <br />
                <span className="italic font-light">or just say hi.</span>
              </h2>
            </div>
            <div className="md:text-right">
              <p className="max-w-md text-ink-soft md:ml-auto">
                I'm always open to mentorship, school invitations, and project
                collaborations. Reach out — I reply.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg"
              >
                Start a conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
