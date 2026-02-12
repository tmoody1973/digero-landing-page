import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { screenshots } from "@/lib/screenshots";

export function FeatureScan() {
  return (
    <section className="bg-orange-500 py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12 md:gap-16 items-center">
        <AnimatedSection className="md:col-span-2">
          <SectionLabel text="Scan Cookbooks" color="light" />
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mt-2">
            Scan Physical Cookbooks
          </h2>
          <p className="mt-6 text-lg text-orange-100 leading-relaxed max-w-prose">
            Point your camera at any cookbook page. AI reads the recipe and saves
            it digitally with full structure — no manual typing.
          </p>
        </AnimatedSection>
        <AnimatedSection className="md:col-span-3" delay={0.1}>
          <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <PhoneFrame
              src={screenshots.cookbookScanning.scanStart}
              alt="Scan cookbook page with AI"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
