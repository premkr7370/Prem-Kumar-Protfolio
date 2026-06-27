"use client";

import SplashScreen from "@/components/sections/splash-screen";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Achievements from "@/components/sections/achievements";
import Certifications from "@/components/sections/certifications";
import Testimonials from "@/components/sections/testimonials";
import BlogPreview from "@/components/sections/blog-preview";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import CursorGlow from "@/components/ui/cursor-glow";

export default function HomePage() {
  return (
    <>
      <SplashScreen />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <Testimonials />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
