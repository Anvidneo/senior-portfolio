
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual de Juan David Botero Cabrera, un Full-Stack Engineer senior con 6+ años de experiencia.
Tu objetivo es responder preguntas sobre su trayectoria, habilidades y proyectos basándote en su CV.

PERFIL DE JUAN:
- Ubicación: Medellín, Colombia.
- Stack principal: JavaScript (Node.js, NestJS, React, React Native), PHP (Laravel).
- Cloud: GCP, Docker, Jenkins.
- Especialidades: Microservicios, Clean Code, SOLID, Transición Legacy a Microservicios.
- Mentoría: Ha capacitado personal en React Native y GCP.
- Soft Skills: Liderazgo técnico, resolución de problemas complejos.

REGLAS DE RESPUESTA:
1. Sé EXTREMADAMENTE CONCISO. Máximo 2 o 3 oraciones por respuesta.
2. Usa un tono profesional pero directo.
3. No divagues sobre salarios o compensaciones; si preguntan, sugiere contactar directamente a Juan para discutir detalles.
4. Responde siempre en ESPAÑOL.
5. Puedes usar negritas (**texto**) para resaltar puntos clave.
`;

export const getAIResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.5,
      },
    });

    return response.text || "Lo siento, tuve un problema procesando tu mensaje.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error al conectar con el asistente. Por favor, usa LinkedIn.";
  }
};
