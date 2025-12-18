
import React from 'react';
import Hero from './components/Hero';
import SkillMatrix from './components/SkillMatrix';
import ProjectGallery from './components/ProjectGallery';
import Assistant from './components/Assistant';
import Contact from './components/Contact';
import MouseFollower from './components/MouseFollower';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen selection:bg-cyan-500/30 cursor-none">
      {/* Custom Cursor Effect */}
      <MouseFollower />

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Top Navigation Blur */}
      <nav className="fixed top-0 left-0 w-full h-20 z-50 flex items-center px-10 border-b border-white/5 glass-panel">
        <div className="flex items-center gap-2 group cursor-none">
          <div className="w-8 h-8 bg-cyan-600 rounded flex items-center justify-center font-bold text-lg transition-all duration-500">
            <img src="/images/portfolio_logo.png" alt="Portfolio Logo" className="w-full h-full object-contain" />
          </div>
          <span className="mono font-bold tracking-widest text-sm">ANAS // DATA ANALYST</span>
        </div>
        <div className="ml-auto flex items-center gap-8 text-[10px] mono text-slate-500 uppercase tracking-widest hidden md:flex">
          <a href="#projects" className="hover:text-cyan-400 transition-colors cursor-none">Repository</a>
          <a href="#assistant" className="hover:text-cyan-400 transition-colors cursor-none">Assistant</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors cursor-none">Contact</a>
          <div className="h-4 w-px bg-slate-800"></div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            SYSTEMS NOMINAL
          </div>
        </div>
      </nav>

      {/* Main Sections */}
      <Hero />
      <SkillMatrix />
      <ProjectGallery />
      <Assistant />
      <Contact />
      
      {/* Fixed UI Overlays */}
      <div className="fixed bottom-8 right-8 z-40 hidden lg:block">
        <div className="glass-panel p-4 rounded-xl border-cyan-500/20 space-y-2 shadow-2xl">
          <div className="text-[10px] mono text-slate-500 uppercase">Latency</div>
          <div className="text-cyan-400 font-bold mono">0.12ms</div>
          <div className="h-px w-full bg-slate-800 my-2"></div>
          <div className="text-[10px] mono text-slate-500 uppercase">Uptime</div>
          <div className="text-white font-bold mono">99.99%</div>
        </div>
      </div>

      <div className="fixed bottom-8 left-8 z-40 hidden lg:block">
        <div className="flex flex-col gap-4">
          <div className="w-1 h-24 bg-slate-900 rounded-full overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full bg-cyan-500 h-2/3 shadow-[0_0_10px_#06b6d4]"></div>
          </div>
          <span className="mono text-[8px] -rotate-90 origin-left text-slate-600">THROTTLE: 68%</span>
        </div>
      </div>
    </main>
  );
};

export default App;
