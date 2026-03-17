import type { CVData } from '../types';

const cv: CVData = {
  name: "Adrian Wei",
  email: "hanningwei92@gmail.com",
  linkedin: "https://www.linkedin.com/in/hanning-wei-92312423a22f/",
  summary: "Software Engineering student specializing in Cybersecurity and Secure SDLC. Proven track record in side-channel vulnerability research, network security simulation, and full-stack development. ISC2 Certified in Cybersecurity (CC) with expertise in C++, Python, and secure architectures. Experienced in applying machine learning to threat detection and managing secure migrations.",
  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "C++", "C#", "Java", "SQL", "TypeScript", "HTML/CSS"]
    },
    {
      category: "Security & Infra",
      items: ["Wireshark", "MiniNet", "Linux", "AWS", "Azure", "Docker", "RESTful APIs", "Git/GitHub", "Jira", "Confluence"]
    },
    {
      category: "Frameworks",
      items: [".NET Core", "Angular", "React Native", "Express", "Node.js", "Flask", "Django", "TensorFlow", "Unity"]
    }
  ],
  certifications: [
    "ISC2 Certified in Cybersecurity (CC)",
    "Microsoft Azure Fundamentals (AZ-900)"
  ],
  education: [
    {
      institution: "University of Western Ontario",
      degree: "Bachelor of Engineering in Software Engineering",
      location: "London, ON",
      dates: "Expected May 2027",
      bullets: [
        "Coursework: Algorithms & Data Structures, Network Security, Database Management Systems, Operating Systems, Computer Networks, Discrete Structures",
        "Emphasis on Systems Security and Theoretical Foundations",
        "Varsity Table Tennis MVP (2024–2025); coached and managed team logistics and athlete development"
      ]
    }
  ],
  experience: [
    {
      title: "Backend Developer",
      company: "LeakSight — Western Cyber Society",
      location: "London, ON",
      dates: "Dec 2025 – Present",
      type: "research",
      tech: ["Python", "ML", "Side-Channel Research"],
      bullets: [
        "Architecting a research environment to simulate and analyze side-channel timing leaks between co-located processes on shared system resources.",
        "Developing machine learning models and data pipelines to detect subtle system behavior patterns that reveal unintentional information leakage.",
        "Engineering an interactive dashboard to translate complex security research into clear, actionable data for vulnerability mitigation."
      ]
    },
    {
      title: "Software Developer",
      company: "NCTTA",
      location: "Remote / Toronto, ON",
      dates: "Nov 2025 – Present",
      type: "work",
      tech: ["C#", ".NET Core", "SQL", "MVC"],
      bullets: [
        "Migrating legacy PHP systems into a unified .NET Core MVC web application to manage registrations and results for 150+ North American universities.",
        "Optimizing MySQL database schemas and complex SQL queries to manage relational data and player ratings for thousands of collegiate athletes.",
        "Collaborating in an Agile workflow using GitHub for version control to implement features ahead of critical tournament deadlines."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Match [Startup]",
      location: "Toronto, ON",
      dates: "Jan 2024 – Apr 2024",
      type: "work",
      tech: ["React Native", "Python", "Django"],
      bullets: [
        "Engineered multiple iOS interfaces through XCode simulation, accelerating the product deployment timeline by 2 weeks.",
        "Optimized front-end connectivity by architecting Django endpoints to facilitate seamless RESTful API calls with a PostgreSQL backend."
      ]
    }
  ],
  projects: [
    {
      name: "Kogtion Auction",
      location: "Toronto, ON",
      role: "Lead Developer",
      tech: ["Angular", "Express", "PostgreSQL", "Supabase"],
      dates: "Jan 2026 – Present",
      bullets: [
        "Designed and implemented a real-time private auction platform using Angular and Express, facilitating internal corporate events and bidding.",
        "Architected a secure and scalable database layer utilizing PostgreSQL and Supabase, ensuring real-time state updates and data persistence.",
        "Maintained rigorous documentation standards using Confluence and Jira in an Agile environment."
      ]
    },
    {
      name: "GitNest",
      location: "SACHacks — London, ON",
      role: "Lead Developer",
      tech: ["Python", "Gemini AI", "REST APIs"],
      dates: "Mar 2025",
      bullets: [
        "Built an AI-assisted analytics service using Gemini API with secure REST endpoints to protect sensitive GitHub repository data.",
        "Developed data transformation pipelines with integrated security monitoring to support incident investigation and threat detection.",
        "Implemented rigid authentication mechanisms to safeguard private metadata while providing high-level AI-driven project insights."
      ]
    },
    {
      name: "XR-848",
      location: "London, ON",
      role: "Software Developer",
      tech: ["C#", "Unity", "Git"],
      dates: "Jan 2025 – May 2025",
      bullets: [
        "Developed an interactive Unity application, integrating complex gameplay mechanics, animations, and system logic for seamless interaction.",
        "Applied spatial hashing and octrees for collision detection and real-time performance optimization in a 3D environment.",
        "Managed collaborative development through Git using feature branching and pull requests."
      ]
    },
    {
      name: "NBA Predictive Analytics Model",
      location: "",
      role: "Data Analyst",
      tech: ["Python", "Google Sheets API", "Google Cloud", "ML"],
      dates: "Nov 2024 – Jan 2025",
      bullets: [
        "Built a predictive analytics workflow using Google Sheets to forecast NBA player performance from historical data.",
        "Integrated Python scripts with the Google Sheets API to automate data ingestion, cleaning, and model output updates.",
        "Implemented no-code ML (Simple ML for Sheets) to prototype classification/regression models."
      ]
    },
    {
      name: "Secure Course Management System",
      location: "London, ON",
      role: "Full Stack Developer",
      tech: ["Node.js", "Express", "JavaScript", "OWASP"],
      dates: "Oct 2025",
      bullets: [
        "Implemented secure authentication using custom-encrypted tokens to protect session data and prevent unauthorized account access.",
        "Applied OWASP security best practices, including input validation and SQL injection prevention for all RESTful API endpoints.",
        "Designed a responsive front-end architecture that securely interfaces with backend logic while maintaining a small attack surface."
      ]
    },
    {
      name: "AeroDB",
      location: "London, ON",
      role: "Database Designer",
      tech: ["SQL", "AWS", "JavaScript"],
      dates: "Sept 2025 – Dec 2025",
      bullets: [
        "Designed a relational schema transforming conceptual models into normalized (3NF/BCNF) structures for robust data integrity.",
        "Constructed automated data pipelines to ingest and transform raw schedules into normalized relational tables on AWS infrastructure.",
        "Optimized SQL query performance for core entities including Flight and Crew."
      ]
    },
    {
      name: "MiniNet DNS Simulation",
      location: "London, ON",
      role: "Networking Lab",
      tech: ["MiniNet", "Linux", "DNS", "Wireshark"],
      dates: "Nov 2025",
      bullets: [
        "Deployed a virtual network using MiniNet to simulate DNS infrastructure, configuring recursive and authoritative servers.",
        "Analyzed packet captures via Wireshark to troubleshoot query-response cycles and verify resource record integrity.",
        "Evaluated network performance under simulated traffic to identify potential bottlenecks and security vulnerabilities."
      ]
    }
  ]
};

export default cv;
