import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technical Documentation — Digero",
  description:
    "Digero architecture, tech stack, and RevenueCat implementation for RevenueCat Shipyard 2026.",
};

/* ─── Data ──────────────────────────────────────────────── */

const techStack = [
  { layer: "Mobile Framework", tech: "React Native + Expo SDK 54", purpose: "Cross-platform iOS/Android" },
  { layer: "Routing", tech: "expo-router (file-based)", purpose: "Navigation and deep linking" },
  { layer: "Backend", tech: "Convex", purpose: "Real-time database, server functions, webhooks" },
  { layer: "Authentication", tech: "Clerk", purpose: "Email, Apple, Google sign-in" },
  { layer: "Subscriptions", tech: "RevenueCat", purpose: "Billing, entitlements, paywall, analytics" },
  { layer: "AI Extraction", tech: "Google Gemini 2.0 Flash", purpose: "Recipe parsing from URLs, YouTube, cookbook photos" },
  { layer: "Voice Assistant", tech: "Speechmatics Flow", purpose: "Real-time voice interaction in Cook Mode" },
  { layer: "Messaging", tech: "OneSignal", purpose: "In-app messaging and push notifications" },
  { layer: "Styling", tech: "NativeWind v4 (Tailwind CSS)", purpose: "Responsive styling with dark mode" },
  { layer: "Distribution", tech: "EAS Build + TestFlight", purpose: "iOS builds with OTA update support" },
];

const products = [
  { id: "digero_plus_monthly", price: "$4.99/mo", type: "Auto-renewable", entitlement: "plus" },
  { id: "digero_plus_annual", price: "$49.99/yr", type: "Auto-renewable", entitlement: "plus" },
  { id: "digero_creator_monthly", price: "$9.99/mo", type: "Auto-renewable", entitlement: "creator" },
  { id: "digero_creator_annual", price: "$89.99/yr", type: "Auto-renewable", entitlement: "creator" },
];

const paywallTriggers = [
  { trigger: "RECIPE_LIMIT_EXCEEDED", location: "Recipe save flow", context: "\"You've saved 10 recipes. Upgrade for unlimited.\"" },
  { trigger: "SCAN_LIMIT_EXCEEDED", location: "Cookbook scanner", context: "\"3 scans used this month. Upgrade for unlimited.\"" },
  { trigger: "AI_CHAT_LIMIT_EXCEEDED", location: "AI Sous Chef (hard lock at 5/5)", context: "Full-screen overlay at daily limit" },
  { trigger: "EXCLUSIVE_CONTENT", location: "Creator channel Exclusive tab", context: "Locked recipe cards open paywall on tap" },
  { trigger: "SHOP_DISCOUNT", location: "Creator Shop product pages", context: "\"Subscribe to save $X.XX on this item\"" },
  { trigger: "(inline)", location: "AI Sous Chef (soft prompt at 4/5)", context: "Upgrade card injected into chat conversation" },
];

const webhookEvents = [
  { event: "INITIAL_PURCHASE", action: "Set subscription tier, detect trial, store RevenueCat user ID" },
  { event: "RENEWAL", action: "Update expiration, clear billing issues" },
  { event: "CANCELLATION", action: "Mark cancelled, maintain access until expiration" },
  { event: "EXPIRATION", action: "Revert to free tier" },
  { event: "BILLING_ISSUE", action: "Flag billing issue, maintain current tier" },
  { event: "PRODUCT_CHANGE", action: "Update tier on upgrade/downgrade" },
];

const freeLimits = [
  { feature: "Saved recipes", limit: "10", enforcement: "checkRecipeLimit() query before createRecipe mutation" },
  { feature: "Cookbook scans", limit: "3 per 30-day rolling window", enforcement: "checkScanLimit() query + recordScan() mutation" },
  { feature: "AI Sous Chef", limit: "5 messages per day", enforcement: "useAIChatLimit() hook with Convex daily counter" },
  { feature: "Exclusive content", limit: "Locked", enforcement: "isPremium check in UI, no API exposure" },
  { feature: "Creator shop discount", limit: "0%", enforcement: "getMemberDiscountRate() returns 0 for free" },
];

const resWeights = [
  { action: "Save", points: "1x", rationale: "Low-intent bookmark" },
  { action: "Rating", points: "2x", rationale: "Active feedback" },
  { action: "Share", points: "3x", rationale: "Distribution value" },
  { action: "\"I Made This\" cook", points: "5x", rationale: "Highest intent — user actually cooked the recipe" },
  { action: "Exclusive view", points: "2x", rationale: "Subscriber-only content engagement" },
];

const creatorTiers = [
  { tier: "Emerging", subs: "10K+", multiplier: "1.0x" },
  { tier: "Established", subs: "100K+", multiplier: "1.2x" },
  { tier: "Partner", subs: "500K+", multiplier: "1.5x" },
];

/* ─── Components ────────────────────────────────────────── */

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b-2 border-stone-200">
            {headers.map((h) => (
              <th
                key={h}
                className="py-3 pr-4 text-xs font-semibold uppercase tracking-widest text-stone-500"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-stone-100">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`py-3 pr-4 ${
                    j === 0 ? "text-stone-950 font-medium" : "text-stone-600"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DarkTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-stone-700">
            {headers.map((h) => (
              <th
                key={h}
                className="py-3 pr-4 text-xs font-semibold uppercase tracking-widest text-orange-500"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-stone-800">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`py-3 pr-4 ${
                    j === 0
                      ? "text-white font-medium"
                      : j === 1
                      ? "text-orange-400 font-semibold"
                      : "text-stone-400"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-stone-950 text-stone-300 rounded-xl p-6 overflow-x-auto text-sm leading-relaxed font-mono">
      {children}
    </pre>
  );
}

function SectionH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-stone-950 mb-6">
      {children}
    </h2>
  );
}

function SectionH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-stone-950 mb-4">
      {children}
    </h3>
  );
}

/* ─── Page ──────────────────────────────────────────────── */

export default function Docs() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-stone-950 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="text-sm text-orange-500 hover:text-orange-400 font-medium"
          >
            &larr; Back to Home
          </Link>
          <div className="mt-10">
            <p className="text-xs font-heading font-bold uppercase tracking-widest text-orange-500">
              RevenueCat Shipyard 2026
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mt-3 leading-tight">
              Technical Documentation
            </h1>
            <p className="font-playfair italic text-xl md:text-2xl text-stone-400 mt-4">
              Architecture, tech stack, and RevenueCat implementation
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-16">
        {/* Tech Stack */}
        <section>
          <SectionH2>Tech Stack</SectionH2>
          <Table
            headers={["Layer", "Technology", "Purpose"]}
            rows={techStack.map((r) => [r.layer, r.tech, r.purpose])}
          />
        </section>

        {/* Architecture Overview */}
        <section>
          <SectionH2>Architecture Overview</SectionH2>
          <CodeBlock>{`┌──────────────────────────────────────────────────────────┐
│                    MOBILE CLIENT                          │
│  React Native + Expo SDK 54                              │
│                                                          │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────┐  │
│  │ Clerk Auth  │  │ RevenueCat   │  │ OneSignal SDK  │  │
│  │ (identity)  │  │ SDK (billing)│  │ (messaging)    │  │
│  └──────┬──────┘  └──────┬───────┘  └───────┬────────┘  │
│         │                │                   │           │
│  ┌──────┴────────────────┴───────────────────┴────────┐  │
│  │          SubscriptionContext (global state)         │  │
│  │  isPremium, tier, purchase(), restore(), refresh()  │  │
│  └────────────────────────┬───────────────────────────┘  │
│                           │                              │
│  ┌────────────────────────┴───────────────────────────┐  │
│  │              PaywallModal (6 triggers)              │  │
│  │  Recipe limit · Scan limit · AI chat · Exclusive    │  │
│  │  content · Shop discount · Feature gate             │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────┬───────────────────────────────┘
                           │
              Convex React Client (real-time sync)
                           │
┌──────────────────────────┴───────────────────────────────┐
│                    CONVEX BACKEND                         │
│                                                          │
│  ┌──────────────────┐  ┌──────────────────────────────┐  │
│  │ HTTP Router      │  │ Server Functions             │  │
│  │                  │  │                              │  │
│  │ /webhooks/       │  │ Queries:                     │  │
│  │   revenuecat     │  │   getSubscriptionStatus()    │  │
│  │   clerk          │  │   isPremium()                │  │
│  │                  │  │   checkRecipeLimit()         │  │
│  │ HMAC-SHA256      │  │   checkScanLimit()           │  │
│  │ verification     │  │   getCreatorEarnings()       │  │
│  │                  │  │                              │  │
│  │                  │  │ Mutations:                    │  │
│  │                  │  │   syncSubscriptionFromClient()│  │
│  │                  │  │   updateSubscription()        │  │
│  │                  │  │   clearSubscription()         │  │
│  └──────────────────┘  └──────────────────────────────┘  │
│                                                          │
│  ┌──────────────────────────────────────────────────────┐ │
│  │                  Convex Database                     │ │
│  │  users · recipes · revenueTransactions              │ │
│  │  creatorProfiles · creatorPayouts · recipeEngagement│ │
│  └──────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
   ┌────────────┐  ┌────────────┐  ┌────────────────┐
   │ RevenueCat │  │   Clerk    │  │  OneSignal     │
   │  Cloud     │  │   Cloud    │  │  Cloud         │
   │ (billing)  │  │  (auth)    │  │ (push/IAM)    │
   └────────────┘  └────────────┘  └────────────────┘`}</CodeBlock>
        </section>

        {/* RevenueCat Implementation */}
        <section>
          <SectionH2>RevenueCat Implementation</SectionH2>

          <SectionH3>Products and Entitlements</SectionH3>
          <Table
            headers={["Product ID", "Price", "Type", "Entitlement"]}
            rows={products.map((p) => [p.id, p.price, p.type, p.entitlement])}
          />
          <p className="text-stone-600 text-sm mt-3">
            <strong className="text-stone-950">Entitlement hierarchy:</strong>{" "}
            <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-600">creator</code>{" "}
            grants all{" "}
            <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-600">plus</code>{" "}
            features plus creator-specific tools.
          </p>

          {/* Client-Side SDK */}
          <div className="mt-10">
            <SectionH3>Client-Side SDK Integration</SectionH3>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-stone-950">
                  Initialization{" "}
                  <span className="font-normal text-stone-400">
                    (lib/revenuecat.ts)
                  </span>
                </p>
                <ul className="mt-2 space-y-1 text-stone-600 text-sm list-disc list-inside">
                  <li>RevenueCat SDK configured on app launch with Clerk user ID as the app_user_id</li>
                  <li>Enables cross-platform identity mapping between Clerk, RevenueCat, and Convex</li>
                  <li>StoreKit 2 enabled for simulator testing</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-stone-950">
                  Subscription Context{" "}
                  <span className="font-normal text-stone-400">
                    (contexts/SubscriptionContext.tsx)
                  </span>
                </p>
                <ul className="mt-2 space-y-1 text-stone-600 text-sm list-disc list-inside">
                  <li>Global React context wrapping the entire app</li>
                  <li>Listens to CustomerInfo updates in real-time</li>
                  <li>Syncs subscription state to Convex on every change</li>
                </ul>
                <CodeBlock>{`const { isPremium, purchase, restore, refresh } = useSubscription();`}</CodeBlock>
              </div>

              <div>
                <p className="font-semibold text-stone-950">
                  Paywall Component{" "}
                  <span className="font-normal text-stone-400">
                    (components/subscription/PaywallModal.tsx)
                  </span>
                </p>
                <ul className="mt-2 space-y-1 text-stone-600 text-sm list-disc list-inside">
                  <li>Single reusable component triggered from 6 strategic locations</li>
                  <li>Shows tier comparison, pricing, and contextual messaging</li>
                  <li>Handles purchase flow and restore directly</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Paywall Triggers */}
          <div className="mt-10">
            <SectionH3>Paywall Trigger Strategy</SectionH3>
            <p className="text-stone-600 mb-4">
              Rather than a single onboarding paywall, Digero triggers contextual
              paywalls at moments of peak user motivation:
            </p>
            <Table
              headers={["Trigger", "Location", "Context"]}
              rows={paywallTriggers.map((t) => [t.trigger, t.location, t.context])}
            />
          </div>

          {/* Webhook Handler */}
          <div className="mt-10">
            <SectionH3>Server-Side Webhook Handler</SectionH3>
            <div className="flex flex-wrap gap-4 mb-4 text-sm">
              <span className="bg-stone-100 px-3 py-1 rounded-full text-stone-700 font-medium">
                POST /webhooks/revenuecat
              </span>
              <span className="bg-stone-100 px-3 py-1 rounded-full text-stone-700 font-medium">
                HMAC-SHA256 verification
              </span>
            </div>
            <Table
              headers={["Event", "Action"]}
              rows={webhookEvents.map((e) => [e.event, e.action])}
            />
            <p className="text-stone-500 text-sm mt-3">
              After processing each event, the handler syncs the subscription tier
              to OneSignal as player tags for targeted push notification
              segmentation.
            </p>
          </div>

          {/* Data Flow */}
          <div className="mt-10">
            <SectionH3>Data Flow</SectionH3>
            <CodeBlock>{`User taps "Subscribe" in PaywallModal
    │
    ▼
RevenueCat SDK processes purchase via App Store
    │
    ├──► Client: CustomerInfo listener fires
    │    └──► SubscriptionContext updates isPremium
    │         └──► syncSubscriptionFromClient() writes to Convex users table
    │
    └──► Server: RevenueCat sends webhook to /webhooks/revenuecat
         └──► Convex verifies HMAC signature
              └──► updateSubscription() writes to Convex users table
                   └──► Syncs tier to OneSignal for push targeting`}</CodeBlock>
            <p className="text-stone-600 text-sm mt-4">
              Both paths (client SDK and server webhook) write to the same Convex{" "}
              <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-600">users</code>{" "}
              table, providing redundancy. The webhook is the source of truth for
              renewals, cancellations, and expirations that happen outside the app.
            </p>
          </div>
        </section>

        {/* Feature Gating */}
        <section>
          <SectionH2>Feature Gating</SectionH2>

          <SectionH3>Free Tier Limits</SectionH3>
          <Table
            headers={["Feature", "Limit", "Enforcement"]}
            rows={freeLimits.map((f) => [f.feature, f.limit, f.enforcement])}
          />

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
              <h4 className="font-heading text-lg font-bold uppercase text-stone-950">
                Plus Tier
              </h4>
              <p className="text-orange-500 font-semibold">$4.99/mo</p>
              <p className="text-stone-600 text-sm mt-2">
                All free limits removed. 15% discount on creator shop products.
              </p>
            </div>
            <div className="bg-stone-950 rounded-2xl p-6">
              <h4 className="font-heading text-lg font-bold uppercase text-white">
                Creator Tier
              </h4>
              <p className="text-orange-500 font-semibold">$9.99/mo</p>
              <p className="text-stone-400 text-sm mt-2">
                All Plus features plus: creator dashboard, product shop, payout
                eligibility, RES multiplier bonuses.
              </p>
            </div>
          </div>
        </section>

        {/* Creator Economy Infrastructure */}
        <section>
          <SectionH2>Creator Economy Infrastructure</SectionH2>

          <SectionH3>Recipe Engagement Score (RES)</SectionH3>
          <p className="text-stone-600 mb-4">
            Every user interaction with a creator&apos;s recipe generates
            engagement points stored in the{" "}
            <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-600">
              recipeEngagement
            </code>{" "}
            table:
          </p>
          <Table
            headers={["Action", "Points", "Rationale"]}
            rows={resWeights.map((r) => [r.action, r.points, r.rationale])}
          />

          <div className="mt-8">
            <SectionH3>Creator Tier Multipliers</SectionH3>
            <Table
              headers={["Creator Tier", "YouTube Subs", "RES Multiplier"]}
              rows={creatorTiers.map((t) => [t.tier, t.subs, t.multiplier])}
            />
          </div>

          <div className="mt-8">
            <SectionH3>Payout Calculation</SectionH3>
            <div className="bg-stone-950 rounded-2xl p-8">
              <CodeBlock>{`Monthly Subscription Revenue
    │
    ├──► App Store fee (15-30%)
    ├──► RevenueCat fee (~1.5%)
    │
    ▼
Net Revenue
    │
    ├──► Platform (50%)
    └──► Creator Pool (50%)
         │
         ▼
    Distributed by RES share:

    Creator Payout = (Creator RES × Tier Multiplier)
                     ────────────────────────────────  ×  Creator Pool
                           Total Platform RES`}</CodeBlock>
            </div>
            <p className="text-stone-600 text-sm mt-4">
              <strong className="text-stone-950">Implementation:</strong>{" "}
              <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-600">
                getCreatorEarnings()
              </code>{" "}
              in{" "}
              <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-600">
                convex/creator.ts
              </code>{" "}
              queries the recipeEngagement table, aggregates RES for the current
              period, and calculates the creator&apos;s estimated payout in
              real-time. The Creator Dashboard displays this data with a 7-day
              earnings chart and engagement breakdown.
            </p>
          </div>

          <div className="mt-8">
            <SectionH3>Revenue Tracking</SectionH3>
            <p className="text-stone-600 mb-4">
              The{" "}
              <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-600">
                revenueTransactions
              </code>{" "}
              table stores every subscription event from the RevenueCat webhook
              with a full revenue breakdown:
            </p>
            <CodeBlock>{`{
  grossRevenue: number,      // Full subscription price
  appStoreFee: number,       // Apple/Google cut
  revenuecatFee: number,     // RevenueCat platform fee
  netRevenue: number,        // After all fees
  platformShare: number,     // Digero's 50%
  creatorPoolShare: number,  // Creator pool's 50%
}`}</CodeBlock>
          </div>
        </section>

        {/* Database Schema */}
        <section>
          <SectionH2>Database Schema</SectionH2>

          <div className="space-y-8">
            <div>
              <SectionH3>
                users
              </SectionH3>
              <Table
                headers={["Field", "Type", "Purpose"]}
                rows={[
                  ["clerkId", "string", "Identity (indexed)"],
                  ["subscriptionStatus", "\"free\" | \"plus\" | \"creator\" | \"trial\"", "Current tier"],
                  ["subscriptionType", "\"monthly\" | \"annual\" | \"lifetime\"", "Billing period"],
                  ["subscriptionExpiresAt", "number", "Unix ms expiration"],
                  ["hasBillingIssue", "boolean", "Payment failure flag"],
                  ["revenuecatUserId", "string", "Webhook correlation"],
                  ["onesignalPlayerId", "string", "Push notification targeting"],
                ]}
              />
            </div>

            <div>
              <SectionH3>
                creatorProfiles
              </SectionH3>
              <Table
                headers={["Field", "Type", "Purpose"]}
                rows={[
                  ["userId", "string", "Clerk user ID"],
                  ["youtubeChannelId", "string", "YouTube channel link"],
                  ["tier", "\"emerging\" | \"established\" | \"partner\"", "Partnership level"],
                  ["resMultiplier", "number", "Payout multiplier (1.0-1.5x)"],
                  ["applicationStatus", "\"pending\" | \"approved\" | \"rejected\"", "Onboarding state"],
                  ["totalEarnings", "number", "Denormalized lifetime earnings"],
                ]}
              />
            </div>

            <div className="text-stone-600 text-sm space-y-2">
              <p>
                <strong className="text-stone-950">revenueTransactions</strong>{" "}
                &mdash; Stores every RevenueCat webhook event with gross/net
                revenue breakdown and creator pool allocation.
              </p>
              <p>
                <strong className="text-stone-950">creatorPayouts</strong>{" "}
                &mdash; Monthly payout records per creator with RES share, payout
                amount, and payment status tracking.
              </p>
              <p>
                <strong className="text-stone-950">recipeEngagement</strong>{" "}
                &mdash; Daily aggregated engagement metrics (saves, cooks, shares,
                ratings) per recipe per creator with calculated RES score.
              </p>
            </div>
          </div>
        </section>

        {/* OneSignal */}
        <section>
          <SectionH2>OneSignal Integration</SectionH2>
          <p className="text-stone-600 leading-relaxed mb-6">
            OneSignal is initialized after Clerk authentication and synced with
            subscription state for targeted messaging:
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-1 bg-orange-500 rounded-full self-stretch shrink-0" />
              <div>
                <p className="font-semibold text-stone-950">Player tags</p>
                <p className="text-stone-600 text-sm">
                  <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-600">subscription_status</code>,{" "}
                  <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-600">subscription_type</code>,{" "}
                  <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-600">recipe_count</code>,{" "}
                  <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-600">followed_creators</code>,{" "}
                  <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-600">is_creator</code>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1 bg-orange-500 rounded-full self-stretch shrink-0" />
              <div>
                <p className="font-semibold text-stone-950">In-app message triggers</p>
                <p className="text-stone-600 text-sm">
                  <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-600">recipe_limit_reached</code>,{" "}
                  <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-600">ai_chat_limit_warning</code>,{" "}
                  <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-600">creator_exclusive_available</code>,{" "}
                  <code className="bg-stone-100 px-1.5 py-0.5 rounded text-orange-600">paywall_viewed</code>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1 bg-orange-500 rounded-full self-stretch shrink-0" />
              <div>
                <p className="font-semibold text-stone-950">Push segments</p>
                <p className="text-stone-600 text-sm">
                  Free users approaching limits, lapsed subscribers, creator followers
                </p>
              </div>
            </div>
          </div>
          <p className="text-stone-500 text-sm mt-6">
            The RevenueCat webhook handler syncs tier changes to OneSignal after
            every subscription event, enabling real-time audience segmentation for
            conversion campaigns.
          </p>
        </section>

        {/* Footer */}
        <div className="text-center pt-4 text-stone-500 text-sm">
          Built for RevenueCat Shipyard 2026
        </div>
      </div>
    </main>
  );
}
