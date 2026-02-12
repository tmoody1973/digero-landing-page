"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WaitlistForm } from "@/components/ui/WaitlistForm";

export function EarlyAccessWaitlist() {

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto rounded-2xl p-10 md:p-14 bg-orange-50 border border-orange-100 text-center">
            <Image
              src="/digero_logo.svg"
              alt="Digero"
              width={80}
              height={35}
              className="mx-auto mb-6"
            />

            <SectionLabel text="Early Access" />
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-stone-950 mt-2">
              Be the First to Cook with Digero
            </h2>
            <p className="font-playfair italic text-lg md:text-xl text-stone-600 mt-3">
              Join the waitlist and get notified when we launch on the App Store.
            </p>
            <p className="text-base text-stone-600 leading-relaxed mt-4 max-w-md mx-auto">
              Sign up for early access. You&apos;ll be the first to save recipes
              from anywhere, plan meals with AI, and cook hands-free — all in one
              app.
            </p>

            {/* Waitlist form */}
            <div className="mt-8 max-w-md mx-auto">
              <WaitlistForm variant="dark" />
            </div>

            <div className="mt-6 space-y-1 text-sm text-stone-500">
              <p>
                <span className="text-orange-500">✓</span> Free to join — no
                credit card required
              </p>
              <p>
                <span className="text-orange-500">✓</span> Get your spot in line
              </p>
              <p>
                <span className="text-orange-500">✓</span> Early access before
                public launch
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
