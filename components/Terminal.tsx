"use client";

import { useState, useEffect, useRef } from 'react';
import { Commands } from './Commands';
import Cursor from './Cursor';

interface HistoryItem {
  command: string;
  output: JSX.Element | string;
  timestamp: Date;
}

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Show welcome message on load
    const welcomeMessage = (
      <div className="text-cyan-400 space-y-4">
        <pre className="text-green-400 text-xs mb-4">
{`
██████╗  ██████╗ ██╗  ██╗██╗████████╗    ██████╗  █████╗ ██╗
██╔══██╗██╔═══██╗██║  ██║██║╚══██╔══╝    ██╔══██╗██╔══██╗██║
██████╔╝██║   ██║███████║██║   ██║       ██████╔╝███████║██║
██╔══██╗██║   ██║██╔══██║██║   ██║       ██╔══██╗██╔══██║██║
██║  ██║╚██████╔╝██║  ██║██║   ██║       ██║  ██║██║  ██║██║
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝   ╚═╝       ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝
                                                              
         Welcome to Rohit Rai's Terminal Portfolio
`}
        </pre>
        
        <div className="bg-gray-900/50 border border-cyan-700 rounded p-4">
          <div className="text-cyan-400 font-semibold mb-2">🎉 Hi Friend</div>
          <div className="text-gray-300 text-sm space-y-2">
            <p>You've entered an interactive terminal portfolio. This isn't just a static website - it's a fully functional terminal experience. </p>
            <p>You can type commands below to explore my background, skills, and projects.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/30 border border-green-700 rounded p-3">
            <div className="text-green-400 font-semibold text-sm mb-2">🚀 Quick Start</div>
            <div className="text-gray-400 text-xs space-y-1">
              <div>• Type <span className="text-green-400 font-mono">help</span> for all commands</div>
              <div>• Try <span className="text-green-400 font-mono">about</span> to learn about me</div>
              <div>• Use <span className="text-purple-400 font-mono">ask [question]</span> for AI chat</div>
            </div>
          </div>
          
          <div className="bg-gray-900/30 border border-purple-700 rounded p-3">
            <div className="text-purple-400 font-semibold text-sm mb-2">🤖 AI Assistant</div>
            <div className="text-gray-400 text-xs space-y-1">
              <div>• Ask me anything about Rohit </div>
              <div>• Example: <span className="text-purple-400 font-mono">ask What do you know about React?</span></div>
            </div>
          </div>
        </div>
      </div>
    );

    setHistory([{
      command: '',
      output: welcomeMessage,
      timestamp: new Date()
    }]);
  }, []);

  useEffect(() => {
    // Scroll to bottom when history changes
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    if (cmd.trim() === '') return;

    const fullCommand = cmd.trim();
    const parts = fullCommand.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');
    
    // Handle clear command specially
    if (command === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let output;
    
    // Handle commands with arguments
    if (command === 'ask' && args) {
      // Import AskCommand dynamically to handle the question
      output = () => {
        const AskCommand = require('./commands/AskCommand').default;
        return <AskCommand question={args} />;
      };
    } else {
      output = Commands[command] || Commands.default;
    }
    
    const newHistoryItem: HistoryItem = {
      command: fullCommand,
      output: typeof output === 'function' ? output() : output,
      timestamp: new Date()
    };

    setHistory(prev => [...prev, newHistoryItem]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
        if (newIndex === commandHistory.length - 1) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Auto-complete commands
      const availableCommands = Object.keys(Commands).concat(['ask']);
      const currentInput = input.toLowerCase().split(' ')[0];
      const matches = availableCommands.filter(cmd => cmd.startsWith(currentInput));
      if (matches.length === 1) {
        const restOfInput = input.split(' ').slice(1).join(' ');
        setInput(matches[0] + (restOfInput ? ' ' + restOfInput : ''));
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div 
      ref={terminalRef}
      className="h-full p-4 overflow-y-auto text-sm cursor-text"
      onClick={handleClick}
    >
      {/* Command History */}
      <div className="space-y-2">
        {history.map((item, index) => (
          <div key={index}>
            {item.command && (
              <div className="flex items-center space-x-2">
                <span className="text-green-400">rohitrai@archlinux</span>
                <span className="text-blue-400">~</span>
                <span className="text-yellow-400">$</span>
                <span className="text-white">{item.command}</span>
              </div>
            )}
            <div className="ml-4 mb-2">
              {item.output}
            </div>
          </div>
        ))}
      </div>

      {/* Current Input */}
      <div className="flex items-center space-x-2">
        <span className="text-green-400">rohitrai@archlinux</span>
        <span className="text-blue-400">~</span>
        <span className="text-yellow-400">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none text-white"
          spellCheck={false}
        />
        <Cursor />
      </div>
    </div>
  );
}