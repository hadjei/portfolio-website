"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  const publishedPosts = blogPosts.filter((p) => p.published);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] transition-colors duration-300">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-10">
        {/* Header */}
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
            Blog & Research Notes
          </h1>
          <p className="text-base text-[var(--muted-text)] mt-2">
            Reflections on graduate school, technical explainers, and progress reports on ongoing engineering projects.
          </p>
          <div className="h-1 w-12 bg-accent-gold mt-4 rounded"></div>
        </div>

        {/* Blog Post List */}
        <div className="space-y-8">
          {publishedPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] p-6 sm:p-8 rounded-xl hover:shadow-md transition-shadow duration-300 space-y-4"
            >
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[var(--muted-text)]">
                <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-[var(--border-color)]/20">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readingTime}
                </span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[var(--foreground)] hover:text-accent-gold transition-colors duration-200">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-sm text-[var(--muted-text)] leading-relaxed">
                {post.excerpt}
              </p>

              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-accent-gold hover:text-accent-gold-dark gap-1 transition-colors duration-200"
                >
                  Read Full Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
