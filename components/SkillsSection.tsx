
import React from 'react';
import { SKILLS, GET_ICON } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Stack Tecnológico</h2>
          <p className="text-slate-400">Herramientas y tecnologías que domino para crear productos de alta calidad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className="p-6 bg-slate-950 border border-slate-800 rounded-2xl hover:border-blue-500/30 transition-all group">
              <div className="mb-6 p-3 bg-blue-600/10 rounded-xl w-fit text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {skill.category === 'Backend' && GET_ICON('Cpu')}
                {skill.category === 'Frontend & Mobile' && GET_ICON('Smartphone')}
                {skill.category === 'Infraestructura & DevOps' && GET_ICON('Cloud')}
                {skill.category === 'Bases de Datos' && GET_ICON('Database')}
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-900 border border-slate-800 text-xs text-slate-400 rounded-full hover:border-slate-600 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
