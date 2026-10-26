"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* ----------------------------- Data ----------------------------- */

const marketingServices = [
  {
    title: "Content Writing Services",
    description:
      "Professional content creation across blogs, articles, and web copy.",
    iconPath:
      "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    accent: "from-blue-500 to-blue-600",
  },
  {
    title: "Social Media Marketing",
    description:
      "Build brand presence and engage audiences across all social platforms.",
    iconPath:
      "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z",
    accent: "from-orange to-orange-light",
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing solutions to drive growth and conversions.",
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    accent: "from-green-500 to-emerald-600",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Expert SEO services to boost your online visibility and rankings.",
    iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    accent: "from-purple-500 to-violet-600",
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

export default function WeMarket() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] opacity-[0.04]"
      >
        <svg viewBox="0 0 600 600" fill="none">
          <path
            d="M300 50 Q500 200 400 400 Q300 550 100 400 Q0 250 300 50Z"
            stroke="#E85D26"
            strokeWidth="1"
          />
          <path
            d="M300 100 Q450 220 370 370 Q300 490 150 370 Q60 260 300 100Z"
            stroke="#2D1B4E"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[95vw] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <h2 className="mb-4 text-4xl font-bold leading-tight text-plum lg:text-5xl">
            We <span className="text-gradient">Market</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-500 lg:text-lg">
            Drive growth with our comprehensive marketing and content solutions
            designed to boost your online presence.
          </p>
        </div>

        {/* Cards: each one reveals on its own as it scrolls into view */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {marketingServices.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 120}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-warm-gray p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_-14px_rgba(30,10,50,0.20)]">
                {/* Accent bar */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${service.accent} transition-transform duration-500 group-hover:scale-x-100`}
                />

                {/* Icon + index */}
                <div className="mb-6 flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-plum shadow-sm transition-all duration-300 group-hover:bg-gradient-to-br group-hover:text-white group-hover:shadow-md ${service.accent}`}
                  >
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d={service.iconPath} />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold tabular-nums text-gray-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold leading-snug text-plum">
                  {service.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>

                <Link
                  href="#"
                  className="group/link mt-auto inline-flex items-center self-start text-sm font-semibold text-orange transition-colors hover:text-plum"
                >
                  Learn More
                  <svg
                    className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1"
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
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="mb-4 text-gray-500">
            Ready to accelerate your marketing strategy?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full bg-orange px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-light"
          >
            Get Started Today
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
