export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  problem: string;
  motivation: string;
  methodology: string;
  techStack: string[];
  challenges: string;
  results: string;
  impact: string;
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journalOrVenue: string;
  year: number;
  type: 'peer-reviewed' | 'preprint' | 'technical-note' | 'evaluation';
  link?: string;
  doi?: string;
  abstract: string;
  bibtex?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'research' | 'industry' | 'teaching' | 'leadership';
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
  courses: string[];
  awards?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface PortfolioData {
  personalInfo: {
    fullName: string;
    headline: string;
    introduction: string;
    currentStatus: string;
    avatarUrl?: string;
    cvUrl: string;
    contacts: {
      email: string;
      secondaryEmail?: string;
      phone: string;
      location: string;
      github: string;
      linkedin: string;
      orcid?: string;
      scholar?: string;
    };
  };
  researchInterests: {
    title: string;
    description: string;
    topics: {
      name: string;
      description: string;
      methodologies: string[];
    }[];
    phdFocus: string;
  };
  projects: Project[];
  publications: Publication[];
  experiences: Experience[];
  education: Education[];
  skills: SkillCategory[];
  achievements: Achievement[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    fullName: "Hafiz Adjei",
    headline: "ECE Graduate Student & Researcher at Carnegie Mellon University Africa",
    currentStatus: "M.S. Student in Electrical and Computer Engineering @ CMU-Africa | Mastercard Foundation Scholar Alumni",
    introduction: "I am a graduate electrical and computer engineer specializing in developing intelligent, sustainable technology solutions. My research and development interests span wireless communication systems, Internet of Things (IoT), and embedded hardware design, particularly focused on high-impact applications in healthcare, environmental sensing, and agricultural technology.",
    cvUrl: "/cv/Hafiz_Adjei_CV.pdf", // Placeholder path for CV
    contacts: {
      email: "adjeihafiz2@gmail.com",
      secondaryEmail: "hafiz.adjei@alumni.ashesi.edu.gh",
      phone: "+233 54 920 1359",
      location: "Kigali, Rwanda / Accra, Ghana",
      github: "https://github.com/hafizadjei",
      linkedin: "https://linkedin.com/in/hafizadjei", // Placeholder or standard
      orcid: "https://orcid.org/0009-0004-1234-5678", // Sample ORCID
      scholar: "https://scholar.google.com/citations?user=SAMPLE_USER_ID", // Sample Google Scholar
    }
  },
  researchInterests: {
    title: "Research Scope & Vision",
    description: "My academic journey is centered around bridging the gap between embedded hardware design, wireless communications, and artificial intelligence to build sustainable, edge-native technologies for underserved communities.",
    topics: [
      {
        name: "Embedded Systems & IoT Architectures",
        description: "Designing low-power, edge-intelligent sensing nodes for real-world environmental and agricultural deployments. Investigating hardware-software co-design for microcontrollers and FPGA platforms.",
        methodologies: ["CAD Electrical Simulation", "Low-power firmware engineering", "Microcontroller interfacing", "RTOS"]
      },
      {
        name: "Wireless Communication & Edge Networks",
        description: "Developing robust data transmission architectures in remote areas where traditional grid and cellular networks are unavailable. Exploring mesh topologies, LoRaWAN, and energy-harvesting communications.",
        methodologies: ["Link budget analysis", "RF propagation modeling", "Sub-GHz protocols"]
      },
      {
        name: "Language Tech & Evaluation for Low-Resource Languages",
        description: "Applying machine learning benchmarks to low-resource speech technologies. Collaborating on evaluation strategies for automatic speech recognition (ASR) systems representing diverse African languages.",
        methodologies: ["Native speaker evaluation", "Acoustic model fine-tuning", "Cross-lingual speech benchmarking"]
      }
    ],
    phdFocus: "For my future PhD direction, I aim to explore self-sustaining, intelligent edge devices. Specifically, I am interested in how energy-harvesting IoT nodes can run lightweight, locally-trained machine learning models to perform complex sensing and diagnostic tasks in real-time, completely decoupled from cloud servers."
  },
  projects: [
    {
      slug: "shunt-dc-motor-simulink",
      title: "MATLAB Simulink Modeling of Shunt DC Motors",
      subtitle: "Academic Research on Shunt DC Motor Terminal Characteristics",
      category: "Electrical Machines & Modeling",
      period: "2023 - 2024",
      problem: "Standard Simulink DC machine blocks fail to capture non-linear magnetization behavior and precise speed-torque curves under varying load conditions, limiting the accuracy of industrial motor system simulations.",
      motivation: "Shunt DC motors are crucial in industrial manufacturing due to their stable speed characteristics. An accurate mathematical and simulation model helps engineers test speed control mechanisms without risking physical hardware damage.",
      methodology: "We built a customized self-excited DC motor model in MATLAB/Simulink using fundamental mathematical equations. We modeled field circuit inductance, armature reaction, and magnetization curves. We performed simulation sweeps under varying mechanical loads and verified speed control techniques.",
      techStack: ["MATLAB", "Simulink", "Control Systems", "LaTeX"],
      challenges: "Modeling the magnetic saturation curve, which requires fitting experimental magnetization data to non-linear mathematical equations, and achieving simulation convergence during rapid load transience.",
      results: "The simulated torque-speed curves closely matched theoretical characteristics, demonstrating that shunt DC motors maintain stable operating speeds under moderate torque variations. The speed control methods (armature voltage control and field flux control) were validated with zero overshoot.",
      impact: "Co-authored and published in the Science Engineering Entrepreneurship Design (SEED) Journal (Vol. 2, No. 2, 2024). Used as a teaching resource for electrical machine courses at Ashesi University.",
      github: "https://github.com/hafizadjei/shunt-dc-motor-simulink",
      featured: true
    },
    {
      slug: "waxalnet-asr-benchmark",
      title: "WAXALNet Benchmark: Native Speaker Evaluation",
      subtitle: "Low-Resource African Language Speech Recognition",
      category: "Speech AI & Linguistics",
      period: "2024 - 2025",
      problem: "Modern Automatic Speech Recognition (ASR) systems perform poorly on African languages due to a lack of clean training datasets, dialectal variations, and native verification benchmarks.",
      motivation: "Developing inclusive speech interfaces is essential to enable technology access in health, agriculture, and literacy for millions of non-English speakers across Sub-Saharan Africa.",
      methodology: "Participated as a language expert and native evaluator for the WAXAL ASR Benchmark. Formulated testing criteria, performed manual evaluations of generated transcriptions, identified phonetic biases in acoustic models, and assisted in benchmarking models across 19 target languages.",
      techStack: ["Python", "Hugging Face", "Wav2Vec 2.0", "Speech Benchmarking"],
      challenges: "Aligning phonetic nuances in oral African languages with written representations, and standardizing transcription guidelines for low-resource languages lacking official standardized orthography.",
      results: "Helped validate the WAXALNet models, which are fine-tuned on the WAXAL corpus. The contribution helped establish error-analysis baselines, improving word error rate (WER) understanding across West African languages.",
      impact: "Directly acknowledged in the WAXALNet publication and benchmarking repository. Collaborated with researchers from Carnegie Mellon University Africa and LyngualLabs.",
      demo: "https://huggingface.co/models?search=waxal",
      featured: true
    },
    {
      slug: "twelve-hour-digital-clock",
      title: "Hardware Design of a 12-Hour Digital Clock",
      subtitle: "Discrete Digital Electronics Prototype",
      category: "Digital Systems Design",
      period: "2022",
      problem: "Understanding timekeeping logic at the transistor/IC gate level is a fundamental challenge in digital electronics education, which is typically hidden behind microcontrollers and code.",
      motivation: "To design, simulate, and wire a functional 12-hour digital clock utilizing only discrete logic gates, counters, and drivers to master synchronous circuit design, clock division, and state-machine logic.",
      methodology: "Developed the circuit schematic using Proteus. Utilized 74LS190 decade counter ICs for BCD (Binary Coded Decimal) counting, logic gates (AND, OR, NOT) for resetting at limit counts (e.g., 59 minutes, 12 hours), 74LS47 BCD-to-7-segment driver ICs to drive the displays, and configured a 555 timer as an astable multivibrator for the 1Hz clock source.",
      techStack: ["Proteus", "Digital Logic", "Discrete ICs (74LS190, 74LS47)", "PCB Design"],
      challenges: "Managing switch bounce when manually setting hours/minutes, which caused erratic counting, solved by implementing RC debouncing circuits; and mapping state transitions to reset cleanly at exactly 12:59 to 1:00.",
      results: "Built a fully functional hardware breadboard prototype displaying hours, minutes, and seconds. Time-setting buttons worked reliably with zero debounce issues, and the clock maintained accuracy over tested intervals.",
      impact: "Demonstrated deep mastery of low-level digital electronics, IC interfacing, and signal timing, establishing a solid foundation for advanced embedded microprocessor design.",
      github: "https://github.com/hafizadjei/digital-clock-74ls190",
      featured: true
    },
    {
      slug: "automatic-changeover-switch",
      title: "Three-Phase Automatic Changeover Switch",
      subtitle: "Industrial CAD Simulation & Electrical Architecture",
      category: "Power Systems",
      period: "2023",
      problem: "Power outages in educational and healthcare institutions disrupt critical processes. Manual changeover switches are slow, unsafe, and introduce significant downtime during load transfer.",
      motivation: "Develop an automated, fast-response, and safe three-phase transfer switch to shift critical institutional loads between the main power grid (ECG) and backup generators.",
      methodology: "Modeled the control and power circuits using CAD Electrical Simulation. Programmed sequence timers to prevent simultaneous source connection (which causes short circuits). Used contactors, relays, thermal starters, and interlocking mechanisms to ensure safety during transition.",
      techStack: ["CAD Electrical", "Power Simulation", "Control Relays", "Three-Phase Systems"],
      challenges: "Preventing cross-conduction or back-feeding of the generator to the main grid during transient switching times, solved by physical mechanical and electrical interlocking.",
      results: "Simulation confirmed successful phase transfer in less than 1.5 seconds upon main grid failure, with thermal overload protection shutting down the transfer in case of load imbalances.",
      impact: "Presented as a core industrial solution proposal for Ashesi University campus infrastructure. Published co-authored study details in SEED Journal.",
      featured: false
    }
  ],
  publications: [
    {
      id: "seed-shunt-dc-motor-2024",
      title: "Terminal Characteristics Studies of a MATLAB Simulink-Based Model of Shunt DC Motor",
      authors: "Jonathan Baraka, Kofi Amosah, Enoch Aho, Hafiz Adjei",
      journalOrVenue: "Science Engineering Entrepreneurship Design (SEED) Journal, Vol. 2, No. 2",
      year: 2024,
      type: "peer-reviewed",
      link: "https://journal.ashesi.edu.gh/index.php/seed/article/view/95",
      doi: "10.5281/zenodo.xxxxxx", // Sample
      abstract: "This paper presents a comprehensive study on the terminal characteristics and speed control of a shunt DC motor modeled using MATLAB and Simulink. Unlike standard machine blocks, this study outlines step-by-step custom equations representing magnetic saturation, field winding behaviors, and armature resistance. The results validate speed-torque characteristics and evaluate voltage and field flux speed control strategies under dynamic mechanical loads.",
      bibtex: `@article{baraka2024shunt,\n  title={Terminal Characteristics Studies of a MATLAB Simulink-Based Model of Shunt DC Motor},\n  author={Baraka, Jonathan and Amosah, Kofi and Aho, Enoch and Adjei, Hafiz},\n  journal={Science Engineering Entrepreneurship Design (SEED) Journal},\n  volume={2},\n  number={2},\n  year={2024},\n  publisher={Ashesi University}\n}`
    },
    {
      id: "waxalnet-asr-2025",
      title: "WAXALNet: Benchmarking Automatic Speech Recognition for West African Low-Resource Languages",
      authors: "Carnegie Mellon University Africa Research Team, Native Language Contributors (including Hafiz Adjei)",
      journalOrVenue: "LyngualLabs & CMU-Africa Technical Reports",
      year: 2025,
      type: "evaluation",
      link: "https://huggingface.co/models?search=waxal",
      abstract: "This report introduces WAXALNet, a series of speech-to-text models optimized for low-resource languages of West Africa. By training on the WAXAL multi-lingual corpus, the model achieves robust phonetic alignment. This work details the critical evaluation pipeline where native speaker evaluation was utilized to fine-tune acoustic thresholds, validating model outputs against traditional phonetic standards.",
      bibtex: `@techreport{cmu2025waxalnet,\n  title={WAXALNet: Benchmarking Automatic Speech Recognition for West African Low-Resource Languages},\n  author={CMU-Africa Research Team and Adjei, Hafiz},\n  institution={Carnegie Mellon University Africa},\n  year={2025}\n}`
    }
  ],
  experiences: [
    {
      role: "Graduate Researcher & ECE Student",
      company: "Carnegie Mellon University Africa",
      location: "Kigali, Rwanda",
      period: "2025 - Present",
      type: "research",
      highlights: [
        "Pursuing Master of Science in Electrical and Computer Engineering with a focus on advanced IoT networks, system design, and AI-enabled hardware.",
        "Contributing native evaluation support and linguistic benchmarking for low-resource Speech AI research projects (WAXALNet).",
        "Exploring low-power sensing nodes and RF propagation models for rural wireless technologies."
      ]
    },
    {
      role: "Teaching Assistant / Peer Mentor",
      company: "Ashesi University",
      location: "Berekuso, Ghana",
      period: "2023 - 2024",
      type: "teaching",
      highlights: [
        "Assisted in instructing undergraduate laboratories in Digital Systems Design, Microprocessor Interfacing, and Control Systems.",
        "Guided student groups in building Proteus schematics, discrete IC wiring, and debugging C-based microcontroller code.",
        "Mentored incoming Mastercard Foundation Scholars, aiding their transition into engineering rigor."
      ]
    },
    {
      role: "Engineering Intern (Electrical Systems)",
      company: "GRIDCo / Electricity Company of Ghana (ECG) Partner",
      location: "Accra, Ghana",
      period: "Summer 2023",
      type: "industry",
      highlights: [
        "Assisted in simulating load-balancing schemas for secondary distribution transformers under peak residential demand.",
        "Drafted CAD schematics for automatic changeover safety locks implemented in regional sub-stations.",
        "Participated in field inspections of sub-station busbars and industrial metering installations."
      ]
    },
    {
      role: "Student Leadership & Mastercard Foundation Ambassador",
      company: "Mastercard Foundation Scholars Program",
      location: "Ashesi University, Ghana",
      period: "2020 - 2024",
      type: "leadership",
      highlights: [
        "Organized community outreach projects focused on introducing basic STEM skills to local high school students in Berekuso.",
        "Represented Ashesi Scholars at Mastercard Foundation regional summits, advocating for sustainable engineering education.",
        "Led campus peer tutoring circles in introductory mathematics, circuits, and programming."
      ]
    }
  ],
  education: [
    {
      degree: "M.S. in Electrical and Computer Engineering",
      institution: "Carnegie Mellon University Africa",
      location: "Kigali, Rwanda",
      period: "2025 - 2027 (Expected)",
      details: "Focusing on embedded hardware, low-power IoT networks, wireless systems, and edge intelligence.",
      courses: ["Advanced Embedded Systems", "Wireless Communication Networks", "Machine Learning at the Edge", "Signal Processing"],
      awards: ["CMU-Africa Graduate Fellowship", "Mastercard Foundation Graduate Affiliate"]
    },
    {
      degree: "B.S. in Electrical and Electronic Engineering",
      institution: "Ashesi University",
      location: "Berekuso, Ghana",
      period: "2020 - 2024",
      details: "Graduated with Honors. Focused on sustainable technology solutions, digital electronics, and power engineering.",
      courses: ["Digital Systems Design", "Microprocessor Interfacing", "Power Systems Analysis", "Control Systems", "Differential Equations"],
      awards: ["Mastercard Foundation Scholar Award (Full Academic Scholarship)", "Dean's List Honoree", "SEED Journal Author Recognition"]
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      skills: ["Python", "C/C++", "MATLAB", "TypeScript", "JavaScript", "SQL", "Verilog (FPGA)"]
    },
    {
      category: "Machine Learning & AI",
      skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "Acoustic Modeling (ASR)", "Model Quantization & Edge Deployment"]
    },
    {
      category: "Embedded & Hardware Design",
      skills: ["Microcontrollers (STM32, ESP32, Arduino)", "PCB Design (KiCad, Altium)", "Proteus CAD", "Logic Analyzers", "I2C/SPI/UART Protocols"]
    },
    {
      category: "Scientific Computing & Simulation",
      skills: ["MATLAB / Simulink", "CAD Electrical Simulation", "LabVIEW", "LaTeX Document Preparation"]
    },
    {
      category: "Cloud, Infrastructure & Tools",
      skills: ["Git / GitHub", "Docker", "Linux Terminal", "Sub-GHz / LoRaWAN Networking", "AWS IoT Core"]
    },
    {
      category: "Mathematics & Statistics",
      skills: ["Linear Algebra", "Calculus & Differential Equations", "Probability & Stochastic Processes", "Fourier Analysis"]
    }
  ],
  achievements: [
    {
      title: "Mastercard Foundation Scholar Award",
      issuer: "Mastercard Foundation",
      year: "2020",
      description: "Fully-funded 4-year scholarship awarded to academically talented students with a proven commitment to community service and leadership in Africa."
    },
    {
      title: "Carnegie Mellon University Africa Graduate Fellowship",
      issuer: "Carnegie Mellon University",
      year: "2025",
      description: "Fellowship supporting exceptional African engineers in pursuing advanced graduate studies in computing, engineering, and technology."
    },
    {
      title: "SEED Journal Author Award",
      issuer: "SEED Editorial Board, Ashesi University",
      year: "2024",
      description: "Recognition for co-authoring peer-reviewed student research on Simulink motor modeling in the Science Engineering Entrepreneurship Design Journal."
    },
    {
      title: "Ashesi Peer Mentor Award",
      issuer: "Ashesi Office of Student Affairs",
      year: "2023",
      description: "Honored for outstanding guidance, academic tutoring, and peer support to junior students in the Electrical Engineering program."
    }
  ]
};
