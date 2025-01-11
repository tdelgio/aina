module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/**/*.html"],

  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
        secondary: ["Permanent Marker", "mono"],
        tertiary: ["Indie Flower", "mono"],
      },
      colors: {
        primary: "#4F46E5",
        secondary: "#F59E0B",
        accent: "#3B82F6",
        background: "#F3F4F6",
        text: "#1F2937",
        light: "#E5E7EB",
        dark: "#111827",
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
