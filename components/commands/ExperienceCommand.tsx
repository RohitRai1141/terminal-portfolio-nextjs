"use client";

export default function ExperienceCommand() {
  const experiences = [
  {
    "company": "Infosys Springboard",
    "position": "Angular Full-Stack Developer Intern",
    "duration": "Dec 2024 - Feb 2025",
    "description": "Developed full-stack booking platform (cab, tour, flight, hotel) with Angular frontend and JSON server backend. Served dual role as Scrum Master and Product Owner, leading 5-person team through sprint planning and development cycles. Managed requirements gathering, project execution, and ensured seamless integration of all booking services.",
    "technologies": ["Angular", "TypeScript", "Bootstrap", "JSON Server", "Node.js", "Git"],
    "achievements": [
      "Led a 5-member team as Scrum Master and Product Owner",
      "Built a unified booking platform covering multiple services",
      "Ensured seamless integration and delivery of all modules"
    ]
  },
  {
    "company": "CampusVault",
    "position": "Project",
    "duration": "Jun 2025",
    "description": "Built a role-based academic library with admin and viewer dashboards using Supabase Auth and RLS. Enabled secure file upload, real-time management, and categorization by semester, subject, and unit. Designed responsive UI with Tailwind CSS, shadcn/ui, and Lucide icons.",
    "technologies": ["Next.js 13", "Supabase", "TypeScript", "Tailwind CSS"],
    "achievements": [
      "Implemented role-based access using Supabase RLS",
      "Created intuitive dashboard with modern UI components",
      "Enabled real-time file categorization and upload"
    ]
  },
  {
    "company": "Classroom Booking System",
    "position": "Project",
    "duration": "May 2024 – Nov 2024",
    "description": "Developed a real-time web-based classroom reservation system achieving 95% scheduling accuracy, allowing faculty and students to efficiently manage room bookings. Enabled role-based access control and integrated email notifications for booking confirmations and reminders.",
    "technologies": ["React", "JavaScript", "HTML", "CSS", "Firebase/MySQL", "GitHub"],
    "achievements": [
      "Achieved 95% room scheduling accuracy",
      "Integrated role-based access and email alerts",
      "Streamlined booking system for faculties and students"
    ]
  },
  {
    "company": "Voice-Controlled Game",
    "position": "Project",
    "duration": "Sep 2024",
    "description": "Developed a browser-based game with 90% voice recognition accuracy using the Web Speech API. Integrated real-time voice command parsing with event-driven state management for seamless user interaction. Optimized for low-latency response and cross-browser compatibility.",
    "technologies": ["React.js", "JavaScript", "HTML", "CSS", "Web Speech API", "GitHub"],
    "achievements": [
      "Achieved 90% voice command accuracy",
      "Enabled seamless game interaction via speech",
      "Used browser-native Web Speech API"
    ]
  },
  {
    "company": "Waste Management App",
    "position": "Project",
    "duration": "Jan 2025 – Apr 2025",
    "description": "Built a mobile application for waste classification that identifies and categorizes waste images with 90% accuracy using an integrated image recognition model. Designed a user-friendly interface and implemented RESTful APIs to provide localized recycling guidelines and disposal tips.",
    "technologies": ["React", "Next.js", "Spring Boot", "JavaScript", "Java", "REST APIs", "GitHub"],
    "achievements": [
      "Built image recognition feature with 90% accuracy",
      "Implemented REST APIs for localized recycling tips",
      "Developed mobile-friendly UI for wide usability"
    ]
  }
];

  return (
    <div className="space-y-6">
      <div className="text-cyan-400 text-lg font-bold">Work Experience & Projects</div>
      
      {experiences.map((exp, index) => (
        <div key={index} className="border-l-2 border-green-700 pl-4 space-y-3">
          <div className="space-y-1">
            <div className="text-yellow-400 font-semibold">{exp.position}</div>
            <div className="text-white">{exp.company}</div>
            <div className="text-blue-400 text-sm">{exp.duration}</div>
          </div>
          
          <div className="text-gray-300 text-sm">{exp.description}</div>
          
          <div className="space-y-2">
            <div className="text-green-400 text-sm font-semibold">Key Achievements:</div>
            <ul className="text-gray-300 text-sm space-y-1">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-1 mt-2">
            {exp.technologies.map(tech => (
              <span key={tech} className="bg-blue-900/50 text-blue-400 px-2 py-1 rounded text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}