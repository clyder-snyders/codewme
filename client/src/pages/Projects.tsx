import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

/**
 * Design: Warm Editorial
 * - Grid layout with asymmetric card sizing
 * - Hover effects with shadow and scale
 * - Clean typography hierarchy
 */

const PROJECTS = [
  {
    id: 1,
    title: "Robotics Competition Platform",
    description: "A comprehensive platform for managing robotics competitions, including team registration, scoring systems, and live leaderboards.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    id: 2,
    title: "Science Fair Showcase",
    description: "Interactive web application showcasing science fair projects with 3D visualizations and detailed documentation.",
    tags: ["Three.js", "React", "WebGL"],
    featured: true,
  },
  {
    id: 3,
    title: "Code Learning Dashboard",
    description: "Educational platform for learning programming concepts with interactive challenges and progress tracking.",
    tags: ["React", "Python", "Firebase"],
    featured: false,
  },
  {
    id: 4,
    title: "Robotics Control System",
    description: "Real-time control system for autonomous robots with sensor integration and telemetry visualization.",
    tags: ["C++", "Arduino", "WebSockets"],
    featured: false,
  },
  {
    id: 5,
    title: "Data Visualization Tool",
    description: "Advanced data visualization toolkit for analyzing competition results and performance metrics.",
    tags: ["D3.js", "React", "Node.js"],
    featured: false,
  },
  {
    id: 6,
    title: "Mobile Companion App",
    description: "Cross-platform mobile app for tracking robotics projects and sharing achievements with the community.",
    tags: ["React Native", "Firebase", "Expo"],
    featured: false,
  },
];

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <Layout>
      {/* Header */}
      <section className="container-x pt-12 md:pt-20 pb-12 md:pb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:gap-3 transition-all mb-8">
          <ArrowRight className="h-4 w-4 rotate-180" /> Back home
        </Link>
        <h1 className="text-display text-5xl md:text-7xl">
          Projects &
          <br />
          <span className="italic font-light">experiments</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          A collection of projects I've built across robotics, coding, and science. Each represents a learning opportunity and a step forward in my journey.
        </p>
      </section>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <section className="container-x py-12 md:py-16">
          <p className="text-eyebrow mb-8">Featured work</p>
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((project) => (
              <div
                key={project.id}
                className="surface-card group p-8 hover:[&]:surface-card-hover cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-display text-2xl flex-1">{project.title}</h3>
                  <ExternalLink className="h-5 w-5 text-ink-soft group-hover:text-brand transition-colors flex-shrink-0 ml-4" />
                </div>
                <p className="text-ink-soft mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Other Projects */}
      {others.length > 0 && (
        <section className="container-x py-12 md:py-16">
          <p className="text-eyebrow mb-8">Other projects</p>
          <div className="grid gap-4 md:grid-cols-3">
            {others.map((project) => (
              <div
                key={project.id}
                className="surface-card group p-6 hover:[&]:surface-card-hover cursor-pointer"
              >
                <h3 className="text-display text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-ink-soft mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 rounded-full bg-brand/10 text-brand text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container-x py-24 md:py-32">
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
          <div className="relative">
            <p className="text-eyebrow">Interested in collaboration?</p>
            <h2 className="mt-4 text-display text-4xl md:text-5xl mb-6">
              Let's work together on your next project.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
