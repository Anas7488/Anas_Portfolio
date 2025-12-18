
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, RadarProps } from 'recharts';
import { SKILLS } from '../constants';
import ScrollFade from './ScrollFade';

const SkillMatrix: React.FC = () => {
  const data = SKILLS.map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100,
  }));

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <ScrollFade className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded bg-slate-800 text-cyan-400 text-xs mono mb-2">
            CORE_COMPETENCIES.JSON
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Analytics <br /><span className="text-cyan-400">Stack</span></h2>
          <p className="text-slate-400 text-lg">
            A specialized toolkit for end-to-end data intelligence: from ETL infrastructure (SSMS, Visual Studio) to advanced neural automation (Python, AI Agents).
          </p>
          
          <div className="grid grid-cols-2 gap-3 pt-4">
            {SKILLS.map((skill) => (
              <div 
                key={skill.name} 
                className="glass-panel p-3 rounded-lg border-l-2 border-l-cyan-500 transform transition-all duration-300 hover:translate-x-1 hover:bg-slate-800/40"
              >
                <div className="text-[10px] text-slate-500 mono uppercase">{skill.category}</div>
                <div className="text-sm font-bold truncate text-slate-200">{skill.name}</div>
                <div className="w-full bg-slate-800 h-1 mt-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-cyan-500 h-full transition-all duration-1000" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[500px] glass-panel rounded-2xl p-4 relative group">
          <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid stroke="#1e293b" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10 }} />
              <Radar
                name="Proficiency"
                dataKey="A"
                stroke="#06b6d4"
                fill="#06b6d4"
                fillOpacity={0.4}
                isAnimationActive={true}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </ScrollFade>
    </section>
  );
};

export default SkillMatrix;
