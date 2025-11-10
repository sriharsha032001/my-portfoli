import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Building2 } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

interface ExperienceTimelineProps {
  darkMode: boolean;
}

const ExperienceTimeline = ({ darkMode }: ExperienceTimelineProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences: ExperienceItem[] = [
    {
      title: 'Software Engineer - 1',
      company: 'Code Vyasa, Client: Groww',
      location: 'Bengaluru',
      period: 'July 2025 - Present',
      description: '',
      achievements: [
        'Revamped allocation module by separating commodities from the legacy system, implementing 20+ new computational formulas, and restructuring 10+ database tables, improving data integrity and allocation accuracy by 25%.',
        'Integrated Kafka-based event streaming for real-time payment status updates and asynchronous fund flow processing, improving payment reliability and reducing latency by 35%.',
        'Analyzed and improved payment architecture, resolving 15+ backlog issues and improving end-to-end payment flow visibility by 30%.',
        'Delivered 5+ SOSS enhancements and fixed compliance gaps in UPI processing, ensuring 100% adherence to regulatory standards and smoother payment settlements.',
      ],
    },
    {
      title: 'Programmer Analyst',
      company: 'Cognizant Technology Solutions, Client: Wells Fargo',
      location: 'Hyderabad',
      period: 'April 2024 – OCT 2024',
      description: '',
      achievements: [
        'Developed an internal audio management tool for compliance teams to retrieve and analyze call recordings from AWS S3 buckets.',
        'Designed backend logic to fetch, map, and merge audio file metadata with customer and transaction data via Spring Boot microservices.',
        'Built lightweight React components for the admin dashboard to visualize customer transaction data.',
      ],
    },
    {
      title: 'Programmer Analyst',
      company: 'Cognizant Technology Solutions, Client: PayPal',
      location: 'Hyderabad',
      period: 'Jul 2022 – March 2024',
      description: '',
      achievements: [
        'Optimized Spring Boot microservices for INR and multi-currency payment flows, improving transaction accuracy and settlement tracking by 30%.',
        'Implemented API Gateway routing and pooling mechanisms to monitor real-time payment confirmations, enhancing system reliability and reducing reconciliation delays by 25%.',
        'Documented and integrated RESTful APIs using Swagger, accelerating backend onboarding and service discoverability.',
      ],
    },
    {
      title: 'Programmer Analyst Intern',
      company: 'Cognizant Technology Solutions',
      location: 'Hyderabad',
      period: 'Jan 2022 – Jun 2022',
      description: '',
      achievements: [
        'Completed full stack Java development training (Core Java, Spring Boot microservices, ReactJS, SQL).',
        'Deployed integrated React–Spring Boot applications with secure REST APIs (JWT) and Redux state management.',
      ],
    },
  ];

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
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
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div
            className={`absolute left-8 top-0 bottom-0 w-0.5 ${
              darkMode ? 'bg-gray-700' : 'bg-gray-300'
            }`}
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                    darkMode
                      ? 'bg-gray-800 border-accent'
                      : 'bg-gray-50 border-accent'
                  }`}
                  aria-hidden="true"
                />

                {/* Content Card */}
                <button
                  onClick={() => toggleExpanded(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-accent ${
                    darkMode
                      ? 'bg-gray-900 hover:bg-gray-800 border border-gray-700'
                      : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-sm'
                  } ${expandedIndex === index ? 'shadow-lg' : ''}`}
                  aria-expanded={expandedIndex === index}
                  aria-controls={`exp-content-${index}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mb-2">
                        <span
                          className={`flex items-center gap-1 text-sm ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          <Building2 size={16} />
                          {exp.company}
                        </span>
                        <span
                          className={`flex items-center gap-1 text-sm ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                      </div>
                      <p
                        className={`text-sm font-medium ${
                          darkMode ? 'text-accent' : 'text-accent-dark'
                        }`}
                      >
                        {exp.period}
                      </p>
                    </div>
                    <ChevronDown
                      size={24}
                      className={`transition-transform ${
                        expandedIndex === index ? 'rotate-180' : ''
                      } ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        id={`exp-content-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-4"
                      >
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className={`flex items-start gap-3 ${
                                darkMode ? 'text-gray-300' : 'text-gray-700'
                              }`}
                            >
                              <span
                                className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                  darkMode ? 'bg-accent' : 'bg-accent-dark'
                                }`}
                                aria-hidden="true"
                              />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;

