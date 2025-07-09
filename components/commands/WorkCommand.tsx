"use client";

export default function WorkCommand() {
  const projects = [
  {
    "name": "E-Commerce Platform",
    "description": "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.",
    "technologies": ["Next.js", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
    "features": ["User authentication", "Product management", "Shopping cart", "Payment processing", "Admin dashboard"],
    "link": "https://github.com/rohitrai",
    "status": "Completed",
    "type": "Full-Stack Web App"
  },
  {
    "name": "Task Management System",
    "description": "A collaborative project management tool with real-time updates, team collaboration features, and progress tracking.",
    "technologies": ["React", "Express.js", "Socket.io", "PostgreSQL", "JWT"],
    "features": ["Real-time collaboration", "Task assignment", "Progress tracking", "Team management", "Notifications"],
    "link": "https://github.com/rohitrai",
    "status": "In Development",
    "type": "Web Application"
  },
  {
    "name": "Weather Dashboard",
    "description": "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    "technologies": ["React", "OpenWeather API", "Chart.js", "CSS3", "Geolocation API"],
    "features": ["Current weather", "7-day forecast", "Interactive maps", "Weather charts", "Location search"],
    "link": "https://github.com/rohitrai",
    "status": "Live",
    "type": "Frontend App"
  },
  {
    "name": "Terminal Portfolio",
    "description": "An interactive terminal-style portfolio showcasing my skills and projects in a unique, developer-friendly interface.",
    "technologies": ["Next.js", "TypeScript", "Tailwind CSS", "Canvas API", "React Hooks"],
    "features": ["Interactive terminal", "Command system", "Matrix animation", "Responsive design", "System stats"],
    "link": "https://github.com/rohitrai",
    "status": "Live",
    "type": "Portfolio Website"
  },
  {
    "name": "Chat Application",
    "description": "Real-time messaging application with group chats, file sharing, and emoji support.",
    "technologies": ["Node.js", "Socket.io", "React", "MongoDB", "Express.js"],
    "features": ["Real-time messaging", "Group chats", "File sharing", "User presence", "Message history"],
    "link": "https://github.com/rohitrai",
    "status": "Completed",
    "type": "Real-time App"
  },
  {
    "name": "Portfolio Website",
    "description": "A modern portfolio website showcasing personal projects, resume, and skills, designed for responsiveness and performance.",
    "technologies": ["React", "Tailwind CSS"],
    "features": ["Project showcase", "Downloadable resume", "Responsive design", "Contact form", "Themed UI"],
    "link": "https://github.com/rohitrai",
    "status": "Live",
    "type": "Portfolio Website"
  },
  {
    "name": "Smart AC Automation",
    "description": "An IoT-based system to automate AC control using ESP8266 and AI-based human detection integrated with temperature monitoring.",
    "technologies": ["ESP8266", "Python", "OpenCV", "DHT11", "C++"],
    "features": ["Human detection", "Temperature-based control", "Automatic AC on/off", "IoT integration", "Energy optimization"],
    "link": "https://github.com/rohitrai",
    "status": "Prototype",
    "type": "IoT + AI Project"
  },
  {
    "name": "Traffic Accident Predictor",
    "description": "A predictive web application to analyze accident patterns based on location and time using interactive data visualization.",
    "technologies": ["React", "TypeScript", "Chart.js", "Google Maps API"],
    "features": ["Accident prediction", "Map visualization", "Search by location", "Responsive design", "Data analytics"],
    "link": "https://github.com/rohitrai",
    "status": "Completed",
    "type": "Frontend Web App"
  },
  {
    "name": "Chat Box",
    "description": "A web-based real-time chat box enabling direct user communication using sockets with Node.js backend and React frontend.",
    "technologies": ["React", "Node.js", "Socket.io", "Express.js"],
    "features": ["Private messaging", "Live chat updates", "Typing indicator", "User status", "Socket communication"],
    "link": "https://github.com/rohitrai",
    "status": "In Development",
    "type": "Real-time App"
  },
  {
    "name": "Attendance Tracker",
    "description": "A mobile application for tracking student attendance with teacher authentication and automatic percentage calculation.",
    "technologies": ["React Native", "Firebase", "Expo"],
    "features": ["Student list", "Mark attendance", "Login system", "Real-time sync", "Auto percentage calc"],
    "link": "https://github.com/rohitrai",
    "status": "In Progress",
    "type": "Mobile App"
  }
];

  return (
    <div className="space-y-6">
      <div className="text-cyan-400 text-lg font-bold">My Works</div>
      
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-green-700 rounded p-4 space-y-3 bg-gray-900/20">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <div className="text-yellow-400 font-semibold text-lg">{project.name}</div>
                <div className="text-gray-400 text-sm">{project.type}</div>
              </div>
              <div className="flex gap-2">
                <div className="text-xs text-green-400 bg-green-900/50 px-2 py-1 rounded">
                  {project.status}
                </div>
              </div>
            </div>
            
            <div className="text-gray-300 text-sm">{project.description}</div>
            
            <div className="space-y-2">
              <div className="text-blue-400 text-sm font-semibold">Key Features:</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-gray-300 text-sm">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-purple-400 text-sm font-semibold">Technologies Used:</div>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map(tech => (
                  <span key={tech} className="bg-purple-900/50 text-purple-400 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <span className="mr-1">→</span>
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}