"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-serif text-lg font-semibold tracking-tight text-[var(--foreground)] hover:text-accent-gold transition-colors duration-200">
              Hafiz Adjei
              <span className="text-accent-gold ml-0.5">.</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-accent-gold font-semibold"
                      : "text-[var(--muted-text)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="border-l border-[var(--border-color)] pl-4 py-1 h-5 flex items-center">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex md:hidden items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 rounded-md text-[var(--muted-text)] hover:text-[var(--foreground)] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--background)] py-3 px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-zinc-100 dark:bg-zinc-800/50 text-accent-gold font-semibold"
                    : "text-[var(--muted-text)] hover:text-[var(--foreground)] hover:bg-zinc-50 dark:hover:bg-zinc-800/30"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
