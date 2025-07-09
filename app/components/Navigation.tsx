import { useState } from "react";
import { motion } from "framer-motion";


const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isMobileMenuOpen ? "bg-background/80 backdrop-blur-md py-4" : "bg-transparent py-6"
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

          <div className="hidden md:flex gap-6">
            {["About", "Certificate", "Skills", "Projects", "Contact", ].map((item) => (
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

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-secondary/95 backdrop-blur-md rounded-lg p-4"
          >
            {["About", "Certificate", "Skills", "Projects", "Contact", ].map((item) => (
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
  );
};

export default Navigation;