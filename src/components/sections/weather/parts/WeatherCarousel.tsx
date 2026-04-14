import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import NavButton from "../../../shared/parts/NavButton";
import RecommendationCard from "../RecommendationCard";
import type { WeatherCarouselProps } from "../types";

export default function WeatherCarousel({
  recommendations,
  activeIndex,
  setActiveIndex,
  next,
  prev,
}: WeatherCarouselProps) {
  return (
    <div className="relative flex flex-col justify-center w-full h-full min-h-[640px]">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-8 px-2">
        <NavButton
          icon={faChevronLeft}
          onClick={prev}
          direction="left"
          ariaLabel="Previous destination"
          className="text-midnight-steel border-2"
        />
        <span className="text-swiss text-lg font-black tracking-[0.2em] uppercase text-midnight-steel">
          EXPLORE DESTINATIONS
        </span>
        <NavButton
          icon={faChevronRight}
          onClick={next}
          direction="right"
          ariaLabel="Next destination"
          className="text-midnight-steel border-2"
        />
      </div>

      {/* Card Stack Frame */}
      <div
        className="relative flex-1 flex items-center justify-center overflow-hidden border-2 border-midnight-steel/10 rounded-[2.5rem]"
        style={{ perspective: "1200px" }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {recommendations.map((rec, index) => {
            let relativeIndex = index - activeIndex;
            if (relativeIndex > recommendations.length / 2)
              relativeIndex -= recommendations.length;
            if (relativeIndex < -recommendations.length / 2)
              relativeIndex += recommendations.length;

            return (
              <RecommendationCard
                key={rec.id}
                recommendation={rec}
                index={index}
                relativeIndex={relativeIndex}
                onClick={() => setActiveIndex(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
