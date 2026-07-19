"use client";

import Link from "next/link";
import { Mail, Github, Linkedin, Award, FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { contacts } = portfolioData.personalInfo;
  
  return (
    <footer className="w-full bg-[var(--background)] border-t border-[var(--border-color)] py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-serif text-sm font-semibold tracking-tight text-[var(--foreground)]">
              Hafiz Adjei
            </span>
            <span className="text-xs text-[var(--muted-text)] mt-1">
              Electrical & Computer Engineering Graduate Student | CMU-Africa
            </span>
            <span className="text-[10px] text-[var(--muted-text)]/70 mt-0.5">
              &copy; {new Date().getFullYear()} Hafiz Adjei. All rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`mailto:${contacts.email}`}
              className="p-2 rounded-full border border-[var(--border-color)] text-[var(--muted-text)] hover:text-accent-gold hover:border-accent-gold transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[var(--border-color)] text-[var(--muted-text)] hover:text-accent-gold hover:border-accent-gold transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[var(--border-color)] text-[var(--muted-text)] hover:text-accent-gold hover:border-accent-gold transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={contacts.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[var(--border-color)] text-[var(--muted-text)] hover:text-accent-gold hover:border-accent-gold transition-colors duration-200"
              aria-label="Google Scholar"
              title="Google Scholar Profile"
            >
              {/* Custom SVG or styling for Scholar icon */}
              <FileText className="w-4 h-4" />
            </a>
            <a
              href={contacts.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[var(--border-color)] text-[var(--muted-text)] hover:text-accent-gold hover:border-accent-gold transition-colors duration-200"
              aria-label="ORCID"
              title="ORCID Profile"
            >
              <Award className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
