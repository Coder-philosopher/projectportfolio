"use client";

import { useState } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Here you would typically integrate with your email service
    // For now, we'll simulate a successful subscription
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950">
      <Spotlight className="max-w-6xl mx-auto px-4 py-32">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Newsletter</h1>
          <p className="text-lg text-neutral-300 mb-8 text-center">
            Subscribe to receive updates about new projects, blog posts, and tech insights.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 border-white/20 text-white"
              required
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          {status === "success" && (
            <p className="mt-4 text-green-400 text-center">
              Thanks for subscribing!
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-400 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </Spotlight>
    </main>
  );
}