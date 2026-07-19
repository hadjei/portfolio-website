export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown content
  date: string;
  category: string;
  readingTime: string;
  published: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "waxalnet-benchmark-evaluation",
    title: "Behind the WAXALNet Benchmark: Native Speaker Evaluations for Low-Resource Speech AI",
    excerpt: "Exploring the challenges and methodologies of verifying speech-to-text models across 19 low-resource African languages.",
    date: "July 15, 2026",
    category: "Speech AI",
    readingTime: "5 min read",
    published: true,
    content: `
Automatic Speech Recognition (ASR) technology has made massive leaps forward. However, low-resource languages—especially those in Sub-Saharan Africa—remain largely excluded. The WAXAL ASR Benchmark was initiated to address this gap. 

In this note, I discuss my contributions as a native evaluator for the WAXALNet models, focusing on the crucial role of human-in-the-loop evaluations.

### The Problem: Beyond Word Error Rate (WER)

When evaluating models like Wav2Vec 2.0 fine-tuned on African corpora, relying purely on automated Word Error Rate (WER) metrics can be misleading. Here's why:

1. **Orthographic Ambiguity**: Many low-resource languages lack a singular standardized written script. A word can be spelled differently by different writers while sounding phonetically identical.
2. **Dialectal Variation**: Regional dialects introduce phoneme changes. An automated script evaluator will mark these variations as errors, even when the transcription is fully correct to a speaker of that dialect.

### The Human-in-the-Loop Methodology

Our evaluation workflow focused on manual phonetic validation:

*   **Audio-Text Alignment**: Listening to randomized audio samples and mapping them to generated outputs.
*   **Phonetic Phone Mapping**: Analyzing where the acoustic models substituted key phonemes (e.g., confusing similar vocalized glottals).
*   **Error Taxonomy**: Grouping errors into semantic (changes meaning), syntactic (incorrect grammar, correct meaning), and orthographic (spelling variations).

### Key Takeaways

Native evaluations showed that while automated WER was high, the model's *semantic comprehension* was significantly better. Over 30% of marked errors were harmless spelling variations. This highlights the urgent need for flexible, dialect-aware evaluation pipelines in low-resource speech research.

As I progress through my Master's at CMU-Africa, I aim to expand these evaluations to develop lightweight edge-native speech interfaces.
`
  },
  {
    slug: "cmu-africa-journey-ece",
    title: "My Transition to Graduate Studies at Carnegie Mellon University Africa",
    excerpt: "Reflecting on entering CMU-Africa as a Graduate Fellow, my vision for ECE, and moving from Ashesi University.",
    date: "September 10, 2025",
    category: "Academic Journey",
    readingTime: "4 min read",
    published: true,
    content: `
Transitioning from undergraduate studies to graduate research is a significant step. After completing my B.S. in Electrical and Electronic Engineering at Ashesi University as a Mastercard Foundation Scholar, I have officially begun my M.S. in Electrical and Computer Engineering at Carnegie Mellon University Africa in Kigali, Rwanda.

CMU-Africa is a unique hub for computing and engineering. In this post, I reflect on my motivations, research goals, and first impressions of graduate life.

### Bridging Hardware and Impact

At Ashesi University, the focus was on sustainable technology solutions. I designed automated transfer switches and custom Simulink machine models. While this built my foundation in power systems and analog electronics, I realized that the future of engineering lies in *intelligence at the edge*.

CMU-Africa provides an incredible workspace to combine embedded hardware with Machine Learning and RF propagation. 

### Why ECE in Kigali?

Rwanda is a testament to digital acceleration. Being physically present at CMU's Kigali campus connects me to a vibrant ecosystem of African researchers who are directly implementing systems in local fields, hospitals, and micro-grids. 

Over the next two years, my goal is to deepen my knowledge in:
*   **Edge-Native Computing**: Deploying quantized neural networks to microcontrollers.
*   **Sub-GHz Communications**: Designing low-cost telemetry arrays using LoRa mesh networks.

I am deeply grateful for the CMU-Africa Graduate Fellowship, which makes this journey possible.
`
  },
  {
    slug: "shunt-dc-motor-simulink-modeling",
    title: "Modeling Shunt DC Motor Magnetization Curves in Simulink",
    excerpt: "A deep dive into the mathematical models and custom circuit equations behind our publication in the SEED Journal.",
    date: "August 12, 2024",
    category: "Electrical Machines",
    readingTime: "6 min read",
    published: true,
    content: `
Shunt DC motors are widely used in industrial applications due to their self-excited, constant-speed characteristics. However, simulating them accurately is difficult. Standard MATLAB/Simulink blocks assume linear magnetic behaviors, ignoring saturation.

Our paper, *\"Terminal Characteristics Studies of a MATLAB Simulink-Based Model of Shunt DC Motor\"*, published in the SEED Journal, addresses this limitation.

### The Mathematical Framework

A self-excited shunt DC motor's field winding is in parallel with the armature. The electrical relationships are defined by:

$$V_t = E_a + I_a R_a$$
$$V_t = I_f R_f + L_f \\frac{d I_f}{d t}$$
$$I_L = I_a + I_f$$

Where $V_t$ is the terminal voltage, $E_a$ is the back electromotive force, and $R_a, R_f$ are the armature and field resistances.

The key challenge is the non-linear relationship between field current $I_f$ and magnetic flux $\\Phi$. In our custom model, we fit experimental magnetization data to a saturation equation:

$$E_a = k \\Phi \\omega = \\frac{a I_f}{b + I_f} \\omega$$

### Simulink Block Architecture

Instead of the default DC Machine block, we constructed the model from basic mathematical building blocks:
1.  **Integrator Blocks**: To compute armature and field current derivatives.
2.  **Lookup Table / Formula Blocks**: To apply the non-linear saturation curve.
3.  **Torque & Speed Loops**: To feedback the mechanical load torque ($T_L$) and calculate rotor speed ($\\omega$).

### Key Results

Our simulation sweeps demonstrated that under varying mechanical loads, the custom saturation model predicted speed drops that matched experimental measurements within a $2\\%$ margin. In contrast, the linear model showed up to $12\\%$ discrepancy under heavy load.

These findings are valuable for designing industrial speed controllers, proving that custom mathematical models are necessary for high-fidelity control design.
`
  }
];
