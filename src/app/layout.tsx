import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digero — Save & Cook Recipes | AI-Powered Recipe Management",
  description:
    "Save recipes from YouTube, websites, and physical cookbooks. Plan meals, generate shopping lists, and cook hands-free — all powered by AI.",
  openGraph: {
    title: "Digero — Your recipes. All in one place.",
    description:
      "Save recipes from YouTube, websites, and physical cookbooks. Plan meals, generate shopping lists, and cook hands-free — all powered by AI.",
    images: ["/organized/hero/recipe-detail-top.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${playfairDisplay.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
