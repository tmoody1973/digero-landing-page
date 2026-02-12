import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    popular: false,
    features: [
      "Save up to 10 recipes",
      "3 cookbook scans per month",
      "5 AI Sous Chef messages per day",
      "Basic meal planning",
      "Shopping list generation",
    ],
  },
  {
    name: "Plus",
    price: "$4.99",
    period: "/month",
    annual: "$49.99/year (save 17%)",
    popular: true,
    features: [
      "Unlimited recipes",
      "Unlimited cookbook scans",
      "Unlimited AI Sous Chef",
      "Advanced meal planning",
      "15% shop discount",
    ],
  },
  {
    name: "Creator",
    price: "$9.99",
    period: "/month",
    annual: "$89.99/year (save 25%)",
    popular: false,
    features: [
      "Everything in Plus",
      "Early access to creator recipes",
      "Exclusive creator content",
      "Direct messaging with creators",
      "Vote on future content",
    ],
  },
];

export function Pricing() {
  return (
    <section className="bg-stone-100 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel text="Pricing" />
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-stone-950 mt-2">
            Simple pricing
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Start free. Upgrade when you&apos;re ready.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={i * 0.1}>
              <div
                className={`rounded-2xl p-8 h-full flex flex-col ${
                  tier.popular
                    ? "bg-orange-500 text-white ring-4 ring-orange-300 scale-105 relative"
                    : "bg-white text-stone-950 border border-stone-200"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-widest bg-white text-orange-500 px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-2xl font-bold uppercase">
                  {tier.name}
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  <span
                    className={`text-sm ${
                      tier.popular ? "text-orange-100" : "text-stone-500"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>
                {tier.annual && (
                  <p
                    className={`text-sm mt-1 ${
                      tier.popular ? "text-orange-100" : "text-stone-500"
                    }`}
                  >
                    {tier.annual}
                  </p>
                )}
                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <span
                        className={`mt-0.5 shrink-0 ${
                          tier.popular ? "text-white" : "text-orange-500"
                        }`}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
