"use client";

export default function AboutCommand() {
  return (
    <div className="space-y-4">
      <div className="text-cyan-400 text-lg font-bold">About Rohit Rai</div>
      <div className="text-gray-300 space-y-3">
        <p>
          <span className="text-green-400">$</span> whoami
        </p>
        <div className="ml-4 space-y-2">
          <p>
            I'm Rohit Rai, a passionate Software Engineer and Full-Stack Developer 
            with expertise in modern web technologies and cloud solutions.
          </p>
          <p>
            Currently pursuing my Bachelor's in Computer Science and Engineering, 
            I specialize in building scalable applications and solving complex problems 
            with clean, efficient code.
          </p>
          <p>
            I love working with cutting-edge technologies and contributing to open-source projects.
            When I'm not coding, you'll find me exploring new frameworks or optimizing system performance.
          </p>
        </div>
      </div>
      
      <div className="text-yellow-400 mt-6">
        <div className="text-sm mb-2">Core Technologies:</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[
            'JavaScript/TypeScript', 'React.js', 'Next.js', 
            'Node.js', 'Python', 'Java',
            'GO', 'PostgreSQL', 'AWS',
            'Docker', 'Git', 'Linux'
          ].map(skill => (
            <span key={skill} className="bg-green-900/50 text-green-400 px-2 py-1 rounded text-xs">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="text-gray-500 text-sm mt-4 space-y-1">
        <p>📍 Location: Chennai</p>
        <p>🎓 Education: B.E in Computer Science & Engineering</p>
        <p>💼 Status: Open to opportunities</p>
        <p>🌱 Currently learning: Cloud Architecture & DevOps</p>
      </div>
    </div>
  );
}