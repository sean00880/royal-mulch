// Royal Mulch Portfolio Registry
// TypeScript data for portfolio/gallery items

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
}

export const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Hasu House Garden & Barbecue', category: 'Residential', image: '/assets/img/portfolio/portfolio-630_450-1.jpg' },
  { id: 2, title: 'Foliage as an Asset in the Garden', category: 'Landscape', image: '/assets/img/portfolio/portfolio-630_450-3.jpg' },
  { id: 3, title: 'Lawn and Garden Maintenance', category: 'Maintenance', image: '/assets/img/portfolio/gallery-first.jpg' },
  { id: 4, title: 'Tree-Trimming & Removal', category: 'Tree Services', image: '/assets/img/portfolio/gallery2.jpg' },
  { id: 5, title: 'Premium Black Mulch Installation', category: 'Mulch', image: '/assets/img/portfolio/gallery3.jpg' },
  { id: 6, title: 'Commercial Property Landscaping', category: 'Commercial', image: '/assets/img/portfolio/gallery4.jpg' },
  { id: 7, title: 'Brown Mulch Garden Beds', category: 'Mulch', image: '/assets/img/portfolio/gallery5.jpg' },
  { id: 8, title: 'Residential Landscaping Project', category: 'Residential', image: '/assets/img/portfolio/gallery6.jpg' },
  { id: 9, title: 'Natural Mulch Installation', category: 'Mulch', image: '/assets/img/portfolio/gallery7.jpg' },
  { id: 10, title: 'Patio and Walkway Design', category: 'Hardscape', image: '/assets/img/portfolio/portfolio-24.jpg' },
  { id: 11, title: 'Garden Bed Renovation', category: 'Landscape', image: '/assets/img/portfolio/portfolio-25.jpg' },
  { id: 12, title: 'Spring Cleanup Project', category: 'Maintenance', image: '/assets/img/portfolio/portfolio-26.jpg' },
  { id: 13, title: 'Commercial Mulch Installation', category: 'Commercial', image: '/assets/img/portfolio/portfolio-27.jpg' },
  { id: 14, title: 'Decorative Stone Borders', category: 'Hardscape', image: '/assets/img/portfolio/portfolio-28.jpg' },
  { id: 15, title: 'Landscape Transformation', category: 'Landscape', image: '/assets/img/portfolio/portfolio-29.jpg' },
  { id: 16, title: 'Mowing the Grass', category: 'Maintenance', image: '/assets/img/portfolio/portfolio-1.jpg' },
  { id: 17, title: 'Watering Plants', category: 'Maintenance', image: '/assets/img/portfolio/portfolio-2.jpg' },
  { id: 18, title: 'Weeding Planted Areas', category: 'Maintenance', image: '/assets/img/portfolio/portfolio-3.jpg' },
  { id: 19, title: 'Planting New Trees', category: 'Tree Services', image: '/assets/img/portfolio/portfolio-4.jpg' },
  { id: 20, title: 'Seasonal Color Planting', category: 'Landscape', image: '/assets/img/portfolio/portfolio-5.jpg' },
];

export const portfolioCategories = [
  'All',
  'Mulch',
  'Landscape',
  'Residential',
  'Commercial',
  'Hardscape',
  'Maintenance',
  'Tree Services',
] as const;

export type PortfolioCategory = typeof portfolioCategories[number];

// Helper functions
export const portfolioRegistry = {
  getAllItems: () => portfolioItems,
  getByCategory: (category: string) =>
    category === 'All' ? portfolioItems : portfolioItems.filter(p => p.category === category),
  getCategories: () => portfolioCategories,
  getById: (id: number) => portfolioItems.find(p => p.id === id),
  getFeatured: (count = 6) => portfolioItems.slice(0, count),
};

export default portfolioRegistry;
