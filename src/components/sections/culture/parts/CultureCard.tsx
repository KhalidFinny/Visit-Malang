import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import type { CultureEntry } from "../types";

interface Props {
  entry: CultureEntry;
}

export default function CultureCard({ entry }: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { palette } = entry.decoration;

  return (
    <button
      onClick={() => navigate(`/culture/${entry.slug}`)}
      className="group relative w-full text-left overflow-hidden rounded-2xl border border-black/[0.06] bg-[#f5f4f0] transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="p-5 sm:p-6">
        {/* Top row: era + small photo */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shrink-0"
            style={{
              backgroundColor: `${palette.primary}10`,
              color: palette.primary,
            }}
          >
            {entry.era}
          </span>

          {/* Small thumbnail badge */}
          {entry.imageUrl && (
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shadow-sm shrink-0"
              style={{
                border: `1px solid ${palette.primary}12`,
              }}
            >
              <img
                src={entry.imageUrl}
                alt={entry.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-black tracking-tight leading-tight mb-1 text-[#0A0A0A]">
          {entry.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-medium leading-snug mb-3 text-[#0A0A0A]/60">
          {entry.subtitle}
        </p>

        {/* Teaser */}
        <p className="text-sm leading-relaxed line-clamp-2 text-[#0A0A0A]/50">
          {entry.teaser}
        </p>

        {/* Read more — styled like a button, whole card is already clickable */}
        <span
          className="mt-4 inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
          style={{
            backgroundColor: palette.primary,
            color: "#fff",
          }}
        >
          {t("culture.readStory")}
        </span>
      </div>
    </button>
  );
}
