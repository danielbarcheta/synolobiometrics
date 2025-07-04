import { productHighlights } from "../constants";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { SpecsSection } from "../components/SpecsSection";
import { CTASection } from "../components/CTASection";
import { FingerprintAnalysis } from "../components/FingerprintAnalysis";

export default function Technology() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <HeroSection hero={productHighlights.hero} />
      <FeaturesSection features={productHighlights.features} />
      <SpecsSection specs={productHighlights.specs} />
      <FingerprintAnalysis/>
            <CTASection cta={productHighlights.cta} />
    </div>
  );
}
