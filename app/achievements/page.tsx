"use client";

import { Spotlight } from "@/components/ui/spotlight";

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950">
      <Spotlight className="max-w-6xl mx-auto px-4 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8">Achievements</h1>
          <div className="prose prose-invert mx-auto">
            <p className="text-lg text-neutral-300">
              A collection of my professional achievements, certifications, and recognition
              in the field of software development.
            </p>
          </div>
        </div>
      </Spotlight>
    </main>
  );
}