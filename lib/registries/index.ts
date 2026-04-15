/**
 * @module lib/registries
 * @description Barrel exports for all registries - SSOT for Royal Mulch
 *
 * Following AgentOS best practices for centralized configuration
 */

// Site Configuration
export { SITE_CONFIG } from "./SITE_CONFIG";
export type { ThemeName, NavigationItem } from "./SITE_CONFIG";

// Features Registry
export { FEATURES_REGISTRY, getFeatureIcon } from "./FEATURES_REGISTRY";
export type { Feature, TrustIndicator } from "./FEATURES_REGISTRY";

// Services Registry
export { SERVICES_REGISTRY, services } from "./SERVICES_REGISTRY";
export type { Service } from "./SERVICES_REGISTRY";

// Quick access for common operations
export const QUICK_ACCESS = {
  // Brand
  brandName: "Royal Mulch",
  tagline: "Premium Mulch Delivery & Pickup",

  // Contact
  phone: "(614) 582-0234",
  phoneLink: "tel:+16145820234",
  email: "info@royalmulch.com",

  // Location
  address: "3503 Ruble Park Ave, Lancaster, OH 43130",
  serviceArea: "Central Ohio",
} as const;
