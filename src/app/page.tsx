import { HackathonBanner } from "@/components/sections/HackathonBanner";
import { Hero } from "@/components/sections/Hero";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { FeaturesCarousel } from "@/components/sections/FeaturesCarousel";
import { FeatureSave } from "@/components/sections/FeatureSave";
import { FeatureScan } from "@/components/sections/FeatureScan";
import { FeatureYouTube } from "@/components/sections/FeatureYouTube";
import { FeatureAIChef } from "@/components/sections/FeatureAIChef";
import { FeatureCookMode } from "@/components/sections/FeatureCookMode";
import { FeatureNutrition } from "@/components/sections/FeatureNutrition";
import { PullQuote } from "@/components/sections/PullQuote";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CreatorEconomy } from "@/components/sections/CreatorEconomy";
import { CreatorTools } from "@/components/sections/CreatorTools";
import { Pricing } from "@/components/sections/Pricing";
import { EarlyAccessWaitlist } from "@/components/sections/EarlyAccessWaitlist";
import { FullGallery } from "@/components/sections/FullGallery";
import { HackathonStory } from "@/components/sections/HackathonStory";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <HackathonBanner />
      <Hero />
      <ProblemStatement />
      <FeaturesCarousel />
      <FeatureSave />
      <FeatureScan />
      <FeatureYouTube />
      <FeatureAIChef />
      <FeatureCookMode />
      <FeatureNutrition />
      <PullQuote />
      <HowItWorks />
      <CreatorEconomy />
      <CreatorTools />
      <Pricing />
      <EarlyAccessWaitlist />
      <FullGallery />
      <HackathonStory />
      <Footer />
    </main>
  );
}
