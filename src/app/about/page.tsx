"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Award, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { personalInfo } = portfolioData;
  const { contacts } = personalInfo;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you! Your message has been sent successfully.");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] transition-colors duration-300">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
                About Me
              </h1>
              <div className="h-1 w-12 bg-accent-gold mt-4 rounded"></div>
            </div>

            <div className="prose-academic text-base text-[var(--muted-text)] leading-relaxed space-y-6">
              <p>
                My name is <strong className="text-[var(--foreground)] font-semibold">Hafiz Adjei</strong>. I am an electrical and computer engineer currently pursuing my Master’s degree in Electrical and Computer Engineering at <strong className="text-[var(--foreground)] font-semibold">Carnegie Mellon University Africa (CMU-Africa)</strong> in Kigali, Rwanda. My work is focused on creating practical, sustainable hardware and communication systems that address local and global challenges in environmental sensing, smart agriculture, and low-resource speech technology.
              </p>

              <p>
                Before joining CMU-Africa as a Graduate Fellow, I graduated with Honors from <strong className="text-[var(--foreground)] font-semibold">Ashesi University</strong> in Ghana, where I completed my Bachelor of Science in Electrical and Electronic Engineering. My undergraduate studies were made possible through the <strong className="text-[var(--foreground)] font-semibold">Mastercard Foundation Scholars Program</strong>, which instills a deep sense of ethical leadership and a commitment to utilizing engineering to drive development across the African continent.
              </p>

              <p>
                My fascination with electronics began with a desire to understand what happens at the physical layer. During my studies, I co-authored research on modeling the magnetization and terminal characteristics of shunt DC motors in MATLAB/Simulink, helping fill gaps in standard machine blocks. I also developed hardware prototypes like a discrete-IC 12-hour digital clock, which allowed me to master low-level clock timing, bus interfacing, and gate logic.
              </p>

              <p>
                Currently, at CMU-Africa, I am expanding my knowledge into AI-enabled edge systems. I participated as a native evaluator for the WAXALNet Automatic Speech Recognition benchmark, evaluating models for low-resource West African languages to build inclusive interfaces.
              </p>

              <p>
                My long-term goal is to pursue a PhD in Electrical and Computer Engineering. I aim to research self-sustaining, energy-harvesting IoT nodes that can perform edge computation in remote areas. I believe that integrating smart embedded systems with low-power wireless grids is the key to unlocking reliable, data-driven decisions in regions lacking robust energy and network infrastructure.
              </p>
            </div>
          </div>

          {/* Sidebar Info Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-6 rounded-xl space-y-6 shadow-sm">
              <div className="text-center sm:text-left">
                <h2 className="font-serif text-xl font-bold text-[var(--foreground)]">
                  Hafiz Adjei
                </h2>
                <p className="text-xs text-[var(--muted-text)] mt-1 font-medium">
                  ECE Graduate Student | Researcher
                </p>
              </div>

              <div className="border-t border-[var(--border-color)] pt-4 space-y-4">
                <div className="flex items-center gap-3 text-sm text-[var(--foreground)]">
                  <MapPin className="w-4 h-4 text-accent-gold shrink-0" />
                  <span>Kigali, Rwanda / Accra, Ghana</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-[var(--foreground)]">
                  <Mail className="w-4 h-4 text-accent-gold shrink-0" />
                  <a href={`mailto:${contacts.email}`} className="hover:text-accent-gold transition-colors duration-200">
                    {contacts.email}
                  </a>
                </div>

                {contacts.secondaryEmail && (
                  <div className="flex items-center gap-3 text-sm text-[var(--foreground)]">
                    <Mail className="w-4 h-4 text-accent-gold shrink-0" />
                    <a href={`mailto:${contacts.secondaryEmail}`} className="hover:text-accent-gold transition-colors duration-200 text-xs">
                      {contacts.secondaryEmail}
                    </a>
                  </div>
                )}

                <div className="flex items-center gap-3 text-sm text-[var(--foreground)]">
                  <Phone className="w-4 h-4 text-accent-gold shrink-0" />
                  <a href={`tel:${contacts.phone.replace(/\s/g, '')}`} className="hover:text-accent-gold transition-colors duration-200">
                    {contacts.phone}
                  </a>
                </div>
              </div>

              <div className="border-t border-[var(--border-color)] pt-4 flex flex-wrap gap-2 justify-center">
                <a
                  href={contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-[var(--border-color)] hover:border-accent-gold text-[var(--muted-text)] hover:text-accent-gold transition-all duration-200"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-[var(--border-color)] hover:border-accent-gold text-[var(--muted-text)] hover:text-accent-gold transition-all duration-200"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={contacts.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-[var(--border-color)] hover:border-accent-gold text-[var(--muted-text)] hover:text-accent-gold transition-all duration-200"
                  title="ORCID"
                >
                  <Award className="w-4 h-4" />
                </a>
                <a
                  href={contacts.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-[var(--border-color)] hover:border-accent-gold text-[var(--muted-text)] hover:text-accent-gold transition-all duration-200"
                  title="Google Scholar"
                >
                  <FileText className="w-4 h-4" />
                </a>
              </div>

              <a
                href={personalInfo.cvUrl}
                download
                className="w-full inline-flex items-center justify-center py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--background)] hover:bg-zinc-50 dark:hover:bg-zinc-800/40 text-xs font-semibold text-[var(--foreground)] gap-2 transition-all duration-200"
              >
                Download Full CV (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <section id="contact" className="mt-20 pt-16 border-t border-[var(--border-color)] max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
              Get In Touch
            </h2>
            <p className="text-sm text-[var(--muted-text)] mt-2">
              Have a research inquiry, a technical collaboration proposal, or a PhD opportunity? Drop me a message.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-sm text-[var(--foreground)] focus:outline-none focus:border-accent-gold transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-sm text-[var(--foreground)] focus:outline-none focus:border-accent-gold transition-colors duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-sm text-[var(--foreground)] focus:outline-none focus:border-accent-gold transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-sm text-[var(--foreground)] focus:outline-none focus:border-accent-gold transition-colors duration-200"
              ></textarea>
            </div>

            {submitMessage && (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 text-sm font-semibold rounded-lg border border-emerald-250/20">
                {submitMessage}
              </div>
            )}

            <div className="text-right">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-3 bg-accent-gold hover:bg-accent-gold-dark text-white rounded-lg text-sm font-semibold tracking-wide gap-2 transition-colors duration-200 focus:outline-none disabled:opacity-55 shadow-sm"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
