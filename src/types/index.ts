export type CulturalDomain = 
  | 'traditions' 
  | 'festivals' 
  | 'crafts' 
  | 'food' 
  | 'music' 
  | 'languages' 
  | 'stories';

export interface StateHeritage {
  id: string;
  name: string;
  code: string;
  capital: string;
  region: 'North' | 'South' | 'East' | 'West' | 'North-East' | 'Central';
  greeting: string;
  languageSpoken: string;
  audioGreetingText: string;
  summary: string;
  bannerImage: string;
  verifiedSource: {
    institution: string;
    referenceDoc: string;
    verifiedYear: number;
    url?: string;
  };
  traditions: {
    title: string;
    desc: string;
    significance: string;
    tags: string[];
  }[];
  festivals: {
    name: string;
    season: string;
    desc: string;
    rituals: string;
  }[];
  crafts: {
    name: string;
    giStatus: boolean;
    material: string;
    desc: string;
  }[];
  food: {
    name: string;
    giTagged: boolean;
    desc: string;
    culturalRoots: string;
  }[];
  music: {
    form: string;
    instrument: string;
    desc: string;
  }[];
  languages: {
    name: string;
    script: string;
    speakersApprox: string;
    oralTradition: string;
  }[];
  stories: {
    title: string;
    excerpt: string;
    theme: string;
  }[];
  artisanSpotlight?: {
    name: string;
    craft: string;
    village: string;
    quote: string;
  };
}

export type TimelineEraId = 'ancient' | 'medieval' | 'colonial' | 'modern' | 'future';

export interface TimelineEra {
  id: TimelineEraId;
  name: string;
  subTitle: string;
  yearRange: string;
  overview: string;
  culturalPillars: {
    title: string;
    description: string;
    verifiedSource: string;
  }[];
  masterpieceArtifact: {
    name: string;
    period: string;
    material: string;
    locationFound: string;
    currentPreservation: string;
    description: string;
    modelType: 'dancing_girl' | 'nataraja' | 'charkha' | 'satellite' | 'digital_mandala';
    hotspots: {
      x: number;
      y: number;
      label: string;
      fact: string;
    }[];
  };
  achievements: string[];
}

export interface AruviMessage {
  id: string;
  sender: 'user' | 'aruvi';
  text: string;
  timestamp: string;
  verifiedSource?: {
    org: string;
    citation: string;
    category: string;
  };
  audioAvailable?: boolean;
  suggestedFollowUps?: string[];
}

export interface HeritageCreation {
  id: string;
  type: 'kolam' | 'pottery' | 'blockprint' | 'textile';
  title: string;
  dataUrl: string;
  createdAt: string;
  metadata?: {
    colorsUsed?: string[];
    symmetry?: string;
    glaze?: string;
    weaveDensity?: string;
  };
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  verifiedSource: string;
  xpReward: number;
}

export interface CraftMatchItem {
  id: string;
  craftName: string;
  state: string;
  craftType: string;
  clue: string;
  funFact: string;
}

export interface HeritageSubmission {
  id: string;
  title: string;
  traditionType: string;
  state: string;
  district: string;
  community: string;
  story: string;
  mediaType: 'photo' | 'audio' | 'video' | 'text';
  mediaUrl?: string;
  contributorName: string;
  contributorRole: string;
  consentConfirmed: boolean;
  indigenousRightsProtected: boolean;
  verificationStatus: 'Under Review' | 'AI Authenticated' | 'Scholar Verified' | 'ASI Archived';
  submittedAt: string;
  likes: number;
}

export interface Badge {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export type PageView = 
  | 'home' 
  | 'map' 
  | 'timetravel' 
  | 'avatar' 
  | 'lab' 
  | 'learn' 
  | 'document' 
  | 'profile';
