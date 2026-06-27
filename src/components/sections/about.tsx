"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, Briefcase, Code2, Heart } from "lucide-react";

const stats = [
  { label: "Projects Built", value: "5+", icon: Briefcase, color: "#7C3AED" },
  { label: "Problems Solved", value: "760+", icon: Code2, color: "#2563EB" },
  { label: "Months Experience", value: "3+", icon: Calendar, color: "#06B6D4" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
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
            Get to know me
          </span>
          <h2 style={{ marginBottom: 24 }}>
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-[80px] h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-start" style={{ gap: 64 }}>
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 700 }}>
              <p style={{ fontSize: 18, lineHeight: 1.7 }}>
                I am <span className="text-dark-text font-semibold">Prem Kumar</span>, a passionate{" "}
                <span className="text-primary font-medium">Computer Science Engineering</span>{" "}
                (Cyber Security) student at{" "}
                <span className="text-dark-text font-medium">IES College of Technology, Bhopal</span>.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.7 }}>
                With a CGPA of <span className="text-accent font-semibold">7.7</span>, I have built a strong
                foundation in computer science fundamentals while specializing in full-stack web
                development using the MERN stack.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.7 }}>
                I completed a <span className="text-primary font-medium">Full Stack Developer Internship</span>{" "}
                at A2Infotech Pvt. Ltd., where I worked on scalable web applications, REST APIs,
                and MongoDB operations. I enjoy solving DSA problems and building products that
                deliver excellent user experiences.
              </p>
            </div>

            {/* Location & Education */}
            <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: MapPin, color: "#7C3AED", label: "Location", value: "Bhopal, Madhya Pradesh, India" },
                { icon: GraduationCap, color: "#2563EB", label: "Education", value: "B.Tech CSE (Cyber Security) — CGPA: 7.7" },
                { icon: Heart, color: "#06B6D4", label: "Passion", value: "Creating scalable web apps & solving DSA" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center group"
                  style={{ gap: 16 }}
                >
                  <div
                    className="flex items-center justify-center rounded-2xl transition-all duration-300 shrink-0"
                    style={{
                      width: 48,
                      height: 48,
                      background: `${item.color}12`,
                      color: item.color,
                    }}
                  >
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[12px] text-dark-text-muted" style={{ marginBottom: 2 }}>{item.label}</p>
                    <p className="text-[15px] font-medium text-dark-text">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1"
            style={{ gap: 20 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative rounded-[24px] bg-dark-card border border-dark-border hover:border-primary/30 transition-all text-center group neon-border"
                style={{ padding: 32 }}
              >
                <div
                  className="rounded-2xl flex items-center justify-center mx-auto transition-all duration-300"
                  style={{ width: 56, height: 56, background: `${stat.color}12`, color: stat.color, marginBottom: 16 }}
                >
                  <stat.icon size={24} />
                </div>
                <p className="font-bold gradient-text" style={{ fontSize: 36, lineHeight: 1.2, marginBottom: 8 }}>
                  {stat.value}
                </p>
                <p className="text-[13px] text-dark-text-muted uppercase tracking-[0.15em]">{stat.label}</p>

                <div
                  className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                  style={{ background: `${stat.color}06` }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
