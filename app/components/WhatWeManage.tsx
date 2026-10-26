"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* ----------------------------- Icons ----------------------------- */

const iconPaths = {
  doc: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  box: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  chart: "M4 20V10m6 10V4m6 16v-7m4 7H2",
  search: "M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z",
  target:
    "M12 21a9 9 0 100-18 9 9 0 000 18zm0-5a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4z",
  image:
    "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  wand: "M15 4V2m0 14v-2m-7-5H6m14 0h-2m-2.6-4.6l1.4-1.4M15.4 13.4l1.4 1.4M4 20l9-9",
  expand: "M4 8V4h4M20 8V4h-4M4 16v4h4m12-4v4h-4",
  layers: "M12 3l9 5-9 5-9-5 9-5zm-9 9l9 5 9-5m-18 4l9 5 9-5",
  eyeOff:
    "M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8M9.9 5.1A9.8 9.8 0 0112 5c5 0 8.5 4 9.5 7a13 13 0 01-2.7 4M6.1 6.1A13 13 0 002.5 12c1 3 4.5 7 9.5 7 1.5 0 2.8-.3 4-.9",
  chat: "M8 10h8M8 14h5m-9 7l3-3h11a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v15z",
  mail: "M3 8l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z",
  headset:
    "M4 14v-2a8 8 0 0116 0v2M4 14h3v5H5a1 1 0 01-1-1v-4zm16 0h-3v5h2a1 1 0 001-1v-4z",
  globe:
    "M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18",
  database:
    "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  upload: "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0-12l-4 4m4-4l4 4",
  bolt: "M13 2L4 14h7l-1 8 9-12h-7l1-8z",
} as const;

type IconName = keyof typeof iconPaths;

function Icon({
  name,
  className = "w-4 h-4",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}

/* ----------------------------- Data ----------------------------- */

type Tone = "violet" | "orange" | "amber";

const tones: Record<
  Tone,
  { num: string; line: string; chip: string; btn: string; link: string }
> = {
  violet: {
    num: "text-violet-500",
    line: "bg-violet-300",
    chip: "bg-violet-50 text-violet-500",
    btn: "bg-violet-100 text-violet-600 group-hover/cta:bg-violet-500 group-hover/cta:text-white",
    link: "text-violet-700",
  },
  orange: {
    num: "text-orange",
    line: "bg-orange/40",
    chip: "bg-orange/10 text-orange",
    btn: "bg-orange/15 text-orange group-hover/cta:bg-orange group-hover/cta:text-white",
    link: "text-orange",
  },
  amber: {
    num: "text-amber-500",
    line: "bg-amber-300",
    chip: "bg-amber-50 text-amber-500",
    btn: "bg-amber-100 text-amber-600 group-hover/cta:bg-amber-500 group-hover/cta:text-white",
    link: "text-amber-600",
  },
};

type Item = {
  label: string;
  icon?: IconName;
  badge?: { text: string; className: string };
};

type Service = {
  title: string;
  description: string;
  image: string;
  tone: Tone;
  items: Item[];
};

// Images are in /public/services
// NOTE: the Virtual Assistant file is spelled "virtual-assisstant.png" in your folder.
const services: Service[] = [
  {
    title: "Data Entry Services",
    description:
      "Accurate and efficient data entry solutions for businesses of all sizes.",
    image: "/services/data-entry.png",
    tone: "violet",
    items: [
      { label: "Online Data Entry", icon: "globe" },
      { label: "Offline Data Entry", icon: "database" },
      { label: "Image Data Entry", icon: "image" },
      { label: "Data Capture Service", icon: "expand" },
    ],
  },
  {
    title: "E-commerce Platforms",
    description:
      "Complete product listing and catalog management across all major platforms.",
    image: "/services/ecommerce-platforms.png",
    tone: "orange",
    items: [
      { label: "Product Upload Listing", icon: "upload" },
      { label: "Catalog Management", icon: "box" },
      { label: "Shopify Optimization", icon: "bolt" },
      { label: "WooCommerce Setup", icon: "layers" },
    ],
  },
  {
    title: "Marketplaces",
    description: "Expert management for Amazon, eBay, Walmart, Etsy, and more.",
    image: "/services/marketplaces.png",
    tone: "amber",
    items: [
      { label: "Amazon", badge: { text: "a", className: "text-gray-900" } },
      { label: "eBay", badge: { text: "e", className: "text-blue-600" } },
      { label: "Walmart", badge: { text: "✳", className: "text-amber-500" } },
      { label: "Etsy", badge: { text: "E", className: "text-orange" } },
      { label: "Souq", badge: { text: "S", className: "text-blue-700" } },
    ],
  },
  {
    title: "Amazon Management",
    description:
      "Specialized Amazon selling solutions including listings, SEO, and PPC.",
    image: "/services/amazon-management.png",
    tone: "violet",
    items: [
      { label: "Listing Creation", icon: "doc" },
      { label: "Product Optimization", icon: "chart" },
      { label: "Amazon SEO", icon: "search" },
      { label: "PPC Management", icon: "target" },
    ],
  },
  {
    title: "Image Editing",
    description:
      "Professional image retouching and editing services for product photos.",
    image: "/services/image-editing.png",
    tone: "orange",
    items: [
      { label: "Image Retouching", icon: "wand" },
      { label: "Image Restoration", icon: "expand" },
      { label: "Image Manipulation", icon: "layers" },
      { label: "Watermark Removal", icon: "eyeOff" },
    ],
  },
  {
    title: "Virtual Assistant",
    description: "24/7 virtual assistant support for your e-commerce store.",
    image: "/services/virtual-assisstant.png",
    tone: "amber",
    items: [
      { label: "Chat Support", icon: "chat" },
      { label: "Email Support", icon: "mail" },
      { label: "Customer Service", icon: "headset" },
      { label: "Order Management", icon: "box" },
    ],
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
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

/* ------------------------------ Card ------------------------------ */

function ServiceCard({ service }: { service: Service }) {
  const t = tones[service.tone];

  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_2px_20px_-6px_rgba(30,10,50,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(30,10,50,0.22)]">
      {/* Background image */}
      <Image
        src={service.image}
        alt=""
        fill
        sizes="(min-width: 1280px) 32vw, (min-width: 768px) 48vw, 100vw"
        className="object-cover object-right transition-transform duration-700 group-hover:scale-105"
      />
      {/* Readability overlay: text on the left, image shows on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent sm:via-white/70" />

      {/* Compact content so each card stays wider than it is tall */}
      <div className="relative z-10 flex h-full min-h-[270px] flex-col p-6 sm:max-w-[68%] xl:max-w-[66%]">
        <h3 className="mb-1.5 text-xl font-semibold leading-tight text-plum">
          {service.title}
        </h3>
        <p className="mb-4 max-w-[17rem] text-[13px] leading-relaxed text-gray-500">
          {service.description}
        </p>

        {/* Items */}
        <ul className="mb-5 space-y-2">
          {service.items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2.5 text-[13px] text-gray-700"
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${
                  item.badge ? "bg-transparent text-sm font-bold" : t.chip
                } ${item.badge?.className ?? ""}`}
              >
                {item.badge ? (
                  item.badge.text
                ) : (
                  <Icon name={item.icon!} className="h-3.5 w-3.5" />
                )}
              </span>
              {item.label}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#"
          className="group/cta mt-auto inline-flex items-center gap-3 self-start"
        >
          <span className={`text-sm font-medium ${t.link}`}>Learn more</span>
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${t.btn}`}
          >
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5"
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
        </Link>
      </div>
    </article>
  );
}

/* ----------------------------- Section ----------------------------- */

export default function WhatWeManage() {
  return (
    <section
      id="manage"
      className="relative overflow-hidden bg-gradient-to-b from-white to-orange/[0.04] py-20 lg:py-28"
    >
      {/* Soft decorative arc */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full border border-orange/20"
      />

      <div className="relative mx-auto max-w-[95vw] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative mb-12 text-center lg:mb-16">
          <h2 className="mb-5 text-4xl font-semibold leading-tight tracking-tight text-plum sm:text-5xl lg:text-[3.4rem]">
            What We Manage
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-500 lg:text-lg">
            Comprehensive management services across data entry, e-commerce
            platforms, marketplaces, and more. We handle the complexity so you
            can focus on growth.
          </p>
        </div>

        {/* Cards grid: 1 per row on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 150}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
