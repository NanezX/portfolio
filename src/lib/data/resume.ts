// ─── Types ──────────────────────────────────────────────────────────────────
//
// To add a new experience entry, just push an object into the `experiences`
// array below. Each field is documented in the interface.
//
// Dates use "MMM YYYY" format (e.g. "Jan 2023"). Use "Present" for endDate
// if you're still working there.
// ────────────────────────────────────────────────────────────────────────────

export type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Freelance"
  | "Internship";

export interface Experience {
  /** Company or organization name */
  company: string;
  /** Optional URL to the company website */
  companyUrl?: string;
  /** Your job title */
  role: string;
  /** Employment type badge shown next to the role */
  type: EmploymentType;
  /** City, country, or "Remote" */
  location: string;
  /** Format: "MMM YYYY" – e.g. "Jan 2023" */
  startDate: string;
  /** Format: "MMM YYYY" or the literal "Present" */
  endDate: string | "Present";
  /** One-liner summarizing the role (shown as subtitle) */
  summary: string;
  /** Bullet-point achievements — each string becomes one bullet */
  achievements: string[];
  /** Technologies / tools used in this role */
  technologies: string[];
}

export interface Education {
  school: string;
  schoolUrl?: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements?: string[];
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Design" | "Other";
}

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Compute a human-readable duration string from two date strings.
 * Accepts "MMM YYYY" or just "YYYY". "Present" maps to today.
 */
export function formatDuration(start: string, end: string): string {
  const parseDate = (d: string): Date => {
    if (d === "Present") return new Date();
    return new Date(d);
  };

  const s = parseDate(start);
  const e = parseDate(end);
  let months =
    (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  if (months < 1) months = 1;

  const years = Math.floor(months / 12);
  const rem = months % 12;

  if (years > 0 && rem > 0) return `${years} yr ${rem} mo`;
  if (years > 0) return `${years} yr`;
  return `${rem} mo`;
}

// ─── Data ───────────────────────────────────────────────────────────────────
//
//   ➜  ADD NEW EXPERIENCE HERE
//      Copy one block and fill in your details. The array is rendered
//      top-to-bottom, so put the most recent role first.
//

export const experiences: Experience[] = [
  {
    company: "Tech Corp",
    companyUrl: "https://example.com",
    role: "Senior Frontend Developer",
    type: "Full-time",
    location: "San Francisco, CA",
    startDate: "Mar 2023",
    endDate: "Present",
    summary:
      "Leading the frontend team in building scalable web applications used by 50k+ daily users.",
    achievements: [
      "Architected a component library adopted across 4 product teams, reducing UI inconsistencies by 60%.",
      "Migrated the main SPA from React to SvelteKit, cutting bundle size by 45% and improving LCP by 1.2 s.",
      "Introduced end-to-end testing with Playwright, achieving 92% coverage on critical user flows.",
      "Mentored 3 junior developers through code reviews and pair-programming sessions.",
    ],
    technologies: [
      "SvelteKit",
      "TypeScript",
      "TailwindCSS",
      "Playwright",
      "Storybook",
      "Figma",
    ],
  },
  {
    company: "Startup Inc",
    companyUrl: "https://example.com",
    role: "Full Stack Developer",
    type: "Full-time",
    location: "Remote",
    startDate: "Jun 2021",
    endDate: "Feb 2023",
    summary:
      "Built and maintained full-stack applications powering a B2B SaaS product from 0 → 10k users.",
    achievements: [
      "Designed and implemented a REST API serving 200+ endpoints with Node.js and Express.",
      "Built a real-time dashboard using WebSockets, reducing data latency from 30 s to under 1 s.",
      "Optimized PostgreSQL queries, improving p95 response times by 40%.",
      "Collaborated with design to implement a fully responsive UI system following WCAG 2.1 AA.",
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
  },
];

export const education: Education[] = [
  {
    school: "University of Technology",
    schoolUrl: "https://example.com",
    degree: "B.S. Computer Science",
    field: "Software Engineering & Artificial Intelligence",
    location: "Boston, MA",
    startDate: "Sep 2017",
    endDate: "Jun 2021",
    description:
      "Graduated with honors. Focused on Software Engineering and Artificial Intelligence.",
    achievements: [
      "Dean's list 6 of 8 semesters.",
      "Capstone: Built an AI-powered code review assistant using NLP techniques.",
    ],
  },
];

// TODO: Allow to render skill categories with icons or colors.
export const skills: Skill[] = [
  { name: "SvelteKit", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "HTML / CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Redis", category: "Backend" },
  { name: "REST / GraphQL", category: "Backend" },
  { name: "Docker", category: "Tools" },
  { name: "Git", category: "Tools" },
  { name: "CI / CD", category: "Tools" },
  { name: "Linux", category: "Tools" },
  { name: "Figma", category: "Design" },
];
