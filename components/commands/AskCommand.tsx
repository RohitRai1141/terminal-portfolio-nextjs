"use client";

import { useState } from 'react';
import { askAI } from '@/lib/aiModel';

interface AskCommandProps {
  question?: string;
}

export default function AskCommand({ question }: AskCommandProps) {
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string>('');

  const handleAsk = async (q: string) => {
    setLoading(true);
    try {
      const response = await askAI(q);
      setAnswer(response);
    } catch (error) {
      setAnswer('Sorry, I encountered an error while processing your question. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // If question is provided, ask immediately
  if (question && !answer && !loading) {
    handleAsk(question);
  }

  if (!question) {
    return (
      <div className="space-y-4">
        <div className="text-cyan-400 text-xl font-bold">🤖 AI Assistant - Chat with Rohit's Resume</div>
        <div className="text-gray-300 space-y-3">
          <div className="bg-gray-900/50 border border-cyan-700 rounded p-4">
            <div className="text-cyan-400 font-semibold mb-2">How it works:</div>
            <p className="text-sm">I'm an AI trained on Rohit's complete professional background. I can answer detailed questions about his skills, experience, projects, and career journey. Just ask me anything in natural language!</p>
          </div>
          
          <div className="bg-gray-900/50 border border-yellow-700 rounded p-4">
            <div className="text-yellow-400 font-semibold mb-3">💡 Example Questions:</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm">
              <div className="space-y-1">
                <div className="text-purple-400 font-semibold">🔧 Technical Skills:</div>
                <div>• <span className="text-green-400">What programming languages does Rohit know?</span></div>
                <div>• <span className="text-green-400">Tell me about Rohit's React experience</span></div>
                <div>• <span className="text-green-400">Does Rohit work with databases?</span></div>
                <div>• <span className="text-green-400">What backend technologies does he use?</span></div>
              </div>
              <div className="space-y-1">
                <div className="text-blue-400 font-semibold">💼 Experience & Projects:</div>
                <div>• <span className="text-green-400">What's Rohit's biggest project?</span></div>
                <div>• <span className="text-green-400">Tell me about his work experience</span></div>
                <div>• <span className="text-green-400">Has he built any e-commerce sites?</span></div>
                <div>• <span className="text-green-400">What's his educational background?</span></div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/30 border border-gray-600 rounded p-3">
            <div className="text-gray-400 text-sm space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-cyan-400 font-semibold">Usage:</span>
                <code className="bg-gray-800 px-2 py-1 rounded text-green-400">ask [your question]</code>
              </div>
              <div className="text-xs text-gray-500">
                💡 The AI understands natural language, so feel free to ask questions however feels natural to you!
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-cyan-400 text-lg font-bold">🤖 AI Assistant</div>
      
      <div className="border-l-2 border-blue-700 pl-4">
        <div className="text-yellow-400 font-semibold mb-2">❓ Question:</div>
        <div className="text-gray-300 italic bg-gray-900/30 p-3 rounded">"{question}"</div>
      </div>

      <div className="border-l-2 border-green-700 pl-4">
        <div className="text-green-400 font-semibold mb-2">🤖 Answer:</div>
        {loading ? (
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <span className="text-gray-400">AI is thinking...</span>
          </div>
        ) : answer ? (
          <div className="text-gray-300 bg-gray-900/30 p-3 rounded whitespace-pre-line">
            {answer}
          </div>
        ) : (
          <div className="text-gray-400">Processing your question...</div>
        )}
      </div>

      {answer && (
        <div className="text-gray-500 text-xs mt-4 p-3 border border-gray-700 rounded bg-gray-900/20">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-yellow-400">💡</span>
            <span className="text-yellow-400 font-semibold">Pro Tips:</span>
          </div>
          <div className="space-y-1">
            <p>• Ask follow-up questions for more details</p>
            <p>• Try: <span className="text-green-400">ask What specific React projects has Rohit built?</span></p>
            <p>• Or: <span className="text-green-400">ask Tell me more about Rohit's backend experience</span></p>
          </div>
        </div>
      )}
    </div>
  );
}