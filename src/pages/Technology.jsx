import { useTranslation } from "react-i18next";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { SpecsSection } from "../components/SpecsSection";
import { CTASection } from "../components/CTASection";
import { FingerprintAnalysis } from "../components/FingerprintAnalysis";

export default function Technology() {
  const { t } = useTranslation();

  const hero = t("productHighlights.hero", { returnObjects: true });
  const features = t("productHighlights.features", { returnObjects: true });
  const specsNeo = t("productHighlights.specsNeo", { returnObjects: true });
  const cta = t("productHighlights.cta", { returnObjects: true });

  return (
    <div className="bg-white text-gray-900 font-sans">
      <HeroSection hero={hero} />
      <FeaturesSection features={features} />
      <SpecsSection specsNeo={specsNeo} />
      <FingerprintAnalysis />
      <CTASection cta={cta} />
    </div>
  );
}
