"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Cpu, Globe, MessageSquare, ArrowUpRight, GraduationCap, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import PublicationCard from "@/components/PublicationCard";
import ResearchTimeline from "@/components/ResearchTimeline";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const { personalInfo, researchInterests, projects, publications } = portfolioData;
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col justify-center border-b border-[var(--border-color)]">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/20 text-accent-gold border border-accent-gold/25 mb-6">
              <GraduationCap className="w-3.5 h-3.5" />
              M.S. Electrical & Computer Engineering Candidate
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1] mb-6">
              {personalInfo.fullName}
            </h1>

            <p className="font-serif text-lg sm:text-xl text-[var(--foreground)] opacity-90 leading-relaxed mb-6 italic">
              {personalInfo.headline}
            </p>

            <p className="text-base sm:text-lg text-[var(--muted-text)] leading-relaxed mb-8 max-w-2xl">
              {personalInfo.introduction}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="px-5 py-3 rounded-lg bg-accent-gold hover:bg-accent-gold-dark text-white text-sm font-semibold tracking-wide transition-colors duration-200 shadow-sm"
              >
                View Projects
              </Link>
              <a
                href={personalInfo.cvUrl}
                download
                className="inline-flex items-center px-5 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-zinc-50 dark:hover:bg-zinc-800/40 text-sm font-semibold text-[var(--foreground)] gap-2 transition-colors duration-200"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <Link
                href="/about#contact"
                className="inline-flex items-center px-5 py-3 rounded-lg text-sm font-semibold text-[var(--foreground)] hover:text-accent-gold transition-colors duration-200"
              >
                Contact Me
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Research Vision Overview */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-[var(--border-color)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <h2 className="font-serif text-3xl font-bold text-[var(--foreground)] sticky top-24">
                Research Scope
              </h2>
              <p className="text-sm text-[var(--muted-text)] mt-3 leading-relaxed max-w-xs">
                My work exists at the intersection of embedded hardware systems, wireless propagation, and edge intelligence.
              </p>
              <Link
                href="/research"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-accent-gold hover:text-accent-gold-dark gap-1 mt-6 transition-colors duration-200"
              >
                Explore Research Statement
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {researchInterests.topics.map((topic, i) => (
                <div
                  key={i}
                  className="bg-[var(--card-bg)] border border-[var(--card-border)] p-6 rounded-xl hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/20 text-accent-gold flex items-center justify-center mb-4">
                    {i === 0 ? (
                      <Cpu className="w-4 h-4" />
                    ) : i === 1 ? (
                      <Globe className="w-4 h-4" />
                    ) : (
                      <MessageSquare className="w-4 h-4" />
                    )}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[var(--foreground)]">
                    {topic.name}
                  </h3>
                  <p className="text-xs text-[var(--muted-text)] mt-2 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Timeline */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-[var(--border-color)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="font-serif text-3xl font-bold text-[var(--foreground)] sticky top-24">
                Milestones & Timeline
              </h2>
              <p className="text-sm text-[var(--muted-text)] mt-3 leading-relaxed max-w-xs">
                A chronologically mapped record of my academic trajectory, project history, and research highlights.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ResearchTimeline />
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-[var(--border-color)]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[var(--foreground)]">
                Featured Case Studies
              </h2>
              <p className="text-sm text-[var(--muted-text)] mt-1.5 leading-relaxed">
                Detailed research-driven engineering projects, focusing on methodologies and impact.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-accent-gold hover:text-accent-gold-dark gap-1 transition-colors duration-200 shrink-0"
            >
              Browse All Projects
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.slug} className="h-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* Featured Publications */}
        {publications.length > 0 && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-[var(--border-color)]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <h2 className="font-serif text-3xl font-bold text-[var(--foreground)]">
                  Publications & Reports
                </h2>
                <p className="text-sm text-[var(--muted-text)] mt-1.5 leading-relaxed">
                  Academic papers, preprints, and research contributions.
                </p>
              </div>
              <Link
                href="/publications"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-accent-gold hover:text-accent-gold-dark gap-1 transition-colors duration-200 shrink-0"
              >
                Browse All Publications
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-6">
              {publications.map((pub) => (
                <PublicationCard key={pub.id} pub={pub} />
              ))}
            </div>
          </section>
        )}

        {/* PhD Recruitment / Call-to-action */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <div className="bg-zinc-50 dark:bg-zinc-800/10 border border-[var(--border-color)] rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
              Seeking PhD Opportunities
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted-text)] leading-relaxed max-w-xl mx-auto mb-8">
              I am actively looking for PhD opportunities starting in **Fall 2027/2028** in the fields of Embedded Systems, Low-Power IoT, and Edge Computing. I am eager to contribute to research teams pushing the boundary of decentralized sensor networks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/about#contact"
                className="px-5 py-3 rounded-lg bg-accent-gold hover:bg-accent-gold-dark text-white text-sm font-semibold tracking-wide transition-colors duration-200"
              >
                Get in Touch
              </Link>
              <Link
                href="/research"
                className="px-5 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-zinc-50 dark:hover:bg-zinc-800/40 text-sm font-semibold text-[var(--foreground)] transition-colors duration-200"
              >
                Read Research Statement
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
