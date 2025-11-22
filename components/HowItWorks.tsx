
import React from 'react';
import { CheckCircleIcon, XCircleIcon, SearchIcon, UsersIcon, ShieldCheckIcon, ArrowRightIcon, ActivityIcon, DatabaseIcon, FingerprintIcon, ZapIcon, TargetIcon, EyeOffIcon } from './Icons';
import Card, { BentoGrid } from './BentoGrid';

interface HowItWorksProps {
  onCtaClick: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onCtaClick }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section - Manifesto Style */}
      <div className="bg-slate-950 text-white pt-20 pb-24 relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-900 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center md:text-left">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-green-500/30 bg-green-900/20 text-green-400 text-xs font-bold tracking-wide uppercase mb-6">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             Protocollo v2.4 Attivo
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                  Smetti di cercare. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Fatti trovare.</span>
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  Il recruiting tradizionale è rotto: CV ignorati, headhunter incompetenti e privacy a rischio. 
                  Abbiamo costruito un'alternativa scientifica.
                </p>
                <button 
                   onClick={onCtaClick}
                   className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                   Inizia il Protocollo
                </button>
             </div>
             
             {/* Visual Representation of the 'System' */}
             <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 transform rotate-3"></div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative shadow-2xl">
                   <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                      <div className="text-sm font-bold text-slate-300">Analisi Profilo</div>
                      <div className="text-xs text-green-400 font-mono">PROCESSING...</div>
                   </div>
                   <div className="space-y-4 font-mono text-xs">
                      <div className="flex justify-between">
                         <span className="text-slate-500">Hard Skills</span>
                         <div className="w-32 h-2 bg-slate-800 rounded overflow-hidden"><div className="h-full bg-blue-500 w-[85%]"></div></div>
                      </div>
                      <div className="flex justify-between">
                         <span className="text-slate-500">Soft Skills</span>
                         <div className="w-32 h-2 bg-slate-800 rounded overflow-hidden"><div className="h-full bg-purple-500 w-[92%]"></div></div>
                      </div>
                      <div className="flex justify-between">
                         <span className="text-slate-500">Exp. Value</span>
                         <div className="w-32 h-2 bg-slate-800 rounded overflow-hidden"><div className="h-full bg-green-500 w-[78%]"></div></div>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded border border-slate-700 text-center mt-4">
                         <span className="text-slate-400">Potenziale RAL Stimato</span>
                         <div className="text-xl font-bold text-white">€45k - €60k</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Anatomy of a Match - Bento Grid Explanation */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">L'Anatomia del Match Perfetto</h2>
               <p className="text-slate-500 max-w-2xl mx-auto">Non ci basiamo sulle parole chiave del CV. Il nostro algoritmo "DeepMatch" analizza 3 dimensioni fondamentali per garantirti proposte pertinenti.</p>
            </div>

            <BentoGrid>
               {/* Card 1: The Database */}
               <Card 
                  title="1. Dati Quantitativi"
                  description="Analizziamo i KPI che sai gestire: EBITDA margine, tasso di accettazione preventivi, saturazione poltrone."
                  className="md:col-span-2 bg-white"
                  icon={<DatabaseIcon className="w-6 h-6 text-blue-600" />}
               >
                  <div className="grid grid-cols-3 gap-2 mt-4">
                     <div className="bg-slate-50 p-2 rounded text-center border border-slate-100">
                        <div className="text-[10px] text-slate-400 uppercase">Fatturato</div>
                        <div className="font-bold text-slate-700">Target</div>
                     </div>
                     <div className="bg-slate-50 p-2 rounded text-center border border-slate-100">
                        <div className="text-[10px] text-slate-400 uppercase">Team</div>
                        <div className="font-bold text-slate-700">Size</div>
                     </div>
                     <div className="bg-slate-50 p-2 rounded text-center border border-slate-100">
                        <div className="text-[10px] text-slate-400 uppercase">Software</div>
                        <div className="font-bold text-slate-700">Stack</div>
                     </div>
                  </div>
               </Card>

               {/* Card 2: Soft Skills */}
               <Card 
                  title="2. DNA Manageriale"
                  description="Che tipo di leader sei? Autoritario o Empatico? Process-oriented o People-oriented? Ti abbiniamo solo a Titolari compatibili."
                  className="md:col-span-1 bg-white"
                  icon={<FingerprintIcon className="w-6 h-6 text-purple-600" />}
               />

               {/* Card 3: Values */}
               <Card 
                  title="3. Valori & Obiettivi"
                  description="Cerchi work-life balance o carriera aggressiva? Vuoi una clinica etica o una macchina da soldi? Il match culturale è tutto."
                  className="md:col-span-1 bg-white"
                  icon={<TargetIcon className="w-6 h-6 text-red-500" />}
               />

               {/* Card 4: The Result */}
               <Card 
                  title="Risultato: 94% Retention"
                  description="Grazie a questa analisi, il 94% dei nostri manager supera l'anno di lavoro nello studio assegnato (vs 60% media mercato)."
                  className="md:col-span-4 bg-slate-900 text-white border-slate-800"
                  icon={<ZapIcon className="w-6 h-6 text-yellow-400" />}
               >
                   <div className="w-full bg-slate-800 rounded-full h-4 mt-4 overflow-hidden">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full w-[94%] relative">
                         <div className="absolute right-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
                      </div>
                   </div>
               </Card>
            </BentoGrid>
         </div>
      </section>

      {/* The "Ghost Mode" Privacy Section */}
      <section className="py-24 bg-white border-y border-slate-200">
         <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="order-2 md:order-1">
                  <div className="inline-block p-3 bg-slate-100 rounded-2xl mb-6">
                     <EyeOffIcon className="w-8 h-8 text-slate-700" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Privacy "Ghost Mode"</h2>
                  <p className="text-slate-500 leading-relaxed mb-6">
                     Sappiamo che il mondo dentale è piccolo. Il tuo attuale datore di lavoro non deve sapere che ti stai guardando intorno.
                  </p>
                  <ul className="space-y-4">
                     <li className="flex items-start gap-3">
                        <ShieldCheckIcon className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-slate-700 text-sm"><strong>Hashing dei Dati:</strong> Il tuo nome e contatti sono criptati nel database.</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <ShieldCheckIcon className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-slate-700 text-sm"><strong>Foto Sfocata:</strong> La tua foto profilo appare con un blur gaussiano finché non dai l'ok.</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <ShieldCheckIcon className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-slate-700 text-sm"><strong>Blacklist Studi:</strong> Puoi indicare studi specifici (es. il tuo attuale) che non ti vedranno MAI.</span>
                     </li>
                  </ul>
               </div>

               {/* Interactive Privacy Demo Visual */}
               <div className="order-1 md:order-2 bg-slate-100 p-8 rounded-[30px] relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                     Vista Recruiter
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 mb-4 opacity-50 scale-95 origin-bottom">
                     {/* Stack effect card behind */}
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200 relative z-10">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-slate-200 rounded-full overflow-hidden relative">
                           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sara" className="blur-[6px] scale-110 w-full h-full" alt="Hidden" />
                           <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                              <EyeOffIcon className="w-6 h-6 text-white drop-shadow-md" />
                           </div>
                        </div>
                        <div>
                           <div className="h-4 w-32 bg-slate-200 rounded mb-2"></div>
                           <div className="h-3 w-24 bg-slate-100 rounded"></div>
                        </div>
                     </div>
                     <div className="space-y-3">
                        <div className="h-2 w-full bg-slate-100 rounded"></div>
                        <div className="h-2 w-[90%] bg-slate-100 rounded"></div>
                        <div className="h-2 w-[60%] bg-slate-100 rounded"></div>
                     </div>
                     <div className="mt-6 flex gap-3">
                        <div className="flex-1 py-2 bg-slate-100 rounded text-center text-xs font-bold text-slate-400 cursor-not-allowed">Contatta</div>
                        <div className="flex-1 py-2 bg-blue-600 rounded text-center text-xs font-bold text-white shadow-lg shadow-blue-500/30">Richiedi Accesso</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* The "No Ghosting" Guarantee */}
      <section className="py-20 bg-slate-950 text-white text-center">
         <div className="max-w-3xl mx-auto px-6">
            <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-8 border border-slate-700">
               <ActivityIcon className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold mb-6">La nostra promessa "Anti-Ghosting"</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
               Odiamo quando i recruiter spariscono. In ClinicMatch, ogni interazione ha un feedback garantito entro 48 ore. Se uno studio visualizza il tuo profilo, saprai sempre se è un "Sì", un "No" o un "Forse".
            </p>
            <button 
               onClick={onCtaClick}
               className="inline-flex items-center justify-center gap-2 text-blue-400 font-bold hover:text-white transition-colors text-lg"
            >
               Entra nel Network <ArrowRightIcon className="w-5 h-5" />
            </button>
         </div>
      </section>
    </div>
  );
};

export default HowItWorks;
