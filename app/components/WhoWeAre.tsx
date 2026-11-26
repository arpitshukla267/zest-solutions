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

  // Light smoothing (keeps it fluid without lagging behind the scroll)
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
    restDelta: 0.0005,
  });

  // BG panel: full width at start, shrinks from the right edge to 42%
  const panelScale = useTransform(progress, [0, 0.8], [1, 0.42]);

  // Content: rises from the bottom, finishes right before the pin ends
  const contentY = useTransform(progress, [0.15, 0.92], [140, 0]);
  const contentOpacity = useTransform(progress, [0.15, 0.75], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-cream lg:h-[200vh]"
    >
      {/* Pinned stage (desktop). On mobile it's a normal stacked layout */}
      <div className="relative overflow-hidden lg:sticky lg:top-0 lg:h-screen">
        {/* Image (right) — stays fixed in place */}
        <div className="relative aspect-[4/3] w-full [mask-image:linear-gradient(to_bottom,transparent,black_20%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_20%)] lg:absolute lg:inset-y-8 lg:right-0 lg:aspect-auto lg:w-[58%] lg:[mask-image:linear-gradient(to_right,transparent,black_28%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent,black_28%)]">
          <Image
            src="/about.png"
            alt="Zest Solutions marketplace dashboard on a laptop"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-left"
          />
        </div>

        {/* BG panel — covers the whole section first, then its right edge moves left */}
        <motion.div
          aria-hidden="true"
          style={{ scaleX: panelScale }}
          className="pointer-events-none absolute inset-0 z-[5] hidden origin-left bg-cream will-change-transform lg:block"
        />

        {/* Tilted logo watermark — visible from the very start */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 top-1/2 z-[6] h-[280px] w-[280px] -translate-y-1/2 select-none sm:h-[340px] sm:w-[340px] lg:left-[2vw] lg:h-[460px] lg:w-[460px]"
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

        {/* Text content (left) — comes in on scroll */}
        <motion.div
          style={
            isDesktop ? { y: contentY, opacity: contentOpacity } : undefined
          }
          className="relative z-10 px-6 py-16 will-change-transform sm:px-8 lg:absolute lg:inset-0 lg:flex lg:items-center lg:py-0 lg:pl-[4vw] lg:pr-8"
        >
          <div className="lg:w-[40%]">
            <h2 className="mb-8 text-5xl font-extrabold leading-tight text-plum lg:text-6xl">
              Who We <span className="text-gradient">Are</span>
            </h2>

            {/* Story-style paragraphs with side accent */}
            <div className="space-y-6">
              <div className="relative border-l-[3px] border-orange pl-6">
                <p className="text-base leading-relaxed text-gray-600 lg:text-lg">
                  At Zest Solutions, we are your trusted digital growth partner.
                  With over a decade of expertise, we provide comprehensive B2B
                  and B2C solutions including digital marketing, marketplace
                  management, e-commerce optimization, and brand development.
                </p>
              </div>

              <div className="relative border-l-[3px] border-plum/30 pl-6">
                <p className="text-base leading-relaxed text-gray-500 lg:text-lg">
                  We empower businesses of all sizes to achieve their growth
                  objectives through innovative strategies, cutting-edge
                  technology, and personalized service. From startups to
                  enterprises, we&apos;re here to transform your vision into
                  measurable success.
                </p>
              </div>
            </div>

            {/* Highlights separated by thin orange bars */}
            <div className="mt-10 flex flex-wrap items-center gap-y-3">
              {tags.map((tag, i) => (
                <div key={tag} className="flex items-center">
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      className="mx-5 h-4 w-0.5 bg-orange"
                    />
                  )}
                  <span className="text-sm font-medium text-plum">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
