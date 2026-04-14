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
    timeOfDay
  } = useWeatherState();

  return (
    <section className={`relative w-full bg-colonial-cream transition-opacity duration-700 ${loading ? 'opacity-50' : 'opacity-100'}`}>
      <div className="swiss-container">
        {/* Top Label Bar */}
        <div className="flex items-center justify-between py-10 border-b-2 border-midnight-steel/20 mb-0">
          <span className="text-swiss text-lg font-black tracking-[0.2em] text-midnight-steel uppercase">
            02 / Daily Conditions
          </span>
          <time className="text-swiss text-lg tracking-widest text-midnight-steel uppercase font-black">
            {date}
          </time>
        </div>

        {/* Two-column layout: Sidebar + Carousel */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {/* Left: Editorial Sidebar */}
          <div className="lg:w-[380px] xl:w-[440px] shrink-0 border-r border-midnight-steel/10 py-16 pr-12">
            {loading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-midnight-steel/10 rounded w-3/4"></div>
                <div className="h-4 bg-midnight-steel/10 rounded w-full"></div>
                <div className="h-4 bg-midnight-steel/10 rounded w-5/6"></div>
              </div>
            ) : (
              <WeatherSidebar
                predictionText={predictionText}
                temp={todayWeather.temp}
                condition={todayWeather.condition}
                currentIcon={currentInfo.icon}
                weatherChips={weatherChips}
              />
            )}
          </div>

          {/* Right: Carousel */}
          <div className="flex-1 py-12 pl-0 lg:pl-8 flex flex-col">
            {loading ? (
              <div className="animate-pulse h-64 bg-midnight-steel/5 rounded-xl"></div>
            ) : (
              <WeatherCarousel
                recommendations={recommendations}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                next={next}
                prev={prev}
              />
            )}
          </div>
        </div>

        {/* Footer Pagination */}
        <WeatherFooter
          activeIndex={activeIndex}
          totalItems={recommendations.length}
        />
      </div>
    </section>
  );
}
