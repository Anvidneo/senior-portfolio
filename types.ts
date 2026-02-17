
export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SoftSkill {
  title: string;
  description: string;
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
