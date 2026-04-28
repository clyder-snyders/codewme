import { ArrowRight, Award, Trophy } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

/**
 * Design: Warm Editorial
 * - Timeline layout with visual hierarchy
 * - Achievement cards with icons and descriptions
 */

const ACHIEVEMENTS = [
  {
    year: 2026,
    title: "2nd Place Hackathon Winner",
    description: "I attended my first hackathon and won second place. I created a mobile app that helps with environmental services.",
    icon: Trophy,
  },
  {
    year: 2025,
    title: "First Global Robotics Competition",
    description: "I took part in my first global challenge in Panama. I was chosen as the head programmer, and our team finished 118th out of 181 countries.",
    icon: Trophy,
  },
  {
    year: 2025,
    title: "Gold Medal: Regional Science Expo",
    description: "Awarded a gold medal for the second consecutive year and won Best Category in Physics. Showcased a passion for experimentation and discovery.",
    icon: Trophy,
  },
  {
    year: 2025,
    title: "Gold Medal: Springbots Robotics",
    description: "Won gold at the regional Springbots robotics competition, later placing 6th nationally. Led a team in designing and programming innovative robots.",
    icon: Trophy,
  },
  {
    year: 2025,
    title: "4th Place Winner: World Robot Olympiad (WRO)",
    description: "Secured 4th place in the World Robot Olympiad, competing with top students from various schools. Demonstrated creativity, problem solving and resilience under pressure.",
    icon: Award,
  },
  {
    year: 2024,
    title: "Gold Medal: Regional Science Fair",
    description: "Secured a Gold in the 'Engineering' category at regional science fair, competing with top students with different projects in my region.",
    icon: Trophy,
  },
  {
    year: 2024,
    title: "Bronze Medal: International Science Fair (ISF)",
    description: "Secured a bronze in the 'Engineering' category at ISF, competing with top students globally. Demonstrated creativity and resilience under pressure.",
    icon: Award,
  },
  {
    year: 2024,
    title: "Bronze Medal: World Robot Olympiad",
    description: "Achieved a bronze at WRO, representing the Eastern Cape internationally and collaborating with diverse teams.",
    icon: Award,
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
        <h1 className="text-display text-5xl md:text-6xl font-bold mb-6">Achievements</h1>
        <p className="text-lg text-ink-soft max-w-2xl">
          A timeline of awards, competitions, and milestones that represent my journey in robotics, science, and innovation.
        </p>
      </section>

      {/* Timeline */}
      <section className="container-x pb-24 md:pb-32">
        <div className="space-y-12">
          {ACHIEVEMENTS.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="relative pl-8 md:pl-12 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-brand flex items-center justify-center ring-4 ring-background">
                  <Icon className="h-3 w-3 text-white" />
                </div>

                {/* Timeline line */}
                {index < ACHIEVEMENTS.length - 1 && (
                  <div className="absolute left-2.5 top-8 bottom-0 w-0.5 bg-gradient-to-b from-brand to-brand/20" />
                )}

                {/* Content */}
                <div className="group">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-display text-xl md:text-2xl font-bold text-ink group-hover:text-brand transition-colors">
                      {achievement.title}
                    </h3>
                    <span className="text-sm font-semibold text-brand bg-brand/10 px-3 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-ink-soft leading-relaxed max-w-2xl">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-24 pt-12 border-t border-border">
          <p className="text-sm text-ink-soft italic max-w-2xl">
            <strong>Disclaimer:</strong> I did not achieve these things on my own. I received support and guidance from mentors, teachers, peers and friends and I appreciate their contribution.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg"
          >
            Let's collaborate <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-ink hover:bg-surface transition-all"
          >
            View projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
