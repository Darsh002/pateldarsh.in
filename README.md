# Darsh Patel — Creative Personal Portfolio Website (`pateldarsh.in`)

A high-end, editorial personal identity website and portfolio for **Darsh Patel** (Full Stack Web Developer & AI Automation Specialist).

## 🌟 Design & Architecture Inspiration
- **Aesthetic**: Swiss Brutalism & Editorial Luxury (Inspired by `grigoletti.ch`)
- **Typography**: Display Header (`PP Neue Corp Tight`), Metadata/Mono (`PP Neue Montreal Mono`), Body (`PP Neue Montreal` / `Plus Jakarta Sans`)
- **Palette**: Warm Eggshell Off-White (`#ebe9e4`), Deep Dark Obsidian (`#111111`), Electric Signature Orange (`#ff4c24`)
- **Interactions**: Custom physics-following cursor, Lenis smooth scrolling, GSAP ScrollTrigger reveals, real-time IST clock, fullscreen mobile navigation overlay.

## 🛠️ Stack & Libraries
- **Core**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Animations**: GSAP, ScrollTrigger, Lenis Smooth Scroll
- **Icons**: Lucide Icons
- **Data Layer**: Centralized modular config in `data/content.js`

## 📁 Directory Structure
```text
pateldarsh.in/
├── index.html
├── data/
│   └── content.js
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── data-loader.js
│   ├── navigation.js
│   ├── animations.js
│   ├── interactions.js
│   └── main.js
├── assets/
│   ├── fonts/
│   ├── images/
│   └── icons/
├── favicon/
│   └── favicon.svg
├── robots.txt
├── sitemap.xml
└── README.md
```

## 🚀 Running Locally
To launch locally, start any static HTTP server in the root directory:
```bash
# Using Python
python -m http.server 8000

# Using Node npx serve
npx serve .
```
Open `http://localhost:8000` in your browser.
