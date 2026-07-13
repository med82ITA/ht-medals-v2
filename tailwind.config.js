/** @type {import('tailwindcss').Config} */ 
export default { 
  content: [ 
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}', 
  ], 
  theme: { 
    extend: { 
      colors: { 
        'ht-green': '#2d8b46', 
        'ht-green-dark': '#1f5a2e', 
        'ht-gray': '#f5f5f5', 
        'ht-card': '#ffffff', 
        'ht-text': '#333333', 
      }, 
      fontFamily: { 
        sans: ['Inter', 'system-ui', 'sans-serif'], 
      }, 
    }, 
  }, 
  plugins: [], 
} 
