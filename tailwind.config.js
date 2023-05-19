/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lines: "#f1f1f1",
        darkslateblue: "#202553",
        salmon: "#ec615b",
        green: "#48C446",
        grey: "#BDBDBD",
        bg: "#f9f9fb",
        black: {
          "100": "#1b1b1b",
          "200": "#000",
        },
        "line-light": "#e4e4e4",
        text: "#979797",
      },
      fontFamily: {
        "topper-text": "'DM Sans'",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "13xl": "32px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
