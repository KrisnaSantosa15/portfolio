/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        primarydark: "#0f9a8a",
        secondary: "#64748b",
        secondary2: "#94a3b8",
        dark: "#0f172a",
        youtube: "#ff0000",
        twitter: "#1DA1F2",
        instagram: "#e1306c",
        twitch: "#6441a5",
        linkedin: "#0077b5",
        blogger: "#f57d00",
        firefox: "#e1306c",
        github: "#24292e",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
