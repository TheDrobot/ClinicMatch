import React, { useState, useRef } from 'react';
import { CheckCircleIcon, UploadCloudIcon, FileTextIcon, ShieldCheckIcon, LinkedinIcon, LockIcon } from './Icons';

const SignUpForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate secure upload and encryption process
    setTimeout(() => setStatus('success'), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  if (status === 'success') {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-slate-900 rounded-2xl border border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-500/10 animate-pulse"></div>
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/30 relative z-10">
            <CheckCircleIcon className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white relative z-10">Profilo in Revisione</h3>
        <p className="text-slate-400 mt-2 text-sm relative z-10 max-w-xs mx-auto">Il tuo CV è stato crittografato e inviato al team di validazione. Riceverai un esito entro 24h.</p>
        <button className="mt-8 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full text-sm font-medium transition-colors border border-slate-700 relative z-10">
            Torna alla Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 relative overflow-hidden h-full">
      {/* Premium Border Effect */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500"></div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
            <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded border border-blue-200 tracking-wider uppercase">Application</span>
            <div className="flex items-center gap-1 text-slate-400 text-xs">
                <LockIcon className="w-3 h-3" />
                <span>Secure SSL</span>
            </div>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Candidatura Partner</h3>
        <p className="text-slate-500 text-sm mt-1">Compila per accedere al matching riservato.</p>
      </div>

      {/* LinkedIn "Magic" Button */}
      <button type="button" className="w-full bg-[#0077b5] hover:bg-[#006396] text-white rounded-xl px-4 py-3 flex items-center justify-center gap-3 transition-all mb-6 shadow-lg shadow-blue-900/10 group">
        <LinkedinIcon className="w-5 h-5 fill-current" />
        <span className="font-medium text-sm">Importa dati da LinkedIn</span>
        <span className="bg-white/20 text-xs px-2 py-0.5 rounded ml-auto group-hover:bg-white/30 transition-colors">Consigliato</span>
      </button>

      <div className="flex items-center gap-4 mb-6">
        <div className="h-px bg-slate-200 flex-1"></div>
        <span className="text-xs text-slate-400 font-medium uppercase">Oppure manuale</span>
        <div className="h-px bg-slate-200 flex-1"></div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5 relative">
        {status === 'submitting' && (
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center rounded-xl">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-slate-600 font-medium text-sm animate-pulse">Crittografia dati in corso...</p>
            </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase">Nome</label>
            <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" placeholder="Mario" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase">Cognome</label>
            <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" placeholder="Rossi" />
          </div>
        </div>
        
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 uppercase">Email Professionale</label>
          <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" placeholder="mario.rossi@esempio.it" />
        </div>

        {/* Premium Upload Area */}
        <div className="space-y-1">
           <label className="text-xs font-bold text-slate-700 uppercase flex justify-between">
               <span>Curriculum Vitae</span>
               {fileName && <span className="text-green-600 text-[10px]">Pronto all'invio</span>}
           </label>
           <div 
             className={`group border-2 border-dashed rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 ${fileName ? 'border-green-500 bg-green-50' : 'border-slate-300 hover:border-blue-400 hover:bg-blue-50'}`}
             onClick={() => fileInputRef.current?.click()}
           >
             <input 
               type="file" 
               ref={fileInputRef} 
               className="hidden" 
               accept=".pdf,.doc,.docx" 
               onChange={handleFileChange}
               required
             />
             {fileName ? (
               <div className="flex items-center gap-3 w-full">
                 <div className="p-2 bg-white rounded-lg shadow-sm text-green-600"><FileTextIcon className="w-6 h-6" /></div>
                 <div className="text-left flex-1 overflow-hidden">
                    <p className="text-sm font-bold text-slate-800 truncate">{fileName}</p>
                    <p className="text-[10px] text-slate-500">Documento protetto</p>
                 </div>
                 <div className="text-green-600"><CheckCircleIcon className="w-5 h-5" /></div>
               </div>
             ) : (
               <>
                 <div className="p-3 bg-slate-100 rounded-full mb-2 group-hover:scale-110 transition-transform">
                    <UploadCloudIcon className="w-5 h-5 text-slate-500" />
                 </div>
                 <span className="text-sm font-medium text-slate-600 group-hover:text-blue-700">Trascina il CV o clicca</span>
               </>
             )}
           </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
           <div className="mt-0.5">
             <input type="checkbox" required id="privacy" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer w-4 h-4" />
           </div>
           <label htmlFor="privacy" className="text-[11px] text-slate-500 leading-snug cursor-pointer select-none">
             Autorizzo il trattamento in <strong>modalità "Blind"</strong>. I miei dati saranno rivelati agli studi dentistici solo previa mia esplicita approvazione.
           </label>
        </div>

        <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
          <span>Invia Candidatura</span>
          <ShieldCheckIcon className="w-5 h-5 text-blue-400" />
        </button>

        <p className="text-center text-[10px] text-slate-400">
            Unisciti a +1.200 manager verificati
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;