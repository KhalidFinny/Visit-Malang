import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from "framer-motion";
import { faChevronLeft, faChevronRight, faMapLocationDot, faArrowRight, faClock, faCloudSun, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWeatherState } from "./hooks/useWeatherState";
import RecommendationsModal from "./parts/RecommendationsModal";
import { ImageWithSkeleton } from "../../shared/Skeleton";

function getGoogleMapsSearchUrl(name: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' Malang Indonesia')}`;
}

export default function WeatherStage() {
  const { t, i18n } = useTranslation();
  const {
    activeIndex,
    date,
    next,
    prev,
    currentInfo,
    recommendations,
    todayWeather,
    currentCondition,
    loading,
  } = useWeatherState();

  const [showAllModal, setShowAllModal] = useState(false);

  const rec = recommendations[activeIndex];

  // Format date with current locale
  const formattedDate = new Intl.DateTimeFormat(
    i18n.language || 'en',
    { weekday: 'long', day: 'numeric', month: 'long' }
  ).format(date);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full min-h-screen bg-[#f5f4f0] overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto h-full min-h-screen flex flex-col lg:flex-row">
          {/* ════════════════════════════════════════════════════════════
              LEFT PANEL — Weather Info
          ════════════════════════════════════════════════════════════ */}
          <div className="lg:w-[380px] shrink-0 flex flex-col py-16 lg:py-20 lg:pr-12">
            {/* Label */}
            <span className="text-[14px] font-black tracking-[0.3em] text-[#1a1a1a]/30 uppercase mb-10">
              {t('weather.recommendation')}
            </span>

            {/* Temperature Row */}
            <div className="flex items-start gap-3 mb-3">
              <span className="font-thin text-[80px] leading-[0.85] text-[#1a1a1a] tabular-nums tracking-tighter">
                {todayWeather.temp}°
              </span>
              <FontAwesomeIcon
                icon={currentInfo.icon}
                className="text-[28px] text-[#1a1a1a]/50 mt-2"
              />
            </div>

            {/* Condition */}
            <span className="text-[18px] font-medium text-[#1a1a1a]/70 mb-8">
              {t('weather.condition.' + todayWeather.condition.toLowerCase())}
            </span>

            {/* Divider */}
            <div className="w-full h-px bg-[#1a1a1a]/10 mb-8" />

            {/* Weather Stats — Vertical Rows */}
            <div className="flex flex-col gap-5 mb-8">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-black uppercase tracking-[0.2em] text-[#1a1a1a]/30">
                  {t('weather.wind')}
                </span>
                <span className="text-[18px] font-bold text-[#1a1a1a]">
                  {todayWeather.windSpeed} km/h
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-black uppercase tracking-[0.2em] text-[#1a1a1a]/30">
                  {t('weather.humidity')}
                </span>
                <span className="text-[18px] font-bold text-[#1a1a1a]">
                  {todayWeather.humidity}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-black uppercase tracking-[0.2em] text-[#1a1a1a]/30">
                  {t('weather.feelsLike')}
                </span>
                <span className="text-[18px] font-bold text-[#1a1a1a]">
                  {todayWeather.temp - 1}°
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#1a1a1a]/10 mb-8" />

            {/* Date & Location */}
            <div className="mb-8">
              <p className="text-[14px] font-bold uppercase tracking-[0.15em] text-[#1a1a1a]/50 mb-1">
                {formattedDate}
              </p>
              <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-[#1a1a1a]/35">
                {t('weather.location')}
              </p>
            </div>

            {/* Description */}
            <p className="text-[16px] text-[#1a1a1a]/60 font-medium leading-relaxed max-w-[280px] mb-10 text-pretty">
              {t('weather.prediction.' + currentCondition.toLowerCase() + '0' + (new Date().getDate() % 3 + 1))}
            </p>

            {/* Spacer fills remaining space naturally */}
            <div className="flex-1 min-h-[40px]" />

            {/* See All Link */}
            <button
              onClick={() => setShowAllModal(true)}
              className="group flex items-center gap-2 text-[14px] font-black uppercase tracking-[0.2em] text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors mb-10"
            >
              {t('weather.seeAll')}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[12px] group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px bg-[#1a1a1a]/8 self-stretch my-16" />

          {/* ════════════════════════════════════════════════════════════
              RIGHT PANEL — Featured Card + Info Bar
          ════════════════════════════════════════════════════════════ */}
          <div className="flex-1 flex flex-col py-16 lg:py-20 lg:pl-12">
            {/* Image Card */}
            <div className="relative flex-1 min-h-[450px] rounded-[32px] overflow-hidden">
              {loading ? (
                <div className="w-full h-full min-h-[450px] bg-[#1a1a1a]/5 animate-pulse" />
              ) : rec ? (
                <>
                  {/* Image */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={rec.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <ImageWithSkeleton
                        src={rec.imageUrl}
                        alt={rec.name}
                        className="w-full h-full object-cover"
                        wrapperClassName="w-full h-full"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                  {/* Nav Arrows — Inside Card Top-Right */}
                  <div className="absolute top-6 right-6 z-30 flex items-center gap-2">
                    <button
                      onClick={prev}
                      aria-label="Previous"
                      className="w-10 h-10 rounded-full border border-white/25 text-white/70 hover:bg-white/15 hover:text-white flex items-center justify-center transition-all"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next"
                      className="w-10 h-10 rounded-full border border-white/25 text-white/70 hover:bg-white/15 hover:text-white flex items-center justify-center transition-all"
                    >
                      <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 z-20 p-8 lg:p-10 flex flex-col">
                    {/* Top: Badge */}
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-2 text-[12px] tracking-[0.2em] text-white uppercase bg-black/30 backdrop-blur-md px-4 py-2 border border-white/15 font-black rounded-full">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        {t('weather.matchForToday')}
                      </span>
                      <span className="text-[14px] tracking-[0.2em] text-white/80 uppercase font-black">
                        {t('activity.categories.' + rec.category.toLowerCase().replace(/\s+/g, '').replace(/&/g, ''))}
                      </span>
                    </div>

                    {/* Bottom Content */}
                    <div className="mt-auto pt-[25%]">
                      <h3 className="text-[40px] lg:text-[52px] font-black text-white uppercase leading-[0.9] tracking-tight mb-4">
                        {rec.name}
                      </h3>
                      <p className="text-[16px] text-white/80 font-medium leading-relaxed max-w-lg mb-8">
                        {rec.description}
                      </p>

                      {/* Buttons: View Details + Google Maps icon only */}
                      <div className="flex items-center gap-3">
                        <a
                          href={getGoogleMapsSearchUrl(rec.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a1a1a] text-[14px] font-black uppercase tracking-[0.15em] rounded-full hover:bg-white/90 transition-all"
                        >
                          {t('weather.viewDetails')}
                          <FontAwesomeIcon icon={faArrowRight} className="text-[12px]" />
                        </a>
                        <a
                          href={getGoogleMapsSearchUrl(rec.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full border border-white/40 text-white/80 hover:bg-white/15 hover:text-white flex items-center justify-center transition-all"
                          aria-label="Open in Google Maps"
                        >
                          <FontAwesomeIcon icon={faMapLocationDot} className="text-sm" />
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>

            {/* Info Bar — Outside the card, single row, no distance */}
            {!loading && rec && (
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faClock} className="text-[#1a1a1a]/25 text-base" />
                    <span className="text-[14px] font-black uppercase tracking-[0.15em] text-[#1a1a1a]/40">{t('weather.timeToGo')}</span>
                    <span className="text-[16px] font-bold text-[#1a1a1a]">{rec.idealTime.map((time: string) => t('weather.time.' + time.toLowerCase())).join(" / ")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faCloudSun} className="text-[#1a1a1a]/25 text-base" />
                    <span className="text-[14px] font-black uppercase tracking-[0.15em] text-[#1a1a1a]/40">{t('weather.bestFor')}</span>
                    <span className="text-[16px] font-bold text-[#1a1a1a]">{rec.idealWeather === 'Any' ? t('weather.any') : t('weather.condition.' + rec.idealWeather.toLowerCase())}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faUsers} className="text-[#1a1a1a]/25 text-base" />
                    <span className="text-[14px] font-black uppercase tracking-[0.15em] text-[#1a1a1a]/40">{t('weather.crowdLevel')}</span>
                    <span className="text-[16px] font-bold text-[#1a1a1a]">
                      {rec.popularity > 0.9 ? t('weather.high') : rec.popularity > 0.8 ? t('weather.medium') : t('weather.low')}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Recommendations Modal */}
      <RecommendationsModal
        isOpen={showAllModal}
        onClose={() => setShowAllModal(false)}
        recommendations={recommendations}
      />
    </>
  );
}
