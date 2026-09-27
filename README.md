# ☕ Coffee House — Landing Page

A responsive two-page coffee shop site built from a ready-made Figma template, as an RS School learning project (semantic HTML, SCSS, vanilla JS, no frameworks).

## Demo

- **Live:** https://coffee-house-avp.netlify.app/
- **Figma (original assignment):** https://www.figma.com/design/yuc5s9NCc4jENkk5LdFfvX/Coffee-House-2026Q3

## About

Coffee House is a responsive two-page coffee shop website, an RS School learning project built from a ready-made Figma template. Two connected pages (home and catalog), a shared header/footer, light/dark theme. All interactivity is built with vanilla JavaScript — no frameworks or ready-made UI libraries.

## Tech Stack

- HTML5, SCSS, JavaScript (ES6+), DOM API
- Vite (source maps enabled in the build)
- Folder structure inspired by Feature-Sliced Design (see below)
- No CSS/JS frameworks or ready-made UI libraries — assignment requirement

## Features

- Responsive layout, 1440 → 380px
- Semantic HTML5 markup, shared header/footer, navigation between pages
- Light/dark theme with the choice saved in `localStorage`
- Burger menu (mobile navigation)
- Slider/carousel of featured items on the home page
- Catalog: category switching, "Load more", product cards generated from data (no manual duplication in HTML)
- Product modal: size/add-on selection and dynamic price recalculation without a page reload

## Getting Started

Clone the project, then from the project folder run:

```bash
npm install
npm run dev
```

- `npm run build` — production build
- `npm run preview` — preview the production build locally

## Project Structure

Layers inspired by Feature-Sliced Design: `app` (entry point, themes, global styles) → `pages` (assembles the page from widgets) → `widgets` (header, footer, slider, modal) → `features` (theme switching, category filter, load more) → `entities` (card generators) → `shared` (utilities, constants, mock data).

## Branches & Pull Requests

- `main` — empty (service files only: `README.md`, `.gitignore`)
- `landing-page` — Part 1 (layout), branched from `main`; PR `landing-page → main` is open (not merged, not closed)
- `landing-page-part-2` — Part 2 (interactivity), branched from `landing-page`; PR `landing-page-part-2 → landing-page` is open (not merged, not closed)
- Deploy is connected to the `landing-page` branch (not `main` — it stays empty); the link is updated in the corresponding PR description

## Status

- Part 1 (layout + themes) — in progress
- Part 2 (interactivity) — planned
- (optional, outside deadlines) migration to TypeScript + Angular — a separate learning exercise

## Design Credit

Design — the educational Coffee House Figma template provided by RS School; not the repository author's original design.
