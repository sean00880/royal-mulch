// Royal Mulch Data Registry
// Contains all navigation data, service listings, and product information

export const Registry = {
  services: [
    { name: 'Mulch Installation', slug: 'mulch-installation', description: 'Professional mulch installation services' },
    { name: 'Landscape Design', slug: 'landscape-design', description: 'Custom landscape design and planning' },
    { name: 'Tree Services', slug: 'tree-services', description: 'Tree trimming, removal, and maintenance' },
    { name: 'Hardscaping', slug: 'hardscaping', description: 'Patios, walkways, and retaining walls' },
    { name: 'Lawn Maintenance', slug: 'lawn-maintenance', description: 'Regular lawn care and maintenance' },
    { name: 'Spring Cleanup', slug: 'spring-cleanup', description: 'Spring yard cleanup services' },
    { name: 'Fall Cleanup', slug: 'fall-cleanup', description: 'Fall leaf removal and yard prep' },
    { name: 'Snow Removal', slug: 'snow-removal', description: 'Winter snow removal services' },
  ],

  products: [
    { name: 'Premium Hardwood Mulch', slug: 'premium-hardwood-mulch', category: 'mulch' },
    { name: 'Cedar Mulch', slug: 'cedar-mulch', category: 'mulch' },
    { name: 'Dyed Black Mulch', slug: 'dyed-black-mulch', category: 'mulch' },
    { name: 'Dyed Brown Mulch', slug: 'dyed-brown-mulch', category: 'mulch' },
    { name: 'Playground Mulch', slug: 'playground-mulch', category: 'mulch' },
    { name: 'River Rock', slug: 'river-rock', category: 'stone' },
    { name: 'Limestone Gravel', slug: 'limestone-gravel', category: 'stone' },
    { name: 'Crushed Stone', slug: 'crushed-stone', category: 'stone' },
    { name: 'Decorative Pebbles', slug: 'decorative-pebbles', category: 'stone' },
    { name: 'Premium Topsoil', slug: 'premium-topsoil', category: 'soil' },
    { name: 'Garden Mix', slug: 'garden-mix', category: 'soil' },
    { name: 'Compost', slug: 'compost', category: 'soil' },
    { name: 'Rock Salt', slug: 'rock-salt', category: 'winter' },
    { name: 'Ice Melt', slug: 'ice-melt', category: 'winter' },
  ],

  locations: [
    { id: 'lancaster-oh', city: 'Lancaster', state: 'OH', zip: '43130' },
    { id: 'carroll-oh', city: 'Carroll', state: 'OH', zip: '43112' },
    { id: 'baltimore-oh', city: 'Baltimore', state: 'OH', zip: '43105' },
    { id: 'pickerington-oh', city: 'Pickerington', state: 'OH', zip: '43147' },
    { id: 'circleville-oh', city: 'Circleville', state: 'OH', zip: '43113' },
  ],

  serviceArea: [
    { id: 'lancaster', city: 'Lancaster', state: 'OH', zip: '43130', distance: '0 mi' },
    { id: 'carroll', city: 'Carroll', state: 'OH', zip: '43112', distance: '12 mi' },
    { id: 'baltimore', city: 'Baltimore', state: 'OH', zip: '43105', distance: '14 mi' },
    { id: 'pickerington', city: 'Pickerington', state: 'OH', zip: '43147', distance: '18 mi' },
    { id: 'circleville', city: 'Circleville', state: 'OH', zip: '43113', distance: '20 mi' },
    { id: 'logan', city: 'Logan', state: 'OH', zip: '43138', distance: '22 mi' },
    { id: 'amanda', city: 'Amanda', state: 'OH', zip: '43102', distance: '10 mi' },
    { id: 'bremen', city: 'Bremen', state: 'OH', zip: '43107', distance: '15 mi' },
    { id: 'canal-winchester', city: 'Canal Winchester', state: 'OH', zip: '43110', distance: '20 mi' },
  ],

  testimonials: [
    {
      id: 1,
      name: 'Matt R.',
      location: 'Lancaster, OH',
      rating: 5,
      text: 'Ordered 8 yards of black mulch — delivered same day. Fine texture, rich color that lasted all summer. Our front yard looks incredible.',
    },
    {
      id: 2,
      name: 'Jessica T.',
      location: 'Carroll, OH',
      rating: 5,
      text: 'Royal Mulch handles all our commercial properties. Delivery always on time, quality is consistently excellent.',
    },
    {
      id: 3,
      name: 'Brian K.',
      location: 'Pickerington, OH',
      rating: 5,
      text: 'Same-day delivery and the mulch looks fantastic. Our office building never looked better. Repeat customer every spring.',
    },
  ],

  faqs: [
    {
      id: 1,
      question: 'What areas do you service?',
      answer: 'We deliver to Lancaster, Carroll, Baltimore, Pickerington, Circleville, and surrounding areas in Fairfield County.',
      category: 'general',
    },
    {
      id: 2,
      question: 'How much mulch do I need?',
      answer: 'A cubic yard of mulch covers approximately 100 square feet at 3 inches deep. Use our mulch calculator to determine exactly how much you need.',
      category: 'products',
    },
    {
      id: 3,
      question: 'Do you offer installation services?',
      answer: 'Yes, we offer professional mulch installation and landscaping services. Contact us for a free quote.',
      category: 'services',
    },
    {
      id: 4,
      question: 'What is your delivery schedule?',
      answer: 'We offer same-day delivery for orders placed before noon. Standard delivery is within 1-2 business days.',
      category: 'delivery',
    },
    {
      id: 5,
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, checks, and all major credit cards. Payment is due upon delivery unless you have an established account.',
      category: 'payment',
    },
  ],

  blogCategories: [
    { name: 'Tips & Guides', slug: 'tips-guides', count: 12 },
    { name: 'Product Spotlight', slug: 'product-spotlight', count: 8 },
    { name: 'Project Ideas', slug: 'project-ideas', count: 15 },
    { name: 'Seasonal', slug: 'seasonal', count: 10 },
    { name: 'Company News', slug: 'company-news', count: 5 },
  ],

  socialLinks: {
    facebook: 'https://facebook.com/royalmulch',
    google: 'https://g.page/royal-mulch-lancaster',
  },

  contactInfo: {
    phone: '(614) 582-0234',
    email: 'info@royalmulch.com',
    address: '3503 Ruble Park Ave, Lancaster, OH 43130',
    hours: {
      monday: '7:00 AM - 6:00 PM',
      tuesday: '7:00 AM - 6:00 PM',
      wednesday: '7:00 AM - 6:00 PM',
      thursday: '7:00 AM - 6:00 PM',
      friday: '7:00 AM - 6:00 PM',
      saturday: '8:00 AM - 4:00 PM',
      sunday: 'Closed',
    },
  },
};
