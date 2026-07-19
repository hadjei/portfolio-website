"use client";

import { Calendar, Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  iconType: "education" | "research" | "work" | "achievement";
}

const timelineData: TimelineItem[] = [
  {
    year: "2027",
    title: "Master of Science in ECE",
    subtitle: "Carnegie Mellon University Africa",
    description: "Expected graduation with specialization in Edge AI, IoT systems, and Advanced Embedded Software.",
    iconType: "education"
  },
  {
    year: "2025",
    title: "WAXALNet Speech AI Research",
    subtitle: "CMU-Africa / LyngualLabs Collaboration",
    description: "Supported benchmarking and native evaluations of low-resource African language speech recognition models.",
    iconType: "research"
  },
  {
    year: "2025",
    title: "CMU-Africa Graduate Fellowship",
    subtitle: "Carnegie Mellon University Africa",
    description: "Awarded graduate fellowship for MS ECE study in Kigali, Rwanda.",
    iconType: "achievement"
  },
  {
    year: "2024",
    title: "B.S. Electrical & Electronic Engineering",
    subtitle: "Ashesi University",
    description: "Graduated with Honors. Co-authored Simulink-based Shunt DC Motor characteristics paper published in SEED Journal.",
    iconType: "education"
  },
  {
    year: "2023",
    title: "Engineering Internship",
    subtitle: "GRIDCo / ECG Partner (Accra, Ghana)",
    description: "Analyzed transformer load balance schemas and designed safety lockouts for transfer stations.",
    iconType: "work"
  },
  {
    year: "2022",
    title: "Hardware Clock Prototype",
    subtitle: "Ashesi Laboratories",
    description: "Successfully designed and fabricated a 12-hour digital clock using discrete logic ICs (74LS190, 74LS47).",
    iconType: "research"
  },
  {
    year: "2020",
    title: "Mastercard Foundation Scholar",
    subtitle: "Ashesi University",
    description: "Awarded full scholarship based on academic excellence, leadership potential, and commitment to giving back.",
    iconType: "achievement"
  }
];

export default function ResearchTimeline() {
  return (
    <div className="relative border-l border-[var(--timeline-line)] ml-4 md:ml-8 my-8 pl-6 md:pl-8 space-y-8 max-w-3xl">
      {timelineData.map((item, index) => {
        return (
          <div key={index} className="relative group">
            {/* Dot marker */}
            <div className="absolute -left-[39px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[var(--background)] border border-[var(--timeline-line)] flex items-center justify-center group-hover:border-accent-gold transition-colors duration-300">
              {item.iconType === "education" && (
                <GraduationCap className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400 group-hover:text-accent-gold" />
              )}
              {item.iconType === "research" && (
                <BookOpen className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400 group-hover:text-accent-gold" />
              )}
              {item.iconType === "work" && (
                <Briefcase className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400 group-hover:text-accent-gold" />
              )}
              {item.iconType === "achievement" && (
                <Award className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400 group-hover:text-accent-gold" />
              )}
            </div>

            {/* Content card */}
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-accent-gold/40 p-5 rounded-lg hover:shadow-md transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <span className="font-serif text-sm font-bold text-accent-gold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.year}
                </span>
                <span className="text-xs font-semibold text-[var(--muted-text)]">
                  {item.subtitle}
                </span>
              </div>
              <h4 className="text-base font-bold text-[var(--foreground)]">
                {item.title}
              </h4>
              <p className="text-sm text-[var(--muted-text)] mt-1.5 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
