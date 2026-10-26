import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import DualPower from "./components/DualPower";
import B2BServices from "./components/B2BServices";
import B2CServices from "./components/B2CServices";
import MarketplaceCarousel from "./components/MarketplaceCarousel";
import WhatWeManage from "./components/WhatWeManage";
import WeMarket from "./components/WeMarket";
import WhyChooseUs from "./components/WhyChooseUs";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <DualPower />
        <WhatWeManage />
        <WeMarket />
        <B2BServices />
        <B2CServices />
        <MarketplaceCarousel />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
