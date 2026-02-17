
import React from 'react';
import { Experience, Skill, Service, SoftSkill, Education, Language } from './types';
import { 
  Code2, 
  Terminal, 
  Smartphone, 
  Cloud, 
  Database, 
  Users, 
  Briefcase, 
  CheckCircle2, 
  Layers,
  Cpu,
  Lightbulb,
  Clock,
  MessagesSquare,
  ShieldCheck,
  GraduationCap,
  Languages
} from 'lucide-react';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Domina Entrega Total S.A.',
    role: 'Desarrollador Full-Stack Semi-Senior',
    location: 'Medellin, Colombia',
    period: 'Febrero 2023 – Actualidad',
    description: [
      'Liderazgo en el desarrollo de aplicaciones móviles híbridas utilizando React Native con Expo.',
      'Diseño y ejecución de capacitaciones técnicas en React Native y GCP para el equipo.',
      'Modernización de sistemas legacy a microservicios con NestJS, Node.js y Laravel.',
      'Automatización de pruebas unitarias con Jest y gestión de ciclos CI/CD mediante Jenkins y Docker.'
    ]
  },
  {
    id: '2',
    company: 'Konecta',
    role: 'Desarrollador Full-Stack',
    location: 'Medellin, Colombia',
    period: 'Noviembre 2021 – Febrero 2023',
    description: [
      'Diseño e implementación de módulos robustos utilizando PHP (Yii) y JavaScript.',
      'Optimización de consultas complejas en PostgreSQL y DB2 para mejorar el rendimiento de reportes.',
      'Mantenimiento de pipelines en Jenkins para entregas continuas.',
      'Resolución de incidentes técnicos en aplicaciones de misión crítica.'
    ]
  },
  {
    id: '3',
    company: 'Mercadeo Virtual',
    role: 'Desarrollador Backend',
    location: 'Medellin, Colombia',
    period: 'Julio 2021 – Noviembre 2021',
    description: [
      'Creación y mantenimiento de APIs escalables con Node.js, .NET y GraphQL.',
      'Diseño y administración de esquemas en bases de datos SQL.',
      'Colaboración estrecha con Frontend para definición de contratos de API.'
    ]
  },
  {
    id: '4',
    company: 'Garantías Comunitarias',
    role: 'Desarrollador Web',
    location: 'Medellin, Colombia',
    period: 'Agosto 2020 – Abril 2021',
    description: [
      'Evolución de plataformas internas usando JavaScript y PHP.',
      'Administración de bases de datos MySQL, migraciones y optimizaciones.',
      'Implementación de flujos de trabajo eficientes utilizando Git.'
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Backend',
    items: ['Node.js', 'NestJS', 'TypeScript', 'PHP (Laravel, Yii, Zend)', '.NET']
  },
  {
    category: 'Frontend & Mobile',
    items: ['React', 'React Native', 'Expo', 'JavaScript (ES6+)']
  },
  {
    category: 'Infraestructura & DevOps',
    items: ['GCP', 'Docker', 'Jenkins', 'CI/CD', 'Git/GitHub']
  },
  {
    category: 'Bases de Datos',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'DB2', 'TypeORM']
  }
];

export const SOFT_SKILLS: SoftSkill[] = [
  {
    title: 'Liderazgo Técnico',
    description: 'Capacidad para dictar capacitaciones y realizar mentoría técnica (Mentoring).',
    icon: 'ShieldCheck'
  },
  {
    title: 'Resolución de Problemas',
    description: 'Enfoque analítico para abordar desafíos técnicos complejos y optimización de procesos.',
    icon: 'Lightbulb'
  },
  {
    title: 'Gestión del Tiempo',
    description: 'Planificación eficiente basada en metodologías ágiles y cumplimiento de entregables.',
    icon: 'Clock'
  },
  {
    title: 'Colaboración Proactiva',
    description: 'Trabajo en equipo con comunicación asertiva y adaptabilidad a entornos dinámicos.',
    icon: 'MessagesSquare'
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'Tecnólogo en análisis y desarrollo en sistemas de información',
    institution: 'SENA',
    location: 'Rionegro, Colombia',
    year: '2020'
  },
  {
    degree: 'Técnico en desarrollo de software',
    institution: 'I.E Román Gómez - SENA',
    location: 'Colombia',
    year: '2018'
  }
];

export const LANGUAGES_DATA: Language[] = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'B1' }
];

export const SERVICES: Service[] = [
  {
    title: 'Modernización Legacy',
    description: 'Transición de arquitecturas monolíticas a microservicios escalables bajo principios SOLID.',
    icon: 'Layers'
  },
  {
    title: 'Capacitación Técnica',
    description: 'Formación de equipos en React Native, infraestructura Cloud y mejores prácticas de código.',
    icon: 'Users'
  },
  {
    title: 'Desarrollo Mobile Híbrido',
    description: 'Apps multiplataforma de alto rendimiento con React Native y despliegue en tiendas.',
    icon: 'Smartphone'
  },
  {
    title: 'Arquitectura Cloud & CI/CD',
    description: 'Automatización de despliegues en GCP con Docker y pipelines de Jenkins.',
    icon: 'Cloud'
  }
];

export const GET_ICON = (name: string) => {
  switch (name) {
    case 'Layers': return <Layers className="w-6 h-6" />;
    case 'Users': return <Users className="w-6 h-6" />;
    case 'Smartphone': return <Smartphone className="w-6 h-6" />;
    case 'Cloud': return <Cloud className="w-6 h-6" />;
    case 'Briefcase': return <Briefcase className="w-5 h-5" />;
    case 'Database': return <Database className="w-5 h-5" />;
    case 'Code2': return <Code2 className="w-5 h-5" />;
    case 'CheckCircle2': return <CheckCircle2 className="w-4 h-4" />;
    case 'Cpu': return <Cpu className="w-6 h-6" />;
    case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
    case 'Lightbulb': return <Lightbulb className="w-6 h-6" />;
    case 'Clock': return <Clock className="w-6 h-6" />;
    case 'MessagesSquare': return <MessagesSquare className="w-6 h-6" />;
    case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
    case 'Languages': return <Languages className="w-6 h-6" />;
    default: return <Terminal className="w-5 h-5" />;
  }
};
