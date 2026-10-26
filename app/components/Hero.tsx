import Image from "next/image";
import Link from "next/link";
import CountUp from "./ui/CountUp";

const stats = [
  { end: 1200, suffix: "+", label: "Businesses served" },
  { end: 8, suffix: "+", label: "Years Experience" },
  { end: 95, suffix: "%", label: "Satisfaction" },
  { end: 24, suffix: "×7", label: "Support" },
];

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero-bg.png"
          alt="Zest Solutions hero background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        {/* Simple black overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-40 w-full">
          <div className="max-w-3xl">

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.12] tracking-tight mb-6">
              Transform your{" "}
              <span className="text-orange-light">business journey</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-xl mb-10">
              Elevate your brand with{" "}
              <span className="text-white font-medium">
                B2B marketing strategies
              </span>{" "}
              and grow across online marketplaces with our{" "}
              <span className="text-white font-medium">
                B2C e-commerce solutions
              </span>
              .
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-orange text-white text-[15px] font-semibold rounded-full hover:bg-orange-light transition-colors duration-200"
              >
                Start your growth
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Curve at bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full h-auto block translate-y-px"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#FAF6F0"
            d="M0,70 C240,112 480,24 760,36 C1020,48 1240,112 1440,58 L1440,120 L0,120 Z"
          />
        </svg>
      </section>

      {/* Stats */}
      <section className="bg-[#FAF6F0]">
        <div className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-4 sm:divide-x divide-black/10 gap-10 sm:gap-0">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-6">
              <div className="text-4xl lg:text-5xl font-semibold text-black tracking-tight">
                <CountUp end={s.end} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-black/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
