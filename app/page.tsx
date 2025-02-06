"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  Briefcase,
  User,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
  Brain,
  Cpu,
  Globe,
  Palette,
  Server,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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

  const skills = [
    { name: "HTML", icon: Globe, level: 80 },
    { name: "NodeJS", icon: Server, level: 85 },
    { name: "ReactJS", icon: Globe, level: 85 },
    { name: "Express", icon: Server, level: 80 },
    { name: "CSS", icon: Globe, level: 80 },
    { name: "JavaScript", icon: Globe, level: 85 },
    { name: "Tailwind CSS", icon: Palette, level: 90 },
    { name: "NextJS", icon: Globe, level: 80 },
    { name: "MongoDB", icon: Server, level: 90 },
    { name: "SQLite", icon: Server, level: 80 },
  ];

  const projects = [
    {
      title: "Coffee Design Enhancements",
      description: "Enhanced user experience for a coffee e-commerce platform",
      image: "./caffeine.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://coffee-ui-design-rmk9.vercel.app/",
    },
    {
      title: "Unemployment Rate Analysis",
      description:
        "Data visualization tool for analyzing quezon unemployment rates",
      image: "./PESO.jpg",
      tags: ["NextJS", "Node.js", "MongoDB"],
      link: "https://github.com/Jcdevs999/PESO-project",
    },
    {
      title: "Loreta's Cafe Management",
      description: "Enhanced some features for a coffee e-commerce platform",
      image: "./COFFEE.jpg",
      tags: ["C#", "SQLite", "WinUI"],
      link: "https://github.com/Jcdevs999/Coffeshop_project",
    },
    {
      title: "E-commerce personalization",
      description:
        "Personalized shopping experience for an e-commerce platform",
      image: "./ecomms.jpg",
      tags: ["NextJS", "NodeJS", "Tailwind CSS"],
      link: "https://ecommerce-design-ui-personal-hjws.vercel.app/",
    },
  ];

  const shapes = Array.from({ length: 20 }).map((_, i) => ({
    size: Math.random() * 20 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2,
  }));

  return (
    <div className="min-h-screen bg-background overflow-hidden">
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
              className="md:hidden text-blue-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
              <a href="./CV - Jan Christian Garcia.pdf" download>
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

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-100"
          >
            Technical Expertise
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background/40 backdrop-blur-sm p-6 rounded-lg border border-blue-900/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <skill.icon className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-blue-100">
                    {skill.name}
                  </h3>
                </div>
                <div className="space-y-2">
                  <Progress value={skill.level} className="h-2 bg-blue-950" />
                  <p className="text-sm text-blue-300 text-right">
                    {skill.level}%
                  </p>
                </div>
              </motion.div>
            ))}
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
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View demo/github <ExternalLink className="w-4 h-4" />
                    </a>
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
                  <span className="text-sm text-blue-300">Jan Christian Garcia</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}