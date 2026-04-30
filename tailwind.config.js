/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-soft": "bounce-soft 3s ease-in-out infinite",
        glint: "glint 4s ease-in-out infinite",
        heartbeat: "heartbeat 1.4s ease-in-out infinite",
        "pulse-text": "pulse-text 2.5s ease-in-out infinite",
        breathe: "breathe 2s ease-in-out infinite",
      },
      keyframes: {
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-12px) scale(1.02)" },
        },
        glint: {
          "0%, 85%, 100%": {
            opacity: "0",
            transform: "translateX(-150%) rotate(25deg)",
          },
          "88%": { opacity: "0.7" },
          "95%": { opacity: "0", transform: "translateX(150%) rotate(25deg)" },
        },
        heartbeat: {
          "0%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.06)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.04)" },
          "70%": { transform: "scale(1)" },
          "100%": { transform: "scale(1)" },
        },
        "pulse-text": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
