import { motion } from "framer-motion";
import { Code2, Briefcase, Smartphone, Server } from "lucide-react";

export default function AboutSection() {
  return (
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
             <p className="pb-8">I’m a freelance Full-Stack Web Developer with nearly two years of experience helping clients build responsive, efficient, and user-friendly web applications. I work across the full development stack using HTML, CSS3, JavaScript, TypeScript, React.js, Next.js, and Tailwind CSS for the front end, and Node.js, MongoDB, MySQL, and SQLite for the back end.</p>
              <p> I specialize in creating scalable, maintainable solutions that blend clean code with strong functionality and design. As a freelancer, I value clear communication, on-time delivery, and long-term client relationships. Im always eager to take on new challenges and bring ideas to life through practical and reliable web development.</p>
            </motion.p>
            <div className="grid grid-cols-3 gap-4">
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
                <Server className="w-5 h-5 text-blue-400" />
                <span>Backend Development</span>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 text-blue-300"
              >
                <Smartphone className="w-5 h-5 text-blue-400" />
                <span>Mobile Responsive</span>
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
  );
}