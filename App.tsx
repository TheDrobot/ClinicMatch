import React, { useState, useEffect } from 'react';
import Card, { BentoGrid } from './components/BentoGrid';
import { BriefcaseIcon, TrendingUpIcon, UsersIcon, SearchIcon, ShieldCheckIcon, StarIcon, ActivityIcon, ArrowRightIcon, LockIcon, CheckCircleIcon, XCircleIcon, ChevronDownIcon, BarChartIcon, LogoTooth, LogoMedical, LogoShield, MapPinIcon, BanknoteIcon, EyeOffIcon, BellIcon, SparklesIcon, FileTextIcon } from './components/Icons';
import GeminiAdvisor from './components/GeminiAdvisor';
import SignUpForm from './components/SignUpForm';

// Live Ticker Component
const LiveTicker = () => {
  const [activity, setActivity] = useState("Studio a Milano cerca Clinic Manager (Senior)");
  
  useEffect(() => {
    const activities = [
      "Studio a Milano cerca Clinic Manager (Senior)",
      "Mario R. ha appena ricevuto 2 proposte",
      "Nuova posizione aperta: Torino, €45k/anno",
      "Studio a Roma cerca Manager per Ristrutturazione",
      "Laura B. ha accettato un incarico a Bologna"
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % activities.length;
      setActivity(activities[i]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 text-white py-2 text-xs font-medium overflow-hidden whitespace-nowrap border-b border-slate-800 flex justify-center items-center relative z-50">
       <div className="flex items-center gap-2 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-slate-400 uppercase tracking-widest text-[10px]">Live:</span>
          <span>{activity}</span>
       </div>
    </div>
  );
};

// Partner Logos Component
const PartnerLogos = () => (
  <div className="w-full bg-white border-y border-slate-100 py-8 overflow-hidden">
    <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Fidato dai migliori studi odontoiatrici</p>
    <div className="flex justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
       <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><LogoTooth className="w-8 h-8" /> DentalPro Elite</div>
       <div className="flex items-center gap-2 font-bold text-xl text-slate-800 hidden sm:flex"><LogoMedical className="w-8 h-8" /> MedClinics</div>
       <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><LogoShield className="w-8 h-8" /> OrthoGuard</div>
       <div className="flex items-center gap-2 font-bold text-xl text-slate-800 hidden md:flex"><StarIcon className="w-8 h-8" /> StarSmile</div>
    </div>
  </div>
);

// FAQ Component
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-6 flex items-center justify-between text-left hover:text-blue-600 transition-colors group"
      >
        <span className="font-bold text-slate-900 group-hover:text-blue-700 text-lg">{question}</span>
        <ChevronDownIcon className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 mb-6' : 'max-h-0'}`}>
        <p className="text-slate-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// Sticky Mobile CTA
const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-50 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
    <a href="#join" className="block w-full bg-slate-900 text-white text-center font-bold py-3 rounded-xl shadow-lg">
      Candidati Ora
    </a>
  </div>
);

const App: React.FC = () => {
  const steps = [
    { num: "01", title: "Candidatura Blind", desc: "Carica il CV. I tuoi dati sensibili restano oscurati." },
    { num: "02", title: "Algoritmo Matching", desc: "La nostra AI ti propone solo agli studi ideali per te." },
    { num: "03", title: "Tu Decidi", desc: "Rivela la tua identità solo se l'offerta ti interessa." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900 pb-20 md:pb-0">
      <LiveTicker />
      
      {/* Navbar */}
      <nav className="sticky top-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-b border-slate-200 z-40 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-950 rounded-xl flex items-center justify-center shadow-lg shadow-slate-900/10">
              <span className="text-white font-bold text-xl font-mono">CM</span>
            </div>
            <div className="leading-none">
                <span className="block text-lg font-bold text-slate-900 tracking-tight">ClinicMatch</span>
                <span className="block text-[10px] text-slate-500 font-medium tracking-widest uppercase">Italia</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#process" className="hover:text-slate-900 transition-colors">Come Funziona</a>
            <a href="#benefits" className="hover:text-slate-900 transition-colors">Vantaggi</a>
            <a href="#salary" className="hover:text-slate-900 transition-colors">Stipendi</a>
            <a href="#reviews" className="hover:text-slate-900 transition-colors">Testimonianze</a>
          </div>
          <a href="#join" className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-slate-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 hover:bg-slate-800">
            Accesso Partner
            <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-24 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-50 to-transparent rounded-[100%] blur-3xl -z-10 opacity-60"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <ShieldCheckIcon className="w-4 h-4 text-green-500" />
            PIATTAFORMA CERTIFICATA PER MANAGER SANITARI
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tighter mb-8 leading-[1.05]">
            La tua carriera, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">finalmente gestita.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Il primo ecosistema digitale che connette <strong>Top Clinic Manager</strong> con studi dentistici d'eccellenza. 
            <span className="block mt-2 text-slate-900 font-medium">Nessun annuncio pubblico. Solo opportunità verificate.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#join" className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/30 transform hover:-translate-y-1 flex items-center justify-center gap-3">
              <BriefcaseIcon className="w-5 h-5" />
              Invia Candidatura
            </a>
            <div className="flex items-center gap-4 px-6 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
               <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">
                       {i === 3 ? '+' : ''}
                    </div>
                  ))}
               </div>
               <div className="text-left">
                  <div className="text-xs text-slate-500 font-medium">Manager attivi</div>
                  <div className="text-sm font-bold text-slate-900">1,240+</div>
               </div>
            </div>
          </div>
        </div>
      </header>

      <PartnerLogos />

      {/* Salary Comparison Section (Psychological Anchor) */}
      <section id="salary" className="py-24 bg-slate-900 text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div>
                  <div className="inline-flex items-center gap-2 text-yellow-400 font-bold tracking-widest uppercase text-xs mb-4">
                     <BarChartIcon className="w-4 h-4" />
                     Dati Reali 2024
                  </div>
                  <h2 className="text-4xl font-bold mb-6 leading-tight">Il tuo valore di mercato è <span className="text-blue-400">più alto</span> di quanto pensi.</h2>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                     I manager che si affidano al passaparola accettano stipendi mediocri. Chi usa ClinicMatch accede a budget riservati non pubblicati su Indeed o LinkedIn.
                  </p>
                  <a href="#join" className="text-white border-b border-white/30 pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors font-medium">
                     Verifica il tuo potenziale &rarr;
                  </a>
               </div>
               <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-8">RAL Media Annua (Lorda)</h3>
                  
                  {/* Chart Item 1 */}
                  <div className="mb-8">
                     <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">Mercato Tradizionale</span>
                        <span className="text-slate-400 font-mono">€32.000</span>
                     </div>
                     <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-500 w-[60%] rounded-full"></div>
                     </div>
                  </div>

                  {/* Chart Item 2 */}
                  <div className="relative">
                     <div className="flex justify-between text-sm mb-2">
                        <span className="text-white font-bold">ClinicMatch Partner</span>
                        <span className="text-green-400 font-bold font-mono">€52.000</span>
                     </div>
                     <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-green-400 w-[92%] rounded-full relative shadow-[0_0_20px_rgba(74,222,128,0.5)]">
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                     </div>
                     <div className="absolute -right-2 -top-10 bg-green-500 text-slate-900 text-xs font-bold px-2 py-1 rounded transform rotate-3">
                        +62%
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">Come funziona il Blind Recruiting</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">Invertiamo le regole. Tu sei la risorsa preziosa, lo studio deve conquistarti.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 z-0"></div>
              {steps.map((step, idx) => (
                <div key={idx} className="relative z-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center group">
                   <div className="w-24 h-24 mx-auto bg-slate-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl font-bold text-slate-300 group-hover:text-blue-600 transition-colors">{step.num}</span>
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                   <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Ideal Candidate Selection (The Velvet Rope) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
         <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-slate-900">È per te?</h2>
               <p className="text-slate-500 mt-2">Non accettiamo tutti. La qualità del network è la nostra priorità.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
               {/* Who we want */}
               <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-lg shadow-green-900/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                  <div className="flex items-center gap-3 mb-6">
                     <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircleIcon className="w-6 h-6 text-green-600" />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900">Chi Cerchiamo</h3>
                  </div>
                  <ul className="space-y-4">
                     {['Esperienza pregressa in gestione team', 'Focus su KPI e fatturato', 'Ambizione di crescita economica', 'Disponibilità a formarsi'].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                           <CheckCircleIcon className="w-5 h-5 text-green-500 shrink-0" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Who we don't want */}
               <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-sm opacity-80 hover:opacity-100 transition-opacity relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-slate-200"></div>
                  <div className="flex items-center gap-3 mb-6">
                     <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                        <XCircleIcon className="w-6 h-6 text-slate-400" />
                     </div>
                     <h3 className="text-xl font-bold text-slate-500">Chi NON Cerchiamo</h3>
                  </div>
                  <ul className="space-y-4">
                     {['Chi cerca solo un "posto fisso"', 'Chi non usa strumenti digitali', 'Chi non vuole responsabilità sui risultati', 'Segretarie senza ruolo manageriale'].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                           <XCircleIcon className="w-5 h-5 text-slate-300 shrink-0" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Bento Features */}
      <section id="benefits" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
          <div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900">L'ecosistema per il Manager Moderno</h2>
             <p className="text-slate-500 mt-2">Strumenti e network per accelerare la tua crescita professionale.</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 shadow-sm animate-pulse">
             <ActivityIcon className="w-4 h-4" />
             <span>Algoritmo Matching v2.4 attivo</span>
          </div>
        </div>

        <BentoGrid>
          {/* Card 1: Privacy Visualized (Top Left) */}
          <Card 
            title="Privacy 'Blind' Shield" 
            description="Nessuno vedrà il tuo nome o la tua foto finché non approvi la richiesta di contatto."
            className="md:col-span-1 bg-white overflow-hidden"
            icon={<LockIcon className="w-6 h-6 text-slate-700" />}
          >
             <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 relative group cursor-default">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden relative">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mario" className="w-full h-full blur-[4px] group-hover:blur-0 transition-all duration-500 opacity-60" alt="blur" />
                      <div className="absolute inset-0 flex items-center justify-center group-hover:hidden">
                         <EyeOffIcon className="w-4 h-4 text-slate-500" />
                      </div>
                   </div>
                   <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="h-2.5 bg-slate-200 rounded w-16 group-hover:bg-slate-800 transition-colors relative overflow-hidden">
                          <div className="absolute inset-0 bg-slate-300/50 w-full group-hover:hidden"></div>
                      </div>
                      <div className="h-2 bg-slate-100 rounded w-24"></div>
                   </div>
                   <div className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                      Visible
                   </div>
                </div>
             </div>
          </Card>

          {/* Card 2: Main Visual - Smart Matching V2 (Top Center/Right) */}
          <Card 
            title="Smart Matching in Tempo Reale" 
            description="L'IA analizza 20+ parametri (skill, RAL, valori) per proporti solo studi compatibili."
            className="md:col-span-2 md:row-span-2 min-h-[340px] bg-slate-900 text-white border-slate-800 relative group overflow-hidden"
            icon={<SearchIcon className="w-6 h-6 text-blue-400" />}
          >
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.5)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)] z-0 pointer-events-none"></div>

            <div className="mt-6 relative z-10 h-56 flex items-center justify-center">
                {/* Scanning Circle Animation */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="w-40 h-40 border border-blue-500/20 rounded-full animate-[ping_3s_linear_infinite]"></div>
                   <div className="w-60 h-60 border border-blue-500/10 rounded-full animate-[ping_3s_linear_infinite_1s]"></div>
                </div>

                {/* Match Card (Pops up) */}
                <div className="w-full max-w-[280px] bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-2xl p-4 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
                   
                   <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                         <SparklesIcon className="w-3 h-3" />
                         94% Match
                      </div>
                      <BellIcon className="w-4 h-4 text-slate-400" />
                   </div>

                   <div className="space-y-3">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-900 font-bold shadow-sm">
                            <LogoTooth className="w-6 h-6" />
                         </div>
                         <div>
                            <div className="text-sm font-bold text-white">Studio Associato Elite</div>
                            <div className="text-[10px] text-slate-400 flex items-center gap-1">
                               <MapPinIcon className="w-3 h-3" /> Milano Centro
                            </div>
                         </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                         <div className="bg-slate-700/50 rounded p-2">
                            <div className="text-slate-400 mb-0.5">Offerta RAL</div>
                            <div className="font-mono font-bold text-white">€55.000</div>
                         </div>
                         <div className="bg-slate-700/50 rounded p-2">
                            <div className="text-slate-400 mb-0.5">Bonus</div>
                            <div className="font-bold text-green-400">+15% Perf.</div>
                         </div>
                      </div>

                      <div className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2 rounded-lg text-center cursor-pointer transition-colors">
                         Accetta Richiesta
                      </div>
                   </div>
                </div>
            </div>
          </Card>

          {/* Card 3: Community (Top Right) */}
          <Card 
            title="Network Esclusivo" 
            description="Entra nella Top 5% dei Manager italiani. Condividi best practice e strategie."
            className="md:col-span-1"
            icon={<UsersIcon className="w-6 h-6 text-purple-600" />}
          />

          {/* AI Advisor (Middle/Bottom Left - Spans 2 Rows) */}
          <div className="md:col-span-1 md:row-span-2 h-full">
            <GeminiAdvisor />
          </div>

          {/* Card 5: New 'Safe Contracts' (Middle Right) - Fills the gap */}
          <Card 
            title="Contratti Verificati" 
            description="Tutela legale inclusa. Modelli standard approvati per Temporary Management."
            className="md:col-span-1"
            icon={<FileTextIcon className="w-6 h-6 text-slate-700" />}
          />

          {/* Card 6: Stats - Enhanced Chart (Bottom Center/Right - Spans 3 Cols) */}
          <Card 
            title="Analisi Retributiva" 
            description="Monitora il tuo valore di mercato rispetto alla media nazionale."
            className="md:col-span-3"
            icon={<TrendingUpIcon className="w-6 h-6 text-green-600" />}
          >
             <div className="mt-4 h-32 relative flex items-end justify-between gap-2 px-2 border-b border-slate-100 pb-1">
                {/* Data Bars */}
                <div className="w-full bg-slate-100 rounded-t relative group h-[40%] hover:bg-slate-200 transition-colors mx-1">
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 opacity-0 group-hover:opacity-100">30k</div>
                </div>
                <div className="w-full bg-slate-100 rounded-t relative group h-[55%] hover:bg-slate-200 transition-colors mx-1">
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 opacity-0 group-hover:opacity-100">42k</div>
                </div>
                <div className="w-full bg-slate-200 rounded-t relative group h-[70%] hover:bg-slate-300 transition-colors mx-1">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 opacity-0 group-hover:opacity-100">50k</div>
                </div>
                {/* YOU Bar */}
                <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t relative group h-[90%] shadow-lg shadow-blue-500/20 mx-1">
                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap shadow-sm">
                      Tu: 65k
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                   </div>
                </div>
                
                {/* Trend Line (SVG Overlay) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none">
                   <path d="M10 80 Q 200 70, 400 40 T 800 10" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" className="opacity-50" />
                   <circle cx="800" cy="10" r="3" className="fill-green-500 animate-ping" />
                   <circle cx="800" cy="10" r="3" className="fill-green-500" />
                </svg>
             </div>
          </Card>
        </BentoGrid>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white border-b border-slate-100">
         <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-12">
               <div className="flex text-yellow-400 gap-1 mb-4">
                  {[...Array(5)].map((_,i) => <StarIcon key={i} className="w-6 h-6 fill-current" />)}
               </div>
               <h3 className="text-2xl font-bold text-slate-900">"La svolta professionale che cercavo"</h3>
               <p className="text-slate-500 mt-4 italic text-lg max-w-2xl">
                 "Ero scettico sull'efficacia di una piattaforma verticale. Mi sono ricreduto quando, dopo 3 giorni dal caricamento del CV, ho ricevuto una proposta da uno studio storico di Milano che cercava esattamente la mia specializzazione."
               </p>
               <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                     <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full" />
                  </div>
                  <div className="text-left">
                     <div className="font-bold text-slate-900">Dott. Gianluca M.</div>
                     <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Clinic Manager • Milano</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
           <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Domande Frequenti</h2>
           <div className="space-y-2">
              <FAQItem 
                question="È davvero gratuito per i manager?" 
                answer="Sì, al 100%. Il nostro modello di business prevede che siano gli studi dentistici a pagare una fee di successo solo quando assumono un candidato. Tu non pagherai mai nulla." 
              />
              <FAQItem 
                question="Il mio attuale datore di lavoro può vedermi?" 
                answer="Assolutamente no. Il profilo è totalmente anonimo (Blind). Nessuno vede il tuo nome, foto o azienda attuale finché TU non accetti una richiesta di contatto." 
              />
              <FAQItem 
                question="Che tipo di studi ci sono sulla piattaforma?" 
                answer="Selezioniamo solo studi con un fatturato minimo e una struttura organizzata. Non lavoriamo con piccoli studi monoprofessionali che cercano segretarie tuttofare, ma con cliniche che cercano veri manager." 
              />
           </div>
        </div>
      </section>

      {/* Form Section - Dark Theme */}
      <section id="join" className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
           <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold tracking-wide uppercase">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                 </span>
                 Candidature Aperte
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                 Entra nell'Elite del <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Management Dentale</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                 Compila il modulo per accedere alla Waiting List prioritaria. I profili completi ricevono le prime proposte entro 48 ore.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                 <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <div className="text-2xl font-bold text-white mb-1">100%</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Gratuito per Manager</div>
                 </div>
                 <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <div className="text-2xl font-bold text-white mb-1">24h</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Tempo medio risposta</div>
                 </div>
              </div>

              <div className="flex items-center gap-4 pt-4 opacity-70">
                 <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700"></div>
                    ))}
                 </div>
                 <div className="text-xs text-slate-400">Unisciti a 1,200+ colleghi</div>
              </div>
           </div>

           <div className="h-full">
              <SignUpForm />
           </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-12 border-t border-slate-900 text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
           <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-white rounded flex items-center justify-center text-slate-950 font-bold text-xs">C</div>
              <span className="text-white font-semibold">ClinicMatch</span>
           </div>
           <div className="flex gap-6 text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Termini di Servizio</a>
              <a href="#" className="hover:text-white transition-colors">Contattaci</a>
           </div>
           <div className="text-slate-500">
             © {new Date().getFullYear()} ClinicMatch Italia. Tutti i diritti riservati.
           </div>
        </div>
      </footer>
      <StickyMobileCTA />
    </div>
  );
};

export default App;