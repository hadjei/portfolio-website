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
              My long-term research goal is to develop intelligent, energy-efficient cyber-physical systems that can operate reliably in resource-constrained and infrastructure-limited environments. Building on my experience in embedded systems, machine learning, IoT architectures, and electrical power systems, I am particularly interested in the co-design of ultra-low-power hardware and edge AI algorithms for autonomous sensing and decision-making.
            </p>
            <p>
              For my doctoral research, I aim to investigate how energy-harvesting sensor platforms can integrate lightweight machine learning models to enable sustainable, always-on monitoring without dependence on conventional power infrastructure. While many current IoT solutions rely on batteries, cloud connectivity, and stable communication networks, such assumptions often fail in rural, remote, and developing regions.
            </p>
            <p>
              A central question that motivates my research is:
            </p>
            <p className="text-[var(--foreground)] font-semibold my-2">
              "How can intelligent edge devices harvest ambient energy, perform local AI inference, and communicate only critical information through low-power wireless networks while maintaining long-term operational reliability?"
            </p>
            <p>
              To address this challenge, I intend to explore the intersection of embedded machine learning, wireless sensor networks, energy harvesting, and power-aware system design. My research will focus on developing mathematical and computational models that capture energy availability, hardware operating states, communication dynamics, and machine learning performance under severe resource constraints. These models will then be validated through the design and deployment of real-world prototypes.
            </p>
            <p>
              Beyond fundamental research, I am motivated by applications that directly address societal challenges, including smart energy systems, micro-grid monitoring, predictive maintenance of electrical infrastructure, precision agriculture, environmental monitoring, and multilingual voice-based interfaces for underserved communities.
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
            My research philosophy combines rigorous analytical modeling with experimental validation and practical deployment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[var(--muted-text)]">
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-4 rounded-lg">
              <h4 className="font-bold text-[var(--foreground)] mb-1">Analytical Modeling & Simulation</h4>
              <p className="text-xs">I utilize MATLAB, Simulink, and related engineering simulation environments to model electrical systems, energy harvesting mechanisms, wireless communication behavior, and control strategies. These tools enable the investigation of system performance, power consumption, reliability, and scalability prior to physical implementation.</p>
            </div>
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-4 rounded-lg">
              <h4 className="font-bold text-[var(--foreground)] mb-1">Embedded Systems & Hardware Prototyping</h4>
              <p className="text-xs">I design and develop embedded platforms using microcontrollers, sensors, and wireless communication modules. My approach includes PCB design, hardware integration, firmware development, and low-level interfacing through protocols such as SPI, I²C, UART, and CAN. Experimental evaluation is conducted using oscilloscopes, logic analyzers, and power-measurement instrumentation to characterize system behavior under realistic operating conditions.</p>
            </div>
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-4 rounded-lg">
              <h4 className="font-bold text-[var(--foreground)] mb-1">Edge AI & Intelligent Sensing</h4>
              <p className="text-xs">I am interested in deploying lightweight machine learning models directly on constrained devices, enabling local inference with minimal energy consumption. This involves model optimization, feature engineering, quantization techniques, and performance evaluation across varying computational and energy budgets.</p>
            </div>
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-4 rounded-lg">
              <h4 className="font-bold text-[var(--foreground)] mb-1">Field Deployment & Wireless Telemetry</h4>
              <p className="text-xs">I evaluate communication performance through real-world testing of wireless sensor networks, including sub-GHz and low-power mesh topologies. This work involves link-budget analysis, propagation modeling, antenna optimization, and network reliability assessment in rural and challenging environments.</p>
            </div>
          </div>
          <p className="text-sm text-[var(--muted-text)] leading-relaxed mt-4">
            By integrating electrical engineering, embedded intelligence, and sustainable computing, I aspire to contribute to the development of resilient technologies that expand access to intelligent infrastructure in regions where conventional solutions remain impractical.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
