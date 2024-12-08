"use client";
import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";

export const BackgroundBeams = () => {
  const beams = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();

  useEffect(() => {
    if (!beams.current) return;

    const movementX = (x || 0) - window.innerWidth / 2;
    const movementY = (y || 0) - window.innerHeight / 2;

    const newX = movementX * 0.02;
    const newY = movementY * 0.02;

    beams.current.style.transform = `translate(${newX}px, ${newY}px)`;
  }, [x, y]);

  return (
    <div className="fixed inset-0 overflow-hidden opacity-30">
      <div
        ref={beams}
        className="absolute inset-0 [--gradient-size:50%] [--gradient-angle:45deg] [background:radial-gradient(var(--gradient-size)_var(--gradient-size)_at_center,rgba(37,99,235,0.1),transparent_100%)]"
      />
    </div>
  );
};