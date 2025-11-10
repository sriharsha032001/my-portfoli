// Resume data for PDF generation
export const resumeData = {
  name: 'Ravinuthala Ramachandra Sri Harsha',
  email: 'ramachandrasriharsha1@gmail.com',
  phone: '8497906821',
  website: 'https://sriharsha032001.github.io/my-portfoli/',
  linkedin: 'https://www.linkedin.com/in/ravinuthala-ramachandra-sri-harsha-919822330/',
  github: 'https://github.com/sriharsha032001',
  
  education: {
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    university: 'K L University, Vaddeswaram',
    cgpa: '8.0',
    period: 'June 2018 - May 2022',
  },
  
  experience: [
    {
      title: 'Software Engineer - 1',
      company: 'Code Vyasa, Client: Groww',
      location: 'Bengaluru',
      period: 'July 2025 - Present',
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
      achievements: [
        'Completed full stack Java development training (Core Java, Spring Boot microservices, ReactJS, SQL).',
        'Deployed integrated React–Spring Boot applications with secure REST APIs (JWT) and Redux state management.',
      ],
    },
  ],
  
  projects: [
    {
      title: 'UberLite (System Design Focus)',
      description: 'Architected a scalable ride-booking platform modeled after Uber, with modular microservice design, fault tolerance, horizontal scalability. Applied LLD patterns (Strategy, Decorator, State, Observer).',
      technologies: ['Spring Boot', 'Kafka', 'Redis'],
      github: 'https://github.com/sriharsha032001/uber-lite',
    },
    {
      title: 'AIrena',
      description: 'Built AIrena, an AI agent automation hub integrating Next.js frontend and backend, enabling multi-step AI workflows. Used Cursor, ChatGPT, Gemini LLMs to accelerate development.',
      technologies: ['Spring Boot', 'JSON', 'ReactJS', 'VSCode'],
      demo: 'https://airena.in',
    },
    {
      title: 'Freelance',
      description: 'Built scalable ReactJS web apps with Redux, SSR/CSR/SSG strategies and NodeJS APIs; improved page load speeds by 60% and maintained 90+ Core Web Vitals. Built static site with Razorpay integration for Ebook sales, ensuring secure payments and 99.9% uptime.',
      technologies: ['ReactJS', 'Node.JS', 'RazorPay'],
      demo: 'https://greekgod.online',
    },
  ],
  
  skills: {
    'Core Concepts': ['Data Structures & Algorithms', 'OOP', 'System Design', 'HLD', 'LLD', 'Microservices'],
    Languages: ['C', 'Java', 'JavaScript'],
    Databases: ['MySQL', 'PostgreSQL', 'Supabase'],
    Frameworks: ['Spring Boot', 'ReactJS'],
    Tools: ['Jenkins', 'Terraform', 'Git', 'AWS', 'RESTful Web Services', 'JUnit', 'Selenium', 'Swagger', 'Docker', 'Kubernetes', 'n8n'],
    'Deployments / Agents': ['Vercel', 'GitHub Pages', 'GoDaddy', 'AWS', 'N8n', 'Gemini gem'],
  },
  
  certifications: [
    {
      name: 'AWS Certified Developer - Associate (DVA-C02)',
      issuer: 'Amazon Web Services',
      year: '2024',
    },
  ],
  
  achievements: [
    'Achieved 5,000+ users on the GreekGodSquad website by optimizing performance and ensuring high availability.',
    'Earned ₹2,00,000 revenue for clients by delivering high-quality web solutions.',
  ],
};

