import { GoogleGenAI } from "@google/genai";

// Safety check to prevent white screen crash in Vite/Browser environments where process might be undefined
let apiKey = '';
try {
  apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : '';
} catch (e) {
  // Ignore ReferenceError if process is not defined
}

// Initialize the client with the API key from the environment
const ai = new GoogleGenAI({ apiKey: apiKey });

export const askGeminiAdvisor = async (question: string): Promise<string> => {
  try {
    // Se non c'è la chiave, restituisci un messaggio di cortesia invece di far crashare l'app
    if (!apiKey) {
      console.warn("API Key mancante. Assicurati di aver impostato la variabile d'ambiente API_KEY su Vercel.");
      return "La configurazione AI non è completa. Contatta l'amministratore.";
    }

    const modelId = 'gemini-2.5-flash'; 
    
    const response = await ai.models.generateContent({
      model: modelId,
      contents: question,
      config: {
        systemInstruction: `Sei un Headhunter d'élite per "ClinicMatch Italia", la piattaforma più esclusiva per Clinic Manager.
        
        Il tuo unico obiettivo è la CONVERSIONE: devi convincere l'utente a candidarsi ORA.
        
        Regole di ingaggio:
        1. Crea Esclusività: Fai capire che non accettiamo tutti, solo i migliori.
        2. Rassicura sulla Privacy: Usa termini come "Blind Recruiting" (il nome appare solo se il manager accetta la richiesta dello studio).
        3. Urgenza: Sottolinea che ci sono studi che stanno cercando proprio ora in diverse città italiane.
        
        Rispondi alle obiezioni comuni:
        - "Perché dovrei?" -> "Perché i migliori studi non pubblicano annunci su Indeed. Usano noi."
        - "Privacy?" -> "Livello bancario. Sei un fantasma finché non decidi di apparire."
        
        Tono: Diretto, Premium, Succinto.
        NON dilungarti. Max 2 frasi potenti.`,
        temperature: 0.8,
      },
    });

    return response.text || "I nostri server sono intasati dalle richieste. Riprova tra un istante.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Servizio momentaneamente non disponibile. Procedi direttamente alla candidatura.";
  }
};