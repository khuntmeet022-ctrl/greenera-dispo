// Mock data for GreenEra website

export const productCategories = [
  {
    id: 'round-plates',
    name: 'Round Plates',
    description: 'Classic round plates in various sizes for all dining needs',
    icon: 'Circle'
  },
  {
    id: 'square-plates',
    name: 'Square Plates',
    description: 'Modern square plates and trays for contemporary serving',
    icon: 'Square'
  },
  {
    id: 'compartment-plates',
    name: 'Compartment Plates',
    description: 'Multi-compartment trays ideal for meal planning and catering',
    icon: 'LayoutGrid'
  },
  {
    id: 'bowls',
    name: 'Bowls',
    description: 'Various bowl sizes for soups, salads, and side dishes',
    icon: 'Soup'
  },
  {
    id: 'clam-shells',
    name: 'Clam Shells',
    description: 'Hinged food containers perfect for takeaway and delivery',
    icon: 'Package'
  }
];

export const products = [
  // Round Plates
  { id: 'rp-6', category: 'round-plates', name: '6 Inch Round Plate', diameter: '151 MM', depth: '18 MM', material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/s3gfbt69_GreenEra%20Products%201-1%20%281%29.png' },
  { id: 'rp-7', category: 'round-plates', name: '7 Inch Round Plate', diameter: '175 MM', depth: '19.5 MM', material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/ixdi6x9l_GreenEra%20Products%201-1%20%282%29.png' },
  { id: 'rp-9', category: 'round-plates', name: '9 Inch Round Plate', diameter: '225 MM', depth: '18 MM', material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/9tz7m263_3.png' },
  { id: 'rp-10', category: 'round-plates', name: '10 Inch Round Plate', diameter: '255 MM', depth: '23 MM', material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/xbu6kkvs_10%20Inch.png' },
  { id: 'rp-11', category: 'round-plates', name: '11 Inch Round Plate', diameter: '280 MM', depth: '23 MM', material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/5p3emg62_4.png' },
  { id: 'rp-12', category: 'round-plates', name: '12 Inch Round Plate', diameter: '302 MM', depth: '24 MM', material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/cxtz90ez_5.png' },
  
  // Square Plates
  { id: 'sp-1d', category: 'square-plates', name: '1D TRAY Square Plate', size: '137 MM X 137 MM', depth: '21 MM', material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/dtlwtx5s_6.png' },
  { id: 'sp-2cp', category: 'square-plates', name: '2 CP TRAY (Snack Tray)', size: '210MM X 128MM', depth: '24 MM', material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/hjviaz05_7.png' },
  
  // Compartment Plates
  { id: 'cp-3sq', category: 'compartment-plates', name: '3CP Square Compartment', size: '215 MM x 215MM', depth: '24 MM', compartments: 3, material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/peek5kiz_8.png' },
  { id: 'cp-4', category: 'compartment-plates', name: '4CP Meal Tray', size: '290 MM x 235 MM', depth: '33 MM', compartments: 4, material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/sewjj5sz_9.png' },
  { id: 'cp-5', category: 'compartment-plates', name: '5CP Meal Tray', size: '295 MM x 225 MM', depth: '33 MM', compartments: 5, material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/q48v8zbc_10.png' },
  { id: 'cp-6', category: 'compartment-plates', name: '6CP Meal Tray', size: '304 MM x 228 MM', depth: '33 MM', compartments: 6, material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/6mq4ky6n_11.png' },
  { id: 'cp-9r-3', category: 'compartment-plates', name: '9" - 3CP Round Compartment Plate', diameter: '225 MM', depth: '20 MM', compartments: 3, material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/facw5rl4_12.png' },
  { id: 'cp-10r-3', category: 'compartment-plates', name: '10" - 3CP Round Compartment Plate', diameter: '255 MM', depth: '25.5 MM', compartments: 3, material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/fji7ttjp_13.png' },
  { id: 'cp-11r-4', category: 'compartment-plates', name: '11" - 4CP Round Compartment Plate', diameter: '280 MM', depth: '25.5 MM', compartments: 4, material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/ig959eyi_14.png' },
  { id: 'cp-12r-4', category: 'compartment-plates', name: '12" - 4CP Round Compartment Plate', diameter: '302 MM', depth: '25.5 MM', compartments: 4, material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/ghu85cdg_15.png' },
  { id: 'cp-9r-9', category: 'compartment-plates', name: '9CP Round Compartment Plate', diameter: '318 MM', depth: '25.5 MM', compartments: 9, material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/uuofar5j_16.png' },
  
  // Bowls
  { id: 'b-medium', category: 'bowls', name: 'Medium Bowl', diameter: '115 MM', depth: '38 MM', volume: '210 ML', material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/dziiineb_17.png' },
  { id: 'b-exim', category: 'bowls', name: 'Exim Bowl', diameter: '139 MM', depth: '39 MM', volume: '230 ML', material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/nfijcs8d_Exim%20Bowl.png' },
  { id: 'b-large', category: 'bowls', name: 'Large Bowl', diameter: '151 MM', depth: '41 MM', volume: '350 ML', material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/23d4xiw5_Large%20Bowl.png' },
  { id: 'b-smart', category: 'bowls', name: 'Smart Bowl', diameter: '88 MM', depth: '33 MM', volume: '120 ML', material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/hbg325ku_Smart%20Bowl.png' },
  { id: 'b-mediam', category: 'bowls', name: 'Mediam Bowl', diameter: '107 MM', depth: '40 MM', volume: '180 ML', material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/79vlvdj2_MEDIAM%20Bowl%202nd.png' },
  { id: 'b-dona', category: 'bowls', name: 'Dona Square Bowl', size: '105 X 105 MM', depth: '29 MM', volume: '120 ML', material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/therdzms_Dona%20Square%20Bowl.png' },
  
  // Clam Shells
  { id: 'cs-6x6', category: 'clam-shells', name: '6" X 6" Clam Shell', size: '153 X 153 MM', depth: '42 MM', volume: '500 ML', totalDepth: '76 MM', material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/1mds1zvu_6_%20X%206_%20Clam%20Shell.png' },
  { id: 'cs-9x6', category: 'clam-shells', name: '9" X 6" Clam Shell', size: '153 X 232 MM', depth: '42 MM', volume: '800 ML', totalDepth: '73 MM', material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/te48rmyp_9_%20X%206_%20Clam%20Shell.png' },
  { id: 'cs-9x9', category: 'clam-shells', name: '9" X 9" Clam Shell', size: '230 X 235 MM', depth: '44 MM', volume: '1300 ML', totalDepth: '74 MM', material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/a7vtz3sa_9_%20X%209_%20Clam%20Shell.png' },
  { id: 'cs-9x9-3cp', category: 'clam-shells', name: '9" X 9" 3CP Clam Shell', size: '230 X 230 MM', depth: '45 MM', volume: '1300 ML', totalDepth: '80 MM', compartments: 3, material: 'Sugarcane Bagasse', image: 'https://customer-assets.emergentagent.com/job_eco-tableware-4/artifacts/pxxgxrtq_9_%20X%209_%203CP%20Clam%20Shell.png' }
];

export const sustainabilityStats = [
  { value: '100%', label: 'Biodegradable', description: 'Returns to nature within 90 days' },
  { value: '0%', label: 'Plastic Content', description: 'Made from natural sugarcane pulp' },
  { value: '100%', label: 'Compostable', description: 'Certified eco-friendly materials' },
  { value: '50+', label: 'Trees Saved', description: 'Per ton of bagasse used' }
];

export const features = [
  { icon: 'Leaf', title: '100% Biodegradable', description: 'Decomposes naturally within 90 days, leaving no harmful residue' },
  { icon: 'Droplets', title: 'Oil & Water Resistant', description: 'Durable performance for hot and cold food service' },
  { icon: 'Microwave', title: 'Microwave & Freezer Safe', description: 'Versatile for reheating and storage applications' },
  { icon: 'ShieldCheck', title: 'Non-Toxic & Chemical-Free', description: 'Safe for food contact with no harmful additives' },
  { icon: 'Recycle', title: '100% Compostable', description: 'Certified for commercial and home composting' },
  { icon: 'Zap', title: 'Strong & Durable', description: 'Sturdy construction handles all meal types' }
];

export const aboutContent = {
  mission: 'GreenEra is committed to revolutionizing the food service industry by providing premium, eco-friendly tableware solutions made from 100% natural sugarcane bagasse. We help businesses transition from harmful single-use plastics to sustainable alternatives without compromising on quality or functionality.',
  vision: 'To become the leading supplier of sustainable tableware solutions globally, empowering businesses to make environmentally responsible choices while serving their customers with excellence.',
  values: [
    { title: 'Sustainability', description: 'Every product we create helps reduce plastic waste and environmental impact' },
    { title: 'Quality', description: 'Premium materials and rigorous testing ensure superior performance' },
    { title: 'Innovation', description: 'Continuous improvement in design and manufacturing processes' },
    { title: 'Partnership', description: 'Building long-term relationships with B2B clients through reliability and service' }
  ]
};
