"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

const blogs = [
  {
    slug: "building-scalable-rest-apis",
    title: "Building Scalable REST APIs with Node.js",
    excerpt: "Best practices and architecture patterns for building production-ready REST APIs using Node.js and Express.",
    category: "Backend",
    readTime: "6 min read",
    date: "March 2026",
    color: "#22C55E",
  },
  {
    slug: "mastering-reactjs-hooks-patterns",
    title: "Mastering React.js Hooks & Patterns",
    excerpt: "Deep dive into custom hooks, compound components, render props, and performance optimization techniques.",
    category: "Frontend",
    readTime: "8 min read",
    date: "February 2026",
    color: "#7C3AED",
  },
  {
    slug: "dsa-journey-500-problems",
    title: "My DSA Journey: 760+ Problems",
    excerpt: "Insights, strategies, and the mindset behind solving 760+ problems across LeetCode and GeeksforGeeks.",
    category: "DSA",
    readTime: "5 min read",
    date: "January 2026",
    color: "#F59E0B",
  },
];

export default function BlogPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding relative">
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
            Latest Articles
          </span>
          <h2 style={{ marginBottom: 24 }}>
            My <span className="gradient-text">Blog</span>
          </h2>
          <div className="w-[80px] h-[3px] bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 24 }}>
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            >
              <Link href={`/blog/${blog.slug}`}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="h-full rounded-[24px] bg-dark-card border border-dark-border overflow-hidden group cursor-pointer neon-border flex flex-col"
                >
                  {/* Accent line */}
                  <div
                    className="relative h-[3px] w-full shrink-0"
                    style={{ background: `linear-gradient(90deg, transparent, ${blog.color}, transparent)` }}
                  />

                  <div className="flex flex-col flex-1" style={{ padding: 24 }}>
                    {/* Category & read time */}
                    <div className="flex items-center" style={{ gap: 12, marginBottom: 16 }}>
                      <span
                        className="text-[12px] font-semibold rounded-lg"
                        style={{ padding: "5px 12px", background: `${blog.color}15`, color: blog.color }}
                      >
                        {blog.category}
                      </span>
                      <span className="flex items-center text-[12px] text-dark-text-muted" style={{ gap: 4 }}>
                        <Clock size={12} /> {blog.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[18px] font-bold text-dark-text group-hover:text-primary transition-colors" style={{ marginBottom: 12, lineHeight: 1.3 }}>
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[15px] text-dark-text-secondary line-clamp-2" style={{ lineHeight: 1.7, marginBottom: 20 }}>
                      {blog.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-auto">
                      <span className="flex items-center text-[13px] text-dark-text-muted" style={{ gap: 6 }}>
                        <Calendar size={13} /> {blog.date}
                      </span>
                      <span className="flex items-center text-[13px] text-primary font-medium group-hover:gap-[10px] transition-all" style={{ gap: 6 }}>
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
