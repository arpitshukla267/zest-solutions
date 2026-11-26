"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const iconProps = {
  className: "h-6 w-6",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

const points: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "Strategic Approach",
    body: "Holistic approach to campaigns ensuring targeted messages across best-performing channels with ongoing strategic planning.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.2" />
      </svg>
    ),
  },
  {
    title: "Proven Experience",
    body: "Team of analysts with up-to-date technology and industry trends ensuring greatest ROI from your marketing investment.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 15a6 6 0 100-12 6 6 0 000 12zM8.2 13.9L7 22l5-3 5 3-1.2-8.1" />
      </svg>
    ),
  },
  {
    title: "Data-Driven Results",
    body: "Clear, measurable results with key performance metrics tracking. Average 3x revenue growth for our clients.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 20V13m6 7V9m6 11v-5M3 8l5-4 4 3 7-5m0 0h-4m4 0v4" />
      </svg>
    ),
  },
  {
    title: "One-Stop Solution",
    body: "Complete B2B and B2C solutions under one roof. Better leads, more customers, and bigger profits.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5" />
      </svg>
    ),
  },
];

const PILL_START = 0.35;
const PILL_STEP = 0.14;
const PILL_SPAN = 0.12;

/** true when viewport >= lg (1024px). Starts false (mobile-first) to avoid hydration mismatch. */
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

function Pill({
  progress,
  index,
  title,
  body,
  icon,
}: {
  progress: MotionValue<number>;
  index: number;
  title: string;
  body: string;
  icon: ReactNode;
}) {
  const start = PILL_START + index * PILL_STEP;
  const end = start + PILL_SPAN;
  const y = useTransform(progress, [start, end], [50, 0]);
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const scale = useTransform(progress, [start, end], [0.96, 1]);

  return (
    <motion.li
      style={{ y, opacity, scale }}
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex items-center gap-4 overflow-hidden rounded-[2rem] bg-white py-3 pl-3 pr-6 shadow-[0_10px_30px_-12px_rgba(42,10,43,0.25)] ring-1 ring-black/[0.04] transition-shadow duration-300 hover:shadow-[0_20px_40px_-14px_rgba(239,91,21,0.45)]"
    >
      {/* shimmer sweep on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-[#F26122]/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100"
      />

      {/* icon with pulse ring */}
      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#F26122]/40 opacity-0 group-hover:animate-ping group-hover:opacity-100"
        />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#F26122] text-white shadow-[0_8px_18px_-6px_rgba(242,97,34,0.8)] transition-transform duration-500 group-hover:scale-110">
          {icon}
        </span>
      </span>

      <div className="relative">
        <h3 className="text-[15px] font-extrabold uppercase tracking-wide text-[#20103A] transition-colors duration-300 group-hover:text-[#F26122] lg:text-base">
          {title}
        </h3>
        <p className="mt-0.5 text-[13px] font-medium leading-snug text-[#5A5368]">
          {body}
        </p>
      </div>
    </motion.li>
  );
}

/** Line of the heading that slides up from behind a mask */
function RevealLine({
  progress,
  from,
  children,
}: {
  progress: MotionValue<number>;
  from: number;
  children: ReactNode;
}) {
  const y = useTransform(progress, [from, from + 0.12], ["110%", "0%"]);
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span style={{ y }} className="block">
        {children}
      </motion.span>
    </span>
  );
}

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start -10%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.5,
  });

  // Desktop: orange panel slides left -> right
  const panelX = useTransform(progress, [0, 0.35], ["-100%", "0%"]);
  // Mobile: orange banner slides top -> bottom
  const panelY = useTransform(progress, [0, 0.35], ["-100%", "0%"]);

  // Desktop: content comes from right | Mobile: content comes down from top
  const contentX = useTransform(progress, [0, 0.35], [90, 0]);
  const contentY = useTransform(progress, [0, 0.35], [-40, 0]);
  const contentOpacity = useTransform(progress, [0, 0.25], [0.2, 1]);

  const qY = useTransform(progress, [0.05, 0.8], ["80%", "0%"]);
  const qRotate = useTransform(progress, [0.05, 0.8], [-24, -14]);

  const watermarkScale = useTransform(progress, [0, 0.6], [0.8, 1]);
  const watermarkRotate = useTransform(progress, [0, 1], [-4, -14]);

  const barScale = useTransform(progress, [0.28, 0.4], [0, 1]);

  return (
    <section
      ref={ref}
      aria-labelledby="why-partner-heading"
      className={`${jakarta.className} relative isolate min-h-[820px] w-full overflow-hidden bg-[#FBF8F4] lg:min-h-[800px]`}
    >
      {/* ---------- Right side ambient background ---------- */}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[-8%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#F26122]/15 blur-[100px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-[-10%] right-[20%] h-[320px] w-[320px] rounded-full bg-[#2A0A2B]/10 blur-[100px]"
      />

      {/* ---------- Watermark (right side, original colors) ---------- */}
      <motion.div
        aria-hidden="true"
        style={{ scale: watermarkScale, rotate: watermarkRotate }}
        className="pointer-events-none absolute -right-[6%] top-[4%] z-0 hidden h-[62%] w-[42%] opacity-[0.18] lg:block"
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-full w-full"
        >
          <Image
            src="/logo_only.png"
            alt=""
            fill
            sizes="40vw"
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* ---------- Orange panel ----------
          mobile: full width top banner (h-60), slides top -> bottom
          desktop: left 30% full height, slides left -> right */}
      <motion.div
        style={isDesktop ? { x: panelX } : { y: panelY }}
        className="absolute left-0 top-0 z-0 h-60 w-full overflow-hidden bg-gradient-to-br from-[#F26122] via-[#EF5B15] to-[#C9430A] lg:inset-y-0 lg:right-auto lg:h-auto lg:w-[30%]"
      >
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-[58%] h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[26px] border-white/[0.07]"
        />
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.07, 1] }}
          transition={{
            duration: 6,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-1/2 top-[58%] h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[22px] border-white/[0.08]"
        />
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.09, 1] }}
          transition={{
            duration: 6,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-1/2 top-[58%] h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[18px] border-white/[0.09]"
        />
      </motion.div>

      {/* ---------- Question mark + hand (desktop) ---------- */}
      <motion.div
        style={{ y: qY, rotate: qRotate }}
        className="pointer-events-none absolute -bottom-6 -left-[2%] z-20 hidden h-[108%] w-[46%] rotate-20 origin-bottom-left lg:block"
      >
        <Image
          src="/why.png"
          alt=""
          fill
          sizes="50vw"
          className="object-contain object-bottom-left drop-shadow-[0_30px_40px_rgba(0,0,0,0.3)]"
        />
      </motion.div>

      {/* Mobile version — clipped inside the orange banner (h-60) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-60 overflow-hidden lg:hidden"
      >
        <motion.div
          style={{ y: qY, rotate: -15 }}
          className="absolute bottom-0 left-2 h-52 rotate-15 w-[35%]"
        >
          <Image
            src="/why.png"
            alt=""
            fill
            sizes="170px"
            className="object-contain object-bottom"
          />
        </motion.div>
      </div>

      {/* ---------- Right content ---------- */}
      <motion.div
        style={
          isDesktop
            ? { x: contentX, opacity: contentOpacity }
            : { y: contentY, opacity: contentOpacity }
        }
        className="relative z-10 pb-16 lg:pb-20 lg:pl-[36%] lg:pr-12 lg:pt-20 xl:pl-[34%] xl:pr-20"
      >
        {/* Header: on mobile sits on the orange banner, right of the image (max width) */}
        <div className="flex h-60 flex-col justify-center pl-[39%] pr-2 lg:block lg:h-auto lg:pl-0 lg:pr-0">
          <h2
            id="why-partner-heading"
            className="w-full text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-[#2A0A2B] min-[400px]:text-[2.1rem] sm:text-5xl lg:text-6xl"
          >
            <RevealLine progress={progress} from={0.15}>
              Why Partner
            </RevealLine>
            <RevealLine progress={progress} from={0.22}>
              <span className="text-white lg:text-[#F26122]">With Us?</span>
            </RevealLine>
          </h2>

          <motion.span
            aria-hidden="true"
            style={{ scaleX: barScale }}
            className="mt-3 block h-1.5 w-20 origin-left rounded-full bg-white lg:mt-5 lg:w-24 lg:bg-[#F26122]"
          />
        </div>

        {/* Cards: on mobile full width below the banner */}
        <ul className="mt-6 flex max-w-3xl flex-col gap-4 px-6 lg:mt-8 lg:px-0">
          {points.map((p, i) => (
            <Pill
              key={p.title}
              progress={progress}
              index={i}
              title={p.title}
              body={p.body}
              icon={p.icon}
            />
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
