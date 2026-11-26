"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const tags = [
  "Digital Marketing",
  "Marketplace Management",
  "E-commerce",
  "Brand Development",
];

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // 0 → section's top touches the viewport bottom (starts entering)
  // 1 → pin ends and the section starts scrolling away
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
    restDelta: 0.0005,
  });

  // DESKTOP: BG panel shrinks from the right edge to 42% (width)
  const panelScaleX = useTransform(progress, [0, 0.8], [1, 0.42]);

  // MOBILE: BG panel shrinks from the top edge down to 55% (height)
  // → image on top gets revealed, content stays in the bottom part
  const panelScaleY = useTransform(progress, [0, 0.8], [1, 0.55]);

  // Content: rises from the bottom (same on mobile + desktop)
  const contentY = useTransform(progress, [0.15, 0.92], [140, 0]);
  const contentOpacity = useTransform(progress, [0.15, 0.75], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-[180vh] md:h-[200vh] bg-cream pt-16"
    >
      {/* Pinned stage — mobile + desktop */}
      <div className="sticky top-16 md:top-0 h-[100svh] overflow-hidden lg:h-screen">
        {/* Image — mobile: top 45% | desktop: right side, fixed in place */}
        <div className="absolute inset-x-0 top-0 h-[45%] [mask-image:linear-gradient(to_bottom,black_65%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent)] lg:inset-y-8 lg:left-auto lg:right-0 lg:h-auto lg:w-[58%] lg:[mask-image:linear-gradient(to_right,transparent,black_28%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent,black_28%)]">
          <Image
            src="/about.png"
            alt="Zest Solutions marketplace dashboard on a laptop"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-center lg:object-left"
          />
        </div>

        {/* BG panel — covers the whole stage first, then its edge moves:
            mobile  → top edge moves down (origin-bottom, scaleY)
            desktop → right edge moves left (origin-left, scaleX) */}
        <motion.div
          aria-hidden="true"
          style={isDesktop ? { scaleX: panelScaleX } : { scaleY: panelScaleY }}
          className="pointer-events-none absolute inset-0 z-[5] origin-bottom bg-cream will-change-transform lg:origin-left"
        />

        {/* Tilted logo watermark — visible from the very start */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 top-[72%] z-[6] h-[260px] w-[260px] -translate-y-1/2 select-none sm:h-[340px] sm:w-[340px] lg:left-[2vw] lg:top-1/2 lg:h-[460px] lg:w-[460px]"
        >
          <div className="relative h-full w-full -rotate-12 opacity-[0.09]">
            <Image
              src="/logo_only.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 460px, 340px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Text content — mobile: bottom 55% | desktop: left side */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="absolute inset-x-0 bottom-0 z-10 flex h-[55%] items-center px-6 will-change-transform sm:px-8 lg:inset-0 lg:h-auto lg:pl-[4vw] lg:pr-8"
        >
          <div className="w-full lg:w-[40%]">
            <h2 className="mb-4 text-4xl font-extrabold leading-tight text-plum sm:text-5xl lg:mb-8 lg:text-6xl">
              Who We <span className="text-gradient">Are</span>
            </h2>

            <div className="space-y-3 lg:space-y-6">
              <div className="relative border-l-[3px] border-orange pl-4 lg:pl-6">
                <p className="text-[13px] leading-relaxed text-gray-600 sm:text-base lg:text-lg">
                  At Zest Solutions, we are your trusted digital growth partner.
                  With over a decade of expertise, we provide comprehensive B2B
                  and B2C solutions including digital marketing, marketplace
                  management, e-commerce optimization, and brand development.
                </p>
              </div>

              <div className="relative border-l-[3px] border-plum/30 pl-4 lg:pl-6">
                <p className="text-[13px] leading-relaxed text-gray-500 sm:text-base lg:text-lg">
                  We empower businesses of all sizes to achieve their growth
                  objectives through innovative strategies, cutting-edge
                  technology, and personalized service. From startups to
                  enterprises, we&apos;re here to transform your vision into
                  measurable success.
                </p>
              </div>
            </div>

            {/* Highlights separated by thin orange bars */}
            <div className="mt-5 flex flex-wrap items-center gap-y-2 lg:mt-10 lg:gap-y-3">
              {tags.map((tag, i) => (
                <div key={tag} className="flex items-center">
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      className="mx-3 h-4 w-0.5 bg-orange lg:mx-5"
                    />
                  )}
                  <span className="text-xs font-medium text-plum sm:text-sm">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
