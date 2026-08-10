---
title: SafeRoute — Late-Night Navigation Security App
---

# SafeRoute — Late-Night Navigation Security App
Author: **Mohamad Tohari Maolana**

---

## The Problem

Commuting late at night, especially for shift workers, students, or lone travelers, exposes individuals to safety vulnerabilities. Existing mapping services prioritize the fastest route, often directing users through unlit, isolated, or high-risk paths. There was a critical need for a **safety-first navigation platform** that allows travelers to share routes in real-time, trigger SOS emergencies, and report localized community hazards.

## My Role

**Mobile Developer** — Engineered the mobile client, integrated geolocation services, built the real-time background location sharing mechanism, and linked the emergency notification API pipelines.

## The Process

1. **User Safety Auditing:** Formulated primary user flows focused on high-stress scenarios (e.g., triggering an SOS alert with a single tap or during screen lock).
2. **React Native Slicing:** Set up the Expo environment and crafted clean, responsive UI views for maps, overlays, and modal alerts.
3. **Map & Geo-Routing:** Integrated Google Maps API to display live routes, calculate precise ETA, and render interactive hazard pins.
4. **Real-Time Data Engine:** Hooked up Supabase real-time subscriptions to sync active traveler coordinates with designated guardian dashboards instantly.
5. **Battery Optimization:** Structured background location tracking to minimize power draw during extended late-night navigation.

## Key Features Built

- **Real-Time Route Sharing:** Generates a secure, live-tracking link that users can share with family members to monitor their journey path.
- **Emergency SOS Dashboard:** A 1-tap floating trigger that immediately alerts emergency contacts with active GPS coordinates and initiates a secure audio recording.
- **Community Hazard Reports:** Allows users to pin real-time safety warnings (e.g., poorly lit streets, road closures, or suspicious activity) on the shared map.
- **Auto-Checkin Alerts:** Automatically fires a confirmation message to designated guardians when the user arrives safely at their geo-fenced destination.

## Technical Architecture

| Layer | Technology |
|:------|:-----------|
| Frontend Framework | React Native (Expo) |
| Location & Geocoding | Google Maps API & Expo Location |
| Backend & Database | Supabase (PostgreSQL + Real-time Subscriptions) |
| Push Notifications | Expo Notification Services |
| Version Control | Git & GitHub |

## Impact & Learnings

- Successfully delivered a high-trust, functional mobile application ready for staging deployment.
- Learned the complexities of **background location processing** and OS-level battery saving restrictions on iOS and Android.
- Strengthened proficiency in building **real-time WebSocket connections** using Supabase, ensuring coordinates synchronize within sub-second latencies.

---

## Gallery Showcase

![SafeRoute Navigation Interface](/images/saferoute.webp)
