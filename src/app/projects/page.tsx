"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories for filter tabs
  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(cats)];
  }, [projects]);

  // Filter projects based on search query and category tab
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] transition-colors duration-300">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-10">
        {/* Header */}
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
            Technical Projects & Case Studies
          </h1>
          <p className="text-base text-[var(--muted-text)] mt-2">
            Engineering prototypes, control models, and research validations presented as detailed case studies.
          </p>
          <div className="h-1 w-12 bg-accent-gold mt-4 rounded"></div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                  selectedCategory === cat
                    ? "bg-accent-gold text-white border-accent-gold shadow-sm"
                    : "bg-[var(--card-bg)] text-[var(--muted-text)] border-[var(--border-color)] hover:text-[var(--foreground)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative max-w-md w-full">
            <Search className="w-4 h-4 text-[var(--muted-text)] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title, technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-xs text-[var(--foreground)] focus:outline-none focus:border-accent-gold transition-colors duration-200"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.slug} className="h-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-[var(--border-color)] rounded-2xl">
            <p className="text-[var(--muted-text)] text-sm">
              No projects found matching the criteria. Try adjusting filters or searches.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
