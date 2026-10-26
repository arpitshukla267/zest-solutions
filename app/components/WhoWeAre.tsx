import Image from "next/image";

const tags = [
  "Digital Marketing",
  "Marketplace Management",
  "E-commerce",
  "Brand Development",
];

export default function WhoWeAre() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream">
      {/* Text content (left) — pulled closer to the left edge */}
      <div className="relative z-10 px-6 py-16 sm:px-8 lg:py-24 lg:pl-[4vw] lg:pr-8">
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
      </div>

      <div className="relative aspect-[4/3] w-full [mask-image:linear-gradient(to_bottom,transparent,black_20%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_20%)] lg:absolute lg:inset-y-8 lg:right-0 lg:mb-0 lg:aspect-auto lg:w-[58%] lg:[mask-image:linear-gradient(to_right,transparent,black_28%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent,black_28%)]">
        <Image
          src="/about.png"
          alt="Zest Solutions marketplace dashboard on a laptop"
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-left"
        />
      </div>
    </section>
  );
}
