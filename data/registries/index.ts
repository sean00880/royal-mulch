// Royal Mulch Data Registries
// Central export for all registry data

export * from './services';
export * from './blogs';
export * from './portfolio';
export * from './testimonials';
export * from './team';

// Re-export default registries
export { default as servicesRegistry } from './services';
export { default as blogsRegistry } from './blogs';
export { default as portfolioRegistry } from './portfolio';
export { default as testimonialsRegistry } from './testimonials';
export { default as teamRegistry } from './team';
