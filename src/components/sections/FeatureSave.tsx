import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { screenshots } from "@/lib/screenshots";

export function FeatureSave() {
  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12 md:gap-16 items-center">
        <AnimatedSection className="md:col-span-3 md:order-first">
          <div className="transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <PhoneFrame
              src={screenshots.saveFromAnywhere.addRecipeModal}
              alt="Add recipe from URL, YouTube, camera, or share extension"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection className="md:col-span-2" delay={0.1}>
          <SectionLabel text="Save From Anywhere" />
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-stone-950 mt-2">
            Save From Anywhere
          </h2>
          <p className="mt-6 text-lg text-stone-600 leading-relaxed max-w-prose">
            Paste a URL from any cooking website or YouTube video. Digero&apos;s
            AI extracts the recipe instantly — title, ingredients, instructions,
            cook time, and photo.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
