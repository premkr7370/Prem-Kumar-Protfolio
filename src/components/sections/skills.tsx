"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaNpm
} from "react-icons/fa";
import {
  SiTypescript, SiJavascript, SiMongodb, SiExpress, SiTailwindcss,
  SiNextdotjs, SiPostman, SiNetlify, SiRender, SiCloudinary
} from "react-icons/si";
import { Database, Code2, Shield, Plug, Terminal, Wind } from "lucide-react";

interface SkillItem { name: string; icon: React.ElementType; color: string; }

const categories = [
  {
    key: "frontend", label: "Frontend", color: "#7C3AED",
    skills: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ] as SkillItem[],
  },
  {
    key: "backend", label: "Backend", color: "#22C55E",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", icon: Plug, color: "#F59E0B" },
      { name: "JWT Auth", icon: Shield, color: "#EF4444" },
    ] as SkillItem[],
  },
  {
    key: "database", label: "Database", color: "#2563EB",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL", icon: Database, color: "#336791" },
    ] as SkillItem[],
  },
  {
    key: "tools", label: "Tools & DevOps", color: "#06B6D4",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#E6EDF3" },
      { name: "VS Code", icon: Code2, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
      { name: "Render", icon: SiRender, color: "#46E3B7" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "npm", icon: FaNpm, color: "#CB3837" },
      { name: "Terminal", icon: Terminal, color: "#A78BFA" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "C/C++", icon: Wind, color: "#00599C" },
    ] as SkillItem[],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: 64 }}
        >
          <span className="text-primary text-[14px] font-semibold uppercase tracking-[0.2em] block" style={{ marginBottom: 16 }}>
            What I Know
          </span>
          <h2 style={{ marginBottom: 24 }}>
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-[80px] h-[3px] bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.15, duration: 0.5 }}
            >
              <h3 className="text-[20px] font-semibold flex items-center" style={{ marginBottom: 24, gap: 12 }}>
                <motion.span
                  className="w-[12px] h-[12px] rounded-full shrink-0"
                  style={{ background: cat.color, boxShadow: `0 0 12px ${cat.color}40` }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: catIdx * 0.5 }}
                />
                {cat.label}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" style={{ gap: 16 }}>
                {cat.skills.map((skill, i) => {
                  const IconComp = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: catIdx * 0.1 + i * 0.05 }}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="group relative rounded-[24px] bg-dark-card border border-dark-border hover:border-primary/25 transition-all duration-300 cursor-default text-center neon-border"
                      style={{ padding: 24 }}
                    >
                      <div
                        className="rounded-xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110"
                        style={{ width: 44, height: 44, background: `${skill.color}10`, color: skill.color, marginBottom: 12 }}
                      >
                        <IconComp size={22} />
                      </div>
                      <span className="text-[13px] font-medium text-dark-text-secondary group-hover:text-dark-text transition-colors block">
                        {skill.name}
                      </span>

                      <div
                        className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
                        style={{ background: `${skill.color}08` }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
