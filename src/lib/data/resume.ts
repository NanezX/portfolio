export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Design" | "Other";
}

export const experiences: Experience[] = [
  {
    company: "Tech Corp",
    role: "Senior Frontend Developer",
    startDate: "2023",
    endDate: "Present",
    description:
      "Leading the frontend team in building scalable web applications using SvelteKit and TypeScript.",
  },
  {
    company: "Startup Inc",
    role: "Full Stack Developer",
    startDate: "2021",
    endDate: "2023",
    description:
      "Developed and maintained full stack applications using React, Node.js, and PostgreSQL.",
  },
];

export const education: Education[] = [
  {
    school: "University of Technology",
    degree: "B.S. Computer Science",
    startDate: "2017",
    endDate: "2021",
    description: "Focus on Software Engineering and Artificial Intelligence.",
  },
];

export const skills: Skill[] = [
  { name: "SvelteKit", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Docker", category: "Tools" },
  { name: "Git", category: "Tools" },
  { name: "Figma", category: "Design" },
];
