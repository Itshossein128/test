import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        gray: "var(--gray)",
        green: "var(--green)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "25px", // پدینگ پیش‌فرض برای همه سایزها
        sm: "25px", // پدینگ برای موبایل کوچک (640px و بالاتر)
        md: "30px", // پدینگ برای تبلت (768px و بالاتر)
        lg: "40px", // پدینگ برای دسکتاپ کوچک (1024px و بالاتر)
        xl: "50px", // پدینگ برای دسکتاپ بزرگ (1280px و بالاتر)
        "2xl": "60px", // پدینگ برای دسکتاپ بسیار بزرگ (1536px و بالاتر)
      },
      screens: {
        max: "1920px",
      },
    },
  },
  plugins: [],
} satisfies Config;