import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Layers,
  Palette,
  Server,
  FileCode,
  LayoutGrid,
  Database,
  Cloud,
  Send,
  Github,
} from "lucide-react";
import { technologies } from "@/lib/mockdata";

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

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

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
                className={`px-4 py-2 rounded-md transition-all duration-200 flex items-center space-x-2 whitespace-nowrap ${activeCategory === tech.category
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
                      {iconMap[skill.icon] || <span />}
                      </div>
                      <h4 className="text-white font-medium">{skill.name}</h4>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ),
        )}
      </div>
    </section>
  );
};

export default SkillsSection;