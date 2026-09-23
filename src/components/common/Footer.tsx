import React from 'react';
import { useHeritage } from '../../context/HeritageContext';
import { PageView } from '../../types';
import { ShieldCheck, Heart, Sparkles, ExternalLink, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentPage, playChime } = useHeritage();

  const handleNav = (p: PageView) => {
    playChime();
    setCurrentPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-amber-900/40 relative overflow-hidden">
      {/* Decorative background jali/mandala */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-terracotta-500 to-amber-600 flex items-center justify-center text-white font-serif font-bold text-lg shadow-lg border border-amber-400/30">
                ३६০
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-white">
                HERITAGE <span className="text-amber-400">360</span>
              </span>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed pr-4">
              A flagship interactive digital ecosystem engineered for <strong className="text-stone-200">Smart India Hackathon 2026</strong>. 
              Empowering students and communities to discover, experience, document, and preserve India's 5,000-year living cultural legacy.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                SIH 2026 National Innovation
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                ASI Verified Repositories
              </span>
            </div>
          </div>

          {/* Core Modules */}
          <div>
            <h4 className="font-serif text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Core Modules
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <button onClick={() => handleNav('map')} className="hover:text-amber-400 transition-colors">
                  Living Heritage Map
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('timetravel')} className="hover:text-amber-400 transition-colors">
                  Time Travel India (3D)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('avatar')} className="hover:text-amber-400 transition-colors">
                  Aruvi AI Cultural Guide
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('lab')} className="hover:text-amber-400 transition-colors">
                  Heritage Creative Lab
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('learn')} className="hover:text-amber-400 transition-colors">
                  Learn by Doing Quizzes
                </button>
              </li>
            </ul>
          </div>

          {/* Preservation & Ethics */}
          <div>
            <h4 className="font-serif text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Community & Ethics
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <button onClick={() => handleNav('document')} className="hover:text-amber-400 transition-colors">
                  Submit Local Folklore
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('profile')} className="hover:text-amber-400 transition-colors">
                  Ambassador Certificate
                </button>
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer" title="In accordance with UNESCO 2003 Convention">
                Indigenous Consent Policy
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer" title="Traditional Knowledge Digital Library (TKDL)">
                TKDL Knowledge Protection
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer">
                Scholar Moderation Board
              </li>
            </ul>
          </div>

          {/* Institutional Data Sources */}
          <div>
            <h4 className="font-serif text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Verified Partners
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed mb-3">
              Curated from public knowledge repositories of:
            </p>
            <ul className="space-y-2 text-xs text-stone-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Archaeological Survey of India (ASI)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Sangeet Natak Akademi
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                IGNCA (Indira Gandhi Arts Centre)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Geographical Indications (GI) Registry
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for India's living heritage • Smart India Hackathon 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Privacy & Indigenous Cultural Rights</span>
            <span>Open Cultural Data</span>
            <span className="text-amber-500/80 font-mono">v1.0.0-PROD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
