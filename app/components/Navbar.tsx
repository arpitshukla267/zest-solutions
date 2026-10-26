import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              height={100}
              width={200}
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-plum transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-gray-700 hover:text-plum transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#manage"
              className="text-sm font-medium text-gray-700 hover:text-plum transition-colors"
            >
              We Manage
            </Link>
            <Link
              href="#solutions"
              className="text-sm font-medium text-gray-700 hover:text-plum transition-colors"
            >
              Solutions
            </Link>
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex px-5 py-2.5 bg-orange text-white text-sm font-semibold rounded-full hover:bg-orange-light transition-colors"
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
