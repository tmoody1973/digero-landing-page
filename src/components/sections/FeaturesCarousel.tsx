"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { screenshots } from "@/lib/screenshots";

const featuredScreenshots = [
  { src: screenshots.hero.recipeDetail, alt: "Recipe detail view" },
  { src: screenshots.saveFromAnywhere.addRecipeModal, alt: "Save from anywhere" },
  { src: screenshots.cookbookScanning.scanStart, alt: "Scan cookbooks" },
  { src: screenshots.youtubeDiscovery.searchResults, alt: "YouTube recipe discovery" },
  { src: screenshots.aiSousChef.conversationTips, alt: "AI Sous Chef" },
  { src: screenshots.mealPlanning.weeklyCalendar, alt: "Meal planning" },
  { src: screenshots.shoppingLists.byAisle, alt: "Smart shopping lists" },
  { src: screenshots.cookbooks.gridView, alt: "Recipe cookbooks" },
];

export function FeaturesCarousel() {
  return (
    <section className="bg-stone-100 py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <SectionLabel text="Features" />
          <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-stone-950 mt-2">
            Everything you need
          </h2>
        </AnimatedSection>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 80,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="!pb-12"
      >
        {featuredScreenshots.map((shot) => (
          <SwiperSlide
            key={shot.src}
            style={{ width: "260px" }}
            className="!flex justify-center"
          >
            <PhoneFrame src={shot.src} alt={shot.alt} width={260} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
