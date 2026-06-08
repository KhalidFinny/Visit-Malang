import React from "react";
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from "react-router-dom";

type HistoryData = {
  title: string;
  description: string;
  content: string;
};

const storySlugs: Record<string, string> = {
  "the-hidden-story-behind-colorful-village": "story01",
  "from-slum-to-global-attraction": "story02",
  "the-people-behind-the-colors": "story03",
  "transformation-through-community": "story04",
  "tourism-that-changed-everything": "story05",
  "sustainability-challenges": "story06",
};

const HistoryDetail: React.FC = () => {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const storyKey = slug ? storySlugs[slug] : null;

  if (!storyKey) {
    return <div className="text-white p-10">{t('history.notFound')}</div>;
  }
  
  const data: HistoryData = {
    title: t(`history.${storyKey}.title`),
    description: t(`history.${storyKey}.description`),
    content: t(`history.${storyKey}.content`),
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">

      {/* HERO */}
      <div className="relative h-[70vh] w-full overflow-hidden">

        <img
          src="/bromo.jpg"
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />

        {/* BACK ICON ONLY */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 border border-white/10 hover:bg-black/60 transition"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* TEXT (NOW ALIGNED) */}
        <div className="absolute bottom-16 left-0 right-0">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-[clamp(32px,5vw,64px)] font-semibold leading-tight tracking-tight">
              {data.title}
            </h1>

            <p className="text-white/60 mt-4 text-[15px]">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6 py-20">

        <div className="space-y-8">
          {data.content.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="text-white/70 text-[16px] leading-[1.9]"
            >
              {para}
            </p>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-20 pt-10 border-t border-white/10 text-center">
          <p className="text-white/30 text-sm mb-6">
            {t('history.exploreMore')}
          </p>

          <button
            onClick={() => navigate("/history")}
            className="px-6 py-2 border border-white/20 rounded-full text-sm text-white/70 hover:text-white hover:border-white/40 transition"
          >
            {t('history.backToHistory')}
          </button>
        </div>

      </div>
    </div>
  );
};

export default HistoryDetail;