"use client";

import AboutCommand from './commands/AboutCommand';
import ExperienceCommand from './commands/ExperienceCommand';
import WorkCommand from './commands/WorkCommand';
import ContactCommand from './commands/ContactCommand';
import NeofetchCommand from './commands/NeofetchCommand';
import AskCommand from './commands/AskCommand';

export const Commands: { [key: string]: () => JSX.Element } = {
  about: () => <AboutCommand />,
  experience: () => <ExperienceCommand />,
  work: () => <WorkCommand />,
  projects: () => <WorkCommand />, // Alias for work
  contact: () => <ContactCommand />,
  neofetch: () => <NeofetchCommand />,

  ask: () => <AskCommand />,

  help: () => (
    <div className="text-gray-300">
      <div className="text-cyan-400 mb-4 text-xl font-bold">📚 Terminal Portfolio Guide</div>

      <div className="bg-gray-900/50 border border-cyan-700 rounded p-4 mb-6">
        <div className="text-yellow-400 font-semibold mb-3">🚀 Welcome to Rohit's Interactive Terminal Portfolio!</div>
        <div className="text-gray-300 text-sm space-y-2">
          <p>This is a fully interactive terminal experience. You can type commands to explore my background, skills, and projects.</p>
          <p>Think of it as a conversation with an AI assistant that knows everything about my professional journey!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <div className="text-cyan-400 font-semibold mb-3">📋 Basic Commands</div>
          <div className="space-y-1 text-sm">
            <div><span className="text-green-400 font-mono">about</span> - Learn about me</div>
            <div><span className="text-green-400 font-mono">experience</span> - My work experience and projects</div>
            <div><span className="text-green-400 font-mono">work</span> - Practice projects</div>
            <div><span className="text-green-400 font-mono">projects</span> - Same as experience</div>
            <div><span className="text-green-400 font-mono">skills</span> - Technical skills</div>
            <div><span className="text-green-400 font-mono">education</span> - Educational background</div>
            <div><span className="text-green-400 font-mono">contact</span> - Get in touch</div>
            <div><span className="text-green-400 font-mono">neofetch</span> - System information</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-cyan-400 font-semibold mb-3">🤖 AI Assistant</div>
          <div className="space-y-1 text-sm">
            <div><span className="text-purple-400 font-mono">ask [question]</span> - Ask AI about me</div>
            <div className="text-gray-400 text-xs ml-4">Examples:</div>
            <div className="text-gray-400 text-xs ml-4">• ask What languages do you know?</div>
            <div className="text-gray-400 text-xs ml-4">• ask Tell me about your React experience</div>
            <div className="text-gray-400 text-xs ml-4">• ask What's your biggest project?</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/50 border border-yellow-700 rounded p-4 mb-6">
        <div className="text-yellow-400 font-semibold mb-3">💡 Pro Tips & Shortcuts</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="space-y-1">
            <div>• <span className="text-cyan-400">↑/↓ arrows</span> - Browse command history</div>
            <div>• <span className="text-cyan-400">Tab</span> - Auto-complete commands</div>
            <div>• <span className="text-cyan-400">Ctrl+L</span> - Clear terminal</div>
            <div>• <span className="text-cyan-400">clear</span> - Clear terminal (command)</div>
          </div>
          <div className="space-y-1">
            <div>• Commands are case-insensitive</div>
            <div>• AI understands natural language</div>
            <div>• Click anywhere to focus input</div>
            <div>• Responsive design works on mobile</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/50 border border-green-700 rounded p-4">
        <div className="text-green-400 font-semibold mb-3">🎯 Quick Start Guide</div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400">1.</span>
            <span>Start with <span className="text-green-400 font-mono">about</span> to learn about me</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400">2.</span>
            <span>Try <span className="text-green-400 font-mono">work</span> to see my projects</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400">3.</span>
            <span>Use <span className="text-purple-400 font-mono">ask</span> for specific questions</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400">4.</span>
            <span>Check <span className="text-green-400 font-mono">contact</span> to get in touch</span>
          </div>
        </div>
      </div>
    </div>
  ),

  skills: () => (
    <div className="text-gray-300">
      <div className="text-cyan-400 mb-3 text-lg">Technical Skills</div>
      <div className="space-y-4">
        <div>
          <div className="text-yellow-400 mb-2">Programming Languages</div>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'TypeScript', 'Java', 'Python', 'C', 'HTML5', 'CSS3'].map(skill => (
              <span key={skill} className="bg-blue-900/50 text-blue-400 px-2 py-1 rounded text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-yellow-400 mb-2">Frameworks & Libraries</div>
          <div className="flex flex-wrap gap-2">
            {['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS'].map(skill => (
              <span key={skill} className="bg-green-900/50 text-green-400 px-2 py-1 rounded text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-yellow-400 mb-2">Databases & Tools</div>
          <div className="flex flex-wrap gap-2">
            {[ 'PostgreSQL', 'MySQL', 'Git', 'Docker', 'AWS', 'Linux'].map(skill => (
              <span key={skill} className="bg-purple-900/50 text-purple-400 px-2 py-1 rounded text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),

  education: () => (
    <div className="text-gray-300">
      <div className="text-cyan-400 mb-3 text-lg">Education</div>
      <div className="space-y-4">
        <div className="border-l-2 border-green-700 pl-4">
          <div className="text-yellow-400 font-semibold">Bachelor of Engineering</div>
          <div className="text-white">Computer Science & Engineering</div>
          <div className="text-blue-400 text-sm">2022 - 2026</div>
          <div className="text-gray-300 text-sm mt-2">
            Anna University - Loyola-ICAM College of Engineering and Technology
          </div>
        </div>
      </div>
    </div>
  ),

  default: () => (
    <div className="space-y-3">
      <div className="text-red-400 font-semibold">❌ Command not found</div>
      <div className="bg-gray-900/50 border border-red-700 rounded p-3">
        <div className="text-gray-300 text-sm space-y-2">
          <p>Hmm, I don't recognize that command. Here are some suggestions:</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>• <span className="text-green-400 font-mono">help</span> - See all commands</div>
            <div>• <span className="text-green-400 font-mono">about</span> - Learn about me</div>
            <div>• <span className="text-purple-400 font-mono">ask [question]</span> - Use AI assistant</div>
            <div>• <span className="text-green-400 font-mono">work</span> - View my projects</div>
          </div>
          <div className="text-gray-500 text-xs mt-2">
            💡 You can also try asking the AI: <span className="text-purple-400 font-mono">ask What can you tell me about Rohit?</span>
          </div>
        </div>
      </div>
    </div>
  )
};
