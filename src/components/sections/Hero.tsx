"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { screenshots } from "@/lib/screenshots";

const heroScreenshots = [
  { src: screenshots.hero.recipeList, alt: "Recipe list view" },
  { src: screenshots.hero.recipeDetail, alt: "Recipe detail view" },
  {
    src: screenshots.recipes.ingredientsNutrition,
    alt: "Recipe ingredients and nutrition",
  },
  { src: screenshots.mealPlanning.weeklyCalendar, alt: "Weekly meal planner" },
  {
    src: screenshots.aiSousChef.conversationTips,
    alt: "AI Sous Chef conversation",
  },
];

export function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left: Orange panel with carousel */}
      <div className="bg-orange-500 py-16 md:py-0 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-6 left-6">
          <Image
            src="/digero_logo.svg"
            alt="Digero"
            width={100}
            height={44}
            className="brightness-0 invert"
            priority
          />
        </div>
        <div className="w-full max-w-md px-4 mt-8 md:mt-0">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="!overflow-visible"
          >
            {heroScreenshots.map((shot) => (
              <SwiperSlide
                key={shot.src}
                style={{ width: "240px" }}
                className="!flex justify-center"
              >
                <PhoneFrame
                  src={shot.src}
                  alt={shot.alt}
                  width={240}
                  priority
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Right: White panel with copy + waitlist */}
      <div className="bg-white py-16 md:py-0 flex flex-col justify-center px-8 md:px-16">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-stone-950 leading-none">
          Your recipes.
          <br />
          All in one place.
        </h1>
        <p className="font-playfair italic text-xl md:text-2xl text-stone-500 mt-4">
          Save, plan, and cook — powered by AI.
        </p>
        <p className="text-lg text-stone-600 leading-relaxed mt-6 max-w-md">
          Save recipes from YouTube, websites, and physical cookbooks. Plan
          meals, generate shopping lists, and cook hands-free.
        </p>

        {/* Creator differentiator callout */}
        <a
          href="#creators"
          className="mt-6 inline-flex items-center gap-3 bg-stone-950 text-white rounded-full px-5 py-3 group hover:bg-stone-800 transition-colors"
        >
          <span className="bg-orange-500 text-white text-xs font-heading font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            Only app
          </span>
          <span className="text-sm font-medium">
            that pays creators 50% of revenue
          </span>
          <span className="text-orange-500 group-hover:translate-x-1 transition-transform">
            &rarr;
          </span>
        </a>

        {/* Waitlist form */}
        <div className="mt-8 max-w-md">
          <WaitlistForm variant="dark" />
          <p className="text-sm text-stone-400 mt-3">
            Join the beta. No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
