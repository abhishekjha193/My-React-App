import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.p
          className="text-gray-400 dark:text-gray-500 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          © {new Date().getFullYear()} Abhishek Jha. All rights reserved.
        </motion.p>
        <motion.p
          className="text-gray-500 dark:text-gray-600 text-sm mt-2 transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Built with React & Tailwind CSS
        </motion.p>
      </div>
    </footer>
  );
}