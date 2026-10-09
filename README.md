# GDG RBU: Frontend Task 2026-27

Responsive website for Google Developer Groups, Ramdeobaba University.
Built with **React + TypeScript + Vite**.

## Features
- Responsive on mobile, tablet and desktop (hamburger menu on small screens)
- Dark / Light mode (saved in localStorage, follows system preference)
- Animations: scroll reveals, floating shapes, smooth FAQ accordion, button press effects (respects reduced-motion)
- Semantic HTML, keyboard focus styles, ARIA labels, no image files (SVG/CSS only)

## Run locally
1. Install Node.js (LTS) from https://nodejs.org
2. In this folder run:
```bash
npm install
npm run dev
```
3. Open http://localhost:5173

## Build
```bash
npm run build
```

## Deploy (Vercel)
Push to GitHub, import the repo on vercel.com. It detects Vite automatically. Click Deploy.

## Structure
```
index.html        the single HTML5 page (React renders into #root)
main.tsx          starts React
App.tsx           all sections of the website
styles.css        all styles, theme colors, responsive rules
```
