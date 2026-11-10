"use client";

import { useState } from "react";
import { Briefcase, GraduationCap, Award, Download, Calendar, MapPin, ExternalLink } from "lucide-react";
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-[var(--border-color)] pb-8">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
              Curriculum Vitae
            </h1>
            <p className="text-sm text-[var(--muted-text)] mt-2 max-w-lg">
              My education, professional experience, and academic honors.
            </p>
          </div>
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[var(--foreground)] text-[var(--background)] text-xs font-semibold gap-2 transition-opacity duration-200 hover:opacity-80 shrink-0 self-start"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* Education */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[var(--foreground)]" />
            <h2 className="font-serif text-xl font-bold text-[var(--foreground)]">
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-5 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--muted-text)]">
                  <span className="inline-flex items-center gap-1 font-semibold">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-base font-bold text-[var(--foreground)] leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-[var(--muted-text)] mt-0.5">
                    {edu.institution}
                  </p>
                </div>

                <p className="text-sm text-[var(--muted-text)] leading-relaxed">
                  {edu.details}
                </p>

                <div className="border-t border-[var(--border-color)] pt-3 space-y-3">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-text)] mb-1.5">
                      Key Coursework
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-[var(--background)] text-[var(--muted-text)] border border-[var(--border-color)]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {edu.awards && edu.awards.length > 0 && (
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-text)] mb-1.5">
                        Honors
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {edu.awards.map((award) => (
                          <span
                            key={award}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-accent-gold/10 text-accent-gold-dark dark:text-accent-gold"
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

        {/* Experience */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[var(--foreground)]" />
              <h2 className="font-serif text-xl font-bold text-[var(--foreground)]">
                Experience
              </h2>
            </div>

            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {(["all", "research", "industry", "teaching", "leadership"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                    selectedTab === tab
                      ? "bg-[var(--foreground)] text-[var(--background)]"
                      : "text-[var(--muted-text)] hover:text-[var(--foreground)] hover:bg-[var(--background)]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredExperiences.map((exp, index) => (
              <div
                key={index}
                className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block text-[9px] font-bold tracking-wider uppercase text-[var(--muted-text)] mb-1">
                      {exp.type}
                    </span>
                    <h3 className="font-serif text-base font-bold text-[var(--foreground)] leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[var(--muted-text)] mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-1 text-xs text-[var(--muted-text)] shrink-0">
                    <span className="inline-flex items-center gap-1 font-semibold">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-1.5 text-sm text-[var(--muted-text)] leading-relaxed">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-[var(--border-color)] select-none mt-0.5">&#8226;</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[var(--foreground)]" />
            <h2 className="font-serif text-xl font-bold text-[var(--foreground)]">
              Achievements &amp; Awards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {achievements.map((ach, index) => (
              <div
                key={index}
                className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-5 space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[var(--foreground)]">
                    {ach.year}
                  </span>
                  <span className="text-[9px] font-bold text-[var(--muted-text)] uppercase tracking-wider max-w-[55%] text-right">
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
                    className="inline-flex items-center gap-1 mt-1 text-xs font-semibold text-[var(--foreground)] hover:opacity-70 transition-opacity"
                  >
                    View Certificate
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
