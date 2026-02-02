// Royal Mulch Testimonials Registry
// TypeScript data for customer testimonials

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
    name: 'Humble D. Dow',
    role: 'Homeowner',
    image: '/assets/img/testimonial/author-2.jpg',
    rating: 5,
    quote: 'Royal Mulch transformed our backyard into a beautiful oasis. The quality of their black mulch is unmatched, and the delivery was prompt and professional.',
    location: 'Lancaster, OH',
  },
  {
    id: 2,
    name: 'Rosalina D. William',
    role: 'Property Manager',
    image: '/assets/img/testimonial/author-3.jpg',
    rating: 5,
    quote: 'One of the best gardening tips you will ever get is to plan your new garden near a water source. Royal Mulch\'s team provided expert advice that made all the difference.',
    location: 'Carroll, OH',
  },
  {
    id: 3,
    name: 'Miranda H. Halim',
    role: 'Business Owner',
    image: '/assets/img/testimonial/author-4.jpg',
    rating: 5,
    quote: 'When starting a garden, one of the top pieces of advice is to invest in soil that is nutrient rich and well drained. Royal Mulch delivered exactly what we needed.',
    location: 'Pickerington, OH',
  },
  {
    id: 4,
    name: 'Yellow M. Milso',
    role: 'Landscape Designer',
    image: '/assets/img/testimonial/author-1.jpg',
    rating: 5,
    quote: 'I recommend Royal Mulch to all my clients. Their brown mulch has that perfect natural look that complements any landscape design.',
    location: 'Baltimore, OH',
  },
  {
    id: 5,
    name: 'Dillon M. Milso',
    role: 'Homeowner',
    image: '/assets/img/testimonial/author-2.jpg',
    rating: 4,
    quote: 'Started with a simple idea: Deliver quality, well-designed landscape for home, business and public spaces. Royal Mulch helped make it happen.',
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
