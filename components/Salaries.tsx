import React, { useState } from 'react';
import { WalletIcon, BarChartIcon, PiggyBankIcon, ArrowRightIcon, MapPinIcon, AwardIcon } from './Icons';

interface SalariesProps {
  onCtaClick: () => void;
}

const Salaries: React.FC<SalariesProps> = ({ onCtaClick }) => {
  const [seniority, setSeniority] = useState<'junior' | 'mid' | 'senior'>('mid');

  const data = {
    junior: { role: 'Junior (< 2 anni)', fixed: 28000, variable: 4000, welfare: 1500, traditional: 24000 },
    mid: { role: 'Mid (3-5 anni)', fixed: 42000, variable: 12000, welfare: 3500, traditional: 32000 },
    senior: { role: 'Senior (5+ anni)', fixed: 65000, variable: 30000, welfare: 8000, traditional: 45000 }
  };

  const current = data[seniority];
  const totalPackage = current.fixed + current.variable + current.welfare;
  const traditionalPackage = current.traditional;

  // Formatter
  const currency = (val: number) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);

  // Cost of Inertia Calculation (5 Years)
  const inertiaData = [1, 2, 3, 4, 5].map(year => {
    // Traditional grows 2% per year
    const trad = traditionalPackage * Math.pow(1.02, year);
    // ClinicMatch grows 8% per year (active management)
    const cm = totalPackage * Math.pow(1.08, year);
    return { year, trad, cm, gap: cm - trad };
  });

  const totalLoss = inertiaData.reduce((acc, curr) => acc + curr.gap, 0);

  return (
    <div className="animate-fade-in">
      {/* Hero Section - Dark & Bold */}
      <section className="bg-slate-950 text-white pt-24 pb-20 border-b border-slate-800 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-green-500/20">
               <WalletIcon className="w-4 h-4" />
               Osservatorio Retributivo 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
               La tua RAL è solo <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">la punta dell'Iceberg.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
               Nel mercato dentale tradizionale vedi solo lo stipendio base. 
               Nel network ClinicMatch, negoziamo pacchetti "Total Reward" che includono bonus, welfare ed equity.
            </p>
         </div>
      </section>

      {/* Interactive Radar & Iceberg */}
      <section className="py-24 bg-white">
         <div className="max-w-6xl mx-auto px-6">
            
            {/* Seniority Selector */}
            <div className="flex justify-center mb-16">
               <div className="bg-slate-100 p-1.5 rounded-full inline-flex">
                  {(['junior', 'mid', 'senior'] as const).map((level) => (
                     <button
                        key={level}
                        onClick={() => setSeniority(level)}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                           seniority === level 
                              ? 'bg-white text-slate-900 shadow-md' 
                              : 'text-slate-500 hover:text-slate-700'
                        }`}
                     >
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                     </button>
                  ))}
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
               
               {/* Left: The Iceberg Visualization */}
               <div className="relative h-[500px] w-full bg-gradient-to-b from-sky-100 to-blue-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                  {/* Water Surface Line */}
                  <div className="absolute top-[35%] left-0 right-0 h-0.5 bg-white/50 z-20">
                     <div className="absolute right-4 -top-8 text-white text-xs font-bold uppercase tracking-widest opacity-80">Livello del Mare (Visibile)</div>
                  </div>

                  {/* The Tip (Visible) */}
                  <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-48 h-48 bg-white/90 backdrop-blur-sm clip-triangle-top z-10 flex flex-col items-center justify-end pb-4 shadow-lg">
                     <div className="text-slate-500 text-xs font-bold uppercase mb-1">Stipendio Base</div>
                     <div className="text-slate-900 text-2xl font-bold">{currency(current.fixed)}</div>
                  </div>

                  {/* The Base (Underwater/Hidden) */}
                  <div className="absolute top-[36%] left-1/2 -translate-x-1/2 w-80 h-96 bg-white/20 backdrop-blur-md clip-triangle-bottom z-10 border-t border-white/30 flex flex-col items-center pt-12">
                     <div className="text-center space-y-6">
                        <div>
                           <div className="text-blue-100 text-xs font-bold uppercase mb-1">Bonus & MBO</div>
                           <div className="text-white text-3xl font-bold text-shadow">{currency(current.variable)}</div>
                        </div>
                        <div>
                           <div className="text-blue-100 text-xs font-bold uppercase mb-1">Welfare & Benefit</div>
                           <div className="text-white text-xl font-bold text-shadow">{currency(current.welfare)}</div>
                        </div>
                        <div className="pt-4 border-t border-white/10 w-full">
                           <div className="text-green-300 text-sm font-bold uppercase tracking-widest">Totale Reale</div>
                           <div className="text-green-400 text-4xl font-bold filter drop-shadow-lg">{currency(totalPackage)}</div>
                        </div>
                     </div>
                  </div>

                  {/* Decoration */}
                  <div className="absolute bottom-8 right-8 text-white/30 text-[100px] font-bold opacity-10 select-none">%</div>
               </div>

               {/* Right: Explanation */}
               <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">
                     Non guardare solo il fisso.
                  </h3>
                  <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                     Per un profilo <strong>{current.role}</strong>, il mercato tradizionale offre circa {currency(current.traditional)}. 
                     <br /><br />
                     Con ClinicMatch, accedi a una struttura retributiva evoluta. La parte sommersa (invisibile negli annunci standard) vale il <strong>{Math.round(((current.variable + current.welfare) / totalPackage) * 100)}%</strong> del tuo pacchetto totale.
                  </p>

                  <div className="space-y-4">
                     <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                           <AwardIcon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                           <div className="font-bold text-slate-900">Success Fee</div>
                           <div className="text-xs text-slate-500">% sugli utili generati per lo studio</div>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                           <PiggyBankIcon className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                           <div className="font-bold text-slate-900">Equity Plan</div>
                           <div className="text-xs text-slate-500">Opzione quote societarie per i Senior</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* The Cost of Inertia - Chart Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
         <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Il costo dell'Inerzia</h2>
               <p className="text-slate-500">Quanto ti costa rimanere dove sei nei prossimi 5 anni?</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
               <div className="flex items-end justify-between gap-4 h-80 pb-8 border-b border-slate-100 relative">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                     {[0, 1, 2, 3, 4].map(i => <div key={i} className="w-full h-px bg-slate-50"></div>)}
                  </div>

                  {inertiaData.map((d) => {
                     const maxVal = inertiaData[4].cm * 1.1;
                     const hTrad = (d.trad / maxVal) * 100;
                     const hCm = (d.cm / maxVal) * 100;
                     
                     return (
                        <div key={d.year} className="flex-1 flex flex-col justify-end gap-2 group relative h-full">
                           {/* Tooltip on Hover */}
                           <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                              Gap: {currency(d.gap)}
                           </div>

                           <div className="w-full flex gap-1 items-end h-full justify-center">
                              {/* Traditional Bar */}
                              <div style={{ height: `${hTrad}%` }} className="w-1/2 bg-slate-300 rounded-t-sm transition-all duration-500 group-hover:bg-slate-400"></div>
                              {/* ClinicMatch Bar */}
                              <div style={{ height: `${hCm}%` }} className="w-1/2 bg-blue-600 rounded-t-sm transition-all duration-500 group-hover:bg-blue-500 relative">
                                 {d.year === 5 && (
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-blue-600 font-bold text-xs bg-blue-50 px-2 py-1 rounded border border-blue-100 shadow-sm">
                                       {currency(d.cm)}
                                    </div>
                                 )}
                              </div>
                           </div>
                           <div className="text-center text-xs text-slate-400 font-medium mt-2">Anno {d.year}</div>
                        </div>
                     );
                  })}
               </div>
               
               <div className="mt-8 flex justify-between items-center">
                   <div className="flex gap-6">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                         <div className="w-3 h-3 bg-slate-300 rounded-sm"></div> Studio Tradizionale
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-900 font-bold">
                         <div className="w-3 h-3 bg-blue-600 rounded-sm"></div> ClinicMatch Partner
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Perdita Cumulativa</div>
                      <div className="text-2xl font-bold text-red-500">{currency(totalLoss)}</div>
                   </div>
               </div>
            </div>

            <div className="mt-12 text-center">
               <button onClick={onCtaClick} className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors shadow-xl inline-flex items-center gap-3">
                  Ferma le perdite. Candidati ora. <ArrowRightIcon className="w-5 h-5" />
               </button>
            </div>
         </div>
      </section>

      <style>{`
        .clip-triangle-top {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .clip-triangle-bottom {
          clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
          border-radius: 0 0 40px 40px;
        }
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
};

export default Salaries;