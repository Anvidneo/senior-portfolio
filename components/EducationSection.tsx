
import React from 'react';
import { EDUCATION, LANGUAGES_DATA, GET_ICON } from '../constants';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Education Column */}
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-600/10 text-blue-500 rounded-xl">
                {GET_ICON('GraduationCap')}
              </div>
              <h2 className="text-3xl font-bold text-white">Educación</h2>
            </div>
            
            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-700 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white leading-tight">{edu.degree}</h3>
                    <span className="text-blue-500 font-mono text-sm whitespace-nowrap ml-4">{edu.year}</span>
                  </div>
                  <p className="text-slate-300 font-medium">{edu.institution}</p>
                  <p className="text-slate-500 text-sm mt-1">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-emerald-600/10 text-emerald-500 rounded-xl">
                {GET_ICON('Languages')}
              </div>
              <h2 className="text-3xl font-bold text-white">Idiomas</h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {LANGUAGES_DATA.map((lang, idx) => (
                <div key={idx} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex justify-between items-center group hover:border-emerald-500/30 transition-all">
                  <div>
                    <h4 className="text-white font-bold">{lang.name}</h4>
                  </div>
                  <div className="px-3 py-1 bg-emerald-600/10 text-emerald-500 text-xs font-bold rounded-full uppercase tracking-wider">
                    {lang.level}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-br from-indigo-900/20 to-slate-900 rounded-2xl border border-indigo-500/10">
              <p className="text-slate-400 text-xs leading-relaxed italic">
                "Continuamente mejorando mi nivel de inglés para colaborar de manera más efectiva en entornos globales."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
