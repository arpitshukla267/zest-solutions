"use client";

import { useEffect, useRef } from "react";

const marketplaces = [
  { name: "Amazon", color: "#FF9900" },
  { name: "Flipkart", color: "#2874F0" },
  { name: "Myntra", color: "#FF3F6C" },
  { name: "Nykaa", color: "#FC2779" },
  { name: "Ajio", color: "#3B3B3B" },
  { name: "eBay", color: "#E53238" },
  { name: "AliBaba", color: "#0071DC" },
  { name: "FirstCry", color: "#F1641E" },
  { name: "Meesho", color: "#570D5B" },
];

export default function MarketplaceCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPosition += speed;
      const halfWidth = scrollEl.scrollWidth / 2;
      if (scrollPosition >= halfWidth) {
        scrollPosition = 0;
      }
      scrollEl.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollEl.addEventListener("mouseenter", handleMouseEnter);
    scrollEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollEl.removeEventListener("mouseenter", handleMouseEnter);
      scrollEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const duplicatedMarketplaces = [...marketplaces, ...marketplaces];

  return (
    <section className="py-16 lg:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Supported Marketplaces
        </p>
        <h3 className="text-2xl lg:text-3xl font-bold text-plum text-center">
          We Work Across <span className="text-gradient">Every Platform</span>
        </h3>
      </div>

      {/* Carousel track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div ref={scrollRef} className="flex gap-6 will-change-transform">
            {duplicatedMarketplaces.map((mp, i) => (
              <div
                key={`${mp.name}-${i}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="w-48 h-28 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-orange/20">
                  {/* Colored brand dot */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: mp.color }}
                  >
                    {mp.name[0]}
                  </div>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-plum transition-colors">
                    {mp.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
