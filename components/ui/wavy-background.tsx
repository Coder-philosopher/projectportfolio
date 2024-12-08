"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const WavyBackground = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapperRef} className={cn("relative", className)}>
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-transparent to-blue-500/30 blur-3xl"
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};