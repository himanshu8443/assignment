module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      colors: {
        "Primary-100": "#F0F4F8",
        "Primary-200": "#D9E2EC",
        "Primary-300": "#BCCCDC",
        "Primary-400": "#9FB3C8",
        "Primary-500": "#829AB1",
        "Primary-600": "#627D98",
        "Primary-700": "#486581",
        "Primary-800": "#334E68",
        "Primary-900": "#243B53",
        "Secondary-100": "#F5F3FF",
        "Secondary-200": "#EDE9FE",
        "Secondary-300": "#DDD6FE",
        "Secondary-400": "#C4B5FD",
        "Secondary-500": "#5B21B6",
        "Secondary-600": "#4D1D9E",
        "Secondary-700": "#341A79",
        "Secondary-800": "#1E145C",
        "Secondary-900": "#0D1033",
      },
    },
  },
};
