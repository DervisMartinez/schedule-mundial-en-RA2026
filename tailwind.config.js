/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-bright": "#fcf8f9",
        "surface-dim": "#dcd9da",
        "on-primary": "#ffffff",
        "on-tertiary": "#ffffff",
        "surface-variant": "#e5e2e3",
        "on-background": "#1c1b1c",
        "pitch-green": "#2D8A4E",
        "surface-container-high": "#eae7e8",
        "on-surface-variant": "#59413f",
        "primary-fixed": "#ffdad7",
        "surface-tint": "#b22a2c",
        "secondary-container": "#fdb71d",
        "primary-container": "#c13535",
        "tertiary": "#804000",
        "surface-container-highest": "#e5e2e3",
        "inverse-primary": "#ffb3ad",
        "tertiary-fixed-dim": "#ffb783",
        "background": "#fcf8f9",
        "error-container": "#ffdad6",
        "on-secondary-fixed": "#271900",
        "surface-container": "#f0edee",
        "on-error-container": "#93000a",
        "surface-dark": "#1A1A1A",
        "secondary-fixed-dim": "#ffba29",
        "error": "#ba1a1a",
        "surface-container-low": "#f6f3f4",
        "on-secondary": "#ffffff",
        "on-error": "#ffffff",
        "surface": "#fcf8f9",
        "on-secondary-container": "#6b4b00",
        "inverse-surface": "#313031",
        "on-secondary-fixed-variant": "#5f4100",
        "secondary-fixed": "#ffdea9",
        "on-tertiary-fixed": "#301400",
        "on-surface": "#1c1b1c",
        "on-primary-container": "#ffe4e1",
        "outline": "#8d706e",
        "secondary": "#7d5800",
        "on-primary-fixed-variant": "#900d17",
        "live-indicator": "#C13535",
        "outline-variant": "#e1bebb",
        "tertiary-container": "#a45300",
        "on-primary-fixed": "#410004",
        "primary": "#9f1b20",
        "on-tertiary-fixed-variant": "#703700",
        "surface-container-lowest": "#ffffff",
        "inverse-on-surface": "#f3f0f1",
        "primary-fixed-dim": "#ffb3ad",
        "on-tertiary-container": "#ffe4d4",
        "tertiary-fixed": "#ffdcc5"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "margin-desktop": "32px",
        "table-cell-padding": "12px",
        "gutter": "16px",
        "margin-mobile": "16px",
        "card-padding": "20px",
        "unit": "4px"
      },
      fontFamily: {
        "sans": ["Montserrat", "sans-serif"],
        "stat-value": ["Montserrat", "sans-serif"],
        "label-caps": ["Montserrat", "sans-serif"],
        "body-md": ["Montserrat", "sans-serif"],
        "headline-md": ["Montserrat", "sans-serif"],
        "headline-lg-mobile": ["Montserrat", "sans-serif"],
        "body-lg": ["Montserrat", "sans-serif"],
        "display-score": ["Montserrat", "sans-serif"],
        "headline-lg": ["Montserrat", "sans-serif"]
      },
      fontSize: {
        "stat-value": ["14px", { lineHeight: "14px", fontWeight: "600" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-md": ["20px", { lineHeight: "28px", fontWeight: "700" }],
        "headline-lg-mobile": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "display-score": ["48px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "700" }]
      },
      scale: {
        "98": "0.98"
      }
    }
  },
  plugins: [],
}