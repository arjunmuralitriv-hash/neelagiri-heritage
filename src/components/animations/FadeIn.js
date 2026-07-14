"use client";

import { motion } from "framer-motion";

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up", 
  fullWidth = false, 
  className = "",
  duration = 0.8
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for a smooth, premium feel
      }}
      style={{ width: fullWidth ? "100%" : "auto" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
