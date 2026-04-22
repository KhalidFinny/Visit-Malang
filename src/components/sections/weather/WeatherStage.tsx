import { AnimatePresence, motion } from "framer-motion";
import { useWeatherState } from "./hooks/useWeatherState";
import WeatherSidebar from "./parts/WeatherSidebar";
import WeatherCarousel from "./parts/WeatherCarousel";
import WeatherFooter from "./parts/WeatherFooter";

export default function WeatherStage() {
  const {
    activeIndex,
    setActiveIndex,
    date,
    next,
    prev,
    currentInfo,
    predictionText,
    weatherChips,
    recommendations,
    todayWeather,
    loading,
    hourlyForecast
  } = useWeatherState();

  const activeImage = recommendations[activeIndex]?.imageUrl;

  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`relative w-full min-h-screen overflow-hidden bg-black transition-opacity duration-700 ${loading ? 'opacity-50' : 'opacity-100'}`}
    >
      {/* SECTION BRIDGE: Removed redundant top-down fade overlay */}

      {/* Immersive Dynamic Backdrop */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src={activeImage} 
              alt="Backdrop" 
              className="w-full h-full object-cover opacity-60 grayscale-[0.3]"
            />
            {/* Black crystalline overlay — Increased blur for airy feel */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-black/60 backdrop-blur-[12px]" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="swiss-container relative z-10">
        {/* Top Label Bar */}
        <div className="flex items-center justify-between py-6 border-b border-white/10 mb-0">
          <span className="text-swiss text-lg font-black tracking-[0.2em] text-white uppercase opacity-60">
            05 / Weather Recommendation
          </span>
          <time className="text-swiss text-lg tracking-widest text-white uppercase font-black opacity-60">
            {date}
          </time>
        </div>

        {/* Two-column layout: Sidebar + Carousel */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
          {/* Left: Editorial Sidebar */}
          <div className="lg:w-[400px] xl:w-[460px] shrink-0 border-r border-white/5 py-10 pr-12 lg:pr-20">
            {loading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-white/10 rounded w-3/4"></div>
                <div className="h-4 bg-white/10 rounded w-full"></div>
                <div className="h-4 bg-white/10 rounded w-5/6"></div>
              </div>
            ) : (
              <WeatherSidebar
                predictionText={predictionText}
                temp={todayWeather.temp}
                condition={todayWeather.condition}
                currentIcon={currentInfo.icon}
                weatherChips={weatherChips}
                hourlyForecast={hourlyForecast}
              />
            )}
          </div>

          {/* Right: Carousel */}
          <div className="flex-1 py-12 pl-0 lg:pl-8 flex flex-col">
            {loading ? (
              <div className="animate-pulse h-64 bg-white/5 rounded-xl"></div>
            ) : (
              <WeatherCarousel
                recommendations={recommendations}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                next={next}
                prev={prev}
              />
            )}

            {/* Compact Overview — Moved from Sidebar */}
            {!loading && (
              <div className="mt-12 border-l-2 border-white/30 pl-8 transition-all duration-500">
                <span className="text-swiss text-[10px] font-black tracking-[0.4em] uppercase text-white/50 block mb-2">
                  Overview —
                </span>
                <p className="text-swiss text-lg md:text-xl text-white font-bold leading-relaxed max-w-2xl italic opacity-90">
                  "{predictionText}"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Pagination */}
        <WeatherFooter
          activeIndex={activeIndex}
          totalItems={recommendations.length}
        />
      </div>
    </motion.section>
  );
}
