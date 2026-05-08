export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  benefits: string[];
  process: { step: string; description: string }[];
}

export const SERVICES: Service[] = [
  {
    id: 'installations',
    title: 'Re-Roofing',
    shortDescription: 'Complete tear-off and re-roofing in tile, shingle, metal, foam, and flat systems.',
    fullDescription: 'Our flagship service. We hand-measure every roof — no satellite guesswork. Whether tile, shingle, metal, foam, or flat, we deliver a full tear-off and precision re-roof built for Arizona\'s extreme summers and monsoon season.',
    icon: 'Hammer',
    image: '/images/IMG_3704.png',
    benefits: [
      'Hand-measured estimates — no satellite shortcuts',
      'Tile, shingle, metal, foam & flat systems',
      '20+ years Arizona roofing experience',
      '18 months same-as-cash financing via Hearth'
    ],
    process: [
      { step: 'Hand Measurement', description: 'We walk the roof ourselves — accurate to the square foot.' },
      { step: 'Material Selection', description: 'Choose from tile, shingle, metal, foam, or flat systems.' },
      { step: 'Tear-Off & Install', description: 'Full removal and precision re-roof by our experienced crew.' },
      { step: 'Final Walkthrough', description: 'We inspect every detail with you before signing off.' }
    ]
  },
  {
    id: 'repair',
    title: 'Roof Repair',
    shortDescription: 'Fast, honest repairs for leaks, monsoon damage, and thermal cracking.',
    fullDescription: 'Not every roof needs a full replacement. We provide honest assessments and quality repairs — from patching monsoon damage to fixing thermal cracks and worn flashing. If a repair is all you need, that\'s all we\'ll recommend.',
    icon: 'Wrench',
    image: '/images/Untitled-design-4.png',
    benefits: [
      'Honest assessment — repair vs. replace',
      'Leak detection and emergency patches',
      'Tile reset and re-sealing',
      'Coating and sealant application'
    ],
    process: [
      { step: 'Inspection', description: 'Locate the source of damage or intrusion.' },
      { step: 'Assessment', description: 'Determine if repair is viable or replacement needed.' },
      { step: 'Precision Fix', description: 'Targeted repair using matched materials.' }
    ]
  },
  {
    id: 'shingles',
    title: 'Shade Structures',
    shortDescription: 'Custom wood patios, aluminum pergolas, awnings, and steel structures.',
    fullDescription: 'Arizona living means outdoor living. We design and build custom wood patios, aluminum pergolas, awnings, steel structures, and walk decks that extend your usable space and shield you from the desert sun.',
    icon: 'Shield',
    image: '/images/Untitled-design-12.png',
    benefits: [
      'Custom wood patio construction',
      'Aluminum pergolas and awnings',
      'Steel structures and walk decks',
      'Engineered for Arizona heat and wind loads'
    ],
    process: [
      { step: 'Design Consult', description: 'We plan the structure around your space and needs.' },
      { step: 'Engineering', description: 'Proper load calculations for Arizona wind and heat.' },
      { step: 'Build & Finish', description: 'Expert construction with quality materials and clean finish.' }
    ]
  },
  {
    id: 'insurance',
    title: 'Commercial Roofing',
    shortDescription: 'Full-service commercial roofing systems, coatings, and maintenance programs.',
    fullDescription: 'From retail centers to warehouses, we handle commercial roofing with the same precision as residential. Silicone and acrylic coatings, TPO, modified bitumen, and built-up systems — all backed by 20+ years of Arizona expertise.',
    icon: 'ClipboardCheck',
    image: '/images/IMG_3700.png',
    benefits: [
      'Silicone and acrylic roof coatings',
      'TPO and modified bitumen systems',
      'Preventive maintenance programs',
      'Minimal business disruption scheduling'
    ],
    process: [
      { step: 'Site Survey', description: 'Full commercial roof assessment and measurements.' },
      { step: 'System Recommendation', description: 'Best system for your building type and budget.' },
      { step: 'Professional Install', description: 'Efficient crew work scheduled around your operations.' }
    ]
  }
];
