import { TimelineEra } from '../types';

export const timelineErasData: TimelineEra[] = [
  {
    id: 'ancient',
    name: 'Ancient Era',
    subTitle: 'The Dawn of Urbanism, Vedas & Monolithic Art',
    yearRange: '3300 BCE – 600 CE',
    overview: 'From the meticulously planned brick cities and subterranean drainage of the Indus Valley to the golden age of Gupta mathematics, literature, and the rock-cut cave sanctuaries of Ajanta and Ellora.',
    culturalPillars: [
      {
        title: 'Harappan Urban Planning & Metrology',
        description: 'Standardized baked brick ratios (1:2:4), multi-story residences, and the Great Bath of Mohenjo-daro exhibiting early bitumen waterproofing technology.',
        verifiedSource: 'Archaeological Survey of India (ASI) Indus Civilization Excavation Reports'
      },
      {
        title: 'Vedic Oral Chanting (UNESCO World Heritage)',
        description: 'The world’s oldest continuously preserved oral recitation system, codified with exact pitch accents (Udatta, Anudatta, Svarita) that preserved texts without drift for millennia.',
        verifiedSource: 'UNESCO Representative List of the Intangible Cultural Heritage of Humanity'
      },
      {
        title: 'Mauryan Polished Stone Edicts & Ashoka Pillar',
        description: 'Mirror-like lustrous Chunar sandstone pillars inscribed in Brahmi script, declaring universal ethical tenets (Dhamma), non-violence, and ecological preservation.',
        verifiedSource: 'National Museum New Delhi & Epigraphia Indica'
      }
    ],
    masterpieceArtifact: {
      name: 'The Dancing Girl of Mohenjo-daro',
      period: 'c. 2300–1750 BCE (Mature Harappan)',
      material: 'Lost-wax cast Bronze alloy',
      locationFound: 'HR Area, Mohenjo-daro (Indus Valley)',
      currentPreservation: 'National Museum, New Delhi (Gallery of Harappan Art)',
      description: 'A 10.5-centimeter bronze statuette depicting a poised young woman standing in a confident tribhanga stance. Her arm is stacked with bangles made of conch shell, manifesting ancient metallurgical and lost-wax casting mastery.',
      modelType: 'dancing_girl',
      hotspots: [
        { x: -0.1, y: 0.8, label: 'Shell Bangles', fact: 'Over 24 bangles adorn her left arm, indicating advanced maritime shell trading across the Arabian Sea.' },
        { x: 0.0, y: 0.4, label: 'Tribhanga Posture', fact: 'The relaxed three-bend posture anticipates later Indian classical dance stances by two thousand years.' },
        { x: 0.1, y: 1.1, label: 'Chignon Hairdo', fact: 'Intricately coiled hair tied back in a heavy bun reflecting refined Harappan grooming aesthetics.' }
      ]
    },
    achievements: [
      'Invention of Decimal System and Zero (Aryabhata & Brahmagupta)',
      'Ayurveda treatises of Charaka and Sushruta (Cataract & Rhinoplasty)',
      'Rock-cut monolithic architecture (Barabar Caves, Ajanta)'
    ]
  },
  {
    id: 'medieval',
    name: 'Medieval Era',
    subTitle: 'The Age of Grand Temples, Lost-Wax Bronzes & Indo-Islamic Syntheses',
    yearRange: '600 CE – 1750 CE',
    overview: 'An epoch of extraordinary architectural and aesthetic synthesis: soaring granite gopurams of the Cholas, Vijayanagara stone chariots, delicate sandstone jali lattices, and the blossoming of miniature painting traditions.',
    culturalPillars: [
      {
        title: 'Chola Lost-Wax Bronze Sculpture',
        description: 'The pinnacle of sacred metallurgical art under Raja Raja Chola I and Queen Sembiyan Mahadevi, creating fluid deities according to Agamic proportions.',
        verifiedSource: 'Government Museum Chennai & UNESCO Great Living Chola Temples'
      },
      {
        title: 'Vijayanagara Monolithic Architecture',
        description: 'The monumental world city of Hampi featuring musical pillars that ring with distinct acoustic pitches when struck, water aqueducts, and the Stone Chariot.',
        verifiedSource: 'UNESCO World Heritage Group of Monuments at Hampi'
      },
      {
        title: 'Mughal & Rajput Miniature Painting',
        description: 'Intricate illuminated manuscripts crafted with squirrel-hair brushes, utilizing lapis lazuli, crushed pearls, and malachite pigments.',
        verifiedSource: 'Victoria and Albert Museum & National Museum New Delhi'
      }
    ],
    masterpieceArtifact: {
      name: 'Nataraja: The Cosmic Dancer',
      period: 'c. 10th–11th Century CE (Chola Dynasty)',
      material: 'Panchaloha (Sacred five-metal lost-wax bronze alloy)',
      locationFound: 'Thanjavur, Tamil Nadu',
      currentPreservation: 'Thanjavur Art Gallery & National Museum',
      description: 'The supreme iconographic synthesis of science, philosophy, and art: Shiva dances within an arch of fire (Prabha Mandala), holding the drum of cosmic creation in his upper right hand and the flame of transformation in his left.',
      modelType: 'nataraja',
      hotspots: [
        { x: 0.35, y: 0.9, label: 'Damaru (Creation)', fact: 'The hourglass drum vibrates with the primordial sound (Nada Brahma), initiating space and time.' },
        { x: -0.35, y: 0.9, label: 'Agni (Transformation)', fact: 'The eternal flame dissolves illusions and purifies the cosmic cycle.' },
        { x: 0.0, y: -0.4, label: 'Apasmara Dwarf', fact: 'The demon of ignorance and forgetfulness trampled beneath the sacred foot of wisdom.' }
      ]
    },
    achievements: [
      'Acoustic Musical Stone Pillars at Hampi and Madurai',
      'Pietra Dura and Perforated Sandstone Jali Lattice screens',
      'Development of Classical Hindustani and Carnatic Raga systems'
    ]
  },
  {
    id: 'colonial',
    name: 'Colonial Era',
    subTitle: 'Swadeshi Resistance, Handloom Revival & Renaissance',
    yearRange: '1750 CE – 1947 CE',
    overview: 'As mechanized textile mills of industrial Britain threatened centuries-old Indian handlooms, the spinning wheel (Charkha) and indigenous crafts transformed into weapons of non-violent political resistance and cultural revival.',
    culturalPillars: [
      {
        title: 'The Swadeshi Handloom Movement',
        description: 'Mahatma Gandhi transformed handspun Khadi cloth into the uniform of the freedom struggle, restoring dignity and economic self-sufficiency to village artisans.',
        verifiedSource: 'National Gandhi Museum & Sabarmati Ashram Archives'
      },
      {
        title: 'The Bengal Renaissance',
        description: 'Intellectual and aesthetic revival spearheaded by Rabindranath Tagore, Abanindranath Tagore, and Raja Ravi Varma, blending Asian visual idioms with modern humanist philosophy.',
        verifiedSource: 'Visva-Bharati University, Santiniketan & Sahitya Akademi'
      },
      {
        title: 'Classical Dance & Music Institutionalization',
        description: 'Revival of traditional Sadir into modern Bharatanatyam (Rukmini Devi Arundale at Kalakshetra) and Kathakali at Kerala Kalamandalam by Vallathol Narayana Menon.',
        verifiedSource: 'Sangeet Natak Akademi National Archives'
      }
    ],
    masterpieceArtifact: {
      name: 'The Swadeshi Box Charkha',
      period: 'c. 1920–1935 CE (Indian Independence Movement)',
      material: 'Indian Teak wood, Cotton drive-cord, Steel spindle',
      locationFound: 'Wardha & Sabarmati, Gujarat',
      currentPreservation: 'Mani Bhavan & Sabarmati Ashram',
      description: 'Invented by Mahatma Gandhi while imprisoned in Yerwada jail, the portable folding box Charkha symbolized self-reliance, unity of all citizens, and resistance against colonial economic dominance.',
      modelType: 'charkha',
      hotspots: [
        { x: -0.2, y: 0.4, label: 'Spindle Mechanism', fact: 'Spins uncarded cotton into fine threads with an energy-efficient hand-cranked gear ratio.' },
        { x: 0.25, y: 0.2, label: 'Compact Box Design', fact: 'Folds neatly into a briefcase so freedom volunteers could carry their production wherever they travelled.' },
        { x: 0.0, y: -0.1, label: 'Philosophy of Labor', fact: 'Every citizen spinning 30 minutes daily leveled all socioeconomic distinctions.' }
      ]
    },
    achievements: [
      'Creation of the Indian National Flag centered on the Ashoka Chakra',
      'Foundation of Santiniketan as an open-air world university',
      'Codification of classical ragas into standardized Thaat systems'
    ]
  },
  {
    id: 'modern',
    name: 'Modern Era',
    subTitle: 'Constitutional Safeguards, GI Protections & Global Accolades',
    yearRange: '1947 CE – Present',
    overview: 'Independent India established national cultural institutions, enacted the Geographical Indications of Goods Act to protect generational crafts, and inscribed 42 UNESCO World Heritage properties.',
    culturalPillars: [
      {
        title: 'Geographical Indications (GI) Registry',
        description: 'Over 500 indigenous crafts, textiles, and agricultural cultivars granted legal protection against duplication, preserving artisan guilds.',
        verifiedSource: 'Intellectual Property India (GI Registry Office, Chennai)'
      },
      {
        title: 'National Cultural Academies',
        description: 'Formation of Lalit Kala, Sangeet Natak, and Sahitya Akademies to preserve oral dialects, folk instruments, and living legends.',
        verifiedSource: 'Ministry of Culture, Government of India'
      },
      {
        title: 'Tribal Cultural Preservation Initiatives',
        description: 'Documentation of Dhokra metal casting, Warli and Gond tribal art, and the preservation of sacred forest groves (Devarakadus).',
        verifiedSource: 'TRIFED (Tribal Cooperative Marketing Development Federation of India)'
      }
    ],
    masterpieceArtifact: {
      name: 'The Ashoka Lion Capital (National Emblem)',
      period: 'Adopted January 26, 1950 (Origin 250 BCE Sarnath)',
      material: 'Carved Sandstone & Modern Bronze Cast',
      locationFound: 'Sarnath, Uttar Pradesh',
      currentPreservation: 'Rashtrapati Bhavan & Sarnath Archaeological Museum',
      description: 'The formal emblem of the Republic of India: Four Asiatic lions standing back to back symbolizing power, courage, pride, and confidence, mounted on a circular abacus with the 24-spoke Dharma Chakra.',
      modelType: 'satellite',
      hotspots: [
        { x: 0.0, y: 0.8, label: 'Four Lions', fact: 'Radiating moral guardianship in all four cardinal directions.' },
        { x: 0.0, y: 0.1, label: '24-Spoke Wheel', fact: 'The Chakra of eternal righteousness and continuous national progress.' },
        { x: 0.0, y: -0.4, label: 'Satyameva Jayate', fact: '"Truth Alone Triumphs", an ancient aphorism from the Mundaka Upanishad.' }
      ]
    },
    achievements: [
      '42 UNESCO World Heritage Sites (including Santiniketan and Hoysala Sacred Ensembles in 2023)',
      '15 UNESCO Intangible Cultural Heritage Inscriptions',
      'The National Mission for Manuscripts digitizing 5 million ancient texts'
    ]
  },
  {
    id: 'future',
    name: 'Future Horizon',
    subTitle: 'AI Preservation, 3D Digital Twins & Living Metaspheres',
    yearRange: '2026 and Beyond',
    overview: 'Empowering future generations with spatial computing, generative AI that revives lost dialects, millimeter-accurate LiDAR scans of monolithic temples, and immutable provenance for rural weavers.',
    culturalPillars: [
      {
        title: 'Millimeter-Accurate LiDAR Digital Twins',
        description: 'Terrestrial laser scanners and drone photogrammetry capturing sacred rock architecture down to the millimeter to protect against climate erosion.',
        verifiedSource: 'Smart India Hackathon 2026 Research Initiative & ASI Digital Heritage Project'
      },
      {
        title: 'AI Dialect Guardians',
        description: 'Neural speech synthesis models trained with tribal elders to prevent the extinction of endangered oral languages that have no written script.',
        verifiedSource: 'National Language Translation Mission (Bhashini, MeitY)'
      },
      {
        title: 'Artisan Provenance On the Decentralized Web',
        description: 'Smart cryptographically verifiable tags woven directly into silk borders, guaranteeing genuine artisan compensation and fair trade.',
        verifiedSource: 'Ministry of Textiles & Handloom Export Promotion Council'
      }
    ],
    masterpieceArtifact: {
      name: 'Heritage 360 AI Digital Twin & Hologram',
      period: '2026 – Present (Smart India Hackathon)',
      material: 'Generative Neural Radiance Fields (NeRF) & 3D Spatial Mesh',
      locationFound: 'Distributed Cloud Node',
      currentPreservation: 'Living National Digital Cultural Archive',
      description: 'An interactive 3D digital sphere unifying sacred geometry, folk art traditions, and continuous citizen crowdsourcing into an eternal living cultural repository.',
      modelType: 'digital_mandala',
      hotspots: [
        { x: 0.0, y: 0.6, label: 'Neural Mesh', fact: 'Synthesizes archival photography with laser scans to reconstruct damaged stone murals.' },
        { x: -0.3, y: 0.0, label: 'Living Voice Stream', fact: 'Speaks 22 official Indian languages with indigenous regional inflections.' },
        { x: 0.3, y: -0.3, label: 'Community Crowdsourcing', fact: 'Directly linked to grassroots student contributions across every district in India.' }
      ]
    },
    achievements: [
      'Interactive 3D Virtual Museums accessible anywhere on Earth',
      'Preservation of over 197 endangered Indian languages through conversational AI',
      'Empowerment of over 4 million rural craftspeople through digital market access'
    ]
  }
];
