/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'mainbg': "linear-gradient(231deg,rgba(22, 6, 40, 1) 0%,rgba(52, 28, 79, 1) 50%,rgba(88, 7, 125, 1) 100%)",
        'sliderbg':"linear-gradient(hsl(285, 91%, 52%),hsl(285, 91%, 52%))"
      }
    },
  },
  plugins: [],
}

