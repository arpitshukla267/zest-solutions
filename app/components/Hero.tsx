"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import CountUp from "./ui/CountUp";

const ORANGE = "#EF5B15";

/* ----------------------------- Data ----------------------------- */

const iconProps = {
  className: "h-8 w-8",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

const stats: {
  end: number;
  suffix: string;
  label: string;
  icon: ReactNode;
}[] = [
  {
    end: 1200,
    suffix: "+",
    label: "Businesses served",
    // office building
    icon: (
      <svg {...iconProps}>
        <path d="M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18z" />
        <path d="M6 12H4a2 2 0 00-2 2v6a2 2 0 002 2h2" />
        <path d="M18 9h2a2 2 0 012 2v9a2 2 0 01-2 2h-2" />
        <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
      </svg>
    ),
  },
  {
    end: 8,
    suffix: "+",
    label: "Years Experience",
    // award
    icon: (
      <svg {...iconProps}>
        <path d="M12 15a6 6 0 100-12 6 6 0 000 12zM8.2 13.9L7 22l5-3 5 3-1.2-8.1" />
      </svg>
    ),
  },
  {
    end: 95,
    suffix: "%",
    label: "Satisfaction",
    // thumbs up
    icon: (
      <svg {...iconProps}>
        <path d="M7 10v12" />
        <path d="M15 5.88L14 10h5.83a2 2 0 011.92 2.56l-2.34 8A2 2 0 0117.5 22H4a2 2 0 01-2-2v-8a2 2 0 012-2h2.76a2 2 0 001.79-1.11L12 2a3.13 3.13 0 013 3.88z" />
      </svg>
    ),
  },
  {
    end: 24,
    suffix: "×7",
    label: "Support",
    // headset
    icon: (
      <svg {...iconProps}>
        <path d="M4 14v-2a8 8 0 0116 0v2M4 14h3v5H5a1 1 0 01-1-1v-4zM20 14h-3v5h2a1 1 0 001-1v-4zM20 19a3 3 0 01-3 3h-3" />
      </svg>
    ),
  },
];

/* --------------------------- Animations --------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.7, ease: "easeOut" },
  }),
};

/* ------------------------------ Hero ------------------------------ */

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[760px] overflow-hidden bg-[#FAF6F0]">
      {/* Background image */}
      <Image
        src="/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover object-bottom"
        aria-hidden="true"
      />

      {/* Text content (sits above the cards) */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-32 lg:px-8 lg:pt-32">
        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-manrope text-4xl font-bold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
        >
          Turn Your Business
          <br />
          into a <span style={{ color: ORANGE }}>Brand That Sells</span>
          <span style={{ color: ORANGE }}>.</span>
        </motion.h1>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-poppins mt-5 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg"
        >
          Build your presence across marketplaces, generate qualified B2B leads,
          and manage the commerce behind your growth.
        </motion.p>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-7 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="#contact"
            className="font-poppins inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(239,91,21,0.7)] transition-transform duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: ORANGE }}
          >
            Talk to an Expert
            <svg
              className="h-4 w-4"
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
          <Link
            href="#services"
            className="font-poppins inline-flex items-center rounded-full border border-neutral-300 bg-white/60 px-8 py-3.5 text-[15px] font-semibold text-neutral-900 backdrop-blur transition-colors duration-200 hover:bg-white"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>

      {/* Stats pinned to the bottom, on top of the image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        className="absolute inset-x-0 bottom-6 z-10 flex justify-center px-6 lg:bottom-8"
      >
        <div className="grid w-full max-w-5xl grid-cols-2 gap-x-6 gap-y-6 sm:flex sm:w-auto sm:items-center sm:gap-0">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="mx-10 hidden h-12 w-px bg-neutral-300 sm:block lg:mx-12"
                />
              )}
              <div className="flex items-center gap-3 text-left text-neutral-900">
                <span className="text-neutral-800">{s.icon}</span>
                <div>
                  <div className="font-poppins text-2xl font-semibold leading-none sm:text-[1.65rem]">
                    <CountUp end={s.end} suffix={s.suffix} />
                  </div>
                  <div className="font-poppins mt-0.5 text-sm leading-tight text-neutral-500">
                    {s.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
