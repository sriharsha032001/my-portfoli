import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-8 px-4 border-t ${
        darkMode
          ? 'bg-gray-900 border-gray-800'
          : 'bg-white border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            © {currentYear} Ravinuthala Ramachandra Sri Harsha. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/sriharsha032001"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                darkMode
                  ? 'text-gray-400 hover:text-accent'
                  : 'text-gray-600 hover:text-accent-dark'
              }`}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ravinuthala-ramachandra-sri-harsha-919822330/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                darkMode
                  ? 'text-gray-400 hover:text-accent'
                  : 'text-gray-600 hover:text-accent-dark'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ramachandrasriharsha1@gmail.com"
              className={`p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                darkMode
                  ? 'text-gray-400 hover:text-accent'
                  : 'text-gray-600 hover:text-accent-dark'
              }`}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://sriharsha032001.github.io/my-portfoli/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
                darkMode
                  ? 'text-gray-400 hover:text-accent'
                  : 'text-gray-600 hover:text-accent-dark'
              }`}
              aria-label="Portfolio"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

