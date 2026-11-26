"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

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
  progress: MotionValue<number>;
  tag: string;
  bg: string;
  icon: ReactNode;
  title: ReactNode;
  description: string;
  services: Service[];
  cta: string;
  href: string;
  accent: string;
  overlay: string;
};

function Panel({
  progress,
  tag,
  bg,
  icon,
  title,
  description,
  services,
  cta,
  href,
  accent,
  overlay,
}: PanelProps) {
  // Whole card scales up (width + height together) as you scroll
  const scale = useTransform(progress, [0, 1], [0.8, 1]);

  // Heading + description rise from the bottom as the card grows
  const headY = useTransform(progress, [0.1, 0.7], [60, 0]);
  const headOpacity = useTransform(progress, [0.1, 0.6], [0, 1]);
  const descY = useTransform(progress, [0.2, 0.85], [60, 0]);
  const descOpacity = useTransform(progress, [0.2, 0.75], [0, 1]);

  return (
    <motion.div
      style={{ scale }}
      className="group relative isolate flex min-h-[480px] overflow-hidden rounded-lg shadow-2xl shadow-plum/20 will-change-transform lg:min-h-[520px]"
    >
      {/* Background image */}
      <Image
        src={bg}
        alt=""
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="-z-20 object-cover object-right transition-transform duration-700 group-hover:scale-105"
      />

      {/* Readability overlays */}
      <div className={`absolute inset-0 -z-10 ${overlay}`} />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-black/45 to-transparent" />

      <div className="relative z-10 flex w-full flex-col p-6 sm:p-8 lg:p-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white backdrop-blur-md [&>svg]:h-6 [&>svg]:w-6">
            {icon}
          </div>
          <span className="text-sm font-semibold tracking-[0.25em] text-white/60">
            {tag}
          </span>
        </div>

        <motion.h3
          style={{ y: headY, opacity: headOpacity }}
          className="mb-3 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.3rem]"
        >
          {title}
        </motion.h3>

        <motion.p
          style={{ y: descY, opacity: descOpacity }}
          className="mb-6 max-w-[28rem] text-sm leading-relaxed text-white/90 lg:text-base"
        >
          {description}
        </motion.p>

        <ul className="mb-8 flex max-w-[34rem] flex-wrap gap-2.5">
          {services.map((s) => (
            <li
              key={s.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/25"
            >
              {s.icon}
              {s.label}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Link
            href={href}
            className="group/cta inline-flex flex-col text-base font-semibold text-white"
          >
            <span className="inline-flex items-center gap-3">
              {cta}
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover/cta:translate-x-1.5"
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
              className={`mt-2 h-0.5 w-12 rounded-full transition-all duration-300 group-hover/cta:w-full ${accent}`}
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function DualPower() {
  const gridRef = useRef<HTMLDivElement>(null);

  // 0 when the cards enter the screen -> 1 when they are fully in view
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start 95%", "start 30%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      {/* Header */}
      <div className="mx-auto mb-12 max-w-7xl px-6 text-center lg:mb-12 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-5 text-4xl font-bold leading-tight tracking-tight text-plum sm:text-5xl lg:text-6xl"
        >
          Dual Power <span className="text-orange">Solutions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-base leading-relaxed text-gray-500 lg:text-lg"
        >
          One partner for all your business needs. Whether you&apos;re selling
          to businesses or consumers, we have the expertise to help you succeed.
        </motion.p>
      </div>

      {/* Two separate cards */}
      <div className="mx-auto max-w-[94vw] px-4 sm:px-6">
        <div ref={gridRef} className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Panel
            progress={progress}
            tag="01"
            bg={B2B_BG}
            icon={Icons.building}
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
            overlay="bg-gradient-to-r from-black/60 via-black/25 to-transparent"
          />
          <Panel
            progress={progress}
            tag="02"
            bg={B2C_BG}
            icon={Icons.cart}
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
            overlay="bg-gradient-to-r from-black/50 via-black/20 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
