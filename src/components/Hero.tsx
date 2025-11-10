import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { generateResumePDF } from '../utils/generateResumePDF';

interface HeroProps {
  darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const handleDownloadResume = () => {
    generateResumePDF();
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-4 py-20 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Intro + CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h1
            variants={itemVariants}
            className={`text-4xl md:text-6xl font-extrabold leading-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Ravinuthala{' '}
            <span className="text-accent">Ramachandra Sri Harsha</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-xl md:text-2xl ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Software Engineer — payments, microservices, and scalable web
            systems.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              View Projects
            </a>
            <button
              onClick={handleDownloadResume}
              className={`px-6 py-3 border-2 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                darkMode
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800 focus:ring-offset-gray-900'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-offset-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </span>
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 pt-4"
          >
            <a
              href="https://github.com/sriharsha032001"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ravinuthala-ramachandra-sri-harsha-919822330/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ramachandrasriharsha1@gmail.com"
              className={`p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Snapshot Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`hidden md:block p-8 rounded-2xl shadow-2xl ${
            darkMode
              ? 'bg-gray-800 border border-gray-700'
              : 'bg-gray-50 border border-gray-200'
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Quick Stats
          </h3>
          <div className="space-y-4">
            <div>
              <p
                className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Contact
              </p>
              <p
                className={`font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                <a
                  href="mailto:ramachandrasriharsha1@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  ramachandrasriharsha1@gmail.com
                </a>
              </p>
              <p
                className={`font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                8497906821
              </p>
            </div>
            <div>
              <p
                className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Top Skills
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Spring Boot', 'React', 'Microservices', 'AWS'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <p
                className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Experience
              </p>
              <p
                className={`font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                3+ Years
              </p>
            </div>
            <div>
              <a
                href="https://sriharsha032001.github.io/my-portfoli/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors"
              >
                Portfolio <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

