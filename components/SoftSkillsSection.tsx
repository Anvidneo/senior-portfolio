
import React from 'react';
import { SOFT_SKILLS, GET_ICON } from '../constants';

const SoftSkillsSection: React.FC = () => {
  return (
    <section id="soft-skills" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Habilidades Blandas</h2>
          <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl">
            Más allá del código, mi enfoque se centra en el crecimiento del equipo y la eficiencia operativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOFT_SKILLS.map((skill, idx) => (
            <div 
              key={idx} 
              className="group p-8 bg-slate-950 border border-slate-800 rounded-2xl hover:bg-slate-900 hover:border-indigo-500/30 transition-all flex gap-6"
            >
              <div className="flex-shrink-0 p-4 bg-indigo-600/10 rounded-xl text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all h-fit">
                {GET_ICON(skill.icon)}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{skill.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;
