import React from 'react';
import { FeatureCardProps } from '../types';

const Card: React.FC<FeatureCardProps> = ({ title, description, className, children, icon }) => {
  return (
    <div className={`group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          {icon && <div className="p-2 bg-slate-100 rounded-full text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">{icon}</div>}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
        <div className="mt-auto pt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export const BentoGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl mx-auto px-4">
      {children}
    </div>
  );
};

export default Card;