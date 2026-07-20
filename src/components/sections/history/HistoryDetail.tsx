import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ImageWithSkeleton } from "../../shared/Skeleton";
import { HISTORY_STORIES, HISTORY_ACCENTS } from "./historyData";
import BackButton from "../../shared/parts/BackButton";

const fade = (d: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: d, ease: [0.16, 1, 0.3, 1] as const },
});

const ERA_BG: Record<string, string> = {
  kingdoms: "#f5f0e8",
  colonial: "#eef2ee",
  modern: "#f0ede6",
};

export default function HistoryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const story = HISTORY_STORIES.find((s) => s.slug === slug);

  if (!story) {
    return (
      <div className="min-h-screen bg-[#f5f4f0] flex items-center justify-center">
        {t('history.notFound')}
      </div>
    );
  }

  const siblings = HISTORY_STORIES.filter(
    (s) => s.period === story.period && s.slug !== story.slug
  ).slice(0, 3);
  const accent = HISTORY_ACCENTS[story.accent];
  const eraBg = ERA_BG[story.period] || "#f5f4f0";

  return (
    <div className="min-h-screen" style={{ backgroundColor: eraBg }}>
      <BackButton to={`/history?period=${story.period}`} />

      <div className="mx-auto max-w-[80%] py-12 sm:py-16 lg:py-20">
        <motion.h1
          {...fade(0)}
          className="text-3xl sm:text-4xl lg:text-[3rem] font-bold text-[#1a1a1a] leading-[1.1] tracking-tight mb-4"
        >
          {story.title}
        </motion.h1>

        <motion.p
          {...fade(0.05)}
          className="text-lg sm:text-xl font-medium leading-relaxed mb-8 sm:mb-10"
          style={{ color: accent.hex + "cc" }}
        >
          {story.hook}
        </motion.p>

        <motion.div
          {...fade(0.1)}
          className="w-full h-[300px] sm:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden mb-8 sm:mb-10 bg-black/5"
        >
          <ImageWithSkeleton
            src={story.imageUrl}
            alt={story.title}
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full"
          />
        </motion.div>

          <div className="w-10 h-0.5 mb-8 sm:mb-10" style={{ backgroundColor: accent.hex + "40" }} />

        <div className="space-y-6 sm:space-y-8">
          {story.content.map((paragraph, i) => (
            <motion.p
              key={paragraph}
              {...fade(0.05 + i * 0.03)}
              className="text-[17px] sm:text-[18px] leading-[1.8] sm:leading-[1.9] text-[#1a1a1a]/70"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

          <div className="w-10 h-0.5 my-10 sm:my-14" style={{ backgroundColor: accent.hex + "40" }} />

        {siblings.length > 0 && (
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/40 mb-6">{t('history.continueReading')}</h3>
            <div className="flex flex-col gap-6">
              {siblings.map((s) => (
                <button key={s.slug} onClick={() => navigate(`/history/${s.slug}`)} className="flex items-center gap-4 text-left group">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-black/5 shrink-0">
                    <img src={s.imageUrl} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base font-bold text-[#1a1a1a] leading-snug group-hover:opacity-70 transition-opacity">{s.title}</h4>
                    <p className="text-sm text-[#1a1a1a]/50 mt-1">{s.hook}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
