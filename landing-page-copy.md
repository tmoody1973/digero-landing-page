# Digero Landing Page Copy

> Use this file as a reference when building the landing page in the `digero-landing` Next.js project.

---

## Hackathon Banner

**RevenueCat Shipyard 2026 Hackathon Entry**
Built in 2 weeks. Powered by RevenueCat, Convex, Clerk, and Google Gemini.

---

## Hero Section

**Headline:** Your recipes. All in one place.

**Subheadline:** Save recipes from YouTube, websites, and physical cookbooks. Plan meals, generate shopping lists, and cook hands-free — all powered by AI.

**CTA Buttons:**
- Download on the App Store (link to TestFlight or App Store)
- Watch Demo

---

## Problem Statement

**Headline:** Cooking shouldn't be this complicated.

- Recipes are scattered across bookmarks, screenshots, and scribbled notes
- Meal planning takes forever with spreadsheets and sticky notes
- Physical cookbook recipes are trapped on the page
- Shopping lists are always incomplete

**Digero fixes all of this.**

---

## Core Features

### 1. Save From Anywhere
Paste a URL from any cooking website or YouTube video. Digero's AI extracts the recipe instantly — title, ingredients, instructions, cook time, and photo.

### 2. Scan Physical Cookbooks
Point your camera at any cookbook page. AI reads the recipe and saves it digitally with full structure — no manual typing.

### 3. YouTube Recipe Discovery
Search YouTube for cooking videos, browse channels, and save recipes directly from video transcripts. Follow your favorite creators.

### 4. AI Sous Chef
Ask your AI cooking assistant anything — substitutions, technique tips, "what can I make with what's in my fridge?" Get answers while you cook.

### 5. Cook Mode
Step-by-step instructions with large text, built-in timers, and hands-free navigation. Designed for messy hands and busy kitchens.

### 6. Nutrition Analysis
Tap "Get Nutrition Info" on any recipe. Powered by Edamam, it analyzes every ingredient and shows calories, protein, carbs, and fat per serving.

### 7. Meal Planner
Drag and drop recipes onto a weekly calendar. Plan breakfast, lunch, dinner, and snacks. See your whole week at a glance.

### 8. Smart Shopping Lists
Generate a shopping list from any recipe or your entire meal plan. Ingredients are categorized automatically — produce, dairy, pantry, meat.

### 9. Cookbooks
Organize recipes into custom collections — "Weeknight Dinners," "Holiday Baking," "Meal Prep Sundays." Add cover images and sort however you like.

### 10. Dietary Conversions
Convert any recipe to vegan, vegetarian, or gluten-free with one tap. AI suggests ingredient substitutions and cooking tips.

---

## How It Works

1. **Save** — Paste a URL, scan a cookbook, or search YouTube
2. **Organize** — Group recipes into cookbooks and tag by cuisine or diet
3. **Plan** — Drag recipes onto your weekly meal calendar
4. **Shop** — Auto-generate a categorized shopping list
5. **Cook** — Follow step-by-step instructions in Cook Mode

---

## Creator Economy — What Makes Digero Different

**Headline:** Creators earn real money. Users get better recipes.

**Subheadline:** Most recipe apps take from creators and give nothing back. Digero splits 50% of net subscription revenue with the cooking creators you love — based on real engagement, not follower counts.

### How Creators Earn

Digero uses a **Recipe Engagement Score (RES)** to measure how much value each creator brings to the platform. Every time a user interacts with a creator's recipe, it earns points:

| Action | Points | Why It Matters |
|--------|--------|---------------|
| Save a recipe | 1 pt | User wants to cook it later |
| Rate a recipe | 2 pts | User is giving feedback |
| Share a recipe | 3 pts | User is recommending it to others |
| "I Made This" | 5 pts | User actually cooked it — the highest signal of value |
| Exclusive view | 2 pts | Creator tier subscriber engaging with early/exclusive content |

At the end of each month, the creator pool (50% of net profits) is divided proportionally based on each creator's total RES.

**Example:** If a creator's recipes earn 117,000 RES points out of 2,000,000 platform-wide, they receive 5.85% of the creator pool. At scale, top creators can earn thousands per month — just from people cooking their recipes.

### Creator Partnership Tiers

Creators level up based on their YouTube subscriber count, unlocking higher RES multipliers:

| Tier | Requirement | RES Multiplier | Perks |
|------|-------------|---------------|-------|
| Emerging | 10K+ YouTube subs | 1.0x | Standard profit share, creator dashboard, basic analytics |
| Established | 100K+ YouTube subs | 1.2x | 1.2x boost, featured placement, exclusive publishing |
| Partner | 500K+ YouTube subs | 1.5x | 1.5x boost, homepage spotlight, co-marketing |

### Creator Tools

Every creator gets a full dashboard:
- **Earnings overview** — lifetime earnings, monthly RES, estimated payout
- **Recipe analytics** — see which recipes drive the most saves, cooks, shares, and ratings
- **Creator Shop** — sell cookbooks, courses, merch, and equipment directly in the app (50/50 revenue split)
- **Follower messaging** — send announcements and updates to your followers via push notification
- **Exclusive publishing** — release recipes early to Creator tier subscribers (24-48 hours before public)

### Why This Matters

Traditional recipe platforms extract creator content and pay nothing. Digero flips the model:

- **Transparent** — creators see exactly how their RES is calculated and what they earn
- **Merit-based** — earnings tied to actual user engagement, not vanity metrics
- **Multi-channel** — earn from subscriptions AND product sales in the Creator Shop
- **Sustainable** — the 50/50 split means creators grow with the platform

---

## Pricing

### Free
$0/month
- Save up to 10 recipes
- 3 cookbook scans per month
- 5 AI Sous Chef messages per day
- Basic meal planning
- Shopping list generation

### Plus — Most Popular
$4.99/month or $49.99/year (save 17%)
- Unlimited recipes
- Unlimited cookbook scans
- Unlimited AI Sous Chef
- Advanced meal planning
- 15% shop discount

### Creator
$9.99/month or $89.99/year (save 25%)
- Everything in Plus
- Early access to creator recipes
- Exclusive creator content
- Direct messaging with creators
- Vote on future content

---

## Waitlist / Early Access CTA

> This section uses the **Waitlister embeddable form** and appears in two places: as a compact inline form in the Hero section, and as a full dedicated section after Pricing.

### Integration (Waitlister Embed)

Add to `<head>`:
```html
<script src="https://waitlister.me/js/embed.js" defer></script>
```

Place the form container where needed:
```html
<div class="waitlister-form" data-waitlist-key="Ev3t8ZDHsdOw" data-height="394px"></div>
```

Replace `Ev3t8ZDHsdOw` with the key from the Waitlister dashboard. Whitelist your domain (and `localhost` for dev) in Waitlister Settings → Whitelisted Domains.

### Placement 1: Hero Section (Inline)

Replace or supplement the "Download on the App Store" CTA button with a compact waitlist form. This is the first thing visitors see — keep it tight.

```
┌──────────────────┬──────────────────┐
│                  │                  │
│   ORANGE BG      │   DIGERO         │
│   + App Icon     │   Your recipes.  │
│   + Phone Frame  │   All in one     │
│                  │   place.         │
│                  │                  │
│                  │   [email input ▸]│
│                  │   "Get early     │
│                  │    access"       │
│                  │                  │
│                  │   🔒 Free. No    │
│                  │   spam. Unsubscribe│
│                  │   anytime.       │
└──────────────────┴──────────────────┘
```

**Copy:**
- Input placeholder: `Enter your email`
- Button text: `Get Early Access`
- Trust line (below form): `Join 200+ foodies already on the waitlist. We'll let you know when Digero launches on the App Store.`
- Privacy note: `No spam. Unsubscribe anytime.`

### Placement 2: Dedicated Waitlist Section (after Pricing)

**Section #15 — Early Access Waitlist**
Background: `white` with a centered card on `stone-50` or a subtle `orange-50` tint
Position: Between Pricing and Full Gallery — after users understand the value and pricing, they're primed to commit.

**Layout: Centered Card**
```
┌─────────────────────────────────────────┐
│               white bg                  │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │      subtle orange-50 card      │   │
│   │                                 │   │
│   │   🍳  (app icon, small)        │   │
│   │                                 │   │
│   │   BE THE FIRST TO COOK         │   │
│   │   WITH DIGERO                  │   │
│   │                                 │   │
│   │   Get early access when we     │   │
│   │   launch on the App Store.     │   │
│   │   Join the waitlist and be     │   │
│   │   the first to save, plan,    │   │
│   │   and cook — powered by AI.    │   │
│   │                                 │   │
│   │   ┌─────────────────────────┐   │   │
│   │   │ waitlister embed form   │   │   │
│   │   └─────────────────────────┘   │   │
│   │                                 │   │
│   │   ✓ Free to join               │   │
│   │   ✓ No credit card required    │   │
│   │   ✓ Get your spot in line      │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

**Copy:**
- Label: `EARLY ACCESS` (accent text style, orange-500)
- Headline: `Be the First to Cook with Digero`
- Subheadline (Playfair italic): `Join the waitlist and get notified when we launch on the App Store.`
- Body: `Sign up for early access. You'll be the first to save recipes from anywhere, plan meals with AI, and cook hands-free — all in one app.`
- Trust bullets (below form):
  - ✓ Free to join — no credit card required
  - ✓ Get your spot in line
  - ✓ Early access before public launch

**Styling:**
- Card: `max-w-2xl mx-auto rounded-2xl p-10 md:p-14 bg-orange-50 border border-orange-100`
- Headline: `text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-stone-950`
- Subheadline: `font-playfair italic text-lg md:text-xl text-stone-600 mt-3`
- Body: `text-base text-stone-600 leading-relaxed mt-4 max-w-md mx-auto`
- Trust bullets: `text-sm text-stone-500 mt-6 space-y-1` with `text-orange-500` checkmarks
- Center-align all content

**UX Best Practices Applied:**
1. **Minimal friction** — email-only field, no name required for primary conversion
2. **Social proof** — show waitlist count if available ("Join 200+ foodies")
3. **Trust signals** — privacy note, no credit card, clear value prop
4. **Clear CTA** — "Get Early Access" is action-oriented and specific (not generic "Submit")
5. **Immediate feedback** — Waitlister handles success/confirmation states automatically
6. **Dual placement** — Hero catches eager visitors, post-Pricing catches the convinced
7. **Visual hierarchy** — large headline draws eye → subheadline explains → form captures → trust reassures

### Waitlister Form Styling Override (Optional)

To match the Digero design system, add CSS overrides for the embedded form:
```css
/* Override Waitlister embed styles to match Digero */
.waitlister-form input[type="email"] {
  font-family: 'Inter', 'DM Sans', sans-serif;
  border-radius: 0.75rem;
  border: 2px solid #e7e5e4; /* stone-200 */
  padding: 0.875rem 1rem;
  font-size: 1rem;
  transition: border-color 0.2s;
}
.waitlister-form input[type="email"]:focus {
  border-color: #f97316; /* orange-500 */
  outline: none;
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
}
.waitlister-form button[type="submit"] {
  font-family: 'Inter', 'DM Sans', sans-serif;
  background-color: #f97316; /* orange-500 */
  color: white;
  font-weight: 600;
  border-radius: 0.75rem;
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  transition: background-color 0.2s;
}
.waitlister-form button[type="submit"]:hover {
  background-color: #c2410c; /* orange-700 */
}
```

---

## Tech Stack

Built with modern, real-time technologies:

| Layer | Technology |
|-------|-----------|
| Mobile App | React Native + Expo |
| Backend | Convex (real-time database) |
| Auth | Clerk |
| Payments | RevenueCat |
| AI | Google Gemini |
| Nutrition | Edamam API |
| Styling | NativeWind (Tailwind CSS) |

---

## About the Hackathon

**Headline:** Built in 14 days. Designed to last.

Digero was built for the **RevenueCat Shipyard 2026 Hackathon** — a 2-week challenge to build a mobile app with real subscription monetization powered by RevenueCat.

### The Challenge
Build a production-quality mobile app with real payment infrastructure, ship it to the App Store, and demonstrate a sustainable business model — all in 14 days, as a solo developer.

### What We Built
- A full-featured recipe management app with 13 integrated features
- Real subscription payments via RevenueCat with 3 tiers (Free, Plus, Creator)
- 5 AI-powered features using Google Gemini (recipe extraction, cookbook scanning, dietary conversion, nutrition analysis, AI Sous Chef)
- A creator economy model that shares 50% of profits with cooking creators
- Real-time data sync with Convex — zero loading spinners, instant updates
- Available on iOS via TestFlight with Android build ready

### The Stack
Every technology was chosen for speed and reliability:
- **RevenueCat** handles subscription lifecycle, receipt validation, and entitlement management across platforms
- **Convex** provides a real-time backend with zero-config — mutations auto-sync to every connected client
- **Clerk** handles auth with Apple, Google, and email sign-in out of the box
- **Google Gemini** powers all AI features — recipe extraction from URLs and YouTube transcripts, cookbook page OCR, dietary conversions, and the Sous Chef chatbot
- **Edamam** provides nutrition analysis for any recipe's ingredient list
- **Expo + React Native** with NativeWind for a native iOS/Android experience with Tailwind-style rapid UI development

### Why Digero Wins
This isn't a hackathon demo — it's a real product with real payments. Every subscription dollar flows through RevenueCat. Every recipe is stored in Convex. Every AI response comes from Gemini. The creator profit-sharing model isn't theoretical — the RES algorithm runs on every user interaction, and the payout calculations are live in the database.

---

## Footer

**Digero: Save & Cook Recipes**

- Privacy Policy: https://gist.githubusercontent.com/tmoody1973/4d2932325e2490d1e2657c2bc75d7821/raw/privacy-policy.html
- Contact: tarikjmoody@gmail.com
- Built by Tarik Moody for RevenueCat Shipyard 2026

---

## Screenshot Gallery Organization

33 screenshots should be grouped by feature for the landing page:

**Hero Carousel (5-6 best shots — Swiper coverflow effect inside iPhone frames):**
- Recipe detail view with photo
- Cook Mode step view
- Meal planner weekly calendar
- YouTube recipe discovery
- AI Sous Chef conversation
- Cookbook collection view

**Feature Section Screenshots (2-3 per feature):**
- Save From Anywhere: URL paste screen, extracted recipe result, YouTube search
- Scan Cookbooks: camera view, scanning in progress, saved scanned recipe
- AI Sous Chef: chat interface, recipe suggestion, substitution answer
- Cook Mode: step view, timer running, ingredient checklist
- Nutrition: "Get Nutrition Info" button, nutrition grid result
- Meal Planner: empty week, filled week, day view
- Shopping Lists: generated list, checked off items
- Cookbooks: collection grid, cookbook detail, add recipe modal
- Dietary Conversion: conversion buttons, conversion result
- Creator Economy: creator dashboard, earnings, shop

**Full Gallery (all 33 — bottom of page, grid with lightbox):**
- Masonry grid, 2 columns mobile / 4 columns desktop
- Click to open full-size lightbox with swipe navigation

### Libraries to Install

```bash
npm install swiper framer-motion
```

- **Swiper.js** — Carousel with coverflow 3D effect, cards effect, autoplay, touch/swipe, lazy loading, responsive breakpoints
- **Framer Motion** — Scroll-triggered section animations (fade-in, slide-up), viewport detection, smooth transitions

### Swiper Effects to Use

| Section | Effect | Config |
|---------|--------|--------|
| Hero carousel | `effect: "coverflow"` | `coverflowEffect: { rotate: 30, depth: 100, slideShadows: false }` |
| Feature sections | `effect: "cards"` or side-by-side | 2-3 slides per view on desktop |
| Mobile gallery | `effect: "creative"` | Custom parallax transforms |

### iPhone Frame CSS

Wrap each screenshot in a phone frame for realism:
```tsx
<div className="relative mx-auto w-[280px]">
  <div className="overflow-hidden rounded-[3rem] border-[8px] border-stone-900 shadow-2xl">
    <Image src={screenshot} alt="..." className="w-full" />
  </div>
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-stone-900 rounded-b-2xl" />
</div>
```

---

## Visual Style Guide — Cookbook-Inspired Design

> Inspired by a modern cookbook layout with bold color blocks, asymmetric grids, and editorial photography. Replace all yellow with Digero's orange. The result should feel like flipping through a high-end cookbook — not a typical SaaS landing page.

### Color Palette

| Role | Color | Tailwind | Usage |
|------|-------|----------|-------|
| Primary | `#f97316` | `orange-500` | Large background blocks, accent bars, CTAs, highlights |
| Primary Light | `#fff7ed` | `orange-50` | Light tinted sections behind text |
| Primary Dark | `#c2410c` | `orange-700` | Hover states, borders, emphasis |
| Dark | `#1c1917` | `stone-950` | Dark contrast sections, footer, alternating blocks |
| Dark Secondary | `#292524` | `stone-800` | Card backgrounds in dark sections |
| White | `#ffffff` | `white` | Text-heavy sections, clean breathing room |
| Warm Gray | `#f5f5f4` | `stone-100` | Subtle section backgrounds |
| Text Primary | `#1c1917` | `stone-950` | Headings on light backgrounds |
| Text Secondary | `#57534e` | `stone-600` | Body text, descriptions |
| Text on Dark | `#e7e5e4` | `stone-200` | Body text on dark sections |
| Text on Orange | `#ffffff` | `white` | All text on orange backgrounds |

### Typography

**Headings — Bold, Condensed, Uppercase**
- Font: `"Plus Jakarta Sans"` or `"DM Sans"` (Google Fonts, free) — both have the bold condensed weight that matches the cookbook's "COOKBOOK" heading style
- Weight: 800 (Extra Bold)
- Transform: `uppercase`
- Letter spacing: `tracking-tight` (-0.025em)
- Size scale: Hero h1 = `text-7xl md:text-9xl`, Section h2 = `text-4xl md:text-6xl`, Sub h3 = `text-2xl md:text-3xl`

**Taglines / Subtitles — Italic Script**
- Font: `"Playfair Display"` italic or `"Cormorant Garamond"` italic
- Weight: 400-500
- Style: `italic`
- Usage: Subtitles under bold headings, pull quotes, the "Your recipes. All in one place." subline

**Body Text — Clean Sans-Serif**
- Font: `"Inter"` or `"DM Sans"`
- Weight: 400 (Regular), 500 (Medium for emphasis)
- Size: `text-base md:text-lg`
- Line height: `leading-relaxed` (1.625)
- Max width: `max-w-prose` (~65ch) for readability

**Accent Text — Small Labels**
- Font: Same as body
- Weight: 600 (Semibold)
- Transform: `uppercase`
- Size: `text-xs`
- Letter spacing: `tracking-widest`
- Usage: Section labels like "FEATURES", "PRICING", "HOW IT WORKS"

```css
/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,800;1,9..40,400&family=Playfair+Display:ital,wght@1,400;1,500&display=swap');
```

### Layout Patterns (from the cookbook)

**1. Split Hero (50/50)**
Large orange background block on the left with the app icon/food photography, white content area on the right with heading + subtitle + CTAs. Like the cookbook's cover spread.
```
┌──────────────────┬──────────────────┐
│                  │                  │
│   ORANGE BG      │   DIGERO         │
│   + App Icon     │   Your recipes.  │
│   + Food Photo   │   All in one     │
│                  │   place.          │
│                  │   [Download CTA]  │
└──────────────────┴──────────────────┘
```

**2. Image Bleed + Text (60/40)**
Full-bleed food photo or app screenshot taking 60% width, text content in the remaining 40% with generous padding. Alternate sides per section.
```
┌────────────────────┬────────────┐
│                    │            │
│   FULL BLEED       │  Feature   │
│   SCREENSHOT       │  heading   │
│   (in phone frame) │  + body    │
│                    │            │
└────────────────────┴────────────┘
```
Then flip for next section:
```
┌────────────┬────────────────────┐
│            │                    │
│  Feature   │   FULL BLEED       │
│  heading   │   SCREENSHOT       │
│  + body    │   (in phone frame) │
│            │                    │
└────────────┴────────────────────┘
```

**3. Vertical Orange Accent Bar**
A thick vertical orange strip (w-2 or w-3) alongside content sections as a visual rhythm element, like the cookbook's orange sidebar strips.
```
┌─┬───────────────────────────────┐
│█│                               │
│█│  Section content with the     │
│█│  orange bar as a left accent  │
│█│                               │
└─┴───────────────────────────────┘
```

**4. Color Block Grid (alternating)**
Sections alternate between: white bg → orange bg → dark bg → white bg. Creates the cookbook's visual rhythm of flipping between vibrant and quiet pages.
```
Section 1: White bg, dark text ──────────
Section 2: Orange bg, white text ────────
Section 3: Dark (stone-950) bg, light text
Section 4: White bg, dark text ──────────
```

**5. Magazine Grid for Screenshots**
Asymmetric grid with mixed sizes, not a uniform gallery. Some screenshots are large (spanning 2 cols), some small. Mimics the cookbook's varied image placement.
```
┌──────────┬─────┐
│          │     │
│  LARGE   │ SM  │
│          │     │
├─────┬────┴─────┤
│     │          │
│ SM  │  LARGE   │
│     │          │
└─────┴──────────┘
```

**6. Icon Row (Quick Stats)**
Horizontal row of small icons with labels, like the cookbook's timer/servings/difficulty icons above recipe content. Use for feature stats or "how it works" steps.
```
  [📱 13 Features]  [🤖 5 AI Features]  [💰 3 Tiers]  [👨‍🍳 50/50 Creator Split]
```

**7. Pull Quote / Callout**
Large italic text in Playfair Display on an orange background, like the cookbook's editorial callouts.
```
┌─────────────────────────────────┐
│  ORANGE BG                      │
│                                 │
│  "Most recipe apps take from    │
│   creators and give nothing     │
│   back. Digero splits 50%."    │
│                                 │
│              — Tagline italic   │
└─────────────────────────────────┘
```

### Section-by-Section Layout Map

| # | Section | Background | Layout |
|---|---------|-----------|--------|
| 0 | Hackathon banner | `stone-950` | Full-width thin banner, white text, orange badge |
| 1 | Hero | Split: `orange-500` left / `white` right | 50/50 with app icon + hero screenshot on orange, heading + CTA on white |
| 2 | Problem statement | `white` | Centered text, orange accent bar left, pain points as icon list |
| 3 | Features carousel | `stone-100` | Swiper coverflow carousel of phone screenshots, section label above |
| 4 | Feature: Save | `white` | Image bleed left (60%) + text right (40%) |
| 5 | Feature: Scan | `orange-500` | Text left (40%) + image bleed right (60%), white text |
| 6 | Feature: YouTube | `white` | Image bleed left + text right |
| 7 | Feature: AI Chef | `stone-950` | Text left + image right, light text on dark |
| 8 | Feature: Cook Mode | `white` | Image bleed left + text right |
| 9 | Feature: Nutrition | `orange-500` | Text left + image right, white text |
| 10 | Pull quote | `orange-500` | Full-width italic Playfair quote |
| 11 | How it works | `white` | 5-step horizontal flow with icons and orange connecting line |
| 12 | Creator Economy | `stone-950` | Dark section, orange accents, RES table, split layout |
| 13 | Creator tools | `white` | Magazine grid of creator dashboard screenshots |
| 14 | Pricing | `stone-100` | 3 pricing cards, orange "Most Popular" badge on Plus |
| 15 | Full gallery | `white` | Asymmetric masonry grid of all 33 screenshots in phone frames |
| 16 | Hackathon story | `orange-500` | White text, tech stack icons, "Built in 14 days" |
| 17 | Footer | `stone-950` | Links, privacy policy, contact, orange logo |

### Component Patterns

**Orange Block with Floating Phone**
```tsx
<section className="relative bg-orange-500 py-24 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    <div className="text-white">
      <p className="text-xs font-semibold uppercase tracking-widest text-orange-200">Feature</p>
      <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mt-2">
        Scan Physical Cookbooks
      </h2>
      <p className="mt-6 text-lg text-orange-100 leading-relaxed max-w-prose">
        Point your camera at any cookbook page...
      </p>
    </div>
    <div className="relative">
      {/* Phone frame with screenshot, slightly rotated, with shadow */}
      <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
        <PhoneFrame screenshot="/screenshots/scan.png" />
      </div>
    </div>
  </div>
</section>
```

**Dark Section with Orange Accents**
```tsx
<section className="bg-stone-950 py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-start gap-4">
      <div className="w-1 bg-orange-500 rounded-full self-stretch" /> {/* Vertical accent bar */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">Creator Economy</p>
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mt-2">
          Creators earn real money
        </h2>
        <p className="mt-6 text-lg text-stone-300 leading-relaxed max-w-prose">
          50% of net subscription revenue goes directly to creators...
        </p>
      </div>
    </div>
  </div>
</section>
```

**Pull Quote**
```tsx
<section className="bg-orange-500 py-20">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <p className="font-playfair italic text-3xl md:text-5xl text-white leading-snug">
      "Most recipe apps take from creators and give nothing back.
       Digero splits 50%."
    </p>
  </div>
</section>
```

### Spacing & Rhythm

- Section padding: `py-20 md:py-32` (generous, like cookbook page margins)
- Content max-width: `max-w-7xl` (1280px)
- Heading → body gap: `mt-6`
- Section label → heading gap: `mt-2`
- Between feature sections: No extra gap — the alternating backgrounds create natural separation
- Inner grid gap: `gap-12 md:gap-16`

### Animation (Framer Motion)

- Sections fade + slide up on scroll: `initial={{ opacity: 0, y: 40 }}` → `whileInView={{ opacity: 1, y: 0 }}`
- Phone screenshots: slight rotation that levels on hover (`rotate-3` → `rotate-0`)
- Orange blocks: subtle parallax scroll (background moves slower than content)
- Stats/numbers: count-up animation when entering viewport
- Stagger children in grid layouts: `staggerChildren: 0.1`

### Key Design Principles (from the cookbook)

1. **Bold color blocks create rhythm** — never more than 2 white sections in a row
2. **Images are large and confident** — no tiny thumbnails, let food/screenshots breathe
3. **Typography has contrast** — massive bold uppercase headings vs delicate italic subtitles
4. **Asymmetry feels editorial** — avoid perfectly centered everything, offset grids feel premium
5. **White space is generous** — don't fill every pixel, let sections breathe like cookbook pages
6. **Orange is a statement** — use it for full section backgrounds, not just buttons

---

## App Screenshots

- **App icon:** Use `digero-app-icon.png` from the main project root
- **33 app screenshots** organized by feature as described in the Screenshot Gallery Organization section above
