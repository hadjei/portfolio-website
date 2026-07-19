"use client";

import { Cpu, Globe, MessageSquare, Compass, Settings, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

export default function Research() {
  const { researchInterests } = portfolioData;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] transition-colors duration-300">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        {/* Header */}
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
            Research Statement
          </h1>
          <p className="text-base text-[var(--muted-text)] mt-2">
            My academic inquiry focuses on self-sustaining IoT nodes, robust wireless telemetry, and speech AI evaluation.
          </p>
          <div className="h-1 w-12 bg-accent-gold mt-4 rounded"></div>
        </div>

        {/* Vision Statement */}
        <section className="bg-zinc-50 dark:bg-zinc-800/10 border border-[var(--border-color)] rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="font-serif text-xl font-bold text-[var(--foreground)] flex items-center gap-2">
            <Compass className="w-5 h-5 text-accent-gold" />
            Core Research Vision
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted-text)] leading-relaxed">
            My research vision lies in designing self-sustaining, intelligent edge devices that operate in remote, resource-constrained environments. By combining low-power hardware design with sub-GHz long-range communication grids (like LoRaWAN) and tiny machine learning (TinyML) inference, I aim to address critical data access gaps in healthcare monitoring, micro-grid management, and precision agriculture in Sub-Saharan Africa.
          </p>
        </section>

        {/* Specific Research Pillars */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[var(--foreground)]">
            Primary Pillars of Inquiry
          </h2>
          
          <div className="space-y-6">
            {researchInterests.topics.map((topic, i) => (
              <div
                key={i}
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:shadow-md transition-shadow duration-300 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/20 text-accent-gold flex items-center justify-center">
                    {i === 0 ? (
                      <Cpu className="w-4.5 h-4.5" />
                    ) : i === 1 ? (
                      <Globe className="w-4.5 h-4.5" />
                    ) : (
                      <MessageSquare className="w-4.5 h-4.5" />
                    )}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[var(--foreground)]">
                    {topic.name}
                  </h3>
                </div>

                <p className="text-sm text-[var(--muted-text)] leading-relaxed">
                  {topic.description}
                </p>

                {/* Methodologies */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)] opacity-70 mb-2">
                    Methodology & Tools
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {topic.methodologies.map((method) => (
                      <span
                        key={method}
                        className="text-[11px] font-semibold px-2 py-1 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded border border-[var(--border-color)]"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PhD Direction Statement */}
        <section className="space-y-4 border-t border-[var(--border-color)] pt-10">
          <h2 className="font-serif text-2xl font-bold text-[var(--foreground)] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent-gold" />
            Future PhD Directions & Ambitions
          </h2>
          <div className="prose-academic text-sm sm:text-base text-[var(--muted-text)] leading-relaxed space-y-4">
            <p>
              For my doctoral research, I seek to investigate the co-design of energy-harvesting hardware and lightweight machine learning models. Standard IoT architectures rely heavily on battery power and cellular connection. However, in regions where power grids fail and cellular infrastructure is weak, these systems are unsustainable.
            </p>
            <p>
              I want to answer the question: <strong className="text-[var(--foreground)] font-semibold">How can we model and build sensor nodes that extract micro-watts of ambient energy (solar, thermal, or kinetic) to run locally-optimized ML classifiers while transmitting sparse, high-value alerts over sub-GHz wireless mesh topologies?</strong>
            </p>
            <p>
              I hope to develop mathematical models of motor transients, signal propagation, and hardware power states, and validate these models through physical prototypes. I am highly motivated by interdisciplinary applications, such as automatic power transfer systems (micro-grids) and local dialect speech interfaces.
            </p>
          </div>
        </section>

        {/* Methodologies and Tools summary */}
        <section className="space-y-4 border-t border-[var(--border-color)] pt-10">
          <h2 className="font-serif text-2xl font-bold text-[var(--foreground)] flex items-center gap-2">
            <Settings className="w-5 h-5 text-accent-gold" />
            Theoretical & Empirical Methodologies
          </h2>
          <p className="text-sm text-[var(--muted-text)] leading-relaxed">
            In my research, I leverage a balanced mix of computer simulations, hardware prototyping, and human-in-the-loop evaluations:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[var(--muted-text)]">
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-4 rounded-lg">
              <h4 className="font-bold text-[var(--foreground)] mb-1">Analytical & Computer Simulations</h4>
              <p className="text-xs">Using MATLAB, Simulink, and CAD Electrical simulators to model transient voltages, electrical machine behaviors, and load balancing schemas before deployment.</p>
            </div>
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-4 rounded-lg">
              <h4 className="font-bold text-[var(--foreground)] mb-1">Empirical Hardware Prototyping</h4>
              <p className="text-xs">Wiring breadboard prototypes, soldering PCB architectures, measuring signal timings with logic analyzers, and interfacing components via SPI/I2C protocols.</p>
            </div>
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-4 rounded-lg">
              <h4 className="font-bold text-[var(--foreground)] mb-1">Field Telemetry Modeling</h4>
              <p className="text-xs">Designing antenna placement, testing sub-GHz wireless link budgets, and calculating path loss in vegetated or rural terrains.</p>
            </div>
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-4 rounded-lg">
              <h4 className="font-bold text-[var(--foreground)] mb-1">Acoustic & Speech Evaluation</h4>
              <p className="text-xs">Performing error analysis, creating phone mapping baselines, and conducting manual native-speaker transcript reviews to fine-tune low-resource speech datasets.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
