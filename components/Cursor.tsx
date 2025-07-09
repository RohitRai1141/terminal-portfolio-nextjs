"use client";

import { useState, useEffect } from 'react';

export default function Cursor() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`text-green-400 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      █
    </span>
  );
}