"use client";

import { useState } from "react";
import { Briefcase, GraduationCap, Award, BookOpen, Download, Calendar, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

export default function ExperiencePage() {
  const { experiences, education, achievements, personalInfo } = portfolioData;
  const [selectedTab, setSelectedTab] = useState<"all" | "research" | "industry" | "teaching" | "leadership">("all");

  const filteredExperiences = experiences.filter((exp) => {
    if (selectedTab === "all") return true;
    return exp.type === selectedTab;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] transition-colors duration-300">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-[var(--border-color)] pb-6">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
              Curriculum Vitae
            </h1>
            <p className="text-base text-[var(--muted-text)] mt-2">
              A comprehensive breakdown of my education, professional experience, and academic honors.
            </p>
          </div>
          <a
            href={personalInfo.cvUrl}
            download
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-zinc-50 dark:hover:bg-zinc-800/40 text-xs font-semibold text-[var(--foreground)] gap-2 transition-all duration-200 shrink-0 self-start sm:self-center shadow-sm"
          >
            <Download className="w-4 h-4" />
            Download Full CV (PDF)
          </a>
        </div>

        {/* Education Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-accent-gold" />
            <h2 className="font-serif text-2xl font-bold text-[var(--foreground)]">
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-accent-gold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <span className="text-xs text-[var(--muted-text)] flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[var(--foreground)]">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-[var(--foreground)] opacity-90">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-[var(--muted-text)] leading-relaxed">
                    {edu.details}
                  </p>
                </div>

                <div className="mt-6 border-t border-[var(--border-color)] pt-4 space-y-3">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] opacity-70 mb-1">
                      Key Coursework
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="text-[10px] px-2 py-0.5 rounded bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-[var(--border-color)]/30"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {edu.awards && edu.awards.length > 0 && (
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] opacity-70 mb-1">
                        Academic Honors
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {edu.awards.map((award) => (
                          <span
                            key={award}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/20 text-accent-gold border border-accent-gold/10"
                          >
                            {award}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-accent-gold" />
              <h2 className="font-serif text-2xl font-bold text-[var(--foreground)]">
                Professional & Research Experience
              </h2>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {(["all", "research", "industry", "teaching", "leadership"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-200 border ${
                    selectedTab === tab
                      ? "bg-accent-gold text-white border-accent-gold shadow-sm"
                      : "bg-[var(--card-bg)] text-[var(--muted-text)] border-[var(--border-color)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredExperiences.map((exp, index) => (
              <div
                key={index}
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                  <div>
                    <span className="inline-block text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-[var(--border-color)]/20 mb-2">
                      {exp.type}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[var(--foreground)]">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-[var(--foreground)] opacity-90">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-semibold text-[var(--muted-text)]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-[var(--muted-text)] leading-relaxed">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="pl-1">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Honors and Awards Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-accent-gold" />
            <h2 className="font-serif text-2xl font-bold text-[var(--foreground)]">
              Achievements & Awards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((ach, index) => (
              <div
                key={index}
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:shadow-md transition-shadow duration-300 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-accent-gold flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      {ach.year}
                    </span>
                    <span className="text-[10px] font-bold text-[var(--muted-text)] uppercase tracking-wider">
                      {ach.issuer}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-[var(--foreground)] mt-2">
                    {ach.title}
                  </h3>
                  <p className="text-xs text-[var(--muted-text)] mt-1.5 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
