"use client";

import { Spotlight } from "@/components/ui/spotlight";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950">
      <Spotlight className="max-w-6xl mx-auto px-4 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8">Contact Me</h1>
          <div className="prose prose-invert mx-auto">
            <p className="text-lg text-neutral-300">
              Let's connect! Feel free to reach out for collaborations, opportunities,
              or just to say hello.
            </p>
          </div>
        </div>
      </Spotlight>
    </main>
  );
}