# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **content and design specification repository** for the Digero landing page — not a source code project. It contains all the copy, design specs, screenshot assets, and layout patterns needed to build the actual landing page in a separate `digero-landing` Next.js project.

**Digero** is a recipe management mobile app (React Native + Expo) built for the RevenueCat Shipyard 2026 Hackathon. This repo defines the marketing site for it.

## Repository Structure

- `landing-page-copy.md` — Master reference: all page copy, 18-section layout map, visual style guide (colors, typography, spacing), component TSX patterns, Swiper/Framer Motion configs, and animation specs
- `app-store-marketing.md` — App Store listing copy, keywords, review notes, screenshot requirements
- `SCREENSHOT-MAP.md` — Maps 30 organized screenshots to landing page sections with slider positions
- `public/digero_logo.svg` — App logo
- `public/organized/` — 30 PNG screenshots organized by feature (hero, save-from-anywhere, cookbook-scanning, youtube-discovery, ai-sous-chef, recipes, meal-planning, shopping-lists, cookbooks, creator-economy, pricing-settings, discover)

## Design System

### Colors (Tailwind)
| Role | Tailwind Class |
|------|---------------|
| Primary | `orange-500` (#f97316) — full section backgrounds, CTAs |
| Primary Light | `orange-50` — tinted section backgrounds |
| Primary Dark | `orange-700` — hover states |
| Dark | `stone-950` — dark sections, footer |
| Warm Gray | `stone-100` — subtle backgrounds |
| Text Secondary | `stone-600` — body text |

### Typography
- **Headings:** DM Sans / Plus Jakarta Sans, weight 800, uppercase, tracking-tight
- **Taglines:** Playfair Display italic, weight 400-500
- **Body:** Inter / DM Sans, weight 400-500, leading-relaxed, max-w-prose
- **Labels:** Semibold 600, uppercase, text-xs, tracking-widest

### Key Spacing
- Section padding: `py-20 md:py-32`
- Content max-width: `max-w-7xl`
- Grid gap: `gap-12 md:gap-16`

## Target Stack (for the built landing page)
- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **Carousels:** Swiper.js (coverflow, cards effects)
- **Animations:** Framer Motion (scroll-triggered fade/slide)
- **Fonts:** Google Fonts (DM Sans, Playfair Display, Inter)

## Page Structure (18 sections)

Sections alternate backgrounds (white → orange → dark → white) to create visual rhythm. Key layout patterns:

1. **Split Hero (50/50)** — orange left, white right with CTAs
2. **Image Bleed + Text (60/40)** — alternating sides per section
3. **Vertical Orange Accent Bar** — w-2/w-3 strip alongside content
4. **Magazine Grid** — asymmetric mixed-size screenshot layout
5. **Pull Quote** — large italic Playfair on orange background

Refer to the "Section-by-Section Layout Map" table in `landing-page-copy.md` (line ~427) for the complete section order, backgrounds, and layouts.

## Working With This Repo

When building or modifying the landing page:
1. Always reference `landing-page-copy.md` for copy, design specs, and component patterns
2. Use `SCREENSHOT-MAP.md` to find the correct screenshot for each section
3. Screenshots are in `public/organized/{feature-name}/` — use the exact paths from the map
4. iPhone frame wrapper pattern is defined in `landing-page-copy.md` (line ~269)
5. Swiper effect configs per section are in the table at line ~258


<claude-mem-context>
# Recent Activity

### Feb 12, 2026

| ID | Time | T | Title | Read |
|----|------|---|-------|------|
| #2902 | 8:15 AM | ✅ | Updated landing page copy with actual Waitlister API key | ~385 |
| #2892 | 8:08 AM | ✅ | Created CLAUDE.md guidance file for landing page project | ~548 |
</claude-mem-context>