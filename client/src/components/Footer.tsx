import { Github, Instagram, Mail, ArrowRight } from "lucide-react";
import { Link } from "wouter";

/**
 * Design: Warm Editorial
 * - Premium footer with focused sections
 * - Student-focused messaging
 * - Social links and contact info
 * - Copyright and attribution
 * - Call-to-action for collaboration
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      {/* Main footer content */}
      <div className="container-x py-16 md:py-24">
        <div className="grid gap-16 md:grid-cols-3">
          {/* Brand & Message */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-brand text-white font-bold text-lg">
                CS
              </div>
              <span className="font-bold text-ink hidden sm:inline">Clyde</span>
            </Link>
            <p className="mt-6 text-sm text-ink-soft leading-relaxed max-w-xs">
              Built by a student, for students. Exploring the intersection of coding, robotics, and innovation.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-ink mb-6 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://github.com/clyder-snyders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-soft hover:text-brand transition-colors flex items-center gap-2"
                >
                  GitHub
                  <ArrowRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/clyde.snyders?igsh=aDRxZTF5MG5rdzQy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-soft hover:text-brand transition-colors flex items-center gap-2"
                >
                  Instagram
                  <ArrowRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:clydesnyders17@gmail.com"
                  className="text-ink-soft hover:text-brand transition-colors flex items-center gap-2"
                >
                  Email
                  <ArrowRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-ink-soft hover:text-brand transition-colors flex items-center gap-2"
                >
                  Contact
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-surface-elevated rounded-lg p-6 border border-border">
            <h3 className="font-semibold text-ink mb-3 text-sm">Let's Connect</h3>
            <p className="text-xs text-ink-soft mb-4">
              Open to collaborations, mentorship, and new opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-medium text-brand hover:gap-3 transition-all"
            >
              Get in touch <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Bottom section */}
      <div className="container-x py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs text-ink-soft">
          <div className="space-y-2">
            <p>
              © {currentYear} Clyde Snyders. Built with{" "}
              <span className="text-brand font-medium">passion</span> for innovation.
            </p>
            <p>
              Deployed on{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline font-medium"
              >
                Vercel
              </a>{" "}
              · Designed with{" "}
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline font-medium"
              >
                React
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:clydesnyders17@gmail.com"
              aria-label="Email"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:border-brand hover:bg-brand hover:text-white transition-all"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/clyder-snyders"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:border-brand hover:bg-brand hover:text-white transition-all"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/clyde.snyders?igsh=aDRxZTF5MG5rdzQy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:border-brand hover:bg-brand hover:text-white transition-all"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
