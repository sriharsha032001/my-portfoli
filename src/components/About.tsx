import { motion } from 'framer-motion';

interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
  return (
    <section
      id="about"
      className={`py-20 px-4 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-4xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-lg leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          I'm a Software Engineer with over 3 years of experience specializing
          in payments, microservices, and scalable web systems. I have a strong
          background in building robust backend services using Spring Boot and
          creating modern, responsive frontends with React. My expertise includes
          system design, microservices architecture, and cloud technologies like
          AWS. I'm passionate about writing clean, efficient code and solving
          complex technical challenges to deliver high-quality solutions that
          make a real impact.
        </motion.p>
      </div>
    </section>
  );
};

export default About;

