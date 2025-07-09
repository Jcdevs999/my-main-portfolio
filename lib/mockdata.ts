export const projects = [
  {
    title: "Personal Calculator",
    description: "A simple calculator application for personal use",
    image: "./calculator.png",
    tags: ["NextJS", "Tailwind CSS"],
  },
  {
    title: "Fowl of Fury",
    description: "A web and mobile responsive with multiple features",
    image: "./fof-project.png",
    tags: ["NextJS", "Tailwind CSS", "NodeJS", "Firebase"],
  },
  {
    title: "Coffee Design Enhancements",
    description: "Enhanced user experience for a coffee e-commerce platform",
    image: "./caffeine.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Unemployment Rate Analysis",
    description: "Data visualization tool for analyzing quezon unemployment rates",
    image: "./PESO.jpg",
    tags: ["NextJS", "Node.js", "MongoDB"],
  },
  {
    title: "Loreta's Cafe Management",
    description: "Enhanced some features for a coffee e-commerce platform",
    image: "./COFFEE.jpg",
    tags: ["C#", "SQLite", "WinUI"],
  },
  {
    title: "E-commerce personalization",
    description: "Personalized shopping experience for an e-commerce platform",
    image: "./ecomms.jpg",
    tags: ["NextJS", "NodeJS", "Tailwind CSS"],
  },
  {
    title: "Pet-care Management",
    description: "Pet-care management system for a pet-care business",
    image: "./pet-care.jpg",
    tags: ["NextJS", "NodeJS", "Tailwind CSS"],
  },
  {
    title: "Coron Palawan Overview",
    description: "Web application for tourism in Coron Palawan",
    image: "./Coron.jpg",
    tags: ["NextJS", "NodeJS", "Tailwind CSS"],
  },
];

interface Certificate {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const cert: Certificate[] = [
  {
    id: 1,
    title: "JavaScript Fundamentals Course",
    description:
      "Learn JavaScript from scratch and become an advanced developer",
    image: "./JavaScript Fundamental Certificate.jpg",
  },
  {
    id: 2,
    title: "JavaScript and CSS Course",
    description:
      "JavaScript for Beginners: Learn JavaScript and Supercharge Your Web Design!",
    image: "./Java and css certificate.jpg",
  },
  {
    id: 3,
    title: "Big media PH Internship Graphic Designer",
    description: "Internship Certificate",
    image: "./CERTIFICATE-BIGMEDIAPH-INTERNSHIP-GRAPHICDESIGNER.jpg",
  },
  {
    id: 4,
    title: "JCBA Fullstack Web Developer",
    description: "Internship Certificate",
    image: "./JCBA-CERTIFICATES-WITH-SIGNATURE_page-0011.jpg",
  },
  {
    id: 5,
    title: "Web Development Training (PHP, JavaScript)",
    description: "Internship Certificate",
    image: "./JCBA-CERTIFICATES-WITH-SIGNATURE_page-0012.jpg",
  },
];

type Skill = {
  name: string;
  icon: string;
};

type SkillCategory = {
  category: string;
  icon?: string;
  skills: Skill[];
};

export const technologies: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML, CSS and JavaScript", icon: "layout-grid" },
      { name: "ReactJS", icon: "code" },
      { name: "NextJS", icon: "code" },
      { name: "Tailwind CSS", icon: "palette" },
      { name: "TypeScript", icon: "code" },
      { name: "C#", icon: "code" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "server" },
      { name: "Express", icon: "server" },
      { name: "PHP", icon: "file-code" },
      { name: "SQL", icon: "database" },
      { name: "SQLite", icon: "database" },
      { name: "MongoDB", icon: "database" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", icon: "code" },
      { name: "Postman", icon: "send" },
      { name: "React DevTools", icon: "palette" },
      { name: "GitHub", icon: "github" },
      { name: "Vercel", icon: "cloud" },
      { name: "NPM", icon: "server" },
    ],
  },
];
