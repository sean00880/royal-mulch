/**
 * @module lib/registries/SITE_CONFIG
 * @description Centralized site configuration and brand identity registry.
 *
 * This is the single source of truth for all brand-related constants.
 * All components should import from this registry to ensure consistency.
 *
 * @see Royal Mulch - Premium Mulch Delivery & Pickup | Lancaster, OH
 */

export const SITE_CONFIG = {
  // Brand Identity
  brand: {
    name: "Royal Mulch",
    shortName: "RM",
    legalName: "Royal Mulch LLC",
    tagline: "Premium Mulch Delivery & Pickup",
    mission: "Delivering quality triple ground mulch to Central Ohio since 1995",
    established: "1995",
    location: "Lancaster, OH",
    description: "Premium triple ground mulch delivered to your door in Lancaster, OH and Fairfield County. Black, brown, and natural mulch available for delivery or pickup.",
  },

  // Contact Information
  contact: {
    phone: "(740) 654-5555",
    phoneLink: "tel:+17406545555",
    email: "info@royalmulch.com",
    address: "123 Mulch Lane, Lancaster, OH 43130",
    serviceArea: "Central Ohio",
    hours: {
      monday: "7:00 AM - 6:00 PM",
      tuesday: "7:00 AM - 6:00 PM",
      wednesday: "7:00 AM - 6:00 PM",
      thursday: "7:00 AM - 6:00 PM",
      friday: "7:00 AM - 6:00 PM",
      saturday: "8:00 AM - 4:00 PM",
      sunday: "Closed",
    },
  },

  // Logo Assets (Canonical Paths)
  logos: {
    primary: "/assets/img/logo/logo1.png",
    dark: "/assets/img/logo/logo1.png",
    favicon: "/favicon.ico",
  },

  // Brand Colors (for reference, actual colors in Tailwind config)
  colors: {
    forest: "#2d5a27",
    brown: "#8b5a2b",
    beige: "#d4a574",
  },

  // Navigation
  navigation: [
    { name: "Home", href: "/" },
    { name: "Our Mulch", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],

  // Footer Navigation
  footerLinks: {
    mulch: [
      { name: "Black Mulch", href: "/services/black-mulch" },
      { name: "Brown Mulch", href: "/services/brown-mulch" },
      { name: "Natural Mulch", href: "/services/natural-mulch" },
      { name: "All Mulch Products", href: "/services" },
    ],
    services: [
      { name: "Mulch Delivery", href: "/#delivery" },
      { name: "Mulch Pickup", href: "/#delivery" },
      { name: "Mulch Calculator", href: "/#calculator" },
      { name: "Service Area", href: "/#service-area" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
      { name: "Get a Quote", href: "/quote" },
    ],
    support: [
      { name: "FAQ", href: "/#faq" },
      { name: "Delivery Info", href: "/#delivery" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },

  // Social Links
  social: {
    facebook: "https://facebook.com/royalmulch",
    instagram: "https://instagram.com/royalmulch",
    twitter: "https://twitter.com/royalmulch",
    youtube: "https://youtube.com/@royalmulch",
  },

  // Copyright
  copyright: {
    year: new Date().getFullYear(),
    holder: "Royal Mulch LLC",
    text: `© ${new Date().getFullYear()} Royal Mulch. All rights reserved.`,
  },

  // Theme Configuration
  themes: {
    available: ["light", "dark"] as const,
    default: "system" as const,
    labels: {
      light: "Light Mode",
      dark: "Dark Mode",
    },
  },
} as const;

export type ThemeName = (typeof SITE_CONFIG.themes.available)[number];
export type NavigationItem = (typeof SITE_CONFIG.navigation)[number];
