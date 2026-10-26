import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Background images live in /public.
 * Change the extension here if yours isn't .png (e.g. ".webp", ".jpg").
 * Spaces in file names are URL-encoded (%20).
 */
const B2B_BG = "/B2B-Marketing.png";
const B2C_BG = "/B2C-E-commerce.png";

type Service = { label: string; icon: ReactNode };

const iconProps = {
  className: "w-[18px] h-[18px] shrink-0",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

const Icons = {
  building: (
    <svg {...iconProps}>
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  cart: (
    <svg {...iconProps}>
      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 2.3c-.6.6-.2 1.7.7 1.7H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  ),
  phone: (
    <svg {...iconProps}>
      <path d="M3 5a2 2 0 012-2h3.3a1 1 0 011 .8l1 4.5a1 1 0 01-.5 1.1l-2.3 1.4a11 11 0 005.5 5.5l1.4-2.3a1 1 0 011.1-.5l4.5 1a1 1 0 01.8 1V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z" />
    </svg>
  ),
  users: (
    <svg {...iconProps}>
      <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M10 11a4 4 0 100-8 4 4 0 000 8zM21 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8" />
    </svg>
  ),
  megaphone: (
    <svg {...iconProps}>
      <path d="M3 11v2a1 1 0 001 1h2l5 4V6L6 10H4a1 1 0 00-1 1zM15 8.5a5 5 0 010 7M18 6a8.5 8.5 0 010 12" />
    </svg>
  ),
  calendar: (
    <svg {...iconProps}>
      <path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
    </svg>
  ),
  user: (
    <svg {...iconProps}>
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
  ),
  chart: (
    <svg {...iconProps}>
      <path d="M4 20V10m6 10V4m6 16v-7m4 7H2" />
    </svg>
  ),
  card: (
    <svg {...iconProps}>
      <path d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zM3 10h18M7 15h3" />
    </svg>
  ),
};

const b2bServices: Service[] = [
  { label: "Telemarketing", icon: Icons.phone },
  { label: "Field Marketing", icon: Icons.users },
  { label: "Brand Promotions", icon: Icons.megaphone },
  { label: "Event Management", icon: Icons.calendar },
];

const b2cServices: Service[] = [
  { label: "Account Management", icon: Icons.user },
  { label: "SEO Optimization", icon: Icons.chart },
  { label: "Advertising", icon: Icons.megaphone },
  { label: "Payment Reconciliation", icon: Icons.card },
];

type PanelProps = {
  bg: string;
  icon: ReactNode;
  iconClass: string;
  title: ReactNode;
  description: string;
  services: Service[];
  cta: string;
  href: string;
  accent: string; // underline color under the CTA
  overlay: string; // gradient to keep text legible over the image
};

function Panel({
  bg,
  icon,
  iconClass,
  title,
  description,
  services,
  cta,
  href,
  accent,
  overlay,
}: PanelProps) {
  return (
    <div className="relative isolate overflow-hidden min-h-[440px] lg:min-h-[480px] flex">
      {/* Background image from /public */}
      <Image
        src={bg}
        alt=""
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-right -z-20"
        priority={false}
      />
      {/* Readability overlay (text side only) */}
      <div className={`absolute inset-0 -z-10 ${overlay}`} />

      <div className="relative z-10 flex flex-col p-6 sm:p-8 lg:p-10 w-full">
        {/* Icon tile */}
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-md border text-white mb-5 [&>svg]:w-6 [&>svg]:h-6 ${iconClass}`}
        >
          {icon}
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-white leading-[1.15] tracking-tight mb-3">
          {title}
        </h3>

        <p className="text-white/85 text-sm lg:text-base leading-relaxed max-w-[26rem] mb-5">
          {description}
        </p>

        {/* Service pills */}
        <ul className="flex flex-wrap gap-2.5 max-w-[34rem] mb-6">
          {services.map((s) => (
            <li
              key={s.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              {s.icon}
              {s.label}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-auto">
          <Link
            href={href}
            className="group inline-flex flex-col text-white font-semibold text-base"
          >
            <span className="inline-flex items-center gap-3">
              {cta}
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
            <span
              className={`mt-2 h-0.5 w-12 rounded-full transition-all duration-300 group-hover:w-full ${accent}`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function DualPower() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 lg:mb-16 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-plum tracking-tight leading-tight mb-5">
          Dual Power <span className="text-orange">Solutions</span>
        </h2>
        <p className="text-base lg:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          One partner for all your business needs. Whether you&apos;re selling
          to businesses or consumers, we have the expertise to help you succeed.
        </p>
      </div>

      {/* Split card */}
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 rounded-[2rem] overflow-hidden shadow-2xl shadow-plum/20">
          <Panel
            bg={B2B_BG}
            icon={Icons.building}
            iconClass="bg-white/10 border-white/20 text-purple-200"
            title={
              <>
                B2B Marketing
                <br />
                Services
              </>
            }
            description="Strategic marketing, sales, brand activation, recruitment, and offline advertising solutions for enterprise clients."
            services={b2bServices}
            cta="Explore B2B Solutions"
            href="#"
            accent="bg-purple-400"
            overlay="bg-gradient-to-r from-black/30 via-transparent to-transparent"
          />
          <Panel
            bg={B2C_BG}
            icon={Icons.cart}
            iconClass="bg-white/15 border-white/25"
            title={
              <>
                B2C E-commerce
                <br />
                Solutions
              </>
            }
            description="Complete marketplace management across Amazon, Flipkart, Myntra, Nykaa, and more for consumer brands."
            services={b2cServices}
            cta="Explore B2C Solutions"
            href="#"
            accent="bg-yellow-300"
            overlay="bg-gradient-to-r from-black/15 via-transparent to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
