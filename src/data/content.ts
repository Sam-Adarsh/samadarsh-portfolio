export type ProjectLinks = {
  live: string | null;
  github: string | null;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  year: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: ProjectLinks;
  cover?: string;
  accent: string;
};

export type JournalEntry = {
  title: string;
  date: string;
  tag: string;
  summary: string;
  href: string;
};

export type WritingMeta = {
  pageName: string;
  pageUrl: string;
  description: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  kind?: string;
  summary: string;
  points: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  note: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const heroContent = {
  eyebrow: 'AI Engineer · Data Scientist · Markets',
  name: 'Adarsh S',
  tagline:
    'Building AI and data systems for real-world products and financial markets.',
  location: 'Chennai, India',
  available: true,
};

export const stats = [
  { value: '6+', label: 'Shipped AI & data projects' },
  { value: '8.23', label: 'B.Tech CGPA · AI / DS' },
  { value: '3+', label: 'Years across markets & data' },
  { value: '∞', label: 'Curiosity about systems' },
] as const;

export const aboutNarrative = [
  'I build and study systems shaped by data, behavior, and decision-making — spanning AI workflows, machine learning, and financial markets.',
  'Working close to both technology and live market environments has influenced the way I think: structured, analytical, and grounded in real-world constraints.',
  'Currently exploring applied GenAI, LLM workflows, and data-driven systems.',
];

export const experience: ExperienceItem[] = [
  {
    role: 'AI/ML Intern',
    company: 'BAE AI',
    period: 'May 2026 — Present',
    summary:
      'Building the BAExt Intent Engine — a deterministic pipeline that turns shopping queries into structured intent, ranked product blocks, and validated JSON across a 1,200-SKU catalog.',
    points: [
      'Implemented the full MERN stack (Node/Express, React, MongoDB, TypeScript) across query parsing, 11-signal ranking, answer generation, and end-to-end orchestration.',
      'Delivered production hardening with query caching, Docker Compose, and 250+ automated tests.',
      'Ran 300-query stress testing with output grounding and performance benchmarks.',
    ],
  },
  {
    role: 'Authorised Person',
    company: 'Angel One',
    period: 'Jan 2025 — Present',
    kind: 'Proprietorship',
    summary:
      'Independent proprietorship in equities and derivatives — a research-driven practice that sharpens the same analytical instincts I bring to AI and data systems.',
    points: [
      'Built a structured market research workflow rooted in data-driven decisions and risk awareness.',
      'Live exposure to time-sensitive data, execution, and portfolio monitoring under real conditions.',
      'A complementary practice that strengthens the analytical and operational depth I bring to AI work.',
    ],
  },
  {
    role: 'Associate Trader',
    company: 'Maxitome Management Services',
    period: 'May 2024 — Nov 2024',
    summary:
      'F&O trading workflows with rule-based execution, backtesting, and live API-driven order management.',
    points: [
      'Backtested strategies and tracked performance across varying market conditions.',
      'Handled live market data, API-based execution, and portfolio monitoring under pressure.',
      'Refined rule-based systems through structured iteration and measurable outcomes.',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Sona Comstar',
    period: 'Jan 2023 — Mar 2023',
    summary:
      'Built and refined ML models for analytical workflows with a focus on reliability and clean data pipelines.',
    points: [
      'Developed regression models for practical analytical use cases.',
      'Performed preprocessing, feature engineering, and model evaluation.',
      'Built workflows turning raw data into actionable, automation-ready outputs.',
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'M.Tech in Artificial Intelligence',
    school: 'SRM University',
    period: '2026 — 2028',
    note: 'Specializing in deep learning, generative AI, and applied AI systems.',
  },
  {
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    school: 'Easwari Engineering College',
    period: '2020 — 2024',
    note: 'Graduated with CGPA 8.23. Foundation in machine learning, AI, and data-driven problem solving.',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Core Stack',
    items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'Git', 'Streamlit'],
  },
  {
    title: 'Machine Learning',
    items: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Feature Engineering',
      'Model Evaluation',
      'NLP',
    ],
  },
  {
    title: 'Applied GenAI',
    items: [
      'LLM Workflows',
      'Prompt Engineering',
      'LangChain',
      'Embeddings',
      'Summarization',
    ],
  },
  {
    title: 'Markets & Analytics',
    items: ['F&O Workflows', 'Backtesting', 'Risk Awareness', 'Market Data Pipelines'],
  },
];

export const projects: Project[] = [
  {
    slug: 'oor-snacks',
    title: 'Oor Snacks',
    eyebrow: 'Product · D2C Storefront',
    year: '2025',
    role: 'Founder · Design & Full-Stack',
    summary:
      'Direct-to-consumer storefront for a Chennai heritage snack brand — brand identity, product pages, cart, checkout, and live orders from day one.',
    highlights: [
      'Cinematic scroll experience built with GSAP and Lenis for product storytelling.',
      'Supabase-backed order management with Row-Level Security and a live admin dashboard.',
      'End-to-end ownership: brand, UI, full-stack development, and production deployment.',
    ],
    stack: ['Vite', 'Supabase', 'GSAP', 'Lenis', 'Vanilla JS'],
    links: { live: 'https://oor-snacks.vercel.app', github: null },
    cover: 'projects/oor-snacks.webp',
    accent: 'from-zinc-700 via-zinc-800 to-zinc-900',
  },
  {
    slug: 'repomind',
    title: 'RepoMind',
    eyebrow: 'AI · Developer Tools',
    year: '2025',
    role: 'Solo Builder',
    summary:
      'Context-aware repository analysis that classifies project types and generates structured architectural insights using a multi-stage LLM workflow.',
    highlights: [
      'Multi-stage LLM pipeline with bias-control mechanisms for stable, structured outputs.',
      'Classifies repositories, summarizes architecture, and exports structured JSON.',
      'Streamlit interface with file-level analysis and configurable prompt scaffolding.',
    ],
    stack: ['Streamlit', 'LangChain', 'Groq', 'Python'],
    links: {
      live: 'https://repomind14.streamlit.app/',
      github: 'https://github.com/samadarsh/RepoMind',
    },
    accent: 'from-zinc-700 via-zinc-800 to-zinc-900',
  },
  {
    slug: 'voicenote-ai',
    title: 'VoiceNote AI',
    eyebrow: 'Applied GenAI',
    year: '2025',
    role: 'Solo Builder',
    summary:
      'Multilingual voice-note assistant using Whisper for transcription and Groq LLMs for intent extraction, summarization, and structured note saving.',
    highlights: [
      'Whisper-powered transcription with multilingual capture.',
      'LLM-driven intent extraction and summarization with structured JSON output.',
      'Streamlit interface for quick voice capture and review.',
    ],
    stack: ['Streamlit', 'Whisper', 'Groq', 'Python'],
    links: { live: null, github: 'https://github.com/samadarsh/VoiceNote-AI' },
    accent: 'from-zinc-700 via-zinc-800 to-zinc-900',
  },
  {
    slug: 'genai-email',
    title: 'GenAI Email Generator',
    eyebrow: 'Applied GenAI',
    year: '2024',
    role: 'Solo Builder',
    summary:
      'Generates context-aware email drafts from user prompts, combining structured prompt engineering with workflow automation.',
    highlights: [
      'Structured prompt engineering for consistent tone and clarity.',
      'Workflow automation around drafting, revision, and reuse.',
    ],
    stack: ['Streamlit', 'LangChain', 'Llama 3', 'Python'],
    links: { live: null, github: 'https://github.com/samadarsh/GenAI-Email-Generator' },
    accent: 'from-zinc-700 via-zinc-800 to-zinc-900',
  },
  {
    slug: 'ipo-analysis',
    title: 'IPO Performance Analysis',
    eyebrow: 'Market Analysis',
    year: '2024',
    role: 'Solo Researcher',
    summary:
      'Data analysis on Indian IPO performance using profitability measures and visual exploration to identify post-listing patterns.',
    highlights: [
      'Profitability and listing-pattern analysis on Indian IPO data.',
      'Visualizations surfacing post-listing behavioural trends.',
    ],
    stack: ['Pandas', 'Matplotlib', 'Finance Data', 'Python'],
    links: { live: null, github: 'https://github.com/samadarsh/IPO-Performance-Analysis' },
    accent: 'from-zinc-700 via-zinc-800 to-zinc-900',
  },
];

export const writingMeta: WritingMeta = {
  pageName: 'Haugtun',
  pageUrl: 'https://www.linkedin.com/company/haugtun/',
  description:
    'A research page where I publish structured notes on Indian markets, investing fundamentals, and how capital actually behaves in the real world.',
};

export const journalEntries: JournalEntry[] = [
  {
    title: 'How inflation quietly erodes your wealth',
    date: 'May 2026',
    tag: 'Inflation',
    summary:
      'Your salary went up 8%, inflation was 6% — the real story behind purchasing power, and which asset classes actually outpace it.',
    href: 'https://www.linkedin.com/posts/haugtun_inflation-investing-stockmarket-activity-7464210462306373632-DAsW',
  },
  {
    title: 'What is liquidity and why it matters',
    date: 'Apr 2026',
    tag: 'Markets',
    summary:
      'Liquidity is not the same as volume. A breakdown of what it really measures and why it quietly shapes every execution and exit.',
    href: 'https://www.linkedin.com/company/haugtun/',
  },
  {
    title: 'The Rule of 72: the simplest way to double your money',
    date: 'Mar 2026',
    tag: 'Compounding',
    summary:
      'A mental-math shortcut for estimating how long it takes capital to double — and how to use it to compare returns intuitively.',
    href: 'https://www.linkedin.com/company/haugtun/',
  },
  {
    title: 'Why many beginners lose money before they even understand markets',
    date: 'Mar 2026',
    tag: 'Fundamentals',
    summary:
      'The structural reasons new investors bleed capital — usually before they can articulate why the market moved against them.',
    href: 'https://www.linkedin.com/company/haugtun/',
  },
];

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/samadarsh14' },
  { label: 'GitHub', href: 'https://github.com/samadarsh' },
  { label: 'Email', href: 'mailto:samadarsh14@gmail.com' },
] as const;
