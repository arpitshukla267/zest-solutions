import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-plum border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-orange flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-sm tracking-tight leading-none">
                  ZEST
                </span>
                <span className="font-bold text-white text-sm tracking-tight leading-none">
                  SOLUTIONS
                </span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Your trusted digital growth partner providing comprehensive B2B
              and B2C solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">We Manage</h4>
            <ul className="space-y-3">
              {[
                "Data Entry Services",
                "E-commerce Platforms",
                "Marketplaces",
                "Amazon Management",
                "Image Editing",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/40 text-sm hover:text-orange transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-5">Solutions</h4>
            <ul className="space-y-3">
              {[
                "B2B Marketing",
                "B2C E-commerce",
                "SEO Optimization",
                "PPC Management",
                "Virtual Assistant",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/40 text-sm hover:text-orange transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="tel:+916394239351"
                  className="text-white/40 text-sm hover:text-orange transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +91 6394239351
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/40 text-sm hover:text-orange transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@zestsolutions.in
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2024 Zest Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-white/30 text-sm hover:text-orange transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/30 text-sm hover:text-orange transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
