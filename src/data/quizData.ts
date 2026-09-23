import { QuizQuestion, CraftMatchItem } from '../types';

export const heritageQuizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'The lost-wax method (Cire Perdue) used to cast world-famous Chola bronzes like Nataraja is described in which ancient Indian treatise?',
    options: [
      'Shilpa Shastras & Manasara',
      'Charaka Samhita',
      'Arthashastra',
      'Natyashastra'
    ],
    correctAnswer: 0,
    explanation: 'The Shilpa Shastras and Manasara provide precise canonized mathematical ratios (Talamana system) for casting sacred five-metal alloy (Panchaloha) statues using beeswax cores.',
    category: 'Sculpture & Metallurgy',
    verifiedSource: 'Archaeological Survey of India & IGNCA Metallurgy Studies',
    xpReward: 50
  },
  {
    id: 'q2',
    question: 'Why is the famous Aranmula Kannadi metal mirror from Kerala unique compared to standard household glass mirrors?',
    options: [
      'It is polished with liquid mercury and diamond dust',
      'It is a front-surface reflecting alloy that eliminates secondary refraction and distortion',
      'It can only be viewed under sunlight',
      'It is crafted from translucent quartz crystal'
    ],
    correctAnswer: 1,
    explanation: 'Standard glass mirrors have reflective silver coating on the rear, causing double-refraction and image distortion. Aranmula Kannadi is a 100% front-reflecting secret copper-tin alloy mirror with zero glass.',
    category: 'Traditional Science & Crafts',
    verifiedSource: 'Geographical Indications Registry of India (GI #1)',
    xpReward: 50
  },
  {
    id: 'q3',
    question: 'Which sacred textile from Gujarat requires both the warp and weft threads to be tie-dyed separately with micro-precision before weaving on the loom?',
    options: [
      'Patan Patola (Double Ikat)',
      'Bandhani Tie-Dye',
      'Chanderi Silk',
      'Kalamkari Hand-Paint'
    ],
    correctAnswer: 0,
    explanation: 'Patan Patola is one of only three true Double Ikat traditions in the world. The mathematical alignment is so exact that the design appears identically brilliant on both the front and reverse sides of the silk.',
    category: 'Handloom & Textiles',
    verifiedSource: 'National Institute of Design (NID) & Ministry of Textiles',
    xpReward: 50
  },
  {
    id: 'q4',
    question: 'In 2021, which monumental Indian public art festival was inscribed on UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity?',
    options: [
      'Pushkar Camel Fair',
      'Durga Puja in Kolkata',
      'Thrissur Pooram',
      'Kite Festival Ahmedabad'
    ],
    correctAnswer: 1,
    explanation: 'Durga Puja in Kolkata was recognized by UNESCO as the finest example of the public celebration of religion and art, transforming an entire metropolis into a month-long contemporary art gallery.',
    category: 'Festivals & Living Rituals',
    verifiedSource: 'UNESCO Intangible Cultural Heritage Inscription #01774',
    xpReward: 60
  },
  {
    id: 'q5',
    question: 'What is the ecological purpose of drawing traditional Kolam designs every morning using coarse edible rice flour?',
    options: [
      'To measure ground moisture and humidity',
      'To provide nourishment to ants, beetles, and birds (Bhuta Yajna)',
      'To prevent footwear from slipping on mud',
      'To repel nocturnal rodents with fragrance'
    ],
    correctAnswer: 1,
    explanation: 'Traditional Kolams were made with unbleached rice flour so that birds, squirrels, and small insects could feast at the doorstep, embodying the ancient concept of Bhuta Yajna (compassion for all living beings).',
    category: 'Sacred Living & Ecology',
    verifiedSource: 'Sahitya Akademi Folk Culture Studies',
    xpReward: 50
  },
  {
    id: 'q6',
    question: 'The famous "Musical Pillars" of the Vittala Temple in Hampi are carved from single blocks of granite. What acoustic phenomenon do they produce when gently tapped?',
    options: [
      'Saptaswaras (The 7 notes of the Indian classical scale)',
      'Sub-audible infrasound vibrations that repel bats',
      'Constant oceanic white noise drone',
      'Synthesized Vedic echo frequencies'
    ],
    correctAnswer: 0,
    explanation: 'The 56 monolithic granite pillars in Hampi were carved with varied hollows, densities, and cross-sections so that each auxiliary pillar rings with notes of the Indian musical octave (Sa, Re, Ga, Ma, Pa, Dha, Ni).',
    category: 'Acoustic Architecture',
    verifiedSource: 'Archaeological Survey of India Acoustic Heritage Studies',
    xpReward: 70
  }
];

export const craftMatchItems: CraftMatchItem[] = [
  {
    id: 'cm1',
    craftName: 'Bidriware Inlaid Metalwork',
    state: 'Karnataka',
    craftType: 'Metalwork',
    clue: 'Blackened zinc and copper alloy intricately inlaid with pure silver filigree wire; uses soil from Bidar Fort for its dark oxidizing paste.',
    funFact: 'The special mud collected from the 500-year-old fort grounds contains chemicals that darken the metal while leaving silver gleaming white!'
  },
  {
    id: 'cm2',
    craftName: 'Pashmina & Kani Shawls',
    state: 'Jammu & Kashmir',
    craftType: 'Textile',
    clue: 'Woven from the ultra-fine underfleece of Changthangi mountain goats grazing at 14,000 feet in Ladakh.',
    funFact: 'A master weaver uses tiny wooden spool needles called "Tujis" and follows written coded notations called "Talim".'
  },
  {
    id: 'cm3',
    craftName: 'Channapatna Wooden Toys',
    state: 'Karnataka',
    craftType: 'Woodcraft',
    clue: 'Non-toxic turned-wood lacquer toys made from soft Wrightia tinctoria (Aale mara) wood and colored with natural vegetable turmeric and indigo.',
    funFact: 'Tipu Sultan originally invited Persian master turners in the 18th century to train local artisans!'
  },
  {
    id: 'cm4',
    craftName: 'Madhubani (Mithila) Painting',
    state: 'Bihar',
    craftType: 'Folk Art',
    clue: 'Traditional wall and paper art drawn with twigs, matchsticks, and natural dyes; characterized by eye-catching geometric borders and twin eye lines.',
    funFact: 'Historically created by women across Mithila during weddings, depicting deities, nature, and the Kohbar nuptial chamber.'
  },
  {
    id: 'cm5',
    craftName: 'Dhokra Lost-Wax Bell Metal',
    state: 'Chhattisgarh & Odisha',
    craftType: 'Tribal Casting',
    clue: 'Non-ferrous metal casting using beeswax threads over clay cores; the oldest unbroken metal casting tradition dating back to Harappan times.',
    funFact: 'Every single piece is completely unique because the clay mold must be broken to release the finished metal figure!'
  },
  {
    id: 'cm6',
    craftName: 'Thanjavur Paintings (Palagai Padam)',
    state: 'Tamil Nadu',
    craftType: 'Gilded Art',
    clue: 'Embossed gesso relief layered with pure 22-carat gold foil, Jaipur stones, and vibrant mineral colors on sacred jackfruit wood.',
    funFact: 'The gold foil used in authentic Thanjavur paintings never tarnishes or turns black, remaining luminous for centuries.'
  }
];
