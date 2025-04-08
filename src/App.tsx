import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    { category: "Frontend", items: ["React", "Tailwind CSS", "HTML"] },
    { category: "Backend", items: ["Java", "SQL", "SpringBoot", "RestAPI"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Kubernetes", "Jenkins"] },
    { category: "Testing", items: ["Postman", "JIRA", "Selenium Web Driver", "Manual Testing", "Functional Testing"] }
  ];

  const experiences = [
    {
      company: "Cognizant Technology Solutions",
      role: "Programmer Analyst",
      period: "July 2022 - Oct 2024",
      description: "During my time at Cognizant, I was actively involved in developing and maintaining web applications primarily using Spring Boot for backend development and SQL for database operations..."
    },
    {
      company: "Cognizant Technology Solutions",
      role: "Intern - Contractor",
      period: "Jan 2022 - June 2022",
      description: "As a Full-Stack Developer Intern, I worked on building and enhancing web applications using Spring Boot for the backend and ReactJS for the frontend..."
    }
  ];

  const projects = [
    {
      name: "Expense Tracker",
      description: "Built a Expense Tracker App with React, SpringBoot and MongoDB",
      link: "https://github.com/sriharsha032001/my-portfoli"
    },
    {
      name: "PayPal Global Produced Services",
      description: "Developed APIs as an employee of Cognizant"
    }
  ];

  const certifications = [
    { name: "AWS Certified Developer Associate", issuer: "Amazon Web Services", year: "2024" },
    { name: "Natural Language Processing", issuer: "DeepLearning.ai", year: "2021" }
  ];

  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">

      {/* Fog Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="fog fog1"></div>
        <div className="fog fog2"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold">Ravinuthala Ramachandra Sri Harsha</span>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
              <a href="#experience" className="hover:text-gray-300 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
              <a href="#education" className="hover:text-gray-300 transition-colors">Education</a>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 hover:bg-gray-900 rounded-md">About</a>
              <a href="#experience" className="block px-3 py-2 hover:bg-gray-900 rounded-md">Experience</a>
              <a href="#skills" className="block px-3 py-2 hover:bg-gray-900 rounded-md">Skills</a>
              <a href="#projects" className="block px-3 py-2 hover:bg-gray-900 rounded-md">Projects</a>
              <a href="#education" className="block px-3 py-2 hover:bg-gray-900 rounded-md">Education</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hello, I'm <br />
              <span className="text-gray-400">Ravinuthala Ramachandra Sri Harsha</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Software Engineer passionate about creating impactful web experiences
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/sriharsha032001" className="p-2 hover:bg-gray-900 rounded-full transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ravinuthala-ramachandra-sri-harsha-919822330/" className="p-2 hover:bg-gray-900 rounded-full transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ramachandrasriharsha1@gmail.com" className="p-2 hover:bg-gray-900 rounded-full transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Profile"
              className="rounded-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            I'm a Software Engineer with over 2 years of experience in building web applications...
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-800 pl-8 relative">
                <div className="absolute w-4 h-4 bg-gray-800 rounded-full -left-[9px] top-0"></div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-gray-400 mb-2">{exp.company} • {exp.period}</p>
                <p className="text-gray-500">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <div key={index} className="bg-black p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">{skillSet.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-gray-800 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                {project.link && (
                  <a href={project.link} className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-black p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-gray-400">{cert.issuer} • {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Education</h2>
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-400">KL Deemed to be University • 2018 - 2022</p>
            <p className="text-gray-500 mt-4">
              Relevant coursework: Data Structures Algorithms, Web Development, Database Management
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Ravinuthala Ramachandra Sri Harsha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
