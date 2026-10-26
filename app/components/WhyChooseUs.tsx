import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

/**
 * Text is placed over /public/why-choose-us.png (1774 x 887, 2:1).
 * All positions are % of the image and all sizes are in `cqw`
 * (1cqw = 1% of the section width), so the text scales with the image.
 */
const cards = [
  {
    title: "Strategic Approach",
    body: "Holistic approach to campaigns ensuring targeted messages across best-performing channels with ongoing strategic planning.",
    left: 4.28, // % of section width
  },
  {
    title: "Proven Experience",
    body: "Team of analysts with up-to-date technology and industry trends ensuring greatest ROI from your marketing investment.",
    left: 28.64,
  },
  {
    title: "Data-Driven Results",
    body: "Clear, measurable results with key performance metrics tracking. Average 3x revenue growth for our clients.",
    left: 52.59,
  },
  {
    title: "One-Stop Solution",
    body: "Complete B2B and B2C solutions under one roof. Better leads, more customers, and bigger profits.",
    left: 76.55,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-partner-heading"
      className={`${jakarta.className} relative aspect-[1774/887] w-full overflow-hidden bg-white`}
      style={{ containerType: "inline-size" }}
    >
      <Image
        src="/why-zest.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Section heading */}
      <div
        className="absolute inset-x-0 flex flex-col items-center"
        style={{ top: "3%", gap: "0.7cqw" }}
      >
        <h2
          id="why-partner-heading"
          className="m-0 text-center font-extrabold tracking-tight text-[#2A0A2B]"
          style={{ fontSize: "3.4cqw", lineHeight: 1.1 }}
        >
          Why Partner With Us?
        </h2>
        <span
          aria-hidden="true"
          className="block rounded-full bg-[#F26122]"
          style={{ width: "5cqw", height: "0.45cqw" }}
        />
      </div>

      {/* Card text */}
      {cards.map((card) => (
        <article
          key={card.title}
          className="absolute"
          style={{ left: `${card.left}%`, top: "68%", width: "19.2%" }}
        >
          <h3
            className="m-0 font-extrabold text-[#20103A]"
            style={{ fontSize: "1.47cqw", lineHeight: 1.25 }}
          >
            {card.title}
          </h3>
          <p
            className="m-0 font-medium text-[#5A5368]"
            style={{
              fontSize: "1.02cqw",
              lineHeight: 1.5,
              marginTop: "0.55cqw",
            }}
          >
            {card.body}
          </p>
        </article>
      ))}
    </section>
  );
}
