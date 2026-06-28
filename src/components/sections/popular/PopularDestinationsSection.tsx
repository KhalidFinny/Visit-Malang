import { useTranslation } from "react-i18next";
import PopularDestinations from "../hero/parts/PopularDestinations";

export default function PopularDestinationsSection() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 bg-[#f5f4f0] select-none border-b border-premium-black/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-12 lg:px-16 mb-8">
        <p className="text-sm md:text-base font-semibold uppercase tracking-[0.22em] text-[#0A0A0A]/40">
          {t("hero.custom.popular")}
        </p>
      </div>
      <PopularDestinations />
    </section>
  );
}
