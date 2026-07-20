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
      className="group relative w-full text-left overflow-hidden rounded-2xl border border-black/[0.06] bg-[#f5f4f0] transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
    >
      <div className="p-5 sm:p-6 flex flex-col h-full">
        {/* Top row: era badge + small photo thumbnail */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
          <span
            className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shrink-0 leading-tight max-w-full text-ellipsis overflow-hidden self-start"
            style={{
              backgroundColor: `${palette.primary}12`,
              color: palette.primary,
              border: `1px solid ${palette.primary}20`,
            }}
          >
            {entry.era}
          </span>

          {/* Small thumbnail badge */}
          {entry.imageUrl && (
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow-sm shrink-0 self-start sm:self-auto"
              style={{
                border: `1px solid ${palette.primary}15`,
              }}
            >
              <img
                src={entry.imageUrl}
                alt={entry.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-black tracking-tight leading-tight mb-1 text-[#0A0A0A] group-hover:text-[#2c5f5f] transition-colors">
          {entry.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-medium leading-snug mb-3 text-[#0A0A0A]/60">
          {entry.subtitle}
        </p>

        {/* Teaser */}
        <p className="text-sm leading-relaxed line-clamp-3 text-[#0A0A0A]/50 mb-4 flex-1">
          {entry.teaser}
        </p>

        {/* Read more button */}
        <div className="pt-2">
          <span
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-transform group-hover:translate-x-1"
            style={{
              backgroundColor: palette.primary,
              color: "#fff",
            }}
          >
            {t("culture.readStory")}
          </span>
        </div>
      </div>
    </button>
  );
}
