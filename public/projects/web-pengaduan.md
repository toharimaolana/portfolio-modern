---
title: Civic Complaint Management Platform
---

# Civic Complaint Management Platform
Author: **Mohamad Tohari Maolana**

---

## The Problem

In academic environments, the workflow between lecturers and students for distributing learning modules and collecting project submissions is often fragmented — scattered across WhatsApp groups, Google Drive links, and email attachments. This creates **version confusion**, **lost submissions**, and **zero visibility** on project review status. Lecturers needed a centralized platform to publish materials and review student work efficiently.

## My Role

**Front-End Developer** — Responsible for translating complex UI/UX designs from Figma into production-ready, pixel-perfect HTML/CSS/JS code. I owned the entire visual layer of the application across all user roles (student, lecturer, admin).

## The Process

1. **Design Handoff Analysis** — Received Figma designs covering 15+ unique screens. Documented component patterns, spacing tokens, and responsive breakpoints before writing any code.
2. **Component Architecture** — Established a reusable component library using Bootstrap 5 utilities and custom CSS to maintain visual consistency across dashboards, modals, forms, and tables.
3. **Responsive Implementation** — Ensured every screen (dashboard, upload forms, review modals, ranking tables) rendered correctly from 320px mobile to 1440px desktop.
4. **Interactive Elements** — Built dynamic UI interactions with vanilla JavaScript: modal windows for project reviews, drag-and-drop file upload zones, and real-time form validation.
5. **Integration Support** — Coordinated with backend developer to ensure frontend templates mapped correctly to Laravel Blade template variables and API response structures.

## Key Screens I Built

- **Lecturer Dashboard** — Summary cards, module list with CRUD actions, student submission tracker with status indicators (pending/reviewed/revised).
- **Student Portal** — Module download interface, project upload form with file type validation and progress indicator, review history timeline.
- **Review System** — Modal-based review interface where lecturers score submissions, leave text feedback, and request revisions.
- **Ranking Board** — Sortable table displaying top student projects by score, with badge indicators for top 3 positions.
- **Auth Pages** — Login and registration forms with inline validation, role selection, and university branding.

## Technical Stack

| Layer | Technology |
|:------|:-----------|
| Markup | HTML5 (semantic elements) |
| Styling | Bootstrap 5 + Custom CSS |
| Interactions | Vanilla JavaScript (ES6+) |
| Design Source | Figma |
| Integration | Laravel Blade Templates |
| Version Control | Git |

## Impact & Learnings

- Delivered **15+ screens** from Figma to production-ready code in a 3-week sprint alongside coursework.
- Developed a systematic **Figma-to-code workflow** that reduced my slicing time by ~40% from the first screen to the last.
- Learned the discipline of working within a **design system** — maintaining consistent spacing, typography, and color usage across an entire multi-page application.
- Strengthened **cross-functional collaboration** skills by coordinating daily with the backend developer to align template variables with API data shapes.
- This project was the catalyst that drove me to specialize in **frontend development** and pursue React as my primary framework.