import Link from "next/link";
import Image from "next/image";

const iconProps = {
  className: "h-4 w-4 shrink-0 text-orange",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

const linkCls =
  "flex items-center gap-2.5 text-sm text-white/60 transition-colors duration-200 hover:text-white";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#2D1B4E]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Logo + description */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Zest Solutions"
                width={160}
                height={48}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
              Your trusted digital growth partner providing comprehensive B2B
              and B2C solutions.
            </p>
          </div>

          {/* Contact */}
          <ul className="space-y-3">
            <li>
              <Link href="tel:+916394239351" className={linkCls}>
                <svg {...iconProps}>
                  <path d="M3 5a2 2 0 012-2h3.3a1 1 0 011 .8l1 4.5a1 1 0 01-.5 1.1l-2.3 1.4a11 11 0 005.5 5.5l1.4-2.3a1 1 0 011.1-.5l4.5 1a1 1 0 01.8 1V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z" />
                </svg>
                +91 63942 39351
              </Link>
            </li>
            <li>
              <Link href="mailto:info@zestsolutions.in" className={linkCls}>
                <svg {...iconProps}>
                  <path d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm0 0l9 6 9-6" />
                </svg>
                info@zestsolutions.in
              </Link>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <p className="mt-8 border-t border-white/10 pt-5 text-xs text-white/40">
          © {new Date().getFullYear()} Zest Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
