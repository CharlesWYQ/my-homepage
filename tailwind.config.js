/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#7c3aed",
                secondary: "#06b6d4",
                dark: "#0b1020",
                panel: "rgba(255,255,255,0.06)",
            },
            boxShadow: {
                glow: "0 0 40px rgba(124, 58, 237, 0.35)",
                soft: "0 10px 30px rgba(0,0,0,0.25)",
            },
            backdropBlur: {
                xs: "2px",
            },
            backgroundImage: {
                "hero-grid":
                    "radial-gradient(circle at 20% 20%, rgba(124,58,237,0.20), transparent 25%), radial-gradient(circle at 80% 30%, rgba(6,182,212,0.18), transparent 25%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.08), transparent 20%)",
            },
        },
    },
    plugins: [],
}