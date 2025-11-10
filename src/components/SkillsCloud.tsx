import { motion } from 'framer-motion';

interface SkillsCloudProps {
  darkMode: boolean;
}

const SkillsCloud = ({ darkMode }: SkillsCloudProps) => {
  const skills = {
    'Core Concepts': [
      'Data Structures & Algorithms',
      'OOP',
      'System Design',
      'HLD',
      'LLD',
      'Microservices',
    ],
    Languages: ['C', 'Java', 'JavaScript'],
    Databases: ['MySQL', 'PostgreSQL', 'Supabase'],
    Frameworks: ['Spring Boot', 'ReactJS'],
    Tools: [
      'Jenkins',
      'Terraform',
      'Git',
      'AWS',
      'RESTful Web Services',
      'JUnit',
      'Selenium',
      'Swagger',
      'Docker',
      'Kubernetes',
      'n8n',
    ],
    'Deployments / Agents': [
      'Vercel',
      'GitHub Pages',
      'GoDaddy',
      'AWS',
      'N8n',
      'Gemini gem',
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="skills"
      className={`py-20 px-4 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
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
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className={`p-6 rounded-xl ${
                darkMode
                  ? 'bg-gray-900 border border-gray-700'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              <h3
                className={`text-lg font-bold mb-4 ${
                  darkMode ? 'text-accent' : 'text-accent-dark'
                }`}
              >
                {category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 text-sm rounded-full font-medium transition-colors ${
                      darkMode
                        ? 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-accent'
                        : 'bg-gray-100 text-gray-700 border border-gray-300 hover:border-accent'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCloud;

