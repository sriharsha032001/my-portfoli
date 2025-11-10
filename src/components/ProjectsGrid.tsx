import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category: string;
}

interface ProjectsGridProps {
  darkMode: boolean;
}

const ProjectsGrid = ({ darkMode }: ProjectsGridProps) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const projects: Project[] = [
    {
      title: 'UberLite (System Design Focus)',
      description:
        'Architected a scalable ride-booking platform modeled after Uber, with modular microservice design, fault tolerance, horizontal scalability. Applied LLD patterns (Strategy, Decorator, State, Observer).',
      technologies: ['Spring Boot', 'Kafka', 'Redis'],
      github: 'https://github.com/sriharsha032001/uber-lite',
      category: 'Backend',
    },
    {
      title: 'AIrena',
      description:
        'Built AIrena, an AI agent automation hub integrating Next.js frontend and backend, enabling multi-step AI workflows. Used Cursor, ChatGPT, Gemini LLMs to accelerate development.',
      technologies: ['Spring Boot', 'JSON', 'ReactJS', 'VSCode'],
      demo: 'https://airena.in',
      category: 'Full Stack',
    },
    {
      title: 'Freelance',
      description:
        'Built scalable ReactJS web apps with Redux, SSR/CSR/SSG strategies and NodeJS APIs; improved page load speeds by 60% and maintained 90+ Core Web Vitals. Built static site with Razorpay integration for Ebook sales, ensuring secure payments and 99.9% uptime.',
      technologies: ['ReactJS', 'Node.JS', 'RazorPay'],
      demo: 'https://greekgod.online',
      category: 'Full Stack',
    },
  ];

  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className={`py-20 px-4 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-4xl font-bold mb-12 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Projects
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent ${
                activeFilter === category
                  ? 'bg-accent text-white'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-pressed={activeFilter === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group p-6 rounded-xl transition-all ${
                  darkMode
                    ? 'bg-gray-800 border border-gray-700 hover:border-accent'
                    : 'bg-gray-50 border border-gray-200 hover:border-accent shadow-sm hover:shadow-lg'
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-accent/20 text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded ${
                        darkMode
                          ? 'text-gray-300 hover:text-accent'
                          : 'text-gray-700 hover:text-accent-dark'
                      }`}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded ${
                        darkMode
                          ? 'text-gray-300 hover:text-accent'
                          : 'text-gray-700 hover:text-accent-dark'
                      }`}
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsGrid;

