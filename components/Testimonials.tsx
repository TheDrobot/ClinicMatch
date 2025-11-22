
import React, { useState, useEffect, useRef } from 'react';
import { PlayIcon, PauseIcon, MicrophoneIcon, CheckCircleIcon, ArrowRightIcon, QuoteIcon, StarIcon, ShieldCheckIcon } from './Icons';

interface TestimonialsProps {
  onCtaClick: () => void;
}

// I link ai file audio reali forniti
const audioFiles = {
  marco: "https://storage.googleapis.com/msgsndr/PaKmeuG36BwD3fiErQO2/media/6921c9c277eb5b10bc5400f2.wav",
  giulia: "https://storage.googleapis.com/msgsndr/PaKmeuG36BwD3fiErQO2/media/6921c9c2eb0382155728c410.wav",
  luca: "https://storage.googleapis.com/msgsndr/PaKmeuG36BwD3fiErQO2/media/6921c9c2b2d9126afea9fbd2.wav"
};

const AudioPlayer = ({ duration, name, role, audioUrl }: { duration: string, name: string, role: string, audioUrl: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(100);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Pause all other audios? For simplicity, just play this one.
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Audio playback prevented:", error);
            setIsPlaying(false);
          });
      }
    }
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-4 hover:border-blue-300 transition-colors">
      <audio ref={audioRef} src={audioUrl} preload="none" />
      <div className="flex items-center gap-4">
        <button 
          onClick={togglePlay}
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all shadow-lg flex-shrink-0 ${isPlaying ? 'bg-blue-600 scale-105' : 'bg-slate-900 hover:bg-slate-800'}`}
        >
          {isPlaying ? <PauseIcon className="w-5 h-5" /> : <PlayIcon className="w-5 h-5 ml-1" />}
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between text-xs text-slate-500 mb-1 font-bold">
            <span className="truncate pr-2">{name} • {role}</span>
            <span className="whitespace-nowrap">{duration}</span>
          </div>
          <div className="h-8 bg-slate-100 rounded-md relative overflow-hidden flex items-center px-2 gap-0.5 cursor-pointer" onClick={togglePlay}>
            {/* Waveform Visualization */}
            {[...Array(30)].map((_, i) => (
               <div 
                 key={i} 
                 className={`w-1 rounded-full transition-all duration-300 ${
                   i / 30 * 100 < progress ? 'bg-blue-500' : 'bg-slate-300'
                 }`}
                 style={{ 
                   height: isPlaying ? `${Math.random() * 60 + 20}%` : '30%',
                   opacity: i / 30 * 100 < progress ? 1 : 0.5
                 }}
               ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[10px] text-slate-400 bg-slate-50 px-2 py-1 rounded w-fit">
          <MicrophoneIcon className="w-3 h-3" />
          Audio Verificato
        </div>
        {isPlaying && <span className="text-[10px] text-blue-600 font-bold animate-pulse">Riproduzione in corso...</span>}
      </div>
    </div>
  );
};

const TransformationCard = ({ 
  before, after, name, id 
}: { 
  before: { role: string, salary: string, status: string }, 
  after: { role: string, salary: string, status: string },
  name: string,
  id: string
}) => (
  <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100 flex flex-col group hover:shadow-xl transition-shadow h-full">
     
     {/* BEFORE Section - Vertical Stack Top */}
     <div className="bg-slate-50 p-6 border-b border-slate-100 relative flex-1">
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-200"></div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Prima</div>
        
        <div className="space-y-3 opacity-70 grayscale group-hover:grayscale-0 transition-all duration-500">
           <div className="flex justify-between items-center border-b border-slate-200/50 pb-2">
              <span className="text-[10px] text-slate-400 uppercase">Ruolo</span>
              <span className="font-semibold text-slate-700 text-sm text-right">{before.role}</span>
           </div>
           <div className="flex justify-between items-center border-b border-slate-200/50 pb-2">
              <span className="text-[10px] text-slate-400 uppercase">RAL</span>
              <span className="font-semibold text-slate-700 text-right">{before.salary}</span>
           </div>
           <div className="flex justify-between items-center">
              <span className="text-[10px] text-slate-400 uppercase">Status</span>
              <span className="font-semibold text-slate-700 text-right">{before.status}</span>
           </div>
        </div>
     </div>

     {/* AFTER Section - Vertical Stack Bottom */}
     <div className="bg-white p-6 relative flex-1">
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
        
        {/* Header with Badge managed by Flexbox to avoid overlap */}
        <div className="flex justify-between items-start mb-5">
             <div className="text-xs font-bold text-blue-600 uppercase tracking-widest pt-1">Con ClinicMatch</div>
             <div className="flex items-center gap-1 bg-green-50 border border-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider shrink-0">
                <ShieldCheckIcon className="w-3 h-3" />
                #{id}
             </div>
        </div>

        <div className="space-y-3">
           <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <span className="text-[10px] text-slate-400 uppercase">Ruolo</span>
              <span className="font-bold text-slate-900 text-sm text-right">{after.role}</span>
           </div>
           <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <span className="text-[10px] text-slate-400 uppercase">Pacchetto</span>
              <span className="font-bold text-green-600 text-right">{after.salary}</span>
           </div>
           <div className="flex justify-between items-center">
              <span className="text-[10px] text-slate-400 uppercase">Status</span>
              <span className="font-bold text-slate-900 text-right">{after.status}</span>
           </div>
        </div>
     </div>
     
     <div className="bg-slate-900 text-white p-3 text-center text-xs font-bold">
        {name}
     </div>
  </div>
);

const Testimonials: React.FC<TestimonialsProps> = ({ onCtaClick }) => {
  return (
    <div className="animate-fade-in">
      <section className="bg-slate-50 pt-24 pb-20 text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <StarIcon className="w-4 h-4 text-yellow-400" />
              Storie Reali, Risultati Verificati
           </div>
           <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Wall of <span className="text-blue-600">Success</span>
           </h1>
           <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
              Non fidarti delle recensioni anonime. Ascolta le voci reali (Audio Leaks) e guarda i dati verificati dei manager che hanno cambiato vita con noi.
           </p>
        </div>
      </section>

      {/* Audio Leaks Section */}
      <section className="py-20 bg-white">
         <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
               <div className="md:col-span-3 text-center mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Audio Leaks</h2>
                  <p className="text-slate-400 text-sm">Clicca Play per ascoltare le esperienze dei nostri manager.</p>
               </div>

               <div className="space-y-6">
                  <AudioPlayer 
                     name="Marco V." 
                     role="Ex Segretario → Clinic Manager" 
                     duration="0:54" 
                     audioUrl={audioFiles.marco}
                  />
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative italic text-slate-600 text-sm">
                     <QuoteIcon className="absolute top-4 left-4 w-8 h-8 text-slate-200 -z-10" />
                     "Mi hanno dato pure l'auto aziendale che nel vecchio studio mi sognavo."
                  </div>
               </div>

               <div className="space-y-6">
                  <AudioPlayer 
                     name="Giulia R." 
                     role="Senior Manager Milano" 
                     duration="1:12" 
                     audioUrl={audioFiles.giulia}
                  />
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative italic text-slate-600 text-sm">
                     <QuoteIcon className="absolute top-4 left-4 w-8 h-8 text-slate-200 -z-10" />
                     "Non ho dovuto contrattare al ribasso come su LinkedIn. Sapevano già il mio valore."
                  </div>
               </div>

               <div className="space-y-6">
                  <AudioPlayer 
                     name="Luca T." 
                     role="Junior Clinic Manager" 
                     duration="0:45" 
                     audioUrl={audioFiles.luca}
                  />
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative italic text-slate-600 text-sm">
                     <QuoteIcon className="absolute top-4 left-4 w-8 h-8 text-slate-200 -z-10" />
                     "Il mio capo non ha saputo nulla finché non ho dato le dimissioni. Privacy totale."
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Transformation Cards (Before & After) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
         <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">L'Impatto sui Numeri</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
               <TransformationCard 
                  id="4921"
                  name="Marco V."
                  before={{ role: "Segretario", salary: "€22k RAL", status: "Esecutivo" }}
                  after={{ role: "Clinic Manager", salary: "€45k + Auto", status: "Direttivo" }}
               />
               <TransformationCard 
                  id="3382"
                  name="Giulia R."
                  before={{ role: "Office Mgr", salary: "€35k RAL", status: "Micromanaged" }}
                  after={{ role: "Area Manager", salary: "€65k + MBO", status: "Autonomo" }}
               />
               <TransformationCard 
                  id="5102"
                  name="Luca T."
                  before={{ role: "ASO / Front", salary: "€19k RAL", status: "Operativo" }}
                  after={{ role: "Junior CM", salary: "€32k + Form.", status: "Growth" }}
               />
            </div>

            <div className="mt-20 text-center">
               <button onClick={onCtaClick} className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-2xl hover:-translate-y-1 inline-flex items-center gap-3">
                  Vuoi essere la prossima storia di successo? <ArrowRightIcon className="w-5 h-5" />
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Testimonials;
