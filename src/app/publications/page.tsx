"use client";

import { useState, useMemo } from "react";
import { Search, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PublicationCard from "@/components/PublicationCard";
import { portfolioData } from "@/data/portfolio";

export default function Publications() {
  const { publications } = portfolioData;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesType =
        selectedType === "All" ||
        (selectedType === "Peer-Reviewed" && pub.type === "peer-reviewed") ||
        (selectedType === "Preprints" && pub.type === "preprint") ||
        (selectedType === "Evaluations & Technical Notes" && (pub.type === "evaluation" || pub.type === "technical-note"));

      const matchesSearch =
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.journalOrVenue.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.year.toString().includes(searchQuery);

      return matchesType && matchesSearch;
    });
  }, [publications, selectedType, searchQuery]);

  const publicationTypes = ["All", "Peer-Reviewed", "Preprints", "Evaluations & Technical Notes"];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] transition-colors duration-300">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-10">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
            Publications & Technical Writing
          </h1>
          <p className="text-base text-[var(--muted-text)] mt-2">
            A bibliography of my research papers, preprints, conference abstracts, and technical evaluation reports.
          </p>
          <div className="h-1 w-12 bg-accent-gold mt-4 rounded"></div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {publicationTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                  selectedType === type
                    ? "bg-accent-gold text-white border-accent-gold shadow-sm"
                    : "bg-[var(--card-bg)] text-[var(--muted-text)] border-[var(--border-color)] hover:text-[var(--foreground)]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-[var(--muted-text)] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search papers, authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-xs text-[var(--foreground)] focus:outline-none focus:border-accent-gold transition-colors duration-200"
            />
          </div>
        </div>

        {/* Publications List */}
        {filteredPublications.length > 0 ? (
          <div className="space-y-6">
            {filteredPublications.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-[var(--border-color)] rounded-2xl">
            <p className="text-[var(--muted-text)] text-sm">
              No publications found matching the criteria. Try adjusting filters or searches.
            </p>
          </div>
        )}

        {/* ORCID/Scholar Info box */}
        <div className="bg-zinc-50 dark:bg-zinc-800/10 border border-[var(--border-color)] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-50 dark:bg-amber-950/20 text-accent-gold rounded-full shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-[var(--foreground)]">
                Academic Profiles
              </h3>
              <p className="text-xs text-[var(--muted-text)] mt-0.5 leading-relaxed">
                Track citation metrics, co-authorships, and real-time preprints directly on my academic index pages.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={portfolioData.personalInfo.contacts.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-zinc-50 dark:hover:bg-zinc-800/40 text-xs font-semibold text-[var(--foreground)] transition-colors duration-200"
            >
              Google Scholar
            </a>
            <a
              href={portfolioData.personalInfo.contacts.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-zinc-50 dark:hover:bg-zinc-800/40 text-xs font-semibold text-[var(--foreground)] transition-colors duration-200"
            >
              ORCID Profile
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
