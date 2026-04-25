import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import Layout from "@/components/Layout";

/**
 * Design: Warm Editorial
 * - Clean contact form with minimal styling
 * - Multiple contact methods displayed prominently
 * - Warm, welcoming tone
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
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
        <h1 className="text-display text-5xl md:text-7xl">
          Get in
          <br />
          <span className="italic font-light">touch</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          I'd love to hear from you. Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="container-x py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {/* Email */}
          <a
            href="mailto:clydesnyders17@gmail.com"
            className="surface-card group p-8 hover:[&]:surface-card-hover"
          >
            <Mail className="h-8 w-8 text-brand mb-4" />
            <h3 className="text-display text-xl mb-2">Email</h3>
            <p className="text-ink-soft mb-4">Send me an email and I'll get back to you as soon as possible.</p>
            <p className="text-brand font-medium group-hover:gap-2 transition-all">
              clydesnyders17@gmail.com
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/clydesnyders05-oss"
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card group p-8 hover:[&]:surface-card-hover"
          >
            <MessageSquare className="h-8 w-8 text-brand mb-4" />
            <h3 className="text-display text-xl mb-2">GitHub</h3>
            <p className="text-ink-soft mb-4">Check out my projects and contributions on GitHub.</p>
            <p className="text-brand font-medium">github.com/clydesnyders05-oss</p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/c.snyders.05?igsh=aDRxZTF5MG5rdzQy"
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card group p-8 hover:[&]:surface-card-hover"
          >
            <Phone className="h-8 w-8 text-brand mb-4" />
            <h3 className="text-display text-xl mb-2">Instagram</h3>
            <p className="text-ink-soft mb-4">Follow me for updates on my projects and achievements.</p>
            <p className="text-brand font-medium">@c.snyders.05</p>
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container-x py-12 md:py-16">
        <div className="max-w-2xl">
          <h2 className="text-display text-3xl md:text-4xl mb-8">Send me a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-surface-elevated text-ink placeholder-ink-soft focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-surface-elevated text-ink placeholder-ink-soft focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-ink mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-surface-elevated text-ink placeholder-ink-soft focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
                placeholder="What's this about?"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border bg-surface-elevated text-ink placeholder-ink-soft focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-auto inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg"
            >
              Send Message <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-x py-24 md:py-32">
        <div className="max-w-3xl">
          <h2 className="text-display text-3xl md:text-4xl mb-12">Frequently asked questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-display text-xl mb-3">How quickly do you respond?</h3>
              <p className="text-ink-soft">
                I aim to respond to all messages within 24-48 hours. During school periods, it might take a bit longer, but I always get back to people.
              </p>
            </div>
            <div>
              <h3 className="text-display text-xl mb-3">Are you available for freelance projects?</h3>
              <p className="text-ink-soft">
                I'm open to interesting projects and collaborations, especially those related to robotics, coding, or science. Let's discuss what you have in mind!
              </p>
            </div>
            <div>
              <h3 className="text-display text-xl mb-3">Do you offer mentorship?</h3>
              <p className="text-ink-soft">
                Absolutely! I'm passionate about helping younger students get into coding and robotics. Reach out if you'd like to discuss mentorship opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-display text-xl mb-3">What's the best way to reach you?</h3>
              <p className="text-ink-soft">
                Email is the most reliable way to reach me. You can also connect with me on GitHub or Instagram for quick updates and project showcases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
