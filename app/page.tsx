"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cert } from "@/lib/mockdata";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CertificateSection from "./components/CertificateSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Navigation from "./components/Navigation";


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

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
{/* All sections */}
     <Navigation/>
     <HeroSection/>
     <AboutSection/>
      <CertificateSection/>
     <SkillsSection/>
      <ProjectsSection/>
     <ContactSection/>
    </div>
  );
}