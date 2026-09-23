import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface VerifiedBadgeProps {
  sourceName?: string;
  className?: string;
  showDetails?: boolean;
}

export const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({ 
  sourceName = 'Archaeological Survey of India (ASI)',
  className = '',
  showDetails = true
}) => {
  return (
    <div 
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-sm ${className}`}
      title={`Authenticated cultural record: ${sourceName}`}
    >
      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
      <span className="tracking-wide">Verified Source</span>
      {showDetails && (
        <>
          <span className="text-emerald-300">•</span>
          <span className="truncate max-w-[180px] font-normal text-emerald-700">{sourceName}</span>
        </>
      )}
    </div>
  );
};
