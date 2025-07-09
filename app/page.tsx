"use client";

import { useState, useEffect } from 'react';
import Terminal from '@/components/Terminal';
import MatrixRain from '@/components/MatrixRain';
import SystemStats from '@/components/SystemStats';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="bg-black w-full h-screen" />;
  }

  return (
    <div className="bg-black text-green-400 font-mono min-h-screen overflow-hidden relative">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Main Terminal Layout */}
      <div className="relative z-10 flex h-screen">
        {/* Main Terminal - Now takes more space */}
        <div className="flex-1 lg:flex-[3] p-2 relative">
          <div className="border border-green-700 bg-black/95 rounded h-full flex flex-col">
            <div className="p-2 border-b border-green-700 bg-gray-900/50 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-green-400 text-sm">rohitrai@archlinux: ~</span>
                <span className="text-gray-500 text-xs hidden md:block">Interactive Terminal Portfolio</span>
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <Terminal />
            </div>
          </div>
          
          {/* Floating help hint for new users */}
          <div className="absolute top-4 right-4 bg-yellow-900/90 border border-yellow-600 rounded p-2 text-xs text-yellow-200 max-w-48 lg:hidden">
            <div className="font-semibold mb-1">👋 New here?</div>
            <div>Type <span className="text-yellow-400 font-mono">help</span> to get started!</div>
          </div>
          
          <div className="absolute bottom-4 right-4 bg-purple-900/90 border border-purple-600 rounded p-2 text-xs text-purple-200 max-w-48 hidden lg:block">
            <div className="font-semibold mb-1">🤖 Try the AI!</div>
            <div>Type <span className="text-purple-400 font-mono">ask [question]</span></div>
          </div>
        </div>

        {/* Right Panel - System Stats */}
        <div className="hidden lg:block lg:flex-1 p-2">
          <SystemStats />
        </div>
      </div>
    </div>
  );
}