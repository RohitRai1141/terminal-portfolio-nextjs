"use client";

export default function ContactCommand() {
  const contacts = [
    {
      platform: "Email",
      handle: "rohitrai.26csb@licet.ac.in",
      link: "rohitrai.26csb@licet.ac.in",
      icon: "📧",
      description: "Best way to reach me for professional inquiries"
    },
    {
      platform: "GitHub",
      handle: "RohitRai1141",
      link: "https://github.com/RohitRai1141",
      icon: "🐙",
      description: "Check out my code and contributions"
    },
    {
      platform: "LinkedIn",
      handle: "ROHITRAI A",
      link: "https://www.linkedin.com/in/rohitrai-a-29183b335/",
      icon: "💼",
      description: "Connect with me professionally"
    },
    {
      platform: "Youtube",
      handle: "@ROHITRAIA22CSB",
      link: "https://www.youtube.com/@ROHITRAIA22CSB/",
      icon: "🐦",
      description: "Follow my tech journey and thoughts"
    },
    {
      platform: "Portfolio",
      handle: "rohitrai.terminal-portfolio",
      link: "https://terminal-portfolio-nextjs-f5tz54pe4-rohitrais-projects.vercel.app/",
      icon: "🌐",
      description: "Visit my main portfolio website"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-cyan-400 text-lg font-bold">Get In Touch</div>
      
      <div className="text-gray-300 space-y-2">
        <p>
          I'm always excited to discuss new opportunities, collaborate on interesting projects, 
          or just chat about technology and development!
        </p>
        <p>
          Feel free to reach out through any of the following channels:
        </p>
      </div>

      <div className="space-y-3">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-start space-x-4 p-3 border border-green-700 rounded hover:bg-green-900/20 transition-colors">
            <span className="text-2xl mt-1">{contact.icon}</span>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <div className="text-yellow-400 font-semibold">{contact.platform}</div>
                <div className="text-gray-500">•</div>
                <a 
                  href={contact.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {contact.handle}
                </a>
              </div>
              <div className="text-gray-400 text-sm mt-1">{contact.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-green-400 text-sm mt-6 p-4 border border-green-700 rounded bg-green-900/10">
        <div className="space-y-2">
          <div className="text-white font-semibold mb-2">Quick Info:</div>
          <p>📍 Currently based in India</p>
          <p>🕒 Usually respond within 24 hours</p>
          <p>💬 Open to remote opportunities worldwide</p>
          <p>🚀 Available for freelance projects</p>
          <p>🎯 Interested in full-time positions</p>
        </div>
      </div>
    </div>
  );
}