"use client";

import { useState, useEffect } from 'react';

export default function SystemStats() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [uptime, setUptime] = useState(0);
  const [cpuUsage, setCpuUsage] = useState(0);
  const [memUsage, setMemUsage] = useState(0);
  const [networkDown, setNetworkDown] = useState(0);
  const [networkUp, setNetworkUp] = useState(0);
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [cpuTemp, setCpuTemp] = useState(45);
  const [gpuTemp, setGpuTemp] = useState(55);
  const [commitsToday, setCommitsToday] = useState(0);
  const [bugsFixed, setBugsFixed] = useState(200);
  const [tasks, setTasks] = useState(150);
  const [runningTasks, setRunningTasks] = useState(2);
  const [sleepingTasks, setSleepingTasks] = useState(148);
  const [loadAvg1, setLoadAvg1] = useState(0.25);
  const [loadAvg5, setLoadAvg5] = useState(0.26);
  const [loadAvg15, setLoadAvg15] = useState(0.42);
  const [ipAddress, setIpAddress] = useState('192.168.1.43');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setUptime(prev => prev + 1);
      
      // Dynamic CPU usage (15-45%)
      setCpuUsage(Math.floor(Math.random() * 30 + 15));
      
      // Dynamic memory usage (30-70%)
      setMemUsage(Math.floor(Math.random() * 40 + 30));
      
      // Dynamic network speeds
      setNetworkDown(Math.floor(Math.random() * 100 + 50));
      setNetworkUp(Math.floor(Math.random() * 50 + 20));
      
      // Dynamic temperatures
      setCpuTemp(Math.floor(Math.random() * 10 + 45));
      setGpuTemp(Math.floor(Math.random() * 15 + 55));
      
      // Dynamic battery (slowly decreasing or charging)
      setBatteryLevel(prev => {
        const change = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;
        return Math.max(20, Math.min(100, prev + change));
      });
      
      // Dynamic dev stats
      setCommitsToday(prev => Math.random() > 0.95 ? prev + 1 : prev);
      setBugsFixed(prev => Math.random() > 0.98 ? prev + 1 : prev);
      
      // Dynamic system load
      setTasks(Math.floor(Math.random() * 50 + 150));
      setRunningTasks(Math.floor(Math.random() * 5 + 2));
      setSleepingTasks(prev => tasks - runningTasks);
      
      setLoadAvg1(Math.random() * 0.5 + 0.1);
      setLoadAvg5(Math.random() * 0.6 + 0.15);
      setLoadAvg15(Math.random() * 0.7 + 0.2);
      
      // Occasionally change IP (simulate DHCP)
      if (Math.random() > 0.999) {
        setIpAddress(`192.168.1.${Math.floor(Math.random() * 200 + 10)}`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [tasks, runningTasks]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div className="border border-green-700 bg-black/95 rounded h-full overflow-hidden flex flex-col">
      <div className="p-2 border-b border-green-700 bg-gray-900/50 flex-shrink-0">
        <span className="text-green-400 text-sm">system-monitor</span>
      </div>
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-gray-900">
        {/* Time & Date */}
        <div className="border-b border-green-700 pb-3">
          <div className="text-cyan-400 font-bold text-lg">{formatTime(currentTime)}</div>
          <div className="text-gray-400">{currentTime.toLocaleDateString()}</div>
          <div className="text-gray-400">Uptime: {formatUptime(uptime)}</div>
        </div>

        {/* Hardware Info */}
        <div className="space-y-2">
          <div className="text-yellow-400 font-semibold">Hardware</div>
          <div className="text-gray-300 space-y-1">
            <div>CPU: Intel i5-12450H</div>
            <div className="flex justify-between">
              <span>Usage:</span>
              <span className="text-green-400">{cpuUsage}%</span>
            </div>
            <div className="flex justify-between">
              <span>Temp:</span>
              <span className="text-green-400">{cpuTemp}°C</span>
            </div>
            <div>GPU: GTX 1650 Mobile</div>
            <div className="flex justify-between">
              <span>GPU Temp:</span>
              <span className="text-green-400">{gpuTemp}°C</span>
            </div>
          </div>
        </div>

        {/* Memory Info */}
        <div className="space-y-2">
          <div className="text-yellow-400 font-semibold">Memory</div>
          <div className="text-gray-300 space-y-1">
            <div className="flex justify-between">
              <span>Total:</span>
              <span>15.28 GB</span>
            </div>
            <div className="flex justify-between">
              <span>Used:</span>
              <span className="text-green-400">{(memUsage * 15.28 / 100).toFixed(1)} GB</span>
            </div>
            <div className="flex justify-between">
              <span>Available:</span>
              <span className="text-blue-400">{(15.28 - (memUsage * 15.28 / 100)).toFixed(1)} GB</span>
            </div>
            <div className="flex justify-between">
              <span>Usage:</span>
              <span className="text-green-400">{memUsage}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-green-400 h-2 rounded-full transition-all duration-1000" 
                style={{ width: `${memUsage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Storage Info */}
        <div className="space-y-2">
          <div className="text-yellow-400 font-semibold">Storage</div>
          <div className="text-gray-300 space-y-1">
            <div className="flex justify-between">
              <span>Root (/):</span>
              <span>476 GB</span>
            </div>
            <div className="flex justify-between">
              <span>Used:</span>
              <span className="text-orange-400">144 GB</span>
            </div>
            <div className="flex justify-between">
              <span>Free:</span>
              <span className="text-green-400">332 GB</span>
            </div>
            <div className="flex justify-between">
              <span>Usage:</span>
              <span className="text-orange-400">30%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-orange-400 h-2 rounded-full w-[30%]"></div>
            </div>
          </div>
        </div>

        {/* Network */}
        <div className="space-y-2">
          <div className="text-yellow-400 font-semibold">Network</div>
          <div className="text-gray-300 space-y-1">
            <div className="flex justify-between">
              <span>Interface:</span>
              <span className="text-cyan-400">wlan0</span>
            </div>
            <div className="flex justify-between">
              <span>↓ Down:</span>
              <span className="text-green-400">{networkDown} Mbps</span>
            </div>
            <div className="flex justify-between">
              <span>↑ Up:</span>
              <span className="text-green-400">{networkUp} Mbps</span>
            </div>
            <div className="flex justify-between">
              <span>Status:</span>
              <span className="text-green-400">Connected</span>
            </div>
            <div className="flex justify-between">
              <span>IP:</span>
              <span className="text-blue-400">{ipAddress}</span>
            </div>
          </div>
        </div>

        {/* Battery Info */}
        <div className="space-y-2">
          <div className="text-yellow-400 font-semibold">Battery</div>
          <div className="text-gray-300 space-y-1">
            <div className="flex justify-between">
              <span>Level:</span>
              <span className="text-green-400">{batteryLevel}%</span>
            </div>
            <div className="flex justify-between">
              <span>Status:</span>
              <span className="text-green-400">{batteryLevel > 85 ? 'Charging' : 'Discharging'}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-green-400 h-2 rounded-full transition-all duration-1000" 
                style={{ width: `${batteryLevel}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Dev Stats */}
        <div className="space-y-2">
          <div className="text-yellow-400 font-semibold">Dev Stats</div>
          <div className="text-gray-300 space-y-1 text-xs">
            <div className="flex justify-between">
              <span>Projects:</span>
              <span className="text-green-400">15+</span>
            </div>
            <div className="flex justify-between">
              <span>Languages:</span>
              <span className="text-blue-400">7</span>
            </div>
            <div className="flex justify-between">
              <span>Commits Today:</span>
              <span className="text-purple-400">{commitsToday}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Commits:</span>
              <span className="text-purple-400">500+</span>
            </div>
            <div className="flex justify-between">
              <span>Lines of Code:</span>
              <span className="text-cyan-400">50K+</span>
            </div>
            <div className="flex justify-between">
              <span>Bugs Fixed:</span>
              <span className="text-red-400">{bugsFixed}</span>
            </div>
          </div>
        </div>

        {/* System Load */}
        <div className="space-y-2">
          <div className="text-yellow-400 font-semibold">System Load</div>
          <div className="text-gray-300 space-y-1">
            <div className="flex justify-between">
              <span>1 min:</span>
              <span className="text-green-400">{loadAvg1.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>5 min:</span>
              <span className="text-green-400">{loadAvg5.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>15 min:</span>
              <span className="text-green-400">{loadAvg15.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tasks:</span>
              <span className="text-cyan-400">{tasks}</span>
            </div>
            <div className="flex justify-between">
              <span>Running:</span>
              <span className="text-green-400">{runningTasks}</span>
            </div>
            <div className="flex justify-between">
              <span>Sleeping:</span>
              <span className="text-blue-400">{sleepingTasks}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}