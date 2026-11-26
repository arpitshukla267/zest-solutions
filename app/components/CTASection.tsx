"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const iconProps = {
  className: "h-5 w-5",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

const contacts: {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
}[] = [
  {
    label: "Call us",
    value: "+91 63942 39351",
    href: "tel:+916394239351",
    icon: (
      <svg {...iconProps}>
        <path d="M3 5a2 2 0 012-2h3.3a1 1 0 011 .8l1 4.5a1 1 0 01-.5 1.1l-2.3 1.4a11 11 0 005.5 5.5l1.4-2.3a1 1 0 011.1-.5l4.5 1a1 1 0 01.8 1V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email us",
    value: "hello@yourdomain.com", // TODO: apna email daalein
    href: "mailto:hello@yourdomain.com",
    icon: (
      <svg {...iconProps}>
        <path d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm0 0l9 6 9-6" />
      </svg>
    ),
  },
];

const assurances = [
  "Free initial consultation",
  "Response within one business day",
  "Tailored plan for your business",
];

export default function CTASection() {
  return (
    <section id="contact" className="bg-[#FBF8F4] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid overflow-hidden rounded-2xl bg-plum shadow-[0_30px_60px_-30px_rgba(42,10,43,0.5)] lg:grid-cols-[1.25fr_1fr]"
        >
          {/* Left: message */}
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="mb-4 text-sm font-medium tracking-[0.1em] text-orange">
              Get in touch
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-4xl">
              Ready to grow your business with a trusted partner?
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 lg:text-base">
              Tell us about your goals and we will map out the right B2B and B2C
              strategy for you. No obligation, just a clear plan.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange px-8 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-orange-light"
              >
                Book a Consultation
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="tel:+916394239351"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Call Now
              </Link>
            </div>
          </div>

          {/* Right: contact details */}
          <div className="border-t border-white/10 bg-white/[0.04] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
            <h3 className="mb-6 text-lg font-semibold text-white">
              Talk to our team
            </h3>

            <ul className="space-y-5">
              {contacts.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="group flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-orange transition-colors duration-200 group-hover:bg-orange group-hover:text-white">
                      {c.icon}
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-white/50">
                        {c.label}
                      </span>
                      <span className="block text-base font-medium text-white">
                        {c.value}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <hr className="my-7 border-white/10" />

            <ul className="space-y-3">
              {assurances.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-3 text-sm text-white/80"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-orange"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
