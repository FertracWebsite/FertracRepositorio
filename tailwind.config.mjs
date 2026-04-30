import typography from '@tailwindcss/typography';

// Force tailwind rebuild
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
    ],
    theme: {
        extend: {
            fontFamily : {
                "GTWalsheim" : ["GT Walsheim", "sans-serif"],
            },
            colors : {
                "naranja" : "#f2790c",
                "azul" : "#04297e",
                "naranja-opaco": "#F4780B1A",
                "azul-opaco": "#04287C0D",
            },
            screens :{
                "sm" : "360px",
                "md" : "768px",      
                "lg" : "1080px",
                "xl" : "1536px",
                "2xl" : "2000px",   
            },
        },
    },
    plugins: [
        typography, 
    ],
}