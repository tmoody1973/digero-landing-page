import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { allScreenshots } from "@/lib/screenshots";

export function FullGallery() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel text="Gallery" />
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-stone-950 mt-2">
            See it all
          </h2>
        </AnimatedSection>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:balance]">
          {allScreenshots.map((shot, i) => (
            <AnimatedSection
              key={shot.src}
              delay={(i % 4) * 0.05}
              className="break-inside-avoid mb-4"
            >
              <PhoneFrame src={shot.src} alt={shot.alt} width={220} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
