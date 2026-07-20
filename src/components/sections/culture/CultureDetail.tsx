import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImageWithSkeleton } from "../../shared/Skeleton";
import BackButton from "../../shared/parts/BackButton";
import { CULTURE_ENTRIES } from "./cultureData";

const fade = (d: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: d, ease: [0.16, 1, 0.3, 1] as const },
});

export default function CultureDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const entry = CULTURE_ENTRIES.find((e) => e.slug === slug);

  if (!entry) {
    return (
      <div className="min-h-screen bg-[#f5f4f0] flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-bold text-[#1a1a1a]/60">Not found</p>
          <button onClick={() => navigate("/culture")} className="mt-4 text-sm text-[#A3B18A] hover:underline cursor-pointer">
            Back to culture
          </button>
        </div>
      </div>
    );
  }

  const { palette } = entry.decoration;
  const siblings = CULTURE_ENTRIES.filter((e) => e.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.surface }}>
      <BackButton to="/culture" />

      <div className="mx-auto max-w-[80%] py-12 sm:py-16 lg:py-20">
        <motion.h1
          {...fade(0)}
          className="text-3xl sm:text-4xl lg:text-[3rem] font-bold text-[#1a1a1a] leading-[1.1] tracking-tight mb-4"
        >
          {entry.title}
        </motion.h1>

        <motion.p
          {...fade(0.05)}
          className="text-lg sm:text-xl font-medium leading-relaxed mb-8 sm:mb-10"
          style={{ color: palette.primary + "cc" }}
        >
          {entry.hook}
        </motion.p>

        <motion.div
          {...fade(0.1)}
          className="w-full h-[300px] sm:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden mb-8 sm:mb-10 bg-black/5"
        >
          <ImageWithSkeleton
            src={entry.imageUrl ?? ""}
            alt={entry.title}
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full"
          />
        </motion.div>

        <div className="w-10 h-0.5 mb-8 sm:mb-10" style={{ backgroundColor: palette.primary + "40" }} />

        <div className="space-y-6 sm:space-y-8">
          {entry.content.map((paragraph, i) => (
            <motion.p
              key={paragraph}
              {...fade(0.05 + i * 0.03)}
              className="text-[17px] sm:text-[18px] leading-[1.8] sm:leading-[1.9] text-[#1a1a1a]/70"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {entry.whereToExperience.length > 0 && (
          <>
            <div className="w-10 h-0.5 my-10 sm:my-14" style={{ backgroundColor: palette.primary + "40" }} />

            <motion.div {...fade(0.25)}>
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
          </>
        )}

        {siblings.length > 0 && (
          <>
            <div className="w-10 h-0.5 my-10 sm:my-14" style={{ backgroundColor: palette.primary + "40" }} />

            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/40 mb-6">Continue Reading</h3>
              <div className="flex flex-col gap-6">
                {siblings.map((s) => (
                  <button key={s.slug} onClick={() => navigate(`/culture/${s.slug}`)} className="flex items-center gap-4 text-left group">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-black/5 shrink-0">
                      <img src={s.imageUrl} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-base font-bold text-[#1a1a1a] leading-snug group-hover:opacity-70 transition-opacity">{s.title}</h4>
                      <p className="text-sm text-[#1a1a1a]/50 mt-1">{s.hook}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
