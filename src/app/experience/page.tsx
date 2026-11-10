"use client";

import { useState } from "react";
import { Briefcase, GraduationCap, Award, Download, Calendar, MapPin, ChevronRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

const typeColors: Record<string, { bg: string; text: string; dot: string }> = {
  research: { bg: "bg-blue-50 dark:bg-blue-950/30", text: "text-blue-700 dark:text-blue-300", dot: "bg-blue-500" },
  industry: { bg: "bg-emerald-50 dark:bg-emerald-950/30", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  teaching: { bg: "bg-purple-50 dark:bg-purple-950/30", text: "text-purple-700 dark:text-purple-300", dot: "bg-purple-500" },
  leadership: { bg: "bg-amber-50 dark:bg-amber-950/30", text: "text-amber-700 dark:text-amber-300", dot: "bg-amber-500" },
};

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

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        {/* Hero Header */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--card-bg)] via-[var(--card-bg)] to-accent-gold/5 border border-[var(--card-border)] p-8 sm:p-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-0.5 bg-accent-gold rounded-full" />
                <span className="text-xs font-bold uppercase tracking-widest text-accent-gold">
                  Curriculum Vitae
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] leading-tight">
                Education, Experience <br className="hidden sm:block" />
                <span className="text-accent-gold">&amp; Achievements</span>
              </h1>
              <p className="text-sm text-[var(--muted-text)] mt-3 max-w-lg leading-relaxed">
                A comprehensive overview of my academic background, professional journey, and recognitions in electrical and computer engineering.
              </p>
            </div>
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-5 py-3 rounded-xl bg-accent-gold hover:bg-accent-gold-dark text-white text-xs font-bold uppercase tracking-wider gap-2 transition-all duration-200 shrink-0 self-start shadow-lg shadow-accent-gold/20 hover:shadow-accent-gold/30"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              Download CV
            </a>
          </div>
        </div>

        {/* Education Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20">
              <GraduationCap className="w-5 h-5 text-accent-gold" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-[var(--foreground)]">
                Education
              </h2>
              <p className="text-xs text-[var(--muted-text)]">Academic foundations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-accent-gold/5 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold to-accent-gold/30" />
                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-gold bg-accent-gold/10 px-2.5 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[var(--muted-text)] font-medium">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-[var(--foreground)] leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-accent-gold/80 mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  <p className="text-sm text-[var(--muted-text)] leading-relaxed">
                    {edu.details}
                  </p>
                </div>

                <div className="px-6 pb-6 pt-0 space-y-4">
                  <div className="border-t border-[var(--border-color)] pt-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted-text)] mb-2">
                      Key Coursework
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="text-[10px] px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {edu.awards && edu.awards.length > 0 && (
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted-text)] mb-2">
                        Academic Honors
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.awards.map((award) => (
                          <span
                            key={award}
                            className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/20"
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
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20">
                <Briefcase className="w-5 h-5 text-accent-gold" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-[var(--foreground)]">
                  Experience
                </h2>
                <p className="text-xs text-[var(--muted-text)]">Professional &amp; research journey</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {(["all", "research", "industry", "teaching", "leadership"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                    selectedTab === tab
                      ? "bg-accent-gold text-white shadow-md shadow-accent-gold/20"
                      : "bg-[var(--card-bg)] text-[var(--muted-text)] border border-[var(--border-color)] hover:text-[var(--foreground)] hover:border-accent-gold/30"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[var(--border-color)] hidden sm:block" />

            <div className="space-y-4">
              {filteredExperiences.map((exp, index) => {
                const colors = typeColors[exp.type] || typeColors.research;
                return (
                  <div key={index} className="relative sm:pl-12">
                    {/* Timeline dot */}
                    <div className={`absolute left-3 top-8 w-3.5 h-3.5 rounded-full ${colors.dot} ring-4 ring-[var(--background)] hidden sm:block z-10`} />

                    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 transition-all duration-300 group">
                      <div className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                          <div className="space-y-1.5">
                            <span className={`inline-block text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                              {exp.type}
                            </span>
                            <h3 className="font-serif text-lg font-bold text-[var(--foreground)] leading-snug">
                              {exp.role}
                            </h3>
                            <p className="text-sm font-semibold text-accent-gold/80">
                              {exp.company}
                            </p>
                          </div>

                          <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 text-xs text-[var(--muted-text)] shrink-0">
                            <span className="inline-flex items-center gap-1.5 font-semibold bg-[var(--background)] px-2.5 py-1 rounded-full">
                              <Calendar className="w-3 h-3" />
                              {exp.period}
                            </span>
                            <span className="inline-flex items-center gap-1.5 font-medium">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-2.5">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex gap-3 text-sm text-[var(--muted-text)] leading-relaxed">
                              <ChevronRight className="w-3.5 h-3.5 text-accent-gold/60 shrink-0 mt-1" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20">
              <Award className="w-5 h-5 text-accent-gold" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-[var(--foreground)]">
                Achievements &amp; Awards
              </h2>
              <p className="text-xs text-[var(--muted-text)]">Recognitions and honors</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((ach, index) => (
              <div
                key={index}
                className="group relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-accent-gold/5 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-accent-gold to-accent-gold/20" />
                <div className="p-6 pl-7 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-gold bg-accent-gold/10 px-2.5 py-1 rounded-full">
                      <Award className="w-3 h-3" />
                      {ach.year}
                    </span>
                    <span className="text-[9px] font-bold text-[var(--muted-text)] uppercase tracking-widest max-w-[50%] text-right">
                      {ach.issuer}
                    </span>
                  </div>

                  <h3 className="font-serif text-base font-bold text-[var(--foreground)] leading-snug">
                    {ach.title}
                  </h3>
                  <p className="text-xs text-[var(--muted-text)] leading-relaxed">
                    {ach.description}
                  </p>

                  {ach.certificateUrl && (
                    <a
                      href={ach.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-accent-gold hover:text-accent-gold-dark transition-colors group/link"
                    >
                      View Certificate
                      <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  )}
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
