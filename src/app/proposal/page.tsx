import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hackathon Proposal — Digero",
  description:
    "Digero: The Nebula for YouTube Chefs. A creator-owned recipe platform powered by RevenueCat subscriptions. RevenueCat Shipyard 2026.",
};

const resWeights = [
  { action: "Recipe save", points: "1 point", intent: "User wants to cook it later" },
  { action: "Rating", points: "2 points", intent: "User is giving direct feedback" },
  { action: "Share", points: "3 points", intent: "User is recommending to others" },
  {
    action: '"I Made This" cook',
    points: "5 points",
    intent: "Highest intent — someone actually cooked it",
  },
];

const tiers = [
  {
    name: "Free",
    price: "$0",
    value: "10 recipes, 5 AI chats/day, 3 cookbook scans/month",
  },
  {
    name: "Plus",
    price: "$4.99/mo",
    value:
      "Unlimited everything, creator exclusives, meal planner, Instacart integration",
  },
  {
    name: "Creator",
    price: "$9.99/mo",
    value:
      "Everything in Plus + creator dashboard, product shop, payout eligibility",
  },
];

const unitEconomics = [
  { metric: "Average Revenue Per User", value: "$5.50/mo" },
  { metric: "Customer Acquisition Cost", value: "$8.00 (via creator promotion)" },
  { metric: "Lifetime Value (12-mo avg retention)", value: "$66.00" },
  { metric: "LTV:CAC Ratio", value: "8.25x" },
  { metric: "Gross Margin (after App Store fees)", value: "~70%" },
  { metric: "Net Margin (after creator share)", value: "~35%" },
];

const stack = [
  "React Native + Expo",
  "Convex",
  "Clerk",
  "RevenueCat",
  "Google Gemini",
  "Speechmatics Flow",
  "OneSignal",
];

export default function Proposal() {
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
              Digero: The Nebula for YouTube Chefs
            </h1>
            <p className="font-playfair italic text-xl md:text-2xl text-stone-400 mt-4">
              A creator-owned recipe platform powered by RevenueCat subscriptions
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-16">
        {/* The Problem */}
        <section>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-stone-950 mb-6">
            The Problem
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            The recipe app market is broken for everyone involved.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <h3 className="font-heading text-lg font-bold uppercase text-stone-950 mb-3">
                For Home Cooks
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Recipes are scattered across YouTube videos, food blogs, and
                screenshots. You watch a 12-minute cooking video, scribble down
                ingredients, and lose them in your camera roll. Existing recipe apps
                are glorified bookmark managers with no connection to the creators
                behind the content.
              </p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
              <h3 className="font-heading text-lg font-bold uppercase text-stone-950 mb-3">
                For Cooking Creators
              </h3>
              <p className="text-stone-600 leading-relaxed">
                YouTube&apos;s biggest food creators &mdash; channels with millions
                of subscribers &mdash; generate billions of views but have no direct
                way to monetize their recipes. Recipe apps scrape their content
                without permission or compensation. The people who feed millions of
                families earn nothing from the apps saving their work.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-orange-50 rounded-2xl p-6 border border-orange-100">
            <p className="text-stone-800 font-semibold text-lg">
              The gap: No recipe app treats creators as partners. The entire
              category extracts value from creators rather than sharing it.
            </p>
          </div>
        </section>

        {/* Target Audience */}
        <section>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-stone-950 mb-6">
            Target Audience
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-xl font-bold uppercase text-stone-950 mb-3">
                Primary: Home Cooks Who Watch Cooking YouTube
                <span className="text-stone-400 font-normal normal-case text-base ml-2">
                  (ages 25&ndash;45)
                </span>
              </h3>
              <ul className="space-y-2 text-stone-600">
                {[
                  "Follow 3-5 cooking channels regularly",
                  "Cook 3-7 meals per week at home",
                  "Currently save recipes via screenshots, bookmarks, or notes apps",
                  "Willing to pay for tools that simplify their cooking routine",
                  "Care about supporting the creators they follow",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1 shrink-0">&#9670;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold uppercase text-stone-950 mb-3">
                Secondary: Mid-Tier Cooking YouTubers
                <span className="text-stone-400 font-normal normal-case text-base ml-2">
                  (50K&ndash;500K subscribers)
                </span>
              </h3>
              <ul className="space-y-2 text-stone-600">
                {[
                  "Looking for monetization beyond AdSense and sponsorships",
                  "Want deeper engagement with their most dedicated fans",
                  "Interested in selling cookbooks, equipment, or digital products",
                  "Need analytics on which recipes resonate most with their audience",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1 shrink-0">&#9670;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-stone-950 mb-6">
            The Solution
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Digero is a mobile recipe app where subscribing directly supports the
            creators who feed your family.
          </p>
          <p className="text-stone-600 leading-relaxed mt-4">
            Users import recipes from any YouTube video, website, or physical
            cookbook using AI-powered extraction (Google Gemini). They organize
            recipes into collections, plan weekly meals, generate shopping lists,
            and cook with a hands-free voice assistant. The AI Sous Chef answers
            cooking questions in real-time &mdash; &ldquo;Can I substitute almond
            milk?&rdquo; or &ldquo;What temperature for medium-rare?&rdquo;
            &mdash; while you cook.
          </p>
          <p className="text-stone-600 leading-relaxed mt-4">
            What makes Digero different is the creator layer built on top. Cooking
            creators partner with Digero and earn revenue based on how their
            audience engages with their recipes. When users save, cook, share, or
            rate a creator&apos;s recipe, that engagement directly translates to
            earnings.
          </p>
        </section>

        {/* Monetization Strategy */}
        <section>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-stone-950 mb-6">
            Monetization Strategy
          </h2>

          {/* Tiers */}
          <h3 className="font-heading text-xl font-bold uppercase text-stone-950 mb-4">
            Three-Tier Subscriptions via RevenueCat
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-6 border ${
                  tier.name === "Plus"
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "bg-stone-50 border-stone-200"
                }`}
              >
                <h4
                  className={`font-heading text-lg font-bold uppercase ${
                    tier.name === "Plus" ? "text-white" : "text-stone-950"
                  }`}
                >
                  {tier.name}
                </h4>
                <p
                  className={`text-2xl font-extrabold mt-1 ${
                    tier.name === "Plus" ? "text-white" : "text-orange-500"
                  }`}
                >
                  {tier.price}
                </p>
                <p
                  className={`text-sm mt-3 leading-relaxed ${
                    tier.name === "Plus" ? "text-orange-100" : "text-stone-600"
                  }`}
                >
                  {tier.value}
                </p>
              </div>
            ))}
          </div>

          {/* 50/50 Split */}
          <div className="bg-stone-950 rounded-2xl p-8 md:p-10 mb-10">
            <h3 className="font-heading text-2xl font-bold uppercase text-white mb-4">
              The 50/50 Profit Split
            </h3>
            <p className="text-stone-300 leading-relaxed">
              Digero operates on a Nebula-inspired profit-sharing model. After
              operating costs (App Store fees, infrastructure, RevenueCat platform
              fees),{" "}
              <strong className="text-orange-500">
                50% of net profit goes to a creator pool
              </strong>{" "}
              distributed based on Recipe Engagement Score (RES).
            </p>

            <h4 className="font-heading text-lg font-bold uppercase text-white mt-8 mb-4">
              RES Weights Engagement by Intent
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="py-3 pr-6 text-xs font-semibold uppercase tracking-widest text-orange-500">
                      Action
                    </th>
                    <th className="py-3 pr-6 text-xs font-semibold uppercase tracking-widest text-orange-500">
                      Points
                    </th>
                    <th className="py-3 text-xs font-semibold uppercase tracking-widest text-orange-500">
                      Intent Signal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {resWeights.map((row) => (
                    <tr key={row.action} className="border-b border-stone-800">
                      <td className="py-3 pr-6 text-white font-medium">
                        {row.action}
                      </td>
                      <td className="py-3 pr-6 text-orange-400 font-semibold">
                        {row.points}
                      </td>
                      <td className="py-3 text-stone-400">{row.intent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-400 text-sm mt-6 leading-relaxed">
              A creator&apos;s monthly payout = (their RES / total platform RES)
              &times; creator pool. This rewards creators whose recipes people
              actually cook, not just save and forget.
            </p>
          </div>

          {/* Why This Model Works */}
          <h3 className="font-heading text-xl font-bold uppercase text-stone-950 mb-4">
            Why This Model Works
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-1 bg-orange-500 rounded-full self-stretch shrink-0" />
              <div>
                <p className="font-semibold text-stone-950">
                  Nebula proved it.
                </p>
                <p className="text-stone-600 leading-relaxed mt-1">
                  The creator-owned streaming platform proved this
                  model works for educational YouTube. Digero applies the same
                  economics to food &mdash; a category with higher engagement
                  frequency (people cook daily) and stronger purchase intent
                  (grocery spending, kitchen equipment).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-1 bg-orange-500 rounded-full self-stretch shrink-0" />
              <div>
                <p className="font-semibold text-stone-950">
                  RevenueCat enables the infrastructure.
                </p>
                <p className="text-stone-600 leading-relaxed mt-1">
                  Webhook-driven revenue tracking feeds directly into Convex (our
                  real-time backend) to calculate creator payouts.
                  Entitlement-based feature gating controls access at the API
                  level. Subscription state syncs across RevenueCat, Convex, and
                  OneSignal for targeted messaging based on tier &mdash; free users
                  see contextual upgrade prompts at moments of peak motivation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-1 bg-orange-500 rounded-full self-stretch shrink-0" />
              <div>
                <p className="font-semibold text-stone-950">
                  Creators become the distribution channel.
                </p>
                <p className="text-stone-600 leading-relaxed mt-1">
                  When a creator with 200K YouTube subscribers tells their audience
                  &ldquo;get my exclusive recipes on Digero,&rdquo; the creator
                  acquisition cost drops dramatically. The creator is incentivized
                  to promote Digero because their earnings scale with their
                  audience&apos;s engagement on the platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Unit Economics */}
        <section>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-stone-950 mb-6">
            Unit Economics
            <span className="text-stone-400 font-normal normal-case text-lg ml-3">
              Projected at Scale
            </span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-stone-200">
                  <th className="py-3 pr-6 text-xs font-semibold uppercase tracking-widest text-stone-500">
                    Metric
                  </th>
                  <th className="py-3 text-xs font-semibold uppercase tracking-widest text-stone-500">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {unitEconomics.map((row) => (
                  <tr key={row.metric} className="border-b border-stone-100">
                    <td className="py-3 pr-6 text-stone-700">{row.metric}</td>
                    <td className="py-3 text-stone-950 font-semibold">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Growth Flywheel */}
        <section>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-stone-950 mb-6">
            Growth Flywheel
          </h2>
          <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
            <div className="flex flex-wrap items-center justify-center gap-3 text-center">
              {[
                "More creators join",
                "More exclusive content",
                "More subscribers",
                "Larger creator pool",
              ].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="bg-orange-500 text-white font-heading font-bold text-sm px-4 py-2 rounded-full whitespace-nowrap">
                    {step}
                  </span>
                  {i < 3 && (
                    <span className="text-orange-400 text-xl">&rarr;</span>
                  )}
                </div>
              ))}
              <span className="text-orange-400 text-xl">&#8635;</span>
            </div>
            <p className="text-stone-700 text-center mt-6 leading-relaxed">
              The subscription revenue and creator payouts grow together, creating
              aligned incentives across the entire platform.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-stone-950 mb-6">
            Built With
          </h2>
          <div className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="bg-stone-100 text-stone-700 font-medium text-sm px-4 py-2 rounded-full border border-stone-200"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-stone-500 text-sm mt-4">
            Submitted to RevenueCat Shipyard 2026.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center pt-4">
          <p className="font-playfair italic text-xl text-stone-500 mb-6">
            Ready to cook with Digero?
          </p>
          <Link
            href="/"
            className="inline-block bg-orange-500 text-white font-heading font-bold uppercase tracking-wide text-sm px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Join the Exclusive Beta
          </Link>
        </div>
      </div>
    </main>
  );
}
