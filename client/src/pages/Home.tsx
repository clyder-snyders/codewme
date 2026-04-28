import { ArrowRight, Github, Instagram, Mail, Sparkles } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import Gallery from "@/components/Gallery";
import NewsMentions from "@/components/NewsMentions";

/**
 * Design: Warm Editorial
 * - Asymmetric layout with generous whitespace
 * - Warm terracotta brand color with gold accents
 * - Smooth animations and intentional interactions
 * - Editorial grid structure with breathing room
 */

const STATS = [
  { value: "7+", label: "Awards" },
  { value: "4+", label: "Competitions" },
  { value: "16", label: "Age" },
  { value: "1×", label: "Global rep." },
];

const HIGHLIGHTS = [
  {
    year: "2026",
    title: "2nd Place Hackathon Winner",
    detail: "Created a mobile app for environmental services",
  },
  {
    year: "2025",
    title: "First Global Robotics Competition",
    detail: "Head Programmer for Team SA · 118/181 countries · Panama",
  },
  {
    year: "2025",
    title: "Gold · Springbots Robotics",
    detail: "Regional gold, 6th nationally",
  },
];

const GALLERY_IMAGES = [
  {
    id: "1",
    src: "https://i.imgur.com/dEKV5Yo.jpeg",
    caption: "Hackathon Team Collaboration",
    category: "Hackathon",
  },
  {
    id: "2",
    src: "https://i.imgur.com/GfWfAPk.jpeg",
    caption: "First Global Challenge - Panama city, Panama",
    category: "Competition",
  },
  {
    id: "3",
    src: "https://i.imgur.com/UWnI0L1.jpeg",
    caption: "Bronze winner at the ISF - International Science fair",
    category: "Science Fair",
  },
  {
    id: "4",
    src: "https://i.imgur.com/7UcNxQj.jpeg",
    caption: "Gold Medal: Springbots Regional Robotics Competition",
    category: "Robotics",
  },
  {
    id: "5",
    src: "https://i.imgur.com/E1c1QZp.jpeg",
    caption: "Radio Interview, Why I started coding and robotics",
    category: "Interview",
  },
  {
    id: "6",
    src: "https://i.imgur.com/ywRb3WB.jpeg",
    caption: "Science Workshop",
    category: "STEM",
  },
];

const NEWS_ITEMS = [
  {
    id: "1",
    headline: "Local Student Represents South Africa at First Global Robotics 2025",
    publication: "Local News Network",
    date: "March 2025",
    summary:
      "16-year-old Clyde Snyders was selected as Head Programmer for Team South Africa at the First Global Robotics Competition in Panama, competing against 118 other countries.",
    url: "#",
    category: "coverage" as const,
  },
  {
    id: "2",
    headline: "Young Innovators Win Gold at Regional Robotics Championship",
    publication: "Science & Tech Weekly",
    date: "February 2025",
    summary:
      "Clyde's team secured gold medal at the Springbots Robotics competition, placing 6th nationally with an innovative autonomous system design.",
    url: "#",
    category: "feature" as const,
  },
  {
    id: "3",
    headline: "Interview: Building the Future with Code and Robotics",
    publication: "Student Innovation Magazine",
    date: "January 2026",
    summary:
      "We sat down with Clyde to discuss his journey in coding, robotics, and what drives his passion for building solutions that matter.",
    url: "#",
    category: "interview" as const,
  },
];

export default function Home() {
  return (
    <Layout>
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
              style={{ animationDelay: "400ms" }}
            >
              <a
                href="mailto:clydesnyders17@gmail.com"
                aria-label="Email"
                className="transition-colors hover:text-brand"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/clyder-snyders"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-brand"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/clyde.snyders?igsh=aDRxZTF5MG5rdzQy"
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

          {/* Workspace illustration */}
          <div className="md:col-span-5 lg:col-span-5">
            <div
              className="relative mx-auto max-w-md md:max-w-none animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2rem] opacity-40 blur-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--brand) 25%, transparent), color-mix(in oklab, var(--gold) 20%, transparent))",
                }}
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-lg">
                <img
                  src="/manus-storage/clyde-workspace_ffff798c.png"
                  alt="Clyde Snyders - Coding, Robotics, and Building"
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover"
                />
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

      {/* GALLERY SECTION */}
      <section id="gallery" className="container-x py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-eyebrow">Visual journey</p>
            <h2 className="mt-4 text-display text-4xl md:text-5xl">
              Moments
              <br />
              <span className="italic font-light">that matter.</span>
            </h2>
            <p className="mt-6 text-ink-soft">
              Photos from competitions, hackathons, and team events. Click any image to view in full size.
            </p>
          </div>
          <div className="md:col-span-8">
            <Gallery images={GALLERY_IMAGES} />
          </div>
        </div>
      </section>

      {/* NEWS & MENTIONS SECTION */}
      <section id="news" className="container-x py-24 md:py-32 border-t border-border">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-eyebrow">In the news</p>
            <h2 className="mt-4 text-display text-4xl md:text-5xl">
              Press &
              <br />
              <span className="italic font-light">mentions.</span>
            </h2>
            <p className="mt-6 text-ink-soft">
              Coverage and features about my work in robotics, competitions, and innovation.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="rounded-lg border-2 border-dashed border-border bg-surface-elevated p-12 text-center">
              <p className="text-lg text-ink-soft">Coming soon...</p>
              <p className="mt-2 text-sm text-ink-soft">I'm curating the best coverage and mentions of my work. Check back soon!</p>
            </div>
          </div>
        </div>
      </section>


    </Layout>
  );
}
