import { ArrowRight, Award, Trophy } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

/**
 * Design: Warm Editorial
 * - Timeline layout with visual hierarchy
 * - Badge system for achievement types
 * - Asymmetric spacing and breathing room
 */

const ACHIEVEMENTS = [
  {
    year: 2026,
    title: "First Global Challenge",
    description: "Head Programmer for Team South Africa in the First Global Challenge, representing the country among 118 nations.",
    location: "Panama",
    type: "competition",
    icon: Trophy,
  },
  {
    year: 2026,
    title: "Hackathon Runner-Up",
    description: "Led my team to 2nd place in our first hackathon, demonstrating leadership and technical skills under pressure.",
    location: "South Africa",
    type: "competition",
    icon: Award,
  },
  {
    year: 2025,
    title: "Gold Medal · Springbots Robotics",
    description: "Achieved regional gold and placed 6th nationally in the Springbots Robotics competition.",
    location: "South Africa",
    type: "competition",
    icon: Trophy,
  },
  {
    year: 2025,
    title: "Science Fair Excellence",
    description: "Presented groundbreaking research in robotics and AI at the regional science fair, earning recognition for innovation.",
    location: "South Africa",
    type: "academic",
    icon: Award,
  },
  {
    year: 2024,
    title: "Programming Certification",
    description: "Completed advanced Python and web development certifications, demonstrating proficiency in full-stack development.",
    location: "Online",
    type: "academic",
    icon: Award,
  },
  {
    year: 2024,
    title: "Robotics Team Lead",
    description: "Promoted to team lead for robotics club, mentoring younger students and organizing competitions.",
    location: "South Africa",
    type: "leadership",
    icon: Trophy,
  },
];

export default function Achievements() {
  return (
    <Layout>
      {/* Header */}
      <section className="container-x pt-12 md:pt-20 pb-12 md:pb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:gap-3 transition-all mb-8">
          <ArrowRight className="h-4 w-4 rotate-180" /> Back home
        </Link>
        <h1 className="text-display text-5xl md:text-7xl">
          Achievements &
          <br />
          <span className="italic font-light">milestones</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          A timeline of my journey through competitions, academic achievements, and leadership roles.
        </p>
      </section>

      {/* Timeline */}
      <section className="container-x py-12 md:py-24">
        <div className="max-w-3xl">
          {ACHIEVEMENTS.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="mb-12 md:mb-16 relative">
                {/* Timeline line */}
                {index !== ACHIEVEMENTS.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-20 md:h-24 bg-gradient-to-b from-brand/30 to-transparent" />
                )}

                <div className="flex gap-6 md:gap-8">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-12 h-12 rounded-full bg-brand/20 border-2 border-brand flex items-center justify-center">
                      <Icon className="h-5 w-5 text-brand" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-brand font-semibold">
                        {achievement.year}
                      </span>
                      <span className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-medium capitalize">
                        {achievement.type}
                      </span>
                    </div>
                    <h3 className="text-display text-2xl mb-2">{achievement.title}</h3>
                    <p className="text-ink-soft mb-3">{achievement.description}</p>
                    <p className="text-sm text-ink-soft font-mono">📍 {achievement.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-surface">
        <div className="container-x grid grid-cols-2 divide-x divide-border md:grid-cols-4 py-12 md:py-16">
          <div className="px-4 text-center">
            <p className="text-display text-4xl md:text-5xl">{ACHIEVEMENTS.length}+</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
              Achievements
            </p>
          </div>
          <div className="px-4 text-center">
            <p className="text-display text-4xl md:text-5xl">4+</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
              Medals
            </p>
          </div>
          <div className="px-4 text-center">
            <p className="text-display text-4xl md:text-5xl">3</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
              Years Active
            </p>
          </div>
          <div className="px-4 text-center">
            <p className="text-display text-4xl md:text-5xl">1×</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
              International
            </p>
          </div>
        </div>
      </section>

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
            <p className="text-eyebrow">What's next?</p>
            <h2 className="mt-4 text-display text-4xl md:text-5xl mb-6">
              Always learning, always building.
            </h2>
            <p className="max-w-2xl text-ink-soft mb-6">
              My journey is just beginning. I'm constantly exploring new technologies, taking on bigger challenges, and pushing the boundaries of what's possible in robotics and software development.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg"
            >
              Let's collaborate <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
