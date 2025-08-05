import {
  ReactIcon,
  NextJsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  NodeJsIcon,
  TailwindIcon,
  GitIcon,
  SupabaseIcon,
  VercelIcon,
  MongoDBIcon,
  AWSIcon,
  HTML5Icon,
  CSS3Icon,
  FirebaseIcon,
  ExpressJsIcon,
  MySQLIcon,
} from "@/app/components/tech-icons";
import { Server, Database, Layers, Terminal, Cloud, Palette } from "lucide-react"

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

export const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: NextJsIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "HTML5", icon: HTML5Icon },
      { name: "CSS3", icon: CSS3Icon },
      { name: "JavaScript", icon: JavaScriptIcon },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: NodeJsIcon },
      { name: "Express", icon: ExpressJsIcon },
      { name: "MongoDB", icon: MongoDBIcon },
      { name: "MySQL", icon: MySQLIcon },
      { name: "Supabase", icon: SupabaseIcon },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git Bash", icon: GitIcon },
      { name: "Github", icon: GitIcon },
      { name: "AWS", icon: AWSIcon },
      { name: "Vercel", icon: VercelIcon },
      { name: "Firebase", icon: FirebaseIcon },
    ],
  },
]

