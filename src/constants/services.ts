export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  benefits: string[];
  process: { step: string; description: string }[];
  types?: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'installations',
    title: 'Residential Re-Roofing',
    shortDescription: 'Full-service tile, shingle, metal, foam & flat roofing for Arizona homes — hand-measured, honestly priced.',
    fullDescription: 'Craven Construction handles all aspects of residential roofing. From new construction roof installations to complete tear-offs and replacements, you can count on our experts to get the job done right the first time. We hand-measure every roof — no satellite guesswork — and work with leading manufacturers including Owens Corning, GAF, Eagle Roofing, Malarkey, and Westlake Royal Roofing Solutions.',
    icon: 'Hammer',
    image: '/images/nrn-shingle.jpg',
    benefits: [
      'Tile roofing — concrete and clay, all profiles & colors',
      'Shingle roofing — Owens Corning, GAF, Malarkey brands',
      'Metal roofing — standing seam, stone coated, aluminum shingle',
      'Foam roofing — SPF insulation, UV protection & waterproofing',
      'Flat roofing — TPO, peel & stick, and roll systems',
      'Hand-measured estimates — accurate to the square foot',
      '18 months same-as-cash financing through Hearth',
      'New construction roofing available'
    ],
    process: [
      { step: 'Free Inspection', description: 'Randy and the crew walk every roof personally — no satellite shortcuts.' },
      { step: 'Written Estimate', description: 'Itemized, hand-measured quote with specific material specs and pricing.' },
      { step: 'Material Selection', description: 'Choose from tile, shingle, metal, foam, or flat systems with our guidance.' },
      { step: 'Expert Installation', description: 'Full tear-off and precision re-roof by our experienced Arizona crew.' }
    ],
    types: ['Concrete Tile', 'Clay Tile', 'Shingle', 'Standing Seam Metal', 'Stone Coated Metal', 'Spray Foam', 'TPO Flat', 'New Construction']
  },
  {
    id: 'repair',
    title: 'Roof Repair & Maintenance',
    shortDescription: 'Fast, honest repairs for leaks, missing tiles, monsoon damage, flashing, and underlayment issues.',
    fullDescription: 'Not every roof needs a full replacement — and we\'ll tell you the truth either way. Craven Construction provides quick-response assessments and quality targeted repairs for all roof types. From patching wind damage to resetting slipping tiles or replacing broken underlayment, if a repair is all you need, that\'s all we\'ll recommend. We also provide silicone and elastomeric roof coatings to extend the life of your existing roof.',
    icon: 'Wrench',
    image: '/images/nrn-tile.jpg',
    benefits: [
      'Honest repair vs. replace assessment — no upselling',
      'Leak detection and same-day emergency response',
      'Tile replacement and re-sealing',
      'Flashing and valley repair',
      'Underlayment replacement and repair',
      'Silicone coatings — 15–20 yr lifespan, up to 20yr manufacturer warranty',
      'Elastomeric coatings — reflective, 8–10 yr lifespan',
      'Walk deck inspection and maintenance'
    ],
    process: [
      { step: 'Rapid Inspection', description: 'We locate the source of damage or intrusion — usually same or next day.' },
      { step: 'Honest Assessment', description: 'Clear recommendation: targeted repair or full replacement. No pressure.' },
      { step: 'Precision Repair', description: 'Matched materials, proper technique — done right the first time.' }
    ],
    types: ['Leak Repair', 'Tile Reset & Re-seal', 'Flashing Repair', 'Underlayment', 'Silicone Coatings', 'Elastomeric Coatings', 'Emergency Tarping']
  },
  {
    id: 'shade-structures',
    title: 'Shade Structures',
    shortDescription: 'Custom wood patios, Alumawood pergolas, aluminum awnings, steel structures & walk decks.',
    fullDescription: 'Arizona living means outdoor living. Craven Construction designs and builds custom shade structures that extend your usable space and protect you from the desert sun. Our wood patios include all amenities — fans, lights, electrical outlets, insulation, and shiplap ceilings. Our Alumawood pergolas look like real wood but are warp-resistant, insect-resistant, and waterproof. We also install aluminum awnings for homes and mobile homes, and we handle steel structures and walk decks. We can help with HOA and local permitting requirements.',
    icon: 'Shield',
    image: '/images/nrn-wood-patio.jpg',
    benefits: [
      'Custom wood patios — fans, lights, electrical, insulation & shiplap ceilings',
      'Alumawood pergolas — looks like wood, warp & insect-resistant, waterproof',
      'Aluminum awnings — homes and mobile homes',
      'Steel structures and carports',
      'Walk decks and elevated platforms',
      'HOA and permit assistance',
      'Free on-site estimates with Hearth financing available',
      'Engineered for Arizona wind loads and extreme heat'
    ],
    process: [
      { step: 'Design Consult', description: 'We plan the structure around your outdoor space, HOA rules, and needs.' },
      { step: 'Material Selection', description: 'Choose wood, Alumawood, aluminum, or steel with all amenity options.' },
      { step: 'Permit & Build', description: 'We handle permitting coordination and expert construction from start to finish.' }
    ],
    types: ['Custom Wood Patios', 'Alumawood Pergolas', 'Aluminum Awnings', 'Mobile Home Awnings', 'Steel Structures', 'Walk Decks', 'Carports']
  },
  {
    id: 'commercial',
    title: 'Commercial Roofing',
    shortDescription: 'Commercial foam, metal & tile roofing with silicone and acrylic coating systems for Arizona businesses.',
    fullDescription: 'Craven Construction provides commercial roofing services for light industrial buildings, retail properties, office parks, and other commercial structures. We specialize in commercial foam, metal, and tile roofing, plus silicone and acrylic coating systems. Silicone coatings offer 15–20 year lifespan with manufacturer warranties up to 20 years. Elastomeric coatings provide a reflective, UV-resistant surface lasting 8–10 years. We also assist with HOA and permit paperwork and schedule work to minimize business disruption.',
    icon: 'ClipboardCheck',
    image: '/images/nrn-commercial.jpg',
    benefits: [
      'Commercial foam, metal & tile roofing systems',
      'Silicone coatings — up to 20yr manufacturer warranty, 10yr labor warranty',
      'Elastomeric / acrylic coatings — 8–10 yr lifespan, reflective & UV-resistant',
      'Light industrial, retail, and office park experience',
      'HOA and permit paperwork assistance',
      'Scheduled to minimize business disruption',
      'TPO and modified bitumen systems',
      'Preventive maintenance programs available'
    ],
    process: [
      { step: 'Site Survey', description: 'Full commercial roof assessment with area measurements and condition report.' },
      { step: 'System Recommendation', description: 'Best coating or roofing system for your building type, use, and budget.' },
      { step: 'Professional Install', description: 'Efficient crew work with minimal disruption to your business operations.' },
      { step: 'Maintenance Plan', description: 'Optional preventive maintenance schedule to extend roof life and warranty.' }
    ],
    types: ['Commercial Foam', 'Commercial Metal', 'Commercial Tile', 'Silicone Coatings', 'Elastomeric Coatings', 'TPO Systems', 'Preventive Maintenance']
  }
];
