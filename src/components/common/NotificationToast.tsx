import React, { useEffect } from 'react';
import { useHeritage } from '../../context/HeritageContext';
import { Award, Sparkles, CheckCircle2, X } from 'lucide-react';

export const NotificationToast: React.FC = () => {
  const { notification, dismissNotification } = useHeritage();

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => {
      dismissNotification();
    }, 4500);
    return () => clearTimeout(timer);
  }, [notification, dismissNotification]);

  if (!notification) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in max-w-sm w-full">
      <div className="bg-stone-900/95 text-white backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-amber-500/40 flex items-start gap-3 relative">
        <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 flex-shrink-0 mt-0.5">
          {notification.type === 'xp' ? (
            <Sparkles className="w-5 h-5 text-amber-400 animate-spin-slow" />
          ) : notification.type === 'badge' ? (
            <Award className="w-5 h-5 text-amber-300" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          )}
        </div>

        <div className="flex-1 pr-4">
          <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-0.5">
            {notification.type === 'xp' ? 'Dharohar Milestone' : notification.type === 'badge' ? 'Honor Unlocked' : 'Success'}
          </div>
          <p className="text-sm font-medium text-stone-100 leading-snug">
            {notification.message}
          </p>
        </div>

        <button 
          onClick={dismissNotification}
          className="text-stone-400 hover:text-stone-100 transition-colors p-1"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
