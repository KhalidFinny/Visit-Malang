import React from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

type CardProps = {
  title: string;
  description: string;
};

const toSlug = (text: string) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

const Card: React.FC<CardProps> = ({ title, description }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/history/${toSlug(title)}`)}
      className="group relative w-full h-[260px] rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* IMAGE */}
      <img
        src="/bromo.jpg"
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* CONTENT */}
      <div className="absolute bottom-0 p-6 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
        <h3 className="text-white font-semibold uppercase text-[17px] mb-2">
          {title}
        </h3>

        <p className="text-white/60 text-[13px] opacity-0 group-hover:opacity-100 transition duration-500">
          {description}
        </p>
      </div>

      {/* BORDER */}
      <div className="absolute inset-0 border border-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition" />
    </div>
  );
};

const HistoryList: React.FC = () => {
  const { t } = useTranslation();
  const data: CardProps[] = Array.from({ length: 6 }, (_, i) => ({
    title: t(`history.card${String(i + 1).padStart(2, '0')}.title`),
    description: t(`history.card${String(i + 1).padStart(2, '0')}.desc`),
  }));

  return (
    <section className="bg-[#0a0a0a] py-28 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 max-w-md">
          <h2 className="text-[clamp(42px,6vw,72px)] font-semibold">
            {t('history.title')}
          </h2>
          <p className="text-white/40 mt-4 text-[14px]">
            {t('history.subtitle')}
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {data.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HistoryList;