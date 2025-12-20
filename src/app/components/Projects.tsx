import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';

export function Projects() {
  const projects = [
    {
      title: "NotesApp – Multi-User Notes Application",
      description: "Full-stack notes app using Node.js, Express.js, EJS, and MongoDB with CRUD operations, RESTful APIs, and secure session-based authentication.",
      image: "/Assets/project/a.png",
      tags: ["Node.js", "Express.js", "MongoDB", "Bootstrap"],
      githubUrl: "https://github.com/abhishekjha193/notes-app",
      liveUrl: "https://github.com/abhishekjha193/notes-app"
    },
    {
      title: "RentNest – Property Listing Platform",
      description: "Property listing platform allowing users to register, log in, and search properties using MongoDB and EJS with secure authentication.",
      image: "/Assets/project/b.png",
      tags: ["MongoDB", "EJS", "Node.js", "React (Planned)"],
      githubUrl: "https://github.com/abhishekjha193",
      liveUrl: "https://github.com/abhishekjha193"
    },
    {
      title: "MovieVerse – Dynamic Movie Landing Page",
      description: "Responsive, cinematic landing page displaying trending movies with dynamic components, animations, and optimized performance.",
      image: "/Assets/project/c.png",
      tags: ["HTML", "CSS", "JavaScript", "Flexbox"],
      githubUrl: "https://github.com/abhishekjha193/-MovieVerse-Dynamic-Movie-Landing-Page",
      liveUrl: "https://github.com/abhishekjha193/-MovieVerse-Dynamic-Movie-Landing-Page"
    },
    {
      title: "ModeLuxe – Fashion Agency Website",
      description: "Mobile-first fashion website with responsive layouts, interactive sliders, form validation, and optimized performance.",
      image: "/Assets/project/d.png",
      tags: ["HTML", "CSS", "JavaScript", "UX Design"],
      githubUrl: "https://github.com/abhishekjha193/Fashion-Modeling-Agency-Website",
      liveUrl: "https://github.com/abhishekjha193/Fashion-Modeling-Agency-Website"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl text-center mb-12 text-gray-900 dark:text-white transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}

            >
              <motion.div
                className="aspect-video overflow-hidden relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0 }}
                />
              </motion.div>
              
              <div className="p-6">
                <motion.h3
                  className="text-xl mb-3 text-gray-900 dark:text-white transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {project.description}
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm transition-colors duration-300"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 + tagIndex * 0.05, type: "spring" }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.6 }}
                >
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.1, x: 5 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}