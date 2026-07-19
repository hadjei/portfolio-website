import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, Calendar, Layers, ShieldAlert, CheckCircle, BarChart3, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetails({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] transition-colors duration-300">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[var(--muted-text)] hover:text-accent-gold gap-1.5 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
              {project.category}
            </span>
            <span className="text-xs text-[var(--muted-text)] font-semibold flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.period}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight">
            {project.title}
          </h1>
          <p className="font-serif text-lg sm:text-xl text-[var(--muted-text)] italic leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start border-t border-[var(--border-color)] pt-8">
          
          {/* Main Case Study */}
          <div className="md:col-span-2 space-y-8">
            {/* Problem Statement */}
            <div className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[var(--foreground)] flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-accent-gold" />
                Problem Statement
              </h2>
              <p className="text-sm text-[var(--muted-text)] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Motivation */}
            <div className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[var(--foreground)] flex items-center gap-2">
                <Layers className="w-5 h-5 text-accent-gold" />
                Motivation & Background
              </h2>
              <p className="text-sm text-[var(--muted-text)] leading-relaxed">
                {project.motivation}
              </p>
            </div>

            {/* Methodology */}
            <div className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[var(--foreground)] flex items-center gap-2">
                <Settings className="w-5 h-5 text-accent-gold" />
                Methodology & Design Approach
              </h2>
              <p className="text-sm text-[var(--muted-text)] leading-relaxed">
                {project.methodology}
              </p>
            </div>

            {/* Challenges */}
            <div className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-[var(--foreground)] flex items-center gap-2">
                <Settings className="w-5 h-5 text-accent-gold" />
                Technical Challenges & Solutions
              </h2>
              <p className="text-sm text-[var(--muted-text)] leading-relaxed">
                {project.challenges}
              </p>
            </div>

            {/* Results & Impact */}
            <div className="space-y-4">
              <h2 className="font-serif text-xl font-bold text-[var(--foreground)] flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-gold" />
                Results & Key Achievements
              </h2>
              <p className="text-sm text-[var(--muted-text)] leading-relaxed">
                {project.results}
              </p>
              
              <div className="bg-zinc-50 dark:bg-zinc-800/10 border border-[var(--border-color)] rounded-xl p-5 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)] opacity-70 flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4 text-accent-gold" />
                  Measurable Impact
                </h4>
                <p className="text-sm text-[var(--muted-text)] leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            {/* Tech Stack */}
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-6 rounded-xl space-y-4 shadow-sm">
              <h3 className="font-serif text-base font-bold text-[var(--foreground)]">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-semibold px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded border border-[var(--border-color)]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.github || project.demo) && (
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-6 rounded-xl space-y-4 shadow-sm">
                <h3 className="font-serif text-base font-bold text-[var(--foreground)]">
                  Project Resources
                </h3>
                <div className="flex flex-col gap-2.5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 text-xs font-semibold rounded-lg border border-[var(--border-color)] bg-[var(--background)] hover:bg-zinc-50 dark:hover:bg-zinc-800/40 text-[var(--foreground)] hover:text-accent-gold gap-1.5 transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Source Repository
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 text-xs font-semibold rounded-lg border border-[var(--border-color)] bg-[var(--background)] hover:bg-zinc-50 dark:hover:bg-zinc-800/40 text-[var(--foreground)] hover:text-accent-gold gap-1.5 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo / Reference
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
