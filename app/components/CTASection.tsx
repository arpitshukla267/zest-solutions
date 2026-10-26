import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-plum overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange/8 rounded-full translate-y-1/2 translate-x-1/3 blur-3xl" />

        {/* Subtle grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 800 400"
          fill="none"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 40}
              y1="0"
              x2={i * 40}
              y2="400"
              stroke="white"
              strokeWidth="0.5"
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 40}
              x2="800"
              y2={i * 40}
              stroke="white"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Need help with a{" "}
          <span className="text-gradient">specific service?</span>
        </h2>

        <p className="text-lg text-white/60 max-w-xl mx-auto mb-10">
          Let&apos;s discuss how we can transform your business goals into
          measurable results. Our team is ready to help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 bg-orange text-white font-semibold rounded-full hover:bg-orange-light transition-all duration-300 hover:scale-105 text-lg"
          >
            Get in Touch
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          <Link
            href="tel:+916394239351"
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
          >
            <svg
              className="mr-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call Us Now
          </Link>
        </div>
      </div>
    </section>
  );
}
