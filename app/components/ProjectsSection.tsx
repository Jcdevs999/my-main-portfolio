import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/lib/mockdata";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const getSlideStyles = (index: any) => {
    const position = ((index - currentIndex + projects.length) % projects.length) - Math.floor(projects.length / 2);
    const baseScale = 0.85;
    const baseOpacity = 0.6;

    if (position === 0) {
      return {
        scale: 1,
        opacity: 1,
        zIndex: 3,
      };
    } else if (position === 1 || position === -1) {
      return {
        scale: baseScale,
        opacity: baseOpacity,
        zIndex: 2,
      };
    } else {
      return {
        scale: 0,
        opacity: 0,
        zIndex: 1,
      };
    }
  };

  return (
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
  );
};

export default ProjectsSection;