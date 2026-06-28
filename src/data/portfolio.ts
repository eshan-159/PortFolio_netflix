// portfolio.ts — single source of truth for Eshan's Netflix-style portfolio.
// All content is derived from the resume and the I-State research abstract.

export interface CardItem {
  id: string;
  rank?: number;
  title: string;
  subtitle: string;
  meta: string; // short tag line e.g. "2025 · Internship"
  match?: number; // "match %" netflix flavour
  maturity?: string; // e.g. "Production", "Research"
  image: string;
  logo?: string;
  accent?: string; // accent gradient color
  tags: string[];
  summary: string;
  bullets: string[];
  metrics?: { label: string; value: string }[];
  github?: string;
  link?: { label: string; url: string };
  category: 'experience' | 'project' | 'research';
}

export interface SkillGroup {
  category: string;
  icon: string; // react-icons name handled in component
  skills: string[];
}

/* ────────────────────────────── HERO ────────────────────────────── */
export const hero = {
  badge: 'SOA · Bhubaneswar',
  title: 'Eshan',
  tagline: 'AI & Distributed-Systems Engineer',
  description:
    'I build production AI and infrastructure at scale — self-healing Kubernetes platforms, real-time 3D avatars on H100s, CUDA kernels near cuBLAS, and a first-author transformer-safety paper under review at ICLR. Codeforces Expert. 450+ DSA solved.',
  rating: 'U/A 18+ · Hire-ready',
  resumeUrl: '/Eshan_Resume.pdf',
  highlights: ['Distributed Systems', 'CUDA / GPU', 'Applied ML', 'LLM Safety Research'],
};

/* ───────────────────────── EXPERIENCES ──────────────────────────── */
export const experiences: CardItem[] = [
  {
    id: 'texmin',
    rank: 1,
    title: 'TEXMiN — IIT (ISM) Dhanbad',
    subtitle: 'AI Developer Intern · AvatarGPT — Intelligent 3D AI Avatar System',
    meta: '15 Jun 2025 – 15 Jul 2025',
    maturity: 'Production',
    match: 98,
    image:
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80',
    logo: '/imagesss/YV4g3Qoe_400x400.jpg',
    accent: '#e50914',
    tags: ['Python', 'Unity', 'PyTorch', 'Node.js', 'Whisper', 'Sarvam AI', 'Kubernetes'],
    summary:
      'Shipped a production conversational 3D avatar deployed to 70+ enterprise training centers on NVIDIA H100 infrastructure.',
    bullets: [
      'Deployed a production AI inference pipeline on NVIDIA H100 to 70+ enterprise centers — sub-50ms P99 latency at scale, containerized via Kubernetes with HPA and load-balanced ingress.',
      'Deployed to production at Pitman Training across 70+ centers, enabling users to interact with a live 3D AI avatar — reducing human-support overhead and extending AI-assisted communication to real end-users.',
    ],
    metrics: [
      { label: 'P99 latency', value: '<50ms' },
      { label: 'Centers', value: '70+' },
      { label: 'GPU', value: 'H100' },
    ],
    category: 'experience',
  },
  {
    id: 'vyomchara',
    rank: 2,
    title: 'VyomChara',
    subtitle: 'AI Developer Intern · ASL 3D Avatar Interaction Layer',
    meta: '16 Jul 2025 – 31 Oct 2025',
    maturity: 'Production',
    match: 96,
    image:
      'https://images.unsplash.com/photo-1531951634065-9b1c1c9d8a1f?auto=format&fit=crop&w=1200&q=80',
    logo: '/imagesss/1729878470252.jpg',
    accent: '#7c3aed',
    tags: ['Unreal Engine', 'JavaScript', 'Node.js', 'Accessibility'],
    summary:
      'Built a real-time text-to-American-Sign-Language avatar that opens communication for deaf and speech-impaired users.',
    bullets: [
      'Built a real-time text-to-ASL system (~0.7s latency) with modular Node.js middleware for sign-animation sequencing in Unreal Engine.',
      'Delivered communication access for deaf and speech-impaired users, expanding the product’s accessibility reach to a previously underserved population.',
    ],
    metrics: [
      { label: 'Latency', value: '~0.7s' },
      { label: 'Engine', value: 'Unreal' },
      { label: 'Impact', value: 'a11y' },
    ],
    category: 'experience',
  },
];

/* ─────────────────────────── PROJECTS ───────────────────────────── */
export const projects: CardItem[] = [
  {
    id: 'phoenix',
    rank: 1,
    title: 'Phoenix — Self-Healing Kubernetes Platform',
    subtitle: 'Autonomous distributed control plane that recovers itself',
    meta: 'Go · AWS EKS · GitOps',
    maturity: 'Systems',
    match: 99,
    image:
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80',
    accent: '#06b6d4',
    tags: ['Go', 'Kubernetes', 'Terraform', 'Prometheus', 'OpenTelemetry', 'ArgoCD', 'AWS EKS', 'Spark', 'AWS Bedrock'],
    summary:
      'Custom Go operators on EKS that detect anomalies and self-heal CrashLoops, memory leaks, and latency spikes — with AI root-cause analysis via AWS Bedrock.',
    bullets: [
      'Built custom Go operators on EKS coordinating distributed control loops with concurrent reconcilers and sliding-window anomaly detection — autonomously recovers from CrashLoops (45s), memory leaks, and latency spikes (42s under 6× surge) via rollback, pod restart, or predictive scale-up; manages distributed Spark workloads as native K8s resources via the Spark Operator.',
      'Provisioned GitOps infrastructure (Terraform + ArgoCD) with VPC networking, Security Groups, and K8s network policies; full observability via Prometheus + OTEL + Loki; chaos-validated with Litmus; AWS Bedrock integration for AI-powered root-cause analysis on anomaly events.',
    ],
    metrics: [
      { label: 'CrashLoop recovery', value: '45s' },
      { label: 'Latency recovery', value: '42s @6×' },
      { label: 'Stack', value: 'GitOps' },
    ],
    github: 'https://github.com/eshan-159/Phoenix_Self_Healing_Kubernetes',
    category: 'project',
  },
  {
    id: 'beast',
    rank: 2,
    title: 'BEAST — Latent-Space Anomaly Detection',
    subtitle: '4-modality VAE that catches account takeover before it happens',
    meta: 'PyTorch · VAE · TPU',
    maturity: 'Research',
    match: 97,
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    accent: '#22c55e',
    tags: ['Python', 'PyTorch', 'VAE', 'Transformer Encoders', 'TPU', 'Anomaly Detection'],
    summary:
      'A four-modality variational autoencoder fusing device, geo, temporal, and network signals to detect credential stuffing, impossible travel, and bot attacks.',
    bullets: [
      'Trained a 4-modality VAE (device, geo, temporal, network) on TPU (xla:0) across 300K sessions and 3K users, fusing signals via 5-way cross-modal attention to detect credential stuffing, impossible travel, and bot attacks — composite AUROC 0.930, Mahalanobis AUROC 0.997.',
      'Designed the network modality (request rate, VPN flag, ASN entropy, TLS version) as the sole signal for bot-attack detection; calibrated alert thresholds via EVT/GEV fitting on normal-session score tails, eliminating arbitrary cutoffs.',
    ],
    metrics: [
      { label: 'AUROC', value: '0.930' },
      { label: 'Mahalanobis', value: '0.997' },
      { label: 'Scale', value: '300K sessions' },
    ],
    github: 'https://github.com/eshan-159/BEAST',
    category: 'project',
  },
  {
    id: 'novagemm',
    rank: 3,
    title: 'NovaGEMM — CUDA Matrix-Multiply Engine',
    subtitle: 'Hand-tuned GEMM reaching near-cuBLAS throughput',
    meta: 'CUDA · C++',
    maturity: 'Systems',
    match: 95,
    image:
      'https://images.unsplash.com/photo-1591238372338-22d30c883a86?auto=format&fit=crop&w=1200&q=80',
    accent: '#f59e0b',
    tags: ['CUDA', 'C++', 'GPU Computing', 'Performance'],
    summary:
      'A from-scratch CUDA GEMM kernel optimized through tiling, shared memory, and warp-level tuning to within striking distance of cuBLAS.',
    bullets: [
      'Optimized a CUDA GEMM engine to near-cuBLAS performance (1465+ GFLOPS), achieving a 180× speedup over a CPU baseline through tiling, shared-memory blocking, and warp-level micro-optimization.',
    ],
    metrics: [
      { label: 'Throughput', value: '1465+ GFLOPS' },
      { label: 'Speedup', value: '180× CPU' },
      { label: 'Target', value: '~cuBLAS' },
    ],
    github: 'https://github.com/eshan-159/cuda-gemm-optimization',
    category: 'project',
  },
  {
    id: 'oauth',
    rank: 4,
    title: 'Secure OAuth Identity & SSO Server',
    subtitle: 'High-throughput auth with stateless JWT and social login',
    meta: 'Python · PostgreSQL · OAuth 2.0',
    maturity: 'Systems',
    match: 93,
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    accent: '#3b82f6',
    tags: ['Python', 'PostgreSQL', 'OAuth 2.0', 'SSO', 'JWT', 'Concurrency'],
    summary:
      'A production-grade OAuth 2.0 + SSO server (Google & GitHub) engineered for high concurrent throughput and sub-5ms token validation.',
    bullets: [
      'Architected a production OAuth 2.0 + SSO server (Google & GitHub) on normalized PostgreSQL; sustains ~1K–2.5K reads/sec, ~10–15ms latency, and ~500 writes/sec under concurrent multi-threaded load.',
      'Implemented stateless JWT auth at ~3K–5K req/sec (<5ms latency); optimized OAuth callbacks to 150–300ms via async processing, rate limiting, and structured logging.',
    ],
    metrics: [
      { label: 'Reads', value: '1K–2.5K/s' },
      { label: 'JWT auth', value: '3K–5K/s' },
      { label: 'Token check', value: '<5ms' },
    ],
    github: 'https://github.com/eshan-159/OAuth-social-login',
    category: 'project',
  },
  {
    id: 'empth',
    rank: 5,
    title: 'Empth — Local AI OS Assistant (macOS)',
    subtitle: 'A voice-driven agent that actually operates your Mac',
    meta: 'Node.js · Electron · Groq',
    maturity: 'Agentic',
    match: 94,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
    accent: '#a855f7',
    tags: ['Node.js', 'Electron', 'Fastify', 'AppleScript', 'Groq', 'Ollama', 'Sarvam AI'],
    summary:
      'A tool-using LLM agent that completes end-to-end OS tasks from a single natural-language command, with a screen-aware multimodal voice pipeline.',
    bullets: [
      'Built a tool-based LLM agent with strict JSON action dispatch executing 15+ native OS and file tools (file I/O, PDF generation, WhatsApp automation, UI click/type via AppleScript) — enabling end-to-end task completion from a single natural-language command.',
      'Engineered a multimodal voice pipeline (mic → Sarvam STT → agent → TTS) with screen-aware vision queries via Llama-3.2-11B on Groq across a provider-agnostic backend (Ollama, OpenAI, Anthropic, Gemini) — ~1–2s latency.',
    ],
    metrics: [
      { label: 'Native tools', value: '15+' },
      { label: 'Latency', value: '~1–2s' },
      { label: 'Backends', value: '4 LLMs' },
    ],
    github: 'https://github.com/eshan-159/EMPTH',
    category: 'project',
  },
  {
    id: 'dazza',
    rank: 6,
    title: 'Dazza — Deepfake Image Detector',
    subtitle: 'Hybrid CNN authenticity checks with real-time inference',
    meta: 'PyTorch · ResNet-50 · FastAPI',
    maturity: 'Applied ML',
    match: 92,
    image:
      'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80',
    accent: '#ec4899',
    tags: ['PyTorch', 'ResNet-50', 'CBAM', 'FastAPI', 'React', 'Tailwind CSS'],
    summary:
      'A deepfake-detection system built on a hybrid CNN (ResNet-50 + CBAM) with scalable APIs and real-time cloud inference.',
    bullets: [
      'Built a deepfake-detection system using a hybrid CNN with ResNet-50 + CBAM, achieving ~92% validation accuracy.',
      'Engineered scalable APIs and cloud deployment for real-time inference (<2s latency).',
    ],
    metrics: [
      { label: 'Accuracy', value: '~92%' },
      { label: 'Inference', value: '<2s' },
      { label: 'Backbone', value: 'ResNet-50' },
    ],
    github: 'https://github.com/eshan-159/DeepFake_Detector',
    category: 'project',
  },
];

/* ─────────────────────────── RESEARCH ───────────────────────────── */
export const research: CardItem = {
  id: 'istate',
  title: 'I-State: A Self-Regulating Controller for Transformer LMs',
  subtitle: 'First-author paper · Under review at ICLR',
  meta: 'LLM Safety · Mechanistic Control',
  maturity: 'Research',
  match: 100,
  image:
    'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80',
  accent: '#e50914',
  tags: ['Transformers', 'LLM Safety', 'Interpretability', 'PyTorch', '1.1B & 8B'],
  summary:
    'A method that attaches a small, explicit identity to a frozen language model — a protected core of values, a mood that reacts to the conversation, and a memory of manipulation — gated so the model is provably unchanged at rest.',
  bullets: [
    'Attaches a typed internal state (protected values, mood, manipulation memory) to a frozen model via a gate that is exactly zero at rest — so a calm model is the base model, confirmed as a zero change in output logits.',
    'Because the gate is off on identical tokens, the intervention yields an exact, per-example causal counterfactual — measuring its own effect on one model in a single forward pass.',
    'Opening the gate drives manipulation-resistance up from exactly zero along a continuous inference-time dial; evaluated at 1.1B and 8B parameters with a statistically significant, selective, and stable effect — localized to a single adapter while base weights never change.',
  ],
  metrics: [
    { label: 'Scales', value: '1.1B & 8B' },
    { label: 'Base weights', value: 'frozen' },
    { label: 'Venue', value: 'ICLR (review)' },
  ],
  link: { label: 'Under review — abstract only', url: '' },
  category: 'research',
};

/* ─────────────────────────── SKILLS ─────────────────────────────── */
export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    icon: 'FaCode',
    skills: ['C++', 'Python', 'Go', 'JavaScript'],
  },
  {
    category: 'Systems & Concurrency',
    icon: 'FaMicrochip',
    skills: [
      'Distributed Systems',
      'Concurrency',
      'Multi-threading',
      'Parallel Computing',
      'CUDA',
      'GPU Kernels',
      'Memory Hierarchy',
      'Performance Optimization',
    ],
  },
  {
    category: 'Cloud & Infra',
    icon: 'FaCloud',
    skills: [
      'AWS EKS',
      'AWS Bedrock',
      'Kubernetes',
      'Terraform',
      'ArgoCD',
      'Apache Spark',
      'VPC',
      'Security Groups',
      'Linux',
    ],
  },
  {
    category: 'ML & AI',
    icon: 'FaBrain',
    skills: ['Deep Learning', 'Transformers', 'NLP', 'VAE', 'Quantization', 'Model Compression'],
  },
];

/* ────────────────────── PROBLEM SOLVING ─────────────────────────── */
export const problemSolving = [
  {
    label: 'Codeforces',
    value: 'Expert · 1692',
    url: 'https://codeforces.com/profile/I_hate_you_too',
  },
  {
    label: 'LeetCode',
    value: '450+ solved · 250+ medium · 70+ hard',
    url: 'https://leetcode.com/u/eshan159/',
  },
];

/* ────────────────────────── EDUCATION ───────────────────────────── */
export const education = {
  institute: 'Institute of Technical Education and Research, Siksha ‘O’ Anusandhan (SOA)',
  degree: 'B.Tech in Computer Science & Engineering',
  period: '2023 – 2027',
  location: 'Bhubaneswar, India',
  cgpa: '8.0 / 10',
};

/* ─────────────────────────── CONTACT ────────────────────────────── */
export const contact = {
  name: 'Eshan',
  title: 'AI & Distributed-Systems Engineer',
  email: 'eshan.worke@gmail.com',
  phone: '+91 70048 73658',
  location: 'Bhubaneswar, India',
  resumeUrl: '/Eshan_Resume.pdf',
  socials: {
    linkedin: 'https://www.linkedin.com/in/eshan-b83357293/',
    github: 'https://github.com/eshan-159',
    leetcode: 'https://leetcode.com/u/eshan159/',
    codeforces: 'https://codeforces.com/profile/I_hate_you_too',
  },
};

export const allWork: CardItem[] = [...experiences, ...projects, research];
