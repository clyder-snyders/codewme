import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

/**
 * Design: Warm Editorial
 * - Long-form content with generous spacing
 * - Skills organized by category
 */

const SKILLS = [
  { category: "Programming", items: ["Python", "Block Coding", "JavaScript", "C++"] },
  { category: "Robotics", items: ["Arduino", "CAD Design", "Raspberry Pi", "LEGO"] },
  { category: "Tools & Platforms", items: ["GitHub", "Firebase", "Supabase", "Linux", "Vercel"] },
];

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <section className="container-x pt-12 md:pt-20 pb-12 md:pb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:gap-3 transition-all mb-8">
          <ArrowRight className="h-4 w-4 rotate-180" /> Back home
        </Link>
        <h1 className="text-display text-5xl md:text-6xl font-bold mb-6">About me</h1>
      </section>

      {/* Main Content */}
      <section className="container-x pb-24 md:pb-32">
        <div className="grid gap-16 md:grid-cols-3">
          {/* Bio */}
          <div className="md:col-span-2 space-y-6">
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
            <div className="pt-8 border-t border-border">
              <h2 className="text-display text-3xl font-bold mb-8">Skills & Expertise</h2>
              <div className="space-y-8">
                {SKILLS.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h3 className="text-display text-xl font-bold text-brand mb-4">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 rounded-full bg-brand/10 text-brand font-medium text-sm hover:bg-brand/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="pt-8 border-t border-border">
              <h2 className="text-display text-3xl font-bold mb-4">What Drives Me</h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-brand font-bold text-xl">→</span>
                  <span className="text-ink-soft">
                    <strong className="text-ink">Innovation for Impact:</strong> Using technology to solve real-world problems
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand font-bold text-xl">→</span>
                  <span className="text-ink-soft">
                    <strong className="text-ink">Continuous Learning:</strong> Always exploring new technologies and pushing my limits
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand font-bold text-xl">→</span>
                  <span className="text-ink-soft">
                    <strong className="text-ink">Community Building:</strong> Sharing knowledge and lifting others up
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-brand font-bold text-xl">→</span>
                  <span className="text-ink-soft">
                    <strong className="text-ink">Excellence:</strong> Striving for quality in everything I create
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-surface-elevated p-6 space-y-6">
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
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-16 md:py-24 border-t border-border">
        <div className="max-w-2xl">
          <h2 className="text-display text-3xl md:text-4xl font-bold mb-4">Let's collaborate</h2>
          <p className="text-lg text-ink-soft mb-8">
            I'm always interested in connecting with people who share a passion for innovation and making a positive impact. Whether it's a project, mentorship, or just a conversation, feel free to reach out!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg"
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
