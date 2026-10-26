"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* ----------------------------- Data ----------------------------- */

const iconClass = "h-6 w-6";

function ServiceIcon({ path }: { path: string }) {
  return (
    <svg
      className={iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

const b2cServices = [
  {
    title: "Account Management",
    description:
      "Comprehensive management across Amazon, Flipkart, Myntra, Nykaa, Ajio, and more.",
    items: ["24/7 Monitoring", "Inventory Management", "Order Processing"],
    iconPath:
      "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Platform Onboarding",
    description:
      "Streamlined onboarding with expert guidance throughout the journey.",
    items: ["Documentation Support", "Quick Setup", "Compliance Handling"],
    iconPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    title: "Store Setup & Branding",
    description:
      "Professional store design capturing your unique brand identity.",
    items: ["Brand Store Design", "Visual Merchandising", "Content Strategy"],
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Payment Reconciliation",
    description:
      "Accurate tracking across multiple platforms for financial management.",
    items: ["Payment Tracking", "Dispute Resolution", "Financial Reporting"],
    iconPath:
      "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Platform Advertising",
    description:
      "Targeted advertising campaigns across all major e-commerce platforms.",
    items: ["Sponsored Ads", "Display Campaigns", "Budget Optimization"],
    iconPath:
      "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
  },
  {
    title: "Organic Growth & SEO",
    description:
      "Search optimization to boost your product visibility organically.",
    items: ["Keyword Research", "Listing SEO", "Content Optimization"],
    iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    title: "Brand Documentation",
    description: "Complete brand documentation and registry across platforms.",
    items: ["Brand Registry", "IP Protection", "Brand Guidelines"],
    iconPath: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zm-3 9l2 2 4-4",
  },
  {
    title: "E-commerce Consultation",
    description:
      "Expert advice and strategy to scale your e-commerce business.",
    items: ["Growth Strategy", "Market Analysis", "Performance Audit"],
    iconPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
];

/* ------------------------ Scroll reveal ------------------------ */

function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={`h-full transition-all duration-700 ease-out motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

/* ----------------------------- Section ----------------------------- */

export default function B2CServices() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 lg:py-20">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] opacity-[0.04]"
      >
        <svg viewBox="0 0 500 500" fill="none">
          <rect
            x="50"
            y="50"
            width="400"
            height="400"
            rx="40"
            stroke="#E85D26"
            strokeWidth="1"
          />
          <rect
            x="100"
            y="100"
            width="300"
            height="300"
            rx="30"
            stroke="#E85D26"
            strokeWidth="0.5"
          />
          <rect
            x="150"
            y="150"
            width="200"
            height="200"
            rx="20"
            stroke="#2D1B4E"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[95vw] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <h2 className="mb-4 text-4xl font-bold leading-tight text-plum lg:text-5xl">
            E-commerce <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-500 lg:text-lg">
            Unlock your e-commerce potential across all major marketplaces with
            our comprehensive management and optimization services.
          </p>
        </div>

        {/* Cards: each one reveals on its own as it scrolls into view */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {b2cServices.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 120}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_2px_16px_-6px_rgba(30,10,50,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-orange/30 hover:shadow-[0_20px_40px_-14px_rgba(30,10,50,0.20)]">
                {/* Top accent line */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-orange to-orange-light transition-transform duration-500 group-hover:scale-x-100"
                />

                {/* Icon + index */}
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange/10 to-orange/5 text-orange transition-all duration-300 group-hover:from-orange group-hover:to-orange-light group-hover:text-white">
                    <ServiceIcon path={service.iconPath} />
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-bold leading-snug text-plum">
                  {service.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>

                {/* Items */}
                <ul className="mt-auto space-y-2 border-t border-gray-100 pt-4">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[13px] text-gray-600"
                    >
                      <svg
                        className="h-4 w-4 shrink-0 text-orange"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full bg-orange px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-light"
          >
            Explore All B2C Services
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
