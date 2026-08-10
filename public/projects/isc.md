---
title: Absenku ISC — Student Attendance Platform
---

# Absenku ISC — Student Attendance Platform
Author: **Mohamad Tohari Maolana**

---

## The Problem

Tracking student attendance manually for the Informatics Study Club (ISC) events at Universitas Pamulang was inefficient. Paper sign-in sheets led to long lines at event entry points, manual entry errors, lost logs, and a complete lack of real-time membership analytics. The club needed an automated, digital solution to speed up check-ins and centralize participant data.

## My Role

**Full-Stack Developer** — Developed the React web frontend, styled the interface with Tailwind CSS, designed the relational database schemas, and integrated Supabase authentication and storage services.

## The Process

1. **Flow Design:** Mapped out a frictionless check-in flow requiring only a few seconds per student (QR Code scanning).
2. **React Setup:** Built a clean, dashboard-centric frontend displaying event lists, active check-in counters, and participant charts.
3. **Database Integration:** Utilized Supabase to manage user profiles, event details, and timestamped attendance records.
4. **QR Code Scanning:** Developed a client-side scanning module using the device's camera to process QR check-in badges instantly.
5. **Role-Based Views:** Implemented route guards and admin controls so organizers can manage events while students can view their attendance histories.

## Key Features Built

- **QR-Code Scan Entry:** Instant attendance registration by scanning unique member QR codes, reducing entry times to under 3 seconds per person.
- **Organizer Console:** A detailed panel to create events, monitor live attendance counts, and export attendance logs as spreadsheets.
- **Real-Time Analytics:** Visual progress trackers showing monthly event attendance, active member metrics, and popular workshops.
- **Secure Authentication:** User login and membership verification backed by Supabase Auth with custom metadata.

## Technical Architecture

| Layer | Technology |
|:------|:-----------|
| Frontend Framework | React.js |
| CSS Styling | Tailwind CSS |
| Database & Backend | Supabase (Postgres Database + REST API) |
| Scan Engine | Html5-Qrcode Library |
| Version Control | Git & GitHub |

## Impact & Learnings

- Successfully deployed the system for ISC events, **reducing registration lines by 80%** and completely eliminating paper logs.
- Mastered the integration of **third-party scanner hardware/APIs** within React rendering cycles.
- Gained hands-on experience structuring **PostgreSQL relational schemas** on Supabase for real-time join queries.

---

## Gallery Showcase

![Absenku ISC Platform Dashboard](/images/isc.webp)
