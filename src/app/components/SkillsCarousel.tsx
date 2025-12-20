import { Code, Palette, Layers, Rocket, Database, Globe, Box, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function SkillsCarousel() {
  const skills = [
    { Icon: Code, name: 'JavaScript' },
    { Icon: Globe, name: 'Node.js' },
    { Icon: Layers, name: 'React.js' },
    { Icon: Database, name: 'MongoDB' },
    { Icon: Box, name: 'Express.js' },
    { Icon: Palette, name: 'HTML/CSS' },
    { Icon: Rocket, name: 'REST APIs' },
    { Icon: Zap, name: 'Git/GitHub' },
  ];

  // Duplicate skills for seamless infinite loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="py-12 overflow-hidden">
      <motion.div
        className="flex gap-12"
        animate={{
          x: [0, -100 * skills.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {duplicatedSkills.map((skill, index) => {
          const Icon = skill.Icon;
          return (
            <motion.div
              key={index}
              className="flex-shrink-0 flex flex-col items-center justify-center w-24"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2 transition-colors duration-300">
                <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300 text-center transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
