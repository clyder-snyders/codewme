import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { ANIMATION_TIMINGS, ANIMATION_EASING, containerVariants, itemVariants } from "@/lib/animations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Design: Warm Editorial + Kinetic Editorial Animations
 * - Long-form content with generous spacing
 * - Skills organized by category with staggered animations
 * - Scroll-triggered reveals
 */

const SKILLS = [
  { category: "Programming", items: ["Python", "Block Coding", "JavaScript", "C++"] },
  { category: "Robotics", items: ["Arduino", "CAD Design", "Raspberry Pi", "LEGO"] },
  { category: "Tools & Platforms", items: ["GitHub", "Firebase", "Supabase", "Linux", "Vercel"] },
];

export default function About() {
  const skillsRef = useScrollReveal(0.2);
  const valuesRef = useScrollReveal(0.2);

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
        <h1 className="text-display text-5xl md:text-6xl font-bold mb-6">About me</h1>
      </motion.section>

      {/* Main Content */}
      <section className="container-x pb-24 md:pb-32">
        <div className="grid gap-16 md:grid-cols-3">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: ANIMATION_TIMINGS.scrollReveal,
              ease: ANIMATION_EASING.scrollReveal,
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-2 space-y-6"
          >
            <div>
              <h2 className="text-display text-3xl font-bold mb-4">My Journey</h2>
              <p className="text-lg text-ink-soft leading-relaxed mb-4">
                I am Clyde Snyders, a student based in South Africa with a passion for coding, robotics and science. My journey started in Grade 8 with a simple goal: to make solar energy smarter. Since then, I've gone from working in my school's science lab to representing my country as the Head Programmer for Team South Africa at the FIRST Global 2025 Challenge in Panama.
              </p>
              <p className="text-lg text-ink-soft leading-relaxed">
                I believe that where you come from doesn't limit where you can go. Whether I'm coding a robot to compete on the world stage or building an app to help my local community, I am driven by the belief that STEM is a tool for change. I'm not just building robots; I'm trying to build a future where innovation helps everyone.
              </p>
            </div>

            {/* Skills */}
            <motion.div
              ref={skillsRef.ref}
              initial="hidden"
              animate={skillsRef.isVisible ? "visible" : "hidden"}
              variants={containerVariants}
              className="pt-8 border-t border-border"
            >
              <h2 className="text-display text-3xl font-bold mb-8">Skills & Expertise</h2>
              <div className="space-y-8">
                {SKILLS.map((skillGroup, groupIndex) => (
                  <motion.div key={skillGroup.category} variants={itemVariants}>
                    <h3 className="text-display text-xl font-bold text-brand mb-4">
                      {skillGroup.category}
                    </h3>
                    <motion.div
                      className="flex flex-wrap gap-3"
                      initial="hidden"
                      animate={skillsRef.isVisible ? "visible" : "hidden"}
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.05,
                          },
                        },
                      }}
                    >
                      {skillGroup.items.map((skill) => (
                        <motion.span
                          key={skill}
                          className="px-4 py-2 rounded-full bg-brand/10 text-brand font-medium text-sm hover:bg-brand/20 transition-colors"
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                          }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: ANIMATION_TIMINGS.hover }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              ref={valuesRef.ref}
              initial="hidden"
              animate={valuesRef.isVisible ? "visible" : "hidden"}
              variants={containerVariants}
              className="pt-8 border-t border-border"
            >
              <h2 className="text-display text-3xl font-bold mb-4">What Drives Me</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Innovation for Impact:",
                    desc: "Using technology to solve real-world problems",
                  },
                  {
                    title: "Continuous Learning:",
                    desc: "Always exploring new technologies and pushing my limits",
                  },
                  {
                    title: "Community Building:",
                    desc: "Sharing knowledge and lifting others up",
                  },
                  {
                    title: "Excellence:",
                    desc: "Striving for quality in everything I create",
                  },
                ].map((value, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4"
                    whileHover={{ x: 4 }}
                    transition={{ duration: ANIMATION_TIMINGS.hover }}
                  >
                    <span className="text-brand font-bold text-xl">→</span>
                    <span className="text-ink-soft">
                      <strong className="text-ink">{value.title}</strong> {value.desc}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: ANIMATION_TIMINGS.scrollReveal,
              ease: ANIMATION_EASING.scrollReveal,
              delay: 0.1,
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-1"
          >
            <motion.div
              className="sticky top-24 rounded-2xl border border-border bg-surface-elevated p-6 space-y-6"
              whileHover={{ y: -4 }}
              transition={{ duration: ANIMATION_TIMINGS.hover }}
            >
              <div>
                <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">
                  Location
                </p>
                <p className="text-ink font-medium">South Africa</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">
                  Currently
                </p>
                <p className="text-ink font-medium">Grade 10 Student</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">
                  Interests
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-ink-soft">Robotics</p>
                  <p className="text-sm text-ink-soft">Coding</p>
                  <p className="text-sm text-ink-soft">Science</p>
                  <p className="text-sm text-ink-soft">Innovation</p>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:gap-3 transition-all"
                >
                  Get in touch
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: ANIMATION_TIMINGS.scrollReveal,
          ease: ANIMATION_EASING.scrollReveal,
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="container-x py-16 md:py-24 border-t border-border"
      >
        <div className="max-w-2xl">
          <h2 className="text-display text-3xl md:text-4xl font-bold mb-4">Let's collaborate</h2>
          <p className="text-lg text-ink-soft mb-8">
            I'm always interested in connecting with people who share a passion for innovation and making a positive impact. Whether it's a project, mentorship, or just a conversation, feel free to reach out!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg"
          >
            Start a conversation
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </Link>
        </div>
      </motion.section>
    </Layout>
  );
}
