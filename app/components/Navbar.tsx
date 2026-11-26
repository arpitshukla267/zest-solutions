"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#manage", label: "We Manage" },
  { href: "#solutions", label: "Solutions" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-sm border-black/[0.06] shadow-[0_8px_30px_-18px_rgba(0,0,0,0.25)]"
          : "backdrop-blur-xl border-transparent shadow-none"
      }`}
    >
      {/* Gradient background (from reference image) */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500 ${
          scrolled ? "opacity-95" : "opacity-80"
        }`}
        style={{
          background:
            "linear-gradient(90deg, #EBE3DF 0%, #F6EEEA 28%, #FFFCF8 50%, #F6EEEA 72%, #EDE5E1 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "py-3" : "py-5 lg:py-6"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Zest Solutions Logo"
              height={100}
              width={200}
              className={`object-contain transition-all duration-500 ${
                scrolled ? "h-16 -my-4 -ml-4 w-auto" : "h-16 -my-4 -ml-4 w-auto"
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-gray-700 hover:text-plum transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex px-6 py-2.5 bg-orange text-white text-sm font-semibold rounded-full shadow-[0_10px_24px_-10px_rgba(239,91,21,0.7)] hover:bg-orange-light transition-colors"
          >
            Get Started
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
