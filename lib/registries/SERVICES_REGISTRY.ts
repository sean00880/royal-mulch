/**
 * @module lib/registries/SERVICES_REGISTRY
 * @description Centralized services registry - mulch products only
 *
 * Single source of truth for all mulch product definitions and helpers.
 */

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  image: string;
  backgroundImage: string;
  icon: string;
  features: string[];
  category: "mulch";
  mulchColor?: string;
  pricing?: {
    pickupPerYard: number;
    deliveryPerYard: number;
    minimumDelivery: number;
  };
}

// Mulch Products
const mulchServices: Service[] = [
  {
    id: "black-mulch",
    slug: "black-mulch",
    title: "Black Mulch",
    shortDescription: "Premium black triple ground mulch — bold contrast, lasting color, and effective weed suppression.",
    fullDescription: [
      "Our premium black mulch is the most popular choice for Central Ohio homeowners. The deep, rich color creates stunning contrast against green foliage and colorful flowers.",
      "Triple ground for a fine, consistent texture that stays in place. Color-treated to maintain its bold look for 6-12 months even in full sun.",
    ],
    image: "/assets/img/service/service-3-img1.jpg",
    backgroundImage: "/assets/img/bg/black.jpg",
    icon: "Layers",
    features: [
      "Triple ground for fine texture",
      "Long-lasting color retention (6-12 months)",
      "Effective weed suppression",
      "Moisture retention properties",
      "Locally sourced and processed",
    ],
    category: "mulch",
    mulchColor: "#1a1a1a",
    pricing: { pickupPerYard: 32, deliveryPerYard: 42, minimumDelivery: 3 },
  },
  {
    id: "brown-mulch",
    slug: "brown-mulch",
    title: "Brown Mulch",
    shortDescription: "Natural warm tones that blend with any landscape — the versatile classic choice.",
    fullDescription: [
      "Our brown mulch offers warm, natural tones that complement brick homes, wooden fences, and natural stone features common in Lancaster and surrounding areas.",
      "Triple ground from quality hardwood and color-treated for lasting beauty. The most versatile choice for any landscape style.",
    ],
    image: "/assets/img/service/service-3-img2.jpg",
    backgroundImage: "/assets/img/bg/brown.jpg",
    icon: "Layers",
    features: [
      "Natural warm tones",
      "Triple ground texture",
      "Soil enrichment properties",
      "Erosion prevention",
      "Sustainably sourced",
    ],
    category: "mulch",
    mulchColor: "#5c3a1e",
    pricing: { pickupPerYard: 30, deliveryPerYard: 40, minimumDelivery: 3 },
  },
  {
    id: "natural-mulch",
    slug: "natural-mulch",
    title: "Natural Mulch",
    shortDescription: "100% undyed, eco-friendly mulch — perfect for organic gardens and eco-conscious landscaping.",
    fullDescription: [
      "Our natural mulch contains no dyes or chemicals, making it the ideal choice for vegetable gardens, herb beds, and areas where children or pets play.",
      "Triple ground from quality hardwood for a consistent texture. Breaks down faster than dyed varieties, enriching your soil more quickly.",
    ],
    image: "/assets/img/service/service-3-img3.jpg",
    backgroundImage: "/assets/img/bg/natural.jpg",
    icon: "Leaf",
    features: [
      "100% natural ingredients",
      "Eco-friendly choice",
      "Weed suppression",
      "Soil temperature regulation",
      "Improves soil structure",
    ],
    category: "mulch",
    mulchColor: "#c4a882",
    pricing: { pickupPerYard: 28, deliveryPerYard: 38, minimumDelivery: 3 },
  },
];

// All services = mulch services only
const allServices: Service[] = mulchServices;

// Services Registry with helpers
export const SERVICES_REGISTRY = {
  // Data arrays
  mulchServices,
  allServices,

  // Helper functions
  getMulchServices: () => mulchServices,
  getAllServices: () => allServices,
  getBySlug: (slug: string) => allServices.find((s) => s.slug === slug),
  getByCategory: (category: Service["category"]) => allServices.filter((s) => s.category === category),
  getStaticParams: () => allServices.map((s) => ({ slug: s.slug })),

  // Section defaults
  sectionDefaults: {
    title: "Our Mulch Products",
    subtitle: "Premium Triple Ground Mulch",
    description: "Three premium mulch options available for delivery or pickup in Fairfield County.",
  },
} as const;

// Re-export for backwards compatibility
export { allServices as services };
