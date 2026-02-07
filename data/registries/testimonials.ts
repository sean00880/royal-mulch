// Royal Mulch Testimonials Registry
// TypeScript data for customer testimonials (no stock photos - uses initials)

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  initials: string;
  initialsColor: string;
  rating: number;
  quote: string;
  location?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'James D.',
    role: 'Homeowner',
    initials: 'JD',
    initialsColor: '#2d5a27',
    rating: 5,
    quote: 'Royal Mulch transformed our front yard. We ordered 8 yards of black mulch delivered and it was there the same afternoon. The quality is incredible — fine texture, rich color that lasted all summer.',
    location: 'Lancaster, OH',
  },
  {
    id: 2,
    name: 'Rachel M.',
    role: 'Property Manager',
    initials: 'RM',
    initialsColor: '#8b5a2b',
    rating: 5,
    quote: 'I manage several commercial properties and Royal Mulch handles all our mulch needs. Their delivery is always on time and the pricing beats everyone else in the county. Highly recommend.',
    location: 'Carroll, OH',
  },
  {
    id: 3,
    name: 'Tom K.',
    role: 'Landscaper',
    initials: 'TK',
    initialsColor: '#5c3a1e',
    rating: 5,
    quote: 'As a professional landscaper, I need consistent quality. Royal Mulch delivers every time. Their brown mulch has the perfect color and texture my clients love. Best supplier in Fairfield County.',
    location: 'Pickerington, OH',
  },
  {
    id: 4,
    name: 'Linda S.',
    role: 'Homeowner',
    initials: 'LS',
    initialsColor: '#4a8f42',
    rating: 5,
    quote: 'We picked up 4 yards of natural mulch on Saturday morning. They loaded our trailer in minutes and the mulch looks beautiful in our garden beds. Great prices too.',
    location: 'Baltimore, OH',
  },
  {
    id: 5,
    name: 'David H.',
    role: 'Business Owner',
    initials: 'DH',
    initialsColor: '#c4845a',
    rating: 5,
    quote: 'Used Royal Mulch for our office landscaping refresh. Same-day delivery, fair pricing, and the mulch looks fantastic. Our building never looked better.',
    location: 'Circleville, OH',
  },
];

// Helper functions
export const testimonialsRegistry = {
  getAll: () => testimonials,
  getTopRated: (count = 3) => testimonials.filter(t => t.rating >= 5).slice(0, count),
  getByLocation: (location: string) => testimonials.filter(t => t.location?.includes(location)),
  getRandom: (count = 3) => {
    const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  },
};

export default testimonialsRegistry;
