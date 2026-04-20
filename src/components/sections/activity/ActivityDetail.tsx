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
          onClick={() => navigate(-1)}
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
        <div className="absolute inset-0 flex flex-col justify-end px-16 pb-14 max-w-[620px]">
          <h1 className="text-[clamp(44px,5vw,72px)] font-extrabold leading-none tracking-tight mb-3 uppercase">
            {currentPlace.title}
          </h1>

          <p className="text-white/70 text-[14px] leading-relaxed mb-6 max-w-[420px]">
            {currentPlace.description}
          </p>

          <button
            onClick={handleExplore}
            className="flex items-center gap-2 px-6 py-2.5 bg-[#e50914] text-white text-sm font-semibold rounded hover:opacity-85 transition w-fit"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Jelajahi
          </button>
        </div>
      </div>

      {/* ================= DESTINASI ================= */}
      <div className="w-full bg-black px-10 h-[260px] flex-shrink-0">

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
          className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {data.places.map((place, i) => (
            <div
              key={i}
              onClick={() => handlePlaceClick(i)}
              className={`group relative flex-shrink-0 rounded-md overflow-hidden cursor-pointer transition
                ${selectedPlace === i ? "ring-2 ring-red-600 scale-[1.04]" : ""}
              `}
              style={{ width: "260px", height: "160px" }}
            >
              <img
                src={place.heroImage}
                alt={place.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

              <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-[11px] font-bold uppercase tracking-wide">
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