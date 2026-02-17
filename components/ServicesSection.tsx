
import React from 'react';
import { SERVICES, GET_ICON } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-500 font-semibold mb-4">¿Qué puedo hacer por tu equipo?</h2>
            <h3 className="text-4xl font-bold text-white mb-8 leading-tight">Soluciones empresariales <br /> de alta disponibilidad.</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Como Full-Stack Engineer con enfoque en liderazgo técnico, no solo escribo código; 
              diseño procesos y arquitecturas que permiten a las empresas escalar sin fricciones.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs">1</div>
                <span>Capacitación proactiva de personal</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs">2</div>
                <span>Refactorización de legacy a microservicios</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs">3</div>
                <span>Implementación de cultura Clean Code</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:bg-slate-800/50 transition-colors">
                <div className="text-blue-500 mb-4">
                  {GET_ICON(service.icon)}
                </div>
                <h4 className="text-white font-bold mb-2">{service.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
