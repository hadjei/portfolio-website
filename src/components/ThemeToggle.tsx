"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 animate-pulse border border-[var(--border-color)]" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-full border border-[var(--border-color)] text-[var(--foreground)] hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors duration-200 focus:outline-none"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-zinc-700" />
      )}
    </button>
  );
}
