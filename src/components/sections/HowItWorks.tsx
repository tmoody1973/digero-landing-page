import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  { number: "1", title: "Save", description: "Paste a URL, scan a cookbook, or search YouTube" },
  { number: "2", title: "Organize", description: "Group recipes into cookbooks and tag by cuisine or diet" },
  { number: "3", title: "Plan", description: "Drag recipes onto your weekly meal calendar" },
  { number: "4", title: "Shop", description: "Auto-generate a categorized shopping list" },
  { number: "5", title: "Cook", description: "Follow step-by-step instructions in Cook Mode" },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel text="How It Works" />
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-stone-950 mt-2">
            Five simple steps
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.1} className="text-center">
              <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold mx-auto">
                {step.number}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block h-0.5 bg-orange-200 absolute top-7 left-1/2 w-full -z-10" />
              )}
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-stone-950 mt-4">
                {step.title}
              </h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                {step.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
