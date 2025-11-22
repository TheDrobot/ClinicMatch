import React, { useState } from 'react';
import { CrownIcon, CalculatorIcon, SlidersIcon, ClockIcon, CheckCircleIcon, XCircleIcon, ArrowRightIcon, GraduationCapIcon, BanknoteIcon } from './Icons';

interface BenefitsProps {
  onCtaClick: () => void;
}

const Benefits: React.FC<BenefitsProps> = ({ onCtaClick }) => {
  const [revenue, setRevenue] = useState(800000);
  const [growth, setGrowth] = useState(20);

  const baseSalary = 45000;
  const growthValue = revenue * (growth / 100);
  const bonus = growthValue * 0.05; // 5% del fatturato generato in più
  const totalComp = baseSalary + bonus;

  const formatCurrency = (val: number) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="animate-fade-in">
      {/* Hero Section: Identity Shift */}
      <section className="bg-slate-950 text-white pt-24 pb-20 relative overflow-hidden border-b border-slate-800">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
         <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-yellow-500/30">
               <CrownIcon className="w-4 h-4" />
               Career Upgrade
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
               Non sei un dipendente. <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">Sei un Partner.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
               Il modello "ClinicMatch" abbandona il concetto di stipendio fisso statico. 
               Colleghiamo i tuoi guadagni ai risultati che porti allo studio.
            </p>
         </div>
      </section>

      {/* Interactive Calculator: Skin in the Game */}
      <section className="py-24 bg-white">
         <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                     <CalculatorIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Calcola il tuo vero valore</h2>
                  <p className="text-slate-500 leading-relaxed mb-8">
                     Gli studi nel nostro network offrono contratti con "Revenue Share". 
                     Più fai crescere la clinica, più guadagni. Ecco una simulazione realistica basata sui nostri dati medi.
                  </p>
                  
                  <div className="space-y-8">
                     {/* Revenue Slider */}
                     <div>
                        <div className="flex justify-between mb-2">
                           <label className="text-sm font-bold text-slate-700">Fatturato Attuale Studio</label>
                           <span className="text-sm font-mono text-slate-500">{formatCurrency(revenue)}</span>
                        </div>
                        <input 
                           type="range" 
                           min="400000" 
                           max="2000000" 
                           step="50000" 
                           value={revenue}
                           onChange={(e) => setRevenue(parseInt(e.target.value))}
                           className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        />
                     </div>

                     {/* Growth Slider */}
                     <div>
                        <div className="flex justify-between mb-2">
                           <label className="text-sm font-bold text-slate-700">Tuo Impatto (Crescita %)</label>
                           <span className="text-sm font-mono text-blue-600 font-bold">+{growth}%</span>
                        </div>
                        <input 
                           type="range" 
                           min="5" 
                           max="50" 
                           step="1" 
                           value={growth}
                           onChange={(e) => setGrowth(parseInt(e.target.value))}
                           className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        />
                        <p className="text-xs text-slate-400 mt-2">Una gestione manageriale ottimizzata porta in media un +22% il primo anno.</p>
                     </div>
                  </div>
               </div>

               {/* Result Card */}
               <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl border border-slate-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                  
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Potenziale Compenso Annuo</h3>
                  
                  <div className="space-y-4 mb-8 border-b border-slate-800 pb-8">
                     <div className="flex justify-between items-center">
                        <span className="text-slate-400">Fisso Garantito</span>
                        <span className="font-mono text-lg">{formatCurrency(baseSalary)}</span>
                     </div>
                     <div className="flex justify-between items-center text-green-400">
                        <span className="flex items-center gap-2"><SlidersIcon className="w-4 h-4" /> Bonus Performance</span>
                        <span className="font-mono text-lg font-bold">+{formatCurrency(bonus)}</span>
                     </div>
                  </div>

                  <div className="flex justify-between items-end">
                     <span className="text-slate-400 text-sm">Totale Stimato</span>
                     <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                        {formatCurrency(totalComp)}
                     </span>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-slate-800/50">
                     <button onClick={onCtaClick} className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                        Candidati per questi standard <ArrowRightIcon className="w-4 h-4" />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* The Comparison: Old Way vs ClinicMatch */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">L'Evoluzione della Specie</h2>
            
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-200">
               <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 p-4 text-sm font-bold uppercase tracking-wider text-slate-500">
                  <div className="col-span-1">Parametro</div>
                  <div className="col-span-1 text-center text-red-400">Vecchio Modello</div>
                  <div className="col-span-1 text-center text-blue-600">Modello ClinicMatch</div>
               </div>

               {/* Rows */}
               {[
                  { label: "Ruolo", old: "Segretaria Evoluta", new: "Business Partner" },
                  { label: "Retribuzione", old: "Fisso basso + straordinari", new: "Fisso alto + % utili" },
                  { label: "Autonomia", old: "Esecutore di ordini", new: "Decision Maker" },
                  { label: "Orario", old: "Legato all'apertura studio", new: "Flessibile / Obiettivi" },
                  { label: "Formazione", old: "Autodidatta / Nulla", new: "Academy Inclusa" },
               ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors items-center">
                     <div className="font-bold text-slate-900">{row.label}</div>
                     <div className="text-center text-slate-500 flex justify-center items-center gap-2">
                        <XCircleIcon className="w-4 h-4 text-red-200 hidden md:block" /> {row.old}
                     </div>
                     <div className="text-center font-bold text-blue-900 flex justify-center items-center gap-2 bg-blue-50 py-1 rounded-lg mx-2">
                        <CheckCircleIcon className="w-4 h-4 text-blue-500 hidden md:block" /> {row.new}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Academy Section */}
      <section className="py-24 bg-white">
         <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="flex-1">
                  <div className="inline-block p-3 bg-purple-100 rounded-2xl mb-6">
                     <GraduationCapIcon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Non ti lasciamo solo.</h2>
                  <p className="text-lg text-slate-500 mb-8">
                     L'accesso a ClinicMatch include l'ingresso nella <strong>CM Academy</strong>. 
                     Colma il gap tra le tue competenze attuali e quelle richieste dagli studi top-tier.
                  </p>
                  <ul className="space-y-4">
                     {['Controllo di Gestione Avanzato', 'Leadership & HR Management', 'Marketing Sanitario Strategico'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                           <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-bold">{i+1}</div>
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="flex-1 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-3xl transform rotate-3 opacity-20"></div>
                  <div className="bg-slate-900 text-white p-8 rounded-3xl relative shadow-2xl border border-slate-800">
                     <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                        <span className="font-bold">Prossima Masterclass</span>
                        <span className="text-xs bg-purple-600 px-2 py-1 rounded font-bold">RISERVATA</span>
                     </div>
                     <h3 className="text-2xl font-bold mb-4">"Negoziare il Piano Incentivi con il Titolare"</h3>
                     <div className="flex items-center gap-4 text-slate-400 text-sm mb-8">
                        <span className="flex items-center gap-1"><ClockIcon className="w-4 h-4" /> 18:30 - 20:00</span>
                        <span>•</span>
                        <span>Live Zoom</span>
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                        <div>
                           <div className="text-sm font-bold">Dr. Marco B.</div>
                           <div className="text-xs text-slate-400">HR Director, DentalPro</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Benefits;