"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Loader2, CheckCircle } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 4000);
    } catch {
      /* ignore */
    }
    setLoading(false);
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/premkr7370", label: "GitHub", color: "#E6EDF3" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/prem-kumar-079100244/", label: "LinkedIn", color: "#0A66C2" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/averageCoder7370/", label: "LeetCode", color: "#FFA116" },
    { icon: SiGeeksforgeeks, href: "https://www.geeksforgeeks.org/profile/premkrma", label: "GFG", color: "#2F8D46" },
  ];

  return (
    <section id="contact" className="section-padding relative">
      {/* Background decoration */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[180px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #7C3AED, #2563EB, transparent)" }}
      />

      <div className="section-container relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: 64 }}
        >
          <span className="text-primary text-[14px] font-semibold uppercase tracking-[0.2em] block" style={{ marginBottom: 16 }}>
            Get in touch
          </span>
          <h2 style={{ marginBottom: 24 }}>
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-[80px] h-[3px] bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto" style={{ gap: 48 }}>
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-[22px] font-bold text-dark-text" style={{ marginBottom: 16 }}>
              Let&apos;s build something amazing together
            </h3>
            <p className="text-dark-text-secondary" style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 500 }}>
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="flex items-center group"
                style={{ gap: 16 }}
              >
                <div className="w-[48px] h-[48px] rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center text-primary transition-all duration-300 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[12px] text-dark-text-muted" style={{ marginBottom: 2 }}>Email</p>
                  <a href="mailto:kumarmehta7370@gmail.com" className="text-[15px] font-medium text-dark-text hover:text-primary transition-colors">
                    kumarmehta7370@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-center group"
                style={{ gap: 16 }}
              >
                <div className="w-[48px] h-[48px] rounded-xl bg-secondary/10 group-hover:bg-secondary/20 flex items-center justify-center text-secondary transition-all duration-300 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[12px] text-dark-text-muted" style={{ marginBottom: 2 }}>Location</p>
                  <p className="text-[15px] font-medium text-dark-text">Bhopal, Madhya Pradesh, India</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex" style={{ gap: 12, paddingTop: 32 }}>
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[44px] h-[44px] rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-dark-text-muted transition-all duration-300"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = social.color;
                    (e.currentTarget as HTMLElement).style.borderColor = `${social.color}30`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${social.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "";
                    (e.currentTarget as HTMLElement).style.borderColor = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label htmlFor="contact-name" className="block text-[13px] font-medium text-dark-text-secondary" style={{ marginBottom: 8 }}>
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-[13px] font-medium text-dark-text-secondary" style={{ marginBottom: 8 }}>
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-[13px] font-medium text-dark-text-secondary" style={{ marginBottom: 8 }}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-field resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center"
                style={{ marginTop: 8, height: 52 }}
              >
                {loading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : success ? (
                  <>
                    <CheckCircle size={16} />
                    Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
