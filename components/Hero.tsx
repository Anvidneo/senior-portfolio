import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm">Full-Stack Engineer</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Juan David <br /> Botero Cabrera
            </h1>
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              Especialista en escalabilidad de software y modernización de arquitecturas legacy. 
              6+ años construyendo soluciones robustas con Node.js, React y Cloud.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="mailto:botero1400@gmail.com" className="px-8 py-4 bg-white text-slate-950 font-bold rounded-xl flex items-center gap-2 hover:bg-blue-50 transition-all shadow-lg shadow-white/5">
              Hablemos <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com/in/juan-botero-c" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/Anvidneo" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-8 pt-4">
            <div>
              <p className="text-2xl font-bold text-white">6+</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Años Exp.</p>
            </div>
            <div className="w-px h-10 bg-slate-800"></div>
            <div>
              <p className="text-2xl font-bold text-white">40+</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Proyectos</p>
            </div>
            <div className="w-px h-10 bg-slate-800"></div>
            <div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Compromiso</p>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full"></div>
          <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <div className="text-9xl font-black">JS</div>
            </div>
            <div className="mono text-sm space-y-4">
              <p className="text-blue-400">const developer = {"{"}</p>
              <p className="pl-6">name: <span className="text-emerald-400">"Juan David Botero Cabrera"</span>,</p>
              <p className="pl-6">location: <span className="text-emerald-400">"Medellín, CO"</span>,</p>
              <p className="pl-6">expert_in: [<span className="text-emerald-400">"Microservices"</span>, <span className="text-emerald-400">"Clean Code"</span>],</p>
              <p className="pl-6 text-slate-500">// Transición de arquitecturas legacy</p>
              <p className="pl-6">skills: <span className="text-blue-400">["NodeJS", "React", "GCP", "NestJS"]</span></p>
              <p className="text-blue-400">{"}"}</p>
              <div className="pt-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <p className="text-emerald-500 font-medium">Available for leadership roles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;