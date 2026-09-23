import React from 'react';
import { HeritageProvider, useHeritage } from './context/HeritageContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { NotificationToast } from './components/common/NotificationToast';
import { HomePage } from './components/home/HomePage';
import { LivingHeritageMap } from './components/map/LivingHeritageMap';
import { TimeTravelIndia } from './components/timetravel/TimeTravelIndia';
import { AruviAvatar } from './components/avatar/AruviAvatar';
import { HeritageLab } from './components/lab/HeritageLab';
import { LearnByDoing } from './components/learn/LearnByDoing';
import { DocumentHeritage } from './components/document/DocumentHeritage';
import { UserProfile } from './components/profile/UserProfile';

const MainContent: React.FC = () => {
  const { currentPage } = useHeritage();

  return (
    <main className="flex-1 min-h-[calc(100vh-160px)]">
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'map' && <LivingHeritageMap />}
      {currentPage === 'timetravel' && <TimeTravelIndia />}
      {currentPage === 'avatar' && <AruviAvatar />}
      {currentPage === 'lab' && <HeritageLab />}
      {currentPage === 'learn' && <LearnByDoing />}
      {currentPage === 'document' && <DocumentHeritage />}
      {currentPage === 'profile' && <UserProfile />}
    </main>
  );
};

export const App: React.FC = () => {
  return (
    <HeritageProvider>
      <div className="min-h-screen flex flex-col bg-jali-pattern text-stone-900 selection:bg-terracotta-500 selection:text-white">
        <Navbar />
        <MainContent />
        <Footer />
        <NotificationToast />
      </div>
    </HeritageProvider>
  );
};

export default App;
