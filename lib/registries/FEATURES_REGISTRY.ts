/**
 * @module lib/registries/FEATURES_REGISTRY
 * @description Centralized features and trust indicators registry.
 *
 * Single source of truth for "Why Choose Us" features and statistics.
 * Focused on mulch delivery and pickup differentiators.
 */

import { Leaf, Truck, Shield, Star, Clock, MapPin, type LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TrustIndicator {
  label: string;
  value: string;
  suffix?: string;
}

export const FEATURES_REGISTRY = {
  // "Why Choose Us" Features - Mulch Focused
  whyChooseUs: [
    {
      icon: Leaf,
      title: "Triple Ground Quality",
      description: "All our mulch is triple ground for a fine, consistent texture that looks great and stays in place.",
    },
    {
      icon: Truck,
      title: "Same-Day Delivery",
      description: "Order before noon and get your mulch delivered the same day anywhere in our service area.",
    },
    {
      icon: MapPin,
      title: "Pickup Available",
      description: "Come grab your mulch at our Lancaster yard. No minimum order for pickup — we load it for you.",
    },
    {
      icon: Star,
      title: "Locally Sourced",
      description: "Our mulch is sourced and processed right here in Central Ohio for maximum freshness and quality.",
    },
    {
      icon: Shield,
      title: "Competitive Pricing",
      description: "Best prices in Fairfield County with delivery included in our per-yard pricing. No hidden fees.",
    },
    {
      icon: Clock,
      title: "Serving Since 1995",
      description: "Over 25 years providing premium mulch to Lancaster, OH and the surrounding Fairfield County area.",
    },
  ] satisfies Feature[],

  // Trust Indicators / Statistics - Mulch Specific
  trustIndicators: [
    { label: "Yards Delivered", value: "50,000", suffix: "+" },
    { label: "Years Serving Lancaster", value: "25", suffix: "+" },
    { label: "Delivery Radius (Miles)", value: "25", suffix: "" },
    { label: "Happy Customers", value: "500", suffix: "+" },
  ] satisfies TrustIndicator[],

  // Section defaults
  sectionDefaults: {
    title: "Why Choose Royal Mulch?",
    subtitle: "Lancaster's Mulch Experts",
    description: "Premium triple ground mulch with fast delivery and pickup options for all of Fairfield County.",
  },
} as const;

// Helper function to get icon component by name
export const getFeatureIcon = (iconName: string): LucideIcon | null => {
  const iconMap: Record<string, LucideIcon> = {
    Leaf,
    Truck,
    Shield,
    Star,
    Clock,
    MapPin,
  };
  return iconMap[iconName] || null;
};
