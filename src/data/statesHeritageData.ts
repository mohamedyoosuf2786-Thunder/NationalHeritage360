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
  }
];
