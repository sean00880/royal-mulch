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

// Design Tokens Registry (SOTA Typography + Design System)
export {
  DESIGN_TOKENS,
  TYPOGRAPHY,
  SPACING,
  COLORS,
  ANIMATIONS,
  EFFECTS,
  BREAKPOINTS,
} from "./DESIGN_TOKENS";
export type {
  Typography,
  Spacing,
  Colors,
  Animations,
  Effects,
  DesignTokens,
} from "./DESIGN_TOKENS";

// Quick access for common operations
export const QUICK_ACCESS = {
  // Brand
  brandName: "Royal Mulch",
  tagline: "Premium Mulch Delivery & Pickup",

  // Contact
  phone: "(740) 654-5555",
  phoneLink: "tel:+17406545555",
  email: "info@royalmulch.com",

  // Location
  address: "123 Mulch Lane, Lancaster, OH 43130",
  serviceArea: "Central Ohio",
} as const;
