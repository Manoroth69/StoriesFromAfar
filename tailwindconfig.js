module.exports = {
  // ... other config
  daisyui: {
    themes: [
      "light",
      "dark",
      {
        synthwave: {
          "primary": "#ff7edb",
          "secondary": "#42d6ff",
          "accent": "#ff9e5e",
          "neutral": "#1a103d",
          "base-100": "#241b4d",
          "info": "#42beff",
          "success": "#3dd68e",
          "warning": "#f3cc30",
          "error": "#ff6e76",
        },
        neon: {
          "primary": "#22d3ee",
          "secondary": "#c026d3",
          "accent": "#f59e0b",
          "neutral": "#0d0f18",
          "base-100": "#1e1b4b",
          "info": "#22d3ee",
          "success": "#4ade80",
          "warning": "#f59e0b",
          "error": "#f43f5e",

        }
      }
    ],
  },
  theme: {
    extend: {
       animation: {
        'magnetic-pulse': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        }
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(to right, var(--gradient-stops))',
      }
    }
  }
}