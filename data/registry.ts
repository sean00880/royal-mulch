// Royal Mulch Data Registry
// Contains all navigation data, product information, and delivery details

export const Registry = {
  products: [
    { name: 'Black Triple Ground Mulch', slug: 'black-mulch', category: 'mulch', pricePickup: 32, priceDelivery: 42 },
    { name: 'Brown Triple Ground Mulch', slug: 'brown-mulch', category: 'mulch', pricePickup: 30, priceDelivery: 40 },
    { name: 'Natural Triple Ground Mulch', slug: 'natural-mulch', category: 'mulch', pricePickup: 28, priceDelivery: 38 },
  ],

  deliveryInfo: {
    minimumOrder: 3,
    unit: 'cubic yards',
    sameDayCutoff: '12:00 PM',
    standardLeadTime: '1-2 business days',
    deliveryFee: 'Included in delivery price per yard',
    pickupLocation: '123 Mulch Lane, Lancaster, OH 43130',
    pickupHours: 'Mon-Fri 7AM-6PM, Sat 8AM-4PM',
  },

  serviceArea: [
    { id: 'lancaster-oh', city: 'Lancaster', state: 'OH', zip: '43130', distance: '0 mi', deliveryAvailable: true },
    { id: 'carroll-oh', city: 'Carroll', state: 'OH', zip: '43112', distance: '12 mi', deliveryAvailable: true },
    { id: 'baltimore-oh', city: 'Baltimore', state: 'OH', zip: '43105', distance: '15 mi', deliveryAvailable: true },
    { id: 'pickerington-oh', city: 'Pickerington', state: 'OH', zip: '43147', distance: '18 mi', deliveryAvailable: true },
    { id: 'circleville-oh', city: 'Circleville', state: 'OH', zip: '43113', distance: '20 mi', deliveryAvailable: true },
    { id: 'logan-oh', city: 'Logan', state: 'OH', zip: '43138', distance: '22 mi', deliveryAvailable: true },
    { id: 'canal-winchester-oh', city: 'Canal Winchester', state: 'OH', zip: '43110', distance: '18 mi', deliveryAvailable: true },
    { id: 'heath-oh', city: 'Heath', state: 'OH', zip: '43056', distance: '25 mi', deliveryAvailable: true },
    { id: 'reynoldsburg-oh', city: 'Reynoldsburg', state: 'OH', zip: '43068', distance: '25 mi', deliveryAvailable: true },
  ],

  testimonials: [
    {
      id: 1,
      name: 'John S.',
      location: 'Lancaster, OH',
      rating: 5,
      text: 'Ordered 6 yards of black mulch delivered and it was there the same day. Excellent quality and the driver placed it right where we needed it.',
    },
    {
      id: 2,
      name: 'Sarah J.',
      location: 'Carroll, OH',
      rating: 5,
      text: 'Best mulch prices in Fairfield County. We picked up 4 yards of brown mulch and it was loaded fast. Will be back every spring.',
    },
    {
      id: 3,
      name: 'Mike W.',
      location: 'Pickerington, OH',
      rating: 5,
      text: 'The natural mulch is beautiful and lasts all season. Delivery was on time and the quality is way better than the big box stores.',
    },
  ],

  faqs: [
    {
      id: 1,
      question: 'What areas do you deliver to?',
      answer: 'We deliver to Lancaster, Carroll, Baltimore, Pickerington, Circleville, Logan, Canal Winchester, Heath, Reynoldsburg, and surrounding areas within a 25-mile radius of Lancaster, OH.',
      category: 'delivery',
    },
    {
      id: 2,
      question: 'How much mulch do I need?',
      answer: 'A cubic yard of mulch covers approximately 100 square feet at 3 inches deep. For a quick estimate: measure your area\'s length x width in feet, multiply by the depth in inches, then divide by 324. Use our mulch calculator on the homepage for an instant estimate.',
      category: 'products',
    },
    {
      id: 3,
      question: 'What is the minimum order for delivery?',
      answer: 'Our minimum delivery order is 3 cubic yards. For smaller quantities, pickup is available at our Lancaster location during business hours.',
      category: 'delivery',
    },
    {
      id: 4,
      question: 'Do you offer same-day delivery?',
      answer: 'Yes! Orders placed before noon are eligible for same-day delivery within our standard service area. Standard delivery is within 1-2 business days.',
      category: 'delivery',
    },
    {
      id: 5,
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, checks, and all major credit cards. Payment is due upon delivery or pickup unless you have an established business account.',
      category: 'payment',
    },
    {
      id: 6,
      question: 'What\'s the difference between your three mulch types?',
      answer: 'All three are triple ground for a fine, consistent texture. Black mulch provides a bold contrast and is our most popular. Brown mulch offers a natural, warm look that blends with most landscapes. Natural mulch is undyed and eco-friendly, perfect for organic gardens.',
      category: 'products',
    },
    {
      id: 7,
      question: 'Can I pick up mulch myself?',
      answer: 'Absolutely! Visit us at 123 Mulch Lane, Lancaster, OH 43130. We\'re open Mon-Fri 7AM-6PM and Saturday 8AM-4PM. We\'ll load it into your truck or trailer. No minimum order for pickup.',
      category: 'pickup',
    },
    {
      id: 8,
      question: 'How long does mulch color last?',
      answer: 'Our black and brown dyed mulches typically retain vibrant color for 6-12 months depending on sun exposure and weather. The triple ground process helps the dye penetrate deeper for longer-lasting color.',
      category: 'products',
    },
  ],

  blogCategories: [
    { name: 'Mulch Guides', slug: 'mulch-guides', count: 5 },
    { name: 'Seasonal Tips', slug: 'seasonal-tips', count: 4 },
    { name: 'Landscaping Ideas', slug: 'landscaping-ideas', count: 3 },
    { name: 'DIY Projects', slug: 'diy-projects', count: 3 },
    { name: 'Local News', slug: 'local-news', count: 2 },
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
