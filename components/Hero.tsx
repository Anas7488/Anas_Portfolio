
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      // Reduced from 0.5 to 0.15 to make it reach full stretch almost immediately upon scrolling
      const heroHeight = window.innerHeight * 0.15; 
      const progress = Math.min(scrollPos / heroHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use a lower power (0.4) to make the stretch jump out faster at the very beginning of the scroll
  const letterSpacing = `${Math.pow(scrollProgress, 0.4) * 160}px`;
  const opacity = 1 - (scrollProgress * 2.5); // Fades out even faster to clear space for the next section

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="z-10 text-center space-y-6 max-w-5xl transition-all duration-300" style={{ opacity, transform: `translateY(${scrollProgress * 100}px)` }}>
        <div className="reveal-up active inline-block px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs mono font-bold tracking-widest uppercase mb-2">
          Transmission Received
        </div>
        
        <h1 
          className="landing-name text-6xl md:text-8xl font-black tracking-tighter leading-none transition-all duration-75 ease-out select-none"
          style={{ letterSpacing, paddingLeft: letterSpacing }}
        >
          ANAS <br />
          <span className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-glow tracking-normal">
            DATA ARCHITECT
          </span>
        </h1>
        
        <p className="reveal-up active stagger-2 text-lg md:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed font-light">
          Turning raw entropy into actionable intelligence. Specializing in high-performance Power BI environments, Python automation, and AI Agents.
        </p>
        
        <div className="reveal-up active stagger-3 flex flex-wrap justify-center gap-4 pt-6">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-900/20 font-bold text-sm cursor-none"
          >
            VIEW BLUEPRINTS
          </a>
          <a 
            href="#assistant" 
            className="px-6 py-3 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/50 text-slate-300 rounded-lg transition-all font-bold backdrop-blur-sm text-sm cursor-none"
          >
            INITIATE NEURAL LINK
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 float">
        <span className="text-xs mono tracking-widest">SCROLL TO ANALYZE</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
