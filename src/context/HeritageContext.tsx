import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  PageView, 
  StateHeritage, 
  TimelineEraId, 
  HeritageCreation, 
  HeritageSubmission, 
  Badge 
} from '../types';
import { statesHeritageData } from '../data/statesHeritageData';

const INITIAL_BADGES: Badge[] = [
  {
    id: 'first-step',
    name: 'Pratham Padam',
    category: 'Exploration',
    description: 'Began the voyage across India’s 5,000-year living heritage.',
    icon: 'Compass',
    unlocked: true,
    unlockedAt: '2026-09-23'
  },
  {
    id: 'kolam-master',
    name: 'Sacred Geometer',
    category: 'Heritage Lab',
    description: 'Designed and saved an authentic symmetric Kolam creation.',
    icon: 'Sparkles',
    unlocked: false
  },
  {
    id: 'potter-apprentice',
    name: 'Terracotta Virtuoso',
    category: 'Heritage Lab',
    description: 'Threw and fired a virtual clay vase on the potter’s wheel.',
    icon: 'Layers',
    unlocked: false
  },
  {
    id: 'time-traveler',
    name: 'Kaala Voyager',
    category: 'Time Travel',
    description: 'Explored all five cultural epochs from Harappa to the AI Meta-horizon.',
    icon: 'Clock',
    unlocked: false
  },
  {
    id: 'guru-shishya',
    name: 'Parampara Scholar',
    category: 'Learn by Doing',
    description: 'Completed the Dharohar Quiz Quest with high accuracy.',
    icon: 'Award',
    unlocked: false
  },
  {
    id: 'folk-chronicler',
    name: 'Heritage Guardian',
    category: 'Documentation',
    description: 'Documented and submitted an endangered community tradition.',
    icon: 'BookOpen',
    unlocked: false
  },
  {
    id: 'craft-curator',
    name: 'Shilpa Connoisseur',
    category: 'Living Map',
    description: 'Explored all regional craft traditions across 5 zones of India.',
    icon: 'MapPin',
    unlocked: false
  }
];

const INITIAL_SUBMISSIONS: HeritageSubmission[] = [
  {
    id: 'sub-1',
    title: 'The Vanishing Lullabies (Lori) of the Chambal Valley',
    traditionType: 'Oral Folklore & Lullabies',
    state: 'Madhya Pradesh',
    district: 'Morena',
    community: 'Gurjar & Bundela Elders',
    story: 'Documented from 86-year-old Shanti Devi: ancient evening lullabies that weave seasonal weather warnings and tree ecology into bedtime melodies for children, previously unwritten and preserved only in living memory.',
    mediaType: 'audio',
    contributorName: 'Aaditya Sharma',
    contributorRole: 'College Student Researcher, SIH 2026',
    consentConfirmed: true,
    indigenousRightsProtected: true,
    verificationStatus: 'Scholar Verified',
    submittedAt: '2026-09-20',
    likes: 142
  },
  {
    id: 'sub-2',
    title: 'Living Root Bridges (Jingkieng Jri) Bio-Engineering',
    traditionType: 'Indigenous Bio-Architecture',
    state: 'Meghalaya',
    district: 'East Khasi Hills',
    community: 'Khasi & Jaintia Tribes',
    story: 'Documenting the generational training of Ficus elastica aerial roots across fast-flowing monsoon rivers. The roots grow stronger with every passing decade, lasting over 500 years in harmony with nature.',
    mediaType: 'photo',
    contributorName: 'Wanphrang Lyngdoh',
    contributorRole: 'Eco-Architecture Student',
    consentConfirmed: true,
    indigenousRightsProtected: true,
    verificationStatus: 'ASI Archived',
    submittedAt: '2026-09-18',
    likes: 289
  },
  {
    id: 'sub-3',
    title: 'Kaavi Kale: Sacred Red-Ochre Etching of Konkan',
    traditionType: 'Sacred Murals & Stucco Art',
    state: 'Goa',
    district: 'North Goa',
    community: 'Saraswat Temple Guilds',
    story: 'A nearly extinct architectural etching technique utilizing local laterite red soil (Kaav) and sea-shell lime plaster, etched into sacred temple walls before the lime hardens.',
    mediaType: 'photo',
    contributorName: 'Tanvi Prabhu',
    contributorRole: 'Fine Arts Undergraduate',
    consentConfirmed: true,
    indigenousRightsProtected: true,
    verificationStatus: 'AI Authenticated',
    submittedAt: '2026-09-22',
    likes: 95
  }
];

interface HeritageContextType {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  selectedState: StateHeritage | null;
  setSelectedState: (state: StateHeritage | null) => void;
  activeTimelineEra: TimelineEraId;
  setActiveTimelineEra: (era: TimelineEraId) => void;
  userXP: number;
  userLevel: { name: string; level: number; nextLevelXP: number; title: string };
  badges: Badge[];
  savedCreations: HeritageCreation[];
  savedHeritageItems: { id: string; title: string; category: string; stateOrEra: string; date: string }[];
  submissions: HeritageSubmission[];
  soundEnabled: boolean;
  toggleSound: () => void;
  playChime: () => void;
  playSuccessChime: () => void;
  addXP: (amount: number, reason: string) => void;
  unlockBadge: (badgeId: string) => void;
  saveCreation: (creation: Omit<HeritageCreation, 'id' | 'createdAt'>) => void;
  saveHeritageItem: (item: { title: string; category: string; stateOrEra: string }) => void;
  submitHeritage: (submission: Omit<HeritageSubmission, 'id' | 'submittedAt' | 'likes' | 'verificationStatus'>) => void;
  likeSubmission: (id: string) => void;
  notification: { message: string; type: 'xp' | 'badge' | 'success' } | null;
  dismissNotification: () => void;
}

const HeritageContext = createContext<HeritageContextType | undefined>(undefined);

export const HeritageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedState, setSelectedState] = useState<StateHeritage | null>(statesHeritageData[0]);
  const [activeTimelineEra, setActiveTimelineEra] = useState<TimelineEraId>('ancient');
  
  // Audio state
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  
  // User Gamification
  const [userXP, setUserXP] = useState<number>(() => {
    const saved = localStorage.getItem('heritage360_xp');
    return saved ? parseInt(saved, 10) : 120;
  });

  const [badges, setBadges] = useState<Badge[]>(() => {
    const saved = localStorage.getItem('heritage360_badges');
    return saved ? JSON.parse(saved) : INITIAL_BADGES;
  });

  const [savedCreations, setSavedCreations] = useState<HeritageCreation[]>(() => {
    const saved = localStorage.getItem('heritage360_creations');
    return saved ? JSON.parse(saved) : [];
  });

  const [savedHeritageItems, setSavedHeritageItems] = useState<{ id: string; title: string; category: string; stateOrEra: string; date: string }[]>(() => {
    const saved = localStorage.getItem('heritage360_bookmarks');
    return saved ? JSON.parse(saved) : [
      { id: 'bm1', title: 'Brihadisvara Temple Architecture', category: 'Monument', stateOrEra: 'Tamil Nadu', date: '2026-09-22' },
      { id: 'bm2', title: 'Lost-Wax Bronze Metallurgy', category: 'Craft', stateOrEra: 'Ancient Era', date: '2026-09-23' }
    ];
  });

  const [submissions, setSubmissions] = useState<HeritageSubmission[]>(() => {
    const saved = localStorage.getItem('heritage360_submissions');
    return saved ? JSON.parse(saved) : INITIAL_SUBMISSIONS;
  });

  const [notification, setNotification] = useState<{ message: string; type: 'xp' | 'badge' | 'success' } | null>(null);

  // Sync with LocalStorage
  useEffect(() => {
    localStorage.setItem('heritage360_xp', userXP.toString());
  }, [userXP]);

  useEffect(() => {
    localStorage.setItem('heritage360_badges', JSON.stringify(badges));
  }, [badges]);

  useEffect(() => {
    localStorage.setItem('heritage360_creations', JSON.stringify(savedCreations));
  }, [savedCreations]);

  useEffect(() => {
    localStorage.setItem('heritage360_bookmarks', JSON.stringify(savedHeritageItems));
  }, [savedHeritageItems]);

  useEffect(() => {
    localStorage.setItem('heritage360_submissions', JSON.stringify(submissions));
  }, [submissions]);

  // Dynamic Level Calculation
  const calculateLevel = (xp: number) => {
    if (xp < 250) {
      return { name: 'Heritage Shishya', level: 1, nextLevelXP: 250, title: 'Inquisitive Seeker of Lore' };
    } else if (xp < 600) {
      return { name: 'Dharohar Explorer', level: 2, nextLevelXP: 600, title: 'Voyager of Sacred Geometries' };
    } else if (xp < 1200) {
      return { name: 'Parampara Guardian', level: 3, nextLevelXP: 1200, title: 'Preserver of Living Traditions' };
    } else {
      return { name: 'Virasat Acharya', level: 4, nextLevelXP: 2500, title: 'Master Ambassador of Indian Heritage' };
    }
  };

  const userLevel = calculateLevel(userXP);

  // Synthesized Acoustic Temple Bell Sound using Web Audio API
  const playChime = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const now = ctx.currentTime;
      // Fundamental temple bell overtone
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(528, now); // 528 Hz Solfeggio / bell frequency
      osc1.frequency.exponentialRampToValueAtTime(524, now + 1.2);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(1056, now); // Harmonious octave
      osc2.frequency.exponentialRampToValueAtTime(1048, now + 0.8);

      gainNode.gain.setValueAtTime(0.001, now);
      gainNode.gain.linearRampToValueAtTime(0.2, now + 0.04);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 1.7);
      osc2.stop(now + 1.7);
    } catch {
      // Audio context might be restricted before interaction
    }
  };

  const playSuccessChime = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;

      [587.33, 880, 1174.66].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.12);
        
        gain.gain.setValueAtTime(0.001, now + idx * 0.12);
        gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.12 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.12 + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 1.3);
      });
    } catch {
      // Ignore
    }
  };

  const addXP = (amount: number, reason: string) => {
    setUserXP(prev => {
      const next = prev + amount;
      return next;
    });
    playSuccessChime();
    setNotification({
      message: `+${amount} XP Earned! ${reason}`,
      type: 'xp'
    });
  };

  const unlockBadge = (badgeId: string) => {
    setBadges(prev => {
      const target = prev.find(b => b.id === badgeId);
      if (target && !target.unlocked) {
        playSuccessChime();
        setNotification({
          message: `Badge Unlocked: "${target.name}"!`,
          type: 'badge'
        });
        return prev.map(b => b.id === badgeId ? { ...b, unlocked: true, unlockedAt: new Date().toISOString().split('T')[0] } : b);
      }
      return prev;
    });
  };

  const saveCreation = (creation: Omit<HeritageCreation, 'id' | 'createdAt'>) => {
    const newCreation: HeritageCreation = {
      ...creation,
      id: 'creation-' + Date.now(),
      createdAt: new Date().toISOString().split('T')[0]
    };
    setSavedCreations(prev => [newCreation, ...prev]);
    addXP(75, `Saved new ${creation.type} artwork to Heritage Portfolio`);
    
    if (creation.type === 'kolam') {
      unlockBadge('kolam-master');
    } else if (creation.type === 'pottery') {
      unlockBadge('potter-apprentice');
    }
  };

  const saveHeritageItem = (item: { title: string; category: string; stateOrEra: string }) => {
    const newItem = {
      id: 'item-' + Date.now(),
      title: item.title,
      category: item.category,
      stateOrEra: item.stateOrEra,
      date: new Date().toISOString().split('T')[0]
    };
    setSavedHeritageItems(prev => [newItem, ...prev]);
    addXP(25, `Bookmarked ${item.title}`);
  };

  const submitHeritage = (submission: Omit<HeritageSubmission, 'id' | 'submittedAt' | 'likes' | 'verificationStatus'>) => {
    const newSubmission: HeritageSubmission = {
      ...submission,
      id: 'sub-' + Date.now(),
      submittedAt: new Date().toISOString().split('T')[0],
      likes: 1,
      verificationStatus: 'Under Review'
    };
    setSubmissions(prev => [newSubmission, ...prev]);
    addXP(150, 'Submitted living heritage documentation for national verification');
    unlockBadge('folk-chronicler');
  };

  const likeSubmission = (id: string) => {
    setSubmissions(prev => prev.map(item => {
      if (item.id === id) {
        playChime();
        return { ...item, likes: item.likes + 1 };
      }
      return item;
    }));
  };

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  const dismissNotification = () => {
    setNotification(null);
  };

  return (
    <HeritageContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedState,
        setSelectedState,
        activeTimelineEra,
        setActiveTimelineEra,
        userXP,
        userLevel,
        badges,
        savedCreations,
        savedHeritageItems,
        submissions,
        soundEnabled,
        toggleSound,
        playChime,
        playSuccessChime,
        addXP,
        unlockBadge,
        saveCreation,
        saveHeritageItem,
        submitHeritage,
        likeSubmission,
        notification,
        dismissNotification
      }}
    >
      {children}
    </HeritageContext.Provider>
  );
};

export const useHeritage = () => {
  const context = useContext(HeritageContext);
  if (!context) {
    throw new Error('useHeritage must be used within a HeritageProvider');
  }
  return context;
};
