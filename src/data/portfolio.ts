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
  paper?: string;
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
  certificateUrl?: string;
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
    headline: "M.S. ECE Graduate & Researcher from Carnegie Mellon University Africa",
    currentStatus: "M.S. Electrical and Computer Engineering Graduate, CMU-Africa | Mastercard Foundation Scholar Alumni",
    introduction: "I recently earned my Master's in Electrical and Computer Engineering from Carnegie Mellon University Africa. I specialize in developing intelligent, sustainable technology solutions. My research and development interests span wireless communication systems, Internet of Things (IoT), and embedded hardware design, particularly focused on high-impact applications in healthcare, environmental sensing, and agricultural technology.",
    cvUrl: "https://drive.google.com/file/d/1c3LcY11bEq5cPLRcuUSrula1EsbuSKLe/view?usp=sharing",
    avatarUrl: "/portfolio-website/images/profile.jpg",
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
      }
    ],
    phdFocus: "For my future PhD direction, I aim to explore self-sustaining, intelligent edge devices. Specifically, I am interested in how energy-harvesting IoT nodes can run lightweight, locally-trained machine learning models to perform complex sensing and diagnostic tasks in real-time, completely decoupled from cloud servers."
  },
  projects: [
    {
      slug: "wirelessai",
      title: "Wireless AI Explorations",
      subtitle: "Independent Research on Wireless Communication and Deep Learning",
      category: "Wireless AI & Machine Learning",
      period: "Current",
      problem: "Understanding the intersection of modern deep learning and wireless communication systems, such as channel state information and spectrum sensing.",
      motivation: "To explore theoretical concepts, read state-of-the-art research papers, and independently investigate the potential of applying AI to optimize and model wireless networks.",
      methodology: "Conducting self-directed study by reviewing academic literature, experimenting with foundational machine learning models, and exploring the integration of AI techniques in signal processing and wireless telemetry.",
      techStack: ["Deep Learning", "Signal Processing", "Wireless Communication", "Academic Research"],
      challenges: "Synthesizing complex theoretical formulations from research papers and translating them into practical understanding of AI-driven wireless systems.",
      results: "Built a solid foundational understanding of AI applications in wireless systems, maintaining an active repository of notes, literature reviews, and explorations.",
      impact: "Demonstrates proactive, self-motivated learning and deep interest in cutting-edge intersections of hardware, wireless tech, and AI.",
      github: "https://github.com/hadjei/wirelessai",
      featured: true
    },
    {
      slug: "smart-city-parking",
      title: "Smart City Parking System",
      subtitle: "Edge Computing & IoT Vehicle Detection",
      category: "IoT & Smart Infrastructure",
      period: "Nov 2025 - Dec 2025",
      problem: "Inefficient urban parking management leading to congestion and increased emissions.",
      motivation: "To create an accessible, high-accuracy parking monitoring solution for smart cities.",
      methodology: "Designed a low-cost smart parking system integrating inductive sensing, ultrasonic validation, and edge computing for high-accuracy vehicle detection. Built a web-based dashboard for live slot-occupancy monitoring, real-time analytics, and local session tracking.",
      techStack: ["Edge Computing", "Ultrasonic Sensors", "Inductive Sensing", "Web Dashboard"],
      challenges: "Fusing data from multiple sensor modalities to eliminate false positives in vehicle detection.",
      results: "Achieved highly accurate live tracking of parking slots.",
      impact: "Provides a scalable foundation for urban traffic and parking optimization.",
      featured: true
    },
    {
      slug: "greenhouse-monitoring-robot",
      title: "Autonomous Ground Robot for Greenhouse Monitoring",
      subtitle: "Embedded Systems and IoT in Sustainable Agriculture",
      category: "Robotics & IoT",
      period: "Jan 2024 - Oct 2024",
      problem: "Need for real-time data on temperature, humidity, CO₂, and light intensity inside greenhouse rows to improve crop yield.",
      motivation: "To demonstrate the application of embedded systems and IoT in sustainable agriculture.",
      methodology: "Designed and deployed a real-time environmental monitoring system enabling data-driven crop optimisation for greenhouse farmers. Engineered autonomous navigation and path-planning algorithms for the robot; built PHP/HTML dashboards for remote monitoring. Integrated line-following and joystick obstacle-avoidance for navigation. Used environmental sensors and ESP-NOW protocol.",
      techStack: ["ESP-NOW", "Robotics", "PHP", "HTML", "IoT Sensors"],
      challenges: "Navigating within greenhouse rows and maintaining reliable wireless transmission in an agricultural environment.",
      results: "Successfully collected real-time data on environmental factors and displayed it on a remote dashboard.",
      impact: "Helped farmers make informed decisions to improve crop yield and environmental control.",
      demo: "https://www.youtube.com/watch?v=Ug9EQ7rXyCs",
      paper: "https://air.ashesi.edu.gh/items/10ec350f-cd41-4113-be1b-aa61865ad62a",
      featured: true
    },
    {
      slug: "cart-project-kl25z-freertos",
      title: "3-Wheel Robot using KL25Z and FreeRTOS",
      subtitle: "Bluetooth-Controlled Cart with Real-Time Scheduling",
      category: "Embedded Systems & Robotics",
      period: "May 2024",
      problem: "Managing multiple sensor inputs and executing precise control logic simultaneously on an embedded platform.",
      motivation: "To implement a reliable and efficient real-time system using RTOS on microcontroller hardware.",
      methodology: "Optimised transceiver firmware using RTOS primitives, achieving a 90% improvement in power efficiency and responsiveness. Implemented UART-over-Bluetooth (HC-04) remote control between FRDM-KL25Z transceiver and receiver boards. Interfaced ultrasonic modules for obstacle detection.",
      techStack: ["KL25Z Microcontroller", "FreeRTOS", "Bluetooth", "C/C++", "Sensors"],
      challenges: "Synchronizing tasks between two microcontrollers and ensuring real-time responsiveness in dynamic environments.",
      results: "Achieved reliable system performance with accurate control, obstacle detection, and vastly improved power efficiency.",
      impact: "Demonstrated the capability of FreeRTOS in managing complex, concurrent embedded operations.",
      featured: true
    },
    {
      slug: "smart-iot-objects",
      title: "Smart IoT Objects",
      subtitle: "Multi-Sensor MQTT Data Pipeline",
      category: "Wireless Communication & IoT",
      period: "May 2024",
      problem: "Reliable and dynamic transportation of sensor data to backend databases over lightweight protocols.",
      motivation: "To build a robust IoT pipeline supporting dynamic transport switching.",
      methodology: "Developed firmware on ESP32 to monitor temperature, humidity, and light intensity; integrated MQTT with a Mosquito broker to pipe sensor data to an SQL backend. Built a configuration portal supporting dynamic switching between HTTP and MQTT data transport.",
      techStack: ["ESP32", "MQTT", "SQL", "IoT"],
      challenges: "Ensuring seamless switching between HTTP and MQTT transport layers without data loss.",
      results: "Created a flexible configuration portal and reliable data pipeline for continuous environmental logging.",
      impact: "Proved the viability of dynamic protocol switching in low-power IoT networks.",
      featured: false
    },
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
      slug: "greenhouse-lora-monitoring",
      title: "Environmental Conditions Monitoring System for Greenhouses Using LoRa",
      subtitle: "Cost-Effective and Energy-Efficient IoT System",
      category: "Wireless Communication & IoT",
      period: "N/A",
      problem: "Erratic weather conditions and inadequate infrastructure in rural Africa hinder agricultural productivity.",
      motivation: "To enhance greenhouse farming in rural areas lacking internet access or reliable power grids.",
      methodology: "Developed an environmental monitoring system using LoRa technology. Configured a sensor node and a receiving node communicating over a peer-to-peer network for continuous monitoring of temperature and humidity inside greenhouses.",
      techStack: ["LoRa", "Sensor Networks", "Peer-to-Peer Communication", "IoT"],
      challenges: "Establishing a reliable, long-range connection without relying on internet or grid power.",
      results: "Enabled continuous monitoring of greenhouse conditions effectively without internet dependency.",
      impact: "Tackled the challenge of food security in rural Africa by providing an accessible and efficient monitoring tool.",
      featured: true
    },
    {
      slug: "digital-modulation-techniques",
      title: "Comparative Analysis of Digital Modulation Techniques",
      subtitle: "Signal Processing and Communications Simulation",
      category: "Telecommunications & Signal Processing",
      period: "N/A",
      problem: "Need to evaluate the resilience of various digital modulation schemes against Additive White Gaussian Noise (AWGN).",
      motivation: "To understand the trade-offs between data rate and noise resilience in digital communication systems.",
      methodology: "Simulated a digital communication system using MATLAB and Simulink to evaluate BPSK, QPSK, FSK, 16-QAM, and 64-QAM. Analysed bit error rates (BER) against signal-to-noise ratios (SNR) and visualised constellation diagrams.",
      techStack: ["MATLAB", "Simulink", "Digital Modulation", "Signal Processing"],
      challenges: "Accurately modeling AWGN and varying noise levels to assess the performance of each modulation scheme.",
      results: "Highlighted 16-QAM as a strong balance between data rate and noise resilience.",
      impact: "Provided insights into modulation efficiency in real-world communication systems.",
      featured: false
    },
    {
      slug: "single-tone-fm-gui",
      title: "MATLAB Based GUI for Single Tone Frequency Modulation",
      subtitle: "Interactive Educational Tool for Signals and Systems",
      category: "Signal Processing Software",
      period: "N/A",
      problem: "Visualizing and understanding the impact of modulation index and signal parameters in Frequency Modulation (FM) theory.",
      motivation: "To create an interactive tool that deepens the understanding of FM transmission and spectral characteristics.",
      methodology: "Developed a MATLAB-based GUI using the GUIDE toolbox to simulate single-tone FM. Allowed users to input and adjust amplitude and frequency of message and carrier signals, and modulation index. Plotted signals in real time.",
      techStack: ["MATLAB", "GUIDE", "Frequency Modulation"],
      challenges: "Ensuring real-time responsiveness and accurate mathematical modeling of the modulated signals.",
      results: "Produced a user-friendly interface that successfully demonstrated how modulation index influences spectral characteristics.",
      impact: "Deepened theoretical understanding and provided an effective educational tool for Signals and Systems.",
      featured: false
    },
    {
      slug: "optical-heartbeat-monitor",
      title: "Optical Heartbeat Monitoring Instrument",
      subtitle: "Non-Invasive Biomedical Signal Acquisition",
      category: "Biomedical Engineering & Instrumentation",
      period: "N/A",
      problem: "Extracting weak heartbeat signals from optical sensors while filtering out significant DC offset and environmental noise.",
      motivation: "To design a non-invasive instrument for measuring human heart rate from the fingertip using analog signal conditioning.",
      methodology: "Designed an instrument using an IR LED and photodiode. Implemented a four-stage system: heartbeat detection, an active high-pass filter (0.72 Hz cutoff) to remove DC offset, and two active low-pass filters/amplifiers (3.38 Hz cutoff, gain of 100 each). Analyzed the circuit via Proteus simulation and oscilloscope.",
      techStack: ["Analog Circuit Design", "Biomedical Instrumentation", "Proteus", "Signal Filtering"],
      challenges: "Attenuating high-frequency noise and effectively amplifying the weak heartbeat signal within the target frequency range.",
      results: "Successfully amplified and filtered the heartbeat signal, measuring a frequency corresponding to approximately 88 BPM, verified via oscilloscope.",
      impact: "Strengthened foundations in biomedical sensing and analog signal conditioning for IoT-based health monitoring applications.",
      featured: true
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
      abstract: "This paper presents a comprehensive study on the terminal characteristics and speed control of a shunt DC motor modeled using MATLAB and Simulink. Unlike standard machine blocks, this study outlines step-by-step custom equations representing magnetic saturation, field winding behaviors, and armature resistance. The results validate speed-torque characteristics and evaluate voltage and field flux speed control strategies under dynamic mechanical loads.",
      bibtex: `@article{baraka2024shunt,\n  title={Terminal Characteristics Studies of a MATLAB Simulink-Based Model of Shunt DC Motor},\n  author={Baraka, Jonathan and Amosah, Kofi and Aho, Enoch and Adjei, Hafiz},\n  journal={Science Engineering Entrepreneurship Design (SEED) Journal},\n  volume={2},\n  number={2},\n  year={2024},\n  publisher={Ashesi University}\n}`
    }
  ],
  experiences: [
    {
      role: "Research Associate",
      company: "KCRC / CMU Africa",
      location: "Kigali, Rwanda",
      period: "May 2026 - Present",
      type: "research",
      highlights: [
        "Integrated BAE Systems/A123 LiFePO4 battery modules (736 Wh, 40V, 96-cell) with a Raspberry Pi monitoring system by reverse-engineering a proprietary 5V TTL UART protocol from 2008-era documentation",
        "Developed a full-stack BMS monitoring system comprising a Python serial communication library, Flask REST API, and a real-time web dashboard with time-series charts, per-module filtering, and historical data logging",
        "Implemented multi-module daisy-chain addressing and wired-OR RX bus to poll 3 battery modules simultaneously with CRC-8 validated packets"
      ]
    },
    {
      role: "Student IT Support",
      company: "Carnegie Mellon University Africa",
      location: "Kigali, Rwanda",
      period: "Sept 2025 - May 2026",
      type: "industry",
      highlights: [
        "Delivered real-time AV technical support during lectures, academic meetings, and large-scale university events, maintaining near-zero downtime for 100+ faculty and students",
        "Assisted network and server engineers with LAN administration, fault diagnosis, and data-centre operations, gaining enterprise-level exposure to IT infrastructure",
        "Resolved end-user hardware and software incidents, improving IT ticket closure rate and user satisfaction"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "Ashesi University",
      location: "Berekusu, Ghana",
      period: "Sept 2024 - May 2025",
      type: "teaching",
      highlights: [
        "Organised and delivered laboratory sessions and tutorials for undergraduate engineering courses, directly supporting improved student performance",
        "Provided AV and classroom technical support to faculty, ensuring seamless course delivery",
        "Collaborated with course instructors to identify academic and behavioural challenges and propose targeted interventions"
      ]
    },
    {
      role: "Electrical Technician Intern",
      company: "Northern Electricity Distribution Company",
      location: "Tamale, Ghana",
      period: "July 2023 - Aug 2023",
      type: "industry",
      highlights: [
        "Executed service-drop installations and electricity meter deployments for 500+ customers, expanding grid access across northern Ghana",
        "Conducted on-site customer education on safe meter operation, improving adoption and reducing support calls",
        "Verified monthly billing data against meter-reader records to ensure billing accuracy and reduce revenue leakage"
      ]
    },
    {
      role: "Research Intern",
      company: "Think Education",
      location: "Tamale, Ghana",
      period: "July 2022 - Aug 2022",
      type: "research",
      highlights: [
        "Designed and populated a performance database for 20+ low-cost private schools, enabling data-driven benchmarking",
        "Analysed school administration, management, and operations; produced structured reports with actionable improvement recommendations"
      ]
    }
  ],
  education: [
    {
      degree: "M.S. in Electrical and Computer Engineering",
      institution: "Carnegie Mellon University Africa",
      location: "Kigali, Rwanda",
      period: "2025 - 2026",
      details: "Focusing on embedded hardware, low-power IoT networks, wireless systems, and edge intelligence.",
      courses: ["Advanced Embedded Systems", "Wireless Communication Networks", "Machine Learning at the Edge", "Signal Processing"],
      awards: ["Mastercard Foundation Graduate Affiliate"]
    },
    {
      degree: "B.S. in Electrical and Electronic Engineering",
      institution: "Ashesi University",
      location: "Berekuso, Ghana",
      period: "2020 - 2024",
      details: "Graduated with Honors. Focused on sustainable technology solutions, digital electronics, and power engineering.",
      courses: ["Digital Systems Design", "Microprocessor Interfacing", "Power Systems Analysis", "Control Systems", "Differential Equations"],
      awards: ["Mastercard Foundation Scholar Award (Full Academic Scholarship)", "Dean's List Honoree"]
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
      title: "Best Poster Award",
      issuer: "Carnegie Mellon University Africa Research Showcase",
      year: "2026",
      description: "Awarded for outstanding research and scholarly contribution for the paper 'Imaracare: Contact-Free Fetal Heart Rate Monitoring Using Wi-Fi Channel State Information and Deep Learning for Low-Resource Sub-Saharan Africa'.",
      certificateUrl: "https://drive.google.com/file/d/1q0huLeFX30xse5wiO9x0fso6T1xslSQ3/view?usp=sharing"
    },
    {
      title: "1st Place Winner",
      issuer: "Health Systems Innovation Lab Hackathon, Harvard University",
      year: "2026",
      description: "Won 1st place at the 7th Edition of the Hackathon (Kigali Hub) focusing on 'Building High-Value Health Systems: Leveraging AI'.",
      certificateUrl: "https://drive.google.com/file/d/1U4iHClS_mPohnXwkyAZyDwlBKThzniy4/view?usp=sharing"
    },
    {
      title: "Global Top 20 - Demo Day Finalist",
      issuer: "Health Systems Innovation Lab, Harvard University",
      year: "2026",
      description: "Recognized as a Global Top 20 Finalist (Team Vitalabs) in the Venture Building Program.",
      certificateUrl: "https://drive.google.com/file/d/1eVl8W9nXlLEdSouTsL5rqF_SD-S9PXsl/view?usp=sharing"
    }
  ]
};
