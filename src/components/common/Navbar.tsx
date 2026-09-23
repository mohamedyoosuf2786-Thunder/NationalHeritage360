import React, { useState } from 'react';
import { useHeritage } from '../../context/HeritageContext';
import { PageView } from '../../types';
import { 
  Sparkles, 
  Map, 
  Clock, 
  Bot, 
  Palette, 
  GraduationCap, 
  UploadCloud, 
  User, 
  Volume2, 
  VolumeX, 
  Menu, 
  X,
  Compass
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    currentPage, 
    setCurrentPage, 
    userXP, 
    userLevel, 
    soundEnabled, 
    toggleSound, 
    playChime 
  } = useHeritage();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageView; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'home', label: 'Home', icon: <Compass className="w-4 h-4" /> },
    { id: 'map', label: 'Living Map', icon: <Map className="w-4 h-4" /> },
    { id: 'timetravel', label: 'Time Travel', icon: <Clock className="w-4 h-4" /> },
    { id: 'avatar', label: 'Aruvi AI', icon: <Bot className="w-4 h-4" />, badge: 'AI' },
    { id: 'lab', label: 'Heritage Lab', icon: <Palette className="w-4 h-4" /> },
    { id: 'learn', label: 'Learn & Quiz', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'document', label: 'Document', icon: <UploadCloud className="w-4 h-4" /> },
    { id: 'profile', label: 'Profile', icon: <User className="w-4 h-4" /> }
  ];

  const handleNavClick = (page: PageView) => {
    playChime();
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-heritage border-b border-stone-200/80 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-terracotta-500 via-amber-600 to-terracotta-800 flex items-center justify-center shadow-heritage text-white transition-transform group-hover:scale-105 border border-amber-300/40">
              <span className="font-serif font-black text-xl tracking-tighter">३६०</span>
              {/* Subtle rotating glow ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-amber-300/30 animate-spin-slow pointer-events-none" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-black tracking-wide text-stone-900 group-hover:text-terracotta-600 transition-colors">
                  HERITAGE <span className="text-terracotta-600 font-extrabold">360</span>
                </span>
                <span className="hidden md:inline-flex text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300/60 uppercase tracking-widest">
                  SIH 2026
                </span>
              </div>
              <p className="text-[11px] text-stone-500 hidden sm:block tracking-wide">
                India's Living Cultural Repository
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navItems.map(item => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 ${
                    active 
                      ? 'bg-terracotta-50 text-terracotta-700 shadow-sm border border-terracotta-200/80 font-bold' 
                      : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100/70'
                  }`}
                >
                  <span className={active ? 'text-terracotta-600' : 'text-stone-400 group-hover:text-stone-600'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-amber-500 text-white">
                      {item.badge}
                    </span>
                  )}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-terracotta-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* User Status, Sound & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            
            {/* XP Pill */}
            <button 
              onClick={() => handleNavClick('profile')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-300/80 text-amber-900 hover:bg-amber-100/80 transition-all text-xs font-bold shadow-sm"
              title="View your Dharohar Level and XP"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin-slow" />
              <div className="flex items-center gap-1">
                <span>{userXP}</span>
                <span className="text-amber-600/70 font-normal">XP</span>
              </div>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="hidden sm:inline-block text-[11px] font-semibold text-amber-800 truncate max-w-[90px]">
                {userLevel.name}
              </span>
            </button>

            {/* Sound Toggle (Acoustic Chimes) */}
            <button
              onClick={toggleSound}
              className={`p-2 rounded-xl border transition-colors ${
                soundEnabled 
                  ? 'bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200' 
                  : 'bg-stone-100/50 text-stone-400 border-dashed border-stone-300'
              }`}
              title={soundEnabled ? 'Acoustic bell feedback is active (Click to mute)' : 'Unmute sound effects'}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-terracotta-600" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="lg:hidden p-2 rounded-xl bg-stone-100 text-stone-700 border border-stone-200 hover:bg-stone-200"
              aria-label="Open Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FAF7F2] p-4 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map(item => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 p-3 rounded-xl text-left text-sm font-semibold transition-all ${
                    active 
                      ? 'bg-terracotta-500 text-white shadow-md' 
                      : 'bg-white border border-stone-200 text-stone-800 hover:bg-stone-50'
                  }`}
                >
                  <span className={active ? 'text-amber-200' : 'text-stone-500'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
