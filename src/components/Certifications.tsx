import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications = ({ darkMode }: CertificationsProps) => {
  const certifications = [
    {
      name: 'AWS Certified Developer - Associate (DVA-C02)',
      issuer: 'Amazon Web Services',
      year: '2024',
    },
  ];

  const achievements = [
    'Achieved 5,000+ users on the GreekGodSquad website by optimizing performance and ensuring high availability.',
    'Earned ₹2,00,000 revenue for clients by delivering high-quality web solutions.',
  ];

  return (
    <section
      id="certifications"
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
          Certifications & Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl ${
                darkMode
                  ? 'bg-gray-800 border border-gray-700'
                  : 'bg-gray-50 border border-gray-200 shadow-sm'
              }`}
            >
              <div className="flex items-start gap-4">
                <Award
                  size={32}
                  className={darkMode ? 'text-accent' : 'text-accent-dark'}
                />
                <div className="flex-1">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {cert.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <h3
            className={`text-2xl font-bold mb-6 text-center ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl ${
                  darkMode
                    ? 'bg-gray-800 border border-gray-700'
                    : 'bg-gray-50 border border-gray-200 shadow-sm'
                }`}
              >
                <p
                  className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

