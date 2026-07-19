"use client";

import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden hover:shadow-xl dark:hover:shadow-black/50 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <div className="flex items-start justify-between">
          <span className="text-xs font-semibold tracking-wider uppercase text-accent-gold dark:text-accent-gold">
            {project.category}
          </span>
          <span className="text-xs text-[var(--muted-text)] font-medium">
            {project.period}
          </span>
        </div>

        <h3 className="font-serif text-xl font-bold mt-3 text-[var(--foreground)] group-hover:text-accent-gold transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-sm text-[var(--muted-text)] mt-1 font-medium">
          {project.subtitle}
        </p>

        {/* Short highlights for the main card view */}
        <div className="mt-4 space-y-3 flex-1">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)] opacity-70 block">
              Problem
            </span>
            <p className="text-sm text-[var(--foreground)] opacity-90 line-clamp-2 mt-0.5">
              {project.problem}
            </p>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)] opacity-70 block">
              Methodology & Tech Stack
            </span>
            <p className="text-sm text-[var(--muted-text)] line-clamp-1 mt-0.5">
              {project.methodology}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-accent-gold hover:text-accent-gold-dark gap-1 transition-colors duration-200"
          >
            Read Case Study
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center space-x-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted-text)] hover:text-[var(--foreground)] transition-colors duration-200"
                title="View Source Code"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted-text)] hover:text-[var(--foreground)] transition-colors duration-200"
                title="View Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
