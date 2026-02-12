import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const resTable = [
  { action: "Save a recipe", points: "1 pt", why: "User wants to cook it later" },
  { action: "Rate a recipe", points: "2 pts", why: "User is giving feedback" },
  { action: "Share a recipe", points: "3 pts", why: "User is recommending it to others" },
  { action: '"I Made This"', points: "5 pts", why: "User actually cooked it — the highest signal of value" },
  { action: "Exclusive view", points: "2 pts", why: "Creator tier subscriber engaging with early content" },
];

const tiers = [
  { tier: "Emerging", requirement: "10K+ YouTube subs", multiplier: "1.0x", perks: "Standard profit share, creator dashboard, basic analytics" },
  { tier: "Established", requirement: "100K+ YouTube subs", multiplier: "1.2x", perks: "1.2x boost, featured placement, exclusive publishing" },
  { tier: "Partner", requirement: "500K+ YouTube subs", multiplier: "1.5x", perks: "1.5x boost, homepage spotlight, co-marketing" },
];

export function CreatorEconomy() {
  return (
    <section className="bg-stone-950 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-start gap-4">
            <div className="w-1 bg-orange-500 rounded-full self-stretch shrink-0" />
            <div>
              <SectionLabel text="Creator Economy" color="orange" />
              <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mt-2">
                Creators earn real money
              </h2>
              <p className="font-playfair italic text-xl text-stone-400 mt-3">
                Users get better recipes.
              </p>
              <p className="mt-6 text-lg text-stone-300 leading-relaxed max-w-prose">
                Most recipe apps take from creators and give nothing back. Digero
                splits 50% of net subscription revenue with the cooking creators
                you love — based on real engagement, not follower counts.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-16">
          <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-white mb-6">
            Recipe Engagement Score (RES)
          </h3>
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
                    Why It Matters
                  </th>
                </tr>
              </thead>
              <tbody>
                {resTable.map((row) => (
                  <tr key={row.action} className="border-b border-stone-800">
                    <td className="py-3 pr-6 text-white font-medium">
                      {row.action}
                    </td>
                    <td className="py-3 pr-6 text-orange-400 font-semibold">
                      {row.points}
                    </td>
                    <td className="py-3 text-stone-400">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mt-16">
          <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-white mb-6">
            Creator Partnership Tiers
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.tier}
                className="bg-stone-800 rounded-2xl p-6 border border-stone-700"
              >
                <div className="text-orange-500 text-2xl font-bold">
                  {tier.multiplier}
                </div>
                <h4 className="font-heading text-xl font-bold uppercase text-white mt-2">
                  {tier.tier}
                </h4>
                <p className="text-sm text-stone-400 mt-1">{tier.requirement}</p>
                <p className="text-stone-300 text-sm mt-3 leading-relaxed">
                  {tier.perks}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
