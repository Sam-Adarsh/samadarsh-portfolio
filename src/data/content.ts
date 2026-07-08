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
  eyebrow: 'AI · Systems · Capital',
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
    slug: 'bite-wise',
    title: 'BiteWise',
    eyebrow: 'AI · Food Intelligence',
    year: '2026',
    role: 'Solo Builder',
    summary:
      'Food intelligence platform with two products — NutriOrder AI for nutrition-aware Swiggy ordering and SmartPantry AI for household pantry, recipes, and grocery planning — powered by Swiggy MCP with safety-gated checkout.',
    highlights: [
      'NutriOrder AI ranks meals across nutrition fit, cost, delivery time, taste, and availability with explainable per-factor breakdowns.',
      'SmartPantry AI tracks household stock, suggests cook-today recipes, auto-builds priority grocery lists, and previews Instamart carts.',
      'Next.js + FastAPI platform with Swiggy MCP, OAuth 2.1 PKCE, encrypted tokens, and explicit confirmation before any order mutation.',
    ],
    stack: ['Next.js', 'FastAPI', 'TypeScript', 'Swiggy MCP', 'SQLAlchemy', 'Tailwind'],
    links: {
      live: 'https://bite-wise-theta.vercel.app',
      github: 'https://github.com/samadarsh/BiteWise',
    },
    accent: 'from-zinc-700 via-zinc-800 to-zinc-900',
  },
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
    slug: 'fin-sight',
    title: 'FinSight',
    eyebrow: 'AI · Financial RAG',
    year: '2026',
    role: 'Solo Builder',
    summary:
      'Local-first RAG system for financial PDFs — annual reports, earnings transcripts, and SEBI filings — with natural-language Q&A grounded in page-level citations.',
    highlights: [
      'End-to-end ingestion pipeline: PyMuPDF parsing, LangChain chunking, BGE embeddings, and persistent ChromaDB storage.',
      'FastAPI backend with Streamlit UI — upload, ingest, and query across companies with Ollama or Gemini LLM providers.',
      'Citation-aware answers with inline `[filename p.N]` references and post-processing when the model omits source tags.',
    ],
    stack: ['FastAPI', 'ChromaDB', 'PyMuPDF', 'LangChain', 'Streamlit', 'Ollama'],
    links: { live: null, github: 'https://github.com/samadarsh/fin-sight' },
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
    eyebrow: 'Speech AI · Tamil ASR',
    year: '2026',
    role: 'Solo Builder',
    summary:
      'Tamil voice-note pipeline that transcribes speech with Whisper and romanizes output into readable Latin script — script transliteration, not translation.',
    highlights: [
      'Whisper-medium ASR (language=ta) with browser mic capture, file upload, and pydub chunking for long recordings.',
      'Custom grapheme-level Tamil→ASCII romanizer with no external transliteration API.',
      'Dockerized Gradio app deployed on Hugging Face Spaces with env-configurable models and pytest coverage.',
    ],
    stack: ['Whisper', 'Gradio', 'pydub', 'Docker', 'Python'],
    links: {
      live: 'https://huggingface.co/spaces/samadarsh/voicenote-ai-transliteration',
      github: 'https://github.com/samadarsh/VoiceNote-AI',
    },
    accent: 'from-zinc-700 via-zinc-800 to-zinc-900',
  },
  {
    slug: 'genai-email',
    title: 'GenAI Email Generator',
    eyebrow: 'Applied GenAI · Outreach',
    year: '2024',
    role: 'Solo Builder',
    summary:
      'Cold-email generator that scrapes job listings, extracts requirements with Llama 3, matches them against a portfolio, and drafts personalized outreach in seconds.',
    highlights: [
      'Two-stage LLM chain: structured job extraction from scraped pages, then email generation with matched portfolio links.',
      'LangChain WebBaseLoader ingests career-page content; Groq-backed Llama 3.3-70b for near-instant inference.',
      'Streamlit workflow from job URL to ready-to-send draft — cutting manual outreach research and rewriting time.',
    ],
    stack: ['Streamlit', 'LangChain', 'Groq', 'Llama 3', 'Python'],
    links: { live: null, github: 'https://github.com/samadarsh/GenAI-Email-Generator' },
    accent: 'from-zinc-700 via-zinc-800 to-zinc-900',
  },
];

export const writingMeta: WritingMeta = {
  pageName: 'Haugtun',
  pageUrl: 'https://www.linkedin.com/showcase/haugtun/',
  description:
    'A research page where I publish structured notes on Indian markets, investing fundamentals, and how capital actually behaves in the real world.',
};

export const journalEntries: JournalEntry[] = [
  {
    title: 'Why Indian investors wake up watching Wall Street',
    date: 'May 2026',
    tag: 'Global Macro',
    summary:
      'Dow falls overnight, Nifty opens red — not coincidence. The channels wiring US markets to Indian equities (FII flows, the dollar, the Fed) and the five signals worth watching before the open.',
    href: 'https://www.linkedin.com/posts/haugtun_usmarkets-indianstockmarket-fii-activity-7466462230557925376-hSwq',
  },
  {
    title: 'How inflation quietly erodes your wealth',
    date: 'May 2026',
    tag: 'Inflation',
    summary:
      'Your salary went up 8%, inflation was 6% — the real story behind purchasing power, and which asset classes actually outpace it.',
    href: 'https://www.linkedin.com/posts/haugtun_inflation-investing-stockmarket-activity-7464210462306373632-DAsW',
  },
  {
    title: 'Why market crashes are not random',
    date: 'May 2026',
    tag: 'Risk',
    summary:
      '2008, COVID, the dot-com bust — every major crash followed the same recipe of overvaluation, leverage, and a catalyst. A field guide to preparing instead of panicking.',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7458800595991257089',
  },
  {
    title: 'Three numbers every investor should read before buying a share',
    date: 'May 2026',
    tag: 'Valuation',
    summary:
      'EPS, P/E, and P/B. Used in isolation, any one of them can mislead. Used together, they form the spine of every valuation framework worth using.',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7455884994930987008',
  },
  {
    title: 'The four phases every market moves through',
    date: 'Apr 2026',
    tag: 'Cycles',
    summary:
      'Accumulation, markup, distribution, markdown. Most retail investors buy in distribution and sell in markdown — knowing where you are matters more than timing.',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7450961796301033472',
  },
  {
    title: 'What is liquidity and why it matters',
    date: 'Apr 2026',
    tag: 'Markets',
    summary:
      'Liquidity is not the same as volume. A breakdown of what it really measures and why it quietly shapes every execution and exit.',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7446819442400964610',
  },
  {
    title: 'The Rule of 72: the simplest way to double your money',
    date: 'Mar 2026',
    tag: 'Compounding',
    summary:
      'A mental-math shortcut for estimating how long it takes capital to double — and how to use it to compare returns intuitively.',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7442307088829095936',
  },
];

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/samadarsh14' },
  { label: 'GitHub', href: 'https://github.com/samadarsh' },
  { label: 'Email', href: 'mailto:samadarsh14@gmail.com' },
] as const;
