import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Award, Trophy } from "lucide-react";
import Layout from "@/components/Layout";
import { ANIMATION_TIMINGS, ANIMATION_EASING, containerVariants, itemVariants } from "@/lib/animations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Design: Warm Editorial + Kinetic Editorial Animations
 * - Timeline layout with visual hierarchy
 * - Achievement cards with icons and descriptions
 * - Scroll-triggered animations for timeline items
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
  const timelineRef = useScrollReveal(0.2);

  return (
    <Layout>
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: ANIMATION_TIMINGS.entrance,
          ease: ANIMATION_EASING.entrance,
        }}
        className="container-x pt-12 md:pt-20 pb-12 md:pb-16"
      >
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:gap-3 transition-all mb-8">
          <ArrowRight className="h-4 w-4 rotate-180" /> Back home
        </Link>
        <h1 className="text-display text-5xl md:text-6xl font-bold mb-6">Achievements</h1>
        <p className="text-lg text-ink-soft max-w-2xl">
          A timeline of awards, competitions, and milestones that represent my journey in robotics, science, and innovation.
        </p>
      </motion.section>

      {/* Timeline */}
      <section ref={timelineRef.ref} className="container-x pb-24 md:pb-32">
        <motion.div
          className="space-y-12"
          initial="hidden"
          animate={timelineRef.isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {ACHIEVEMENTS.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline dot with animation */}
                <motion.div
                  className="absolute left-0 top-1 w-6 h-6 rounded-full bg-brand flex items-center justify-center ring-4 ring-background"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: ANIMATION_TIMINGS.hover }}
                >
                  <Icon className="h-3 w-3 text-white" />
                </motion.div>

                {/* Timeline line */}
                {index < ACHIEVEMENTS.length - 1 && (
                  <motion.div
                    className="absolute left-2.5 top-8 bottom-0 w-0.5 bg-gradient-to-b from-brand to-brand/20"
                    initial={{ scaleY: 0 }}
                    animate={timelineRef.isVisible ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{
                      duration: ANIMATION_TIMINGS.scrollReveal,
                      ease: ANIMATION_EASING.scrollReveal,
                      delay: index * ANIMATION_TIMINGS.scrollStagger + 0.1,
                    }}
                    style={{ originY: 0 }}
                  />
                )}

                {/* Content */}
                <motion.div
                  className="group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: ANIMATION_TIMINGS.hover }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-display text-xl md:text-2xl font-bold text-ink group-hover:text-brand transition-colors">
                      {achievement.title}
                    </h3>
                    <motion.span
                      className="text-sm font-semibold text-brand bg-brand/10 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {achievement.year}
                    </motion.span>
                  </div>
                  <p className="text-ink-soft leading-relaxed max-w-2xl">
                    {achievement.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: ANIMATION_TIMINGS.scrollReveal,
            ease: ANIMATION_EASING.scrollReveal,
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24 pt-12 border-t border-border"
        >
          <p className="text-sm text-ink-soft italic max-w-2xl">
            <strong>Disclaimer:</strong> I did not achieve these things on my own. I received support and guidance from mentors, teachers, peers and friends and I appreciate their contribution.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION_TIMINGS.scrollReveal,
            ease: ANIMATION_EASING.scrollReveal,
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg"
          >
            Let's collaborate
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-ink hover:bg-surface transition-all"
          >
            View projects
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
}
