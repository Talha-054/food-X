
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img'       : "url('../public/assets/hero.jpg')",
        'welcome-note-1' : "url('../public/assets/welcome-note-1.jpg')",
        'welcome-note-2' : "url('../public/assets/welcome-note-2.jpg')",
        'paint-food-img' : "url('../public/assets/paint-img.png')",
        'gallery-food-1' : "url('../public/assets/gallery-food-1.jpg')",
        'gallery-food-2' : "url('../public/assets/gallery-food-2.jpg')",
        'gallery-food-3' : "url('../public/assets/gallery-food-3.jpg')",
        'reservation-img': "url('../public/assets/reservation-page-img.jpg')",
        'footer-border'  : "url('../public/assets/footer-border.png')",
        'footer-restaurant' : "url('../public/assets/footer-restaurant.png')",
        'hint-of-menu-img' : "url('../public/assets/menu-hint.jpg')",
        'online-order-image' : "url('../public/assets/online-order-bg.png')"
      },
      fontFamily : {
        body : ["Marcellus"]
      }
    }
  }

}

