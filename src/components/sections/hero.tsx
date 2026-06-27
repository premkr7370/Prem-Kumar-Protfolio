"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Download, Sparkles, Rocket } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { Mail } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Node.js Developer",
  "Problem Solver",
];

const floatingBadges = [
  { label: "React", color: "#61DAFB", delay: 0 },
  { label: "Node.js", color: "#68A063", delay: 1.5 },
  { label: "MongoDB", color: "#47A248", delay: 3 },
  { label: "Express.js", color: "#F5F5F5", delay: 4.5 },
  { label: "TypeScript", color: "#3178C6", delay: 6 },
];

const socialLinks = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/prem-kumar-079100244/", label: "LinkedIn", color: "#0A66C2" },
  { icon: FaGithub, href: "https://github.com/premkr7370", label: "GitHub", color: "#E6EDF3" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/averageCoder7370/", label: "LeetCode", color: "#FFA116" },
  { icon: SiGeeksforgeeks, href: "https://www.geeksforgeeks.org/profile/premkrma", label: "GFG", color: "#2F8D46" },
  { icon: Mail, href: "mailto:kumarmehta7370@gmail.com", label: "Email", color: "#7C3AED" },
];

const floatingCodeIcons = [
  { symbol: "⚛️", top: "15%", left: "8%", duration: 7, rotate: 10 },
  { symbol: "{ }", top: "70%", left: "5%", duration: 9, rotate: -5 },
  { symbol: "< />", top: "25%", right: "6%", duration: 8, rotate: 8 },
  { symbol: "λ", top: "80%", right: "10%", duration: 10, rotate: -12 },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const y = (e.clientY - rect.top - rect.height / 2) / 30;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, [handleMouseMove]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentRole) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="grid-bg" />

        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[15%] w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-[15%] w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
          style={{ background: "radial-gradient(circle, #2563EB, transparent)" }}
        />

        {[...Array(4)].map((_, i) => (
          <div
            key={`star-${i}`}
            className={i % 2 === 0 ? "shooting-star" : "shooting-star-2"}
            style={{ top: `${10 + i * 20}%`, left: `${-10 + i * 15}%`, animationDelay: `${i * 2.5}s`, animationDuration: `${2 + i * 0.7}s` }}
          />
        ))}

        {floatingCodeIcons.map((icon, i) => (
          <motion.div
            key={`code-icon-${i}`}
            className="absolute text-2xl md:text-3xl opacity-[0.07] pointer-events-none select-none"
            style={{ top: icon.top, left: icon.left, right: (icon as { right?: string }).right }}
            animate={{ y: [0, -25, 0], rotate: [0, icon.rotate, 0] }}
            transition={{ duration: icon.duration, repeat: Infinity, ease: "easeInOut", delay: i * 1.2 }}
          >
            {icon.symbol}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="section-container relative z-10" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: 64 }}>
          {/* Left Side — Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-dark-card/80 border border-dark-border"
              style={{ marginBottom: 32 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
              </span>
              <span className="text-[14px] font-medium text-dark-text-secondary">
                Available for Opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-dark-text-secondary font-medium" style={{ fontSize: 20, marginBottom: 12 }}>
                Hi, I&apos;m
              </p>
              <h1 style={{ marginBottom: 24 }}>
                <span className="gradient-text-hero">Prem Kumar</span>
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-2"
              style={{ marginBottom: 24 }}
            >
              <span className="text-[20px] font-mono font-medium text-primary">&lt;</span>
              <span className="text-[20px] font-mono text-dark-text min-h-[28px]">{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-0.5 h-7 bg-primary inline-block"
              />
              <span className="text-[20px] font-mono font-medium text-primary">/&gt;</span>
            </motion.div>

            {/* Description — max 650px */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-dark-text-secondary mx-auto lg:mx-0"
              style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 650, marginBottom: 32 }}
            >
              I build scalable, animated and user-friendly web applications that
              solve real-world problems and deliver exceptional digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start"
              style={{ gap: 16, marginBottom: 48 }}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <Sparkles size={16} />
                Explore My Work
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1SbH8FFpKO0bm5HprseumKy2a2cotdDvi/view"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline neon-border"
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center lg:justify-start"
              style={{ gap: 12 }}
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.08 }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[44px] h-[44px] rounded-2xl bg-dark-card/80 border border-dark-border flex items-center justify-center text-dark-text-muted transition-all duration-300"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = social.color;
                    (e.currentTarget as HTMLElement).style.borderColor = `${social.color}40`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px ${social.color}20`;
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
            </motion.div>
          </motion.div>

          {/* Right Side — Cartoon Workspace */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center order-1 lg:order-2"
            style={{ x: springX, y: springY }}
          >
            <div
              className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full blur-[100px] opacity-25"
              style={{ background: "radial-gradient(circle, #7C3AED 0%, #2563EB 50%, transparent 70%)" }}
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px]"
            >
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden"
                animate={{ scale: [1, 1.01, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="/images/cartoon-workspace.png"
                  alt="Prem Kumar - Developer Workspace"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Floating Tech Badges */}
              {floatingBadges.map((badge, i) => {
                const positions = [
                  { top: "-5%", right: "10%" },
                  { top: "15%", left: "-14%" },
                  { bottom: "10%", left: "-10%" },
                  { bottom: "-5%", right: "12%" },
                  { top: "40%", right: "-16%" },
                ];
                const pos = positions[i % positions.length];
                return (
                  <motion.div
                    key={badge.label}
                    animate={{ y: [0, -14, 0], x: [0, i % 2 === 0 ? 6 : -6, 0] }}
                    transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: badge.delay * 0.3, ease: "easeInOut" }}
                    className="absolute z-10 px-3.5 py-2 rounded-xl text-[13px] font-semibold glass-strong border border-dark-border shadow-lg backdrop-blur-xl"
                    style={{ ...pos, color: badge.color, borderColor: `${badge.color}25`, boxShadow: `0 0 20px ${badge.color}12, 0 4px 12px rgba(0,0,0,0.2)` }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ background: badge.color }} />
                      {badge.label}
                    </span>
                  </motion.div>
                );
              })}

              {/* Floating Rocket */}
              <motion.div
                animate={{ y: [0, -100], opacity: [0, 1, 1, 0], rotate: [0, -5, -10] }}
                transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 6, ease: "easeOut" }}
                className="absolute top-8 right-2 text-2xl"
              >
                <Rocket size={22} className="text-primary-light" />
              </motion.div>
            </motion.div>

            {/* Orbiting rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[380px] h-[380px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] rounded-full border border-dashed border-dark-border/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute w-[440px] h-[440px] md:w-[580px] md:h-[580px] rounded-full border border-dotted border-dark-border/10"
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ bottom: 32 }}
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-dark-text-muted font-medium">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown size={16} className="text-dark-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
