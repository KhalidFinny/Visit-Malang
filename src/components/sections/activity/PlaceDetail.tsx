import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { activitiesData } from "./ActivitiesData";

const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div ref={ref} className="w-full h-full overflow-hidden relative">
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="absolute top-[-12%] left-0 w-full h-[124%] object-cover"
      />
    </div>
  );
};



// Upstream components
import MountainSunrisePredictor from "./parts/MountainSunrisePredictor";
import PlaceSafetyAdvisory from "./parts/PlaceSafetyAdvisory";
import BackButton from "../../shared/parts/BackButton";
import PlaceAltitudeAdvisor from "./parts/PlaceAltitudeAdvisor";
import PlaceCashAdvisor from "./parts/PlaceCashAdvisor";
import NewsEntrance from "../news/NewsEntrance";
import type { Place, PlaceSafetyData, PlaceFeeData, PlaceAltitudeAdvisorData } from "./types";

const FALLBACK_SAFETY: Record<string, Omit<PlaceSafetyData, 'contextType'>> = {
  "mount-bromo": {
    name: "Mount Bromo Crater Viewpoint",
    status: "open",
    details: "Weather clear. Normal activity. All main viewpoints (Penanjakan, King Kong Hill) accessible.",
    last_updated: "2026-07-15T12:00:00Z"
  },
  "tumpak-sewu": {
    name: "Tumpak Sewu Waterfall Ravine Trail",
    status: "caution",
    details: "Water levels elevated due to afternoon rainfall. Use caution on the lower descent paths.",
    last_updated: "2026-07-15T12:00:00Z"
  },
  "pantai-3-warna": {
    name: "Pantai 3 Warna Conservation Path",
    status: "open",
    details: "All beach pathways open. Swimming allowed in designated colored zones.",
    last_updated: "2026-07-15T12:00:00Z"
  },
  "coban-pelangi": {
    name: "Coban Pelangi Waterfall Trail",
    status: "open",
    details: "Trail open and dry. Safe for walking down to the river bed.",
    last_updated: "2026-07-15T12:00:00Z"
  },
  "pulau-sempu": {
    name: "Pulau Sempu Nature Trail",
    status: "caution",
    details: "Hutan trail path is muddy and slick. Only allowed with registered local guides.",
    last_updated: "2026-07-15T12:00:00Z"
  },
  "budug-asu": {
    name: "Budug Asu Ridge Road",
    status: "open",
    details: "Dry, clear conditions on the dirt track. Accessible to offroad vehicles.",
    last_updated: "2026-07-15T12:00:00Z"
  },
  "jatim-park-1": {
    name: "Jatim Park 1 Walkways",
    status: "open",
    details: "Amusement park trails completely open and safe.",
    last_updated: "2026-07-15T12:00:00Z"
  },
  "museum-angkut": {
    name: "Museum Angkut Exhibit Halls",
    status: "open",
    details: "Indoor and outdoor vintage galleries open to visitors.",
    last_updated: "2026-07-15T12:00:00Z"
  },
  "kayutangan-heritage": {
    name: "Kayutangan Heritage Zone",
    status: "open",
    details: "Colonial residential streets and historic buildings open to the public.",
    last_updated: "2026-07-15T12:00:00Z"
  },
  "sumber-sirah": {
    name: "Sumber Sirah Springs",
    status: "open",
    details: "Spring pool and surrounding paddy paths open and clear.",
    last_updated: "2026-07-15T12:00:00Z"
  },
  "nakoa-coffee": {
    name: "Nakoa Coffee space",
    status: "open",
    details: "Workspace completely open.",
    last_updated: "2026-07-15T12:00:00Z"
  }
};

const FALLBACK_FEES: Record<string, PlaceFeeData> = {
  "mount-bromo": {
    domestic_entry: 34000,
    foreign_entry: 220000,
    transport_cost: 650000,
    parking_cost: 10000,
    notes: "Jeep hire is cash-only and mandatory to navigate the sea of sand to the crater. Entrance tickets are also checked at gates.",
    atm_info: "Last reliable ATMs are located in Sukapura (18km) or Tumpang (22km). No ATMs exist near the crater.",
  },
  "tumpak-sewu": {
    domestic_entry: 10000,
    foreign_entry: 50000,
    transport_cost: 0,
    parking_cost: 5000,
    notes: "Descent trail safety guides at the bottom cost approximately IDR 100,000 in cash. Fully optional.",
    atm_info: "Nearest ATM is at the Pronojiwo local market (3km away).",
  },
  "pantai-3-warna": {
    domestic_entry: 10000,
    foreign_entry: 100000,
    transport_cost: 150000,
    parking_cost: 10000,
    notes: "Pre-booking is mandatory. Guide is required for ecological protection of conservation zone.",
    atm_info: "Nearest ATM is in Sendang Biru village (2.5km away) but it frequently runs out of cash.",
  },
  "coban-pelangi": {
    domestic_entry: 15000,
    foreign_entry: 50000,
    transport_cost: 0,
    parking_cost: 5000,
    notes: "Traditional food and hot drinks stalls near the entrance are cash-only.",
    atm_info: "Last reliable ATM is at Poncokusumo village center (8km away).",
  },
  "pulau-sempu": {
    domestic_entry: 20000,
    foreign_entry: 150000,
    transport_cost: 150000,
    parking_cost: 10000,
    notes: "Permit must be obtained at the Sendang Biru conservation office. Boat transport is cash-only.",
    atm_info: "ATM availability at Sendang Biru is extremely limited. Withdraw cash in Malang or Turen.",
  },
  "budug-asu": {
    domestic_entry: 15000,
    foreign_entry: 50000,
    transport_cost: 200000,
    parking_cost: 5000,
    notes: "Motorcycle trail access fee is IDR 20,000. Spot is heavily cash-only.",
    atm_info: "Nearest ATMs are at Lawang town center (12km away).",
  },
  "jatim-park-1": {
    domestic_entry: 100000,
    foreign_entry: 120000,
    transport_cost: 0,
    parking_cost: 10000,
    notes: "Cards and electronic payments (QRIS) are accepted at the main ticket counters.",
    atm_info: "Several major banks have ATM kiosks directly at the main entrance gate.",
  },
  "museum-angkut": {
    domestic_entry: 110000,
    foreign_entry: 130000,
    transport_cost: 0,
    parking_cost: 10000,
    notes: "QRIS and card payment options are widely available at all ticketing points.",
    atm_info: "There are ATMs located inside the floating market area and near the ticket boxes.",
  },
  "kayutangan-heritage": {
    domestic_entry: 5000,
    foreign_entry: 15000,
    transport_cost: 0,
    parking_cost: 3000,
    notes: "Kawasan Heritage is open to the public; fee is for the inside residential kampung tour.",
    atm_info: "Located in Malang city center. Dozens of ATMs are accessible within a 5-minute walk.",
  },
  "sumber-sirah": {
    domestic_entry: 5000,
    foreign_entry: 15000,
    transport_cost: 0,
    parking_cost: 3000,
    notes: "River tube rental is IDR 10,000 in cash. Bring plastic bags for wet money.",
    atm_info: "Nearest ATM is at the Gondanglegi district main road (4.5km away).",
  },
  "nakoa-coffee": {
    domestic_entry: 0,
    foreign_entry: 0,
    transport_cost: 0,
    parking_cost: 2000,
    notes: "Cafe space. Payment can be fully made via Credit/Debit cards or QRIS.",
    atm_info: "There is an ATM kiosk at the convenience store right across the street.",
  }
};

const FALLBACK_ALTITUDES: Record<string, PlaceAltitudeAdvisorData> = {
  "mount-bromo": { altitude: 2329, temp_range: "3°C - 15°C", packing_list: "Thick Winter Jacket, Gloves, Beanie, Scarf, Closed Hiking Shoes" },
  "tumpak-sewu": { altitude: 500, temp_range: "20°C - 28°C", packing_list: "Waterproof Shoes/Sandals, Change of Clothes, Dry Bag, Raincoat" },
  "pantai-3-warna": { altitude: 5, temp_range: "25°C - 32°C", packing_list: "Swimwear, Sunscreen, Change of Clothes, Waterproof Bag, Sandals" },
  "coban-pelangi": { altitude: 1300, temp_range: "14°C - 21°C", packing_list: "Light Jacket, Non-slip Sneakers, Umbrella/Raincoat" },
  "pulau-sempu": { altitude: 5, temp_range: "24°C - 31°C", packing_list: "Sturdy Hiking Shoes, Mosquito Repellent, Tent (if camping), Headlamp" },
  "budug-asu": { altitude: 1400, temp_range: "13°C - 20°C", packing_list: "Windbreaker, Hiking boots, Warm Layer" },
  "jatim-park-1": { altitude: 900, temp_range: "18°C - 25°C", packing_list: "Comfortable Sneakers, Cap, Light Casual clothing" },
  "museum-angkut": { altitude: 900, temp_range: "18°C - 25°C", packing_list: "Casual Walking Shoes, Camera, Light Clothes" },
  "kayutangan-heritage": { altitude: 440, temp_range: "22°C - 30°C", packing_list: "Comfortable Sandals/Shoes, Camera, Light Summer clothing" },
  "sumber-sirah": { altitude: 350, temp_range: "23°C - 30°C", packing_list: "Towels, Change of Clothes, Swimming gear, Goggles" },
  "nakoa-coffee": { altitude: 440, temp_range: "22°C - 28°C", packing_list: "Laptop, Casual Wear, Charger" }
};

const PlaceDetail = () => {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [origin, setOrigin] = useState("");
  const [calcState, setCalcState] = useState<'idle' | 'loading' | 'done'>('idle');
  const [calcResult, setCalcResult] = useState({ time: "", dist: "" });

  const [pageReady, setPageReady] = useState(false);
  useEffect(() => {
    const t2 = setTimeout(() => setPageReady(true), 200);
    return () => clearTimeout(t2);
  }, []);

  const [safety, setSafety] = useState<PlaceSafetyData | null>(null);
  const [fees, setFees] = useState<PlaceFeeData | null>(null);
  const [altitude, setAltitude] = useState<PlaceAltitudeAdvisorData | null>(null);

  useEffect(() => {
    if (!slug) return;

    const setSafetyWithContext = (data: Omit<PlaceSafetyData, 'contextType'>) => {
      const isMtn =
        slug?.includes("bromo") ||
        slug?.includes("semeru") ||
        slug?.includes("budug") ||
        slug?.includes("asu");
      setSafety({
        ...data,
        contextType: isMtn ? "trail" : "urban",
      } as PlaceSafetyData);
    };

    // 1. Fetch Safety Status with Fallback
    fetch("/api/safety")
      .then((r) => r.json())
      .then((d: unknown) => {
        if (Array.isArray(d)) {
          const m = d.find((i: Record<string, unknown>) => i.slug === slug);
          if (m) {
            setSafetyWithContext(m as PlaceSafetyData);
            return;
          }
        }
        if (FALLBACK_SAFETY[slug]) {
          setSafetyWithContext(FALLBACK_SAFETY[slug]);
        }
      })
      .catch(() => {
        if (FALLBACK_SAFETY[slug]) {
          setSafetyWithContext(FALLBACK_SAFETY[slug]);
        }
      });

    // 2. Fetch Attraction Fees with Fallback
    fetch("/api/fees")
      .then((r) => r.json())
      .then((d: unknown) => {
        if (Array.isArray(d)) {
          const m = d.find((i: Record<string, unknown>) => i.slug === slug);
          if (m) {
            setFees(m as PlaceFeeData);
            return;
          }
        }
        if (FALLBACK_FEES[slug]) {
          setFees(FALLBACK_FEES[slug]);
        }
      })
      .catch(() => {
        if (FALLBACK_FEES[slug]) {
          setFees(FALLBACK_FEES[slug]);
        }
      });

    // 3. Fetch Altitude Advisor with Fallback
    fetch("/api/altitudes")
      .then((r) => r.json())
      .then((d: unknown) => {
        if (Array.isArray(d)) {
          const m = d.find((i: Record<string, unknown>) => i.slug === slug);
          if (m) {
            setAltitude(m as PlaceAltitudeAdvisorData);
            return;
          }
        }
        if (FALLBACK_ALTITUDES[slug]) {
          setAltitude(FALLBACK_ALTITUDES[slug]);
        }
      })
      .catch(() => {
        if (FALLBACK_ALTITUDES[slug]) {
          setAltitude(FALLBACK_ALTITUDES[slug]);
        }
      });
  }, [slug]);

  const toSlug = (text: string) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-");

  let found: Place | null = null;
  let categoryKey = "";
  for (const catKey of Object.keys(activitiesData)) {
    const p = activitiesData[catKey].places.find((pl) => toSlug(pl.title) === slug);
    if (p) {
      found = p;
      categoryKey = catKey;
      break;
    }
  }
  const data = found;

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return R * c;
  };

  const getNearbyPlacesList = (): any[] => {
    if (!data || !data.location || !data.location.lat || !data.location.lng) return [];
    
    const allPlaces: any[] = [];
    Object.values(activitiesData).forEach((category: any) => {
      category.places.forEach((p: any) => {
        if (p.title === data.title) return;
        
        if (p.location && p.location.lat && p.location.lng) {
          const dist = calculateDistance(
            data.location.lat, 
            data.location.lng, 
            p.location.lat, 
            p.location.lng
          );
          allPlaces.push({
            ...p,
            distanceKm: dist
          });
        }
      });
    });

    const uniquePlaces = allPlaces.filter((item, index, self) =>
      self.findIndex(t => t.title === item.title) === index
    );

    uniquePlaces.sort((a, b) => a.distanceKm - b.distanceKm);
    return uniquePlaces.slice(0, 3);
  };

  const nearbyPlacesList = getNearbyPlacesList();

  const items = data
    ? categoryKey === "culinary"
      ? (data.signatureDishes || []).map((dish: any) => ({
          title: dish.name,
          desc: dish.desc,
          image: dish.image,
          badge: `${t("placeDetail.signatureDishesTitle") || "Signature Dish"} • ${dish.price}`,
        }))
      : [
          ...(data.keyAttractions || []).map((attr: any) => ({
            ...attr,
            badge: t("placeDetail.attractionBadge"),
            title: attr.title,
          })),
          ...(data.thingsToDo || []).map((act: any) => ({
            ...act,
            badge: act.difficulty ? `${t("placeDetail.activityBadge")} • ${act.difficulty}` : t("placeDetail.activityBadge"),
            title: act.title || act.name,
          })),
        ]
    : [];





  const isMountain =
    slug?.includes("bromo") ||
    slug?.includes("semeru") ||
    slug?.includes("budug") ||
    slug?.includes("asu") ||
    data?.title?.toLowerCase().includes("mount") ||
    data?.title?.toLowerCase().includes("gunung") ||
    data?.title?.toLowerCase().includes("bukit") ||
    data?.title?.toLowerCase().includes("puncak") ||
    data?.title?.toLowerCase().includes("volcano");



  // Set page title
  useEffect(() => {
    if (data?.title) document.title = `${data.title} — Malang`;
  }, [data?.title]);

  if (!pageReady || !data) {
    return (
      <div className="w-full min-h-screen bg-[#f5f4f0] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-[#A3B18A]/30 border-t-[#A3B18A] rounded-full animate-spin" />
          <p className="text-sm text-[#2D221F]/40">{t("app.loading")}</p>
        </div>
      </div>
    );
  }

  const SectionTitle = ({ title, inverted = false }: { title: string; inverted?: boolean }) => (
    <div className="mb-10">
      <h2
        className={`text-editorial text-2xl md:text-3xl uppercase tracking-tighter leading-none mb-4 ${
          inverted ? "text-white" : "text-[#2D221F]"
        }`}
      >
        {title}
      </h2>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-[#f5f4f0] text-[#2D221F] font-sans selection:bg-[#2D221F]/10">
      {/* FLOAT BACK BUTTON */}
      <BackButton />

      {/* 1. HERO */}
      <section className="relative w-full min-h-[85vh] md:h-screen overflow-hidden bg-[#2D221F]">
        {data.heroImage && (
          <img
            src={data.heroImage}
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D221F] via-[#2D221F]/20 to-[#2D221F]/40" />

        <div className="absolute inset-4 md:inset-6 lg:inset-8 border border-white/10 z-10 pointer-events-none rounded-2xl mix-blend-overlay hidden md:block" />

        <div className="absolute inset-0 px-5 sm:px-8 md:px-16 lg:px-32 z-10 flex flex-col justify-end h-full max-w-[1400px] mx-auto w-full pb-12 sm:pb-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl flex flex-col items-start"
          >
            {data.tagline && (
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <span className="text-swiss text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#A3B18A] uppercase">
                  {data.tagline}
                </span>
              </div>
            )}
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[8rem] text-editorial font-black uppercase tracking-tighter leading-[0.9] md:leading-[0.85] text-white text-balance mb-4 md:mb-6">
              {data.title}
            </h1>
            <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-medium text-balance py-1">
              {data.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. TIKET & JAM OPERASIONAL */}
      {categoryKey !== "culinary" && data.basicInfo && (
        <section className="py-8 md:py-12 relative overflow-hidden">
          <svg
            className="absolute top-0 right-0 w-[400px] h-[400px] text-[#2D221F] opacity-[0.02] translate-x-1/4 -translate-y-1/4 pointer-events-none"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 lg:px-32 relative z-10">
            <SectionTitle title={categoryKey === "culinary" ? t("placeDetail.openingHours") : t("placeDetail.ticketHours")} />
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 flex-1">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#A3B18A]/10 border border-[#A3B18A]/20 flex items-center justify-center text-[#A3B18A] shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-swiss text-[10px] font-bold tracking-[0.15em] uppercase text-[#2D221F]/40 mb-1">
                      {t("placeDetail.openingHours")}
                    </h4>
                    <span className="text-lg md:text-xl font-medium text-[#2D221F] leading-snug block">
                      {data.basicInfo.hours}
                    </span>
                  </div>
                </div>
                {categoryKey !== "culinary" && (
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-[#A3B18A]/10 border border-[#A3B18A]/20 flex items-center justify-center text-[#A3B18A] shrink-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-swiss text-[10px] font-bold tracking-[0.15em] uppercase text-[#2D221F]/40 mb-1">
                        {t("placeDetail.ticketPrice")}
                      </h4>
                      <span className="text-lg md:text-xl font-medium text-[#2D221F] leading-snug block whitespace-pre-wrap">
                        {data.basicInfo.price}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              {data.basicInfo.ticketLink && (
                <div className="shrink-0">
                  <a
                    href={data.basicInfo.ticketLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#2D221F] text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-full hover:bg-[#A3B18A] transition-all duration-300"
                  >
                    {t("placeDetail.buyTicket")}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 2.5 TRAVEL ADVISORIES & WIDGETS */}
      {categoryKey !== "culinary" && (safety || fees || altitude || (isMountain && data.location)) && (
        <section className="py-8 md:py-12">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 lg:px-32">
            <SectionTitle title={t("placeDetail.safetyInfo")} />

            {safety && (
              <div className="mb-8 bg-white text-[#2D221F] rounded-2xl overflow-hidden border border-[#2D221F]/10 hover:border-[#2D221F]/30 transition-colors duration-300">
                <PlaceSafetyAdvisory safety={safety} />
              </div>
            )}

            <div className="space-y-6 md:space-y-8 mt-8">
              {/* Row 1: Mountain Sunrise Predictor (Full width if active) */}
              {isMountain && data.location && (
                <div className="bg-white text-[#2D221F] rounded-2xl overflow-hidden border border-[#2D221F]/10 hover:border-[#2D221F]/30 transition-colors duration-300 w-full">
                  <MountainSunrisePredictor lat={data.location.lat} lng={data.location.lng} />
                </div>
              )}

              {/* Row 2: Cash & Altitude Advisors (Side-by-side if both active, full-width if only one is active) */}
              {((fees && slug) || altitude) && (
                <div className={`grid grid-cols-1 ${
                  (fees && slug) && altitude ? "md:grid-cols-2" : "grid-cols-1"
                } gap-6 lg:gap-8`}>
                  {fees && slug && (
                    <div className="bg-white text-[#2D221F] rounded-2xl overflow-hidden border border-[#2D221F]/10 hover:border-[#2D221F]/30 transition-colors duration-300">
                      <PlaceCashAdvisor slug={slug} fees={fees} />
                    </div>
                  )}
                  {altitude && (
                    <div className="bg-white text-[#2D221F] rounded-2xl overflow-hidden border border-[#2D221F]/10 hover:border-[#2D221F]/30 transition-colors duration-300">
                      <PlaceAltitudeAdvisor altitude={altitude} />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CULINARY-SPECIFIC SECTION: DINING DETAILS & SIGNATURE DISHES */}
      {categoryKey === "culinary" && (
        <>
          {/* A. Dining Details Grid */}
          <section className="py-8 md:py-12">
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 lg:px-32">
              <SectionTitle title={t("placeDetail.diningInfoTitle") || "Dining Details"} />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                
                {/* Opening Hours */}
                <div className="bg-white p-6 rounded-2xl border border-[#2D221F]/10 flex flex-col justify-between hover:border-[#2D221F]/30 transition-all duration-300">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#A3B18A] mb-1">
                      {t("placeDetail.openingHours")}
                    </div>
                    <h4 className="text-xl font-bold text-[#2D221F] mb-2">
                      Hours of Operation
                    </h4>
                    <p className="text-sm text-[#2D221F]/70">
                      {data.basicInfo?.hours || "10:00 - 22:00"}
                    </p>
                  </div>
                </div>

                {/* Price Range */}
                <div className="bg-white p-6 rounded-2xl border border-[#2D221F]/10 flex flex-col justify-between hover:border-[#2D221F]/30 transition-all duration-300">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#A3B18A] mb-1">
                      Price Range
                    </div>
                    <h4 className="text-xl font-bold text-[#2D221F] mb-2">
                      Per Person
                    </h4>
                    <p className="text-sm text-[#2D221F]/70">
                      {data.priceRange || "Rp 25.000 - Rp 60.000"}
                    </p>
                  </div>
                </div>

                {/* Ambience / Vibe */}
                <div className="bg-white p-6 rounded-2xl border border-[#2D221F]/10 flex flex-col justify-between hover:border-[#2D221F]/30 transition-all duration-300">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#A3B18A] mb-1">
                      Ambience & Vibe
                    </div>
                    <h4 className="text-xl font-bold text-[#2D221F] mb-2">
                      Atmosphere
                    </h4>
                    <p className="text-sm text-[#2D221F]/70">
                      {data.ambience || "Casual Dining"}
                    </p>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="bg-white p-6 rounded-2xl border border-[#2D221F]/10 flex flex-col justify-between hover:border-[#2D221F]/30 transition-all duration-300">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#A3B18A] mb-1">
                      Payment Methods
                    </div>
                    <h4 className="text-xl font-bold text-[#2D221F] mb-2">
                      Accepted Types
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {(data.paymentMethods || ["Cash", "QRIS"]).map((pm, i) => (
                        <span key={i} className="px-2.5 py-1 bg-[#f5f4f0] border border-[#2D221F]/5 rounded-full text-xs font-semibold text-[#2D221F]/80">
                          {pm}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </>
      )}

      {/* 4. SEJARAH & ASAL USUL */}
      {data.story && (
        <section className="py-8 md:py-12">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 lg:px-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle title={t("placeDetail.historyOrigin")} />
              <div className="relative mt-6">
                <svg
                  className="absolute -top-6 -left-6 text-[#A3B18A]/10 w-16 h-16 pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg md:text-2xl text-editorial leading-[1.6] text-[#2D221F]/80 font-medium text-balance relative z-10 max-w-4xl border-l-4 border-[#A3B18A] pl-6 py-3">
                  {data.story}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* 3. RUTE & LOKASI */}
      {data.location && (
        <section className="py-8 md:py-12">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 lg:px-32">
            <SectionTitle title={t("placeDetail.routeLocation")} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-full flex flex-col">
                <div className="bg-white p-8 md:p-10 rounded-2xl h-full flex flex-col relative overflow-hidden group border border-[#2D221F]/10 hover:border-[#A3B18A]/50 transition-colors duration-500">
                  <svg
                    className="absolute top-0 right-0 w-48 h-48 text-[#2D221F] opacity-[0.03] translate-x-1/4 -translate-y-1/4 pointer-events-none transition-transform duration-700 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                    <line x1="15" y1="3" x2="15" y2="21"></line>
                  </svg>

                  <div className="relative z-10 mb-8">
                    <h4 className="text-swiss text-[9px] font-black tracking-[0.15em] uppercase text-[#A3B18A] mb-3">
                      {t("placeDetail.liveNavigation")}
                    </h4>
                    <h3 className="text-2xl md:text-3xl text-editorial font-black text-[#2D221F] mb-3 leading-tight">
                      {t("placeDetail.travelTime")}
                    </h3>
                    <p className="text-[#2D221F]/60 text-xs md:text-sm leading-relaxed max-w-sm">
                      {t("placeDetail.travelTimeDesc")}
                    </p>
                  </div>

                  <div className="relative z-10 w-full mt-auto">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!origin) return;
                        if (calcState === "done") {
                          window.open(
                            `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
                              origin
                            )}&destination=${data.location.lat},${data.location.lng}`,
                            "_blank"
                          );
                          return;
                        }
                        setCalcState("loading");
                        setTimeout(() => {
                          const o = origin.toLowerCase();
                          let time = "2 Jam 15 Menit";
                          let dist = "65 km";
                          if (o.includes("surabaya")) {
                            time = "3 Jam 45 Menit";
                            dist = "120 km";
                          } else if (o.includes("malang")) {
                            time = "2 Jam 20 Menit";
                            dist = "53 km";
                          } else if (o.includes("batu")) {
                            time = "3 Jam";
                            dist = "75 km";
                          }
                          setCalcResult({ time, dist });
                          setCalcState("done");
                        }, 1200);
                      }}
                      className="flex flex-col relative"
                    >
                      <div className="relative flex items-center border border-[#2D221F]/10 rounded-xl focus-within:border-[#A3B18A] focus-within:ring-1 focus-within:ring-[#A3B18A]/20 transition-all bg-white z-10">
                        <div className="w-12 flex flex-col items-center justify-center shrink-0">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#A3B18A]" />
                        </div>
                        <input
                          type="text"
                          placeholder={t("placeDetail.originPlaceholder")}
                          value={origin}
                          onChange={(e) => {
                            setOrigin(e.target.value);
                            if (calcState === "done") setCalcState("idle");
                          }}
                          disabled={calcState === "loading"}
                          className="w-full py-4 pr-4 bg-transparent text-[#2D221F] placeholder-[#2D221F]/40 focus:outline-none text-sm font-medium disabled:opacity-50"
                          required
                        />
                      </div>

                      <div className="w-px h-6 border-l-2 border-dashed border-[#2D221F]/10 ml-[23px] my-1 relative z-0" />

                      <div className="relative flex items-center border border-[#2D221F]/5 rounded-xl bg-[#f5f4f0] z-10">
                        <div className="w-12 flex flex-col items-center justify-center shrink-0">
                          <svg className="text-red-400 w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                        </div>
                        <div className="w-full py-4 pr-4 text-[#2D221F] text-sm font-bold truncate">
                          {data.title}
                        </div>
                      </div>

                      {calcState === "done" && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-6 p-5 rounded-2xl bg-[#A3B18A]/10 border border-[#A3B18A]/20 flex items-center justify-between"
                        >
                          <div>
                            <p className="text-swiss text-[9px] font-black tracking-[0.15em] uppercase text-[#A3B18A] mb-1">
                              {t("placeDetail.totalJourney")}
                            </p>
                            <p className="text-[#2D221F] text-sm font-bold">{calcResult.dist}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-editorial text-[#A3B18A] leading-none">
                              {calcResult.time}
                            </p>
                          </div>
                        </motion.div>
                      )}

                      <button
                        type="submit"
                        disabled={calcState === "loading"}
                        className="w-full mt-6 py-4 bg-[#2D221F] text-white rounded-xl font-bold tracking-[0.15em] uppercase text-[9px] hover:bg-[#A3B18A] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {calcState === "idle" && <span>{t("placeDetail.calculateTime")}</span>}
                        {calcState === "loading" && <span>{t("placeDetail.calculating")}</span>}
                        {calcState === "done" && (
                          <>
                            <span>{t("placeDetail.openGoogleMaps")}</span>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Maps */}
              {data.location && (
                <div className="flex flex-col h-full gap-6">
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#2D221F]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="flex-1 pr-6 sm:border-r border-[#2D221F]/10">
                      <h4 className="text-swiss text-[9px] font-black tracking-[0.15em] uppercase text-[#2D221F]/40 mb-2">
                        Location
                      </h4>
                      <p className="text-[#2D221F] font-bold text-sm md:text-base leading-snug">
                        {data.basicInfo?.location || data.title}
                      </p>
                    </div>
                    {data.basicInfo?.rating && (
                      <div className="shrink-0">
                        <h4 className="text-swiss text-[9px] font-black tracking-[0.15em] uppercase text-[#2D221F]/40 mb-2">
                          Rating
                        </h4>
                        <div className="flex items-center gap-1.5 text-[#A3B18A] font-black text-xl">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                          {data.basicInfo.rating}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-[#2D221F]/10 bg-white p-2 flex-1 min-h-[350px]">
                    <div className="rounded-xl overflow-hidden relative h-full bg-[#f5f4f0]">
                      <iframe
                        title="Map"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: "100%" }}
                        loading="lazy"
                        allowFullScreen
                        src={`https://maps.google.com/maps?q=${data.location.lat},${data.location.lng}&z=14&output=embed`}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 5. EKSPLORASI AREA & AKTIVITAS (GALERI VISUAL & KEGIATAN) */}
      {items.length > 0 && (
        <section className="py-8 md:py-12">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 lg:px-32 relative">
            <div className="sticky top-0 z-30 bg-[#f5f4f0] pt-8 pb-6 mb-8 -mx-5 px-5 sm:-mx-8 sm:px-8 md:-mx-16 md:px-16 lg:-mx-32 lg:px-32">
              <h2 className="text-editorial text-2xl md:text-3xl uppercase tracking-tighter leading-none text-[#2D221F]">
                {categoryKey === "culinary" ? (t("placeDetail.signatureDishesTitle") || "Signature Dishes") : t("placeDetail.exploreArea")}
              </h2>
            </div>
            <div className="relative w-full space-y-6 md:space-y-8">
              {items.map((exp: any, i: number) => (
                <div
                  key={i}
                  className="sticky overflow-hidden rounded-2xl bg-white text-[#2D221F] flex flex-col md:flex-row h-[450px] md:h-[50vh] min-h-[400px] border border-[#2D221F]/5"
                  style={{
                    position: "sticky",
                    top: "15vh",
                    zIndex: i + 1,
                  }}
                >
                  <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center relative z-10">
                    <div className="inline-block px-3 py-1.5 rounded-full text-[9px] font-black tracking-[0.15em] uppercase mb-4 bg-[#f5f4f0] text-[#A3B18A] w-fit border border-[#2D221F]/5">
                      {exp.badge}
                    </div>
                    <h3 className="text-3xl md:text-4xl text-editorial font-black mb-4 leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-[#2D221F]/60 text-sm md:text-base leading-relaxed max-w-lg">
                      {exp.desc}
                    </p>
                  </div>
                  <div className="w-full md:w-7/12 h-[250px] md:h-full relative order-first md:order-last overflow-hidden">
                    <ParallaxImage
                      src={exp.image || `https://picsum.photos/seed/bromo${i}/800/600`}
                      alt={exp.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-white/30 via-[25%] to-transparent pointer-events-none z-10" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. WAKTU TERBAIK KUNJUNGAN */}
      {categoryKey !== "culinary" && data.bestTime && data.bestTime.length > 0 && (
        <section className="py-8 md:py-12">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 lg:px-32">
            <SectionTitle title={t("placeDetail.bestTime")} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {data.bestTime.map((bt: any, i: number) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row gap-6 p-8 bg-white border border-[#2D221F]/10 rounded-2xl group hover:border-[#2D221F]/30 transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 border border-[#2D221F]/10 bg-[#f5f4f0] transition-colors"
                    style={{ color: bt.color || "#A3B18A" }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl md:text-2xl font-black text-editorial text-[#2D221F]">
                        {bt.label}
                      </h3>
                      <span
                        className="px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase bg-[#f5f4f0] border border-[#2D221F]/5"
                        style={{ color: bt.color || "#A3B18A" }}
                      >
                        {bt.badge}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-[#2D221F]/70 leading-relaxed font-medium">
                      {bt.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}



      {/* 7. DO'S & DON'TS */}
      {categoryKey !== "culinary" && data.visitorTips && (
        <section className="py-8 md:py-12">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 lg:px-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Do's Column */}
              <div className="flex flex-col">
                <h2 className="text-editorial text-2xl md:text-3xl uppercase tracking-tighter leading-none text-[#2D221F] mb-8">
                  DO
                </h2>
                <div className="flex flex-col gap-6">
                  {[...data.visitorTips.bring, ...(data.visitorTips.insiderTips || [])]
                    .slice(0, 4)
                    .map((item, i) => (
                      <div
                        key={i}
                        className="group flex items-start gap-5 pb-6 border-b border-[#2D221F]/10 hover:border-[#A3B18A] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full border border-[#2D221F]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#A3B18A] group-hover:bg-[#A3B18A]/10 transition-colors">
                          <svg
                            className="w-4 h-4 text-[#2D221F]/30 group-hover:text-[#A3B18A] transition-colors"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p className="text-sm md:text-base font-medium text-[#2D221F]/70 leading-relaxed group-hover:text-[#2D221F] transition-colors">
                          {item}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Don'ts Column */}
              <div className="flex flex-col mt-12 md:mt-0">
                <h2 className="text-editorial text-2xl md:text-3xl uppercase tracking-tighter leading-none text-[#2D221F] mb-8">
                  DON'T
                </h2>
                <div className="flex flex-col gap-6">
                  {data.visitorTips.avoid.slice(0, 4).map((item, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-5 pb-6 border-b border-[#2D221F]/10 hover:border-red-500 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full border border-[#2D221F]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-red-500 group-hover:bg-red-500/10 transition-colors">
                        <svg
                          className="w-4 h-4 text-[#2D221F]/30 group-hover:text-red-500 transition-colors"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </div>
                      <p className="text-sm md:text-base font-medium text-[#2D221F]/70 leading-relaxed group-hover:text-[#2D221F] transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. FUN FACTS */}
      {data.funFacts && (
        <section className="py-8 md:py-12">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 lg:px-32 relative">
            <SectionTitle title="Fun Facts" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {data.funFacts.map((fact: string, i: number) => (
                <div key={i} className="border-l-2 border-[#2D221F]/10 pl-6">
                  <div className="text-editorial text-5xl md:text-6xl font-black text-[#2D221F]/10 mb-4 leading-none">
                    0{i + 1}
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed text-[#2D221F]/70">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. BERITA TERKINI DESTINASI */}
      {data && (
        <NewsEntrance query={data.title} />
      )}

      {/* 9.5 JELAJAHI SEKITAR */}
      {nearbyPlacesList.length > 0 && (
        <section className="py-8 md:py-12">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 lg:px-32">
            <SectionTitle title={t("placeDetail.nearbyTitle")} />
            <p className="text-xs md:text-sm leading-relaxed text-[#2D221F]/60 mt-2 max-w-md">
              {t("placeDetail.nearbyDesc")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {nearbyPlacesList.map((place: any, i: number) => (
                <div
                  key={i}
                  onClick={() => navigate(`/place/${toSlug(place.title)}`)}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#2D221F]/10 hover:border-[#2D221F]/30 transition-all duration-300 cursor-pointer flex flex-col h-full"
                >
                  {/* Image Header with subtle hover zoom */}
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src={place.heroImage} 
                      alt={place.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#A3B18A] text-white text-[9px] font-black tracking-[0.15em] uppercase px-3 py-1.5 rounded-full shadow-sm">
                      {place.distanceKm < 1 ? `${(place.distanceKm * 1000).toFixed(0)} m` : `± ${place.distanceKm.toFixed(1)} km`}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-editorial text-xl font-black text-[#2D221F] mb-2 leading-tight uppercase group-hover:text-[#A3B18A] transition-colors">
                      {place.title}
                    </h3>
                    <p className="text-xs text-[#2D221F]/60 leading-relaxed font-sans line-clamp-3 mb-6">
                      {place.description}
                    </p>
                    
                    {/* Minimal interactive CTA at bottom */}
                    <div className="mt-auto pt-4 border-t border-[#2D221F]/5 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#2D221F]/80 group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1 font-sans">
                        {t("placeDetail.exploreSpot")}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. CLOSING CTA */}
      {data.closingCTA && (
        <section className="py-24 md:py-32 bg-[#A3B18A] text-[#2D221F]">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 lg:px-32 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto flex flex-col items-center"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="opacity-20 mb-8"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-swiss text-xl md:text-2xl font-medium leading-relaxed mb-12 text-balance text-center">
                "{data.closingCTA}"
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-4 px-8 py-4 bg-[#2D221F] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-[#2D221F] transition-all duration-300"
              >
                {t("placeDetail.planTrip")}
              </button>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PlaceDetail;
