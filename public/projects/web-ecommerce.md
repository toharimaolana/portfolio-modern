---
title: MyTOKO — Multi-Vendor E-Commerce Platform
---

# MyTOKO — Multi-Vendor E-Commerce Platform
Author: **Mohamad Tohari Maolana**

---

## The Problem

Small-scale sellers in Indonesia often struggle to establish their own online stores due to the high costs and technical complexity of building e-commerce infrastructure. Existing marketplace giants take large commission cuts and provide limited branding flexibility. There was a need for a **self-hosted, multi-vendor marketplace** where independent sellers could manage their own storefronts under one platform.

## My Role

**Full-Stack Developer** — Designed the database architecture, built the backend API with Laravel, implemented the complete transaction flow, and developed the responsive frontend interface.

## The Process

1. **Research & Planning** — Analyzed the transaction flows of existing marketplaces (Tokopedia, Shopee) to identify must-have features for a minimum viable multi-vendor platform.
2. **Database Design** — Engineered a relational schema handling Users → Stores → Products → Galleries → Transactions → Transaction Details, with proper normalization and foreign key relationships.
3. **Backend Development** — Built the RESTful API in Laravel 8 with authentication, role-based access (buyer/seller/admin), and transaction state management.
4. **Frontend Slicing** — Developed the responsive UI with dynamic product grids, cart functionality, and checkout flow.
5. **Shipping Integration** — Implemented Indonesian region data (provinces & cities via indoregion) for accurate shipping address management.

## Key Features Built

- **Multi-Vendor Architecture** — Any registered user can open a store, upload products with multiple gallery images, set pricing and categories.
- **Complete Transaction Pipeline** — Cart → Checkout → Payment → Shipping tracking with resi number — the full e-commerce lifecycle.
- **Dynamic Category System** — SEO-friendly slugs (`/kategori/fashion`) with flexible parent-child category structure.
- **Admin Dashboard** — Centralized panel for monitoring stores, approving vendors, and managing platform-wide transactions.

## Technical Architecture

| Layer | Technology |
|:------|:-----------|
| Backend Framework | Laravel 8.x |
| Language | PHP 7.4 |
| Database | MySQL with Eloquent ORM |
| Frontend | Blade Templates + Bootstrap + jQuery |
| Auth | Laravel Auth with role middleware |
| Package Manager | Composer 2.5 |
| Dev Environment | XAMPP + VS Code |

## Impact & Learnings

- Successfully handled **complex relational data** across 8+ interconnected database tables.
- Learned to manage **transaction state machines** (pending → paid → shipped → completed → disputed).
- Understood the critical importance of **database indexing** when query performance degraded at scale testing with 500+ product entries.
- This project solidified my understanding of MVC architecture and prepared me for transitioning to React-based frontend development.

---

## Mockup
![](https://hackmd.io/_uploads/By24Y-LGp.png)
