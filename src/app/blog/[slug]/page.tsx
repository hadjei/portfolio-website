import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// A simple but robust Markdown-to-JSX renderer
function MarkdownRenderer({ content }: { content: string }) {
  const blocks = content.split("\n\n").map((b) => b.trim()).filter(Boolean);

  return (
    <div className="space-y-6 text-base text-[var(--muted-text)] leading-relaxed prose-academic">
      {blocks.map((block, index) => {
        // Headers
        if (block.startsWith("### ")) {
          return (
            <h3 key={index} className="font-serif text-lg sm:text-xl font-bold text-[var(--foreground)] mt-8 mb-4">
              {block.replace("### ", "")}
            </h3>
          );
        }
        if (block.startsWith("## ")) {
          return (
            <h2 key={index} className="font-serif text-xl sm:text-2xl font-bold text-[var(--foreground)] mt-8 mb-4">
              {block.replace("## ", "")}
            </h2>
          );
        }

        // Bullet Lists
        if (block.startsWith("* ") || block.startsWith("- ")) {
          const items = block
            .split("\n")
            .map((item) => item.replace(/^[\*\-\s]+/, "").trim())
            .filter(Boolean);

          return (
            <ul key={index} className="list-disc list-outside ml-6 space-y-2 text-sm sm:text-base">
              {items.map((item, idx) => (
                <li key={idx} className="pl-1">
                  {parseInlineFormatting(item)}
                </li>
              ))}
            </ul>
          );
        }

        // Math Equation Blocks
        if (block.startsWith("$$") && block.endsWith("$$")) {
          const formula = block.slice(2, -2).trim();
          return (
            <div key={index} className="my-6 p-4 bg-zinc-50 dark:bg-zinc-800/10 border border-[var(--border-color)] rounded-xl overflow-x-auto text-center font-serif italic text-base text-[var(--foreground)]">
              {formula}
            </div>
          );
        }

        // Standard Paragraph
        return (
          <p key={index} className="text-sm sm:text-base">
            {parseInlineFormatting(block)}
          </p>
        );
      })}
    </div>
  );
}

// Parses inline bolding **text** and backticks `code`
function parseInlineFormatting(text: string) {
  // Regex to match **bold** and `code`
  const parts = text.split(/(\*\*.*?\*\*|`.*?`|\$.*?\$)/);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-[var(--foreground)]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={index} className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-xs font-mono text-[var(--foreground)] border border-[var(--border-color)]/20">
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith("$") && part.endsWith("$")) {
      return (
        <span key={index} className="font-serif italic text-[var(--foreground)] px-0.5">
          {part.slice(1, -1)}
        </span>
      );
    }
    return part;
  });
}

export default async function BlogDetails({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] transition-colors duration-300">
      <Navbar />

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-8">
        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[var(--muted-text)] hover:text-accent-gold gap-1.5 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Notes
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4 border-b border-[var(--border-color)] pb-6">
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

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] leading-tight">
            {post.title}
          </h1>
          <p className="text-base sm:text-lg text-[var(--muted-text)] italic leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Content */}
        <MarkdownRenderer content={post.content} />
      </main>

      <Footer />
    </div>
  );
}
