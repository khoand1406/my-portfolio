console.log("Config loaded")
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        card: 'hsl(var(--card))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
      },
      borderRadius: {
        md: '0.375rem',
      },
      animation: {
        'meteor': 'meteor 5s linear infinite',
      },
      keyframes: {
        meteor:{
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: '0' },
        },
        
      },
    },
  },
  plugins: [],
  safelist: ['px-6', 'rounded-md', 'text-foreground', 'bg-primary', 'text-primary-foreground','animate-meteor', 'meteor']
};