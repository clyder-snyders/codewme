import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import Layout from "@/components/Layout";

/**
 * Design: Warm Editorial
 * - Clean contact form with minimal styling
 * - Multiple contact methods
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:clydesnyders17@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <Layout>
      {/* Header */}
      <section className="container-x pt-12 md:pt-20 pb-12 md:pb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:gap-3 transition-all mb-8">
          <ArrowRight className="h-4 w-4 rotate-180" /> Back home
        </Link>
        <h1 className="text-display text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg text-ink-soft max-w-2xl">
          I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="container-x pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email */}
          <div className="group rounded-2xl border border-border bg-surface-elevated p-6 hover:border-brand/50 transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
              <Mail className="h-6 w-6 text-brand" />
            </div>
            <h3 className="text-display text-lg font-bold mb-2">Email</h3>
            <a
              href="mailto:clydesnyders17@gmail.com"
              className="text-ink-soft hover:text-brand transition-colors break-all"
            >
              clydesnyders17@gmail.com
            </a>
          </div>

          {/* Instagram */}
          <div className="group rounded-2xl border border-border bg-surface-elevated p-6 hover:border-brand/50 transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
              <MessageSquare className="h-6 w-6 text-brand" />
            </div>
            <h3 className="text-display text-lg font-bold mb-2">Instagram</h3>
            <a
              href="https://www.instagram.com/clyde.snyders?igsh=aDRxZTF5MG5rdzQy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft hover:text-brand transition-colors"
            >
              @clyde.snyders
            </a>
          </div>

          {/* GitHub */}
          <div className="group rounded-2xl border border-border bg-surface-elevated p-6 hover:border-brand/50 transition-all hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
              <Phone className="h-6 w-6 text-brand" />
            </div>
            <h3 className="text-display text-lg font-bold mb-2">GitHub</h3>
            <a
              href="https://github.com/clyder-snyders"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft hover:text-brand transition-colors"
            >
              @clyder-snyders
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl">
          <h2 className="text-display text-3xl font-bold mb-8">Send me a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-ink mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all resize-none"
                placeholder="Tell me more about your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg"
            >
              Send Message <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Additional Info */}
      <section className="container-x py-16 md:py-24 border-t border-border">
        <div className="max-w-2xl">
          <h2 className="text-display text-2xl font-bold mb-4">Response Time</h2>
          <p className="text-ink-soft leading-relaxed">
            I try to respond to all messages within 24-48 hours. If you don't hear back from me, please check your spam folder or reach out via Instagram or GitHub.
          </p>
        </div>
      </section>
    </Layout>
  );
}
