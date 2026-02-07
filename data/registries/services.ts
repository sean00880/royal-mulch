// Royal Mulch Services Registry
// TypeScript data for mulch products with pricing and delivery info

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
  category: 'mulch';
  mulchColor: string;
  pricing: {
    pickupPerYard: number;
    deliveryPerYard: number;
    minimumDelivery: number;
  };
}

export const mulchServices: Service[] = [
  {
    id: 'black-mulch',
    slug: 'black-mulch',
    title: 'Black Mulch',
    shortDescription: 'Sourced from the finest organic materials, this mulch not only adds a touch of sophistication but also provides numerous benefits to your garden. Elevate your landscaping game with our Black Triple Ground Mulch – where aesthetics meet functionality.',
    fullDescription: [
      'When it comes to transforming your outdoor space, our premium black mulch stands out as a top choice. At Royal Mulch, we take pride in offering you the finest quality black mulch that not only beautifies your landscape but also provides numerous benefits.',
      'Our black mulch serves as a striking contrast against the vibrant colors of your plants, creating a visually captivating environment that immediately captures attention. Whether you\'re looking to create defined garden beds, showcase your flowers, or highlight architectural elements, black mulch adds a touch of elegance and sophistication to any setting.',
      'But it\'s not just about aesthetics—our black mulch offers functional advantages too. With its dense composition, it acts as an effective weed suppressor, reducing the need for constant maintenance. Additionally, this mulch helps retain moisture in the soil, ensuring your plants remain adequately hydrated even during hot Central Ohio summers.',
      'What sets Royal Mulch apart is our commitment to quality. Our black mulch is carefully processed and dyed to maintain its color and texture, ensuring long-lasting beauty. As a local business in Central Ohio, we understand the unique requirements of our region\'s landscapes. When you choose Royal Mulch\'s black mulch, you\'re investing in a product specifically designed to thrive in our climate.',
      'Discover the difference that premium black mulch from Royal Mulch can make for your landscape. Elevate your curb appeal, simplify your gardening routine, and enjoy a stunning outdoor space that reflects your style. Explore our range of mulch products today and experience the Royal Mulch advantage.',
    ],
    image: '/assets/img/service/service-3-img1.jpg',
    backgroundImage: '/assets/img/bg/black.jpg',
    icon: 'flaticon-farmer',
    features: [
      'Triple ground for fine texture',
      'Long-lasting color retention',
      'Effective weed suppression',
      'Moisture retention properties',
      'Locally sourced and processed',
      'Perfect for Central Ohio climate',
    ],
    category: 'mulch',
    mulchColor: '#1a1a1a',
    pricing: {
      pickupPerYard: 32,
      deliveryPerYard: 42,
      minimumDelivery: 3,
    },
  },
  {
    id: 'brown-mulch',
    slug: 'brown-mulch',
    title: 'Brown Mulch',
    shortDescription: 'Made from triple ground materials, our brown mulch enriches your soil, prevents erosion, and adds a polished look to your outdoor space. Whether your garden is modern or traditional, our brown mulch fits seamlessly.',
    fullDescription: [
      'At Royal Mulch, we\'re dedicated to helping you achieve a landscape that not only looks beautiful but also thrives. Our rich brown mulch is a testament to this commitment, offering you a versatile and sustainable solution for enhancing your outdoor space.',
      'Brown mulch exudes a natural warmth that complements the earthy tones of Central Ohio\'s surroundings. It effortlessly blends in with your garden\'s color palette, creating a harmonious backdrop that allows your plants to take center stage. Whether you have vibrant flowers, lush shrubs, or majestic trees, our brown mulch enhances their beauty and brings a cohesive look to your landscape.',
      'Beyond its aesthetic appeal, brown mulch serves practical purposes as well. By forming a protective layer over your soil, it reduces weed growth and minimizes the need for constant maintenance. This, in turn, allows you to focus more on enjoying your garden and less on battling unwanted plants.',
      'At Royal Mulch, we\'re committed to sustainability. Our brown mulch is sourced from responsibly managed materials and processed with care to ensure its quality. We understand the demands of Central Ohio\'s climate, and our mulch is designed to withstand its challenges while providing the nourishment your plants need.',
      'Choosing Royal Mulch\'s brown mulch means investing in a product that adds value to your landscape and eases your gardening efforts. Elevate your outdoor space, create a natural and inviting atmosphere, and experience the difference that quality mulch can make. Explore our range of mulch options today and take a step toward a more beautiful landscape.',
    ],
    image: '/assets/img/service/service-3-img2.jpg',
    backgroundImage: '/assets/img/bg/brown.jpg',
    icon: 'flaticon-gardening',
    features: [
      'Natural warm tones',
      'Triple ground texture',
      'Soil enrichment properties',
      'Erosion prevention',
      'Sustainably sourced',
      'All-season durability',
    ],
    category: 'mulch',
    mulchColor: '#5c3a1e',
    pricing: {
      pickupPerYard: 30,
      deliveryPerYard: 40,
      minimumDelivery: 3,
    },
  },
  {
    id: 'natural-mulch',
    slug: 'natural-mulch',
    title: 'Natural Mulch',
    shortDescription: 'Crafted from all-natural ingredients, our natural mulch helps suppress weeds, regulate soil temperature, and improve overall soil structure. Create a sustainable and eco-friendly landscape while enjoying the benefits of reduced maintenance.',
    fullDescription: [
      'Nature-inspired beauty meets practicality with our natural mulch at Royal Mulch. Designed to blend seamlessly into the environment, our natural mulch is the perfect choice for those seeking an authentic, earthy aesthetic while reaping the benefits of mulching.',
      'Our natural mulch allows your landscape\'s natural charm to shine through. Its subtle tones and textures provide an unobtrusive backdrop that lets your plants and features take center stage. Whether you\'re designing a tranquil garden retreat or a vibrant outdoor gathering space, our natural mulch complements your vision with a touch of simplicity.',
      'While enhancing the aesthetics of your landscape, natural mulch also serves as a functional asset. By preventing weed growth and conserving moisture in the soil, it nurtures your plants while minimizing the hassle of maintenance. Our commitment to quality ensures that the mulch retains its integrity over time, providing lasting benefits.',
      'At Royal Mulch, we understand Central Ohio\'s unique climate and landscape requirements. Our natural mulch is carefully selected and processed to meet these demands, ensuring that your plants receive the support they need to flourish.',
      'Choose Royal Mulch\'s natural mulch to create a serene, inviting, and effortlessly beautiful landscape. Embrace the elegance of nature, simplify your gardening routine, and elevate your outdoor space. Explore our range of mulch products today and experience the Royal Mulch difference for yourself.',
    ],
    image: '/assets/img/service/service-3-img3.jpg',
    backgroundImage: '/assets/img/bg/natural.jpg',
    icon: 'flaticon-farming-and-gardening',
    features: [
      '100% natural ingredients',
      'Eco-friendly choice',
      'Weed suppression',
      'Soil temperature regulation',
      'Improves soil structure',
      'Authentic earthy aesthetic',
    ],
    category: 'mulch',
    mulchColor: '#c4a882',
    pricing: {
      pickupPerYard: 28,
      deliveryPerYard: 38,
      minimumDelivery: 3,
    },
  },
];

// All services is just mulch services now
export const allServices: Service[] = mulchServices;

// Helper functions
export const servicesRegistry = {
  getMulchServices: () => mulchServices,
  getAllServices: () => allServices,
  getBySlug: (slug: string) => allServices.find(s => s.slug === slug),
  getByCategory: (category: Service['category']) => allServices.filter(s => s.category === category),
  getStaticParams: () => allServices.map(s => ({ slug: s.slug })),
};

export default servicesRegistry;
