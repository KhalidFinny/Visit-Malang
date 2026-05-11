import React, { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { activitiesData } from "./ActivitiesData";

/* ================= TYPES ================= */
type Place = {
  title: string;
  description: string;
  heroImage: string;
};

type ActivityCategory = {
  title: string;
  places: Place[];
};

/* ================= UTILS ================= */
const toSlug = (text: string = "") =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

/* ================= COMPONENT ================= */
const ActivityDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedPlace, setSelectedPlace] = useState(0);

  /* 🔥 FIX: find category by slug */
  const data: ActivityCategory | undefined = Object.values(
    activitiesData as Record<string, ActivityCategory>
  ).find((cat) => toSlug(cat.title) === name);

  if (!data) {
    return <div className="text-white p-10">Activity not found</div>;
  }

  const currentPlace = data.places[selectedPlace];

  /* ================= HANDLERS ================= */
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -460 : 460,
      behavior: "smooth",
    });
  };

  const handleExplore = () => {
    const slug = toSlug(currentPlace.title);
    navigate(`/place/${slug}`);
  };

  const handlePlaceClick = (index: number) => {
    setSelectedPlace(index);
  };

  /* ================= RENDER ================= */
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative w-full flex-1 min-h-0">

        <img
          src={currentPlace.heroImage}
          alt={currentPlace.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

        {/* BACK */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-7 left-7 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 border border-white/20 hover:bg-black/60 transition"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* TEXT */}
        <div className="absolute inset-0 flex flex-col justify-end px-16 pb-14 max-w-[80%]">
          <h1 className="text-[clamp(32px,6vw,72px)] font-extrabold leading-none tracking-tight mb-3 uppercase whitespace-nowrap">
            {currentPlace.title}
          </h1>

          <p className="text-white/70 text-[14px] leading-relaxed mb-6 max-w-[420px]">
            {currentPlace.description}
          </p>

          <button
            onClick={handleExplore}
            className="flex items-center gap-2 px-8 py-3 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all w-fit"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Jelajahi
          </button>
        </div>
      </div>

      {/* ================= DESTINASI ================= */}
      <div className="w-full bg-black px-10 h-[320px] flex-shrink-0 overflow-hidden">

        <div className="flex items-center justify-between mb-3 pt-4">
          <h2 className="text-sm font-semibold text-white/90">
            Destinasi Lain
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 border border-white/15 hover:bg-white/20 transition"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* LIST */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-10 px-4 -mx-4"
        >
          {data.places.map((place, i) => (
            <div
              key={i}
              onClick={() => handlePlaceClick(i)}
              className={`group relative flex-shrink-0 w-[280px] h-[180px] rounded-xl overflow-hidden cursor-pointer transition-all duration-500
                ${selectedPlace === i ? "ring-2 ring-white scale-[1.05] z-10 shadow-[0_0_30px_rgba(255,255,255,0.2)]" : "opacity-40 hover:opacity-80"}
              `}
            >
              <img
                src={place.heroImage}
                alt={place.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:via-black/10 transition-all" />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[12px] font-black uppercase tracking-[0.2em] text-white">
                  {place.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;