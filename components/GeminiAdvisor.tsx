import React, { useState, useRef, useEffect } from 'react';
import { askGeminiAdvisor } from '../services/geminiService';
import { ChatMessage } from '../types';
import { SparklesIcon, SendIcon } from './Icons';

const GeminiAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Ciao! Sono il tuo assistente AI. Chiedimi perché dovresti diventare un Temporary Clinic Manager o come funziona la piattaforma.' }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    const response = await askGeminiAdvisor(userMessage);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg flex flex-col h-full min-h-[350px]">
      <div className="bg-slate-900 p-4 flex items-center gap-2 shrink-0">
        <SparklesIcon className="text-yellow-400 w-5 h-5" />
        <h3 className="text-white font-medium text-sm">Assistente Carriera AI</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-200 rounded-full h-8 w-12 flex items-center justify-center space-x-1 px-3">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 bg-white border-t border-slate-100 shrink-0">
        <div className="flex items-center gap-2 bg-slate-100 rounded-full pr-1 pl-4 py-1 focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:bg-white transition-all border border-transparent focus-within:border-blue-200">
          <input 
            type="text" 
            className="flex-1 bg-transparent text-sm focus:outline-none text-slate-800 placeholder-slate-400 py-2"
            placeholder="Fai una domanda..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            disabled={loading}
          />
          <button 
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="w-9 h-9 flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white rounded-full transition-all disabled:opacity-50 disabled:hover:bg-slate-900 shadow-md transform active:scale-95"
          >
            <SendIcon className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiAdvisor;