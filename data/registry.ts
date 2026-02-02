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
    { name: 'Premium Hardwood Mulch', slug: 'premium-hardwood-mulch', category: 'mulch', price: 45 },
    { name: 'Cedar Mulch', slug: 'cedar-mulch', category: 'mulch', price: 55 },
    { name: 'Dyed Black Mulch', slug: 'dyed-black-mulch', category: 'mulch', price: 42 },
    { name: 'Dyed Brown Mulch', slug: 'dyed-brown-mulch', category: 'mulch', price: 42 },
    { name: 'Playground Mulch', slug: 'playground-mulch', category: 'mulch', price: 48 },
    { name: 'River Rock', slug: 'river-rock', category: 'stone', price: 80 },
    { name: 'Limestone Gravel', slug: 'limestone-gravel', category: 'stone', price: 75 },
    { name: 'Crushed Stone', slug: 'crushed-stone', category: 'stone', price: 70 },
    { name: 'Decorative Pebbbles', slug: 'decorative-pebbles', category: 'stone', price: 85 },
    { name: 'Premium Topsoil', slug: 'premium-topsoil', category: 'soil', price: 40 },
    { name: 'Garden Mix', slug: 'garden-mix', category: 'soil', price: 45 },
    { name: 'Compost', slug: 'compost', category: 'soil', price: 35 },
    { name: 'Rock Salt', slug: 'rock-salt', category: 'winter', price: 150 },
    { name: 'Ice Melt', slug: 'ice-melt', category: 'winter', price: 180 },
  ],

  locations: [
    { id: 'lancaster-oh', city: 'Lancaster', state: 'OH', zip: '43130' },
    { id: 'carroll-oh', city: 'Carroll', state: 'OH', zip: '43112' },
    { id: 'baltimore-oh', city: 'Baltimore', state: 'OH', zip: '43105' },
    { id: 'pickerington-oh', city: 'Pickerington', state: 'OH', zip: '43147' },
    { id: 'circleville-oh', city: 'Circleville', state: 'OH', zip: '43113' },
  ],

  testimonials: [
    {
      id: 1,
      name: 'John Smith',
      location: 'Lancaster, OH',
      rating: 5,
      text: 'Excellent service and quality products. Our yard has never looked better!',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      location: 'Carroll, OH',
      rating: 5,
      text: 'Fast delivery and great prices. Will definitely use Royal Mulch again.',
    },
    {
      id: 3,
      name: 'Mike Williams',
      location: 'Pickerington, OH',
      rating: 5,
      text: 'The landscape design team transformed our backyard. Highly recommend!',
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
    instagram: 'https://instagram.com/royalmulch',
    twitter: 'https://twitter.com/royalmulch',
    youtube: 'https://youtube.com/@royalmulch',
  },

  contactInfo: {
    phone: '(740) 654-5555',
    email: 'info@royalmulch.com',
    address: '123 Mulch Lane, Lancaster, OH 43130',
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
