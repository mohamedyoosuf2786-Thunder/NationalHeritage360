import React, { useState } from 'react';
import { useHeritage } from '../../context/HeritageContext';
import { VerifiedBadge } from '../common/VerifiedBadge';
import { 
  User, 
  Award, 
  Sparkles, 
  Bookmark, 
  Palette, 
  Download, 
  Printer, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Layers,
  Compass,
  Clock
} from 'lucide-react';

export const UserProfile: React.FC = () => {
  const { 
    userXP, 
    userLevel, 
    badges, 
    savedCreations, 
    savedHeritageItems, 
    playChime,
    playSuccessChime
  } = useHeritage();

  const [studentName, setStudentName] = useState('Arjun Sundaram');
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  const handlePrintCertificate = () => {
    playSuccessChime();
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Profile Hero Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl mb-10 relative overflow-hidden">
        
        {/* Subtle background motif */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-radial-gradient from-amber-500/10 to-transparent pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Avatar and Basic Info */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-terracotta-600 via-amber-500 to-amber-300 p-1 shadow-heritage">
                <div className="w-full h-full rounded-[22px] bg-stone-900 flex items-center justify-center text-white font-serif font-black text-3xl">
                  {studentName.charAt(0)}
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-amber-500 text-stone-950 font-bold text-[10px] uppercase tracking-wider shadow-md">
                Lvl {userLevel.level}
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider">
                  Heritage Explorer
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  SIH 2026 Verified
                </span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2">
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900 border-b border-dashed border-stone-300 focus:outline-none focus:border-terracotta-500 max-w-[260px]"
                  title="Click to edit student name"
                />
              </div>

              <p className="text-sm font-semibold text-terracotta-700">
                {userLevel.name} — <span className="text-stone-500 font-normal">{userLevel.title}</span>
              </p>

              <p className="text-xs text-stone-500 pt-1">
                Member of the National Living Heritage Preservation Youth Network
              </p>
            </div>
          </div>

          {/* XP & Certificate Button */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center gap-4">
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200 w-full sm:w-auto text-center lg:text-right space-y-1">
              <div className="text-xs uppercase font-bold text-stone-500 tracking-wider">Total Accumulated XP</div>
              <div className="font-serif text-3xl font-black text-amber-600 flex items-center justify-center lg:justify-end gap-2">
                <Sparkles className="w-6 h-6 text-amber-500" />
                <span>{userXP} XP</span>
              </div>
              <div className="text-[11px] text-stone-500">
                {userLevel.nextLevelXP - userXP} XP to next civilizational rank
              </div>
            </div>

            <button
              onClick={() => {
                playChime();
                setShowCertificateModal(true);
              }}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-terracotta-600 to-amber-600 hover:from-terracotta-700 hover:to-amber-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-amber-200" />
              <span>Generate SIH 2026 Ambassador Certificate</span>
            </button>
          </div>

        </div>

        {/* Progress Bar */}
        <div className="mt-8 pt-6 border-t border-stone-100">
          <div className="flex justify-between text-xs font-bold text-stone-600 mb-1.5">
            <span>Dharohar Advancement: Level {userLevel.level}</span>
            <span>{Math.round((userXP / userLevel.nextLevelXP) * 100)}% Complete</span>
          </div>
          <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden p-0.5 border border-stone-200">
            <div 
              style={{ width: `${Math.min(100, (userXP / userLevel.nextLevelXP) * 100)}%` }}
              className="h-full bg-gradient-to-r from-terracotta-500 to-amber-500 rounded-full transition-all duration-500"
            />
          </div>
        </div>

      </div>

      {/* Grid: Badges, Saved Creations & Bookmarks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Badges Collection (7 columns) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Earned Badges & Honors
                </h3>
                <p className="text-xs text-stone-500">
                  Unlocked through quizzes, lab crafting, and heritage documentation.
                </p>
              </div>

              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900">
                {badges.filter(b => b.unlocked).length} / {badges.length} Unlocked
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {badges.map(badge => (
                <div
                  key={badge.id}
                  className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                    badge.unlocked
                      ? 'bg-gradient-to-br from-amber-50/80 to-white border-amber-300 shadow-sm'
                      : 'bg-stone-50/70 border-stone-200 opacity-60'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    badge.unlocked ? 'bg-amber-500 text-stone-950 shadow-md' : 'bg-stone-200 text-stone-400'
                  }`}>
                    <Award className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-serif font-bold text-sm text-stone-900">{badge.name}</span>
                      {badge.unlocked && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      )}
                    </div>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">{badge.description}</p>
                    {badge.unlockedAt && (
                      <div className="text-[10px] text-amber-700 font-semibold mt-1">
                        Unlocked on {badge.unlockedAt}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bookmarked Living Heritage Items */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-terracotta-600" />
              <span>Bookmarked Heritage Items ({savedHeritageItems.length})</span>
            </h3>

            <div className="space-y-2.5">
              {savedHeritageItems.map(item => (
                <div 
                  key={item.id} 
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF7F2] border border-stone-200 hover:bg-stone-100 transition-colors"
                >
                  <div>
                    <div className="font-serif font-bold text-sm text-stone-900">{item.title}</div>
                    <div className="text-[11px] text-stone-500">
                      {item.category} • {item.stateOrEra}
                    </div>
                  </div>
                  <span className="text-[10px] text-stone-400 font-medium">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Saved Creations from Heritage Lab (5 columns) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
              <Palette className="w-5 h-5 text-terracotta-600" />
              <span>Lab Creations ({savedCreations.length})</span>
            </h3>
          </div>

          <p className="text-xs text-stone-500">
            Artworks generated in the Kolam, pottery, block printing, and loom studios.
          </p>

          {savedCreations.length === 0 ? (
            <div className="p-8 text-center bg-stone-50 rounded-2xl border border-dashed border-stone-200 text-stone-500 text-xs space-y-2">
              <Palette className="w-8 h-8 text-stone-400 mx-auto" />
              <p>No creations saved yet.</p>
              <p className="text-terracotta-600 font-bold">Visit the Heritage Lab to craft your first Kolam or ceramic urn!</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
              {savedCreations.map(creation => (
                <div key={creation.id} className="p-3 bg-[#FAF7F2] rounded-2xl border border-stone-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-serif font-bold text-stone-900 truncate max-w-[200px]">
                      {creation.title}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 uppercase">
                      {creation.type}
                    </span>
                  </div>

                  <div className="h-32 w-full rounded-xl overflow-hidden bg-stone-900 flex items-center justify-center border border-stone-300">
                    <img
                      src={creation.dataUrl}
                      alt={creation.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                    <span>Created on {creation.createdAt}</span>
                    <a
                      href={creation.dataUrl}
                      download={`${creation.type}-${creation.id}.png`}
                      className="text-terracotta-600 font-bold hover:underline flex items-center gap-1"
                    >
                      <Download className="w-3 h-3" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Dynamic Modal: Smart India Hackathon 2026 Ambassador Certificate */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] max-w-2xl w-full rounded-3xl p-8 sm:p-10 border-4 border-amber-500 shadow-2xl relative space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setShowCertificateModal(false)}
              className="absolute top-4 right-4 text-stone-500 hover:text-stone-900 font-bold p-2 text-sm"
            >
              ✕
            </button>

            {/* Printable Certificate Frame */}
            <div className="border-4 border-amber-600/40 p-6 sm:p-8 rounded-2xl bg-white text-center space-y-4 relative shadow-inner">
              
              <div className="flex items-center justify-between border-b border-amber-200 pb-4">
                <span className="text-xs uppercase font-bold tracking-widest text-terracotta-700">
                  Smart India Hackathon 2026
                </span>
                <span className="text-xs font-mono text-stone-400">CERT: SIH26-H360-9842</span>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-terracotta-600 to-amber-600 flex items-center justify-center text-white font-serif font-black text-2xl mx-auto shadow-md">
                ३६০
              </div>

              <div className="space-y-1">
                <div className="text-xs uppercase tracking-widest text-amber-800 font-bold">
                  Certificate of Cultural Stewardship
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-black text-stone-900">
                  HERITAGE 360 AMBASSADOR
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 italic">
                This is proudly presented to
              </p>

              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-terracotta-700 border-b-2 border-stone-200 pb-2 inline-block px-8">
                {studentName}
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-md mx-auto">
                in recognition of demonstrated excellence in discovering, experiencing, and documenting India's living cultural traditions, attaining the civilizational rank of <strong>{userLevel.name}</strong> with <strong>{userXP} XP</strong>.
              </p>

              {/* Badges Ribbon */}
              <div className="pt-2 flex justify-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
                  National Repository Contributor
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold border border-emerald-200">
                  Verified Living Lore Guardian
                </span>
              </div>

              {/* Signatures & Seal */}
              <div className="pt-6 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                <div className="text-left">
                  <div className="font-bold text-stone-900">Dr. K. S. Ramanathan</div>
                  <div className="text-[10px]">National Council of Cultural Research</div>
                </div>

                <div className="w-12 h-12 rounded-full border-2 border-amber-500 flex items-center justify-center text-[10px] font-bold text-amber-700 uppercase">
                  SIH 2026 Seal
                </div>

                <div className="text-right">
                  <div className="font-bold text-stone-900">Aruvi AI System</div>
                  <div className="text-[10px]">Autonomous Heritage Evaluator</div>
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="flex justify-end gap-3">
              <button
                onClick={handlePrintCertificate}
                className="px-6 py-2.5 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save Certificate PDF</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
