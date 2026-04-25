import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

/**
 * Design: Warm Editorial
 * - Long-form content with generous spacing
 * - Visual hierarchy with typography
 * - Skill badges and highlights
 */

const SKILLS = [
  { category: "Programming", items: ["Python", "JavaScript", "TypeScript", "C++", "React", "Node.js"] },
  { category: "Robotics", items: ["Arduino", "ROS", "CAD Design", "Mechanical Engineering", "Sensor Integration", "Control Systems"] },
  { category: "Tools & Platforms", items: ["Git", "Docker", "Firebase", "MongoDB", "AWS", "Linux"] },
  { category: "Soft Skills", items: ["Team Leadership", "Problem Solving", "Communication", "Project Management", "Mentoring"] },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="container-x pt-12 md:pt-20 pb-12 md:pb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:gap-3 transition-all mb-8">
          <ArrowRight className="h-4 w-4 rotate-180" /> Back home
        </Link>
        <h1 className="text-display text-5xl md:text-7xl">
          About
          <br />
          <span className="italic font-light">me</span>
        </h1>
      </section>

      {/* Story */}
      <section className="container-x py-12 md:py-16">
        <div className="max-w-3xl">
          <p className="text-eyebrow mb-6">My story</p>
          <div className="space-y-6 text-lg text-ink-soft">
            <p>
              I'm Clyde Snyders, a 16-year-old student from South Africa with a passion for technology, robotics, and solving real-world problems. My journey into the world of coding and robotics began in Grade 8 when I first discovered the power of programming to bring ideas to life.
            </p>
            <p>
              What started as curiosity has evolved into a serious pursuit. I've spent the last few years building projects, competing in robotics competitions, and continuously learning new technologies. Whether it's writing efficient code, designing mechanical systems, or leading a team through challenges, I'm driven by the desire to create something meaningful.
            </p>
            <p>
              My experience spans full-stack web development, robotics systems integration, and competitive programming. I've represented South Africa at the First Global Challenge, earned medals in regional robotics competitions, and led my team to runner-up in our first hackathon. But beyond the achievements, what I value most is the learning process and the relationships I build along the way.
            </p>
            <p>
              I believe in the power of collaboration and mentorship. I'm always eager to help younger students get started in coding and robotics, and I'm equally excited to learn from experienced professionals in the field. My goal is not just to build cool projects, but to contribute to a community of innovators and problem-solvers.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="container-x py-12 md:py-24">
        <p className="text-eyebrow mb-8">Skills & expertise</p>
        <div className="grid gap-12 md:grid-cols-2">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-display text-xl mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-4 py-2 rounded-full bg-brand/10 text-brand text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container-x py-12 md:py-24">
        <p className="text-eyebrow mb-8">Timeline</p>
        <div className="max-w-3xl space-y-8">
          <div className="border-l-2 border-brand/30 pl-6">
            <p className="font-mono text-sm uppercase tracking-widest text-brand font-semibold mb-2">2026</p>
            <h4 className="text-display text-lg mb-2">First Global Challenge</h4>
            <p className="text-ink-soft">Head Programmer for Team South Africa, competing among 118 nations in Panama.</p>
          </div>
          <div className="border-l-2 border-brand/30 pl-6">
            <p className="font-mono text-sm uppercase tracking-widest text-brand font-semibold mb-2">2026</p>
            <h4 className="text-display text-lg mb-2">Hackathon Success</h4>
            <p className="text-ink-soft">Led team to runner-up position in first hackathon, demonstrating leadership and technical skills.</p>
          </div>
          <div className="border-l-2 border-brand/30 pl-6">
            <p className="font-mono text-sm uppercase tracking-widest text-brand font-semibold mb-2">2025</p>
            <h4 className="text-display text-lg mb-2">Robotics Excellence</h4>
            <p className="text-ink-soft">Achieved regional gold and 6th place nationally in Springbots Robotics competition.</p>
          </div>
          <div className="border-l-2 border-brand/30 pl-6">
            <p className="font-mono text-sm uppercase tracking-widest text-brand font-semibold mb-2">2024</p>
            <h4 className="text-display text-lg mb-2">Team Leadership</h4>
            <p className="text-ink-soft">Promoted to robotics team lead, mentoring younger students and organizing competitions.</p>
          </div>
          <div className="border-l-2 border-brand/30 pl-6">
            <p className="font-mono text-sm uppercase tracking-widest text-brand font-semibold mb-2">2023</p>
            <h4 className="text-display text-lg mb-2">Journey Begins</h4>
            <p className="text-ink-soft">Started learning programming and robotics, participating in first competitions.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-12 md:py-24">
        <p className="text-eyebrow mb-8">What I value</p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="surface-card p-8">
            <h3 className="text-display text-xl mb-3">Learning</h3>
            <p className="text-ink-soft">
              I'm committed to continuous learning and growth. Every project is an opportunity to expand my skills and knowledge.
            </p>
          </div>
          <div className="surface-card p-8">
            <h3 className="text-display text-xl mb-3">Collaboration</h3>
            <p className="text-ink-soft">
              Great things are built together. I believe in the power of teamwork and diverse perspectives.
            </p>
          </div>
          <div className="surface-card p-8">
            <h3 className="text-display text-xl mb-3">Innovation</h3>
            <p className="text-ink-soft">
              I'm passionate about pushing boundaries and finding creative solutions to complex problems.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
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
          <div className="relative">
            <p className="text-eyebrow">Let's connect</p>
            <h2 className="mt-4 text-display text-4xl md:text-5xl mb-6">
              Interested in working together?
            </h2>
            <p className="max-w-2xl text-ink-soft mb-6">
              I'm always open to new opportunities, collaborations, and conversations. Let's build something amazing together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
