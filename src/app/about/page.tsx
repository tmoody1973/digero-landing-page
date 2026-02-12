import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About the Developer — Digero",
  description:
    "Meet Tarik Moody — foodie, technologist, podcast host, former James Beard judge, and the creator of Digero.",
};

const credentials = [
  "Co-host, This Bites culinary podcast (Radio Milwaukee)",
  "Former James Beard Award Judge",
  "Director of Innovation & Strategy, 88Nine Radio Milwaukee",
  "Howard University School of Architecture graduate",
  "Creator of HYFIN, Radio Milwaukee's urban alternative channel",
  "Milwaukee City Plan Commissioner",
  "U.S. Army Reserves veteran (Captain)",
];

export default function About() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero banner */}
      <section className="bg-stone-950 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/"
            className="text-sm text-orange-500 hover:text-orange-400 font-medium"
          >
            &larr; Back to Home
          </Link>

          <div className="mt-10 grid md:grid-cols-5 gap-10 md:gap-16 items-center">
            <div className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden border-4 border-stone-800">
                <Image
                  src="/tarik-moody.jpg"
                  alt="Tarik Moody"
                  width={1024}
                  height={683}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <p className="text-xs font-heading font-bold uppercase tracking-widest text-orange-500">
                About the Developer
              </p>
              <h1 className="font-heading text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mt-2">
                Tarik Moody
              </h1>
              <p className="font-playfair italic text-xl md:text-2xl text-stone-400 mt-3">
                Foodie. Technologist. Podcast host. Builder.
              </p>
              <p className="mt-6 text-lg text-stone-300 leading-relaxed">
                The creator of Digero isn&apos;t a Silicon Valley startup founder
                &mdash; he&apos;s a Milwaukee foodie who got tired of losing
                recipes in screenshots and bookmarks. So he built the app he
                wished existed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-10 text-stone-700 leading-relaxed">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-stone-950 mb-4">
              A Life at the Intersection of Food &amp; Technology
            </h2>
            <p>
              Tarik Moody is the Director of Innovation &amp; Strategy at{" "}
              <strong className="text-stone-950">88Nine Radio Milwaukee</strong>,
              where he&apos;s spent nearly two decades pushing public radio into the
              digital future. He created{" "}
              <strong className="text-stone-950">Rhythm Lab Radio</strong>, a
              nationally syndicated music show blending jazz, electronic, hip-hop,
              and soul, and spearheaded the launch of{" "}
              <strong className="text-stone-950">HYFIN</strong>, Radio
              Milwaukee&apos;s urban alternative channel that launched on Juneteenth
              2022 with a $450,000 Corporation for Public Broadcasting grant.
            </p>
            <p className="mt-4">
              But before he was a radio innovator, Tarik almost became a chef. When
              choosing a college path, it was between architecture school and
              culinary school. He chose{" "}
              <strong className="text-stone-950">
                Howard University&apos;s School of Architecture
              </strong>{" "}
              in Washington, D.C. (Class of 1996), where a professor described
              architecture as &ldquo;frozen music&rdquo; &mdash; an analogy that
              would shape his entire career of creative crossovers.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-stone-950 mb-4">
              The Food Connection
            </h2>
            <p>
              Tarik co-hosts{" "}
              <strong className="text-stone-950">This Bites</strong>, Radio
              Milwaukee&apos;s weekly culinary podcast, alongside{" "}
              <strong className="text-stone-950">Ann Christenson</strong> &mdash;
              Milwaukee Magazine&apos;s longtime food critic and dining writer
              (covering the scene since 1997). Together, they explore
              Milwaukee&apos;s restaurant culture, from new openings to the stories
              behind the city&apos;s best dishes. The podcast airs on NPR, Spotify,
              Apple Podcasts, and iHeart.
            </p>
            <p className="mt-4">
              His culinary style? <strong className="text-stone-950">Korean soul food fusion</strong>.
              Influenced by a close Korean-American friend and the soul food his
              mother made growing up, he creates dishes that bridge two traditions.
              As he puts it: &ldquo;Over time, I got good at cooking Korean, and
              there&apos;s something magical about it.&rdquo;
            </p>
            <p className="mt-4">
              Tarik served as a{" "}
              <strong className="text-stone-950">James Beard Award Judge</strong>,
              one of the most prestigious recognitions in the American food world.
            </p>
          </div>

          {/* Wisconsin Foodie video */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-stone-950 mb-4">
              Watch: Wisconsin Foodie Cooking Competition
            </h2>
            <p className="mb-6">
              Tarik competed on PBS Wisconsin&apos;s{" "}
              <em>Wisconsin Foodie: At the Market</em>, where contestants were
              given $60 and 60 minutes to shop at the Dane County Farmers&apos;
              Market, then 60 minutes to cook in the kitchen of Madison&apos;s
              award-winning restaurant L&apos;Etoile. He made &ldquo;Shrimp of the
              Woods&rdquo; &mdash; a Korean soul food dish with fried mushrooms and
              a sweet-and-sour ground cherry sauce.
            </p>
            <div className="aspect-video rounded-2xl overflow-hidden bg-stone-100">
              <iframe
                src="https://www.youtube.com/embed/htzA3UNZb5c"
                title="Tarik Moody on Wisconsin Foodie"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-stone-950 mb-4">
              From Architecture to AI
            </h2>
            <p>
              After Howard, Tarik spent a decade as a professional architect,
              working at the National Institutes of Health, Northwest Airlines
              (designing the Detroit Terminal), and RSP Architects in Minneapolis.
              In 2006, he made the leap to public radio when 88Nine recruited him
              to help launch the station.
            </p>
            <p className="mt-4">
              His architecture background followed him &mdash; in 2021, he was
              appointed to{" "}
              <strong className="text-stone-950">
                Milwaukee&apos;s City Plan Commission
              </strong>
              , where his design expertise informs decisions on zoning, development,
              and the built environment.
            </p>
            <p className="mt-4">
              More recently, Tarik has been building AI tools for civic good:{" "}
              <strong className="text-stone-950">Cream City Concierge</strong> (a
              Milwaukee-themed AI city guide),{" "}
              <strong className="text-stone-950">Milwaukee Budget Brewmaster</strong>{" "}
              (making public finance accessible through AI), and{" "}
              <strong className="text-stone-950">MKEdev</strong> (an AI-powered city
              development intelligence platform). Digero is the latest &mdash; and
              most personal &mdash; of these projects.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-stone-950 mb-4">
              Why Digero?
            </h2>
            <p>
              Digero was born out of Tarik&apos;s own frustration as a home cook.
              Recipes scattered across bookmarks, screenshots, YouTube watch-later
              lists, and scribbled notes on napkins. No app brought it all together
              &mdash; and none of them gave anything back to the creators whose
              recipes make cooking culture what it is.
            </p>
            <p className="mt-4">
              Digero is the first recipe app that{" "}
              <strong className="text-stone-950">
                splits 50% of subscription revenue with creators
              </strong>
              . Because the people who make the recipes you love deserve to be paid.
            </p>
          </div>

          {/* Credentials */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-stone-950 mb-4">
              Credentials
            </h2>
            <ul className="space-y-2">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1 shrink-0">&#9670;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Recognition */}
          <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
            <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-stone-950 mb-3">
              Recognition
            </h3>
            <ul className="space-y-2 text-stone-600">
              <li>
                <strong className="text-stone-950">BizTimes Milwaukee</strong> &mdash;
                30 People Shaping Milwaukee&apos;s Future (2025)
              </li>
              <li>
                <strong className="text-stone-950">Creative Mornings MKE</strong> &mdash;
                &ldquo;A Series of Cross Overs&rdquo; speaker
              </li>
              <li>
                <strong className="text-stone-950">Milwaukee Independent</strong> &mdash;
                &ldquo;Investing in Milwaukee: Creator, Connector, Innovator&rdquo;
              </li>
              <li>
                <strong className="text-stone-950">United States Veterans&apos; Artists Alliance</strong> &mdash;
                Member
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <p className="font-playfair italic text-xl text-stone-500 mb-6">
              Ready to cook with Digero?
            </p>
            <Link
              href="/"
              className="inline-block bg-orange-500 text-white font-heading font-bold uppercase tracking-wide text-sm px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Join the Exclusive Beta
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
