import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-stone-950 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <Image
              src="/digero_logo.svg"
              alt="Digero"
              width={120}
              height={53}
              className="brightness-0 invert"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-stone-400">
            <Link
              href="/about"
              className="hover:text-orange-500 transition-colors"
            >
              About the Developer
            </Link>
            <Link
              href="/privacy"
              className="hover:text-orange-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="mailto:tarikjmoody@gmail.com"
              className="hover:text-orange-500 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-800 text-center text-sm text-stone-500">
          Built by Tarik Moody for RevenueCat Shipyard 2026
        </div>
      </div>
    </footer>
  );
}
