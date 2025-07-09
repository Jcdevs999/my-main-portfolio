import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cert } from "@/lib/mockdata";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const CertificateSection = () => {
  const getSlideStyles = (index: number, currentIndex: number) => {
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      handlePrevious();
    } else if (event.key === "ArrowRight") {
      handleNext();
    }
  };

  return (
    <section id="certificate" className="py-32 overflow-hidden">
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
                     const styles = getSlideStyles(index, currentIndex);
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
  );
};

export default CertificateSection;