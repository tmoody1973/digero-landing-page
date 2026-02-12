import Image from "next/image";

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
            <a
              href="https://gist.githubusercontent.com/tmoody1973/4d2932325e2490d1e2657c2bc75d7821/raw/privacy-policy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              Privacy Policy
            </a>
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
