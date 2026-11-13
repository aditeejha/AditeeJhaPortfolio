export const profile = {
  name: 'Aditee Jha',
  handle: 'aditeejha',
  katakana: 'アディティ・ジャー',
  roles: ['AI Engineering Enthusiast', 'Full-Stack Developer', 'Backend Engineer', 'Competitive Programmer', 'Writer on Medium'],
  tagline:
    'I build AI-powered products and the systems around them — from evidence-grounded agents to data-driven applications. I care about understanding how things work, not just making the demo run.',
  location: 'Dhanbad, Jharkhand, India',
  timezone: 'Asia/Kolkata',
  email: 'aditeejha18@gmail.com',
  resume: '/Aditee_Jha_Resume.pdf',
  availability: 'Open to AI / Software Engineering Internships',
  bio: [
    'Third-year Computer Science and Engineering student at BIT Mesra, interested in applied AI, language models, and full-stack systems. I enjoy taking a problem from first principles, designing the backend, and building a product people can actually use.',
    'My recent work includes Minimi, an evidence-grounded conversational agent with web search and date-aware memory, alongside AgriGuard and Spot2Solve — full-stack products that integrate AI into practical workflows. I care about reliable retrieval, clear system boundaries, and making AI outputs traceable.',
    'Beyond code, I write on Medium and take part in debates and technical presentations. I enjoy breaking down complex ideas and explaining how systems work.',
  ],
  education: {
    school: 'Birla Institute of Technology, Mesra',
    degree: 'B.Tech, Computer Science & Engineering',
    years: '2024 – 2028',
    cgpa: '8.27',
    location: 'Ranchi, Jharkhand',
    coursework: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Object-Oriented Programming', 'Computer Networks', 'Artificial Intelligence', 'Machine Learning', 'Natural Language Processing'],
  },
  quickFacts: [
    { label: 'FOCUS', value: 'AI + Full-Stack' },
    { label: 'GUILD', value: 'BIT Mesra · CSE ’28' },
    { label: 'BASE', value: 'Dhanbad, JH' },
    { label: 'CURRENT BUILD', value: 'LLM Agents + TypeScript' },
    { label: 'SIDE QUEST', value: 'Essays on Medium' },
    { label: 'STATUS', value: 'Open to internships' },
  ],
  socials: [
    { name: 'GitHub', handle: '@aditeejha', url: 'https://github.com/aditeejha', icon: 'github' },
    { name: 'LinkedIn', handle: 'aditeejha18', url: 'https://www.linkedin.com/in/aditeejha18', icon: 'linkedin' },
    { name: 'X / Twitter', handle: '@aditeejha_', url: 'https://x.com/aditeejha_', icon: 'x' },
    { name: 'Medium', handle: '@aditeejha', url: 'https://aditeejha.medium.com/', icon: 'medium' },
    { name: 'LeetCode', handle: 'aditeejha', url: 'https://leetcode.com/u/aditeejha/', icon: 'leetcode' },
    { name: 'CodeChef', handle: 'aditee_jha', url: 'https://www.codechef.com/users/aditee_jha', icon: 'codechef' },
    { name: 'Codolio', handle: 'aditeejha', url: 'https://codolio.com/profile/aditeejha', icon: 'codolio' },
  ],
} as const

export type SocialIcon = (typeof profile.socials)[number]['icon']

export const skillGroups = [
  {
    title: 'Languages',
    jp: 'げんご',
    items: ['Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Core',
    jp: 'コア',
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Design', 'ML Fundamentals', 'NLP'],
  },
  {
    title: 'Backend',
    jp: 'バックエンド',
    items: ['Node.js', 'Express.js', 'Hono', 'REST APIs', 'Tool Calling', 'Server-Sent Events', 'JWT Auth', 'RBAC'],
  },
  {
    title: 'Frontend & Databases',
    jp: 'フロント',
    items: ['React', 'Next.js', 'HTML5', 'CSS3', 'PostgreSQL', 'SQLite', 'MySQL', 'Prisma'],
  },
  {
    title: 'Tools & Services',
    jp: 'ツール',
    items: ['Git', 'GitHub', 'Postman', 'Docker', 'Gemini API', 'Tavily Search', 'ONNX Runtime', 'MobileNetV2'],
  },
] as const

export const playerStats = [
  { label: 'BACKEND', value: 92, tone: 'cyan' },
  { label: 'FRONTEND', value: 78, tone: 'pink' },
  { label: 'DSA', value: 84, tone: 'amber' },
  { label: 'WRITING', value: 88, tone: 'violet' },
] as const

export type Project = {
  slug: string
  title: string
  year: string
  kind: string
  tagline: string
  description: string
  highlights: string[]
  tech: string[]
  links: { label: string; url: string; kind: 'live' | 'code' }[]
  cover?: string
  accent: 'pink' | 'cyan' | 'amber' | 'violet'
  featured?: boolean
  badge?: string
}

export const projects: Project[] = [
  {
    slug: 'minimi',
    title: 'Minimi',
    year: '2026',
    kind: 'Evidence-grounded AI agent',
    tagline: 'A conversational agent that remembers what it knew — and when.',
    description:
      'A deployed chat agent that combines web research with date-aware conversational memory. It stores past conversations alongside the evidence used, so follow-up questions can retrieve earlier decisions and check what has changed.',
    highlights: [
      'Designed an agent workflow that plans each turn, retrieves relevant dated conversations, searches the web with Tavily, and generates evidence-backed answers with numbered citations.',
      'Implemented natural-language date resolution in the user’s time zone, SQLite full-text recall, and per-browser memory isolation so visitors do not share conversation history.',
      'Added streaming responses, Gemini model fallback, evidence handling, and automated tests for date resolution, recall, and prompt assembly; includes simulated time for multi-day evaluation.',
    ],
    tech: ['TypeScript', 'Node.js', 'Hono', 'Gemini', 'Tavily', 'SQLite', 'Web Search', 'Agent Workflow'],
    links: [
      { label: 'Live', url: 'https://minimi-chat-agent.onrender.com/', kind: 'live' },
      { label: 'Code', url: 'https://github.com/aditeejha/minimi-chat-agent', kind: 'code' },
    ],
    cover: '/projects/minimi.svg',
    accent: 'pink',
    featured: true,
    badge: 'AI AGENT',
  },
  {
    slug: 'agriguard',
    title: 'AgriGuard',
    year: '2026',
    kind: 'Smart-agriculture platform',
    tagline: 'Satellite, weather and soil data, turned into water-or-wait decisions.',
    description:
      'A full-stack smart agriculture platform that fuses satellite, weather, soil and crop-health data into per-field irrigation and fertilizer recommendations, with role-based workflows for farmers, agronomists and FPO administrators.',
    highlights: [
      'FAO-56 irrigation decision engine: crop water balance, rainfall forecasts, solar windows and soil moisture decide when to water, wait or skip, with Server-Sent Events for live updates and scheduled background analysis.',
      'Sentinel-2 NDVI crop monitoring and Open-Meteo weather/soil data; a server-side MobileNetV2/ONNX classifier covers 38 crop/disease classes, with Gemini explanations, Soil Health Card extraction and AI second opinions.',
      'IoT-ready ESP32 field-node design (soil, NPK, flow, energy, tank level, solar) with device auth, pump control and sensor health checks, plus a SHA-256 hash-chained sustainability ledger for water, energy, CO\u2082 and monetary impact.',
    ],
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Express 5', 'PostgreSQL', 'Prisma', 'ONNX', 'Sentinel-2', 'ESP32'],
    links: [
      { label: 'Live', url: 'https://agriguard-web.onrender.com/', kind: 'live' },
      { label: 'Code', url: 'https://github.com/aditeejha/AgriGuard', kind: 'code' },
    ],
    cover: '/projects/agriguard.svg',
    accent: 'amber',
    featured: true,
    badge: 'FEATURED',
  },
  {
    slug: 'spot2solve',
    title: 'Spot2Solve',
    year: '2026',
    kind: 'Civic-tech platform',
    tagline: 'Civic issues, tracked to the finish.',
    description:
      'A full-stack civic issue reporting and resolution platform with separate Citizen, Authority and Admin workflows, JWT-based RBAC, and an issue lifecycle that only closes when the citizen confirms the fix.',
    highlights: [
      'End-to-end lifecycle: duplicate detection, geolocation, department auto-routing, SLA tracking, escalation, citizen verification and append-only audit history.',
      'Gemini classifies photos into category and severity; Cloudinary stores evidence and voice notes; Leaflet and OpenStreetMap power maps, heatmaps and near-me discovery.',
      'Transactional status transitions, background SLA monitoring with automatic escalation, and notification fan-out via in-app alerts and email.',
    ],
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Gemini', 'Cloudinary', 'Leaflet'],
    links: [
      { label: 'Live', url: 'https://spot2solve-frontend.onrender.com/', kind: 'live' },
      { label: 'Code', url: 'https://github.com/aditeejha/Spot2Solve', kind: 'code' },
    ],
    cover: '/projects/spot2solve.webp',
    accent: 'cyan',
    featured: true,
    badge: 'FEATURED',
  },
  {
    slug: 'safedrop',
    title: 'SafeDrop',
    year: '2026',
    kind: 'E-waste platform on AWS',
    tagline: 'Wipe it, hand it over, and trace every step.',
    description:
      'An AWS-powered e-waste management platform combining device-specific data-wiping guides, safety-aware device assessment, recycler discovery and collection-partner workflows on a fully serverless stack.',
    highlights: [
      'Serverless architecture on AWS Amplify, API Gateway, Lambda, DynamoDB, Cognito, S3, Amazon Location Service and Rekognition for hosting, APIs, auth, location-based discovery and photo-assisted features.',
      'TrustChain traceability: single-use handover verification, controlled lifecycle transitions, idempotency controls and hash-linked event records for handover integrity and auditability.',
      'Partner handover, weighing, dispatch and facility-receipt workflows, with an impact dashboard that separates recorded activity from estimated environmental benefits.',
    ],
    tech: ['AWS Amplify', 'Lambda', 'API Gateway', 'DynamoDB', 'Cognito', 'S3', 'Rekognition', 'Location Service'],
    links: [
      { label: 'Live', url: 'https://main.d2ykddnngohyy3.amplifyapp.com/', kind: 'live' },
      { label: 'Code', url: 'https://github.com/aditeejha/safedrop-ewaste', kind: 'code' },
    ],
    cover: '/projects/safedrop.svg',
    accent: 'violet',
    featured: false,
    badge: 'AWS PROJECT',
  },
  {
    slug: 'medikiosk',
    title: 'MediKiosk',
    year: '2026',
    kind: 'Smart India Hackathon',
    tagline: 'A clinical intake kiosk that writes the doctor’s summary.',
    description:
      'Digital clinical intake kiosk that collects patient details, symptoms and previous lab reports, generates concise clinical summaries for doctors, and uses OCR to extract important medical values.',
    highlights: [
      'Qualified the SIH 2026 college round.',
      'Adaptive history interview, red-flag triage and bilingual physician summary.',
      'Prescription and lab-report digitization through OCR and vision models.',
    ],
    tech: ['AI / LLM', 'OCR', 'FastAPI', 'React'],
    links: [],
    accent: 'violet',
    badge: 'SIH 2026',
  },
]

export const sideQuests = [
  { name: 'Trackify', blurb: 'Fleet management: vehicle tracking, trip planning, maintenance.', url: 'https://github.com/aditeejha/Trackify' },
  { name: 'LeetMetrics', blurb: 'LeetCode stats visualiser.', url: 'https://github.com/aditeejha/LeetMetrics' },
  { name: 'auth-backend', blurb: 'Reusable JWT auth service.', url: 'https://github.com/aditeejha/auth-backend' },
  { name: 'FirstStepTech', blurb: 'Early frontend build, deployed on Vercel.', url: 'https://first-step-tech-ruddy.vercel.app' },
  { name: 'LeetCode-Questions', blurb: 'Java solutions, updated almost daily.', url: 'https://github.com/aditeejha/LeetCode-Questions' },
]

export const achievements = [
  {
    title: 'SIH 2026 · College Round Qualified',
    detail: 'Built MediKiosk, a clinical intake kiosk with OCR-driven lab report extraction and doctor-ready summaries.',
    year: '2026',
    icon: 'trophy',
  },
  {
    title: 'Winner · Technical Presentation',
    detail: 'College-level technical presentation on AI Applications in Drones.',
    year: '2025',
    icon: 'mic',
  },
  {
    title: 'Winner · Debate Competitions',
    detail: 'Multiple college-level debate wins; top finishes across inter-school and inter-college events.',
    year: '2024 – 2026',
    icon: 'swords',
  },
  {
    title: 'LeetCode 200-Day Streak',
    detail: 'Earned the 200 Days badge for 2026 by solving something every single day.',
    year: '2026',
    icon: 'flame',
  },
]

export const certifications = [
  { title: 'IBM Full-Stack JavaScript Developer Professional Certificate', issuer: 'Coursera · IBM' },
  { title: 'Developing Front-End Apps with React', issuer: 'Coursera · IBM' },
  { title: 'The Complete Git & GitHub Course 2025', issuer: 'Udemy' },
]

export const navItems = [
  { id: 'home', label: 'Home', jp: 'ホーム' },
  { id: 'about', label: 'About', jp: 'アバウト' },
  { id: 'skills', label: 'Skills', jp: 'スキル' },
  { id: 'projects', label: 'Projects', jp: 'プロジェクト' },
  { id: 'arena', label: 'Arena', jp: 'アリーナ' },
  { id: 'achievements', label: 'Trophies', jp: 'トロフィー' },
  { id: 'writing', label: 'Writing', jp: 'エッセイ' },
  { id: 'contact', label: 'Contact', jp: 'コンタクト' },
]
