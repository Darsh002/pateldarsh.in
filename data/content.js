/**
 * Darsh Patel Portfolio Content Configuration
 * Centralized data source for pateldarsh.in — sourced from Darsh_Patel_Resume.pdf
 */

const siteData = {
  personal: {
    name: "Darsh Patel",
    firstName: "Darsh",
    lastName: "Patel",
    title: "Full Stack Web Developer, Aspiring AI Engineer",
    shortRole: "Laravel / PHP / LLM Integration",
    tagline: "Building full-stack web products and shipping AI into them — from LLM-powered automation to computer vision.",
    bio: [
      "I'm a Full Stack Web Developer specializing in PHP, Laravel, and MySQL — and I spend a growing share of my time shipping AI into real products instead of treating it as a bolt-on feature.",
      "At Traction Shastra I've built AI automation workflows with LLM APIs, an AI invoice generator and business assistant for a live SaaS product, and the REST API architecture behind it.",
      "I'm steadily building toward AI engineering — currently learning the fundamentals: RAG, model training basics, data annotation, and working with datasets — alongside my M.Sc. in Information Technology from the University of Mumbai."
    ],
    status: {
      available: true,
      text: "OPEN TO AI ENGINEERING ROLES",
      location: "Mumbai, IN",
      timezone: "IST (UTC+5:30)"
    }
  },

  contact: {
    email: "todarshpatel002@gmail.com",
    phone: "+91 7517986796",
    phoneFormatted: "+91 75179 86796",
    location: "Mumbai, Maharashtra, India",
    availability: "Open to AI Engineering, Full-Stack & Freelance Opportunities"
  },

  resume: {
    file: "Darsh_Patel_Resume.pdf",
    label: "Download Resume"
  },

  social: [
    {
      name: "GitHub",
      url: "https://github.com/Darsh002",
      icon: "github",
      handle: "@Darsh002"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/darshpatel002",
      icon: "linkedin",
      handle: "in/darshpatel002"
    },
    {
      name: "Email",
      url: "mailto:todarshpatel002@gmail.com",
      icon: "mail",
      handle: "todarshpatel002@gmail.com"
    }
  ],

  experience: [
    {
      company: "Traction Shastra",
      role: "Web Developer",
      type: "Full-time",
      period: "Sept 2024 – Present",
      location: "Mumbai, India",
      description: "Building websites, CMS platforms, and SaaS applications — including AI-powered products like AI-assisted accounting software.",
      highlights: [
        "Developed full-stack web applications using Laravel, PHP, and MySQL with integrated JavaScript frontends.",
        "Built AI automation workflows with LLM APIs to streamline data processing and improve business efficiency.",
        "Optimized API endpoints and MySQL queries to improve application speed."
      ],
      technologies: ["Laravel", "React.Js", "PHP", "MySQL", "JavaScript", "LLM APIs", "REST APIs"]
    },
    {
      company: "Traction Shastra",
      role: "Web Developer Intern",
      type: "Internship",
      period: "May 2024 – Aug 2024",
      location: "Mumbai, India",
      description: "Backend features, APIs, and frontend modules in a production Laravel codebase.",
      highlights: [
        "Built backend features and RESTful APIs in PHP.",
        "Developed frontend modules with HTML, CSS, and JavaScript in collaboration with the team.",
        "Debugged critical issues and maintained code quality across web modules."
      ],
      technologies: ["PHP", "Laravel", "REST APIs", "JavaScript", "HTML5/CSS3", "MySQL"]
    },
    {
      company: "Bharat Intern",
      role: "Web Developer Intern",
      type: "Internship",
      period: "Oct 2023 – Nov 2023",
      location: "Remote",
      description: "First production build — a responsive portfolio site shipped end-to-end.",
      highlights: [
        "Built a responsive portfolio website with client-side form validation.",
        "Used Git for version control and deployment."
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Git", "Form Validation"]
    }
  ],

  projects: [
    {
      id: "ctrlbiz",
      number: "01",
      accentColor: "#ff4c24",
      title: "CtrlBiz",
      subtitle: "AI Business Management Platform (SaaS) — built at Traction Shastra",
      category: "Full-Stack SaaS & AI",
      period: "2025",
      featured: true,
      description: "A SaaS platform built at Traction Shastra for Indian small businesses — salons, restaurants, retail, clinics, freelancers — replacing paper registers and disconnected tools with one AI-assisted system.",
      fullDetails: {
        problem: "Small businesses in India run on paper registers and disconnected apps — no unified billing, inventory, bookings, or compliance-ready invoicing.",
        solution: "Built AI features and backend modules for a full-stack SaaS covering billing, bookings, inventory, and staff management — with an AI layer that automates the busywork instead of just digitizing it.",
        keyFeatures: [
          "AI invoice generator with GST support",
          "AI assistant that answers business questions, fills forms, and automates routine tasks",
          "Booking, inventory, customer and staff management",
          "QR menu ordering and an analytics dashboard",
          "Razorpay payments with Hindi and English support"
        ],
        achievement: "Built as part of the engineering team at Traction Shastra."
      },
      technologies: ["Laravel", "React", "MySQL", "Tailwind CSS", "Razorpay", "LLM APIs"],
      liveUrl: "",
      githubUrl: "",
      linkedinUrl: "https://lnkd.in/p/eMwQsadG",
      image: "",
      tag: "AGENCY PROJECT"
    },
    {
      id: "vivha-setu",
      number: "02",
      accentColor: "#60a5fa",
      title: "Vivha Setu",
      subtitle: "AI-Powered Wedding Management Platform",
      category: "Full-Stack & AI",
      period: "2024",
      featured: true,
      description: "A wedding management platform built from concept to deployment, with LLM APIs automating expense categorization and event scheduling.",
      fullDetails: {
        problem: "Traditional wedding planning involves fragmented spreadsheets, manual guest tracking, and unpredictable budget overflows.",
        solution: "Vivha Setu unifies event logistics into a single dashboard — LLM APIs handle expense categorization and scheduling automation, while guest and budget data stay live and trackable.",
        keyFeatures: [
          "LLM API integration for automated expense categorization and event scheduling",
          "Guest management dashboard with real-time budget tracking",
          "End-to-end build from concept to deployment"
        ],
        achievement: "Presented at the Aavishkar Zonal Round."
      },
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "LLM APIs"],
      liveUrl: "",
      githubUrl: "",
      linkedinUrl: "https://lnkd.in/p/eYxNuayQ",
      image: "",
      tag: "AI AUTOMATION"
    },
    {
      id: "bloodconnect",
      number: "03",
      accentColor: "#e11d48",
      title: "BloodConnect",
      subtitle: "Blood Donor-Recipient Matching Platform — Final Year Project",
      category: "Full-Stack & HealthTech",
      period: "2024",
      featured: true,
      description: "A web platform bridging the gap between blood donors and recipients, with real-time matching and automated notifications to help address critical blood shortages.",
      fullDetails: {
        problem: "Blood donation drives and recipient needs are often disconnected — no central system to match donors to urgent requests quickly.",
        solution: "Built a platform with real-time donor matching, automated notifications, and a streamlined registration flow to make emergency blood requests faster to fulfill.",
        keyFeatures: [
          "Real-time donor-recipient matching",
          "Automated notifications for urgent requests",
          "Streamlined donor registration process"
        ],
        achievement: "Final year project — healthcare logistics and empathy-driven design."
      },
      technologies: ["Web Development", "Database Management", "UX Design"],
      liveUrl: "",
      githubUrl: "",
      linkedinUrl: "https://lnkd.in/p/eszPKFkP",
      image: "",
      tag: "HEALTHTECH"
    }
  ],

  otherProjects: [
    {
      title: "Cyber Inceptor",
      description: "AI hand-tracking game suite — a gesture-controlled shooting game built in the browser using computer vision and HTML5 Canvas with low-latency interaction.",
      technologies: ["Computer Vision", "HTML5 Canvas", "JavaScript"],
      liveUrl: "https://cyber-inceptor.netlify.app/"
    },
    {
      title: "Paper Pilots",
      description: "A browser-based game built and shipped end-to-end, live and playable.",
      technologies: ["JavaScript", "HTML5 Canvas"],
      liveUrl: "https://paper-pilots.netlify.app/"
    },
    {
      title: "Friday",
      description: "Python desktop voice assistant using speech recognition to control applications, fetch real-time information, and automate daily system tasks.",
      technologies: ["Python", "Speech Recognition", "Automation"],
      liveUrl: ""
    }
  ],

  skills: {
    categories: [
      {
        name: "AI & LLM Engineering",
        skills: [
          { name: "LLM API Integration (OpenAI & others)", level: "Advanced", Highlight: true },
          { name: "Prompt Engineering", level: "Advanced", Highlight: true },
          { name: "AI Automation Workflows", level: "Proficient", Highlight: true },
          { name: "Computer Vision", level: "Proficient", Highlight: true },
          { name: "RAG, Model Training & Datasets", level: "Actively Learning", Highlight: true }
        ]
      },
      {
        name: "Backend & Databases",
        skills: [
          { name: "PHP", level: "Advanced", Highlight: true },
          { name: "Laravel", level: "Advanced", Highlight: true },
          { name: "MySQL", level: "Advanced", Highlight: true },
          { name: "RESTful APIs", level: "Advanced", Highlight: true },
          { name: "SaaS Architecture", level: "Beginner", Highlight: false },
          { name: "Payment Gateway Integration", level: "Proficient", Highlight: false }
        ]
      },
      {
        name: "Frontend",
        skills: [
          { name: "JavaScript (ES6+)", level: "Advanced", Highlight: true },
          { name: "HTML5 / CSS3", level: "Advanced", Highlight: false },
          { name: "React", level: "Beginner", Highlight: false },
          { name: "Tailwind CSS", level: "Proficient", Highlight: false },
          { name: "Bootstrap", level: "Proficient", Highlight: false }
        ]
      },
      {
        name: "Languages & Tools",
        skills: [
          { name: "Python", level: "Proficient", Highlight: false },
          { name: "Java", level: "Beginner", Highlight: false },
          { name: "SQL", level: "Advanced", Highlight: false },
          { name: "Git & GitHub", level: "Proficient", Highlight: false },
          { name: "VS Code", level: "Advanced", Highlight: false },
          { name: "Postman", level: "Beginner", Highlight: false }
        ]
      }
    ]
  },

  education: [
    {
      degree: "M.Sc. Information Technology",
      institution: "University of Mumbai",
      period: "2026",
      score: "CGPA: 9.00 / 10.0",
      status: "Completed",
      details: "Advanced coursework in software systems and emerging technologies."
    },
    {
      degree: "B.Sc. Information Technology",
      institution: "University of Mumbai",
      period: "2024",
      score: "CGPA: 9.15 / 10.0",
      status: "Graduated",
      details: "Core focus on web technologies, OOP, database management, and software engineering."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Maharashtra State Board",
      period: "2021",
      score: "Percentage: 89.50%",
      status: "Completed",
      details: "Science & Mathematics stream."
    }
  ],

  achievements: [
    {
      title: "Prompt Engineering for Developers",
      category: "Certification",
      description: "Short course completed with DeepLearning.AI."
    },
    {
      title: "Confab 25 International Conference",
      category: "Research",
      description: "Authored and presented a research paper."
    },
    {
      title: "Aavishkar Zonal Round",
      category: "Innovation",
      description: "Presented Vivha Setu at the regional research & innovation competition."
    }
  ],

  services: [
    {
      number: "01",
      title: "AI-Integrated Web Products",
      description: "LLM API integration, prompt engineering, and AI automation workflows wired directly into full-stack Laravel applications."
    },
    {
      number: "02",
      title: "Full-Stack Web Development",
      description: "End-to-end Laravel, PHP, and MySQL applications — from schema design to production deployment."
    },
    {
      number: "03",
      title: "RESTful API Engineering",
      description: "Clean, documented API design with authentication and validation, built for real integrations."
    },
    {
      number: "04",
      title: "SaaS Architecture & Payments",
      description: "System design for multi-tenant SaaS products, including Razorpay payment integration."
    }
  ]
};

if (typeof window !== "undefined") {
  window.siteData = siteData;
}
