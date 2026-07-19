"use client";

import { useState } from "react";
import { ExternalLink, FileText, ChevronDown, ChevronUp, Copy, Check } from "lucide-react";
import { Publication } from "@/data/portfolio";

export default function PublicationCard({ pub }: { pub: Publication }) {
  const [showAbstract, setShowAbstract] = useState(false);
  const [showBibtex, setShowBibtex] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyBibtex = async () => {
    if (!pub.bibtex) return;
    try {
      await navigator.clipboard.writeText(pub.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:shadow-md transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex-1">
          <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/20 text-accent-gold border border-accent-gold/20 mb-3">
            {pub.type === "peer-reviewed" ? "Peer-Reviewed Paper" : pub.type === "preprint" ? "Preprint" : pub.type === "evaluation" ? "Research Evaluation / Benchmark" : "Technical Report"}
          </span>

          <h3 className="font-serif text-lg font-bold text-[var(--foreground)] leading-snug">
            {pub.title}
          </h3>

          <p className="text-sm text-[var(--foreground)] opacity-95 mt-2">
            {pub.authors.split(", ").map((author, index, array) => {
              const isUser = author.includes("Hafiz Adjei");
              return (
                <span key={author}>
                  <span className={isUser ? "font-bold text-[var(--foreground)] border-b border-accent-gold/40" : ""}>
                    {author}
                  </span>
                  {index < array.length - 1 ? ", " : ""}
                </span>
              );
            })}
          </p>

          <p className="text-xs text-[var(--muted-text)] mt-1.5 italic font-medium">
            {pub.journalOrVenue}, {pub.year}
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-col items-center sm:items-end gap-2 shrink-0">
          {pub.link && (
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--background)] hover:bg-zinc-50 dark:hover:bg-zinc-800/40 text-[var(--foreground)] hover:text-accent-gold transition-all duration-200 gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Publisher
            </a>
          )}
          {pub.bibtex && (
            <button
              onClick={() => setShowBibtex(!showBibtex)}
              className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--background)] hover:bg-zinc-50 dark:hover:bg-zinc-800/40 text-[var(--foreground)] hover:text-accent-gold transition-all duration-200 gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              Cite (BibTeX)
            </button>
          )}
        </div>
      </div>

      <div className="mt-4 flex gap-4 border-t border-[var(--border-color)]/50 pt-3">
        <button
          onClick={() => setShowAbstract(!showAbstract)}
          className="inline-flex items-center text-xs font-semibold text-[var(--muted-text)] hover:text-[var(--foreground)] transition-colors duration-200 gap-1"
        >
          Abstract
          {showAbstract ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {showAbstract && (
        <div className="mt-3 bg-zinc-50/50 dark:bg-zinc-800/10 border border-[var(--border-color)]/30 rounded-lg p-4 text-sm text-[var(--muted-text)] leading-relaxed">
          {pub.abstract}
        </div>
      )}

      {showBibtex && pub.bibtex && (
        <div className="mt-3 relative bg-zinc-900 text-zinc-100 rounded-lg p-4 text-xs font-mono overflow-x-auto border border-zinc-800">
          <button
            onClick={handleCopyBibtex}
            className="absolute top-2 right-2 p-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors duration-200"
            title="Copy Citation"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <pre className="pr-12 whitespace-pre-wrap">{pub.bibtex}</pre>
        </div>
      )}
    </div>
  );
}
