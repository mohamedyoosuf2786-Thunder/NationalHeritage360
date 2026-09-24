import { StateHeritage } from '../types';

export const statesHeritageData: StateHeritage[] = [
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    code: 'TN',
    capital: 'Chennai',
    region: 'South',
    greeting: 'வணக்கம் (Vanakkam)',
    languageSpoken: 'Tamil (Classical Language, over 2,500 years documented)',
    audioGreetingText: 'Vanakkam! Welcome to the sacred cradle of Dravidian architecture, Carnatic music, and ancient Sangam poetry.',
    summary: 'Home to the Great Living Chola Temples and the ancient martial art of Silambam, Tamil Nadu maintains one of the world’s oldest uninterrupted living classical cultures.',
    bannerImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    verifiedSource: {
      institution: 'Archaeological Survey of India (ASI) & Central Institute of Classical Tamil',
      referenceDoc: 'UNESCO World Heritage Inscription #250bis (Great Living Chola Temples)',
      verifiedYear: 2024
    },
    traditions: [
      {
        title: 'Kolam Daily Sacred Geometry',
        desc: 'Geometric floor drawings made at dawn using rice flour, serving both as spiritual threshold sanctification and ecological sustenance for ants and birds.',
        significance: 'Mathematical symmetry, ethno-mathematics, and spiritual welcoming.',
        tags: ['Ritual Art', 'Ethnomathematics', 'Daily Living']
      },
      {
        title: 'Silambam Ancient Staff Martial Art',
        desc: 'One of the world’s oldest weapon-based martial arts referenced in 2nd-century BCE Sangam literature, utilizing bamboo staves and footwork patterns.',
        significance: 'Mind-body agility, defense, and preservation of Sangam-era martial disciplines.',
        tags: ['Martial Arts', 'Sangam Heritage']
      }
    ],
    festivals: [
      {
        name: 'Pongal (Tamizhar Thirunal)',
        season: 'January (Thai Month)',
        desc: 'Four-day harvest festival giving thanks to Surya (Sun), cattle (Mattu Pongal), and agricultural bounty.',
        rituals: 'Boiling freshly harvested rice in clay pots until it overflows shouting "Pongalo Pongal!".'
      },
      {
        name: 'Margazhi Music & Dance Festival',
        season: 'December - January',
        desc: 'The world’s largest month-long classical music festival hosting thousands of Carnatic vocalists, veena masters, and Bharatanatyam dancers.',
        rituals: 'Early dawn Thiruppavai temple processions followed by morning-to-night sabha concerts.'
      }
    ],
    crafts: [
      {
        name: 'Thanjavur Art Plates & Paintings',
        giStatus: true,
        material: 'Brass, Copper, 22K Gold Foil, Semi-precious stones, Teak wood',
        desc: 'Gilded embossed reliefs of sacred deities created by Maratha-era Nayaka guild descendants.'
      },
      {
        name: 'Kanchipuram Silk Sarees',
        giStatus: true,
        material: 'Pure Mulberry Silk, Silver electroplated Gold Zari',
        desc: 'Woven with the interlocking "Korvai" technique where body and contrast border are joined seamlessly.'
      },
      {
        name: 'Swamimalai Bronze Icons',
        giStatus: true,
        material: 'Panchaloha (Five-metal sacred bronze alloy)',
        desc: 'Cast using the 3,000-year-old "Lost Wax" (Cire Perdue) method documented in the Shilpa Shastras.'
      }
    ],
    food: [
      {
        name: 'Chettinad Cuisine & Pepper Crab',
        giTagged: false,
        desc: 'Famed culinary tradition of the seafaring merchant Chettiars using freshly roasted Kalpasi (black stone flower) and star anise.',
        culturalRoots: 'Maritime trade with Southeast Asia infusing Indonesian and Ceylon spices.'
      },
      {
        name: 'Madurai Jigarthanda',
        giTagged: true,
        desc: 'Royal cooling beverage crafted from almond gum (badam pisin), nannari root syrup, condensed milk and cream.',
        culturalRoots: 'Introduced by Mughal governors and evolved into Madurai’s iconic cooling drink.'
      }
    ],
    music: [
      {
        form: 'Carnatic Classical & Bharatanatyam',
        instrument: 'Nadaswaram, Thavil, Veena, Mridangam',
        desc: 'Raga and Tala-based classical system codified by the Trinity of Carnatic Music (Tyagaraja, Muthuswami Dikshitar, Syama Sastri).'
      }
    ],
    languages: [
      {
        name: 'Tamil',
        script: 'Tamil Brahmi evolving into modern Tamil script',
        speakersApprox: '85 Million worldwide',
        oralTradition: 'Tolkappiyam grammatical treatises and Sangam anthology poems (Akananuru and Purananuru).'
      }
    ],
    stories: [
      {
        title: 'The Shadowless Vimana of Thanjavur',
        excerpt: 'The 80-tonne granite monolithic kumbam atop the Brihadisvara vimana was hauled up an inclined ramp spanning 6 kilometres in 1010 CE.',
        theme: 'Chola Architectural & Engineering Genius'
      }
    ],
    artisanSpotlight: {
      name: 'R. Sthapathy',
      craft: 'Lost-Wax Panchaloha Bronze Casting',
      village: 'Swamimalai, Thanjavur',
      quote: 'Our hands measure not by modern rulers, but by the Tala system of human proportions given in the Agamas.'
    }
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    code: 'RJ',
    capital: 'Jaipur',
    region: 'North',
    greeting: 'खम्मा घणी (Khamma Ghani)',
    languageSpoken: 'Rajasthani, Marwari, Hindi',
    audioGreetingText: 'Khamma Ghani! Welcome to the land of courageous desert fortresses, royal folk ballads, and jewel-toned textiles.',
    summary: 'A desert realm of breathtaking hill forts, vibrant miniature frescoes, desert nomads, and master craftspeople who turned harsh arid terrain into living poetry.',
    bannerImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    verifiedSource: {
      institution: 'Archaeological Survey of India & UNESCO World Heritage Centre',
      referenceDoc: 'Hill Forts of Rajasthan (Ref #247rev) & Jaipur Walled City (Ref #1604)',
      verifiedYear: 2023
    },
    traditions: [
      {
        title: 'Bhopa-Bhopi Phad Oral Epics',
        desc: 'Travelling folk priest-singers who perform nocturnal scroll narrations of warrior gods Devnarayan and Pabuji using the Ravanahatha violin.',
        significance: 'Living oral folk theatre preserving nomadic desert history.',
        tags: ['Oral History', 'Folk Theater', 'Scroll Painting']
      },
      {
        title: 'Kalbelia Snake-Chamber Dance',
        desc: 'UNESCO Inscribed Intangible Cultural Heritage: Sensuous serpentine dance performed by women of the nomadic Kalbelia community to the tune of the Poongi.',
        significance: 'Nomadic ecology, community identity, and oral adaptation.',
        tags: ['UNESCO Intangible', 'Nomadic Arts']
      }
    ],
    festivals: [
      {
        name: 'Pushkar Camel & Sacred Lake Fair',
        season: 'Kartik Purnima (November)',
        desc: 'Epic desert gathering of camel pastoralists, desert musicians, and pilgrims around holy Lake Pushkar.',
        rituals: 'Camel beauty contests, folk ballad competitions, and sacred dip at Brahma Temple lake.'
      },
      {
        name: 'Desert Festival Jaisalmer',
        season: 'February',
        desc: 'Celebration of Thar desert folk arts amidst the golden dunes of Sam, showcasing Gair dancers and turban tying.',
        rituals: 'Nocturnal fire dances and Sarangi renditions beneath the desert full moon.'
      }
    ],
    crafts: [
      {
        name: 'Bagru & Sanganeri Hand Block Printing',
        giStatus: true,
        material: 'Teak wood blocks, Natural Indigo, Harda (myrobalan), Alum, Syahi mud resist',
        desc: 'Centuries-old mud resist (Dabu) and direct block printing on unbleached cotton.'
      },
      {
        name: 'Jaipur Blue Pottery',
        giStatus: true,
        material: 'Quartz powder, Fuller’s earth, Glass frit, Copper oxide turquoise',
        desc: 'Non-clay ceramic pottery introduced from Turko-Persian masters under Maharaja Ram Singh II.'
      },
      {
        name: 'Usta Art (Camel Hide Gold Embossing)',
        giStatus: true,
        material: 'Treated camel hide, 24K real gold leaf, natural mineral pigments',
        desc: 'Intricate miniature relief gilding perfected in Bikaner palaces.'
      }
    ],
    food: [
      {
        name: 'Dal Baati Churma',
        giTagged: false,
        desc: 'Hard wheat dumplings baked over cow dung embers, dipped in desi ghee, served with panchmel dal and sweet jaggery churma.',
        culturalRoots: 'War-time cuisine of Rajput warriors that could stay preserved for days in arid desert conditions.'
      },
      {
        name: 'Bikaneri Bhujia',
        giTagged: true,
        desc: 'Crisp spicy noodles made from moth bean flour grown in desert soil, spiced with dried asafoetida and black pepper.',
        culturalRoots: 'Crafted under the royal patronage of Maharaja Dungar Singh in 1877.'
      }
    ],
    music: [
      {
        form: 'Manganiyar & Langa Folk Traditions',
        instrument: 'Kamaicha, Khartal, Morchang, Sarangi',
        desc: 'Hereditary Muslim desert musicians whose complex microtonal genealogies have sung for Rajput patron families for 500+ years.'
      }
    ],
    languages: [
      {
        name: 'Rajasthani & Marwari',
        script: 'Devanagari (historically Muria/Mahajani business script)',
        speakersApprox: '50 Million speakers',
        oralTradition: 'Dingal heroic poetry and Charan bardic ballads.'
      }
    ],
    stories: [
      {
        title: 'The Living Citadel of Jaisalmer (Sonar Qila)',
        excerpt: 'One of the few remaining "living forts" in the world, where 4,000 residents still reside inside the 12th-century yellow sandstone bastions.',
        theme: 'Sustained Living Medieval Urbanism'
      }
    ],
    artisanSpotlight: {
      name: 'Ustad Mohammed Rafiq',
      craft: 'Jaipur Blue Pottery',
      village: 'Kot Jewar, Jaipur',
      quote: 'We do not touch river clay. Our craft is born of quartz, glass, and mineral turquoise that never loses its luster.'
    }
  },
  {
    id: 'assam',
    name: 'Assam',
    code: 'AS',
    capital: 'Dispur',
    region: 'North-East',
    greeting: 'নমস্কাৰ (Nomoskar)',
    languageSpoken: 'Assamese, Bodo, Mising, Karbi',
    audioGreetingText: 'Nomoskar! Welcome to the sacred Brahmaputra valley, the home of golden Muga silk, Bihu rhythm, and mystical river island monasteries.',
    summary: 'The green heart of North-East India, cradled by the mighty Brahmaputra, famed for its wild golden Muga silk that outlives its wearer and 500-year-old neo-Vaishnavite Satras.',
    bannerImage: 'https://images.unsplash.com/photo-1606567595334-d39972c85dbe?auto=format&fit=crop&w=1200&q=80',
    verifiedSource: {
      institution: 'Sangeet Natak Akademi & Directorate of Cultural Affairs, Assam',
      referenceDoc: 'Sattriya Dance Classical Recognition & UNESCO Majuli Island Dossier',
      verifiedYear: 2024
    },
    traditions: [
      {
        title: 'Sattriya Monastery Dance & Bhaona Theatre',
        desc: 'Recognized as an Indian Classical Dance form, created in the 15th century by saint-reformer Srimanta Sankardev inside river-island Satras.',
        significance: 'Spiritual egalitarian reform, theatrical masks (Mukha), and devotional dance.',
        tags: ['Classical Dance', 'Monastic Tradition', 'Mask Making']
      },
      {
        title: 'Majuli Bamboo & Clay Mask Craft',
        desc: 'Traditional artisans of Samaguri Satra craft lightweight expressive masks of gods, demons, and animals from bamboo frame, cow dung, and river silt.',
        significance: 'Living folk ritual performance and eco-material design.',
        tags: ['Ritual Masks', 'Satra Culture']
      }
    ],
    festivals: [
      {
        name: 'Rongali Bihu (Bohag Bihu)',
        season: 'Mid-April (Assamese New Year)',
        desc: 'Spring festival celebrating agricultural fertility with infectious drum beats, buffalo horn pipes, and synchronized dance.',
        rituals: 'Cow worship (Goru Bihu), offering handwoven red-and-white Gamosa to elders, and open-field Husori singing.'
      },
      {
        name: 'Ali-Aye-Ligang',
        season: 'February (First Wednesday of Phagun)',
        desc: 'Spring seed sowing festival of the indigenous Mising tribe invoking mother earth for bountiful harvest.',
        rituals: 'Ceremonial seed sowing followed by Gumrag dance and serving Apong (rice beer) with purang apin.'
      }
    ],
    crafts: [
      {
        name: 'Muga Golden Silk & Eri Ahimsa Silk',
        giStatus: true,
        material: 'Endemic wild silk (Antheraea assamensis) fed on Som and Sualu trees',
        desc: 'Naturally golden, lustrous silk exclusive to Assam; gains shine with every hand wash and endures for generations.'
      },
      {
        name: 'Assam Gamosa & Jaapi Hat',
        giStatus: true,
        material: 'Handwoven white cotton with crimson red flora, Tokou palm leaves, bamboo',
        desc: 'Sacred towel cloth symbol of Assamese respect and hospitality; conical Jaapi hat used by farmers and dignitaries.'
      },
      {
        name: 'Sarthebari Bell Metal Utensils',
        giStatus: true,
        material: 'Bell metal alloy (78% copper, 22% tin)',
        desc: 'Hand-hammered sacred brass and bronze vessels producing resonant acoustic vibrations.'
      }
    ],
    food: [
      {
        name: 'Kaji Nemu (Assam Lemon) & Masor Tenga',
        giTagged: true,
        desc: 'Tangy light river fish curry cooked with sour elephant apple (Ou Tenga) or tomatoes, scented with seedless GI-tagged Kaji Nemu lemon.',
        culturalRoots: 'Fermentation and natural souring traditions suited to tropical riverside wellness.'
      }
    ],
    music: [
      {
        form: 'Borgeet & Bihu Folk Music',
        instrument: 'Dhol (drum), Pepa (buffalo horn flute), Gogona (reed harp), Tokari (lute)',
        desc: 'Melodic Vaishnavite ragas alongside high-energy syncopated Bihu beats that mimic spring thunder.'
      }
    ],
    languages: [
      {
        name: 'Assamese (Asamiya)',
        script: 'Eastern Nagari script',
        speakersApprox: '15 Million speakers',
        oralTradition: 'Buranjis (official historical chronicles maintained by the Ahom kings since 1228 CE).'
      }
    ],
    stories: [
      {
        title: 'Majuli: The Shrinking Island of Sages',
        excerpt: 'Majuli on the Brahmaputra is the world’s largest inhabited river island, where monk-scholars have lived in harmony with seasonal river floods for half a millennium.',
        theme: 'Ecological Resilience & Spiritual Art'
      }
    ],
    artisanSpotlight: {
      name: 'Hem Chandra Goswami',
      craft: 'Majuli Bamboo Mask Making (Mukha)',
      village: 'Samaguri Satra, Majuli Island',
      quote: 'When the actor puts on the Narasimha mask made of bamboo and Brahmaputra clay, the human ego dissolves and the divine enters.'
    }
  },
  {
    id: 'kerala',
    name: 'Kerala',
    code: 'KL',
    capital: 'Thiruvananthapuram',
    region: 'South',
    greeting: 'നമസ്കാരം (Namaskaram)',
    languageSpoken: 'Malayalam',
    audioGreetingText: 'Namaskaram! Welcome to God’s Own Country, of sacred groves, Theyyam rituals, Ayurvedic treatises, and the rhythm of Kathakali drums.',
    summary: 'A tropical maritime haven known for UNESCO-recognized Sanskrit theatre Kudiyattam, incandescent Theyyam spirit possession rituals, and pristine backwaters.',
    bannerImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    verifiedSource: {
      institution: 'Kerala Kalamandalam & UNESCO Intangible Cultural Heritage',
      referenceDoc: 'UNESCO Inscription #00010 (Kutiyattam Sanskrit Theatre)',
      verifiedYear: 2024
    },
    traditions: [
      {
        title: 'Theyyam: The Living Gods of Malabar',
        desc: 'Ancient ritualistic dance where subaltern performers transform into deities through elaborate face paintings, towering headgears (Mudi), and hypnotic fire leaps.',
        significance: 'Social leveling ritual where lower caste performers are revered as living oracles by all castes.',
        tags: ['Ritual Theatre', 'Indigenous Faith', 'Subaltern Culture']
      },
      {
        title: 'Kalaripayattu: Mother of Martial Arts',
        desc: '3,000-year-old dynamic martial science practiced in pit arenas (Kalari), blending yogic animal postures, marmam (vital pressure point) healing, and flexible swords (Urumi).',
        significance: 'Origin lineage of East Asian martial arts carried by Bodhidharma.',
        tags: ['Martial Science', 'Marma Medicine']
      }
    ],
    festivals: [
      {
        name: 'Onam Harvest & Homecoming',
        season: 'Chingam (August - September)',
        desc: 'Ten-day celebration welcoming mythical egalitarian King Mahabali back to his golden realm.',
        rituals: 'Creating floral carpets (Pookkalam), staging snake boat races (Vallam Kali), and feasting on 26-dish Onasadya.'
      },
      {
        name: 'Thrissur Pooram',
        season: 'Medam (April - May)',
        desc: 'Mother of all Poorams: Spectacular assembly of Caparisoned tuskers, competitive umbrella swapping (Kudamattom), and Ilanjithara Melam percussion orchestra.',
        rituals: '250+ percussionists creating high-octane Chenda rhythms inside Vadakkunnathan temple.'
      }
    ],
    crafts: [
      {
        name: 'Aranmula Kannadi (Metal Mirror)',
        giStatus: true,
        material: 'Secret alloy of copper and tin; zero silver or mercury glass backing',
        desc: 'Front-surface reflecting metal mirror crafted exclusively by a few families in Aranmula village; eliminates double reflection distortion.'
      },
      {
        name: 'Balaramapuram & Kasavu Handlooms',
        giStatus: true,
        material: 'Unbleached natural cotton with pure gold zari borders',
        desc: 'Eco-dyed traditional off-white garment worn during sacred ceremonies and Onam celebrations.'
      },
      {
        name: 'Nettur Petti (Jewellery Chest)',
        giStatus: true,
        material: 'Rosewood, Teak, and polished brass filigree joints',
        desc: 'Pyramidical lidded chest crafted according to traditional Kerala Thachu Shastra (carpentry architectural canons).'
      }
    ],
    food: [
      {
        name: 'Sadhya & Palada Pradhaman',
        giTagged: false,
        desc: 'Grand vegetarian feast served on fresh plantain leaf, concluding with slow-simmered rice flake pudding in condensed milk and cardamom.',
        culturalRoots: 'Harmonious balancing of the 6 Ayurvedic rasas (sweet, sour, salty, pungent, bitter, astringent).'
      },
      {
        name: 'Malabar Biryani & Thalassery Spices',
        giTagged: false,
        desc: 'Fragrant biryani made with tiny Jeerakasala rice, fried shallots, and Tellicherry black pepper.',
        culturalRoots: 'Arab-Mappila spice trade routes dating back to the Roman era.'
      }
    ],
    music: [
      {
        form: 'Sopana Sangeetham & Panchavadyam',
        instrument: 'Idakka (hourglass drum), Chenda, Maddalam, Kombu horn, Elathalam cymbals',
        desc: 'Microtonal temple sanctum singing on stone steps, paired with five-instrument sonic temple symphony.'
      }
    ],
    languages: [
      {
        name: 'Malayalam',
        script: 'Grantha-derived Malayalam script',
        speakersApprox: '38 Million speakers',
        oralTradition: 'Vadakkan Pattukal (Ballads of North Malabar) chronicling legendary warriors Aromal Chekavar and Unniyarcha.'
      }
    ],
    stories: [
      {
        title: 'The Secret Alloy of Aranmula Kannadi',
        excerpt: 'In the 18th century, temple metalworkers stumbled upon a magical alloy ratio that polished into a mirror clearer than glass. The exact recipe remains a closely guarded generational secret.',
        theme: 'Metallurgical Mastery'
      }
    ],
    artisanSpotlight: {
      name: 'Subramanian Achari',
      craft: 'Aranmula Metal Mirror Casting',
      village: 'Aranmula, Pathanamthitta',
      quote: 'Glass mirrors show a reflection behind a glass pane. An Aranmula mirror reflects true reality—your finger touches its own reflection directly.'
    }
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    code: 'GJ',
    capital: 'Gandhinagar',
    region: 'West',
    greeting: 'નમસ્તે (Namaste / Jai Shri Krishna)',
    languageSpoken: 'Gujarati, Kutchi',
    audioGreetingText: 'Namaste! Welcome to Gujarat, the land of the Great Rann salt desert, exquisite Patola double-ikats, and the 9-night celebration of Garba.',
    summary: 'A maritime merchant state with a 4,500-year trade legacy rooted in the Indus Valley port of Lothal, renowned for nomadic embroidery, stepwells, and vibrant Garba dances.',
    bannerImage: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=1200&q=80',
    verifiedSource: {
      institution: 'Archaeological Survey of India & UNESCO Intangible Cultural Heritage',
      referenceDoc: 'UNESCO Inscription #01962 (Garba of Gujarat) & Dholavira World Heritage #1642',
      verifiedYear: 2023
    },
    traditions: [
      {
        title: 'Garba & Dandiya Raas',
        desc: 'UNESCO Inscribed Intangible Cultural Heritage: World’s largest nine-night dance festival celebrating divine feminine Shakti around an earthen lantern (Garbhadip).',
        significance: 'Community cohesion, women’s empowerment, and cyclical cosmic time.',
        tags: ['UNESCO Intangible', 'Folk Dance', 'Sacred Feminine']
      },
      {
        title: 'Kutch Nomadic Mirror Embroidery',
        desc: 'Over 16 distinct sub-styles (Rabari, Mutwa, Ahir, Jat) combining mirrors (Abhla) and intricate needlework that identify a woman’s marital and tribal lineage.',
        significance: 'Visual community language and pastoral heritage.',
        tags: ['Textile Heritage', 'Nomadic Crafts']
      }
    ],
    festivals: [
      {
        name: 'Rann Utsav (White Desert Festival)',
        season: 'November to February',
        desc: 'Cultural carnival on the white salt flats of Kutch celebrating desert stargazing, Sufi songs, and camel safaris.',
        rituals: 'Full moon midnight musical concerts on the salt desert expanse.'
      },
      {
        name: 'Uttarayan (International Kite Festival)',
        season: 'January 14 (Makar Sankranti)',
        desc: 'Sky-filling festival where millions fly rooftop kites shouting "Kai Po Che!" marking the sun’s northern journey.',
        rituals: 'Consuming sesame brittle (Chikki) and baked winter vegetable dish Undhiyu.'
      }
    ],
    crafts: [
      {
        name: 'Patan Patola (Double Ikat)',
        giStatus: true,
        material: 'Mulberry silk, Natural vegetable and madder dyes',
        desc: 'Both warp and weft threads are tied and dyed individually with micro-precision before weaving; both sides of the cloth are indistinguishable.'
      },
      {
        name: 'Rogan Painting on Castor Oil',
        giStatus: true,
        material: 'Boiled castor oil, natural earth stone pigments',
        desc: 'Drawn with a metal stylus without touching the fabric; only one family in Nirona village preserves this 300-year-old art.'
      },
      {
        name: 'Ajrakh Block Printing',
        giStatus: true,
        material: 'Natural Indigo, Madder root, Pomegranate rind, Wooden blocks',
        desc: '16-step complex resist printing process symbolizing the deep blue sky and red earth.'
      }
    ],
    food: [
      {
        name: 'Undhiyu & Jalebi',
        giTagged: false,
        desc: 'Slow-cooked casserole of winter green beans, purple yam, baby eggplants, and fenugreek dumplings baked upside-down in earthen pots.',
        culturalRoots: 'Traditional earthenware earthen oven cooking practiced by farmers during harvest.'
      },
      {
        name: 'Dhokla & Khandvi',
        giTagged: false,
        desc: 'Light steamed fermented chickpea and rice cakes seasoned with mustard seeds, curry leaves, and green chillies.',
        culturalRoots: 'Ancient Jain and Vaishnava culinary principles of gentle steam cooking.'
      }
    ],
    music: [
      {
        form: 'Haveli Sangeet & Dayro Folk Ballads',
        instrument: 'Jantar, Manjira, Tabla, Harmonium',
        desc: 'Devotional temple acoustics rooted in Vallabhacharya traditions alongside nocturnal rustic story singing (Dayro).'
      }
    ],
    languages: [
      {
        name: 'Gujarati',
        script: 'Gujarati script (derived from Devanagari without the top horizontal line)',
        speakersApprox: '60 Million speakers',
        oralTradition: 'Narsinh Mehta’s 15th-century bhajans (including "Vaishnav Jan To") and folk folklore of Saurashtra.'
      }
    ],
    stories: [
      {
        title: 'The 1,000-Year Longevity of Patan Patola',
        excerpt: 'An old Gujarati saying goes: "Fati jaye pan fiti na jaye" (The cloth may tear with age, but the color and design will never fade even after centuries).',
        theme: 'Double Ikat Precision'
      }
    ],
    artisanSpotlight: {
      name: 'Khatri Abdulgafur',
      craft: 'Rogan Art on Castor Oil',
      village: 'Nirona, Kutch',
      quote: 'A strand of castor jelly on an iron rod, guided only by memory and breath—that is how we paint the Tree of Life.'
    }
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    code: 'WB',
    capital: 'Kolkata',
    region: 'East',
    greeting: 'নমস্কার (Nomoshkar)',
    languageSpoken: 'Bengali (Bangla)',
    audioGreetingText: 'Nomoshkar! Welcome to the land of terracotta temples, Baul minstrels, Nobel laureates, and the world’s most magnificent Durga Puja festival.',
    summary: 'The cultural capital of intellectual renaissance, terracotta temples of Bishnupur, wandering mystic Baul singers, and the UNESCO-recognized public art festival of Durga Puja.',
    bannerImage: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80',
    verifiedSource: {
      institution: 'Ministry of Culture & UNESCO Intangible Cultural Heritage',
      referenceDoc: 'UNESCO Inscription #01774 (Durga Puja in Kolkata)',
      verifiedYear: 2023
    },
    traditions: [
      {
        title: 'Kolkata Durga Puja Public Art Festival',
        desc: 'UNESCO Inscribed Intangible Cultural Heritage: The world’s largest open-air art installation festival where neighborhoods transform into temporary architectural pavilions.',
        significance: 'Creative community architecture, communal harmony, and ritual craftsmanship.',
        tags: ['UNESCO Intangible', 'Public Art', 'Sacred Installation']
      },
      {
        title: 'Baul Mystic Minstrel Tradition',
        desc: 'UNESCO Masterpiece: Wandering mystic philosopher-musicians who reject caste, orthodox dogma, and temples in favor of the divine soul within.',
        significance: 'Ecstatic musical humanism and syncretic Sufi-Vaishnava mysticism.',
        tags: ['UNESCO Masterpiece', 'Mystic Music']
      }
    ],
    festivals: [
      {
        name: 'Durga Puja & Bijoya Dashami',
        season: 'Ashwin Month (September - October)',
        desc: 'Five days of jubilation celebrating Mother Durga’s victory over Mahishasura, culminating in idol immersion and Sindoor Khela.',
        rituals: 'Dhunuchi Naach incense dancing to the furious rhythm of Dhak drums.'
      },
      {
        name: 'Poush Mela at Santiniketan',
        season: 'Late December (7th day of Poush)',
        desc: 'Rural university festival founded by Maharshi Debendranath Tagore celebrating tribal Santhal dancers, Baul singers, and terracotta potters.',
        rituals: 'Morning Upasana prayer at the glass temple followed by days of open-air cultural exchange.'
      }
    ],
    crafts: [
      {
        name: 'Baluchari & Jamdani Silk Sarees',
        giStatus: true,
        material: 'Fine mulberry silk with polished jacquard motifs of epics',
        desc: 'Woven with pictorial scenes from the Ramayana, Mahabharata, and court life on the pallu; revived in Bishnupur.'
      },
      {
        name: 'Bankura Terracotta Horses',
        giStatus: true,
        material: 'Alluvial Ganges clay fired in wood-fired kilns',
        desc: 'Tall, elegant terracotta horses with elongated erect ears and arched necks, originally votive village offerings now an icon of Indian handicrafts.'
      },
      {
        name: 'Purulia Chau Dance Masks',
        giStatus: true,
        material: 'Clay molds, paper mache, cloth layers, wire, bird feathers',
        desc: 'Heroic, stylized martial masks worn by Chau dancers executing acrobatics and high martial kicks.'
      }
    ],
    food: [
      {
        name: 'Bengali Rasgulla & Sandesh',
        giTagged: true,
        desc: 'Spongy cottage cheese (Chhana) balls cooked in light sugar syrup, invented by Nobin Chandra Das in 1868.',
        culturalRoots: 'The pioneering Portuguese cheese-making influence reimagined by Bengali confectionery masters.'
      },
      {
        name: 'Shorshe Ilish (Hilsa in Mustard Gravy)',
        giTagged: false,
        desc: 'Prized river Hilsa fish steamed gently with ground yellow and black mustard paste, green chillies, and pungent mustard oil.',
        culturalRoots: 'Monsoon river feast celebrated across both sides of the Bengal delta.'
      }
    ],
    music: [
      {
        form: 'Rabindra Sangeet & Baul Song',
        instrument: 'Ektara (one-string lute), Dotara, Khamak, Khol drum',
        desc: 'Philosophical songs composed by Rabindranath Tagore seamlessly blending classical ragas and folk melodies.'
      }
    ],
    languages: [
      {
        name: 'Bengali (Bangla)',
        script: 'Bengali script',
        speakersApprox: '230 Million native speakers globally (2nd in India)',
        oralTradition: 'Mangal-Kavya narrative poems and Thakurmar Jhuli grandmothers’ fairy tales.'
      }
    ],
    stories: [
      {
        title: 'Kumartuli: The Potters Who Sculpt the Gods',
        excerpt: 'In the narrow labyrinth of North Kolkata’s Kumartuli, traditional potters fashion thousands of clay idols using straw, bamboo, and sacred silt taken from the Hooghly river.',
        theme: 'Sacred Ephemeral Art'
      }
    ],
    artisanSpotlight: {
      name: 'Kartik Paul',
      craft: 'Kumartuli Clay Idol Sculpture',
      village: 'Kumartuli, Kolkata',
      quote: 'On Mahalaya dawn, the master sculptor paints the eye of Mother Durga (Chokkhu Daan) in silence. In that single brush stroke, earth becomes goddess.'
    }
  },
{
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    code: 'AP',
    capital: 'Amaravati',
    region: 'South',
    greeting: 'Namaskaram',
    languageSpoken: 'Telugu',
    audioGreetingText: 'Namaskaram! Welcome to Andhra Pradesh, home of Kuchipudi, Kalamkari and rich Telugu traditions.',
    summary: 'A rich cultural landscape known for Kuchipudi dance, Kalamkari textile art, Telugu literature and diverse coastal cuisine.',
    bannerImage: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?auto=format&fit=crop&w=1200&q=80',
    verifiedSource: {
      institution: 'Government of Andhra Pradesh',
      referenceDoc: 'Andhra Pradesh Cultural Heritage',
      verifiedYear: 2024
    },
    traditions: [
      {
        title: 'Kuchipudi Dance Tradition',
        desc: 'Classical dance tradition combining expressive storytelling, music and graceful movement.',
        significance: 'A major performing arts tradition of Telugu culture.',
        tags: ['Classical Dance', 'Telugu Culture', 'Performing Arts']
      }
    ],
    festivals: [
      {
        name: 'Ugadi',
        season: 'Spring',
        desc: 'Telugu New Year celebrated with special foods, prayers and family gatherings.',
        rituals: 'Ugadi pachadi preparation, prayers and cultural celebrations.'
      }
    ],
    crafts: [
      {
        name: 'Kalamkari',
        giStatus: true,
        material: 'Cotton textile and natural dyes',
        desc: 'Hand-painted and block-printed textile art featuring traditional motifs and storytelling.'
      }
    ],
    food: [
      {
        name: 'Pulihora',
        giTagged: false,
        desc: 'Tangy rice preparation commonly served during festivals and religious occasions.',
        culturalRoots: 'Traditional Telugu household and temple cuisine.'
      }
    ],
    music: [
      {
        form: 'Carnatic and Telugu Folk Music',
        instrument: 'Mridangam and traditional folk instruments',
        desc: 'Musical traditions combining classical Carnatic forms with regional folk expressions.'
      }
    ],
    languages: [
      {
        name: 'Telugu',
        script: 'Telugu script',
        speakersApprox: '80+ million native and second-language speakers',
        oralTradition: 'Rich tradition of poetry, folk songs, storytelling and oral literature.'
      }
    ],
    stories: [
      {
        title: 'Kuchipudi Village Heritage',
        excerpt: 'Kuchipudi village became closely associated with the classical dance tradition that carries its name.',
        theme: 'Dance, storytelling and cultural identity'
      }
    ],
    artisanSpotlight: {
      name: 'Kalamkari Artisans',
      craft: 'Kalamkari Textile Art',
      village: 'Srikalahasti',
      quote: 'Every Kalamkari design carries a story through colour, line and traditional craftsmanship.'
    }
  },
  {
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    code: 'AR',
    capital: 'Itanagar',
    region: 'North-East',
    greeting: 'Khamma Ghani',
    languageSpoken: 'English and indigenous tribal languages',
    audioGreetingText: 'Welcome to Arunachal Pradesh, home to diverse tribal traditions, vibrant festivals and Himalayan heritage.',
    summary: 'A Himalayan cultural region known for diverse tribal communities, traditional festivals, weaving, crafts and rich oral traditions.',
    bannerImage: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',
    verifiedSource: {
      institution: 'Government of Arunachal Pradesh',
      referenceDoc: 'Arunachal Pradesh Cultural Heritage',
      verifiedYear: 2024
    },
    traditions: [
      {
        title: 'Tribal Weaving Tradition',
        desc: 'Traditional handloom weaving creates distinctive textiles using community-specific patterns and colours.',
        significance: 'Textiles preserve community identity, craftsmanship and intergenerational knowledge.',
        tags: ['Handloom', 'Tribal Heritage', 'Traditional Art']
      }
    ],
    festivals: [
      {
        name: 'Losar',
        season: 'Winter',
        desc: 'Tibetan Buddhist communities celebrate Losar as a traditional New Year festival.',
        rituals: 'Monastic prayers, traditional food, community gatherings and cultural performances.'
      }
    ],
    crafts: [
      {
        name: 'Apatani Handloom',
        giStatus: false,
        material: 'Cotton, wool and natural fibres',
        desc: 'Traditional woven textiles featuring distinctive regional patterns and techniques.'
      }
    ],
    food: [
      {
        name: 'Thukpa',
        giTagged: false,
        desc: 'A warm noodle soup enjoyed across Himalayan communities of the region.',
        culturalRoots: 'Tibetan and Himalayan culinary traditions.'
      }
    ],
    music: [
      {
        form: 'Tribal Folk Songs',
        instrument: 'Drums, bamboo instruments and traditional string instruments',
        desc: 'Community songs and performances preserve history, stories, rituals and collective memory.'
      }
    ],
    languages: [
      {
        name: 'Nyishi',
        script: 'Latin script commonly used in modern writing',
        speakersApprox: 'Hundreds of thousands of speakers',
        oralTradition: 'Rich oral traditions include folk songs, myths, legends and community narratives.'
      }
    ],
    stories: [
      {
        title: 'Apatani Oral Traditions',
        excerpt: 'Stories passed through generations preserve knowledge about ancestors, nature, community values and traditional life.',
        theme: 'Oral Heritage and Community Memory'
      }
    ],
    artisanSpotlight: {
      name: 'Apatani Weavers',
      craft: 'Traditional Handloom Weaving',
      village: 'Ziro Valley',
      quote: 'Every woven pattern carries the memory of our community and the knowledge passed from one generation to another.'
    }
  },
{
  id: 'bihar',
  name: 'Bihar',
  code: 'BR',
  capital: 'Patna',
  region: 'East',
  greeting: 'प्रणाम (Pranam)',
  languageSpoken: 'Hindi, Maithili, Bhojpuri and Magahi',
  audioGreetingText: 'Pranam, welcome to Bihar',
  summary: 'A land of ancient learning, Buddhist heritage, folk traditions and rich Mithila culture.',
  bannerImage: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1200&q=80',

  verifiedSource: {
    institution: 'Bihar Tourism',
    referenceDoc: 'Bihar Cultural Heritage',
    verifiedYear: 2024
  },

  traditions: [
    {
      title: 'Chhath Puja Tradition',
      desc: 'A deeply rooted festival tradition involving worship of the Sun God and riverside rituals.',
      significance: 'Represents gratitude, purity, family wellbeing and harmony with nature.',
      tags: ['Ritual', 'Festival', 'Sun Worship']
    },
    {
      title: 'Mithila Wedding Traditions',
      desc: 'Traditional ceremonies featuring songs, rituals, symbolic art and community participation.',
      significance: 'Preserves social customs and intergenerational cultural knowledge.',
      tags: ['Mithila', 'Wedding', 'Folk Tradition']
    }
  ],

  festivals: [
    {
      name: 'Chhath Puja',
      season: 'Autumn',
      desc: 'A major festival dedicated to the Sun God, observed through prayers, fasting and offerings.',
      rituals: 'Fasting, riverbank prayers, offering arghya to the setting and rising Sun'
    }
  ],

  crafts: [
    {
      name: 'Madhubani Painting',
      giStatus: true,
      material: 'Handmade paper, cloth and natural or traditional pigments',
      desc: 'Intricate Mithila paintings depicting deities, nature, mythology and community life.'
    }
  ],

  food: [
    {
      name: 'Litti Chokha',
      giTagged: false,
      desc: 'Roasted wheat balls served with mashed vegetables and traditional accompaniments.',
      culturalRoots: 'Traditional food culture of Bihar and the wider eastern Gangetic region.'
    }
  ],

  music: [
    {
      form: 'Bihar Folk Songs',
      instrument: 'Dholak, harmonium and traditional string instruments',
      desc: 'Community songs and performances preserve stories, rituals and local traditions.'
    }
  ],

  languages: [
    {
      name: 'Maithili',
      script: 'Devanagari',
      speakersApprox: 'Over 30 million speakers',
      oralTradition: 'Rich oral traditions include folk songs, legends, wedding songs and community narratives.'
    }
  ],

  stories: [
    {
      title: 'Mithila Folk Stories',
      excerpt: 'Generations of storytellers preserve legends, moral lessons and memories through oral narration.',
      theme: 'Folklore and Community Memory'
    }
  ],

  artisanSpotlight: {
    name: 'Madhubani Artisans',
    craft: 'Madhubani Painting',
    village: 'Madhubani district',
    quote: 'Every painting carries the memory of Mithila through its symbols, colours and stories.'
  }
},
{
  id: 'jharkhand',
  name: 'Jharkhand',
  code: 'JH',
  capital: 'Ranchi',
  region: 'East',
  greeting: 'Johar',
  languageSpoken: 'Hindi, Santali, Mundari and Ho',
  audioGreetingText: 'Johar, welcome to Jharkhand',
  summary: 'A forest-rich region known for tribal traditions, indigenous arts, music, dance and sacred landscapes.',

  bannerImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',

  verifiedSource: {
    institution: 'Jharkhand Tourism',
    referenceDoc: 'Jharkhand Tribal and Cultural Heritage',
    verifiedYear: 2024
  },

  traditions: [
    {
      title: 'Tribal Community Traditions',
      desc: 'Indigenous communities preserve seasonal rituals, village gatherings, music, dance and oral knowledge.',
      significance: 'Strengthens community identity and preserves knowledge passed through generations.',
      tags: ['Tribal Heritage', 'Community', 'Oral Tradition']
    },
    {
      title: 'Sarhul Tradition',
      desc: 'A spring celebration connected with nature, sal trees and community worship.',
      significance: 'Reflects the close relationship between indigenous communities and the natural environment.',
      tags: ['Nature Worship', 'Festival', 'Tribal Culture']
    }
  ],

  festivals: [
    {
      name: 'Sarhul',
      season: 'Spring',
      desc: 'A major tribal festival celebrating nature, community and the arrival of spring.',
      rituals: 'Community prayers, sal flowers, traditional songs, dances and offerings'
    }
  ],

  crafts: [
    {
      name: 'Sohrai Painting',
      giStatus: false,
      material: 'Natural earth colours and mud walls',
      desc: 'Traditional wall paintings featuring animals, plants and geometric patterns associated with harvest and community life.'
    }
  ],

  food: [
    {
      name: 'Dhuska',
      giTagged: false,
      desc: 'A traditional fried rice-and-lentil dish commonly enjoyed with curry or vegetables.',
      culturalRoots: 'Everyday and festive food traditions of Jharkhand.'
    }
  ],

  music: [
    {
      form: 'Tribal Folk Music',
      instrument: 'Mandar, Nagara and traditional drums',
      desc: 'Community songs and rhythmic performances accompany festivals, dances and social gatherings.'
    }
  ],

  languages: [
    {
      name: 'Santali',
      script: 'Ol Chiki',
      speakersApprox: 'Millions of speakers across eastern India',
      oralTradition: 'Rich oral traditions include folk songs, legends, nature knowledge and community histories.'
    }
  ],

  stories: [
    {
      title: 'Tribal Creation Stories',
      excerpt: 'Oral narratives connect people, ancestors, forests, animals and the natural world through generations of storytelling.',
      theme: 'Nature, Ancestry and Community Memory'
    }
  ],

  artisanSpotlight: {
    name: 'Sohrai Artists',
    craft: 'Sohrai Wall Painting',
    village: 'Hazaribagh region',
    quote: 'Our walls become living stories where animals, forests and ancestral memories are preserved through art.'
  }
},
{
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    code: 'CG',
    capital: 'Raipur',
    region: 'Central',
    greeting: 'Johar',
    languageSpoken: 'Chhattisgarhi',
    audioGreetingText: 'Johar',
    summary: 'Chhattisgarh is known for its tribal traditions, folk music, vibrant festivals, metal crafts and rich forest-based cultural heritage.',
    bannerImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',

    verifiedSource: {
      institution: 'Government of Chhattisgarh',
      referenceDoc: 'Culture and Tourism Resources',
      verifiedYear: 2024
    },

    traditions: [
      {
        title: 'Bastar Tribal Traditions',
        desc: 'Community traditions involving dance, music, crafts, nature worship and seasonal celebrations.',
        significance: 'These traditions preserve the cultural identity and community memory of Bastar region.',
        tags: ['Tribal Heritage', 'Bastar', 'Community']
      }
    ],

    festivals: [
      {
        name: 'Bastar Dussehra',
        season: 'Monsoon and Autumn',
        desc: 'A long-running cultural celebration centred on local deities, rituals and community participation.',
        rituals: 'Traditional processions, ceremonies and community rituals are conducted across Bastar.'
      }
    ],

    crafts: [
      {
        name: 'Bastar Dhokra',
        giStatus: true,
        material: 'Bell metal',
        desc: 'Traditional lost-wax metal casting practiced by artisan communities of Bastar.'
      }
    ],

    food: [
      {
        name: 'Fara',
        giTagged: false,
        desc: 'A traditional steamed rice-based preparation popular in Chhattisgarh.',
        culturalRoots: 'Fara reflects the everyday rice-based food culture of Chhattisgarh households.'
      }
    ],

    music: [
      {
        form: 'Pandavani',
        instrument: 'Tambura',
        desc: 'A traditional narrative singing form that presents episodes from the Mahabharata through expressive storytelling.'
      }
    ],

    languages: [
      {
        name: 'Chhattisgarhi',
        script: 'Devanagari',
        speakersApprox: 'Millions of speakers in Chhattisgarh and surrounding regions',
        oralTradition: 'Folk songs, ballads, proverbs and oral storytelling are important parts of the tradition.'
      }
    ],

    stories: [
      {
        title: 'Bastar Folk Legends',
        excerpt: 'Local legends connect forests, village communities, ancestral memory and traditional beliefs.',
        theme: 'Nature, Community and Ancestral Memory'
      }
    ],

    artisanSpotlight: {
      name: 'Bastar Dhokra Artisans',
      craft: 'Dhokra Metal Casting',
      village: 'Bastar region',
      quote: 'Our metal forms carry the memory of our community and our ancestors.'
    }
  },
  {
    id: 'goa',
    name: 'Goa',
    code: 'GA',
    capital: 'Panaji',
    region: 'West',
    greeting: 'Dev Borem Korum',
    languageSpoken: 'Konkani',
    audioGreetingText: 'Dev Borem Korum',
    summary: 'Goa is known for its coastal heritage, Indo-Portuguese cultural influences, traditional music, festivals, crafts and distinctive cuisine.',

    bannerImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',

    verifiedSource: {
      institution: 'Government of Goa',
      referenceDoc: 'Department of Art and Culture Resources',
      verifiedYear: 2024
    },

    traditions: [
      {
        title: 'Goan Community Traditions',
        desc: 'Traditional village celebrations, folk performances and community customs form an important part of Goan cultural life.',
        significance: 'These practices preserve Goa’s distinctive coastal and multicultural heritage.',
        tags: ['Goa', 'Community', 'Coastal Heritage']
      }
    ],

    festivals: [
      {
        name: 'Shigmo',
        season: 'Spring',
        desc: 'A colourful Goan festival featuring traditional music, processions, dances and community celebrations.',
        rituals: 'Communities organise processions, folk performances, music and traditional celebrations.'
      }
    ],

    crafts: [
      {
        name: 'Goan Coconut Craft',
        giStatus: false,
        material: 'Coconut shell and coconut fibre',
        desc: 'Traditional craft practices use locally available coconut materials to create decorative and functional objects.'
      }
    ],

    food: [
      {
        name: 'Goan Fish Curry',
        giTagged: false,
        desc: 'A traditional coastal curry prepared with fish, coconut and regional spices.',
        culturalRoots: 'It reflects Goa’s coastal food traditions and the importance of coconut and seafood in local cuisine.'
      }
    ],

    music: [
      {
        form: 'Mando',
        instrument: 'Guitar and Ghumot',
        desc: 'A traditional Goan musical form associated with singing, dance and community gatherings.'
      }
    ],

    languages: [
      {
        name: 'Konkani',
        script: 'Devanagari and other regional scripts',
        speakersApprox: 'Millions of speakers across Goa and neighbouring regions',
        oralTradition: 'Folk songs, stories, proverbs and traditional performances carry Konkani oral heritage.'
      }
    ],

    stories: [
      {
        title: 'Goan Village Legends',
        excerpt: 'Local stories connect villages, the sea, forests, family traditions and community memory.',
        theme: 'Community, Nature and Coastal Life'
      }
    ],

    artisanSpotlight: {
      name: 'Goan Traditional Artisans',
      craft: 'Coconut and Traditional Craftwork',
      village: 'Villages across Goa',
      quote: 'Our crafts keep the everyday traditions of Goa alive.'
    }
  },
  {
    id: 'haryana',
    name: 'Haryana',
    code: 'HR',
    capital: 'Chandigarh',
    region: 'North',
    greeting: 'Ram Ram',
    languageSpoken: 'Haryanvi',
    audioGreetingText: 'Ram Ram',
    summary: 'Haryana is known for its folk traditions, energetic dances, rural culture, wrestling heritage and rich agricultural lifestyle.',

    bannerImage: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80',

    verifiedSource: {
      institution: 'Government of Haryana',
      referenceDoc: 'Department of Art and Cultural Affairs Resources',
      verifiedYear: 2024
    },

    traditions: [
      {
        title: 'Haryanvi Folk Traditions',
        desc: 'Village gatherings, folk theatre, seasonal celebrations and community customs form an important part of Haryana’s cultural life.',
        significance: 'These traditions preserve rural community identity and oral cultural knowledge.',
        tags: ['Folk Culture', 'Rural Heritage', 'Community']
      }
    ],

    festivals: [
      {
        name: 'Teej',
        season: 'Monsoon',
        desc: 'A traditional festival celebrated with songs, swings, family gatherings and community activities.',
        rituals: 'Women participate in traditional songs, swings, prayers and festive gatherings.'
      }
    ],

    crafts: [
      {
        name: 'Phulkari',
        giStatus: true,
        material: 'Cotton and silk textiles',
        desc: 'Decorative embroidery tradition featuring colourful floral and geometric patterns.'
      }
    ],

    food: [
      {
        name: 'Bajra Khichdi',
        giTagged: false,
        desc: 'A traditional millet-based dish associated with the agricultural food culture of Haryana.',
        culturalRoots: 'It reflects the importance of millet and locally grown grains in traditional rural diets.'
      }
    ],

    music: [
      {
        form: 'Haryanvi Folk Music',
        instrument: 'Been and Dholak',
        desc: 'Traditional songs accompany weddings, festivals, seasonal events and village gatherings.'
      }
    ],

    languages: [
      {
        name: 'Haryanvi',
        script: 'Devanagari',
        speakersApprox: 'Millions of speakers in Haryana and neighbouring regions',
        oralTradition: 'Folk songs, sayings, ballads and storytelling are important parts of Haryanvi oral heritage.'
      }
    ],

    stories: [
      {
        title: 'Haryanvi Folk Tales',
        excerpt: 'Traditional stories describe village life, courage, relationships, humour and moral values.',
        theme: 'Community, Courage and Moral Values'
      }
    ],

    artisanSpotlight: {
      name: 'Haryana Folk Artisans',
      craft: 'Traditional Embroidery and Textile Craft',
      village: 'Rural Haryana',
      quote: 'Our handmade traditions connect everyday life with the heritage of our villages.'
    }
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    code: 'HP',
    capital: 'Shimla',
    region: 'North',
    greeting: 'Namaste',
    languageSpoken: 'Hindi',
    audioGreetingText: 'Namaste',
    summary: 'Himachal Pradesh is known for its Himalayan traditions, temple culture, folk dances, handicrafts, mountain cuisine and rich oral heritage.',

    bannerImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',

    verifiedSource: {
      institution: 'Government of Himachal Pradesh',
      referenceDoc: 'Department of Language, Art and Culture Resources',
      verifiedYear: 2024
    },

    traditions: [
      {
        title: 'Himachali Temple Traditions',
        desc: 'Village temples and local deities play an important role in community rituals, processions and seasonal celebrations.',
        significance: 'These traditions connect Himalayan communities with their local history, beliefs and collective identity.',
        tags: ['Himalayan Heritage', 'Temple Culture', 'Community']
      }
    ],

    festivals: [
      {
        name: 'Kullu Dussehra',
        season: 'Autumn',
        desc: 'A major cultural celebration featuring deity processions, music, dance and community gatherings in the Kullu Valley.',
        rituals: 'Local deities are brought in traditional processions and communities participate in prayers, music and celebrations.'
      }
    ],

    crafts: [
      {
        name: 'Kullu Shawl',
        giStatus: true,
        material: 'Wool',
        desc: 'Traditional handwoven woollen textile known for geometric patterns and colourful borders.'
      }
    ],

    food: [
      {
        name: 'Dham',
        giTagged: false,
        desc: 'A traditional ceremonial vegetarian feast served during festivals and important community occasions.',
        culturalRoots: 'Dham reflects Himachal Pradesh’s community dining traditions and regional culinary practices.'
      }
    ],

    music: [
      {
        form: 'Nati',
        instrument: 'Dhol and Karnal',
        desc: 'A popular traditional folk dance and music tradition performed during festivals and community celebrations.'
      }
    ],

    languages: [
      {
        name: 'Pahari',
        script: 'Devanagari',
        speakersApprox: 'Widely spoken across Himalayan communities of Himachal Pradesh',
        oralTradition: 'Folk songs, legends, proverbs and village stories are passed through generations.'
      }
    ],

    stories: [
      {
        title: 'Himalayan Village Legends',
        excerpt: 'Traditional stories connect mountain landscapes, local deities, forests, animals and community memory.',
        theme: 'Nature, Faith and Community Memory'
      }
    ],

    artisanSpotlight: {
      name: 'Kullu Weavers',
      craft: 'Kullu Shawl Weaving',
      village: 'Kullu Valley',
      quote: 'Every woven pattern carries the identity of our mountain communities.'
    }
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    code: 'KA',
    capital: 'Bengaluru',
    region: 'South',
    greeting: 'Namaskara',
    languageSpoken: 'Kannada',
    audioGreetingText: 'Namaskara',
    summary: 'Karnataka is known for its classical arts, temple traditions, diverse crafts, rich Kannada literature and vibrant festivals.',

    bannerImage: 'https://images.unsplash.com/photo-1600100397608-f0107e7b8f03?auto=format&fit=crop&w=1200&q=80',

    verifiedSource: {
      institution: 'Government of Karnataka',
      referenceDoc: 'Department of Kannada and Culture Resources',
      verifiedYear: 2024
    },

    traditions: [
      {
        title: 'Yakshagana Tradition',
        desc: 'A traditional theatre form combining dance, music, elaborate costumes and storytelling.',
        significance: 'Yakshagana preserves regional performance traditions and stories from Indian epics.',
        tags: ['Theatre', 'Dance', 'Coastal Karnataka']
      }
    ],

    festivals: [
      {
        name: 'Mysuru Dasara',
        season: 'Autumn',
        desc: 'A major cultural celebration featuring processions, music, performances and traditional ceremonies.',
        rituals: 'The festival includes cultural programmes, traditional processions and ceremonial celebrations.'
      }
    ],

    crafts: [
      {
        name: 'Mysore Silk',
        giStatus: true,
        material: 'Silk',
        desc: 'Traditional silk textile known for its fine weaving and distinctive zari work.'
      }
    ],

    food: [
      {
        name: 'Mysore Pak',
        giTagged: true,
        desc: 'A traditional sweet prepared mainly with gram flour, ghee and sugar.',
        culturalRoots: 'Mysore Pak is closely associated with the culinary heritage of the Mysuru region.'
      }
    ],

    music: [
      {
        form: 'Carnatic Music',
        instrument: 'Veena',
        desc: 'Karnataka has a major place in South Indian classical music and has produced many important musical traditions and artists.'
      }
    ],

    languages: [
      {
        name: 'Kannada',
        script: 'Kannada',
        speakersApprox: 'More than 40 million speakers',
        oralTradition: 'Folk songs, vachana literature, stories, proverbs and traditional theatre preserve Kannada oral heritage.'
      }
    ],

    stories: [
      {
        title: 'Vijayanagara Legends',
        excerpt: 'Stories surrounding the Vijayanagara period connect monuments, royal history, trade and cultural life.',
        theme: 'History, Architecture and Cultural Memory'
      }
    ],

    artisanSpotlight: {
      name: 'Mysuru Silk Weavers',
      craft: 'Traditional Silk Weaving',
      village: 'Mysuru region',
      quote: 'Our weaving tradition carries generations of craftsmanship into every silk thread.'
    }
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    code: 'MP',
    capital: 'Bhopal',
    region: 'Central',
    greeting: 'Namaste',
    languageSpoken: 'Hindi',
    audioGreetingText: 'Namaste',
    summary: 'Madhya Pradesh is known for its tribal heritage, historic traditions, folk arts, temples, crafts and rich cultural landscapes.',

    bannerImage: 'https://images.unsplash.com/photo-1600100397608-f0107e7b8f03?auto=format&fit=crop&w=1200&q=80',

    verifiedSource: {
      institution: 'Government of Madhya Pradesh',
      referenceDoc: 'Department of Culture Resources',
      verifiedYear: 2024
    },

    traditions: [
      {
        title: 'Gond Tribal Traditions',
        desc: 'Gond communities preserve distinctive visual arts, oral traditions, rituals and nature-connected cultural practices.',
        significance: 'These traditions preserve indigenous knowledge, community identity and relationships with the natural world.',
        tags: ['Gond', 'Tribal Heritage', 'Indigenous Knowledge']
      }
    ],

    festivals: [
      {
        name: 'Bhagoria',
        season: 'Spring',
        desc: 'A colourful tribal festival associated with communities of western Madhya Pradesh.',
        rituals: 'Traditional music, dancing, colourful gatherings and community celebrations form part of the festival.'
      }
    ],

    crafts: [
      {
        name: 'Gond Painting',
        giStatus: true,
        material: 'Natural colours and handmade surfaces',
        desc: 'A distinctive painting tradition using patterned lines and forms inspired by nature, animals and everyday life.'
      }
    ],

    food: [
      {
        name: 'Dal Bafla',
        giTagged: false,
        desc: 'A traditional wheat-based preparation served with dal, ghee and regional accompaniments.',
        culturalRoots: 'Dal Bafla is an important part of the traditional food culture of central India.'
      }
    ],

    music: [
      {
        form: 'Malwa Folk Music',
        instrument: 'Dholak',
        desc: 'Regional folk songs and performances accompany festivals, social gatherings and seasonal celebrations.'
      }
    ],

    languages: [
      {
        name: 'Hindi',
        script: 'Devanagari',
        speakersApprox: 'Millions of speakers across Madhya Pradesh',
        oralTradition: 'Folk songs, ballads, proverbs and regional storytelling preserve oral cultural knowledge.'
      }
    ],

    stories: [
      {
        title: 'Gond Creation Stories',
        excerpt: 'Traditional Gond narratives describe nature, ancestors, animals and the relationship between people and their environment.',
        theme: 'Nature, Ancestry and Community'
      }
    ],

    artisanSpotlight: {
      name: 'Gond Artists',
      craft: 'Gond Painting',
      village: 'Central and eastern Madhya Pradesh',
      quote: 'Our paintings turn stories of nature and community into patterns and forms.'
    }
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    code: 'MH',
    capital: 'Mumbai',
    region: 'West',
    greeting: 'Namaskar',
    languageSpoken: 'Marathi',
    audioGreetingText: 'Namaskar',
    summary: 'Maharashtra is known for its diverse folk traditions, devotional music, festivals, historic forts, crafts and rich Marathi cultural heritage.',

    bannerImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',

    verifiedSource: {
      institution: 'Government of Maharashtra',
      referenceDoc: 'Department of Cultural Affairs Resources',
      verifiedYear: 2024
    },

    traditions: [
      {
        title: 'Warli Art Tradition',
        desc: 'Warli communities create distinctive paintings using simple geometric forms to depict people, animals, nature and everyday life.',
        significance: 'The tradition preserves community knowledge, social life and relationships with nature.',
        tags: ['Warli', 'Tribal Art', 'Folk Tradition']
      }
    ],

    festivals: [
      {
        name: 'Ganesh Chaturthi',
        season: 'Monsoon',
        desc: 'A major festival celebrated with clay Ganesha images, prayers, music, cultural programmes and community gatherings.',
        rituals: 'Families and communities install Ganesha images, conduct prayers and later participate in immersion ceremonies.'
      }
    ],

    crafts: [
      {
        name: 'Warli Painting',
        giStatus: true,
        material: 'Mud walls and natural pigments',
        desc: 'Traditional tribal painting using geometric figures to represent village life, nature, celebrations and daily activities.'
      }
    ],

    food: [
      {
        name: 'Puran Poli',
        giTagged: false,
        desc: 'A traditional sweet flatbread prepared with a filling of cooked lentils and jaggery.',
        culturalRoots: 'Puran Poli is closely associated with festive meals and family celebrations in Maharashtra.'
      }
    ],

    music: [
      {
        form: 'Lavani',
        instrument: 'Dholki',
        desc: 'A lively Marathi performance tradition combining rhythmic music, poetry and expressive dance.'
      }
    ],

    languages: [
      {
        name: 'Marathi',
        script: 'Devanagari',
        speakersApprox: 'More than 80 million speakers worldwide',
        oralTradition: 'Powada, Lavani, folk songs, devotional traditions and storytelling preserve Marathi oral heritage.'
      }
    ],

    stories: [
      {
        title: 'Maratha Folk Ballads',
        excerpt: 'Traditional Powada performances narrate stories of historical figures, courage and important events.',
        theme: 'History, Courage and Community Memory'
      }
    ],

    artisanSpotlight: {
      name: 'Warli Artists',
      craft: 'Warli Painting',
      village: 'Palghar region',
      quote: 'Our paintings preserve stories of our people, nature and everyday life.'
    }
  },
  {
    id: 'manipur',
    name: 'Manipur',
    code: 'MN',
    capital: 'Imphal',
    region: 'North-East',
    greeting: 'Khurumjari',
    languageSpoken: 'Meitei',
    audioGreetingText: 'Khurumjari',
    summary: 'Manipur is known for its classical dance, indigenous traditions, colourful festivals, handloom crafts, folk music and rich oral heritage.',

    bannerImage: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',

    verifiedSource: {
      institution: 'Government of Manipur',
      referenceDoc: 'Department of Art and Culture Resources',
      verifiedYear: 2024
    },

    traditions: [
      {
        title: 'Ras Leela Tradition',
        desc: 'A classical dance-drama tradition combining devotional music, graceful movements and storytelling.',
        significance: 'Ras Leela is an important part of Manipur’s performing arts heritage.',
        tags: ['Classical Dance', 'Devotional Art', 'Performance']
      }
    ],

    festivals: [
      {
        name: 'Yaoshang',
        season: 'Spring',
        desc: 'A major Manipuri festival celebrated with traditional sports, cultural performances, music and community gatherings.',
        rituals: 'Communities organise traditional activities, sports, music and cultural celebrations.'
      }
    ],

    crafts: [
      {
        name: 'Manipuri Handloom',
        giStatus: false,
        material: 'Cotton and silk',
        desc: 'Traditional handwoven textiles featuring distinctive regional patterns and designs.'
      }
    ],

    food: [
      {
        name: 'Eromba',
        giTagged: false,
        desc: 'A traditional Manipuri dish prepared with vegetables, fermented ingredients and chilli.',
        culturalRoots: 'Eromba reflects the distinctive fermented-food traditions of Manipuri cuisine.'
      }
    ],

    music: [
      {
        form: 'Pena Music',
        instrument: 'Pena',
        desc: 'Traditional Manipuri music performed with the pena, an important indigenous string instrument.'
      }
    ],

    languages: [
      {
        name: 'Meitei',
        script: 'Meitei Mayek',
        speakersApprox: 'Millions of speakers in Manipur and neighbouring regions',
        oralTradition: 'Folk songs, legends, traditional performances and oral narratives preserve Meitei cultural memory.'
      }
    ],

    stories: [
      {
        title: 'Khamba and Thoibi',
        excerpt: 'A well-known Manipuri legend remembered through dance, theatre, literature and oral storytelling.',
        theme: 'Love, Courage and Cultural Memory'
      }
    ],

    artisanSpotlight: {
      name: 'Manipuri Handloom Weavers',
      craft: 'Traditional Handloom',
      village: 'Imphal Valley',
      quote: 'Every woven pattern carries the identity and memory of our community.'
    }
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    code: 'ML',
    capital: 'Shillong',
    region: 'North-East',
    greeting: 'Kumno',
    languageSpoken: 'Khasi',
    audioGreetingText: 'Kumno',
    summary: 'Meghalaya is known for its Khasi, Jaintia and Garo traditions, living root bridges, folk music, festivals and strong community heritage.',

    bannerImage: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',

    verifiedSource: {
      institution: 'Government of Meghalaya',
      referenceDoc: 'Department of Arts and Culture Resources',
      verifiedYear: 2024
    },

    traditions: [
      {
        title: 'Living Root Bridge Tradition',
        desc: 'Communities have traditionally guided the roots of rubber fig trees to create strong natural bridges across streams.',
        significance: 'The bridges demonstrate generations of ecological knowledge and community cooperation.',
        tags: ['Living Heritage', 'Nature', 'Community Knowledge']
      }
    ],

    festivals: [
      {
        name: 'Wangala',
        season: 'Autumn',
        desc: 'A major Garo harvest festival featuring traditional music, dance and community celebrations.',
        rituals: 'Traditional dances, drums, songs and thanksgiving ceremonies mark the harvest season.'
      }
    ],

    crafts: [
      {
        name: 'Khasi Cane and Bamboo Craft',
        giStatus: false,
        material: 'Cane and bamboo',
        desc: 'Traditional artisans create baskets, mats, household objects and decorative items using locally available materials.'
      }
    ],

    food: [
      {
        name: 'Jadoh',
        giTagged: false,
        desc: 'A traditional Khasi rice and meat dish prepared with regional ingredients and spices.',
        culturalRoots: 'Jadoh is an important part of Khasi culinary traditions and community meals.'
      }
    ],

    music: [
      {
        form: 'Garo Folk Music',
        instrument: 'Dama',
        desc: 'Traditional songs and rhythms accompany festivals, dances, community gatherings and seasonal celebrations.'
      }
    ],

    languages: [
      {
        name: 'Khasi',
        script: 'Latin',
        speakersApprox: 'Millions of speakers across Meghalaya and neighbouring areas',
        oralTradition: 'Khasi oral traditions include folktales, songs, proverbs and narratives passed through generations.'
      }
    ],

    stories: [
      {
        title: 'Khasi Origin Stories',
        excerpt: 'Traditional narratives connect communities with sacred landscapes, ancestors, forests and the natural world.',
        theme: 'Nature, Ancestry and Community'
      }
    ],

    artisanSpotlight: {
      name: 'Meghalaya Bamboo Artisans',
      craft: 'Cane and Bamboo Craft',
      village: 'Khasi Hills',
      quote: 'Our craft uses the materials of our land to preserve skills passed from one generation to another.'
    }
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    code: 'MZ',
    capital: 'Aizawl',
    region: 'North-East',
    greeting: 'Chibai',
    languageSpoken: 'Mizo',
    audioGreetingText: 'Chibai',
    summary: 'Mizoram is known for its Mizo community traditions, bamboo crafts, vibrant festivals, folk music and strong choral heritage.',

    bannerImage: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',

    verifiedSource: {
      institution: 'Government of Mizoram',
      referenceDoc: 'Department of Art and Culture Resources',
      verifiedYear: 2024
    },

    traditions: [
      {
        title: 'Mizo Community Traditions',
        desc: 'Community cooperation, traditional dances, songs and village customs form an important part of Mizo cultural life.',
        significance: 'These traditions preserve community identity, cooperation and intergenerational cultural knowledge.',
        tags: ['Mizo Culture', 'Community', 'Folk Tradition']
      }
    ],

    festivals: [
      {
        name: 'Chapchar Kut',
        season: 'Spring',
        desc: 'A major Mizo festival featuring traditional dances, music, colourful clothing and community celebrations.',
        rituals: 'Traditional performances, dances, songs and community gatherings are held during the festival.'
      }
    ],

    crafts: [
      {
        name: 'Mizo Bamboo Craft',
        giStatus: false,
        material: 'Bamboo and cane',
        desc: 'Traditional artisans create baskets, mats, furniture and household objects from bamboo and cane.'
      }
    ],

    food: [
      {
        name: 'Bai',
        giTagged: false,
        desc: 'A traditional Mizo vegetable preparation made with locally available ingredients.',
        culturalRoots: 'Bai reflects the use of vegetables, herbs and locally sourced ingredients in Mizo cuisine.'
      }
    ],

    music: [
      {
        form: 'Mizo Folk Music',
        instrument: 'Khuang',
        desc: 'Traditional songs and drum rhythms accompany community celebrations, dances and cultural events.'
      }
    ],

    languages: [
      {
        name: 'Mizo',
        script: 'Latin',
        speakersApprox: 'Millions of speakers across Mizoram and neighbouring regions',
        oralTradition: 'Folk songs, legends, proverbs and community narratives preserve Mizo oral heritage.'
      }
    ],

    stories: [
      {
        title: 'Mizo Folk Legends',
        excerpt: 'Traditional stories describe heroes, animals, landscapes, community values and relationships with nature.',
        theme: 'Nature, Community and Ancestral Memory'
      }
    ],

    artisanSpotlight: {
      name: 'Mizo Bamboo Artisans',
      craft: 'Bamboo and Cane Craft',
      village: 'Rural Mizoram',
      quote: 'Bamboo is part of our land, our livelihood and our cultural identity.'
    }
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    code: 'NL',
    capital: 'Kohima',
    region: 'North-East',
    greeting: 'Kuknalim',
    languageSpoken: 'Nagamese',
    audioGreetingText: 'Kuknalim',
    summary: 'Nagaland is known for its diverse Naga communities, traditional festivals, handloom and crafts, folk music and strong oral traditions.',

    bannerImage: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',

    verifiedSource: {
      institution: 'Government of Nagaland',
      referenceDoc: 'Department of Art and Culture Resources',
      verifiedYear: 2024
    },

    traditions: [
      {
        title: 'Naga Community Traditions',
        desc: 'Traditional village institutions, community gatherings, dances, crafts and oral customs form an important part of Naga cultural life.',
        significance: 'These traditions preserve the distinct identities and collective memory of Naga communities.',
        tags: ['Naga Heritage', 'Community', 'Oral Tradition']
      }
    ],

    festivals: [
      {
        name: 'Hornbill Festival',
        season: 'Winter',
        desc: 'A major cultural festival showcasing the traditional dances, music, crafts and food traditions of Nagaland’s communities.',
        rituals: 'Cultural performances, traditional games, music, crafts and community celebrations are held during the festival.'
      }
    ],

    crafts: [
      {
        name: 'Naga Shawl',
        giStatus: false,
        material: 'Cotton and wool',
        desc: 'Traditional handwoven textiles featuring distinctive patterns associated with different Naga communities.'
      }
    ],

    food: [
      {
        name: 'Smoked Pork with Bamboo Shoot',
        giTagged: false,
        desc: 'A traditional Naga preparation combining smoked meat with locally used bamboo shoot.',
        culturalRoots: 'The dish reflects the importance of preservation techniques and locally sourced ingredients in Naga cuisine.'
      }
    ],

    music: [
      {
        form: 'Naga Folk Music',
        instrument: 'Log Drum',
        desc: 'Traditional songs and rhythms accompany community events, festivals, dances and ceremonies.'
      }
    ],

    languages: [
      {
        name: 'Nagamese',
        script: 'Latin',
        speakersApprox: 'Widely used as a common language across Nagaland',
        oralTradition: 'Folk songs, stories, proverbs and community narratives preserve the region’s oral heritage.'
      }
    ],

    stories: [
      {
        title: 'Naga Village Legends',
        excerpt: 'Traditional stories describe ancestral journeys, village origins, heroes, animals and relationships with the natural world.',
        theme: 'Ancestry, Community and Nature'
      }
    ],

    artisanSpotlight: {
      name: 'Naga Weavers',
      craft: 'Traditional Shawl Weaving',
      village: 'Villages across Nagaland',
      quote: 'Every pattern carries the identity and story of the community that created it.'
    }
  },
  {
    id: 'odisha',
    name: 'Odisha',
    code: 'OD',
    capital: 'Bhubaneswar',
    region: 'East',
    greeting: 'Namaskar',
    languageSpoken: 'Odia',
    audioGreetingText: 'Namaskar',
    summary: 'Odisha is known for its temple traditions, classical dance, Pattachitra painting, handloom crafts, festivals and rich Odia cultural heritage.',

    bannerImage: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80',

    verifiedSource: {
      institution: 'Government of Odisha',
      referenceDoc: 'Department of Odia Language, Literature and Culture Resources',
      verifiedYear: 2024
    },

    traditions: [
      {
        title: 'Jagannath Temple Traditions',
        desc: 'Rituals, festivals, devotional music and community practices associated with the Jagannath tradition form an important part of Odisha’s cultural heritage.',
        significance: 'These traditions connect religious practice, art, food and community life across generations.',
        tags: ['Jagannath', 'Temple Heritage', 'Devotional Tradition']
      }
    ],

    festivals: [
      {
        name: 'Rath Yatra',
        season: 'Summer',
        desc: 'A major festival associated with Lord Jagannath and the ceremonial chariot procession in Puri.',
        rituals: 'The deities are ceremonially taken on large decorated chariots during the annual procession.'
      }
    ],

    crafts: [
      {
        name: 'Pattachitra',
        giStatus: true,
        material: 'Cloth and natural pigments',
        desc: 'Traditional Odisha painting known for detailed mythological themes, decorative borders and distinctive visual style.'
      }
    ],

    food: [
      {
        name: 'Pakhala Bhata',
        giTagged: false,
        desc: 'A traditional fermented rice preparation commonly associated with Odisha’s summer food culture.',
        culturalRoots: 'Pakhala reflects Odisha’s rice-based culinary traditions and seasonal food practices.'
      }
    ],

    music: [
      {
        form: 'Odissi Music',
        instrument: 'Mardala',
        desc: 'A classical music tradition closely connected with Odissi dance and devotional performance.'
      }
    ],

    languages: [
      {
        name: 'Odia',
        script: 'Odia',
        speakersApprox: 'More than 35 million speakers',
        oralTradition: 'Folk songs, ballads, proverbs, devotional poetry and storytelling preserve Odia oral heritage.'
      }
    ],

    stories: [
      {
        title: 'Jagannath Folk Stories',
        excerpt: 'Stories surrounding Lord Jagannath connect devotion, community traditions, local legends and the cultural identity of Odisha.',
        theme: 'Faith, Community and Cultural Memory'
      }
    ],

    artisanSpotlight: {
      name: 'Pattachitra Artists',
      craft: 'Pattachitra Painting',
      village: 'Raghurajpur',
      quote: 'Each painted line carries a story from our artistic and devotional tradition.'
    }
  },
  {
    id: 'punjab',
    name: 'Punjab',
    code: 'PB',
    capital: 'Chandigarh',
    region: 'North',
    greeting: 'Sat Sri Akal',
    languageSpoken: 'Punjabi',
    audioGreetingText: 'Sat Sri Akal',
    summary: 'Punjab is known for its vibrant folk traditions, Sikh heritage, Bhangra and Giddha, Phulkari embroidery and rich Punjabi culinary culture.',

    bannerImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',

    verifiedSource: {
      institution: 'Government of Punjab',
      referenceDoc: 'Department of Cultural Affairs Resources',
      verifiedYear: 2024
    },

    traditions: [
      {
        title: 'Bhangra and Giddha',
        desc: 'Traditional Punjabi dance forms performed during celebrations, festivals and community gatherings.',
        significance: 'These dances preserve Punjabi musical rhythms, community expression and festive traditions.',
        tags: ['Folk Dance', 'Punjabi Culture', 'Community']
      }
    ],

    festivals: [
      {
        name: 'Baisakhi',
        season: 'Spring',
        desc: 'A major harvest festival celebrated with prayers, fairs, music, dance and community gatherings.',
        rituals: 'People visit gurdwaras, participate in community events and celebrate with traditional music and food.'
      }
    ],

    crafts: [
      {
        name: 'Phulkari',
        giStatus: true,
        material: 'Cotton and silk threads',
        desc: 'Traditional Punjabi embroidery featuring colourful floral and geometric patterns.'
      }
    ],

    food: [
      {
        name: 'Makki di Roti and Sarson da Saag',
        giTagged: false,
        desc: 'A well-known traditional Punjabi combination made with maize flatbread and mustard greens.',
        culturalRoots: 'The dish reflects Punjab’s agricultural traditions and seasonal food culture.'
      }
    ],

    music: [
      {
        form: 'Punjabi Folk Music',
        instrument: 'Dhol',
        desc: 'Energetic folk music accompanies Bhangra, celebrations, weddings and community gatherings.'
      }
    ],

    languages: [
      {
        name: 'Punjabi',
        script: 'Gurmukhi',
        speakersApprox: 'More than 30 million speakers worldwide',
        oralTradition: 'Folk songs, ballads, Sufi poetry, proverbs and storytelling preserve Punjabi oral heritage.'
      }
    ],

    stories: [
      {
        title: 'Heer Ranjha',
        excerpt: 'The legendary love story of Heer and Ranjha is deeply embedded in Punjabi poetry, music and oral storytelling.',
        theme: 'Love, Society and Cultural Memory'
      }
    ],

    artisanSpotlight: {
      name: 'Phulkari Artisans',
      craft: 'Phulkari Embroidery',
      village: 'Rural Punjab',
      quote: 'Every embroidered pattern carries a piece of Punjabi family and community memory.'
    }
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    code: 'SK',
    capital: 'Gangtok',
    region: 'North-East',
    greeting: 'Namaste',
    languageSpoken: 'Nepali',
    audioGreetingText: 'Namaste',
    summary: 'Sikkim is known for its Himalayan Buddhist heritage, diverse communities, traditional festivals, handloom crafts and mountain culture.',

    bannerImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',

    verifiedSource: {
      institution: 'Government of Sikkim',
      referenceDoc: 'Department of Cultural Affairs and Heritage Resources',
      verifiedYear: 2024
    },

    traditions: [
      {
        title: 'Himalayan Buddhist Traditions',
        desc: 'Monasteries, prayer ceremonies, traditional music and community rituals form an important part of Sikkimese cultural life.',
        significance: 'These practices preserve the spiritual and cultural heritage of Sikkim’s Himalayan communities.',
        tags: ['Buddhist Heritage', 'Himalayan Culture', 'Community']
      }
    ],

    festivals: [
      {
        name: 'Losar',
        season: 'Winter',
        desc: 'A traditional Himalayan New Year celebration marked by prayers, family gatherings and cultural activities.',
        rituals: 'Families visit monasteries, offer prayers and participate in traditional celebrations.'
      }
    ],

    crafts: [
      {
        name: 'Sikkim Carpet Weaving',
        giStatus: true,
        material: 'Wool',
        desc: 'Traditional handwoven carpets featuring geometric and Buddhist-inspired motifs.'
      }
    ],

    food: [
      {
        name: 'Momos',
        giTagged: false,
        desc: 'Steamed dumplings widely enjoyed in Sikkim and across the Himalayan region.',
        culturalRoots: 'Momos reflect the Tibetan and Himalayan influences present in Sikkimese food culture.'
      }
    ],

    music: [
      {
        form: 'Sikkimese Folk Music',
        instrument: 'Damphu',
        desc: 'Traditional songs and instrumental performances accompany community celebrations and cultural events.'
      }
    ],

    languages: [
      {
        name: 'Nepali',
        script: 'Devanagari',
        speakersApprox: 'Widely spoken across Sikkim',
        oralTradition: 'Folk songs, legends, proverbs and community storytelling preserve the oral heritage of Himalayan communities.'
      }
    ],

    stories: [
      {
        title: 'Kanchenjunga Legends',
        excerpt: 'Traditional Himalayan narratives connect sacred mountains, monasteries, nature and community memory.',
        theme: 'Nature, Faith and Cultural Memory'
      }
    ],

    artisanSpotlight: {
      name: 'Sikkim Carpet Weavers',
      craft: 'Traditional Carpet Weaving',
      village: 'Gangtok region',
      quote: 'Our patterns carry the colours and stories of the Himalayan landscape.'
    }
  },
  {
    id: 'telangana',
    name: 'Telangana',
    code: 'TS',
    capital: 'Hyderabad',
    region: 'South',
    greeting: 'Namaskaram',
    languageSpoken: 'Telugu',
    audioGreetingText: 'Namaskaram',
    summary: 'Telangana is known for its Bathukamma festival, Perini dance tradition, handloom crafts, Deccani food and rich Telugu folk heritage.',

    bannerImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',

    verifiedSource: {
      institution: 'Government of Telangana',
      referenceDoc: 'Department of Language and Culture Resources',
      verifiedYear: 2024
    },

    traditions: [
      {
        title: 'Perini Dance Tradition',
        desc: 'A historic warrior dance tradition featuring energetic movements, rhythm and traditional percussion.',
        significance: 'Perini preserves an important part of Telangana’s performing arts heritage.',
        tags: ['Dance', 'Warrior Tradition', 'Telangana']
      }
    ],

    festivals: [
      {
        name: 'Bathukamma',
        season: 'Autumn',
        desc: 'A major floral festival celebrated by women with colourful flower arrangements, songs and community gatherings.',
        rituals: 'Women arrange flowers into Bathukamma formations, sing traditional songs and gather for festive celebrations.'
      }
    ],

    crafts: [
      {
        name: 'Pochampally Ikat',
        giStatus: true,
        material: 'Cotton and silk yarn',
        desc: 'A distinctive resist-dyeing textile tradition known for geometric patterns and precise weaving.'
      }
    ],

    food: [
      {
        name: 'Hyderabadi Biryani',
        giTagged: false,
        desc: 'A celebrated rice dish prepared with fragrant rice, spices and meat or vegetables.',
        culturalRoots: 'It reflects the layered culinary influences of the Hyderabad and Deccan region.'
      }
    ],

    music: [
      {
        form: 'Oggu Katha',
        instrument: 'Dolu',
        desc: 'A traditional narrative performance combining storytelling, singing and percussion.'
      }
    ],

    languages: [
      {
        name: 'Telugu',
        script: 'Telugu',
        speakersApprox: 'More than 80 million speakers worldwide',
        oralTradition: 'Folk songs, ballads, storytelling and village performance traditions preserve Telugu oral heritage.'
      }
    ],

    stories: [
      {
        title: 'Sammakka Saralamma Legends',
        excerpt: 'Traditional stories surrounding Sammakka and Saralamma remain an important part of Telangana’s cultural memory.',
        theme: 'Courage, Community and Cultural Memory'
      }
    ],

    artisanSpotlight: {
      name: 'Pochampally Weavers',
      craft: 'Ikat Weaving',
      village: 'Pochampally',
      quote: 'Every geometric pattern reflects the patience and skill of generations of weavers.'
    }
  },
  {
    id: 'tripura',
    name: 'Tripura',
    code: 'TR',
    capital: 'Agartala',
    region: 'North-East',
    greeting: 'Nomoskar',
    languageSpoken: 'Bengali',
    audioGreetingText: 'Nomoskar',
    summary: 'Tripura is known for its indigenous traditions, bamboo crafts, folk music, festivals and the cultural heritage of its diverse communities.',

    bannerImage: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',

    verifiedSource: {
      institution: 'Government of Tripura',
      referenceDoc: 'Department of Information, Cultural Affairs and Tourism Resources',
      verifiedYear: 2024
    },

    traditions: [
      {
        title: 'Tripuri Indigenous Traditions',
        desc: 'Traditional community customs, dances, rituals and craft practices preserve the cultural identity of Tripura’s indigenous communities.',
        significance: 'These traditions carry knowledge about community life, nature and ancestral practices.',
        tags: ['Indigenous Heritage', 'Community', 'Folk Tradition']
      }
    ],

    festivals: [
      {
        name: 'Garia Puja',
        season: 'Spring',
        desc: 'An important traditional festival associated with prosperity, agriculture and community well-being.',
        rituals: 'Communities perform traditional rituals, songs and dances and seek blessings for prosperity.'
      }
    ],

    crafts: [
      {
        name: 'Bamboo Craft',
        giStatus: false,
        material: 'Bamboo and cane',
        desc: 'Traditional artisans create baskets, mats, furniture and decorative objects using bamboo and cane.'
      }
    ],

    food: [
      {
        name: 'Mui Borok',
        giTagged: false,
        desc: 'A traditional Tripuri cuisine known for locally sourced vegetables, herbs and fermented ingredients.',
        culturalRoots: 'Mui Borok reflects the food traditions and natural resources of Tripura’s indigenous communities.'
      }
    ],

    music: [
      {
        form: 'Tripuri Folk Music',
        instrument: 'Khamb',
        desc: 'Traditional songs and rhythms accompany festivals, dances, rituals and community gatherings.'
      }
    ],

    languages: [
      {
        name: 'Kokborok',
        script: 'Latin and Bengali',
        speakersApprox: 'Widely spoken among indigenous communities of Tripura',
        oralTradition: 'Folk tales, songs, legends and oral histories preserve Kokborok cultural traditions.'
      }
    ],

    stories: [
      {
        title: 'Tripuri Folk Legends',
        excerpt: 'Traditional stories connect ancestors, forests, rivers, animals and the cultural memory of Tripura’s communities.',
        theme: 'Nature, Ancestry and Community'
      }
    ],

    artisanSpotlight: {
      name: 'Tripura Bamboo Artisans',
      craft: 'Bamboo and Cane Craft',
      village: 'Rural Tripura',
      quote: 'Our bamboo craft connects everyday life with the knowledge passed down through generations.'
    }
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    code: 'UP',
    capital: 'Lucknow',
    region: 'North',
    greeting: 'Namaste',
    languageSpoken: 'Hindi',
    audioGreetingText: 'Namaste',
    summary: 'Uttar Pradesh is known for its sacred cities, classical and folk traditions, handicrafts, festivals, music and rich Awadhi and Braj cultural heritage.',

    bannerImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',

    verifiedSource: {
      institution: 'Government of Uttar Pradesh',
      referenceDoc: 'Department of Culture Resources',
      verifiedYear: 2024
    },

    traditions: [
      {
        title: 'Kathak Tradition',
        desc: 'A major North Indian classical dance tradition combining rhythmic footwork, expressive storytelling and music.',
        significance: 'Kathak has deep historical connections with the cultural traditions of North India and Uttar Pradesh.',
        tags: ['Classical Dance', 'Storytelling', 'North India']
      }
    ],

    festivals: [
      {
        name: 'Kumbh Mela',
        season: 'Winter',
        desc: 'A major pilgrimage gathering held periodically at Prayagraj and associated with sacred bathing, rituals and spiritual traditions.',
        rituals: 'Pilgrims gather for sacred bathing, prayers and religious observances along the river.'
      }
    ],

    crafts: [
      {
        name: 'Banarasi Brocade',
        giStatus: true,
        material: 'Silk and zari',
        desc: 'Traditional Varanasi textile known for intricate weaving, rich patterns and detailed zari work.'
      }
    ],

    food: [
      {
        name: 'Awadhi Biryani',
        giTagged: false,
        desc: 'A fragrant rice preparation associated with the culinary traditions of the Awadh region.',
        culturalRoots: 'Awadhi cuisine reflects the historical culinary traditions of Lucknow and surrounding regions.'
      }
    ],

    music: [
      {
        form: 'Hindustani Classical Music',
        instrument: 'Sitar',
        desc: 'Uttar Pradesh has a long association with Hindustani classical music, devotional music and traditional performance.'
      }
    ],

    languages: [
      {
        name: 'Hindi',
        script: 'Devanagari',
        speakersApprox: 'Hundreds of millions of speakers across India',
        oralTradition: 'Ramleela, folk songs, ballads, poetry and regional storytelling preserve rich oral traditions.'
      }
    ],

    stories: [
      {
        title: 'Ramleela Traditions',
        excerpt: 'Stories from the Ramayana are performed through dramatic and musical traditions in many communities across Uttar Pradesh.',
        theme: 'Devotion, Storytelling and Community'
      }
    ],

    artisanSpotlight: {
      name: 'Banarasi Weavers',
      craft: 'Banarasi Silk Weaving',
      village: 'Varanasi region',
      quote: 'Every woven motif carries the skill and artistic memory of generations.'
    }
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    code: 'UK',
    capital: 'Dehradun',
    region: 'North',
    greeting: 'Namaste',
    languageSpoken: 'Hindi',
    audioGreetingText: 'Namaste',
    summary: 'Uttarakhand is known for its Himalayan pilgrimage traditions, folk music and dance, wool and wood crafts, mountain cuisine and rich oral heritage.',
    bannerImage: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',
    verifiedSource: {
      institution: 'Government of Uttarakhand',
      referenceDoc: 'Department of Culture Resources',
      verifiedYear: 2024
    },
    traditions: [
      {
        title: 'Himalayan Pilgrimage Traditions',
        desc: 'Traditional pilgrimage routes, temple rituals, seasonal fairs and community practices are an important part of Uttarakhand’s cultural life.',
        significance: 'These traditions connect mountain communities with sacred landscapes and generations of cultural memory.',
        tags: ['Himalayan Heritage', 'Pilgrimage', 'Community']
      }
    ],
    festivals: [
      {
        name: 'Nanda Devi Raj Jat',
        season: 'Monsoon',
        desc: 'A major Himalayan pilgrimage tradition associated with Goddess Nanda Devi and communities of the Garhwal region.',
        rituals: 'Pilgrims travel through mountain routes, participate in prayers and observe traditional ceremonies.'
      }
    ],
    crafts: [
      {
        name: 'Aipan Art',
        giStatus: false,
        material: 'Natural pigments on traditional surfaces',
        desc: 'A traditional Kumaoni decorative art using geometric and ritual motifs.'
      }
    ],
    food: [
      {
        name: 'Kafuli',
        giTagged: false,
        desc: 'A traditional leafy-green preparation associated with the mountain cuisine of Uttarakhand.',
        culturalRoots: 'Kafuli reflects the use of locally grown greens and seasonal ingredients in Himalayan food traditions.'
      }
    ],
    music: [
      {
        form: 'Garhwali Folk Music',
        instrument: 'Dhol and Damau',
        desc: 'Traditional songs and rhythms accompany festivals, weddings, fairs and community gatherings.'
      }
    ],
    languages: [
      {
        name: 'Garhwali',
        script: 'Devanagari',
        speakersApprox: 'Widely spoken across Garhwal and neighbouring Himalayan communities',
        oralTradition: 'Folk songs, ballads, legends and village storytelling preserve Garhwali oral heritage.'
      }
    ],
    stories: [
      {
        title: 'Pandav Dance Legends',
        excerpt: 'Traditional performances narrate episodes from the Mahabharata through music, dance and community storytelling.',
        theme: 'Epic Tradition, Community and Cultural Memory'
      }
    ],
    artisanSpotlight: {
      name: 'Kumaoni Aipan Artists',
      craft: 'Aipan Folk Art',
      village: 'Kumaon region',
      quote: 'Our patterns carry the blessings and memories of generations of mountain households.'
    }
  },
];

