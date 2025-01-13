module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/**/*.html"],

  theme: {
    extend: {
      fontFamily: {
        primary: ["Caveat Brush"],
        secondary: ["Permanent Marker", "mono"],
        tertiary: ["Indie Flower", "mono"],
        text: ["Inter"],
      },
      colors: {
        primary: "#d98c3e",
        secondary: "#4a4a4a",
        accent: "#3B82F6",
        background: "#F3F4F6",
        text: "#1F2937",
        light: "#f4e1c1",
        dark: "#000000",
        success: "#10B981",
        error: "#EF4444",
        warning: "#F59E0B",
        info: "#3B82F6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
