---
title: PeduliBersama — Full-Stack Crowdfunding Platform
---

# PeduliBersama — Full-Stack Crowdfunding Platform
Author: **Mohamad Tohari Maolana**

---

## The Problem

Traditional crowdfunding and donation websites in Indonesia frequently suffer from high drop-off rates due to complicated checkout processes, manual payment confirmation steps, and a lack of real-time transparency. Donors want to see their contributions reflected immediately, and organizers need automated verification tools to track campaign funding without administrative overhead.

## My Role

**Full-Stack Developer** — Built the lightweight Svelte.js frontend with Vite, integrated Supabase for real-time Postgres subscriptions, and connected the Xendit payment gateway API to handle automated checkouts.

## The Process

1. **Architecture Planning:** Selected Svelte.js to keep the client bundle size minimal, ensuring fast page load times even on slow mobile networks.
2. **Database Design:** Structured tables for Campaigns, Donors, Donations, and Payment Logs on Supabase with Row Level Security (RLS) policies.
3. **Gateway Integration:** Developed backend edge functions (or API endpoints) to handle Xendit webhooks, verifying payments automatically upon completion.
4. **Real-Time Data Sync:** Implemented Supabase real-time listeners on the donation log table to update campaign progress bars instantly when a payment succeeds.
5. **Funnel Optimization:** Audited and optimized the contribution journey down to a simple 3-step checkout form with inline validation.

## Key Features Built

- **Xendit Payment API Integration:** Handles QRIS, Virtual Accounts (VA), and e-wallets (OVO, Dana) with automatic webhook callback verifications, eliminating manual proof-of-payment uploads.
- **Real-Time Campaign Tracker:** Interactive donation progress bars and live donor feeds that update instantly via Supabase subscriptions.
- **Campaign Management Panel:** Allows verified organizers to launch fundraising campaigns, upload gallery images, and write detailed markdown-based stories.
- **Frictionless Donor Flow:** A lightweight, high-performance checkout page optimized for mobile browsers to drive conversion rates.

## Technical Architecture

| Layer | Technology |
|:------|:-----------|
| Frontend Framework | Svelte.js (Vite Build Tool) |
| CSS Styling | Tailwind CSS |
| Backend Database | Supabase (PostgreSQL + Real-time Websockets) |
| Payment Gateway | Xendit REST API Integration |
| Deployment | Vercel |

## Technical Impact & Learnings

- Delivered a robust, production-ready crowdfunding solution that bridges secure financial automation with high-trust interfaces.
- Learned the intricacies of **payment gateway webhook security**, verifying signatures to prevent fraudulent callbacks.
- Strengthened Svelte.js state management skills, achieving 60fps responsive rendering during real-time database updates.

---

## Gallery Showcase

![PeduliBersama Crowdfunding Platform](/images/pedulibersama.webp)
