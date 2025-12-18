
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';
import ScrollFade from './ScrollFade';

const Assistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Neural link established. I am Anas\'s data concierge. How can I assist your investigation today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await geminiService.chat(userMessage, messages);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <section id="assistant" className="py-24 px-6 overflow-hidden">
      <ScrollFade className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Neural <span className="text-purple-400">Assistant</span></h2>
          <p className="text-slate-400">Direct interface with Anas's professional repository via Gemini AI.</p>
        </div>

        <div className="glass-panel rounded-3xl overflow-hidden border-purple-500/20 shadow-2xl shadow-purple-950/20">
          <div className="p-4 bg-slate-900/50 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="mono text-[10px] text-slate-400">ANAS_OS V3.1 - ONLINE</span>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="h-[400px] overflow-y-auto p-6 space-y-6 bg-slate-950/40"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-purple-600 text-white rounded-tr-none' 
                    : 'bg-slate-800/80 text-slate-200 border border-slate-700 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/80 rounded-2xl rounded-tl-none p-3 flex gap-1 items-center">
                  <div className="w-1 h-1 bg-slate-500 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1 h-1 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-4 bg-slate-900/50 border-t border-slate-800 flex gap-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about project metrics..."
              className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-purple-500/50 transition-all text-slate-200"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white px-4 py-2 rounded-xl transition-all font-bold text-sm"
            >
              SEND
            </button>
          </form>
        </div>
      </ScrollFade>
    </section>
  );
};

export default Assistant;
