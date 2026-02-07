import type { Config } from "tailwindcss";

/**
 * Royal Mulch Tailwind Configuration
 *
 * SOTA Design System following AgentOS best practices
 * Typography: Archivo, Inter, JetBrains Mono, Roboto
 * Patterns: normie-tool + southern-haulers
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ========================================================================
      // FONT FAMILIES (CSS Variables from next/font)
      // ========================================================================
      fontFamily: {
        // Primary sans-serif for body text
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        // Display font for headings (thin weight aesthetic)
        archivo: ["var(--font-archivo)", "system-ui", "sans-serif"],
        // Monospace for code/technical content
        mono: ["var(--font-mono)", "Fira Code", "Consolas", "monospace"],
        // Alternative sans for UI elements
        roboto: ["var(--font-roboto)", "system-ui", "sans-serif"],
        // Default sans (maps to Inter)
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        // Display alias
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },

      // ========================================================================
      // FLUID TYPOGRAPHY SCALE
      // ========================================================================
      fontSize: {
        // Display: 40px - 72px (hero headlines)
        display: ["clamp(2.5rem, 2rem + 3vw, 4.5rem)", { lineHeight: "1.1" }],
        // H1: 32px - 56px
        h1: ["clamp(2rem, 1.5rem + 2.5vw, 3.5rem)", { lineHeight: "1.1" }],
        // H2: 28px - 40px
        h2: ["clamp(1.75rem, 1.5rem + 1.25vw, 2.5rem)", { lineHeight: "1.2" }],
        // H3: 24px - 32px
        h3: ["clamp(1.5rem, 1.35rem + 0.75vw, 2rem)", { lineHeight: "1.3" }],
        // H4: 20px - 24px
        h4: ["clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)", { lineHeight: "1.4" }],
        // Body Large: 18px - 20px
        "body-lg": ["clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)", { lineHeight: "1.6" }],
        // Body: 16px - 18px
        body: ["clamp(1rem, 0.95rem + 0.25vw, 1.125rem)", { lineHeight: "1.6" }],
        // Body Small: 14px - 15px
        "body-sm": ["clamp(0.875rem, 0.85rem + 0.125vw, 0.9375rem)", { lineHeight: "1.5" }],
        // Caption: 12px - 13px
        caption: ["clamp(0.75rem, 0.725rem + 0.125vw, 0.8125rem)", { lineHeight: "1.4" }],
      },

      // ========================================================================
      // LETTER SPACING (negative for headings - professional look)
      // ========================================================================
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        heading: "-0.02em",
        subheading: "-0.01em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
        pro: "0.12em", // Pro heading style (normie-tool)
      },

      // ========================================================================
      // COLORS (HSL Variables)
      // ========================================================================
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Brand colors for direct use
        brand: {
          forest: "#2d5a27",
          "forest-light": "#4a7c42",
          brown: "#8b5a2b",
          "brown-light": "#a06b3a",
          beige: "#d4a574",
          "beige-light": "#e0b889",
        },
      },

      // ========================================================================
      // BORDER RADIUS
      // ========================================================================
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // ========================================================================
      // KEYFRAMES & ANIMATIONS
      // ========================================================================
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-blur": {
          from: { opacity: "0", filter: "blur(12px)" },
          to: { opacity: "1", filter: "blur(0px)" },
        },
        "slide-in-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "50%, 100%": { transform: "translateX(100%)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in-blur": "fade-in-blur 0.8s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        shine: "shine 2s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },

      // ========================================================================
      // BACKDROP BLUR
      // ========================================================================
      backdropBlur: {
        xs: "2px",
        "2xl": "40px",
        "3xl": "64px",
      },

      // ========================================================================
      // BOX SHADOW
      // ========================================================================
      boxShadow: {
        glow: "0 0 20px rgba(45, 90, 39, 0.3)",
        "glow-lg": "0 0 40px rgba(45, 90, 39, 0.4)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
