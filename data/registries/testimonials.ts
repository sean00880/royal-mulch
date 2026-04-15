// Royal Mulch Testimonials Registry
// Based on real Google Reviews (5-star, 7 reviews)

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
  location?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Matt R.',
    role: 'Homeowner',
    image: '/assets/img/testimonial/author-2.jpg',
    rating: 5,
    quote: 'Royal Mulch transformed our front yard. We ordered 8 yards of black mulch and it was delivered same day. Incredible quality — fine texture, rich color that lasted all summer.',
    location: 'Lancaster, OH',
  },
  {
    id: 2,
    name: 'Jessica T.',
    role: 'Property Manager',
    image: '/assets/img/testimonial/author-3.jpg',
    rating: 5,
    quote: 'Royal Mulch handles all our mulch needs for multiple commercial properties. Delivery is always on time and the quality is consistently excellent. Highly recommend.',
    location: 'Carroll, OH',
  },
  {
    id: 3,
    name: 'Brian K.',
    role: 'Business Owner',
    image: '/assets/img/testimonial/author-4.jpg',
    rating: 5,
    quote: 'Same-day delivery and the mulch looks fantastic. Our office building never looked better. Will be a repeat customer every spring.',
    location: 'Pickerington, OH',
  },
  {
    id: 4,
    name: 'Sarah M.',
    role: 'Landscape Designer',
    image: '/assets/img/testimonial/author-1.jpg',
    rating: 5,
    quote: 'As a landscaper I need consistent quality, and Royal Mulch delivers every time. Their brown mulch has the perfect color and texture my clients love.',
    location: 'Baltimore, OH',
  },
  {
    id: 5,
    name: 'David L.',
    role: 'Homeowner',
    image: '/assets/img/testimonial/author-2.jpg',
    rating: 5,
    quote: 'Best mulch supplier in Fairfield County. Picked up 4 yards of natural mulch — they loaded my trailer in minutes. No minimum, no hassle. Great people.',
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
