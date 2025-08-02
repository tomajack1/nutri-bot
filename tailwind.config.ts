import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        // Original purple-themed colors
        "purple-dark": "#3A2449", // Dark background
        "purple-medium": "#5C3D70", // Card base
        "purple-light": "#7D5697", // Info blocks
        "purple-darker": "#4B305A", // Card gradient end
        "pink-accent": "#FF69B4", // Accent color for text/buttons
        "purple-circle-light": "#FF69B4", // Light decorative circle
        "purple-circle-dark": "#C71585", // Dark decorative circle
        // New brown-gold theme colors for next-funnel-step-5
        "bg-dark-brown": "#4B3020", // Main background
        "card-brown": "#6B4F4F", // Main card background
        "testimonial-brown": "#8D7B68", // Individual testimonial card background
        "accent-gold": "#FFD700", // Gold for icons, stars, specific text
        "accent-red": "#FF0000", // Red for heart icon
        "button-gold": "#D4AF37", // Gold for the continue button
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%, 60%": { transform: "translateX(-3px)" },
          "40%, 80%": { transform: "translateX(3px)" },
        },
        "pulse-slow": {
          // New keyframe for slow pulse
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shake: "shake 0.5s cubic-bezier(.36,.07,.19,.97) both",
        "pulse-slow": "pulse-slow 1.5s ease-in-out infinite", // Changed from 2s to 1.5s
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
