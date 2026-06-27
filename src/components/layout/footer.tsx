"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, ArrowUp, Code2, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/premkr7370", label: "GitHub", color: "#E6EDF3" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/prem-kumar-079100244/", label: "LinkedIn", color: "#0A66C2" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/averageCoder7370/", label: "LeetCode", color: "#FFA116" },
  { icon: Code2, href: "https://www.geeksforgeeks.org/profile/premkrma", label: "GFG", color: "#2F8D46" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-dark-border bg-dark-bg-secondary/30" ref={ref}>
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-container" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center" style={{ gap: 12, marginBottom: 20 }}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-[15px]">
                P
              </div>
              <span className="font-bold text-lg">
                Prem <span className="gradient-text">Kumar</span>
              </span>
            </div>
            <p className="text-dark-text-secondary text-[15px] leading-[1.7]" style={{ marginBottom: 24, maxWidth: 320 }}>
              Building scalable full-stack applications with modern web technologies and creating seamless digital experiences.
            </p>
            <div className="flex" style={{ gap: 12 }}>
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-dark-card hover:bg-dark-card-hover border border-dark-border flex items-center justify-center text-dark-text-secondary transition-all duration-300"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = social.color;
                    (e.currentTarget as HTMLElement).style.borderColor = `${social.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "";
                    (e.currentTarget as HTMLElement).style.borderColor = "";
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={17} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-[12px] uppercase tracking-[0.15em] text-dark-text-muted" style={{ marginBottom: 24 }}>
              Quick Links
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-dark-text-secondary hover:text-primary text-[15px] flex items-center transition-colors group"
                    style={{ gap: 8 }}
                  >
                    <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold text-[12px] uppercase tracking-[0.15em] text-dark-text-muted" style={{ marginBottom: 24 }}>
              Get In Touch
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }} className="text-[15px] text-dark-text-secondary">
              <p>📍 Bhopal, Madhya Pradesh, India</p>
              <p>
                ✉️{" "}
                <a href="mailto:kumarmehta7370@gmail.com" className="hover:text-primary transition-colors">
                  kumarmehta7370@gmail.com
                </a>
              </p>
              <a
                href="https://drive.google.com/file/d/1SbH8FFpKO0bm5HprseumKy2a2cotdDvi/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 text-primary text-[14px] font-medium hover:bg-primary/15 transition-colors w-fit"
                style={{ marginTop: 8 }}
              >
                📄 Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-dark-border" style={{ paddingTop: 32, gap: 16 }}>
          <p className="text-dark-text-muted text-[14px] flex items-center" style={{ gap: 6 }}>
            © {new Date().getFullYear()} Prem Kumar. Made with{" "}
            <Heart size={13} className="text-error fill-error" /> and Next.js
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-xl bg-dark-card hover:bg-dark-card-hover border border-dark-border text-dark-text-secondary hover:text-primary transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={17} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
