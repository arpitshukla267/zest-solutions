import Link from "next/link";

const b2bServices = [
  {
    title: "Marketing",
    description:
      "Wide range of marketing services to help you reach your target customers effectively.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
  },
  {
    title: "Sales",
    description:
      "Develop and manage complete sales channels on behalf of clients with expert teams.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "Brand Activation",
    description:
      "Create immediate positive impact on your brand with strategic promotion campaigns.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Recruitment",
    description:
      "Expert training and dedicated resources for diversity-empowered recruitment solutions.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Advertising",
    description:
      "Amazing advertising experiences and stands that help you grow your business.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, pay-per-click, and video ads to get your business noticed online.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Events & Exhibition",
    description:
      "Complete event staffing and management services from start to finish.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Telemarketing",
    description:
      "Collaborative team-based approach to optimize operational efficiencies.",
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
  },
];

export default function B2BServices() {
  return (
    <section className="relative py-12 bg-white overflow-hidden">
      {/* Decorative SVG background illustration */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="280" stroke="#2D1B4E" strokeWidth="1" />
          <circle
            cx="300"
            cy="300"
            r="220"
            stroke="#2D1B4E"
            strokeWidth="0.5"
          />
          <circle
            cx="300"
            cy="300"
            r="160"
            stroke="#2D1B4E"
            strokeWidth="0.5"
          />
          <path
            d="M300 20 L580 300 L300 580 L20 300Z"
            stroke="#E85D26"
            strokeWidth="0.5"
          />
          <circle cx="300" cy="20" r="8" fill="#E85D26" />
          <circle cx="580" cy="300" r="8" fill="#2D1B4E" />
          <circle cx="300" cy="580" r="8" fill="#E85D26" />
          <circle cx="20" cy="300" r="8" fill="#2D1B4E" />
        </svg>
      </div>

      <div className="relative max-w-[95vw] mx-auto px-6 lg:px-8">
        {/* Header (centered) */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-plum leading-tight mb-5">
            Enterprise Marketing <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Comprehensive B2B marketing solutions that connect you with your
            business customers through strategic offline and digital channels.
          </p>
        </div>

        {/* Honeycomb-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-3xl overflow-hidden">
          {b2bServices.map((service, i) => (
            <div
              key={service.title}
              className="bg-white p-8 group hover:bg-gradient-to-br hover:from-plum/[0.03] hover:to-orange/[0.03] transition-all duration-500 relative"
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-5 text-6xl font-bold text-gray-50 group-hover:text-orange/5 transition-colors select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-cream text-plum flex items-center justify-center mb-5 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-lg font-bold text-plum mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 mb-16 bg-plum text-white font-semibold rounded-full hover:bg-plum/90 transition-all duration-300 hover:scale-105"
          >
            Explore All B2B Services
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
        </div>
      </div>
    </section>
  );
}
