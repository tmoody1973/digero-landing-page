import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { screenshots } from "@/lib/screenshots";

const creatorScreenshots = [
  { src: screenshots.creatorEconomy.dashboardOverview, alt: "Creator dashboard overview" },
  { src: screenshots.creatorEconomy.earnings, alt: "Creator earnings breakdown" },
  { src: screenshots.creatorEconomy.analytics, alt: "Creator analytics" },
  { src: screenshots.creatorEconomy.profileVideos, alt: "Creator profile videos" },
  { src: screenshots.creatorEconomy.shop, alt: "Creator shop" },
  { src: screenshots.creatorEconomy.profileExclusive, alt: "Exclusive creator recipes" },
];

export function CreatorTools() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel text="Creator Tools" />
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-stone-950 mt-2">
            Everything creators need
          </h2>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Earnings overview, recipe analytics, a creator shop, follower
            messaging, and exclusive publishing — all in one dashboard.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {creatorScreenshots.map((shot, i) => (
            <AnimatedSection key={shot.src} delay={i * 0.1}>
              <PhoneFrame src={shot.src} alt={shot.alt} width={240} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
