"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const cursorX = useMotionValue(-500);
  const cursorY = useMotionValue(-500);
  const springX = useSpring(cursorX, { stiffness: 80, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 80, damping: 30 });
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setMounted(true);
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(touch);
    if (touch) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  // Don't render anything until after mount to avoid hydration mismatch
  if (!mounted || isTouch) return null;

  return (
    <motion.div
      className="cursor-glow hidden md:block"
      style={{
        left: springX,
        top: springY,
      }}
      aria-hidden="true"
    />
  );
}
