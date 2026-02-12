"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/90 backdrop-blur-md border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/digero_logo.svg"
            alt="Digero"
            width={80}
            height={35}
            className="brightness-0 invert"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/proposal"
            className="text-sm text-stone-300 hover:text-white transition-colors"
          >
            Hackathon Proposal
          </Link>
          <Link
            href="/about"
            className="text-sm text-stone-300 hover:text-white transition-colors"
          >
            About the Developer
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-stone-300 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/#creators"
            className="text-sm text-orange-500 hover:text-orange-400 transition-colors font-medium"
          >
            For Creators
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M4 4L16 16M16 4L4 16" />
            ) : (
              <path d="M3 5H17M3 10H17M3 15H17" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-stone-950 border-t border-stone-800 px-6 py-4 space-y-3">
          <Link
            href="/proposal"
            onClick={() => setOpen(false)}
            className="block text-sm text-stone-300 hover:text-white"
          >
            Hackathon Proposal
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="block text-sm text-stone-300 hover:text-white"
          >
            About the Developer
          </Link>
          <Link
            href="/privacy"
            onClick={() => setOpen(false)}
            className="block text-sm text-stone-300 hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link
            href="/#creators"
            onClick={() => setOpen(false)}
            className="block text-sm text-orange-500 hover:text-orange-400 font-medium"
          >
            For Creators
          </Link>
        </div>
      )}
    </nav>
  );
}
