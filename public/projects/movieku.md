---
title: Movieku — Film Tracking & Discovery Hub
---

# Movieku — Film Tracking & Discovery Hub
Author: **Mohamad Tohari Maolana**

---

## The Problem

With hundreds of streaming platforms, film enthusiasts struggle to discover new content, track what they have watched, and curate their personal watchlists in one central, fast location. Traditional database apps are heavy and load slowly. A lightweight, client-focused film tracker was needed to search movies instantly and organize watchlists.

## My Role

**Full-Stack Developer** (Personal Project) — Integrated the TMDb API, designed the responsive poster grid, implemented persistent browser watchlists, and structured the search interface.

## The Process

1. **API Integration:** Implemented asynchronous data fetching from the TMDb API, adding debounced inputs to prevent excessive API requests.
2. **State Management:** Utilized React local state paired with local storage APIs to ensure the user's watchlist persists between sessions without requiring backend sign-up.
3. **Poster Grid Design:** Styled a fluid poster grid using Tailwind CSS, including hover details and a clean dark theme.
4. **Performance Auditing:** Added lazy-loading strategies for film poster images to prevent UI lag while scrolling.

## Key Features Built

- **Asynchronous Movie Search:** Instant, zero-lag query results populated via TMDb API calls.
- **Persistent Local Watchlist:** Lets users bookmark movies and toggle watched statuses with automatic browser state persistence.
- **Cinematic Dark Interface:** A high-contrast grid layout highlighting artwork and ratings for rapid scannability.
- **Smooth Image Lazy-Loading:** Prevents screen flickering and speeds up initial render times during search cycles.

## Technical Stack

| Layer | Technology |
|:------|:-----------|
| Frontend Library | React.js |
| CSS Framework | Tailwind CSS |
| External API | TMDb (The Movie Database) API |
| State Management | React Context / LocalStorage API |
| Collaboration | Git, GitHub |

## Technical Impact & Learnings

- Delivered a fast, highly responsive media tracking hub that improves movie discovery workflows.
- Learned to manage **asynchronous API state transitions** (loading, error, empty queries) in React.
- Solidified the importance of **image load optimization** when rendering heavy graphic grids on mobile screens.

---

## Gallery Showcase

![Movieku App Interface](/images/movieku.webp)
