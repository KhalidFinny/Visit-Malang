import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountain,
  faLandmark,
  faUtensils,
  faCompass,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import type { MapCategory } from "../../../../data/mapPlaces";
import type { HeroCategoriesProps } from "../types";

const CATEGORIES: MapCategory[] = ["Nature", "Historical", "Culinary", "Attraction"];

const CATEGORY_LOCALE_KEY: Record<MapCategory, string> = {
  Nature:     "hero.categories.nature",
  Historical: "hero.categories.heritage",
  Culinary:   "hero.categories.culinary",
  Attraction: "hero.categories.attractions",
};

const CATEGORY_ICONS: Record<MapCategory, any> = {
  Nature:     faMountain,
  Historical: faLandmark,
  Culinary:   faUtensils,
  Attraction: faCompass,
};

// Clean blackish brown theme colors
const THEME_BROWN = "text-[#2D221F]";
const BORDER_BROWN = "border-[#2D221F]/15 hover:border-[#2D221F]/30";

export default function HeroCategories({ onSelect }: HeroCategoriesProps) {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full">
      {CATEGORIES.map((cat, i) => (
        <motion.button
          key={cat}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.07 * i, ease: "easeOut" }}
          onClick={() => onSelect(cat)}
          className={`group relative bg-transparent hover:bg-[#2D221F]/[0.03] rounded-2xl overflow-hidden cursor-pointer text-left w-full min-h-[120px] md:h-[170px] lg:h-[200px] hover:-translate-y-1 border ${BORDER_BROWN} transition-all duration-300`}
        >
          {/* Giant background icon */}
          <FontAwesomeIcon
            icon={CATEGORY_ICONS[cat]}
            className={`absolute -right-6 -bottom-10 text-[80px] md:text-[160px] opacity-[0.03] ${THEME_BROWN} pointer-events-none select-none transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 group-hover:opacity-[0.06]`}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-3 md:p-6">
            {/* Top: large icon badge */}
            <div className={`w-10 h-10 md:w-16 md:h-16 rounded-2xl flex items-center justify-center bg-transparent border ${BORDER_BROWN} transition-colors duration-300 group-hover:bg-[#2D221F]/5`}>
              <FontAwesomeIcon
                icon={CATEGORY_ICONS[cat]}
                className={`text-base md:text-2xl ${THEME_BROWN}`}
              />
            </div>

            {/* Bottom: bigger text + arrow */}
            <div className="flex items-end justify-between w-full">
              <h2 className={`text-sm font-bold tracking-tight leading-tight md:text-2xl lg:text-3xl ${THEME_BROWN}`}>
                {t(CATEGORY_LOCALE_KEY[cat])}
              </h2>
              <div className={`w-8 h-8 md:w-14 md:h-14 rounded-full bg-transparent border ${BORDER_BROWN} flex items-center justify-center group-hover:bg-[#2D221F]/10 transition-all duration-200 shrink-0 ml-3`}>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className={`text-xs md:text-lg ${THEME_BROWN} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200`}
                />
              </div>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}

