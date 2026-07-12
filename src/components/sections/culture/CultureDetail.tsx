import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import BackButton from "../../shared/parts/BackButton";

const fade = (d: number) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: d, ease: [0.16, 1, 0.3, 1] } });

export default function CultureDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const entry = CULTURE_ENTRIES.find((e) => e.slug === slug);

  if (!entry) {
    return (
      <div className="min-h-screen bg-[#f5f4f0] flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-bold text-[#0A0A0A]/60 mb-4">Culture not found</p>
          <button onClick={() => navigate("/culture")} className="text-sm font-bold uppercase tracking-wider text-[#A3B18A] hover:underline cursor-pointer">
            ← Back to cultures
          </button>
        </div>
      </div>
    );
  }

  const { palette } = entry.decoration;
  const currentIndex = CULTURE_ENTRIES.findIndex((e) => e.slug === slug);
  const siblings = CULTURE_ENTRIES.filter((e) => e.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* ── Full-screen hero image with text overlaid ── */}
      <div className="relative h-screen overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0">
          {entry.imageUrl && (
            <img src={entry.imageUrl} alt="" className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        </motion.div>

        <BackButton to="/culture" />

        <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 sm:p-8 lg:p-12 xl:p-16 swiss-container">
          <motion.div {...fade(0.1)} className="flex items-center gap-3 text-white/50 text-xs sm:text-sm font-black uppercase tracking-[0.22em] mb-4">
            <span>{entry.origin}</span>
          </motion.div>
          <motion.h1 {...fade(0.15)} className="text-editorial text-[clamp(2.8rem,7vw,7rem)] text-white leading-[0.88] tracking-tight mb-4 max-w-4xl">
            {entry.title}
          </motion.h1>
          <motion.p {...fade(0.2)} className="text-sm sm:text-base text-white/60 font-medium leading-relaxed max-w-2xl">
            {entry.hook}
          </motion.p>
        </div>
      </div>

      {/* ── Story body ── */}
      <div className="swiss-container py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-10 lg:gap-16">
          {/* Left: text */}
          <motion.div {...fade(0.1)} className="space-y-6 lg:space-y-7">
            <motion.p {...fade(0.15)} className="text-lg sm:text-xl font-semibold leading-relaxed" style={{ color: palette.primary }}>
              {entry.subtitle}
            </motion.p>
            {entry.content.map((p, i) => (
              <motion.p key={i} {...fade(0.2 + i * 0.04)} className="text-[16px] lg:text-[18px] leading-[1.9] text-[#1a1a1a]/70">
                {p}
              </motion.p>
            ))}
          </motion.div>

          {/* Right: framed photo */}
          <motion.figure {...fade(0.15)} className="w-full rounded-[28px] overflow-hidden border border-black/8 shadow-[0_12px_36px_rgba(0,0,0,0.06)] bg-white/70">
            {entry.imageUrl && (
              <img src={entry.imageUrl} alt="" className="w-full aspect-[4/5] lg:aspect-[3/4] object-cover" />
            )}
          </motion.figure>
        </div>

        {/* ── Where to experience ── */}
        <motion.div {...fade(0.25)} className="mt-16 lg:mt-20 pt-10 border-t border-black/10">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#A3B18A] mb-5">
            Where to experience
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {entry.whereToExperience.map((place, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/60 border border-black/8">
                <FontAwesomeIcon icon={faLocationDot} className="text-sm shrink-0" style={{ color: palette.primary, opacity: 0.6 }} />
                <span className="text-sm font-medium text-[#1a1a1a]/70">{place}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── More cultures ── */}
        <motion.div {...fade(0.3)} className="mt-16 lg:mt-20 pt-10 border-t border-black/10">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#A3B18A] mb-5">More cultures</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siblings.map((e) => (
              <button
                key={e.slug}
                onClick={() => navigate(`/culture/${e.slug}`)}
                className="text-left rounded-[20px] border border-black/8 bg-white/80 p-4 sm:p-5 hover:bg-white transition-all"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: e.decoration.palette.primary }}>{e.era}</p>
                <h2 className="text-base font-bold leading-tight mt-1" style={{ color: e.decoration.palette.primary }}>{e.title}</h2>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
