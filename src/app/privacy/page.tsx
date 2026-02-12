import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Digero",
  description: "Digero privacy policy. How we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Link
          href="/"
          className="text-sm text-orange-500 hover:text-orange-600 font-medium"
        >
          &larr; Back to Home
        </Link>

        <h1 className="font-heading text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-stone-950 mt-8">
          Privacy Policy
        </h1>
        <p className="text-stone-500 mt-2">Last updated: February 11, 2026</p>

        <div className="mt-10 space-y-8 text-stone-700 leading-relaxed">
          <section>
            <p>
              Digero is a recipe management app that helps you save, organize, and
              cook recipes. We respect your privacy and are committed to protecting
              your personal data.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-stone-950 mb-3">
              Information We Collect
            </h2>
            <ul className="space-y-3">
              <li>
                <strong className="text-stone-950">Account Information:</strong>{" "}
                Email address and name via Clerk authentication.
              </li>
              <li>
                <strong className="text-stone-950">Recipe Data:</strong> Saved,
                created, or imported recipes including ingredients, instructions,
                and images.
              </li>
              <li>
                <strong className="text-stone-950">Usage Data:</strong> Meal plans,
                cookbooks, cooking history, and app preferences.
              </li>
              <li>
                <strong className="text-stone-950">Subscription Data:</strong>{" "}
                Subscription status managed through RevenueCat and Apple/Google
                systems. We do not store your payment details.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-stone-950 mb-3">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Providing and maintaining app features (recipe storage, meal planning, shopping lists)</li>
              <li>Managing your account and subscriptions</li>
              <li>Improving the app experience</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-stone-950 mb-3">
              Third-Party Services
            </h2>
            <ul className="space-y-3">
              <li>
                <strong className="text-stone-950">Clerk:</strong> Authentication
                and account management.
              </li>
              <li>
                <strong className="text-stone-950">Convex:</strong> Cloud database
                for recipe and data storage.
              </li>
              <li>
                <strong className="text-stone-950">RevenueCat:</strong>{" "}
                Subscription and payment management.
              </li>
              <li>
                <strong className="text-stone-950">Google Gemini AI:</strong>{" "}
                Recipe extraction from URLs and images. Text submitted is processed
                by Google&apos;s API.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-stone-950 mb-3">
              Data Storage
            </h2>
            <p>
              Your data is stored securely on Convex cloud servers. We do not sell
              your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-stone-950 mb-3">
              Your Rights
            </h2>
            <p>
              You can delete your account and all associated data from the Settings
              screen in the app at any time.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-stone-950 mb-3">
              Children&apos;s Privacy
            </h2>
            <p>
              Digero is not directed at children under 13, and we do not knowingly
              collect data from this age group.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-stone-950 mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time. Changes will be posted
              on this page.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-stone-950 mb-3">
              Contact
            </h2>
            <p>
              Questions about this policy? Reach us at{" "}
              <a
                href="mailto:digital@radiomilwaukee.org"
                className="text-orange-500 hover:text-orange-600 underline"
              >
                digital@radiomilwaukee.org
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
