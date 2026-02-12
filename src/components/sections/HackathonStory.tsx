import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const techStack = [
  { layer: "Mobile App", tech: "React Native + Expo" },
  { layer: "Backend", tech: "Convex (real-time database)" },
  { layer: "Auth", tech: "Clerk" },
  { layer: "Payments", tech: "RevenueCat" },
  { layer: "AI", tech: "Google Gemini" },
  { layer: "Nutrition", tech: "Edamam API" },
  { layer: "Styling", tech: "NativeWind (Tailwind CSS)" },
];

const stats = [
  { number: "14", label: "Days to Build" },
  { number: "13", label: "Features" },
  { number: "5", label: "AI Features" },
  { number: "3", label: "Pricing Tiers" },
];

export function HackathonStory() {
  return (
    <section className="bg-orange-500 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <SectionLabel text="The Hackathon" color="light" />
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mt-2">
            Built in 14 days. Designed to last.
          </h2>
          <p className="mt-6 text-lg text-orange-100 leading-relaxed max-w-prose">
            Digero was built for the RevenueCat Shipyard 2026 Hackathon — a
            2-week challenge to build a mobile app with real subscription
            monetization. Solo developer. Production-quality.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl font-extrabold text-white">
                  {stat.number}
                </div>
                <div className="text-sm text-orange-200 uppercase tracking-widest mt-2 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mt-16">
          <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-white mb-6">
            The Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((item) => (
              <div
                key={item.layer}
                className="bg-orange-600/50 rounded-xl p-4 backdrop-blur-sm"
              >
                <div className="text-xs text-orange-200 uppercase tracking-widest font-semibold">
                  {item.layer}
                </div>
                <div className="text-white font-medium mt-1">{item.tech}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
