/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',  // Azul oscuro de fondo
        accent: '#1e293b',      // Azul grisáceo
        textMain: '#f8fafc',    // Blanco ligeramente gris
        textSecondary: '#94a3b8', // Gris claro para subtítulos
      },
    },
  },
  plugins: [],
}
