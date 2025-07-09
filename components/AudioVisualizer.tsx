"use client";

import { useState, useEffect } from 'react';

export default function AudioVisualizer() {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    const barCount = 40;
    const initialBars = Array.from({ length: barCount }, () => Math.random() * 100);
    setBars(initialBars);

    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.random() * 100));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-16 bg-black/80 border-t border-green-700 flex items-end justify-center space-x-1 px-4">
      {bars.map((height, index) => (
        <div
          key={index}
          className="w-2 bg-gradient-to-t from-green-400 to-cyan-400 transition-all duration-100"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}