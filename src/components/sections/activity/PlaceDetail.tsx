import { useParams, useNavigate } from "react-router-dom";
import { activitiesData } from "./ActivitiesData";

const PlaceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const toSlug = (text: string = "") =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  let data: any = null;

  for (const category of Object.values(activitiesData)) {
    const found = category.places.find(
      (place) => toSlug(place.title) === slug
    );
    if (found) {
      data = found;
      break;
    }
  }

  if (!data) {
    return <div className="text-white p-10">Place not found</div>;
  }

  const hasThingsToDo =
    Array.isArray(data.thingsToDo) && data.thingsToDo.length > 0;
  const hasTips = Array.isArray(data.tips) && data.tips.length > 0;
  const hasGallery = Array.isArray(data.gallery) && data.gallery.length > 0;
  const hasBestTime =
    Array.isArray(data.bestTime) && data.bestTime.length > 0;
  const hasLocation =
    data.location?.lat !== undefined && data.location?.lng !== undefined;

  const galleryImages: string[] = hasGallery
    ? [...data.gallery, ...data.gallery, ...data.gallery].slice(0, 6)
    : [];

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* HERO */}
      <div className="relative w-full h-[80vh]">
        {data.heroImage ? (
          <img
            src={data.heroImage}
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-zinc-900" />
        )}

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.3) 40%, rgba(10,10,10,0.85) 75%, #0a0a0a 100%)",
          }}
        />

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

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-6 w-full">
            <div className="max-w-[720px] mt-10">
              <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none whitespace-nowrap">
                {data.title}
              </h1>
              <p className="text-white/70 mt-5 text-base md:text-lg leading-relaxed max-w-lg">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-5xl mx-auto px-6 pb-16 space-y-16">

        {/* THINGS TO DO */}
        {hasThingsToDo && (
          <section>
            <p className="text-white/30 uppercase text-xs tracking-widest mb-5">
              What You Can Do
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {data.thingsToDo.map((item: any, i: number) => (
                <div
                  key={i}
                  className="p-5 bg-white/[0.04] border border-white/[0.06] rounded-2xl hover:bg-white/[0.07] transition"
                >
                  <p className="font-semibold text-sm text-white">{item.title}</p>
                  <p className="text-white/50 text-xs mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TIPS */}
        {hasTips && (
          <section>
            <p className="text-white/30 uppercase text-xs tracking-widest mb-5">
              Tips & Advice
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.tips.map((tip: string, i: number) => (
                <div
                  key={i}
                  className="flex gap-4 px-6 py-5 bg-white/[0.03] border border-white/[0.05] rounded-2xl hover:bg-white/[0.05] transition"
                >
                  <span className="text-white/40 text-xs mt-0.5 shrink-0 font-black">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* STORY */}
        {data.story && (
          <section>
            <p className="text-white/30 uppercase text-xs tracking-widest mb-5">
              Story
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
              {data.story}
            </p>
          </section>
        )}

        {/* LOCATION */}
        {hasLocation && (
          <section>
            <p className="text-white/30 uppercase text-xs tracking-widest mb-5">
              Location
            </p>
            <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
              <iframe
                title={"Map of " + data.title}
                width="100%"
                height="300"
                style={{
                  border: 0,
                  filter: "grayscale(30%) brightness(0.75)",
                  display: "block",
                }}
                loading="lazy"
                src={
                  "https://www.google.com/maps?q=" +
                  data.location.lat +
                  "," +
                  data.location.lng +
                  "&output=embed"
                }
              />
              <a
                href={
                  "https://maps.google.com/?q=" +
                  data.location.lat +
                  "," +
                  data.location.lng
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-4 bg-white/[0.04] border-t border-white/[0.06] text-white/50 text-sm hover:text-white/80 transition"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                Buka di Google Maps
              </a>
            </div>
          </section>
        )}

        {/* GALLERY — PARALLAX STICKY STACKING */}
        {/* GALLERY — IMPROVED PARALLAX */}
{hasGallery && (
  <section>
    <p className="text-white/30 uppercase text-xs tracking-widest mb-10">
      Gallery
    </p>

    <div
      style={{
        position: "relative",
        height: `${galleryImages.length * 90}vh`,
      }}
    >
      {galleryImages.map((img, i) => (
        <div
          key={i}
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            zIndex: i + 1,
          }}
          className="flex items-center justify-center"
        >
          <div className="relative w-full h-[80vh] mx-6 rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">

            {/* IMAGE */}
            <img
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out scale-[1.05]"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* GLASS OVERLAY (biar depth) */}
            <div className="absolute inset-0 backdrop-blur-[2px] opacity-[0.15]" />

            {/* INDEX */}
            <div className="absolute bottom-6 right-6 text-white/40 text-xs tracking-[3px] font-mono">
              {String(i + 1).padStart(2, "0")} /{" "}
              {String(galleryImages.length).padStart(2, "0")}
            </div>

          </div>
        </div>
      ))}
    </div>
  </section>
)}

      </div>
    </div>
  );
};

export default PlaceDetail;