import React from 'react';
import { useHeritage } from '../../context/HeritageContext';
import { PageView } from '../../types';
import { ThreeHeritageHero } from './ThreeHeritageHero';
import { VerifiedBadge } from '../common/VerifiedBadge';
import { 
  Bot, 
  Clock, 
  Map, 
  Palette, 
  GraduationCap, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Volume2, 
  BookOpen, 
  Award,
  Layers,
  CheckCircle2
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { setCurrentPage, playChime } = useHeritage();

  const handleNav = (p: PageView) => {
    playChime();
    setCurrentPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featureCards = [
    {
      id: 'avatar' as PageView,
      title: 'AI Culture Avatar',
      subtitle: 'Meet Aruvi',
      desc: 'Engage in conversational voice and text dialogue with an AI scholar versed in 5,000 years of texts, philosophies, and folklore.',
      badge: 'Voice & RAG AI',
      color: 'from-amber-600 to-amber-700',
      tagColor: 'bg-amber-100 text-amber-900 border-amber-300',
      icon: <Bot className="w-6 h-6 text-amber-500" />,
      actionText: 'Talk to Aruvi'
    },
    {
      id: 'timetravel' as PageView,
      title: 'Time Travel India',
      subtitle: '5,000-Year Odyssey',
      desc: 'Traverse Ancient, Medieval, Colonial, Modern, and Future eras with interactive 3D WebGL artifacts and architectural secrets.',
      badge: 'Interactive 3D',
      color: 'from-terracotta-500 to-terracotta-700',
      tagColor: 'bg-terracotta-100 text-terracotta-900 border-terracotta-300',
      icon: <Clock className="w-6 h-6 text-terracotta-500" />,
      actionText: 'Launch Timeline'
    },
    {
      id: 'map' as PageView,
      title: 'Living Heritage Map',
      subtitle: '28 States & 8 UTs',
      desc: 'Explore regional crafts, harvest festivals, classical dance forms, GI-tagged cuisines, and oral legends on an interactive map.',
      badge: 'Living Lore',
      color: 'from-emeraldHeritage-700 to-emeraldHeritage-900',
      tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      icon: <Map className="w-6 h-6 text-emerald-600" />,
      actionText: 'Explore Map'
    },
    {
      id: 'lab' as PageView,
      title: 'Future Heritage Lab',
      subtitle: 'Hands-On Creative Studios',
      desc: 'Design mathematical Kolams, stamp Ajrakh block prints, shape virtual pottery on a 3D lathe, and weave silk on a digital loom.',
      badge: 'Creative Canvas',
      color: 'from-purple-600 to-indigo-800',
      tagColor: 'bg-purple-100 text-purple-900 border-purple-300',
      icon: <Palette className="w-6 h-6 text-purple-600" />,
      actionText: 'Enter Studios'
    },
    {
      id: 'learn' as PageView,
      title: 'Learn by Doing',
      subtitle: 'Gamified Challenges',
      desc: 'Master cultural knowledge through adaptive quizzes, craft-matching games, earn XP, and unlock recognized heritage badges.',
      badge: 'Earn XP & Badges',
      color: 'from-rose-600 to-rose-800',
      tagColor: 'bg-rose-100 text-rose-900 border-rose-300',
      icon: <GraduationCap className="w-6 h-6 text-rose-500" />,
      actionText: 'Play & Learn'
    }
  ];

  return (
    <div className="relative min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-radial-gradient from-amber-100/40 via-transparent to-transparent">
        
        {/* Subtle decorative background watermarks */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full border border-amber-500/10 pointer-events-none -z-10 animate-spin-slow" />
        <div className="absolute top-40 right-10 w-96 h-96 rounded-full border border-terracotta-500/10 pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-amber-300/80 shadow-sm text-xs font-bold text-amber-900">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Smart India Hackathon 2026 National Prototype</span>
                <span className="text-amber-400">•</span>
                <span className="text-emerald-700">Govt. Verified Sources</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.15]">
                Discover India <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta-600 via-amber-600 to-terracotta-700">
                  Beyond History
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-stone-600 max-w-2xl leading-relaxed">
                Experience, learn and preserve India's living heritage through interactive technology.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => handleNav('map')}
                  className="px-7 py-4 rounded-2xl bg-gradient-to-r from-terracotta-600 to-terracotta-700 hover:from-terracotta-700 hover:to-terracotta-800 text-white font-bold text-base shadow-heritage transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-3 group"
                >
                  <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  <span>Explore Heritage</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleNav('avatar')}
                  className="px-7 py-4 rounded-2xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-bold text-base shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2.5"
                >
                  <Bot className="w-5 h-5 text-amber-600" />
                  <span>Start Your Journey</span>
                </button>
              </div>

              {/* Trust Badges & Citation Footnote */}
              <div className="pt-6 border-t border-stone-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-stone-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Archaeological Survey of India (ASI) Citations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-terracotta-600" />
                  <span>500+ GI-Tagged Indigenous Crafts</span>
                </div>
              </div>

            </div>

            {/* Right Column: 3D Interactive WebGL Relic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-gradient-to-b from-white/90 to-amber-50/50 rounded-3xl p-4 shadow-2xl border border-amber-200/70 relative">
                <div className="absolute top-4 left-4 z-10">
                  <VerifiedBadge sourceName="ASI National Archives" />
                </div>
                <ThreeHeritageHero />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Metric Ticker */}
      <section className="bg-stone-900 text-stone-100 py-6 border-y border-amber-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r border-stone-800 last:border-none">
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-400">5,000+</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">Years Living Heritage</div>
            </div>
            <div className="border-r border-stone-800 last:border-none">
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-terracotta-400">42</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">UNESCO World Sites</div>
            </div>
            <div className="border-r border-stone-800 last:border-none">
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-emerald-400">500+</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">GI Protected Crafts</div>
            </div>
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-300">19,500+</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">Living Dialects Documented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Core Feature Cards */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Interactive Preservation Ecosystem
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Five Pillars of HERITAGE 360
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              Engineered with modern WebGL, conversational neural AI, and crowdsourced documentation to empower students nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((card, idx) => (
              <div
                key={card.id}
                onClick={() => handleNav(card.id)}
                className={`group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-stone-200/90 transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5 ${
                  idx === 0 ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${card.tagColor}`}>
                      {card.badge}
                    </span>
                  </div>

                  <div className="text-xs uppercase font-semibold text-terracotta-600 tracking-wider mb-1">
                    {card.subtitle}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-terracotta-600 transition-colors mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-sm font-bold text-stone-900 group-hover:text-terracotta-600">
                  <span>{card.actionText}</span>
                  <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-terracotta-50 flex items-center justify-center text-stone-700 group-hover:text-terracotta-600 transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}

            {/* Sixth spotlight card: Crowdsourced Documentation Banner */}
            <div
              onClick={() => handleNav('document')}
              className="bg-gradient-to-br from-stone-900 via-stone-800 to-terracotta-950 text-white rounded-3xl p-8 shadow-xl border border-amber-500/30 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300 group md:col-span-2 lg:col-span-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full border border-amber-400/50 bg-amber-950 text-amber-300">
                    Community Action
                  </span>
                </div>

                <div className="text-xs uppercase font-semibold text-amber-400 tracking-wider mb-1">
                  Youth & Citizen Archive
                </div>
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-300 transition-colors mb-3">
                  Document Your Local Heritage
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed">
                  Record grandmother's folklore, vanishing village crafts, and sacred groves before they disappear.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-700/60 flex items-center justify-between text-sm font-bold text-amber-300 group-hover:text-white">
                <span>Submit Documentation</span>
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300 group-hover:bg-amber-500 group-hover:text-stone-900 transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Daily Cultural Spotlight Section */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-50 via-terracotta-50/40 to-stone-50 rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-terracotta-600 text-white text-xs font-bold uppercase tracking-wider">
                    Today's Living Heritage Spotlight
                  </span>
                  <VerifiedBadge sourceName="UNESCO World Heritage #250bis" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900">
                  The Shadowless Vimana of Thanjavur: Brihadisvara Temple
                </h3>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  Completed in 1010 CE under Raja Raja Chola I, this monolithic granite marvel was constructed without mortar, utilizing interlocking stone puzzle joints. The 80-tonne granite capstone was raised along a 6-kilometre inclined ramp.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-stone-600">
                  <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-stone-200 shadow-sm">
                    🏛️ Dravidian Granite Architecture
                  </span>
                  <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-stone-200 shadow-sm">
                    📜 Inscribed 1010 CE
                  </span>
                  <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-stone-200 shadow-sm">
                    📍 Thanjavur, Tamil Nadu
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <button
                  onClick={() => handleNav('avatar')}
                  className="w-full px-5 py-3.5 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Bot className="w-4 h-4" />
                  <span>Ask Aruvi About This</span>
                </button>
                <button
                  onClick={() => handleNav('map')}
                  className="w-full px-5 py-3.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Map className="w-4 h-4 text-terracotta-600" />
                  <span>View on Living Map</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
