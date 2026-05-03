import { Link } from "wouter";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Gallery from "@/components/Gallery";
import NewsMentions from "@/components/NewsMentions";
import { ANIMATION_TIMINGS, ANIMATION_EASING, containerVariants, itemVariants } from "@/lib/animations";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Mail, Github, Instagram } from "lucide-react";

/**
 * Design: Warm Editorial + Kinetic Editorial Animations
 * - Asymmetric layout with generous whitespace
 * - Warm terracotta brand color with gold accents
 * - Smooth entrance animations and scroll reveals
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
  const statsRef = useScrollReveal(0.2);
  const highlightsRef = useScrollReveal(0.2);

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
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION_TIMINGS.entrance,
                ease: ANIMATION_EASING.entrance,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-xs font-medium text-ink-soft"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              Grade 10 · High Scholar · Open to opportunities
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION_TIMINGS.entrance,
                ease: ANIMATION_EASING.entrance,
                delay: 0.06,
              }}
              className="mt-8 text-display text-5xl sm:text-6xl md:text-7xl"
            >
              Clyde
              <br />
              <span className="brand-gradient-text italic font-light">Snyders</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION_TIMINGS.entrance,
                ease: ANIMATION_EASING.entrance,
                delay: 0.18,
              }}
              className="mt-8 max-w-xl text-lg text-ink-soft md:text-xl"
            >
              I'm a 16-year-old student from South Africa exploring{" "}
              <span className="text-ink font-medium">coding</span>,{" "}
              <span className="text-ink font-medium">robotics</span>, and{" "}
              <span className="text-ink font-medium">science fairs</span>. This
              is where I bring together my progress, achievements, and the ideas
              I'm building next.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION_TIMINGS.entrance,
                ease: ANIMATION_EASING.entrance,
                delay: 0.30,
              }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg"
              >
                View Projects
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand hover:shadow-md"
              >
                Contact me
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION_TIMINGS.entrance,
                ease: ANIMATION_EASING.entrance,
                delay: 0.40,
              }}
              className="mt-10 flex items-center gap-5 text-ink-soft"
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
            </motion.div>
          </div>

          {/* Workspace illustration */}
          <div className="md:col-span-5 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: ANIMATION_TIMINGS.entrance,
                ease: ANIMATION_EASING.entrance,
                delay: 0.24,
              }}
              className="relative mx-auto max-w-md md:max-w-none"
            >
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2rem] opacity-40 blur-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--brand) 25%, transparent), color-mix(in oklab, var(--gold) 20%, transparent))",
                }}
              />
              <motion.div
                className="relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-lg"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/manus-storage/clyde-workspace_ffff798c.png"
                  alt="Clyde Snyders - Coding, Robotics, and Building"
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: ANIMATION_TIMINGS.float,
                    ease: "easeInOut" as const,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section ref={statsRef.ref} className="container-x py-16 md:py-24">
        <motion.div
          initial="hidden"
          animate={statsRef.isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-2xl border border-border bg-surface-elevated p-6 text-center"
            >
              <div className="text-display text-3xl md:text-4xl font-bold text-brand">
                {stat.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-ink-soft">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section ref={highlightsRef.ref} className="container-x py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={highlightsRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: ANIMATION_TIMINGS.scrollReveal,
            ease: ANIMATION_EASING.scrollReveal,
          }}
        >
          <div className="mb-12">
            <h2 className="text-display text-4xl md:text-5xl font-bold mb-4">
              Recent
              <br />
              <span className="italic font-light">milestones.</span>
            </h2>
            <p className="text-lg text-ink-soft max-w-2xl">
              A snapshot of what I've been working on. The full story lives in Achievements.
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate={highlightsRef.isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-6"
          >
            {HIGHLIGHTS.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group rounded-2xl border border-border bg-surface-elevated p-6 md:p-8 hover:border-brand/50 transition-all hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="text-sm font-mono text-brand mb-2">{highlight.year}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-ink mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-ink-soft">{highlight.detail}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-brand flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={highlightsRef.isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <Link
              to="/achievements"
              className="inline-flex items-center gap-2 text-brand font-medium hover:gap-3 transition-all"
            >
              See all achievements
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="container-x py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION_TIMINGS.scrollReveal,
            ease: ANIMATION_EASING.scrollReveal,
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-12">
            <h2 className="text-display text-4xl md:text-5xl font-bold mb-4">
              Moments
              <br />
              <span className="italic font-light">that matter.</span>
            </h2>
            <p className="text-lg text-ink-soft max-w-2xl">
              Photos from competitions, hackathons, and team events. Click any image to view in full size.
            </p>
          </div>
          <Gallery images={GALLERY_IMAGES} />
        </motion.div>
      </section>

      {/* NEWS SECTION */}
      <section id="news" className="container-x py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION_TIMINGS.scrollReveal,
            ease: ANIMATION_EASING.scrollReveal,
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-12">
            <h2 className="text-display text-4xl md:text-5xl font-bold mb-4">
              Press &
              <br />
              <span className="italic font-light">mentions.</span>
            </h2>
            <p className="text-lg text-ink-soft max-w-2xl">
              Coverage and features about my work in robotics, competitions, and innovation.
            </p>
          </div>
          <NewsMentions items={NEWS_ITEMS} />
        </motion.div>
      </section>
    </Layout>
  );
}
