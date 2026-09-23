import React, { useState } from 'react';
import { useHeritage } from '../../context/HeritageContext';
import { timelineErasData } from '../../data/timelineErasData';
import { TimelineEraId } from '../../types';
import { Artifact3DViewer } from './Artifact3DViewer';
import { VerifiedBadge } from '../common/VerifiedBadge';
import { 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Bot, 
  Bookmark, 
  BookmarkCheck, 
  ChevronRight, 
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';

export const TimeTravelIndia: React.FC = () => {
  const { 
    activeTimelineEra, 
    setActiveTimelineEra, 
    setCurrentPage, 
    playChime, 
    addXP, 
    saveHeritageItem, 
    savedHeritageItems,
    unlockBadge 
  } = useHeritage();

  const currentEra = timelineErasData.find(e => e.id === activeTimelineEra) || timelineErasData[0];

  const isBookmarked = savedHeritageItems.some(
    item => item.title === currentEra.name && item.category === 'Historical Era'
  );

  const handleEraChange = (eraId: TimelineEraId) => {
    playChime();
    setActiveTimelineEra(eraId);
    addXP(20, `Traversed to ${eraId.toUpperCase()} era in Time Travel India`);

    // Check if user visited all eras
    unlockBadge('time-traveler');
  };

  const handleToggleBookmark = () => {
    if (!isBookmarked) {
      saveHeritageItem({
        title: currentEra.name,
        category: 'Historical Era',
        stateOrEra: currentEra.yearRange
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            Time Travel India • 5,000-Year Chronological Odyssey
          </span>
          <VerifiedBadge sourceName="Archaeological Survey of India & Epigraphia Indica" />
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-black text-stone-900">
          Chronicles of Civilizational Evolution
        </h1>
        <p className="text-stone-600 text-sm mt-1">
          Explore architectural engineering, philosophy, sacred metallurgy, and living crafts across five transformative epochs.
        </p>
      </div>

      {/* Horizontal Interactive Timeline Slider */}
      <div className="bg-white rounded-3xl p-3 sm:p-4 border border-stone-200 shadow-sm mb-10 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[620px] gap-2">
          {timelineErasData.map((era, index) => {
            const isActive = era.id === activeTimelineEra;
            return (
              <button
                key={era.id}
                onClick={() => handleEraChange(era.id)}
                className={`flex-1 py-3 px-4 rounded-2xl text-center transition-all relative ${
                  isActive
                    ? 'bg-gradient-to-r from-terracotta-600 to-amber-600 text-white shadow-md font-bold scale-[1.02]'
                    : 'bg-[#FAF7F2] hover:bg-stone-100 text-stone-700'
                }`}
              >
                <div className={`text-[10px] uppercase font-bold tracking-wider mb-0.5 ${isActive ? 'text-amber-200' : 'text-stone-500'}`}>
                  Era {index + 1}
                </div>
                <div className="font-serif text-sm sm:text-base font-bold truncate">
                  {era.name}
                </div>
                <div className={`text-[11px] font-sans truncate ${isActive ? 'text-white/80' : 'text-stone-500'}`}>
                  {era.yearRange}
                </div>
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-500 rotate-45" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Era Showcase Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Era Dossier & Cultural Pillars */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Era Header Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                {currentEra.yearRange}
              </span>

              <button
                onClick={handleToggleBookmark}
                className={`p-2 rounded-xl border transition-colors ${
                  isBookmarked ? 'bg-amber-500 text-white border-amber-500' : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                }`}
                title={isBookmarked ? 'Saved to Profile' : 'Bookmark this era'}
              >
                {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
              </button>
            </div>

            <div>
              <div className="text-xs uppercase font-bold tracking-widest text-terracotta-600 mb-1">
                {currentEra.subTitle}
              </div>
              <h2 className="font-serif text-3xl font-extrabold text-stone-900">
                {currentEra.name}
              </h2>
            </div>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {currentEra.overview}
            </p>
          </div>

          {/* Cultural Pillars */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-terracotta-600" />
              <span>Defining Cultural & Scientific Pillars</span>
            </h3>

            <div className="space-y-3">
              {currentEra.culturalPillars.map((pillar, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-base font-bold text-stone-900">{pillar.title}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                      ASI Verified
                    </span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{pillar.description}</p>
                  <div className="text-[11px] text-terracotta-700 font-medium">
                    <strong>Reference:</strong> {pillar.verifiedSource}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Major Milestones Grid */}
          <div className="bg-amber-50/70 rounded-3xl p-6 border border-amber-200/80 space-y-3">
            <h4 className="font-serif text-base font-bold text-stone-900">
              Civilizational Milestones & Innovations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 font-medium">
              {currentEra.achievements.map((ach, i) => (
                <div key={i} className="flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-amber-200/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: 3D Artifact Masterpiece Inspector */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Masterpiece Artifact (3D)
              </h3>
              <span className="text-xs text-stone-500">Interactive WebGL</span>
            </div>

            {/* 3D WebGL Viewer Component */}
            <Artifact3DViewer 
              modelType={currentEra.masterpieceArtifact.modelType}
              artifactName={currentEra.masterpieceArtifact.name}
              hotspots={currentEra.masterpieceArtifact.hotspots}
            />
          </div>

          {/* Artifact Dossier Card */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-3">
            <div>
              <div className="text-xs uppercase font-bold text-amber-600 tracking-wider">
                {currentEra.masterpieceArtifact.period}
              </div>
              <h4 className="font-serif text-2xl font-bold text-stone-900">
                {currentEra.masterpieceArtifact.name}
              </h4>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed">
              {currentEra.masterpieceArtifact.description}
            </p>

            <div className="pt-3 border-t border-stone-100 grid grid-cols-2 gap-3 text-xs">
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <span className="text-stone-500 block text-[10px] uppercase font-bold">Medium</span>
                <span className="font-semibold text-stone-800">{currentEra.masterpieceArtifact.material}</span>
              </div>
              <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <span className="text-stone-500 block text-[10px] uppercase font-bold">Location</span>
                <span className="font-semibold text-stone-800">{currentEra.masterpieceArtifact.locationFound}</span>
              </div>
            </div>

            <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-amber-900">
              <strong>Current Preservation:</strong> {currentEra.masterpieceArtifact.currentPreservation}
            </div>

            {/* Talk to Aruvi about this */}
            <button
              onClick={() => {
                playChime();
                setCurrentPage('avatar');
              }}
              className="w-full mt-2 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Bot className="w-4 h-4 text-amber-400" />
              <span>Discuss {currentEra.name} with Aruvi AI</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
