import React, { useState } from 'react';
import { useHeritage } from '../../context/HeritageContext';
import { statesHeritageData } from '../../data/statesHeritageData';
import { StateHeritage, CulturalDomain } from '../../types';
import { VerifiedBadge } from '../common/VerifiedBadge';
import { 
  MapPin, 
  Volume2, 
  Search, 
  Sparkles, 
  Bookmark, 
  BookmarkCheck, 
  Bot, 
  Palette, 
  Utensils, 
  Music, 
  Languages, 
  BookOpen, 
  Calendar, 
  Layers, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';

export const LivingHeritageMap: React.FC = () => {
  const { 
    selectedState, 
    setSelectedState, 
    setCurrentPage, 
    playChime, 
    saveHeritageItem, 
    savedHeritageItems,
    addXP 
  } = useHeritage();

  const [activeRegion, setActiveRegion] = useState<string>('All');
  const [activeDomain, setActiveDomain] = useState<CulturalDomain>('traditions');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Filter states
  const filteredStates = statesHeritageData.filter(state => {
    const matchesRegion = activeRegion === 'All' || state.region === activeRegion;
    const matchesSearch = 
      state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.crafts.some(c => c.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      state.traditions.some(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  const currentState = selectedState || statesHeritageData[0];

  const isBookmarked = savedHeritageItems.some(
    item => item.title === currentState.name && item.category === 'Living Heritage State'
  );

  const handleSelectState = (state: StateHeritage) => {
    playChime();
    setSelectedState(state);
    addXP(15, `Explored living traditions of ${state.name}`);
  };

  const handleToggleBookmark = () => {
    if (!isBookmarked) {
      saveHeritageItem({
        title: currentState.name,
        category: 'Living Heritage State',
        stateOrEra: currentState.region
      });
    }
  };

  // Audio Speech Synthesis for Greeting
  const handlePlayGreeting = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentState.audioGreetingText);
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const domainTabs: { id: CulturalDomain; label: string; icon: React.ReactNode; count: number }[] = [
    { id: 'traditions', label: 'Living Traditions', icon: <Layers className="w-4 h-4" />, count: currentState.traditions.length },
    { id: 'festivals', label: 'Festivals', icon: <Calendar className="w-4 h-4" />, count: currentState.festivals.length },
    { id: 'crafts', label: 'Handicrafts & GI', icon: <Palette className="w-4 h-4" />, count: currentState.crafts.length },
    { id: 'food', label: 'Culinary Roots', icon: <Utensils className="w-4 h-4" />, count: currentState.food.length },
    { id: 'music', label: 'Music & Arts', icon: <Music className="w-4 h-4" />, count: currentState.music.length },
    { id: 'languages', label: 'Dialects & Lore', icon: <Languages className="w-4 h-4" />, count: currentState.languages.length },
    { id: 'stories', label: 'Folktales', icon: <BookOpen className="w-4 h-4" />, count: currentState.stories.length }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              Living Heritage Map of India
            </span>
            <VerifiedBadge sourceName="Ministry of Culture & ASI" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-black text-stone-900">
            Interactive Cultural Cartography
          </h1>
          <p className="text-stone-600 text-sm mt-1">
            Click any state or zone to explore authentic folk traditions, GI-protected crafts, harvest songs, and oral histories.
          </p>
        </div>

        {/* Region Filter & Search */}
        <div className="flex flex-wrap items-center gap-2">
          {['All', 'North', 'South', 'East', 'West', 'North-East'].map(reg => (
            <button
              key={reg}
              onClick={() => { playChime(); setActiveRegion(reg); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeRegion === reg
                  ? 'bg-terracotta-600 text-white shadow-md'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
            >
              {reg}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Map & State Selector */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Search State Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search states, crafts (e.g. Bronze, Silk, Patola)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-500 shadow-sm"
            />
          </div>

          {/* Interactive State Cards Matrix */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wider pb-2 border-b border-stone-100">
              <span>Select Region / State ({filteredStates.length})</span>
              <span className="text-terracotta-600">Click to Inspect</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[380px] overflow-y-auto pr-1">
              {filteredStates.map(state => {
                const isSelected = currentState.id === state.id;
                return (
                  <button
                    key={state.id}
                    onClick={() => handleSelectState(state)}
                    className={`flex items-start gap-3 p-3 rounded-2xl text-left transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-terracotta-500 to-amber-600 text-white shadow-md scale-[1.02]'
                        : 'bg-[#FAF7F2] hover:bg-stone-100 text-stone-800 border border-stone-200/70'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-serif font-black text-xs flex-shrink-0 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-white text-terracotta-700 shadow-sm'
                    }`}>
                      {state.code}
                    </div>

                    <div className="truncate flex-1">
                      <div className="font-serif font-bold text-sm truncate">{state.name}</div>
                      <div className={`text-[11px] truncate ${isSelected ? 'text-amber-100' : 'text-stone-500'}`}>
                        {state.capital} • {state.region}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stylized Visual Vector India Map Mapbox-style Preview */}
          <div className="bg-gradient-to-b from-stone-900 to-stone-950 text-white rounded-3xl p-6 shadow-xl border border-stone-800 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                Geographic Cultural Matrix
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-800 text-stone-400 border border-stone-700">
                Vector Precision
              </span>
            </div>

            {/* Stylized India Visual Graphic with Highlight Nodes */}
            <div className="relative h-48 w-full flex items-center justify-center">
              <svg viewBox="0 0 200 240" className="h-full w-auto text-amber-500/20 fill-current drop-shadow-md">
                {/* Simplified India silhouette poly */}
                <path d="M100 15 L120 30 L115 50 L140 60 L150 75 L165 75 L180 90 L160 100 L140 95 L120 110 L135 140 L130 170 L110 200 L95 230 L85 200 L75 160 L60 145 L40 130 L45 105 L60 85 L70 55 L85 30 Z" />
              </svg>

              {/* Hotspot pin for current state */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center animate-bounce">
                  <div className="px-2.5 py-1 rounded-md bg-amber-500 text-stone-950 font-bold text-xs shadow-lg flex items-center gap-1">
                    <MapPin className="w-3 h-3 fill-stone-950" />
                    <span>{currentState.name}</span>
                  </div>
                  <div className="w-2 h-2 bg-amber-500 rotate-45 -mt-1" />
                </div>
              </div>
            </div>

            <div className="text-[11px] text-stone-400 text-center mt-2 flex items-center justify-center gap-4">
              <span>Latitude & Longitude Tagged</span>
              <span>•</span>
              <span>PostGIS Spatial Verification</span>
            </div>
          </div>

        </div>

        {/* Right Column: Comprehensive State Cultural Dossier */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-lg space-y-6">
          
          {/* State Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden shadow-md">
            <img 
              src={currentState.bannerImage} 
              alt={currentState.name}
              className="w-full h-52 sm:h-64 object-cover filter brightness-[0.85]"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider">
                    {currentState.region} India
                  </span>
                  <VerifiedBadge sourceName={currentState.verifiedSource.institution} />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleToggleBookmark}
                    className={`p-2 rounded-xl backdrop-blur-md transition-colors ${
                      isBookmarked ? 'bg-amber-500 text-white' : 'bg-black/40 text-stone-200 hover:bg-black/60'
                    }`}
                    title={isBookmarked ? 'Saved to Profile' : 'Bookmark this state'}
                  >
                    {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {currentState.name}
              </h2>

              {/* Native Greeting with Audio Player */}
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md text-sm font-semibold">
                  <span>{currentState.greeting}</span>
                </div>

                <button
                  onClick={handlePlayGreeting}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isPlayingAudio
                      ? 'bg-amber-500 text-stone-950'
                      : 'bg-white/90 hover:bg-white text-stone-900'
                  }`}
                >
                  <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'animate-pulse' : ''}`} />
                  <span>{isPlayingAudio ? 'Speaking...' : 'Listen Greeting'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Cultural Summary */}
          <div className="bg-amber-50/60 rounded-2xl p-4 border border-amber-200/60 text-stone-800 text-sm leading-relaxed">
            <p className="font-medium">{currentState.summary}</p>
            <div className="mt-2 text-xs text-stone-500 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Reference Document: {currentState.verifiedSource.referenceDoc} ({currentState.verifiedSource.verifiedYear})</span>
            </div>
          </div>

          {/* Cultural Domain Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-stone-200">
            {domainTabs.map(tab => {
              const active = activeDomain === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => { playChime(); setActiveDomain(tab.id); }}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    active
                      ? 'bg-terracotta-600 text-white shadow-sm'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Domain Content Showcase */}
          <div className="space-y-4">
            
            {/* TRADITIONS */}
            {activeDomain === 'traditions' && (
              <div className="space-y-4">
                {currentState.traditions.map((trad, idx) => (
                  <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg font-bold text-stone-900">{trad.title}</h4>
                      <div className="flex gap-1.5">
                        {trad.tags.map((t, i) => (
                          <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-stone-700 leading-relaxed">{trad.desc}</p>
                    <div className="text-xs text-terracotta-700 font-semibold pt-1">
                      Civilizational Significance: {trad.significance}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* FESTIVALS */}
            {activeDomain === 'festivals' && (
              <div className="space-y-4">
                {currentState.festivals.map((fest, idx) => (
                  <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg font-bold text-stone-900">{fest.name}</h4>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-900">
                        {fest.season}
                      </span>
                    </div>
                    <p className="text-sm text-stone-700 leading-relaxed">{fest.desc}</p>
                    <div className="text-xs text-stone-600 bg-white p-3 rounded-xl border border-stone-200">
                      <strong className="text-stone-900">Sacred Rituals:</strong> {fest.rituals}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CRAFTS */}
            {activeDomain === 'crafts' && (
              <div className="space-y-4">
                {currentState.crafts.map((craft, idx) => (
                  <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg font-bold text-stone-900">{craft.name}</h4>
                      {craft.giStatus && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center gap-1">
                          <Award className="w-3 h-3 text-emerald-600" />
                          GI Protected
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-amber-800 font-medium">
                      <strong>Raw Materials:</strong> {craft.material}
                    </div>
                    <p className="text-sm text-stone-700 leading-relaxed">{craft.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* FOOD */}
            {activeDomain === 'food' && (
              <div className="space-y-4">
                {currentState.food.map((item, idx) => (
                  <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg font-bold text-stone-900">{item.name}</h4>
                      {item.giTagged && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                          GI Heritage Food
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-stone-700 leading-relaxed">{item.desc}</p>
                    <div className="text-xs text-terracotta-700">
                      <strong>Historical Lineage:</strong> {item.culturalRoots}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* MUSIC */}
            {activeDomain === 'music' && (
              <div className="space-y-4">
                {currentState.music.map((item, idx) => (
                  <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80 space-y-2">
                    <h4 className="font-serif text-lg font-bold text-stone-900">{item.form}</h4>
                    <div className="text-xs font-semibold text-purple-800">
                      Sacred Instruments: {item.instrument}
                    </div>
                    <p className="text-sm text-stone-700 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* LANGUAGES */}
            {activeDomain === 'languages' && (
              <div className="space-y-4">
                {currentState.languages.map((item, idx) => (
                  <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg font-bold text-stone-900">{item.name}</h4>
                      <span className="text-xs text-stone-500 font-medium">{item.speakersApprox}</span>
                    </div>
                    <div className="text-xs text-stone-600 font-semibold">
                      Script Evolution: {item.script}
                    </div>
                    <p className="text-sm text-stone-700 leading-relaxed">{item.oralTradition}</p>
                  </div>
                ))}
              </div>
            )}

            {/* STORIES */}
            {activeDomain === 'stories' && (
              <div className="space-y-4">
                {currentState.stories.map((item, idx) => (
                  <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg font-bold text-stone-900">{item.title}</h4>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                        {item.theme}
                      </span>
                    </div>
                    <p className="text-sm text-stone-700 leading-relaxed italic">"{item.excerpt}"</p>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Master Artisan Spotlight */}
          {currentState.artisanSpotlight && (
            <div className="bg-gradient-to-r from-terracotta-900 to-stone-900 text-white rounded-2xl p-5 shadow-inner space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">
                  Living Master Artisan Spotlight
                </span>
                <span className="text-xs text-stone-400">{currentState.artisanSpotlight.village}</span>
              </div>
              <div className="font-serif text-lg font-bold text-stone-100">
                {currentState.artisanSpotlight.name} — <span className="text-amber-300 font-sans font-medium text-sm">{currentState.artisanSpotlight.craft}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 italic">
                "{currentState.artisanSpotlight.quote}"
              </p>
            </div>
          )}

          {/* Quick Action Footer */}
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => {
                playChime();
                setCurrentPage('avatar');
              }}
              className="flex-1 px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Bot className="w-4 h-4" />
              <span>Ask Aruvi More About {currentState.name}</span>
            </button>
            <button
              onClick={() => {
                playChime();
                setCurrentPage('lab');
              }}
              className="px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <Palette className="w-4 h-4 text-terracotta-600" />
              <span>Craft in Lab</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
