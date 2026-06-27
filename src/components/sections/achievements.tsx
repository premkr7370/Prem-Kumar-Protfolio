"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, Trophy, Briefcase, Clock, Heart } from "lucide-react";

const achievements = [
  { icon: Code2, label: "LeetCode Problems Solved", value: 260, suffix: "+", color: "#F59E0B" },
  { icon: Trophy, label: "GFG Problems Solved", value: 500, suffix: "+", color: "#22C55E" },
  { icon: Briefcase, label: "Projects Completed", value: 5, suffix: "+", color: "#7C3AED" },
  { icon: Clock, label: "Internship Experience", value: 3, suffix: " Months", color: "#2563EB" },
  { icon: Heart, label: "Passion for Code & Design", value: 100, suffix: "%", color: "#EF4444" },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return <span>{display}{suffix}</span>;
}

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding relative">
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
            Milestones
          </span>
          <h2 style={{ marginBottom: 24 }}>
            My <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-[80px] h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" style={{ gap: 20 }}>
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative rounded-[24px] bg-dark-card border border-dark-border text-center transition-all hover:border-primary/25 neon-border"
              style={{ padding: 32 }}
            >
              <div
                className="rounded-2xl flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110"
                style={{ width: 52, height: 52, background: `${item.color}12`, color: item.color, marginBottom: 20 }}
              >
                <item.icon size={24} />
              </div>

              <p className="font-bold gradient-text" style={{ fontSize: 32, lineHeight: 1.2, marginBottom: 8 }}>
                <AnimatedCounter value={item.value} suffix={item.suffix} inView={isInView} />
              </p>

              <p className="text-[13px] text-dark-text-muted" style={{ lineHeight: 1.4 }}>{item.label}</p>

              <div
                className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
                style={{ background: `${item.color}06` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
