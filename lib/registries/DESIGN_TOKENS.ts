/**
 * @module lib/registries/DESIGN_TOKENS
 * @description Centralized design tokens - SSOT for typography, spacing, colors, animations.
 *
 * This is the single source of truth for all design system constants.
 * Following AgentOS best practices for SOTA (State of the Art) design.
 *
 * References:
 * - normie-tool typography patterns
 * - southern-haulers fluid typography system
 * - Perplexity research on 2026 typography best practices
 */

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

export const TYPOGRAPHY = {
  // Font Families (CSS Variables)
  fontFamily: {
    /** Primary sans-serif for body text - clean, professional */
    sans: "var(--font-inter)",
    /** Display font for headings - thin, elegant */
    display: "var(--font-archivo)",
    /** Monospace for code and technical content */
    mono: "var(--font-mono)",
    /** Alternative sans for UI elements */
    roboto: "var(--font-roboto)",
  },

  // Font Weights (thin/light aesthetic)
  fontWeight: {
    thin: 100,
    extralight: 200, // Primary weight for headings
    light: 300,
    normal: 400, // Primary weight for body
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Fluid Typography Scale (using clamp for responsive sizing)
  fontSize: {
    /** Display: 40px - 72px (hero headlines) */
    display: "clamp(2.5rem, 2rem + 3vw, 4.5rem)",
    /** H1: 32px - 56px */
    h1: "clamp(2rem, 1.5rem + 2.5vw, 3.5rem)",
    /** H2: 28px - 40px */
    h2: "clamp(1.75rem, 1.5rem + 1.25vw, 2.5rem)",
    /** H3: 24px - 32px */
    h3: "clamp(1.5rem, 1.35rem + 0.75vw, 2rem)",
    /** H4: 20px - 24px */
    h4: "clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)",
    /** Body Large: 18px - 20px */
    bodyLarge: "clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)",
    /** Body: 16px - 18px */
    body: "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)",
    /** Body Small: 14px - 15px */
    bodySmall: "clamp(0.875rem, 0.85rem + 0.125vw, 0.9375rem)",
    /** Caption: 12px - 13px */
    caption: "clamp(0.75rem, 0.725rem + 0.125vw, 0.8125rem)",
    /** Mono: 14px (fixed for code) */
    mono: "0.875rem",
  },

  // Line Heights
  lineHeight: {
    none: 1,
    tight: 1.1,
    snug: 1.2,
    normal: 1.5,
    relaxed: 1.6,
    loose: 1.75,
  },

  // Letter Spacing (negative for headings - professional look)
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    heading: "-0.02em", // Professional heading tracking
    subheading: "-0.01em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
    pro: "0.12em", // Pro heading style (normie-tool)
  },
} as const;

// ============================================================================
// SPACING TOKENS
// ============================================================================

export const SPACING = {
  /** Section padding responsive scale */
  section: {
    sm: "3rem", // 48px
    md: "5rem", // 80px
    lg: "6rem", // 96px
  },

  /** Container max widths */
  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
    custom: "1400px", // Royal Mulch default
  },

  /** Component spacing */
  component: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
  },
} as const;

// ============================================================================
// COLOR TOKENS (Brand + Semantic)
// ============================================================================

export const COLORS = {
  // Brand Colors
  brand: {
    forest: "#2d5a27", // Primary green
    forestLight: "#4a7c42",
    brown: "#8b5a2b", // Secondary brown
    brownLight: "#a06b3a",
    beige: "#d4a574", // Accent beige
    beigeLight: "#e0b889",
  },

  // Semantic Colors
  semantic: {
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#3b82f6",
  },

  // Neutral Palette
  neutral: {
    white: "#ffffff",
    offWhite: "#fafaf8",
    gray50: "#f9fafb",
    gray100: "#f3f4f6",
    gray200: "#e5e7eb",
    gray300: "#d1d5db",
    gray400: "#9ca3af",
    gray500: "#6b7280",
    gray600: "#4b5563",
    gray700: "#374151",
    gray800: "#1f2937",
    gray900: "#111827",
    black: "#000000",
  },

  // Glass/Overlay
  glass: {
    light: "rgba(255, 255, 255, 0.8)",
    dark: "rgba(12, 14, 20, 0.9)",
    blur: "40px",
  },
} as const;

// ============================================================================
// ANIMATION TOKENS
// ============================================================================

export const ANIMATIONS = {
  // Durations
  duration: {
    instant: "0ms",
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    slower: "700ms",
    slowest: "1000ms",
  },

  // Easing Functions
  easing: {
    linear: "linear",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  },

  // Motion Presets
  presets: {
    fadeIn: { opacity: [0, 1], duration: 500 },
    fadeInUp: { opacity: [0, 1], y: [20, 0], duration: 600 },
    fadeInBlur: { opacity: [0, 1], filter: ["blur(12px)", "blur(0px)"], duration: 800 },
    scaleIn: { opacity: [0, 1], scale: [0.95, 1], duration: 400 },
    slideInLeft: { x: [-100, 0], opacity: [0, 1], duration: 500 },
    slideInRight: { x: [100, 0], opacity: [0, 1], duration: 500 },
  },

  // Stagger delays
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
} as const;

// ============================================================================
// EFFECTS TOKENS
// ============================================================================

export const EFFECTS = {
  // Border Radius
  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    default: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    "3xl": "1.5rem", // 24px
    full: "9999px",
  },

  // Box Shadows
  shadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    default: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    glow: "0 0 20px rgba(45, 90, 39, 0.3)", // Brand glow
  },

  // Backdrop Blur
  blur: {
    none: "0",
    sm: "4px",
    default: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
  },
} as const;

// ============================================================================
// BREAKPOINTS (for reference - Tailwind defaults)
// ============================================================================

export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// ============================================================================
// EXPORT ALL TOKENS
// ============================================================================

export const DESIGN_TOKENS = {
  typography: TYPOGRAPHY,
  spacing: SPACING,
  colors: COLORS,
  animations: ANIMATIONS,
  effects: EFFECTS,
  breakpoints: BREAKPOINTS,
} as const;

// Type exports
export type Typography = typeof TYPOGRAPHY;
export type Spacing = typeof SPACING;
export type Colors = typeof COLORS;
export type Animations = typeof ANIMATIONS;
export type Effects = typeof EFFECTS;
export type DesignTokens = typeof DESIGN_TOKENS;
