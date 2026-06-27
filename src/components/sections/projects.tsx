"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ChevronRight, X, Globe, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "QuickHammer",
    slug: "quickhammer",
    description: "Auction Bidding Platform built using MERN Stack with real-time bidding, countdown timers, and comprehensive analytics.",
    features: ["Real-time bidding with live updates", "Countdown timers for auction deadlines", "Complete bid history tracking", "Admin dashboard with full controls", "Analytics and reporting engine", "Secure JWT authentication"],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Tailwind CSS"],
    liveUrl: "https://quickhammer.netlify.app/",
    repoUrl: "https://github.com/premkr7370/QuickHammer_backend",
    gradient: "from-amber-500/15 to-orange-500/15",
    accent: "#F59E0B",
  },
  {
    title: "ZEE Care",
    slug: "zee-care",
    description: "Doctor Appointment Management System with payment gateway integration and role-based authentication.",
    features: ["Intuitive appointment booking system", "Payment gateway integration", "Role-based authentication (Patient/Doctor/Admin)", "Admin dashboard for management", "Doctor profiles and management", "Analytics and insights dashboard"],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "JWT", "CSS3"],
    liveUrl: "https://doctor-appointment-prem.netlify.app/",
    repoUrl: "https://github.com/premkr7370/DAW_backend",
    gradient: "from-emerald-500/15 to-teal-500/15",
    accent: "#22C55E",
  },
  {
    title: "Portfolio OS",
    slug: "portfolio-os",
    description: "Premium animated developer portfolio designed as a SaaS-style operating system interface with admin dashboard.",
    features: ["SaaS-inspired premium UI design", "GSAP & Framer Motion animations", "Complete admin dashboard", "Blog management system", "Role-based access control", "Dark/Light mode toggle"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    liveUrl: "#",
    repoUrl: "https://github.com/premkr7370",
    gradient: "from-violet-500/15 to-purple-500/15",
    accent: "#7C3AED",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y - rect.height / 2) / 12;
    const rotateY = (rect.width / 2 - x) / 12;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleTiltReset = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section id="projects" className="section-padding relative">
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
            My Work
          </span>
          <h2 style={{ marginBottom: 24 }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-[80px] h-[3px] bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 24 }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              onMouseMove={handleTilt}
              onMouseLeave={handleTiltReset}
              onClick={() => setSelected(i)}
              className="group cursor-pointer relative rounded-[24px] bg-dark-card border border-dark-border overflow-hidden tilt-card flex flex-col"
              style={{ transition: "transform 0.15s ease, box-shadow 0.3s ease" }}
            >
              {/* Project Header/Image Area */}
              <div className={`h-[200px] bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden shrink-0`}>
                <div className="text-[72px] font-black opacity-15" style={{ color: project.accent }}>
                  {project.title.charAt(0)}
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="rounded-xl bg-primary/90 text-white text-[14px] font-medium" style={{ padding: "10px 16px" }}>
                    View Details
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1" style={{ padding: 24 }}>
                <h3 className="text-[20px] font-bold text-dark-text group-hover:text-primary transition-colors" style={{ marginBottom: 12 }}>
                  {project.title}
                </h3>
                <p className="text-[15px] text-dark-text-secondary line-clamp-2" style={{ lineHeight: 1.7, marginBottom: 20 }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap" style={{ gap: 8, marginBottom: 20 }}>
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[11px] font-medium rounded-lg bg-dark-bg border border-dark-border text-dark-text-muted" style={{ padding: "5px 10px" }}>
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[11px] font-medium rounded-lg bg-primary/10 text-primary" style={{ padding: "5px 10px" }}>
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center mt-auto" style={{ gap: 16 }}>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                    className="flex items-center text-[13px] text-primary hover:text-primary-light font-medium transition-colors" style={{ gap: 6 }}>
                    <Globe size={14} /> Live Demo <ExternalLink size={11} />
                  </a>
                  <span className="text-dark-border">|</span>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                    className="flex items-center text-[13px] text-dark-text-secondary hover:text-dark-text font-medium transition-colors" style={{ gap: 6 }}>
                    <FaGithub size={14} /> Source Code
                  </a>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
              style={{ padding: 24 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-dark-card border border-dark-border rounded-[24px] max-w-[560px] w-full max-h-[80vh] overflow-y-auto"
                style={{ padding: 32 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between" style={{ marginBottom: 24 }}>
                  <h3 className="text-[24px] font-bold gradient-text">{projects[selected].title}</h3>
                  <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}
                    onClick={() => setSelected(null)} className="w-[40px] h-[40px] rounded-xl flex items-center justify-center hover:bg-dark-bg transition-colors shrink-0">
                    <X size={18} />
                  </motion.button>
                </div>

                <p className="text-dark-text-secondary" style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
                  {projects[selected].description}
                </p>

                <h4 className="text-[16px] font-semibold text-dark-text" style={{ marginBottom: 16 }}>Features</h4>
                <ul style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {projects[selected].features.map((f, j) => (
                    <motion.li key={j} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: j * 0.05 }}
                      className="flex items-start text-[15px] text-dark-text-secondary" style={{ gap: 10 }}>
                      <ChevronRight size={15} className="text-primary shrink-0" style={{ marginTop: 3 }} /> {f}
                    </motion.li>
                  ))}
                </ul>

                <h4 className="text-[16px] font-semibold text-dark-text" style={{ marginBottom: 16 }}>Tech Stack</h4>
                <div className="flex flex-wrap" style={{ gap: 8, marginBottom: 32 }}>
                  {projects[selected].techStack.map((tech) => (
                    <span key={tech} className="text-[13px] font-medium rounded-xl bg-primary/10 text-primary" style={{ padding: "8px 14px" }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex" style={{ gap: 12 }}>
                  <a href={projects[selected].liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 btn-primary justify-center">
                    <Globe size={16} /> Live Demo
                  </a>
                  <a href={projects[selected].repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 btn-outline justify-center">
                    <FaGithub size={16} /> Source Code
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
