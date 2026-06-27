"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronRight, Sparkles } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-lg shadow-primary/5" : "bg-transparent"
        }`}
      >
        {/* 72px height, 60px horizontal padding */}
        <div className="max-w-[1400px] mx-auto" style={{ paddingLeft: 60, paddingRight: 60 }}>
          <div className="flex items-center justify-between" style={{ height: 72 }}>
            {/* Logo — Left */}
            <Link href="/" className="flex items-center gap-3 group relative z-10 shrink-0">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-base group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                P
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
              </div>
              <span className="font-bold text-lg tracking-tight hidden sm:block">
                <span className="text-dark-text">Prem</span>
                <span className="gradient-text ml-1.5">Kumar</span>
              </span>
            </Link>

            {/* Nav Links — Perfectly Centered with 32px gap */}
            <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
              <div className="flex items-center" style={{ gap: 32 }}>
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`nav-link-underline relative text-[14px] font-medium transition-all duration-300 text-glow-hover whitespace-nowrap ${
                        isActive
                          ? "text-primary active"
                          : "text-dark-text-secondary hover:text-dark-text"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Actions — theme toggle + Hire Me + mobile hamburger */}
            <div className="flex items-center relative z-10 shrink-0" style={{ gap: 16 }}>
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-dark-text-secondary hover:text-dark-text hover:bg-dark-card/60 transition-all duration-300"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === "dark" ? (
                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0, scale: 0.5 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: 90, opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }}>
                      <Sun size={18} />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0, scale: 0.5 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: -90, opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }}>
                      <Moon size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Hire Me CTA */}
              <a href="#contact" className="hidden sm:block">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-cta-nav animate-glow-pulse"
                >
                  <Sparkles size={15} />
                  Hire Me
                </motion.button>
              </a>

              {/* Mobile Hamburger */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileOpen(true)}
                className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-dark-text-secondary hover:text-dark-text hover:bg-dark-card/60 transition-all duration-300"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed right-0 top-0 bottom-0 w-[320px] max-w-[85vw] bg-dark-bg/95 backdrop-blur-xl border-l border-dark-border z-50 flex flex-col"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-6 border-b border-dark-border/50" style={{ height: 72 }}>
                <span className="font-bold text-lg gradient-text">Menu</span>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-dark-card transition-colors"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Mobile Links */}
              <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, type: "spring", stiffness: 300, damping: 25 }}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-4 py-4 rounded-2xl text-[15px] font-medium transition-all ${
                      activeSection === link.href.replace("#", "")
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "text-dark-text-secondary hover:text-dark-text hover:bg-dark-card"
                    }`}
                  >
                    {link.label}
                    <ChevronRight size={16} className="opacity-40" />
                  </motion.a>
                ))}
              </div>

              {/* Mobile Bottom */}
              <div className="p-4 border-t border-dark-border" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  <button className="w-full btn-primary" style={{ height: 48 }}>
                    <Sparkles size={16} />
                    Hire Me
                  </button>
                </a>
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl border border-dark-border text-dark-text-secondary text-[14px] font-medium hover:bg-dark-card transition-all"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
