import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
  setIsMenuOpen(false); 

  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 90, 
      behavior: "smooth",
    });
  }, 300); 
};


  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="cursor-pointer"
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-blue-600 dark:text-blue-400">Portfolio</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {['about', 'skills', 'projects', 'contact'].map((section, index) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {section}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
          
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-5 h-5 text-yellow-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-gray-700" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-500" />
            )}
          </motion.button>
          
          <motion.button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4 flex flex-col gap-4 transition-colors duration-300"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {['about', 'skills', 'projects', 'contact'].map((section, index) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left capitalize"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                {section}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}