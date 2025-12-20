import { Code, Palette, Layers, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { SkillsCarousel } from './SkillsCarousel';

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["HTML", "CSS", "Bootstrap", "React.js", "JavaScript (ES6+)"]
    },
    {
      icon: Layers,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Session Auth", "JSON"]
    },
    {
      icon: Palette,
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Database Design", "CRUD Operations", "Data Modeling"]
    },
    {
      icon: Rocket,
      title: "Tools & Other",
      skills: ["Git/GitHub", "Vercel", "Render", "Java (Basic)", "SQL"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl text-center mb-8 text-gray-900 dark:text-white transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        {/* Infinite Carousel */}
        <SkillsCarousel />
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div
                  className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="mb-4 text-gray-900 dark:text-white transition-colors duration-300">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      • {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}