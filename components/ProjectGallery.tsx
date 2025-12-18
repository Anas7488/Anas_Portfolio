
import React from 'react';
import { PROJECTS } from '../constants';
import ScrollFade from './ScrollFade';

const ProjectGallery: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollFade className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">Case Studies</h2>
            <p className="text-slate-400">Deep dives into complex data challenges resolved through high-fidelity visualization.</p>
          </div>
          <div className="text-right mono text-xs text-slate-600">
            TOTAL_IMPACT_LOGGED: 24_SYSTEMS
          </div>
        </ScrollFade>

        <div className="grid lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ScrollFade key={project.id}>
              <div className="group glass-panel rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-950/80 text-cyan-400 text-[10px] mono rounded border border-cyan-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
                    {project.metrics.map(metric => (
                      <div key={metric.label}>
                        <div className="text-[10px] text-slate-500 mono uppercase">{metric.label}</div>
                        <div className="text-xl font-bold text-slate-200">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
