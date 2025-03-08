"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Code2,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  ChevronDown,
  Globe,
  Palette,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Code,
  Database,
  Cloud,
  PenToolIcon as Tool,
  Terminal,
  Send,
  GitBranch,
  FileCode,
  Layers,
  Cpu,
  LayoutGrid,
} from "lucide-react";
import { Poppins } from "next/font/google";


type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillCategory = {
  category: string;
  icon: React.ReactNode;
  skills: Skill[];
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const portfolioRef = useRef<HTMLDivElement>(null);

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };



  const projects = [
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

  const cert: Certificate[] = [
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

  const [shapes, setShapes] = useState<{ size: number; x: number; y: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    setShapes(Array.from({ length: 20 }).map(() => ({
      size: Math.random() * 20 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 2,
    })));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(Math.floor(cert.length / 2));
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? cert.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === cert.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const getSlideStyles = (index: number) => {
    const position = ((index - currentIndex + cert.length) % cert.length) - Math.floor(cert.length / 2);
    const baseScale = 0.85;
    const baseOpacity = 0.6;
    const baseZIndex = 0;

    if (position === 0) {
      return {
        scale: 1,
        opacity: 1,
        zIndex: 3,
        x: "0%",
        filter: "brightness(100%)",
      };
    } else if (position === 1 || position === -1) {
      return {
        scale: baseScale,
        opacity: baseOpacity,
        zIndex: 2,
        x: position * 70 + "%",
        filter: "brightness(60%)",
      };
    } else if (position === 2 || position === -2) {
      return {
        scale: baseScale * 0.85,
        opacity: baseOpacity * 0.5,
        zIndex: 1,
        x: position * 55 + "%",
        filter: "brightness(40%)",
      };
    } else {
      return {
        scale: 0,
        opacity: 0,
        zIndex: baseZIndex,
        x: position * 50 + "%",
        filter: "brightness(30%)",
      };
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrevious();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  const technologies: SkillCategory[] = [
    {
      category: "Frontend",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "HTML", icon: <Code className="h-5 w-5" /> },
        { name: "CSS", icon: <LayoutGrid className="h-5 w-5" /> },
        { name: "JavaScript", icon: <FileCode className="h-5 w-5" /> },
        { name: "ReactJS", icon: <Code className="h-5 w-5" /> },
        { name: "NextJS", icon: <Code className="h-5 w-5" /> },
        { name: "Tailwind CSS", icon: <Palette className="h-5 w-5" /> },
        { name: "TypeScript", icon: <Code className="h-5 w-5" /> },
        { name: "C#", icon: <Code className="h-5 w-5" /> },
      ],
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", icon: <Server className="h-5 w-5" /> },
        { name: "Express", icon: <Server className="h-5 w-5" /> },
        { name: "PHP", icon: <FileCode className="h-5 w-5" /> },
        { name: "SQL", icon: <Database className="h-5 w-5" /> },
        { name: "SQLite", icon: <Database className="h-5 w-5" /> },
        { name: "MongoDB", icon: <Database className="h-5 w-5" /> },
      ],
    },
    {
      category: "Tools",
      icon: <Tool className="h-6 w-6" />,
      skills: [
        { name: "VS Code", icon: <Code className="h-5 w-5" /> },
        { name: "Postman", icon: <Send className="h-5 w-5" /> },
        { name: "React DevTools", icon: <Palette className="h-5 w-5" /> },
        { name: "GitHub", icon: <Github className="h-5 w-5" /> },
        { name: "Vercel", icon: <Cloud className="h-5 w-5" /> },
        { name: "NPM", icon: <Server className="h-5 w-5" /> },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden ">
      <div className="fixed inset-0 -z-10">
        {shapes.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: shape.size,
              height: shape.size,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
            }}
            animate={{
              y: [0, 100, 0],
              x: [0, 50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav
        aria-label="Main Navigation"
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent"
            >
              JC
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-muted-foreground hover:text-blue-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Navigation */}
            <button
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              aria-label="Toggle mobile menu"
              className="md:hidden text-blue-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 bg-secondary/95 backdrop-blur-md rounded-lg p-4"
            >
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-muted-foreground hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
            >
              Jan Christian Garcia
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 mb-8"
            >
              Full-stack Developer / Freelancer
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row justify-center gap-4"
            >
              <a href="#about">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={scrollToPortfolio}
                >
                  View Portfolio
                </Button>
              </a>
              <a href="./Jan Christian Garcia -CV.pdf" download>
                {" "}
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-500 text-blue-400 hover:bg-blue-950/50"
                >
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-blue-400" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6 text-blue-100"
              >
                Professional Overview
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-lg text-blue-200/80 mb-6"
              >
                I am a MERN stack developer with one year of experience building
                dynamic, user-centric web applications. With expertise in
                Next.js, React.js, Node.js, and MongoDB, I specialize in
                crafting scalable and efficient solutions that blend
                functionality with seamless user experiences. My proficiency in
                TypeScript, Tailwind CSS, and SQL allows me to create clean,
                maintainable code while optimizing performance. Passionate about
                problem-solving and continuous learning, I thrive on turning
                complex challenges into elegant, innovative web solutions.
              </motion.p>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-blue-300"
                >
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <span>Web Development</span>
                </motion.div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 text-blue-300"
                >
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  <span>Solution Architecture</span>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow rounded-lg border border-blue-900/50">
                <motion.img
                  src="./aboutme.jpg"
                  alt="Profile"
                  height={50}
                  width={50}
                  className="w-full rounded-lg shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg"
                >
                  <p className="font-bold text-lg">1+</p>
                  <p className="text-sm">Year Experience</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Certificate Section */}
      <section className="py-32 overflow-hidden">
        <div className="flex flex-col w-full mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl mb-10 font-bold text-center text-blue-100"
          >
            Certificates
          </motion.h2>
          <div
            className="relative h-[500px] sm:h-[400px] xs:h-[350px] mb-10"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Product carousel"
          >
            <div className="absolute inset-x-10 -translate-y-1/4 sm:inset-x-4 xs:inset-x-2">
              <AnimatePresence>
                {cert.map((cert, index) => {
                  const styles = getSlideStyles(index);
                  return (
                    <motion.div
                      key={cert.id}
                      className="absolute top-10 left-1/2 w-full max-w-xl sm:max-w-lg xs:max-w-md"
                      initial={false}
                      animate={{
                        x: `calc(-50% + ${styles.x})`,
                        scale: styles.scale,
                        opacity: styles.opacity,
                        zIndex: styles.zIndex,
                        filter: styles.filter,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                      }}
                      onAnimationComplete={() => setIsAnimating(false)}
                    >
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          className="transition-transform duration-700 opacity-70 object-cover"
                          priority={index === currentIndex}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                          <div className="absolute bottom-0 left-0 right-0 p-8 text-center transform transition-transform duration-300">
                            <h3 className="text-xl font-bold text-white mb-4 tracking-wide">
                              {cert.title}
                            </h3>
                            <p className="text-gray-300 mb-6 max-w-md mx-auto text-sm leading-relaxed">
                              {cert.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
            <div className="absolute inset-y-0 flex justify-between items-center w-full px-10">
              <button
                onClick={handlePrevious}
                disabled={isAnimating}
                className="z-10 text-white/80 hover:text-blue-500 
          transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none 
          focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full p-2 sm:w-10 sm:h-10 xs:w-8 xs:h-8"
                aria-label="Previous product"
              >
                <ChevronLeft className="w-12 h-12 sm:w-10 sm:h-10 xs:w-8 xs:h-8" />
              </button>

              <button
                onClick={handleNext}
                disabled={isAnimating}
                className="z-10 text-white/80 hover:text-blue-500 
          transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none 
          focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full p-2 sm:w-10 sm:h-10 xs:w-8 xs:h-8"
                aria-label="Next product"
              >
                <ChevronRight className="w-12 h-12 sm:w-10 sm:h-10 xs:w-8 xs:h-8" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills"
        className="py-16 md:px-8">
        <div className="w-full flex flex-col mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-white">
              Technical Skills
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              My expertise spans across various technologies and tools, enabling me to build complete, scalable
              applications.
            </p>
          </div>

          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <div className="inline-flex p-1 bg-gray-800 rounded-lg">
              {technologies.map((tech) => (
                <button
                  key={tech.category}
                  onClick={() => setActiveCategory(tech.category)}
                  className={`px-4 py-2 rounded-md transition-all duration-200 flex items-center space-x-2 whitespace-nowrap ${
                    activeCategory === tech.category
                      ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span className="text-blue-400">{tech.icon}</span>
                  <span>{tech.category}</span>
                </button>
              ))}
            </div>
          </div>

          {technologies.map(
            (tech) =>
              tech.category === activeCategory && (
                <div key={tech.category} className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 mr-3">{tech.icon}</div>
                    <h3 className="text-2xl font-semibold text-white">{tech.category} Technologies</h3>
                  </div>

                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                  >
                    {tech.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={item}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 shadow-lg hover:shadow-blue-900/20 transition-all duration-300 border border-gray-700 flex flex-col items-center justify-center text-center hover:border-blue-500/50 group"
                      >
                        <div className="p-3 rounded-full bg-blue-600/10 text-blue-500 mb-3 group-hover:bg-blue-600/20 transition-all duration-300">
                          {skill.icon}
                        </div>
                        <h4 className="text-white font-medium">{skill.name}</h4>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ),
          )}

          <div className="mt-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">My Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 mb-3 w-fit">
                  <Code className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Clean Code</h4>
                <p className="text-gray-400 text-sm">
                  I write maintainable, well-documented code following best practices and design patterns.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 mb-3 w-fit">
                  <Layers className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-medium text-white mb-2">Scalable Architecture</h4>
                <p className="text-gray-400 text-sm">
                  I design systems that can grow and adapt to changing requirements and increased load.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 mb-3 w-fit">
                  <Palette className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-medium text-white mb-2">User-Centered Design</h4>
                <p className="text-gray-400 text-sm">
                  I focus on creating intuitive, accessible interfaces that provide excellent user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-100"
          >
            Featured Project
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg bg-background/40 backdrop-blur-sm border border-blue-900/30"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-background/95 backdrop-blur-sm p-6 rounded-lg border border-blue-900/30">
                    <h3 className="text-xl font-bold mb-2 text-blue-100">
                      {project.title}
                    </h3>
                    <p className="text-blue-200/80 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6 text-blue-100"
              >
                Let&apos;s Connect
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-blue-200/80"
              >
                Available for web development roles and consulting
                opportunities. Let’s collaborate to build scalable,
                high-performance web solutions and drive innovation together.
              </motion.p>
            </div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-background/40 backdrop-blur-sm p-8 rounded-lg border border-blue-900/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="mailto:john@example.com"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-blue-950/50 transition-colors"
                >
                  <Mail className="w-8 h-8 text-blue-400" />
                  <span className="font-medium text-blue-100">Email</span>
                  <span className="text-sm text-blue-300">
                    jan_garcia06@yahoo.com
                  </span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://github.com/Jcdevs999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-blue-950/50 transition-colors"
                >
                  <Github className="w-8 h-8 text-blue-400" />
                  <span className="font-medium text-blue-100">GitHub</span>
                  <span className="text-sm text-blue-300">@jcdevs999</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://www.linkedin.com/in/jan-christian-garcia-5b7525261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-blue-950/50 transition-colors"
                >
                  <Linkedin className="w-8 h-8 text-blue-400" />
                  <span className="font-medium text-blue-100">LinkedIn</span>
                  <span className="text-sm text-blue-300">
                    Jan Christian Garcia
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}