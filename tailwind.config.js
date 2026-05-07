/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind sẽ quét các file này để tạo CSS
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Thêm font chữ tùy chỉnh
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Serif dành cho heading luxury (dùng vừa đủ).
        serif: ['"Lora"', 'Georgia', 'serif'],
      },
      // Thêm màu sắc tùy chỉnh cho theme
      colors: {
        aurora: {
          // Palette theo yêu cầu
          background: '#F7F3EC',
          backgroundAlt: '#F8FAF7',
          text: '#1F2933',
          body: '#667085',
          accent: '#C8A96A',
          ctaHover: '#A87F3F',
          softTeal: '#5F7F78',
        },
        brand: {
          50:  '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
      // Thêm animation tùy chỉnh
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out forwards',
        shimmer:   'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
}
