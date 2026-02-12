import { AnimatedSection } from "@/components/ui/AnimatedSection";

const painPoints = [
  "Recipes are scattered across bookmarks, screenshots, and scribbled notes",
  "Meal planning takes forever with spreadsheets and sticky notes",
  "Physical cookbook recipes are trapped on the page",
  "Shopping lists are always incomplete",
];

export function ProblemStatement() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-start gap-6 max-w-3xl mx-auto">
            <div className="w-2 bg-orange-500 rounded-full self-stretch shrink-0" />
            <div>
              <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-stone-950">
                Cooking shouldn&apos;t be this complicated.
              </h2>
              <ul className="mt-8 space-y-4">
                {painPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-lg text-stone-600 leading-relaxed"
                  >
                    <span className="text-orange-500 mt-1 shrink-0">✕</span>
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xl font-semibold text-stone-950">
                Digero fixes all of this.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
