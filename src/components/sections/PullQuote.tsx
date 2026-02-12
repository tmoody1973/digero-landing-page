import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function PullQuote() {
  return (
    <section className="bg-orange-500 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="font-playfair italic text-3xl md:text-5xl text-white leading-snug">
            &ldquo;Most recipe apps take from creators and give nothing back.
            Digero splits 50%.&rdquo;
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
