"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed bottom-4 right-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-lg text-zinc-800 shadow-lg backdrop-blur hover:bg-white/95 dark:bg-zinc-800/90 dark:text-zinc-200 dark:hover:bg-zinc-800/95 z-50"
    >
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}