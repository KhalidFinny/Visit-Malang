import { useTranslation } from "react-i18next";

import type { HeroDestination } from "../types";

const TOP_5_DESTINATIONS: HeroDestination[] = [
  {
    name: "Mount Bromo",
    category: "Nature",
    image: "/locations/nature/gunung-bromo/cover.webp",
  },
  {
    name: "Tumpak Sewu",
    category: "Nature",
    image: "/locations/nature/tumpak-sewu/cover.webp",
  },
  {
    name: "Museum Angkut",
    category: "Attraction",
    image: "/locations/fun/museum-angkut/cover.webp",
  },
  {
    name: "Jodipan Village",
    category: "Attraction",
    image: "/locations/fun/kampung-warna-warni/cover.webp",
  },
  {
    name: "Toko Oen",
    category: "Culinary",
    image: "/locations/culinary/toko-oen/cover.webp",
  },
];

// Duplicate list several times to maintain a seamless looping track
const TRACK = [...TOP_5_DESTINATIONS, ...TOP_5_DESTINATIONS, ...TOP_5_DESTINATIONS, ...TOP_5_DESTINATIONS];

export default function PopularDestinations() {
  const { t } = useTranslation();

  return (
    <div className="w-full overflow-hidden relative">
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .destinations-track {
          display: flex;
          width: max-content;
          gap: 2rem;
          animation: ticker 85s linear infinite;
        }
        .destinations-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="destinations-track">
        {TRACK.map((dest, idx) => (
          <div
            key={`${dest.name}-${idx}`}
            className="group flex flex-col shrink-0 cursor-pointer relative overflow-hidden rounded-2xl border border-premium-black/10 hover:border-premium-black/30 transition-all duration-300 w-[280px] h-[280px] sm:w-[450px] sm:h-[290px] aspect-[1/1] sm:aspect-[450/290]"
          >
            {/* Full Card Cover Image (Landscape ratio) */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={dest.image}
                alt={dest.name}
                width={450}
                height={290}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10" />

            {/* Floating Text Info */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 z-20 flex flex-col justify-end text-left select-none">
              <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-1.5">
                {t("hero.custom.cat." + dest.category)}
              </p>
              <h4 className="text-xl md:text-2xl font-black text-white leading-tight">
                {dest.name}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f5f4f0] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f5f4f0] to-transparent pointer-events-none z-10" />
    </div>
  );
}
