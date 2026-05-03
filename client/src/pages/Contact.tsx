import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { ANIMATION_TIMINGS, ANIMATION_EASING, containerVariants, itemVariants } from "@/lib/animations";

/**
 * Design: Warm Editorial + Kinetic Editorial Animations
 * - Clean contact form with minimal styling
 * - Multiple contact methods with staggered animations
 * - Form field animations
 */

const CONTACT_METHODS = [
  {
    icon: Mail,
    title: "Email",
    link: "mailto:clydesnyders17@gmail.com",
    text: "clydesnyders17@gmail.com",
  },
  {
    icon: MessageSquare,
    title: "Instagram",
    link: "https://www.instagram.com/clyde.snyders?igsh=aDRxZTF5MG5rdzQy",
    text: "@clyde.snyders",
    external: true,
  },
  {
    icon: Phone,
    title: "GitHub",
    link: "https://github.com/clyder-snyders",
    text: "@clyder-snyders",
    external: true,
  },
];

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
        <h1 className="text-display text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg text-ink-soft max-w-2xl">
          I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out.
        </p>
      </motion.section>

      {/* Contact Methods */}
      <section className="container-x pb-16 md:pb-24">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          {CONTACT_METHODS.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                href={method.link}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                className="group rounded-2xl border border-border bg-surface-elevated p-6 hover:border-brand/50 transition-all hover:shadow-lg"
                whileHover={{ y: -4 }}
                transition={{ duration: ANIMATION_TIMINGS.hover }}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: ANIMATION_TIMINGS.hover }}
                >
                  <Icon className="h-6 w-6 text-brand" />
                </motion.div>
                <h3 className="text-display text-lg font-bold mb-2">{method.title}</h3>
                <p className="text-ink-soft hover:text-brand transition-colors break-all">
                  {method.text}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION_TIMINGS.scrollReveal,
            ease: ANIMATION_EASING.scrollReveal,
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl"
        >
          <h2 className="text-display text-3xl font-bold mb-8">Send me a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: ANIMATION_TIMINGS.entrance,
                  ease: ANIMATION_EASING.entrance,
                  delay: 0.05,
                }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
                  placeholder="John Doe"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: ANIMATION_TIMINGS.entrance,
                  ease: ANIMATION_EASING.entrance,
                  delay: 0.1,
                }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                  Your Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
                  placeholder="john@example.com"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </div>

            {/* Subject Field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION_TIMINGS.entrance,
                ease: ANIMATION_EASING.entrance,
                delay: 0.15,
              }}
              viewport={{ once: true }}
            >
              <label htmlFor="subject" className="block text-sm font-medium text-ink mb-2">
                Subject
              </label>
              <motion.input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
                placeholder="What's this about?"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION_TIMINGS.entrance,
                ease: ANIMATION_EASING.entrance,
                delay: 0.2,
              }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                Message
              </label>
              <motion.textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all resize-none"
                placeholder="Tell me more about your message..."
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full md:w-auto inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION_TIMINGS.entrance,
                ease: ANIMATION_EASING.entrance,
                delay: 0.25,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Additional Info */}
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
          <h2 className="text-display text-2xl font-bold mb-4">Response Time</h2>
          <p className="text-ink-soft leading-relaxed">
            I try to respond to all messages within 24-48 hours. If you don't hear back from me, please check your spam folder or reach out via Instagram or GitHub.
          </p>
        </div>
      </motion.section>
    </Layout>
  );
}
