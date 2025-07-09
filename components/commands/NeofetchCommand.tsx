"use client";

import { useState, useEffect } from 'react';

export default function NeofetchCommand() {
  const [uptime, setUptime] = useState({ hours: 2, minutes: 34 });
  const [memoryUsed, setMemoryUsed] = useState(2.58);
  const [batteryLevel, setBatteryLevel] = useState(85);

  useEffect(() => {
    const timer = setInterval(() => {
      // Update uptime
      setUptime(prev => {
        const newMinutes = prev.minutes + 1;
        if (newMinutes >= 60) {
          return { hours: prev.hours + 1, minutes: 0 };
        }
        return { ...prev, minutes: newMinutes };
      });

      // Slightly vary memory usage
      setMemoryUsed(prev => {
        const change = (Math.random() - 0.5) * 0.2;
        return Math.max(1.5, Math.min(8.0, prev + change));
      });

      // Slightly vary battery
      setBatteryLevel(prev => {
        const change = Math.random() > 0.8 ? (Math.random() > 0.5 ? 1 : -1) : 0;
        return Math.max(20, Math.min(100, prev + change));
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-mono text-sm">
      <div className="flex flex-col lg:flex-row">
        {/* Arch Linux ASCII Art */}
        <div className="text-cyan-400 mr-8 mb-4 lg:mb-0 flex-shrink-0">
          <pre className="text-xs lg:text-sm leading-tight">{`                   -\`               
                  .o+\`               
                 \`ooo/               
                \`+oooo:              
               \`+oooooo:             
               -+oooooo+:            
             \`/:-:++oooo+:          
            \`/++++/+++++++:         
           \`/++++++++++++++:        
          \`/+++ooooooooo+++/       
         ./ooosssso++osssssso+\`     
        .oossssso-\`\`\`\`/ossssss+\`    
       -osssssso.      :ssssssso.   
      :osssssss/        osssso+++.  
     /ossssssss/        +ssssooo/-  
   \`/ossssso+/:-        -:/+osssso+-
  \`+sso+:-\`                 \`.-/+oso:
 \`++:.                           \`-/+/
 .\`                                 \`/`}</pre>
        </div>

        {/* System Information */}
        <div className="text-gray-300 space-y-1 flex-1">
          <div className="mb-2">
            <div className="text-cyan-400 font-bold">rohitrai<span className="text-white">@</span><span className="text-cyan-400">archlinux</span></div>
          </div>
          
         
          {/* Developer Information Section */}
          <div className="pt-3 mt-3 border-t border-gray-600">
            <div className="text-yellow-400 font-bold mb-2">Developer Info:</div>
            <div><span className="text-green-400">Name:</span> Rohit Rai</div>
            <div><span className="text-green-400">Role:</span> Full-Stack Developer</div>
            <div><span className="text-green-400">Experience:</span>4+ months</div>
            <div><span className="text-green-400">Languages:</span> JavaScript, TypeScript, Python, Java, C</div>
            <div><span className="text-green-400">Frontend:</span> React, Next.js, Tailwind CSS</div>
            <div><span className="text-green-400">Backend:</span> Node.js, Express.js, FastAPI, Spring Boot</div>
            <div><span className="text-green-400">Databases:</span> MongoDB, PostgreSQL, MySQL, Redis</div>
            <div><span className="text-green-400">Cloud:</span> AWS, Docker, Kubernetes, CI/CD, ngrok</div>
            <div><span className="text-green-400">Current Focus:</span> DevOps</div>
            <div><span className="text-green-400">Location:</span> Chennai</div>
            <div><span className="text-green-400">Status:</span> Open to opportunities</div>
          </div>

          {/* Color Palette */}
          <div className="pt-3 mt-3">
            <div className="flex space-x-1">
              <div className="w-4 h-4 bg-black border border-gray-600"></div>
              <div className="w-4 h-4 bg-red-500"></div>
              <div className="w-4 h-4 bg-green-500"></div>
              <div className="w-4 h-4 bg-yellow-500"></div>
              <div className="w-4 h-4 bg-blue-500"></div>
              <div className="w-4 h-4 bg-purple-500"></div>
              <div className="w-4 h-4 bg-cyan-500"></div>
              <div className="w-4 h-4 bg-white border border-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}