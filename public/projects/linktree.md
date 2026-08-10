---
title: Linktree App — Personal Link Hub
---

# Linktree App — Personal Link Hub
Author: **Mohamad Tohari Maolana**

---

## The Problem

Generic third-party bio-link services (like standard Linktree) place severe limits on layout customization, branding, and styling unless users pay high subscription fees. Additionally, these platforms can load slowly due to tracking scripts and bloated dependencies. A self-hosted, lightweight, and visually striking link hub was needed to unify professional socials under one domain.

## My Role

**Full-Stack Developer** (Personal Project) — Architected the React single page application, implemented GPU-accelerated micro-interactions, and deployed the project on Vercel for zero-latency routing.

## The Process

1. **Build Tool Choice:** Selected Vite to benefit from native ESM loading, which avoids bundling overhead and keeps the project light.
2. **Visual Designing:** Integrated advanced component graphics like **ElectricBorder** from React Bits to give a modern, tech-oriented premium aesthetic.
3. **Responsive Slicing:** Coded the UI with utility-first Tailwind CSS to fit mobile screens perfectly (since bio-links are visited almost entirely on phones).
4. **Performance Tuning:** Debounced interactions, optimized SVG rendering, and minimized asset weights to achieve top-tier Lighthouse scores.

## Key Features Built

- **Vite-Powered Zero-Lag Loading:** Blazingly fast initial paint and interactive load times by eliminating heavy library dependencies.
- **Electric Border Interaction Cards:** Glowing, custom-lit boundaries that render via GPU acceleration on hover or tap.
- **Responsive Portrait Grid:** Clean, high-contrast links styled mobile-first to ensure pixel-perfect display across all smartphones.
- **Autonomy & Link Tracking:** A self-hosted layout that preserves total brand ownership without third-party watermarks.

## Technical Stack

| Layer | Technology |
|:------|:-----------|
| Frontend Framework | React.js (Vite Build Tool) |
| CSS Styling | Tailwind CSS |
| Visual Components | React Bits (ElectricBorder) |
| Hosting & Deploy | Vercel |
| Language | JavaScript (ES6+), HTML5 |

## Technical Impact & Learnings

- Successfully delivered a high-performance alternative to bio-link services, achieving **60fps UI frame rates** and under-second page loads.
- Learned to work with **GPU-accelerated CSS/Canvas borders** without triggering paint-cycle bottlenecks in React.
- Solidified mobile-first typography scales and layout alignment for social app browsers (Instagram/TikTok in-app WebViews).

---

## Gallery Showcase

![Linktree App Layout](/images/linktree.webp)
