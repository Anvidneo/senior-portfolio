import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import SoftSkillsSection from './components/SoftSkillsSection';
import EducationSection from './components/EducationSection';
import ServicesSection from './components/ServicesSection';
import AIAssistant from './components/AIAssistant';
import { Mail, Linkedin, Github } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section - bg-slate-900/50 (Alternated) */}
        <section id="about" className="py-24 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/20 to-slate-950 p-8 md:p-12 rounded-3xl border border-slate-800">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-white mb-6">Un enfoque orientado a resultados</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  Como <span className="text-white font-medium">Full-Stack Engineer</span> con más de 6 años de experiencia, 
                  me especializo en diseñar y escalar soluciones empresariales de alta disponibilidad. 
                  Mi fortaleza reside en la transición de arquitecturas legacy hacia microservicios bajo principios 
                  <span className="text-blue-400"> SOLID</span> y <span className="text-blue-400">Clean Code</span>.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Tengo una destacada capacidad para el liderazgo técnico, facilitando capacitaciones en 
                  React Native y Cloud, fomentando una cultura de calidad mediante pruebas automatizadas y revisiones de código.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ExperienceSection />
        <SkillsSection />
        <ServicesSection />
        <SoftSkillsSection />
        <EducationSection />
        
        {/* Final CTA / Footer - bg-slate-900/50 (Alternated) */}
        <footer className="py-20 px-6 border-t border-slate-900 bg-slate-900/50">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold text-white mb-8">¿Listo para escalar tu próximo proyecto?</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="mailto:botero1400@gmail.com" className="flex items-center gap-3 px-6 py-3 bg-slate-950 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors">
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="text-sm">botero1400@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/juan-botero-c" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-slate-950 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors">
                <Linkedin className="w-5 h-5 text-blue-500" />
                <span className="text-sm">/juan-botero-c</span>
              </a>
              <a href="https://github.com/Anvidneo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-slate-950 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors">
                <Github className="w-5 h-5 text-blue-500" />
                <span className="text-sm">github.com/Anvidneo</span>
              </a>
            </div>
            
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} Juan David Botero Cabrera. Hecho con React, Tailwind y Gemini AI.
            </p>
          </div>
        </footer>
      </main>

      <AIAssistant />
    </div>
  );
};

export default App;