/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // font custom: 폰트를 tailwind에서 사용하려면 등록!
    fontFamily: {
      normal: ["sans-serif", "Helvetica", "Arial"],
      jalnan: ["JalnanGothic", "Helvetica", "Arial", "sans-serif"],
      gmarket: ["GmarketSansMedium", "Helvetica", "Arial", "sans-serif"],
      aggro: ["SBAggroB", "Helvetica", "Arial", "sans-serif"],
      samlip: ["SDSamliphopangche_Outline", "Helvetica", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
