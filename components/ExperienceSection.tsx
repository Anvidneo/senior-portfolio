
import React from 'react';
import { EXPERIENCES, GET_ICON } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Experiencia Profesional</h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </div>

        <div className="space-y-12 relative before:absolute before:left-[17px] before:top-4 before:bottom-0 before:w-px before:bg-slate-800">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-12">
              <div className="absolute left-0 top-1 p-2 bg-blue-600 rounded-full text-white ring-8 ring-slate-950">
                {GET_ICON('Briefcase')}
              </div>
              <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-colors group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                    <p className="text-blue-500 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-slate-500 font-medium">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <div className="mt-1 text-blue-500">
                        {GET_ICON('CheckCircle2')}
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
