import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { screenshots } from "@/lib/screenshots";

export function FeatureAIChef() {
  return (
    <section className="bg-stone-950 py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12 md:gap-16 items-center">
        <AnimatedSection className="md:col-span-2">
          <SectionLabel text="AI Sous Chef" color="orange" />
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mt-2">
            AI Sous Chef
          </h2>
          <p className="mt-6 text-lg text-stone-300 leading-relaxed max-w-prose">
            Ask your AI cooking assistant anything — substitutions, technique
            tips, &ldquo;what can I make with what&apos;s in my fridge?&rdquo;
            Get answers while you cook.
          </p>
        </AnimatedSection>
        <AnimatedSection className="md:col-span-3" delay={0.1}>
          <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <PhoneFrame
              src={screenshots.aiSousChef.conversationTips}
              alt="AI cooking assistant chat"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
