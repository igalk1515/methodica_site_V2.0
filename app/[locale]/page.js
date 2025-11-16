import nextDynamic from "next/dynamic";
import Hero from "../../components/Hero";
import { getDictionary } from "../i18n";

const FeatureSection = nextDynamic(() => import("../../components/FeatureSection"));

export const dynamic = "force-dynamic";

export default function LocaleHomePage({ params }) {
  const dictionary = getDictionary(params.locale);

  return (
    <>
      <Hero
        title={dictionary.title}
        subtitle={dictionary.subtitle}
        ctaLabel={dictionary.cta}
      />
      <FeatureSection items={dictionary.features} />
    </>
  );
}
