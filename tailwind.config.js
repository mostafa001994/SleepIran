export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // darkMode: ['selector', '[class="dark"]'],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "2rem",
        md: "2rem",
        lg: "2rem",
        xl: "4rem",
        "2xl": "4rem",
      },
      // default breakpoints but with 40px removed
      screens: {
        // sm: '984px',
        // md: '984px',
        lg: "1024px",
        xl: "1300px",
        // '2xl': '1536px',
        // 'tablet': '640px',
        // 'laptop': '1024px',
        // 'desktop': '1280px',
      },
    },

    fontFamily: {
      iranSans: ["iranSans", "sans-serif"],
    },

    extend: {
      colors: {
        main: "rgba(32, 154, 255, 1)",
        // dark: '#0E0E0E',
        primary: "rgba(255, 156, 0, 1)",
        // light: '#D9D9D9',
      },
      backgroundColor: {
        // mane: '#F3F3F3',
        // dark: "#0E0C12",
        // filter: 'linear-gradient(180deg, #e6e6e61f, #FFC70030 50%, #e6e6e61f)'
      },
      borderColor: {
        // dark: '#1C1C1C',
        // light: '#fff',
      },
      boxShadow: {
        // base: "0 17px 30px 0 #30303005",
        // light: "0 4px 20px 0 rgba(0, 0, 0, 0.1)",
        // yellow: "0 0 100px 0 #ffc70035",
      },
      backgroundImage: {
        // "cta-login": "url('img/cta.jpg')",
      },
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};