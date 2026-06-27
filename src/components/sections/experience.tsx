"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "A2Infotech Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    duration: "January 2026 – March 2026",
    location: "Bhopal, Madhya Pradesh",
    description:
      "Worked as a Full Stack Web Developer Intern, developing scalable web applications and REST APIs using the MERN stack.",
    responsibilities: [
      "Developed responsive web applications using React.js",
      "Built RESTful APIs with Node.js and Express.js",
      "Managed MongoDB database operations and optimization",
      "Improved application scalability and performance",
      "Collaborated on full-stack development projects with the team",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative">
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
            Where I&apos;ve worked
          </span>
          <h2 style={{ marginBottom: 24 }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-[80px] h-[3px] bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-[800px] mx-auto">
          <motion.div
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #7C3AED, #2563EB, #06B6D4)" }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
              className="relative"
              style={{ marginBottom: 48 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-[16px] h-[16px] rounded-full bg-primary border-4 border-dark-bg z-10"
                style={{ boxShadow: "0 0 20px rgba(124,58,237,0.5)" }}
              />
              <motion.div
                className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-[16px] h-[16px] rounded-full bg-primary/30 z-0"
                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className={`ml-[64px] md:ml-0 ${i % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-[24px] bg-dark-card border border-dark-border hover:border-primary/30 transition-all group neon-border"
                  style={{ padding: 32 }}
                >
                  <div style={{ marginBottom: 16 }}>
                    <h3 className="text-[20px] font-bold text-dark-text group-hover:text-primary transition-colors" style={{ marginBottom: 8 }}>
                      {exp.role}
                    </h3>
                    <div className="flex items-center" style={{ gap: 8 }}>
                      <Briefcase size={15} className="text-secondary" />
                      <span className="text-[15px] font-medium text-secondary">{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap text-[13px] text-dark-text-muted" style={{ gap: 16, marginBottom: 20 }}>
                    <span className="flex items-center" style={{ gap: 6 }}>
                      <Calendar size={13} /> {exp.duration}
                    </span>
                    <span className="flex items-center" style={{ gap: 6 }}>
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>

                  <p className="text-dark-text-secondary" style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
                    {exp.description}
                  </p>

                  <ul style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                    {exp.responsibilities.map((resp, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + j * 0.1 }}
                        className="flex items-start text-[15px] text-dark-text-secondary"
                        style={{ gap: 10, lineHeight: 1.6 }}
                      >
                        <ChevronRight size={15} className="text-primary shrink-0" style={{ marginTop: 3 }} />
                        {resp}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap" style={{ gap: 8 }}>
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="text-[12px] font-medium border border-primary/10 text-primary rounded-lg" style={{ padding: "6px 12px", background: "rgba(124,58,237,0.08)" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
