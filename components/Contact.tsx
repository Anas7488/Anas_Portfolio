
import React, { useState } from 'react';
import ScrollFade from './ScrollFade';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [transmissionLog, setTransmissionLog] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTransmissionLog(["Initializing secure uplink...", "Encrypting data packets..."]);
    
    const formData = new FormData(e.currentTarget);
    const identity = formData.get('identity') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Detailed subject and body for a professional Outlook response
    const subject = encodeURIComponent(`PORTFOLIO SECURE MESSAGE: ${identity}`);
    const body = encodeURIComponent(
      `--- SECURE TRANSMISSION START ---\n` +
      `FROM: ${identity}\n` +
      `REPLY_TO: ${email}\n` +
      `TIMESTAMP: ${new Date().toISOString()}\n\n` +
      `MESSAGE_BODY:\n${message}\n\n` +
      `--- END OF PACKET ---`
    );

    const mailtoUrl = `mailto:Anasshaikh@outlook.com?subject=${subject}&body=${body}`;

    // Faster sequence: 800ms total
    setTimeout(() => {
      setTransmissionLog(prev => [...prev, "Bypassing firewall...", "Handshake successful."]);
      setTimeout(() => {
        window.location.href = mailtoUrl;
        setIsSubmitting(false);
        setTransmissionLog([]);
      }, 400);
    }, 400);
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-slate-900 bg-black/20 overflow-hidden">
      <ScrollFade className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-6 italic">Secure Connection</h2>
          <p className="text-slate-400 mb-8 leading-relaxed text-sm">
            Interested in optimizing your data architecture or discussing a potential collaboration? Initializing a handshake via any of the secure nodes below.
          </p>
          
          <div className="space-y-4">
            {/* Email Node */}
            <a href="mailto:Anasshaikh@outlook.com" className="flex items-center gap-4 group cursor-none transition-transform duration-300 hover:translate-x-1">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-cyan-500 transition-colors">
                <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-slate-600 mono uppercase">Direct_Line</div>
                <div className="text-slate-200 font-bold text-sm">Anasshaikh@outlook.com</div>
              </div>
            </a>

            {/* LinkedIn Node */}
            <a href="https://www.linkedin.com/in/anas-sheikh-42373a329/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-none transition-transform duration-300 hover:translate-x-1">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-blue-500 transition-colors">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-slate-600 mono uppercase">Professional_Network</div>
                <div className="text-slate-200 font-bold text-sm">anas-sheikh-42373a329</div>
              </div>
            </a>

            {/* GitHub Node */}
            <a href="https://github.com/Anas7488" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-none transition-transform duration-300 hover:translate-x-1">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-purple-500 transition-colors">
                <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-slate-600 mono uppercase">Codebase_Repository</div>
                <div className="text-slate-200 font-bold text-sm">Anas7488</div>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input 
              name="identity"
              type="text" 
              required
              placeholder="Identity" 
              className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-3 text-sm focus:border-cyan-500/50 outline-none transition-colors text-white" 
            />
            <input 
              name="email"
              type="email" 
              required
              placeholder="Contact_URI" 
              className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-3 text-sm focus:border-cyan-500/50 outline-none transition-colors text-white" 
            />
          </div>
          <textarea 
            name="message"
            required
            placeholder="Mission_Parameters (Describe your project or data challenge...)" 
            rows={4} 
            className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-3 text-sm focus:border-cyan-500/50 outline-none resize-none transition-colors text-white"
          ></textarea>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white rounded-lg font-bold transition-all shadow-lg text-sm active:scale-95 disabled:opacity-50 relative overflow-hidden group cursor-none"
          >
            <span className={isSubmitting ? "opacity-0" : "opacity-100"}>TRANSMIT ENCRYPTED DATA</span>
            {isSubmitting && (
              <div className="absolute inset-0 flex items-center justify-center bg-cyan-600">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.1s]"></div>
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
                </div>
              </div>
            )}
          </button>
          
          {isSubmitting && (
            <div className="mt-4 p-3 bg-slate-950/80 border border-cyan-500/20 rounded-lg mono text-[10px] text-cyan-400 space-y-1">
              {transmissionLog.map((log, i) => (
                <div key={i} className="flex gap-2">
                  <span className="opacity-50">[{i+1}]</span>
                  <span>{log}</span>
                </div>
              ))}
              <div className="animate-pulse">_CURSOR_IDLE_BYPASS_ACTIVE...</div>
            </div>
          )}
        </form>
      </ScrollFade>
      
      <ScrollFade className="mt-24 text-center">
        <div className="text-4xl md:text-6xl font-bold opacity-5 select-none mono tracking-tighter italic">ANAS_PORTFOLIO_SYSTEM</div>
        <p className="text-[10px] text-slate-700 mono mt-8 uppercase tracking-[0.2em]">© 2024 ANAS // DATA ANALYST & POWER BI EXPERT</p>
      </ScrollFade>
    </section>
  );
};

export default Contact;
