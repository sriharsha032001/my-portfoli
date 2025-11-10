import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education = ({ darkMode }: EducationProps) => {
  return (
    <section
      id="education"
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
          className={`text-4xl font-bold mb-12 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`p-8 rounded-xl ${
            darkMode
              ? 'bg-gray-900 border border-gray-700'
              : 'bg-white border border-gray-200 shadow-sm'
          }`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`p-4 rounded-full ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}
            >
              <GraduationCap
                size={32}
                className={darkMode ? 'text-accent' : 'text-accent-dark'}
              />
            </div>
            <div className="flex-1">
              <h3
                className={`text-2xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Bachelor of Technology - Computer Science and Engineering
              </h3>
              <p
                className={`text-lg mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                K L University, Vaddeswaram
              </p>
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={`flex items-center gap-2 text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  <Calendar size={16} />
                  June 2018 - May 2022
                </span>
                <span
                  className={`text-sm font-semibold ${
                    darkMode ? 'text-accent' : 'text-accent-dark'
                  }`}
                >
                  CGPA: 8.0
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

