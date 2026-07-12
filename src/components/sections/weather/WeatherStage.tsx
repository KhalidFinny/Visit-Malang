import { useState, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from "framer-motion";
import {
  faChevronLeft, faChevronRight, faMapLocationDot,
  faArrowRight, faClock, faUsers, faWind,
  faDroplet, faTemperatureHalf, faCloudSun, faLeaf,
  faLandmark, faUtensils, faCompass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWeatherState } from "./hooks/useWeatherState";
import RecommendationsModal from "./parts/RecommendationsModal";
import { useResponsiveScale } from "../../hooks/useResponsiveScale";
import { ImageWithSkeleton } from "../../shared/Skeleton";

function getGoogleMapsSearchUrl(name: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' Malang Indonesia')}`;
}

export default function WeatherStage() {
  const { t, i18n } = useTranslation();
  const { isPhone, isTablet } = useResponsiveScale();
  const isMobileView = isPhone || isTablet;

  /** Show the current weather condition instead of "Any" for adaptable places */
  function displayWeather(ideal: string): string {
    return ideal === 'Any' ? currentCondition : ideal;
  }
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const rec = recommendations[activeIndex];
  const mobileRecommendations = recommendations.slice(0, 4);
  const mobileFeatured = mobileRecommendations[0];
  const mobileSecondary = mobileRecommendations.slice(1);

  const formattedDate = new Intl.DateTimeFormat(
    i18n.language || 'en',
    { weekday: 'long', day: 'numeric', month: 'long' }
  ).format(date);

  // ── PHONE: full mobile-native redesign ─────────────────────────
  if (isMobileView) {
    return (
      <>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full bg-[#f5f4f0]"
        >
          <div className="flex flex-col">
            {/* ── Mobile Weather Summary ───────────────────────── */}
            <div className="px-5 pt-7 pb-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-sm font-black uppercase tracking-[0.26em] text-[#1a1a1a]/28">
                    {t('weather.recommendation')}
                  </span>
                  <p className="mt-1 text-sm font-medium text-[#1a1a1a]/38">
                    {formattedDate}
                  </p>
                </div>
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#dfe4cf]/45 text-[#788056]">
                  <FontAwesomeIcon icon={currentInfo.icon} className="text-[26px]" />
                </div>
              </div>

              <div className="mt-5 flex items-end gap-3">
                <span className="font-thin text-[68px] leading-[0.82] tracking-tighter text-[#1a1a1a] tabular-nums">
                  {todayWeather.temp}°
                </span>
                <div className="pb-2">
                  <p className="text-[17px] font-bold text-[#1a1a1a]/88">
                    {t('weather.condition.' + todayWeather.condition.toLowerCase())}
                  </p>
                  <p className="mt-2 text-sm font-black uppercase tracking-[0.22em] text-[#1a1a1a]/30">
                    {t('weather.location')}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-stretch border-y border-[#1a1a1a]/10">
                <div className="flex-1 min-w-0 py-4 pr-3 text-center">
                  <FontAwesomeIcon icon={faWind} className="mb-2 text-[12px] text-[#1a1a1a]/32" />
                  <div className="text-[16px] font-black text-[#1a1a1a]/82">{todayWeather.windSpeed} m/s</div>
                  <div className="mt-1 text-sm font-black uppercase tracking-[0.18em] text-[#1a1a1a]/34">{t('weather.wind')}</div>
                </div>
                <div className="flex-1 min-w-0 border-l border-[#1a1a1a]/10 px-3 py-4 text-center">
                  <FontAwesomeIcon icon={faDroplet} className="mb-2 text-[12px] text-[#1a1a1a]/32" />
                  <div className="text-[16px] font-black text-[#1a1a1a]/82">{todayWeather.humidity}%</div>
                  <div className="mt-1 text-sm font-black uppercase tracking-[0.18em] text-[#1a1a1a]/34">{t('weather.humidity')}</div>
                </div>
                <div className="flex-1 min-w-0 border-l border-[#1a1a1a]/10 pl-3 py-4 text-center">
                  <FontAwesomeIcon icon={faTemperatureHalf} className="mb-2 text-[12px] text-[#1a1a1a]/32" />
                  <div className="text-[16px] font-black text-[#1a1a1a]/82">{todayWeather.temp - 1}°</div>
                  <div className="mt-1 text-sm font-black uppercase tracking-[0.18em] text-[#1a1a1a]/34">{t('weather.feelsLike')}</div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-4 rounded-[24px] border border-[#1a1a1a]/10 bg-[#f5f4f0] px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eef1e2] text-[#788056]">
                  <FontAwesomeIcon icon={currentInfo.icon} className="text-[18px]" />
                </div>
                <p className="text-[13px] font-medium leading-relaxed text-[#1a1a1a]/68">
                  {t('weather.prediction.' + currentCondition.toLowerCase() + '0' + (new Date().getDate() % 3 + 1))}
                </p>
              </div>
            </div>

            {/* ── Recommendations Header ─────────────────────── */}
            <div className="flex items-center justify-between gap-4 px-5 pb-4">
              <div className="flex items-center gap-3 flex-wrap">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#5f6c3d]">
                  {t('weather.matchForToday')}
                </p>
                <p className="text-sm font-medium text-[#1a1a1a]/46">
                  {recommendations.length} {t('weather.placesMatched')}
                </p>
              </div>
            </div>

            {/* ── Featured Recommendation ─────────────────────── */}
            <div className="px-5">
              {loading ? (
                <div className="h-[330px] animate-pulse rounded-[24px] bg-[#1a1a1a]/5" />
              ) : mobileFeatured ? (
                <motion.article
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-[24px] border border-[#1a1a1a]/8 bg-[#f5f4f0] p-3 shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
                >
                  <div className="grid grid-cols-[1.05fr,0.95fr] gap-4">
                    <div className="relative min-h-[226px] overflow-hidden rounded-[18px] bg-[#1a1a1a]/5">
                      <ImageWithSkeleton
                        src={mobileFeatured.imageUrl}
                        alt={mobileFeatured.name}
                        className="h-full w-full object-cover"
                        wrapperClassName="h-full w-full"
                      />
                      <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-[#A3B18A]/25 bg-[#f5f4f0]/95 px-3 py-1.5 text-sm font-black uppercase tracking-[0.18em] text-[#4a5e3a]">
                        <FontAwesomeIcon
                          icon={
                            mobileFeatured.semanticCategory === 'Nature'
                              ? faLeaf
                              : mobileFeatured.semanticCategory === 'Historical'
                              ? faLandmark
                              : mobileFeatured.semanticCategory === 'Culinary'
                              ? faUtensils
                              : faCompass
                          }
                          className="text-sm"
                        />
                        {t('activity.categories.' + mobileFeatured.category.toLowerCase().replace(/\s+/g, '').replace(/&/g, ''))}
                      </div>
                    </div>

                    <div className="flex flex-col py-2 pr-1">
                      <h3 className="truncate text-[18px] font-bold leading-[1.08] text-[#1a1a1a]">
                        {mobileFeatured.name}
                      </h3>

                      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#1a1a1a]/8 bg-[#f5f4f0] px-3.5 py-3 text-sm font-medium text-[#1a1a1a]/72">
                        <span className="text-[14px]">
                          {displayWeather(mobileFeatured.idealWeather) === 'Sunny'
                            ? '☀️'
                            : displayWeather(mobileFeatured.idealWeather) === 'Rainy'
                            ? '🌧️'
                            : '☁️'}
                        </span>
                        <span>{mobileFeatured.idealTime.slice(0, 2).map((time: string) => t('weather.time.' + time.toLowerCase())).join(' • ')}</span>
                      </div>

                      <div className="mt-4 inline-flex w-fit rounded-full bg-[#A3B18A]/16 px-3 py-1.5 text-sm font-black uppercase tracking-[0.16em] text-[#4a5e3a]">
                        {Math.round(mobileFeatured.popularity * 100)}%
                      </div>

                      <p className="mt-4 text-[13px] font-medium leading-relaxed text-[#4a5e3a]/78">
                        {displayWeather(mobileFeatured.idealWeather) === 'Sunny'
                          ? 'Clear weather • Low rain risk • Great visibility'
                          : displayWeather(mobileFeatured.idealWeather) === 'Rainy'
                          ? 'Rain-ready route • Bring a light layer'
                          : 'Cooler air • Soft light • Easy daytime visit'}
                      </p>

                      <a
                        href={getGoogleMapsSearchUrl(mobileFeatured.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto ml-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#A3B18A]/28 bg-[#f5f4f0] text-[#4a5e3a] transition-colors hover:bg-[#A3B18A]/10"
                      >
                        <FontAwesomeIcon icon={faArrowRight} className="text-[13px]" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ) : null}
            </div>

            {/* ── Secondary Recommendations ──────────────────── */}
            <div ref={scrollRef} className="flex flex-col gap-3 px-5 pt-3 pb-6">
              {loading ? (
                <>
                  <div className="h-[112px] animate-pulse rounded-[18px] bg-[#1a1a1a]/5" />
                  <div className="h-[112px] animate-pulse rounded-[18px] bg-[#1a1a1a]/5" />
                  <div className="h-[112px] animate-pulse rounded-[18px] bg-[#1a1a1a]/5" />
                </>
              ) : (
                mobileSecondary.map((rec, i) => (
                  <motion.article
                    key={rec.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (i + 1) * 0.05, duration: 0.3 }}
                    className="rounded-[18px] border border-[#1a1a1a]/8 bg-[#f5f4f0] px-3 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.03)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-[86px] w-[92px] shrink-0 overflow-hidden rounded-[14px] bg-[#1a1a1a]/5">
                        <ImageWithSkeleton
                          src={rec.imageUrl}
                          alt={rec.name}
                          className="h-full w-full object-cover"
                          wrapperClassName="h-full w-full"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#4a5e3a]/78">
                          {t('activity.categories.' + rec.category.toLowerCase().replace(/\s+/g, '').replace(/&/g, ''))}
                        </p>
                        <h4 className="mt-1 text-base font-semibold leading-tight text-[#1a1a1a] truncate">
                          {rec.name}
                        </h4>
                        <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-[#4a5e3a]/78">
                          <span className="text-[13px]">
                            {displayWeather(rec.idealWeather) === 'Sunny'
                              ? '☀️'
                              : displayWeather(rec.idealWeather) === 'Rainy'
                              ? '🌧️'
                              : '☁️'}
                          </span>
                          <span>{rec.idealTime.slice(0, 2).map((time: string) => t('weather.time.' + time.toLowerCase())).join(' • ')}</span>
                        </div>
                      </div>

                      <div className="flex shrink-0 flex-col items-end gap-3">
                        <span className="rounded-full bg-[#A3B18A]/16 px-3 py-1 text-sm font-black uppercase tracking-[0.14em] text-[#4a5e3a]">
                          {Math.round(rec.popularity * 100)}%
                        </span>
                        <a
                          href={getGoogleMapsSearchUrl(rec.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A3B18A]/25 text-[#4a5e3a] transition-colors hover:bg-[#A3B18A]/10"
                        >
                          <FontAwesomeIcon icon={faArrowRight} className="text-[12px]" />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))
              )}
            </div>

            {/* ── Bottom CTA ─────────────────────────────────── */}
            {mobileFeatured && !loading && (
              <div className="px-5 pb-8">
                <button
                  onClick={() => setShowAllModal(true)}
                  className="flex w-full items-center justify-center gap-3 rounded-[18px] border border-[#A3B18A]/45 bg-[#f5f4f0] px-5 py-4 text-sm font-black uppercase tracking-[0.22em] text-[#4a5e3a] transition-colors hover:bg-[#A3B18A]/10"
                >
                  {t('weather.allRecommendations')}
                  <FontAwesomeIcon icon={faArrowRight} className="text-[12px]" />
                </button>
              </div>
            )}
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

  // ── DESKTOP (unchanged) ───────────────────────────────────────
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
                      <span className="flex items-center gap-2 text-sm tracking-[0.2em] text-white uppercase bg-black/30 backdrop-blur-md px-4 py-2 border border-white/15 font-black rounded-full">
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
                    <span className="text-[16px] font-bold text-[#1a1a1a]">{t('weather.condition.' + displayWeather(rec.idealWeather).toLowerCase())}</span>
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
