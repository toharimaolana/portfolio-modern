---
title: KartaBestFive — Youth Community Portal
---

# KartaBestFive — Youth Community Portal
Author: **Mohamad Tohari Maolana**

---

## The Problem

Traditional community organizations (like Karang Taruna Kelurahan Mangga Besar) often operate offline or with outdated announcement boards. This creates transparency gaps regarding youth activities, community structures, public achievements, and regional stats. Residents lacked a central platform to view local news, and administrators had no streamlined tool to post updates.

## My Role

**Full-Stack Developer** — Built the React single-page portal, integrated a real-time data sync layer with Supabase, implemented smooth scrolling and UI parallax, and designed the protected admin CRUD console.

## The Process

1. **UX Blueprinting:** Crafted a modern, layout-rich interface using React 19, Tailwind CSS, and Framer Motion, adding Lenis smooth scrolling for a premium editorial feel.
2. **Backend & Sandbox:** Integrated Supabase for real-time Postgres synchronization, while engineering a robust local sandbox mode (`karta_mock_session`) to enable offline testing.
3. **Interactive Visualizations:** Programmed spatial maps showing sub-districts (PetaWilayah) and a filterable gallery for youth activities.
4. **Admin Dashboard:** Created a secured `/admin` route with custom navigation guards, enabling organizers to perform CRUD operations on news, events, and stats.

## Key Features Built

- **Hybrid Data Synchronization:** Connects to Supabase live database in production, and automatically falls back to static sandboxed session files during local testing.
- **Lenis Smooth Scroll & Viewport Parallax:** Premium UI micro-animations and smooth scroll mechanics that reduce bounce rates.
- **Protected Administration Console:** Custom secure panel allowing verified moderators to publish community events, update local statistics, and manage photo galleries.
- **PetaWilayah Mapping:** Interactive maps detailing youth activity zones, regional hubs, and coordinate indicators.

## Technical Architecture

| Layer | Technology |
|:------|:-----------|
| Frontend Framework | React.js (React 19, Vite) |
| CSS & Transitions | Tailwind CSS + Framer Motion |
| Smooth Scrolling | Lenis Scroll |
| Backend & Database | Supabase (PostgreSQL + RLS Auth) |
| Version Control | Git, GitHub |

## Technical Impact & Learnings

- Established a modern digital standard for local organizations, delivering a web experience that bridges the gap in neighborhood youth operations.
- Gained experience using **React 19 features** and optimizing **Tailwind CSS classes** alongside Framer Motion for high-fidelity animations.
- Designed a **dual-state client layer (Sandbox / Production)** that allows developers to test the site fully without hitting live API limits.

---

## Gallery Showcase

![KartaBestFive Community Portal](/images/kartabestfive.webp)
