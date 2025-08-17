/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00b0d6",

          "primary-content": "#000b10",

          secondary: "#006e00",

          "secondary-content": "#d0e2ce",

          accent: "#0000ff",

          "accent-content": "#c6dbff",

          neutral: "#242424",

          "neutral-content": "#cecece",

          "base-100": "#fcfbff",

          "base-200": "#dbdade",

          "base-300": "#bbbabe",

          "base-content": "#161516",

          info: "#6ed9ff",

          "info-content": "#041116",

          success: "#00cf69",

          "success-content": "#001004",

          warning: "#ff8a00",

          "warning-content": "#160700",

          error: "#d80033",

          "error-content": "#ffd7d5",
        },
      },
    ],
  },
  content: ["./src/**/*.{html,ts}"],


  theme: {
    extend: {
      fontFamily: {
        system: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
    },
  },

  plugins: [require("daisyui")],
};
