import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl text-center mb-12 text-gray-900 dark:text-white transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
            className="relative aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 overflow-hidden border-4 border-indigo-500 shadow-xl" whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
          <img src="https://img.freepik.com/premium-photo/cartoon-man-sitting-desk-with-laptop-computer_988987-16076.jpg"alt=""className="absolute inset-0 w-full h-full object-contain"/>
           </motion.div>
        </motion.div>
          
          <div className="space-y-6">
            <motion.p
              className="text-gray-700 dark:text-gray-300 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I'm a Full Stack Developer skilled in JavaScript (ES6+), Node.js, Express.js, React.js, and MongoDB. 
              I have experience building and deploying responsive, scalable web applications with RESTful APIs, 
              authentication, and database integration.
            </motion.p>
            
            <motion.p
              className="text-gray-700 dark:text-gray-300 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              As a quick learner with strong debugging and problem-solving skills, I'm passionate about delivering 
              clean and efficient code. I'm currently pursuing my Bachelor of Engineering in Information Technology 
              at Shree L.R. Tiwari College of Engineering, Mumbai University.
            </motion.p>
            
            <motion.p
              className="text-gray-700 dark:text-gray-300 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I enjoy working on full-stack projects that challenge me to learn new technologies and improve my skills. 
              My focus is on creating user-friendly applications with robust backend systems and modern frontend experiences.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {["Problem-Solving", "Adaptability", "Collaboration"].map((tag, index) => (
                <motion.span
                  key={index}
                  className={`px-4 py-2 rounded-full ${
                    index === 0 ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300" :
                    index === 1 ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300" :
                    "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                  } transition-colors duration-300`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}