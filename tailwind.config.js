module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2C2C2C", // deep charcoal - gray-800
        secondary: "#8B7355", // warm bronze - amber-700
        accent: "#D4AF37", // rich gold - yellow-500
        background: "#FAFAF9", // warm white - stone-50
        surface: "#F5F5F4", // neutral surface - stone-100
        text: {
          primary: "#1A1A1A", // near black - gray-900
          secondary: "#6B6B6B", // medium gray - gray-500
        },
        success: "#059669", // forest green - emerald-600
        warning: "#D97706", // warm amber - amber-600
        error: "#DC2626", // classic red - red-600
        gallery: {
          charcoal: "#2C2C2C", // deep charcoal - gray-800
          bronze: "#8B7355", // warm bronze - amber-700
          gold: "#D4AF37", // rich gold - yellow-500
          cream: "#FAFAF9", // warm white - stone-50
          stone: "#F5F5F4", // neutral surface - stone-100
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        caption: ['Source Sans Pro', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 2vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 3vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 4vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 5vw, 2rem)',
        'fluid-3xl': 'clamp(2rem, 6vw, 3rem)',
      },
      boxShadow: {
        'gallery-sm': '0 2px 4px rgba(139, 115, 85, 0.1)',
        'gallery-md': '0 8px 16px rgba(139, 115, 85, 0.1)',
        'gallery-lg': '0 24px 48px rgba(139, 115, 85, 0.1)',
        'warm': '0 4px 12px rgba(139, 115, 85, 0.15)',
        'accent': '0 4px 12px rgba(212, 175, 55, 0.3)',
      },
      borderColor: {
        'gallery': 'rgba(44, 44, 44, 0.1)',
        'subtle': 'rgba(44, 44, 44, 0.1)',
      },
      backdropBlur: {
        'gallery': '10px',
      },
      animation: {
        'loading': 'loading 1.5s infinite',
        'fade-in': 'fadeIn 600ms ease-out',
        'slide-up': 'slideUp 600ms ease-out',
      },
      keyframes: {
        loading: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'gallery': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      aspectRatio: {
        'photo': '3/2',
        'portrait': '2/3',
        'square': '1/1',
      },
    },
  },
  plugins: [],
}