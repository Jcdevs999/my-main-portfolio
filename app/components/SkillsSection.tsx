import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Server,
  FileCode,
  LayoutGrid,
  Database,
  Cloud,
  Send,
  Github,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/lib/mockdata";

export const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="h-5 w-5" />,
  palette: <Palette className="h-5 w-5" />,
  server: <Server className="h-5 w-5" />,
  "file-code": <FileCode className="h-5 w-5" />,
  "layout-grid": <LayoutGrid className="h-5 w-5" />,
  database: <Database className="h-5 w-5" />,
  cloud: <Cloud className="h-5 w-5" />,
  send: <Send className="h-5 w-5" />,
  github: <Github className="h-5 w-5" />,


};

const allSkills = skillCategories.flatMap((cat) =>
  cat.skills.map((skillObj) => ({
    skill: skillObj.name,
    icon: skillObj.icon,
    category: cat.category,
  })),
)

const duplicatedSkills = [...allSkills, ...allSkills]

const SkillsSection = () => {
  return (
   
     <section id="skills"  className="py-16 md:px-8">
      <div className="flex flex-col w-full mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Animated Skills Marquee */}
        <div className="relative mb-16">
          <motion.div
            className="flex w-full gap-4 py-4"
            animate={{
              x: [0, -80 * allSkills.length],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedSkills.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={`${item.skill}-${index}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex-shrink-0"
                >
                  <Badge
                    variant="secondary"
                    className="px-6 py-3 text-sm font-medium bg-white text-black dark:bg-slate-800 shadow-md hover:shadow-lg hover:text-white transition-shadow duration-200 border border-gray-200 dark:border-gray-700 flex items-center gap-2"
                  >
                    <IconComponent />
                    {item.skill}
                  </Badge>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Skills by Category */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.2,
              }}
              viewport={{ once: true }}
              className="bg-blue-500/10 dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-white dark:text-white mb-4 text-center">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skillObj, skillIndex) => {
                  const IconComponent = skillObj.icon
                  return (
                    <motion.div
                      key={skillObj.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="outline"
                        className="px-3 py-1 border-lg border-white text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer flex items-center gap-1"
                      >
                        <IconComponent />
                        {skillObj.name}
                      </Badge>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;