"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function HomePage() {
  const words = [
    {
      text: "Hi,",
      className: "text-white",
    },
    {
      text: "I'm",
      className: "text-white",
    },
    {
      text: "Abdullah",
      className: "text-blue-500 dark:text-blue-400",
    },
    {
      text: "Shaikh",
      className: "text-blue-500 dark:text-blue-400",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="h-screen w-full">
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <TypewriterEffect words={words} />
          <div className="flex flex-col items-center justify-center mt-12">
          <TextGenerateEffect
  words="A passionate software developer dedicated to crafting elegant solutions and building innovative web experiences. Specialized in modern web technologies and creative problem-solving."
  duration={0.5}
  className="text-lg md:text-xl text-white/80 text-center font-light leading-relaxed max-w-4xl mx-auto px-8"
/>

          </div>

          <div className="flex items-center gap-4 mt-8">
            <Link
              href="https://github.com/Coder-philosopher"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdullah-shaikh-97309b297/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </main>
  );
}