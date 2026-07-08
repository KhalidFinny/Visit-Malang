import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { activitiesData } from "./ActivitiesData";
import { ImageWithSkeleton } from "../../shared/Skeleton";
import MountainSunrisePredictor from "./parts/MountainSunrisePredictor";
import PlaceSafetyAdvisory from "./parts/PlaceSafetyAdvisory";
import PlaceAltitudeAdvisor from "./parts/PlaceAltitudeAdvisor";
import PlaceCashAdvisor from "./parts/PlaceCashAdvisor";
import type { Place, Activity, BestTime, PlaceSafetyData, PlaceFeeData, PlaceAltitudeAdvisorData } from "./types";

const PlaceDetail = () => {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [safety, setSafety] = useState<PlaceSafetyData | null>(null);
  const [fees, setFees] = useState<PlaceFeeData | null>(null);
  const [altitude, setAltitude] = useState<PlaceAltitudeAdvisorData | null>(null);

  useEffect(() => {
    if (!slug) return;
    fetch("/api/safety").then(r => r.json()).then((d: unknown) => {
      if (Array.isArray(d)) { const m = d.find((i: Record<string, unknown>) => i.slug === slug); if (m) { const isMtn = slug?.includes("bromo") || slug?.includes("semeru") || slug?.includes("budug") || slug?.includes("asu"); setSafety({ ...(m as PlaceSafetyData), contextType: isMtn ? "trail" : "urban" } as PlaceSafetyData); } }
    }).catch(() => {});
    fetch("/api/fees").then(r => r.json()).then((d: unknown) => { if (Array.isArray(d)) { const m = d.find((i: Record<string, unknown>) => i.slug === slug); if (m) setFees(m as PlaceFeeData); } }).catch(() => {});
    fetch("/api/altitudes").then(r => r.json()).then((d: unknown) => { if (Array.isArray(d)) { const m = d.find((i: Record<string, unknown>) => i.slug === slug); if (m) setAltitude(m as PlaceAltitudeAdvisorData); } }).catch(() => {});
  }, [slug]);

  const toSlug = (text: string) => text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  let found: Place | null = null;
  for (const cat of Object.values(activitiesData)) { const p = cat.places.find((pl) => toSlug(pl.title) === slug); if (p) { found = p; break; } }
  const data = found;
  if (!data) return <div className="w-full min-h-screen bg-[#121212] text-white/90 flex items-center justify-center p-10">{t('placeDetail.notFound')}</div>;

  const hasThings = Array.isArray(data.thingsToDo) && data.thingsToDo.length > 0;
  const hasTips = Array.isArray(data.tips) && data.tips.length > 0;
  const hasGallery = Array.isArray(data.gallery) && data.gallery.length > 0;
  const hasLocation = data.location?.lat !== undefined && data.location?.lng !== undefined;
  const galleryImages = hasGallery ? [...data.gallery].slice(0, 6) : [];
  const isMountain = slug?.includes("bromo") || slug?.includes("semeru") || slug?.includes("budug") || slug?.includes("asu") || data.title.toLowerCase().includes("mount") || data.title.toLowerCase().includes("gunung") || data.title.toLowerCase().includes("bukit") || data.title.toLowerCase().includes("puncak") || data.title.toLowerCase().includes("volcano");
  const hasBestTime = Array.isArray(data.bestTime) && data.bestTime.length > 0;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}
      className="w-full min-h-screen bg-[#121212] text-white/90 font-swiss">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full h-[70vh] lg:h-[80vh] overflow-hidden">
        <ImageWithSkeleton src={data.heroImage} alt={data.title}
          className="absolute inset-0 w-full h-full object-cover"
          wrapperClassName="absolute inset-0 w-full h-full"
          loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/10 to-transparent" />

        <button onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 flex items-center justify-center transition cursor-pointer">
          <FontAwesomeIcon icon={faArrowLeft} className="text-sm text-white/80" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-10 sm:px-14 sm:pb-14 lg:px-20 lg:pb-20">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/50 border border-white/10 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm">
              {t('placeDetail.discover')}
            </span>
            {data.location && (
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#A3B18A] bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1.5 text-[10px]" />
                {Math.abs(data.location.lat).toFixed(2)}° S
              </span>
            )}
          </div>
          <h1 className={`font-editorial text-6xl sm:text-8xl lg:text-9xl uppercase tracking-tight leading-none text-white ${data.title.split(' ').length <= 3 ? 'text-nowrap' : 'text-balance'}`}>{data.title}</h1>
        </div>
      </section>

      {/* ─── BODY ─────────────────────────────────────────── */}
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-28 pb-32">

        {/* ── Introduction ────────────────────────────────── */}
        <div className="max-w-4xl py-14 lg:py-20">
          <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed">{data.description}</p>
          {data.location && (
            <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-white/5">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-white/40">{t('placeDetail.location')}</span>
                <p className="text-sm text-white/60 mt-0.5">{data.location.lat.toFixed(4)}°, {data.location.lng.toFixed(4)}°</p>
              </div>
              {altitude && <div>
                <span className="text-sm font-bold uppercase tracking-widest text-white/40">Elevation</span>
                <p className="text-sm text-white/60 mt-0.5">{altitude.altitude.toLocaleString()}m</p>
              </div>}
            </div>
          )}
        </div>

        {/* ── Safety Banner ───────────────────────────────── */}
        {safety && <div className="mb-8"><PlaceSafetyAdvisory safety={safety} /></div>}

        {/* ── Info Cards ──────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-20 lg:mb-28">
          {fees && slug && <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl"><PlaceCashAdvisor slug={slug} fees={fees} /></div>}
          {altitude && <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl"><PlaceAltitudeAdvisor altitude={altitude} /></div>}
          {isMountain && data.location && <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl"><MountainSunrisePredictor lat={data.location.lat} lng={data.location.lng} /></div>}
          {hasBestTime && (
            <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-5">
                <FontAwesomeIcon icon={faClock} className="text-sm text-[#A3B18A]" />
                <span className="text-sm font-bold uppercase tracking-widest text-[#A3B18A]">Best Time to Visit</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.bestTime.map((bt: BestTime, i: number) => (
                  <div key={i} className="bg-[#121212] border border-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <FontAwesomeIcon icon={faClock} className="text-xs text-[#A3B18A]" />
                      <span className="text-sm font-bold tracking-wider text-white/50">{bt.label}</span>
                    </div>
                    <p className="text-base font-bold text-white">{bt.value}</p>
                    <div className="mt-2.5 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: bt.intensity, backgroundColor: bt.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Activities ──────────────────────────────────── */}
        {hasThings && (
          <section className="mb-20 lg:mb-28 border-t border-white/5 pt-12 lg:pt-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#A3B18A] mb-8">{t('placeDetail.whatYouCanDo')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {data.thingsToDo.map((item: Activity, i: number) => (
                <div key={i} className="p-6 lg:p-8 bg-[#1a1a1a] border border-white/5 rounded-2xl hover:bg-[#1f1f1f] transition-colors">
                  <div className="flex items-start gap-5">
                    <span className="text-2xl lg:text-3xl text-white/10 font-black tabular-nums mt-0.5 shrink-0">{(i + 1).toString().padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-bold text-base lg:text-lg text-white mb-2">{item.title}</h3>
                      <p className="text-sm lg:text-base text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Tips ──────────────────────────────────────────── */}
        {hasTips && (
          <section className="mb-20 lg:mb-28 border-t border-white/5 pt-12 lg:pt-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#A3B18A] mb-6">{t('placeDetail.tipsAndAdvice')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.tips.map((tip: string, i: number) => (
                <div key={i} className="flex gap-4 p-5 lg:p-6 bg-[#1a1a1a] border border-white/5 rounded-xl items-start">
                  <span className="text-sm text-white/20 font-black mt-0.5 shrink-0 w-6">{(i + 1).toString().padStart(2, "0")}</span>
                  <p className="text-sm lg:text-base text-white/70 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Story ──────────────────────────────────────────── */}
        {data.story && (
          <section className="mb-20 lg:mb-28 border-t border-white/5 pt-12 lg:pt-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#A3B18A] mb-6">{t('placeDetail.story')}</h2>
            <div className="border-l-4 border-[#A3B18A]/40 pl-6 lg:pl-10">
              <p className="text-lg lg:text-xl xl:text-2xl text-white/60 leading-relaxed font-light italic">&ldquo;{data.story}&rdquo;</p>
            </div>
          </section>
        )}

        {/* ── Map ────────────────────────────────────────────── */}
        {hasLocation && (
          <section className="mb-20 lg:mb-28 border-t border-white/5 pt-12 lg:pt-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#A3B18A] mb-6">{t('placeDetail.location')}</h2>
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <iframe title={data.title} width="100%" height="380" loading="lazy"
                style={{ border: 0, filter: "grayscale(30%) brightness(0.55)", display: "block" }}
                src={`https://www.google.com/maps?q=${data.location.lat},${data.location.lng}&output=embed`} />
              <a href={`https://maps.google.com/?q=${data.location.lat},${data.location.lng}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 bg-[#1a1a1a] border-t border-white/5 text-white/50 hover:text-white/80 text-sm transition">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-sm" />
                {t('placeDetail.openInMaps')}
              </a>
            </div>
          </section>
        )}

        {/* ── Gallery ────────────────────────────────────────── */}
        {hasGallery && galleryImages.length > 0 && (
          <section className="border-t border-white/5 pt-12 lg:pt-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#A3B18A] mb-6">{t('placeDetail.gallery')}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
              {galleryImages.map((img: string, i: number) => (
                <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer">
                  <ImageWithSkeleton src={img} alt={`${data.title} ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    wrapperClassName="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-3 right-3 text-sm text-white/40 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </motion.div>
  );
};

export default PlaceDetail;
