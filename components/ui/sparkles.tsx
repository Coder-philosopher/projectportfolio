"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SparklesProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export const SparklesCore = ({
  id = "tsparticlesfullpage",
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 100,
  className = "",
  particleColor = "#FFFFFF"
}: SparklesProps) => {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      if (!containerRef.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      const newParticles = [];
      
      for (let i = 0; i < particleDensity; i++) {
        newParticles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * (maxSize - minSize) + minSize
        });
      }
      
      setParticles(newParticles);
    };

    createParticles();
    window.addEventListener('resize', createParticles);
    
    return () => window.removeEventListener('resize', createParticles);
  }, [maxSize, minSize, particleDensity]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`fixed inset-0 ${className}`}
      style={{ background }}
    >
      <AnimatePresence>
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              position: "absolute",
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              borderRadius: "50%",
              backgroundColor: particleColor,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};