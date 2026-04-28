import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

/**
 * Design: Warm Editorial
 * - Grid layout with asymmetric card sizing
 * - Project showcase with tags and descriptions
 */

const PROJECTS = [
  {
    id: 1,
    title: "Coming Soon",
    description: "I'm working on some exciting projects! Check back soon for updates on my latest work in robotics, coding, and innovation.",
    tags: ["Projects", "Updates"],
    featured: true,
    link: null,
    github: null,
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
        <h1 className="text-display text-5xl md:text-6xl font-bold mb-6">Projects</h1>
        <p className="text-lg text-ink-soft max-w-2xl">
          Showcasing my work in robotics, coding, and innovation. More projects coming soon!
        </p>
      </section>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <section className="container-x pb-12 md:pb-16">
          <h2 className="text-display text-2xl md:text-3xl font-bold mb-8">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-6 md:p-8 hover:border-brand/50 transition-all hover:shadow-lg animate-fade-up"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-display text-2xl md:text-3xl font-bold text-ink group-hover:text-brand transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-ink-soft leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-brand bg-brand/10 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:gap-3 transition-all"
                      >
                        View project <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:gap-3 transition-all"
                      >
                        GitHub <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="container-x py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-display text-3xl md:text-4xl font-bold mb-4">Ready to see more?</h2>
          <p className="text-lg text-ink-soft mb-8">
            I'm constantly working on new projects and ideas. Get in touch to learn more about what I'm building or to collaborate!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://github.com/clyder-snyders"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-ink hover:bg-surface transition-all"
            >
              View GitHub <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
