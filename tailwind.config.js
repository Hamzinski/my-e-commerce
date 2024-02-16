/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      backgroundColor: {
        "dark-background-color": "#252B42",
        "light-gray-1": "#FAFAFA",
        "primary-bg": "#23A6F0",
        "success-color": "#2DC071",
        "danger-color": "#E74040",
      },
      textColor: {
        "primary-color": "#23A6F0",
        "secondary-color": "#23856D",
        "alert-color": "#E77C40",
        "second-text-color": "#737373",
        "dark-text-color": "#252B42",
        "muted-text-color": "#BDBDBD",
        "success-text-color": "#2DC071",
      },
      borderColor: {
        "success-border-color": "#2DC071",
      },
    },
  },
  plugins: [],
};
